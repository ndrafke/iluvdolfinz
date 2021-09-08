import React, {useState, useEffect} from 'react';
import ReactDOM, { hydrate, render } from "react-dom";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation.js';
import MountEffect from './components/MountEffect.js';


function Iluvdolfinz (){

   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
       let timer = setTimeout(() => setIsLoading(false), 1500);
        return() => {
            clearTimeout(timer);
        }

   }, []); 
   
    return(
          isLoading ? <MountEffect/> : 
            <div id="full">
                <Navigation />
            <section id="home">
                <h6>Iluvdolfinz' full-length album, "Brain Slop" now available to stream!</h6>
            <div id="album-container">
           <a href="https://open.spotify.com/album/6lhLVV61rnepb4Kj5gJRej?si=8kGZLk5XQcGGysyq7tya1w&amp;dl_branch=1" target="_blank"> <img id="album-cover" alt="iluvdolfinz brain slop album art" src="https://i.imgur.com/07If8aZ.jpg?2"></img>
           </a>
           </div>
           <a href="https://open.spotify.com/album/6lhLVV61rnepb4Kj5gJRej?si=8kGZLk5XQcGGysyq7tya1w&amp;dl_branch=1" target="_blank"><p>Click to open in Spotify</p></a>
      
            </section>

            <section id="listen">
              
            <iframe src="https://open.spotify.com/embed/album/6lhLVV61rnepb4Kj5gJRej" width="90%" height="460" frameBorder="0" allowtransparency="true" allow="encrypted-media"
            style={{marginTop: "1rem"}}
            ></iframe>
            
            <hr></hr>
            <h6>Other Streaming Options:</h6>
            <div className="stream-links">
              <div>
                <a href="https://www.youtube.com/playlist?list=PL5lpvt-ta3jAdnBh5CHrTJR31QKXjxkW5" target="_blank"><img id="yt-logo" src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Emblem.png" alt="youtube logo"></img></a>
                </div>
                <div>
                <a href="https://music.apple.com/us/album/brain-slop/1556117442" target="_blank"><img id="itunes-logo" src="https://www.pinclipart.com/picdir/middle/572-5729091_vector-apple-music-logo-png-clipart.png" alt="apple music logo"></img></a>
                </div>
                <div>
                <a href="https://music.amazon.com/artists/B08XWLSKY8/iluvdolfinz" target="_blank"><img id="amazon-logo" src="https://image.pngaaa.com/951/604951-small.png" alt="amazon music logo"></img></a> 
                </div> 
                <div>
                <a href="https://www.deezer.com/us/album/211667902" target="_blank"><img id="deezer-logo" src="https://www.pngkit.com/png/detail/148-1482210_listen-deezer-logo.png"alt="deezer logo"></img></a>  
                </div>
            </div>
            </section>
            <section id="video">
                <h3>Video</h3>
                <p>coming soon</p>
            </section>
            <div id="about">
              <div> </div>
              <div> </div>
                <h5>What exactly is iluvdolfinz?</h5>
                <p className="bio">iluvdolfinz formed spontaneously in 2006, a result of several quantum fluctuations. Three unreleased albums were produced in the following years, with some songs making appearances online via MySpace, YouTube, and PureVolume. After lying dormant for many years, iluvdolfinz re-emerged with a new full-length album, 'Brain Slop', which was produced, published and released via online streaming platforms in 2021. iluvdolfinz is influenced by chaos, impulse, time-travel, videotape, motion, disorder, and delusions of grandeur. The name "iluvdolfinz" was created as a joke that stuck, and is in reference to nothing. </p>
                <div> </div>
                
<div className="button-box">
<h6>Follow iluvdolfinz:</h6>
  <div>
  <a href="https://twitter.com/iluvdolfinz_?ref_src=twsrc%5Etfw" target="_blank"><img id="twitter-logo" src="https://www.vhv.rs/dpng/d/211-2110922_transparent-background-twitter-logo-hd-png-download.png" alt="twitter logo"></img></a>
  </div>
  <div>
  <a href="https://www.instagram.com/iluvdolfinz/" target="_blank">
   <img id="insta-logo" src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-icon-Logo-2016-present.png" alt="instagram logo"></img>
</a>
</div>
<div>
<a href="https://www.youtube.com/channel/UC_UQyIv879DV-Kdu3g4dRxQ?sub_confirmation=1" target="_blank">
<img id="yt-logo" src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Emblem.png" alt="youtube logo"></img></a>
</div>
<div>
<a href="https://www.facebook.com/iluvdolfinz" target="_blank"><img id="fb-logo" src="https://i.pinimg.com/564x/63/a2/31/63a231592efca78f2bcbc02267eb37be.jpg" alt="facebook logo"></img></a>
</div>
  </div>
  <div> </div>
</div>
            </div>
            
        )
    }

ReactDOM.render(<Iluvdolfinz/>, document.getElementById("root"));
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Iluvdolfinz />, rootElement);
} else {
  render(<Iluvdolfinz />, rootElement);
}