import React, {PureComponent} from 'react';
import map from 'lodash.map'
import {withScriptjs, withGoogleMap, GoogleMap, Circle, Marker} from 'react-google-maps'
import styled from 'styled-components'
import {Preloader} from '../primitives'
import {FormattedData as ListItemInterface} from '../../data';

const MapWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const MapContainer = styled.div`
  height: 100%;
`;

interface MapInterface {
  isMarkerShown: boolean,
  googleMapURL: string,
  loadingElement: JSX.Element,
  containerElement: JSX.Element,
  mapElement: JSX.Element,
  active: number,
  items: {
    [index: number]: ListItemInterface
  },
}

interface PointInterface {
  lat: number,
  lng: number,
  radius: number,
  fillColor: string
}

//{
//       strokeColor: '#FF0000',
//       strokeOpacity: 0.8,
//       strokeWeight: 2,
//       fillColor: '#FF0000',
//       fillOpacity: 0.35,
//       map: map,
//       center: citymap[city].center,
//       radius: Math.sqrt(citymap[city].population) * 100
//     }

const Point = ({lat, lng, radius, fillColor}: PointInterface) => (
  <Circle
    center={{lat, lng}}
    radius={radius}
    options={{fillColor, fillOpacity: 1, strokeWeight: 0}}
  />
);

const MapComponent = withScriptjs(withGoogleMap((props: MapInterface) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{lat: props.items[0].startStation.lat, lng: props.items[0].startStation.lng}}
  >
    {
      map(props.items, (item, key) => {
        const active = parseInt(key, 10) === props.active;
        console.log('LOOP', parseInt(key, 10), props.active);
        return <>
          <Point
            key={item.time.start + key}
            lat={item.startStation.lat}
            lng={item.startStation.lng}
            radius={active ? 100 : 50}
            fillColor={active ? '#ff0000' : '#000'}
          />
          <Point
            key={item.time.end + key}
            lat={item.endStation.lat}
            lng={item.endStation.lng}
            radius={active ? 100 : 50}
            fillColor={active ? '#ff0000' : '#000'}
          />
        </>
      })
    }

    {/*<Marker position={{lat: props.active.endStation.lat, lng: props.active.endStation.lng}}/>*/}
    {/*<Marker position={{lat: props.items[0].endStation.lat, lng: props.items[0].endStation.lng}}/>*/}
  </GoogleMap>
));

const key = 'AIzaSyDS5nV5nNisxsr_kWTu-p8Lay7rfialZHw';

interface MapComponentInteraface {
  items: {
    [index: number]: ListItemInterface
  },
  active: number
}

export default class Map extends PureComponent<MapComponentInteraface> {
  render() {
    const {
      items,
      active
    } = this.props;
    console.log('MAP RENDER', active);

    return <MapComponent
      isMarkerShown
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&libraries=geometry,drawing,places`}
      loadingElement={<div style={{height: `100%`}}><Preloader/></div>}
      containerElement={<MapWrapper/>}
      mapElement={<MapContainer/>}
      active={active}
      items={items}
    />
  }
}
