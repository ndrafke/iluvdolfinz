import React from 'react'

//Section 2:
const Listen = () => {
    return (
        <section id="listen">
              
            <iframe src="https://open.spotify.com/embed/album/6lhLVV61rnepb4Kj5gJRej" width="90%" height="460" frameBorder="0" allowtransparency="true" allow="encrypted-media"
            style={{marginTop: "1rem"}}>
            </iframe>
            <hr/>
            <h6>Other Streaming Options:</h6>
            <div className="stream-links">
              <div>
                <a href="https://www.youtube.com/playlist?list=PL5lpvt-ta3jAdnBh5CHrTJR31QKXjxkW5" target="_blank">
                    <img id="yt-logo" src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Emblem.png" alt="youtube logo"></img>
                    </a>
                </div>
                <div>
                <a href="https://music.apple.com/us/album/brain-slop/1556117442" target="_blank">
                    <img id="itunes-logo" src="https://www.pinclipart.com/picdir/middle/572-5729091_vector-apple-music-logo-png-clipart.png" alt="apple music logo"></img>
                    </a>
                </div>
                <div>
                <a href="https://music.amazon.com/artists/B08XWLSKY8/iluvdolfinz" target="_blank">
                    <img id="amazon-logo" src="https://image.pngaaa.com/951/604951-small.png" alt="amazon music logo"></img>
                    </a> 
                </div> 
                <div>
                <a href="https://www.deezer.com/us/album/211667902" target="_blank">
                    <img id="deezer-logo" src="https://www.pngkit.com/png/detail/148-1482210_listen-deezer-logo.png"alt="deezer logo"></img>
                    </a>  
                </div>
            </div>
        </section>
    )
}
export default Listen