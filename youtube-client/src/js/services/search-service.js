import fetch from 'node-fetch';
import initialService from './initial-service';

export default function youToobeRequest(searchtext, uploadpermission, getData) {
  const vidresults = 15;
  const mykey = 'AIzaSyCBsehB-5RkOGpeGaakeg6egm3nOGlx_eg';
  const searchurl = new URL('https://www.googleapis.com/youtube/v3/search');
  let token = '';
  if (uploadpermission === true) token = window.localStorage.getItem('token');
  const optionssearchdata = {
    part: 'snippet, id',
    type: 'video',
    q: searchtext,
    pageToken: token,
    maxResults: vidresults,
    key: mykey,
  };
  Object.keys(optionssearchdata).forEach((val) => {
    searchurl.searchParams.append(val, optionssearchdata[val]);
  });

  fetch(searchurl)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      }
      throw new Error(response.statusText);
    })
    .then(response => response.json())
    .then((response) => {
      const responseid = response.items.map(item => item.id.videoId);
      window.sessionStorage.setItem('token', response.nextPageToken);
      initialService(responseid.join(), mykey, getData, response.nextPageToken);
    })
    .catch((error) => {
      document.write('request failed init', error);
    });
}
