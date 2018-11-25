import fetch from 'node-fetch';

export default function initialService(responseid, mykey, getData) {
  const url = new URL('https://www.googleapis.com/youtube/v3/videos');
  const optionsdata = {
    key: mykey,
    id: responseid,
    part: 'snippet, statistics',
  };
  Object.keys(optionsdata).forEach((val) => {
    url.searchParams.append(val, optionsdata[val]);
  });

  fetch(url)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      }
      throw new Error(response.statusText);
    })
    .then(response => response.json())
    .then((response) => {
      getData(response);
    })
    .catch((error) => {
      document.write('request failed init', error);
    });
}
