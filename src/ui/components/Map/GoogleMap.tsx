import React, {PureComponent} from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, InfoWindow} from 'react-google-maps'
import {FormattedData as ListItemInterface} from '../../../data';
import Markers from './Markers'
import Mark from './SimpleMark'

interface MapInterface {
  googleMapURL: string,
  loadingElement: JSX.Element,
  containerElement: JSX.Element,
  mapElement: JSX.Element,
  active: number,
  items: {
    [index: number]: ListItemInterface
  },
}

class MapComponent extends PureComponent<MapInterface> {
  render() {
    const {
      items,
      active
    } = this.props;

    const activeItem = items[active];

    return <GoogleMap
      defaultZoom={14}
      defaultCenter={{lat: items[0].startStation.lat, lng: items[0].startStation.lng}}
    >
      <Markers items={items} />

      <Mark
        position={{
          lat: activeItem.startStation.lat,
          lng: activeItem.startStation.lng
        }}
        radius={activeItem.normDuration}
        active
      >
        <InfoWindow
          position={{
            lat: activeItem.startStation.lat,
            lng: activeItem.startStation.lng
          }}
        >
          <span>{activeItem.startStation.name}</span>
        </InfoWindow>
      </Mark>

      <Mark
        position={{
          lat: activeItem.endStation.lat,
          lng: activeItem.endStation.lng
        }}
        radius={activeItem.normDuration}
        active
      >
        <InfoWindow
          position={{
            lat: activeItem.endStation.lat,
            lng: activeItem.endStation.lng
          }}
        >
          <span>{activeItem.endStation.name}</span>
        </InfoWindow>
      </Mark>

    </GoogleMap>
  }
}

export default withScriptjs(withGoogleMap(MapComponent));