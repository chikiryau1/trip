import React, {PureComponent} from 'react';
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
  active: ListItemInterface,
  items: {
    [index: number]: ListItemInterface
  },
}

interface PointInterface {
  lat: number,
  lng: number,
  radius: number
}

const Point = ({lat, lng, radius}: PointInterface) => <Circle center={{lat, lng}} radius={radius}/>;

const MapComponent = withScriptjs(withGoogleMap((props: MapInterface) =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{lat: props.active.startStation.lat, lng: props.active.startStation.lng}}
  >
    {/*<Point lat={props.active.startStation.lat} lng={props.active.startStation.lng} radius={10}/>*/}
    <Marker position={{lat: props.active.endStation.lat, lng: props.active.endStation.lng}}/>
    <Marker position={{lat: props.items[0].endStation.lat, lng: props.items[0].endStation.lng}}/>
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
    console.log('MAP RENDER');
    const {
      items,
      active
    } = this.props;

    return <MapComponent
      isMarkerShown
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&libraries=geometry,drawing,places`}
      loadingElement={<div style={{height: `100%`}}><Preloader/></div>}
      containerElement={<MapWrapper/>}
      mapElement={<MapContainer/>}
      active={items[active]}
      items={items}
    />
  }
}
