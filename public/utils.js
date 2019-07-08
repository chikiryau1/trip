function formatData(data) {
  const minMax = data.reduce((acc, item) => ({
    min: Math.min(acc.min, item.tripduration),
    max: Math.max(acc.max, item.tripduration)
  }), { min: Infinity, max: -Infinity })

  const normDuration = normalize(minMax)

  return data.map((item) => {
    const formattedItem = {};
    formattedItem.duration = durationFormat(item.tripduration);
    formattedItem.normDuration = normDuration(item.tripduration);

    formattedItem.time = {
      start: timeFormat(item['starttime']),
      end: timeFormat(item['stoptime']),
      day: dayFormat(item['starttime'], item['stoptime'])
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

function dayFormat (start, end) {
  const st = start.split(' ')[0]
  const en = end.split(' ')[0]
  if (st === en) {
    return st.split('-').reverse().join('.')
  } else {
    return `${st.split('-').reverse().join('.')} - ${en.split('-').reverse().join('.')}`
  }
}

function durationFormat (duration) {
  return `${Math.floor(duration / 60)}:${duration - 60 * Math.floor(duration / 60)}`
}

function timeFormat (timestamp) {
  return timestamp.split(' ')[1].split('.')[0]
}

function normalize ({min, max}) {
  return function (value) {
    return 2 * (value - min) / (max - min) + 1
  }
}
