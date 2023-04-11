import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var getFirstFiveResults = (arr) => {
  return arr.slice(0, 5);
}

var searchYouTube = (q, callback) => {
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {q},
    dataFilter: function (data) {
      return JSON.stringify(JSON.parse(data).slice(0, 5));
    },
    success: callback
  });
};

export default searchYouTube;
