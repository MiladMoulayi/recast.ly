import exampleVideoData from "../data/exampleVideoData.js"
import VideoListEntry from "./VideoListEntry.js"

var VideoList = () => (
  <div className="video-list">
    <div><h5><em>videoListEntry</em><VideoListEntry video={exampleVideoData[0]}/></h5></div>
    <div><h5><em>videoListEntry</em><VideoListEntry video={exampleVideoData[1]}/></h5></div>
    <div><h5><em>videoListEntry</em><VideoListEntry video={exampleVideoData[2]}/></h5></div>
    <div><h5><em>videoListEntry</em><VideoListEntry video={exampleVideoData[3]}/></h5></div>
    <div><h5><em>videoListEntry</em><VideoListEntry video={exampleVideoData[4]}/></h5></div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
