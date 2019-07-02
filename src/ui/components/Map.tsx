import React, {PureComponent} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import styled from 'styled-components'
import {Preloader} from '../primitives'

const MapWrapper = styled.div`
  height: 400px;
  width: 100%;
`;

const MapContainer = styled.div`
  height: 400px;
`;

interface MapInterface {
  isMarkerShown: boolean,
  googleMapURL: string,
  loadingElement: JSX.Element,
  containerElement: JSX.Element,
  mapElement: JSX.Element,
}

const MapComponent = withScriptjs(withGoogleMap((props: MapInterface) =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
  ));

const key = 'AIzaSyDS5nV5nNisxsr_kWTu-p8Lay7rfialZHw';

export default class Map extends PureComponent{
  render() {
    return <MapComponent
      isMarkerShown
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `100%` }}><Preloader /></div>}
      containerElement={<MapWrapper />}
      mapElement={<MapContainer />}
    />
  }
}
