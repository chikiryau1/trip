importScripts('get.js')
importScripts('utils.js')
// https://findanyjob.herokuapp.com/tripData

onmessage = async function (e) {
  const {
    type,
  } = e.data;
  console.log('worker init');
  if(type === 'init'){
    const data = await get('https://findanyjob.herokuapp.com/tripData')
      .then((data) => {
        return formatData(data.slice(50, 100))
      });
    postMessage(Object.assign({}, data))
  }
};
