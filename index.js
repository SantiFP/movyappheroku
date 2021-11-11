const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 5001;

const path = require('path')

app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

const cors = require('cors');

app.use(cors());

app.use(express.static (path.join(__dirname,'views')));

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

const MONGODB_URI = 'mongodb+srv://santiFP:4vtpIka0wi2KMaKv@usersdb-movy.imjdj.mongodb.net/movyapp?retryWrites=true&w=majority'
mongoose.connect(MONGODB_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userModel = mongoose.model('users', {name:String, email:String, password:String});

const data = mongoose.model('movies', {id:String, title:String});

app.post('/signup', async (request, response) => {


    const salt = await bcrypt.genSalt(10); // el salt es numero aleatorio que utiliza el algoritmo para generar los hash//
 
    const password = await bcrypt.hash(request.body.password, salt)

    const newUser = {
        name: request.body.name,
        email: request.body.email,
        password,
    }
    
    const userCreated = userModel.create({ "name":newUser.name, "email":newUser.email, "password":password});

     if(userCreated){
       setTimeout(()=> response.redirect("https://movyapp.herokuapp.com/login"),2005)
     } 
});

app.post('/login', async (request, response) => {

    const name = request.body.name;

    //    console.log("nombre ingresado en el formulario: ", name)
   
    const usersDB = await userModel.find(); 

    usersDB?.map((user) => usuario={user});

    const user = usuario.user

        // console.log("usuario encontrado: ", user )

    const test =  user.name === name;

    //    console.log('nombre obtenido de la base de datos: ', user.name)

    // console.log('name: ', user )
    if(!test) {  // el signo ! indica que el siguiente fragmento de codigo se ejecutara en caso de que no se haya concretado la busqueda indicada en la variable user // 
           response.render('login', {})
    } else { 
        const validPassword = await bcrypt.compare(request.body.password, user.password);
        if (!validPassword) {
            response.render('login', {})
        } else { 

            response.redirect("https://movyapp.herokuapp.com/movies")
              
        }
    }
});

app.get('/movies', async (request,response) => {

     const movies = await data.find({}); 
     response.json(movies)

})
app.listen(PORT, () =>{
    console.log("Server working")
})

