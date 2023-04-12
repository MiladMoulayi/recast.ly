import searchYouTube from "../lib/searchYouTube.js"
import searchHandler from "./App.js"

var Search = ({searchHandler}) => {
  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={(e) => searchHandler(e)}/>
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>);
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
