export const Movie = ({ data,overview,movieTitle}) => {
  
 

    return (
      <div className="relative" >

            <div className="thumby cursor-pointer" onMouseEnter={() => movieTitle(data.title)}
              onMouseLeave={() => movieTitle('')} > <a HREF={data.trailer}> 
                
              <img className="thumbnail " onMouseEnter={() => overview(data.plot)}
              onMouseLeave={() => overview('')}
              src={data.movie_poster} alt="img" />

            </a>
            </div>
        
        
        

      </div>
    )
  }
  

