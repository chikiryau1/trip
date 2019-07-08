function formatData(data) {
  return data.map((item) => {
    const formattedItem = {};
    formattedItem.duration = item.tripduration;
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
