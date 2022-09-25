import React,{useState, useEffect} from 'react';

export function Home (){
    const [apod, setApod] = useState([]);

    useEffect(function () { // access in API call
        fetch(`https://api.nasa.gov/planetary/apod?api_key=GBqNjCux9PbRvyeEQ7hadIdR5UGwjEj3t92reehr`)
       // fetch(`${process.env.local.REACT_APP_NASA_BASE_URL}/apod?api-key=${process.env.REACT_APP_SECRET_NAME}`)
          .then((res) => res.json())
          .then((data) => setApod(data.hdurl))
    },[])
        return(
            <div>
                
                <img className ="apod-img" src={apod}></img>
            </div>
        );

}
export default Home;