function formatData(data) {
  const minMax = data.reduce((acc, item) => ({
    min: Math.min(acc.min, item.tripduration),
    max: Math.max(acc.max, item.tripduration)
  }), { min: Infinity, max: -Infinity })

  const normDuration = normalize(minMax)

  return data.map((item) => {
    const formattedItem = {};
    formattedItem.duration = item.tripduration;
    formattedItem.normDuration = normDuration(item.tripduration);

    formattedItem.time = {
      start: item['starttime'],
      end: item['stoptime']
    };
    formattedItem.startStation = {
      id: item['start station id'],
      name: item['start station name'],
      lat: item['start station latitude'],
      lng: item['start station longitude'],
    };
    formattedItem.endStation = {
      id: item['end station id'],
      name: item['end station name'],
      lat: item['end station latitude'],
      lng: item['end station longitude'],
    };
    return formattedItem
  })
}


function normalize ({min, max}) {
  return function (value) {
    return 2 * (value - min) / (max - min) + 1
  }
}
