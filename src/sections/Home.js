import React from 'react'

//Section 1:
const Home = () => {
    return (
    <section id="home">
    <div className="d-flex align-items-center justify-content-center" style={{height: "15vh", width: "95vw"}}>
        <h6>Iluvdolfinz' full-length album, "Brain Slop" now available to stream!</h6>
    </div>
    <div className="home-box d-flex flex-row align-items-center justify-content-center" style={{height: "70vh", width: "85vw"}}>
        <div className="d-flex flex-column align-items-center justify-content-center" style={{height: "100%", width:"75%"}}>
      
        <div id="album-cover" className="home-box d-flex flex-column align-items-center justify-content-center" style={{height: "75%", width: "100%"}}>
        <a href="https://open.spotify.com/album/6lhLVV61rnepb4Kj5gJRej?si=8kGZLk5XQcGGysyq7tya1w&amp;dl_branch=1" target="_blank" style={{height: "75%", width: "100%"}}> 
        </a>
        </div>

        <div id="horizontal-box" className="home-box d-flex flex-column align-items-center justify-content-center" style={{height: "25%", width: "100%"}}>
        </div>
        
        </div>
     
        <div className="d-flex flex-column align-items-center justify-content-center" style={{height: "100%", width: "25%"}}>
        <div id="vertical-box" className="home-box d-flex flex-column align-items-center justify-content-center" style={{height: "75%", width: "100%"}}>
        </div>

        <div className="home-box d-flex flex-column align-items-center justify-content-center" style={{height: "25%", width: "100%"}}>
        <a href="https://open.spotify.com/album/6lhLVV61rnepb4Kj5gJRej?si=8kGZLk5XQcGGysyq7tya1w&amp;dl_branch=1" target="_blank"><p style={{textAlign: "center"}}>Click to open in Spotify</p></a>
        </div>

        </div>
     </div>
    </section>          

    )
}
export default Home;