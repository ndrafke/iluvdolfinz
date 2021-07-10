import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation.js'



class Iluvdolfinz extends React.Component{




    render(){
        return(
            <div>
                <Navigation />
            <div id="home">
            <h5>New album, "Brain Slop" now available to stream!</h5>    
           <a href="https://open.spotify.com/album/6lhLVV61rnepb4Kj5gJRej?si=8kGZLk5XQcGGysyq7tya1w&dl_branch=1" target="_blank"> <img id="album-cover" src="https://i.imgur.com/07If8aZ.jpg" /></a>
            </div>
            <div id="listen">
            <iframe src="https://open.spotify.com/embed/album/6lhLVV61rnepb4Kj5gJRej" width="90%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
            </div>
        )
    }
}
ReactDOM.render(<Iluvdolfinz/>, document.getElementById("root"));