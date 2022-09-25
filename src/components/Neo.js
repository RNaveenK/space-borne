import React,{useState, useEffect} from 'react';

export function Asteroids(){
    const [neoFeed, setNeoFeed] = useState([]);

    useEffect(function () { // access in API call
        fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=GBqNjCux9PbRvyeEQ7hadIdR5UGwjEj3t92reehr`)
        //https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-09-09&end_date=2022-09-15&api_key=GBqNjCux9PbRvyeEQ7hadIdR5UGwjEj3t92reehr
       // fetch(`${process.env.local.REACT_APP_NASA_BASE_URL}/apod?api-key=${process.env.REACT_APP_SECRET_NAME}`)
          .then((res) => res.json())
          .then((data) => console.log(data))//setNeoFeed(data.hdurl)
    },[])
        return(
            <div>
                
                <img className ="apod-img" src={neoFeed}></img>
            </div>
        );

}
export default Asteroids;