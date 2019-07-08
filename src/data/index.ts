export interface Station{
  id: number,
  name: string,
  lat: number,
  lng: number
}

export interface FormattedData {
  duration: number,
  normDuration: number,
  time: {
    start: string,
    end: string,
    day: string,
  },
  startStation: Station,
  endStation: Station,
}

export function initWorker() {
  const worker = new Worker('worker.js');
  worker.postMessage({ type: 'init'});
  return new Promise(resolve => {
    worker.onmessage = (e) => resolve(e.data as FormattedData)
  })
}