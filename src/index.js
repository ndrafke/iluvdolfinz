import React from 'react';
import ReactDOM, { hydrate, render } from "react-dom";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation.js'



class Iluvdolfinz extends React.Component{




    render(){
        return(
            <div>
                <Navigation />
            <section id="home">
            <h5>New album, "Brain Slop" now available to stream!</h5>    
           <a href="https://open.spotify.com/album/6lhLVV61rnepb4Kj5gJRej?si=8kGZLk5XQcGGysyq7tya1w&dl_branch=1" target="_blank"> <img id="album-cover" src="https://i.imgur.com/07If8aZ.jpg" /></a>
            </section>
            <section id="listen">
            <iframe src="https://open.spotify.com/embed/album/6lhLVV61rnepb4Kj5gJRej" width="90%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <h6>Other Streaming Options:</h6>
            <div className="stream-links">
                <a href="https://www.youtube.com/playlist?list=PL5lpvt-ta3jAdnBh5CHrTJR31QKXjxkW5" target="_blank">Youtube</a>
                <a href="https://music.apple.com/us/album/brain-slop/1556117442" target="_blank"> &rarr;Apple Music</a>  
            </div>
            </section>
            <section id="video">
                <h3>Video</h3>
                <p>coming soon</p>
            </section>
            <div id="about">
                <h5>WTF is iluvdolfinz?</h5>
                <p className="bio">iluvdolfinz formed spontaneously in 2006, a result of several quantum fluctuations. Three unreleased albums were produced in the following years, with some songs making appearances online via MySpace, YouTube, and PureVolume. After lying dormant for many years, iluvdolfinz re-emerged with a new full-length album, 'Brain Slop', which was produced, published and released via online streaming platforms in 2021. iluvdolfinz is influenced by chaos, impulse, time-travel, videotape, motion, disorder, and delusions of grandeur. The name "iluvdolfinz" was created as a joke that stuck, and is in reference to nothing. </p>
            </div>
            </div>
        )
    }
}
ReactDOM.render(<Iluvdolfinz/>, document.getElementById("root"));
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Iluvdolfinz />, rootElement);
} else {
  render(<Iluvdolfinz />, rootElement);
}