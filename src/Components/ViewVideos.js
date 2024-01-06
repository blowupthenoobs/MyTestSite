import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import likes from '../Images/thumbs-up-regular.svg'
import eye from '../Images/eye-solid.svg'

export default function ViewVideos() {

  var navigate = useNavigate();

    var id = sessionStorage.getItem("vidId");
    var [video, setVideo] = useState({});

    var [allVideos, setAllVideos] = useState([]);

    function viewVid(id){
      sessionStorage.setItem("vidId", id);
      navigate("/viewvideos");
      window.location.reload();
  }

    useEffect(()=>{
        async function getData(){
            var response = await fetch("http://localhost:8080/videos/"+id);
            var data = await response.json();
            console.log(data);
            setVideo(data);

            response = await fetch("http://localhost:8080/videos");
            data = await response.json();
            setAllVideos(data);
            console.log(data);
        }

        getData();
    }, [id])


  return (
    <div className="viewVideo-container">
      <div className='mainvid-container'>
        <div className='vid-container'>
          <video src={video.video} width="100%" height="100%" poster={video.image} controls></video>
        </div>
        <h1>{video.title}</h1>
        <h2>{video.channel}</h2>
        <p><img src={likes} alt='Likes ' width={20}/> {video.likes} <img src={eye} alt='Views' width={20}/>{video.views}</p>
        <p>{video.description}</p>

        <div className="comment-container">
        {video.comments?.map((item)=>{
          return(
            <div className="comments">
              <h3>{item.name}</h3>
              <p>{item.comment}</p>
            </div>
          )
        })}
      </div>
      </div>

      <div className="suggested-video-container">
        {allVideos.map((item)=>{
          if(item.id !==id)
          {
            return(
            
            <div className="suggested-video" onClick={()=>viewVid(item.id)}>
              <div className='other-thumbnails'>
                <img src={item.image} height="100%" alt='video'/>
              </div>

              <div className='content'>
                <h4>{item.title}</h4>
                <p>{item.channel}</p>
              </div>
            </div>
            )
          }
          else{
            return null;
          }
          
        })}
      </div>
      
    </div>
  )
}
