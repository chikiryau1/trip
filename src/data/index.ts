import data from './data.json'

interface Station{
  id: string,
  name: string,
  lat: string,
  lng: string
}

interface Format {
  duration: number,
  time: {
    start: string,
    end: string,
  },
  startStation: Station,
  endStation: Station,
}

// function formatData(data: object[]) {
//   return data.map(item => {
//     const formatedItem = {} as Format;
//     formatedItem.duration = item.tripduration;
//     formatedItem.time = {
//       start: item['starttime'],
//       end: item['endtime']
//     };
//     formatedItem
//   })
// }

export function getData() {
  // return Promise.resolve(Object.assign({}, data.slice(0, 10)));
  const slicedData : object[] = data.slice(0, 10);
  return Promise.resolve(slicedData);
}


//"tripduration": 932,
//    "starttime": "2018-01-01 02:06:17.5410",
//    "stoptime": "2018-01-01 02:21:50.0270",
//    "start station id": 3183,
//    "start station name": "Exchange Place",
//    "start station latitude": 40.7162469,
//    "start station longitude": -74.0334588,
//    "end station id": 3199,
//    "end station name": "Newport Pkwy",
//    "end station latitude": 40.7287448,
//    "end station longitude": -74.0321082,
//    "bikeid": 31929,
//    "usertype": "Subscriber",
//    "birth year": 1992,
//    "gender": 1