import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Videos() {
    var [videos, setVideos] = useState([]);
    var navigate = useNavigate();

    function viewVid(id){
        sessionStorage.setItem("vidId", id);
        navigate("/viewvideos");
    }

    useEffect(()=>{
        async function getData(){
            var response = await fetch("http://localhost:8080/videos")
            var data = await response.json();
            console.log(data);
            setVideos(data)
        }

        getData();
    }, [])

    return(
        <div className='yt-container'>
            {videos.map((item)=>{
                return(
                    <div className='yt-videos' onClick={()=>viewVid(item.id)}>
                        <h1> {item.title}</h1>
                        <p><span>{item.channel}</span></p>
                        <div className="video-container">
                            <img src={item.image} alt='poster' className="yt-thumbnail" height="100%"></img>
                        </div>
                        <br/>
                        <p>Views: <span>{item.views}</span> </p>
                        <p>Likes: <span>{item.likes}</span></p>
                    </div>
                )
            })}
        </div>
    )
}