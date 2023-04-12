import exampleVideoData from "../data/exampleVideoData.js"
import VideoList from "./VideoList.js"
import VideoPlayer from "./VideoPlayer.js"
import Search from "./Search.js"
import searchYouTube from "../lib/searchYouTube.js"

const { useState } = React;

var App = () => {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(exampleVideoData[0]);
  let timeout = null;

  const searchHandler = (e) => {
    let query = e.target.value;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      searchYouTube(query, (videos => {setVideos(videos)
      }))
    }, 500)
  }


  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search searchHandler={(e) => searchHandler(e)}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={selectedVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={videos} setSelectedVideo={setSelectedVideo}/>
        </div>
      </div>
    </div>
  )
};

// const handleClick = () => {
//   console.log('Hello world!');
// }

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
