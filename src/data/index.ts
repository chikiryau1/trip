import data from './data.json'

export interface Station{
  id: number,
  name: string,
  lat: number,
  lng: number
}

export interface FormattedData {
  duration: number,
  time: {
    start: string,
    end: string,
  },
  startStation: Station,
  endStation: Station,
}

interface RawData {
  'tripduration': number,
  'starttime': string,
  'stoptime': string,
  'start station id': number,
  'start station name': string,
  'start station latitude': number,
  'start station longitude': number,
  'end station id': number,
  'end station name': string,
  'end station latitude': number,
  'end station longitude': number,
  'bikeid': number,
  'usertype': string,
  'birth year': number,
  'gender': number
}

function formatData(data: RawData[]) {
  return data.map((item:RawData) => {
    const formatedItem = {} as FormattedData;
    formatedItem.duration = item.tripduration;
    formatedItem.time = {
      start: item['starttime'],
      end: item['stoptime']
    };
    formatedItem.startStation = {
      id: item['start station id'],
      name: item['start station name'],
      lat: item['start station latitude'],
      lng: item['start station longitude'],
    };
    formatedItem.endStation = {
      id: item['end station id'],
      name: item['end station name'],
      lat: item['end station latitude'],
      lng: item['end station longitude'],
    };
    return formatedItem
  })
}

export function getData() {
  // return Promise.resolve(Object.assign({}, data.slice(0, 10)));
  const slicedData : RawData[] = data.slice(0, 10);
  return Promise.resolve(Object.assign({}, formatData(slicedData)));
}
