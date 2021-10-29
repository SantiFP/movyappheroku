const express = require('express');
const app = express();
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/movyapp');
// const bcrypt = require('bcryptjs');
// const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5001;

// const path = require('path')

// app.use(bodyParser.urlencoded({ extended:false }));
// app.use(bodyParser.json());

const cors = require('cors');

app.use(cors());

// app.use(express.static (path.join(__dirname,'views')));

// app.set('views', path.join(__dirname,'views'))
// app.set('view engine', 'ejs')

// const userModel = mongoose.model('users', {name:String, email:String, password:String});

// const data = mongoose.model('movies', {id:String, title:String});

// app.post('/signup', async (request, response) => {


//     const salt = await bcrypt.genSalt(10); // el salt es numero aleatorio que utiliza el algoritmo para generar los hash//
 
//     const password = await bcrypt.hash(request.body.password, salt)

//     const newUser = {
//         name: request.body.name,
//         email: request.body.email,
//         password,
//     }
    
//     const userCreated = userModel.create({ "name":newUser.name, "email":newUser.email, "password":password});

//      if(userCreated){
//        setTimeout(()=> response.redirect("https://movyapp.herokuapp.com/login"),2000)
//      } 
// });

// app.post('/login', async (request, response) => {

//     const name = request.body.name;

//        console.log("nombre ingresado en el formulario: ", name)
   
//     const usersDB = await userModel.find(); 

//     usersDB?.map((user) => usuario={user});

//     const user = usuario.user

//         console.log("usuario encontrado: ", user )

//     const test =  user.name === name;

//        console.log('nombre obtenido de la base de datos: ', user.name)

//     // console.log('name: ', user )
//     if(!test) {  // el signo ! indica que el siguiente fragmento de codigo se ejecutara en caso de que no se haya concretado la busqueda indicada en la variable user // 
//            setTimeout(()=> response.render('login', {}),0000)
//     } else { 
//         const validPassword = await bcrypt.compare(request.body.password, user.password);
//         if (!validPassword) {
//             setTimeout(()=> response.render('login', {}),0000)
//         } else { 

//             setTimeout(()=> response.redirect("https://movyapp.herokuapp.com/movies"),0000)
              
//         }
//     }
// });

// app.get('/', async (request,response) => {

//     response.send('testecito')

// })

app.get('/movies', async (request,response) => {

    // const movies = await data.find({}); 
    response.json([{"_id":"6160ef71b4a1be63c78ed915","title":"Venom: Let There Be Carnage","movie_poster":"https://image.tmdb.org/t/p/w500//rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg","plot":"After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.","trailer":"https://www.youtube.com/watch?v=-ezfi6FQ8Ds"},{"_id":"6160f240b4a1be63c78ed91a","title":"Free Guy","movie_poster":"https://image.tmdb.org/t/p/w500//xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg","plot":"A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.","trailer":"https://www.youtube.com/watch?v=tZbNDmRGx_M"},{"_id":"6160f53ab4a1be63c78ed91d","title":"Snake Eyes: G.I. Joe Origins","movie_poster":"https://image.tmdb.org/t/p/w500//uIXF0sQGXOxQhbaEaKOi2VYlIL0.jpg","plot":"After saving the life of their heir apparent, tenacious loner Snake Eyes is welcomed into an ancient Japanese clan called the Arashikage where he is taught the ways of the ninja warrior. But, when secrets from his past are revealed, Snake Eyes' honor and allegiance will be tested – even if that means losing the trust of those closest to him.","trailer":"https://www.youtube.com/watch?v=Upk8OC8DPIs"},{"_id":"6160f580b4a1be63c78ed91e","title":"Deathstroke: Knights & Dragons - The Movie","movie_poster":"https://image.tmdb.org/t/p/w500//vFIHbiy55smzi50RmF8LQjmpGcx.jpg","plot":"Assassin Slade Wilson leads two lives: a relentless killer known as Deathstroke and a family man. Can he atone for the sins of the past-or will his family pay the ultimate price?","trailer":"https://www.youtube.com/watch?v=MsdVLe2xi9g"},{"_id":"6160f5ebb4a1be63c78ed91f","title":"Cosmic Sin","movie_poster":"https://image.tmdb.org/t/p/w500/6Wm7P6y22UZA40QuPYHyWyJ6leI.jpg","plot":"In the year 2524, four centuries after humans started colonizing the outer planets, retired General James Ford gets called back into service when a hostile alien fleet attacks soldiers on a remote planet. The threat against mankind soon escalates into an interstellar war as Ford and a team of elite soldiers try to stop the imminent attack before it's too late.","trailer":"https://www.youtube.com/watch?v=MNxsB6o6DJs"},{"_id":"6160f646b4a1be63c78ed920","title":"BAC Nord","movie_poster":"https://image.tmdb.org/t/p/w500//nLanxl7Xhfbd5s8FxPy8jWZw4rv.jpg","plot":"A police brigade working in the dangerous northern neighborhoods of Marseille, where the level of crime is higher than anywhere else in France.","trailer":"https://www.youtube.com/watch?v=eB8KbeZaGx4"},{"_id":"6160f6b5b4a1be63c78ed921","title":"Последний богатырь: Корень зла","movie_poster":"https://image.tmdb.org/t/p/w500//5VJSIAhSn4qUsg5nOj4MhQhF5wQ.jpg","plot":"Peace and tranquility have set in Belogorie. The evil was defeated and Ivan is now enjoying his well-deserved fame. He is surrounded by his family, friends and small wonders from the modern world that help him lead a comfortable life. Luckily, he has his Magic Sword to cut a gap between the worlds to get some supplies quite regularly. But when an ancient evil rises and the existence of the magic world is put to danger, Ivan has to team up with his old friends and his new rivals. They will set out on a long journey beyond the known world to find a way to defeat the enemies and to return peace to Belogorie.","trailer":"https://www.youtube.com/watch?v=cyucTMMbAPQ"},{"_id":"6160f70fb4a1be63c78ed922","title":"Dragon Fury","movie_poster":"https://image.tmdb.org/t/p/w500//6WcJ4cV2Y3gnTYp5zHu968TYmTJ.jpg","plot":"A group of soldiers are taken to the mountains of Wales to investigate a strange beast.","trailer":"https://www.youtube.com/watch?v=rKJ_r9J00-M"},{"_id":"6160f7dfb4a1be63c78ed923","title":"Solitary","movie_poster":"https://image.tmdb.org/t/p/w500//ApwmbrMlsuOay5rXQA4Kbz7qJAl.jpg","plot":"A man wakes up inside a room to discover he's a prisoner sent into space to form Earth's first colony, and worse - his cell mate Alana is hell bent on destroying everything.","trailer":"https://www.youtube.com/watch?v=mCSUeGbN6Ms"},{"_id":"6160f837b4a1be63c78ed924","title":"The Suicide Squad","movie_poster":"https://image.tmdb.org/t/p/w500//kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg","plot":"Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.","trailer":"https://www.youtube.com/watch?v=JuDLepNa7hw"},{"_id":"6160f888b4a1be63c78ed925","title":"Jungle Cruise","movie_poster":"https://image.tmdb.org/t/p/w500//9dKCd55IuTT5QRs989m9Qlb7d2B.jpg","plot":"Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his dilapidated boat. Together, they search for an ancient tree that holds the power to heal – a discovery that will change the future of medicine.","trailer":"https://www.youtube.com/watch?v=f_HvoipFcA8"},{"_id":"6160f8e3b4a1be63c78ed926","title":"疯狂的拳头","movie_poster":"https://image.tmdb.org/t/p/w500//jVAEVDNdUPRKJ7hJ4zt6lGcLATD.jpg","plot":"After an opponent dies mid-match, a prominent MMA champion swore never to fight again and retired to run his family's company. But when his best friend dies under suspicious circumstances, he has no choice but to step back in the ring.","trailer":"https://www.youtube.com/watch?v=X90E4DC1Zfk"},{"_id":"6160f935b4a1be63c78ed927","title":"The Addams Family 2","movie_poster":"https://image.tmdb.org/t/p/w500//xYLBgw7dHyEqmcrSk2Sq3asuSq5.jpg","plot":"The Addams get tangled up in more wacky adventures and find themselves involved in hilarious run-ins with all sorts of unsuspecting characters.","trailer":"https://www.youtube.com/watch?v=Kd82bSBDE84"},{"_id":"6160f987b4a1be63c78ed928","title":"F9","movie_poster":"https://image.tmdb.org/t/p/w500//bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg","plot":"Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.","trailer":"https://www.youtube.com/watch?v=fEE4RO-_jug"}])
//    response.send('ya sabe')

})

app.get('/test', async (request,response) => {

    // const movies = await data.find({}); 
    response.send('automatic deploy')
//    response.send('ya sabe')

})



app.listen(PORT, () =>{
    console.log("Server working")
})


