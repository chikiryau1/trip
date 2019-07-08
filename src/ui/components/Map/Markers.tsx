import React, {PureComponent} from 'react';
import map from 'lodash.map';
import {MarkerProps} from 'react-google-maps';
import {FormattedData as ListItemInterface} from '../../../data';
import Mark from './SimpleMark';

interface MarkListInterface extends MarkerProps {
  items: {
    [index: number]: ListItemInterface
  },
}

export default class Markers extends PureComponent<MarkListInterface>{
  render(){
    const {
      items
    } = this.props;
    return map(items, (item, key) => {
      return <>
        <Mark
          key={item.time.start + key + item.time.end}
          position={{
            lat: item.startStation.lat,
            lng: item.startStation.lng
          }}
          label={item.startStation.name}
        />

        <Mark
          key={item.time.end + key + item.time.start}
          position={{
            lat: item.endStation.lat,
            lng: item.endStation.lng
          }}
          label={item.endStation.name}
        />
      </>
    })
  }
}

