function get (url) {
  console.log('GET', url);

  const GET = {
    method: 'GET'
  };

  return fetch(url, GET)
    .then(res => {
      console.log(res);
      return res.json()
    })
    .catch(e => {
      console.log(e);
      throw e
    })
}