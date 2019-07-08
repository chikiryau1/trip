import React, {PureComponent} from 'react';
import {Preloader} from '../../primitives';
import styled from 'styled-components';
import {FormattedData as ListItemInterface} from '../../../data';
import WrappedMap from './GoogleMap'

const MapWrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const MapContainer = styled.div`
  height: 100%;
`;

interface MapComponentInterface {
  items: {
    [index: number]: ListItemInterface
  },
  active: number
}

export default class Map extends PureComponent<MapComponentInterface> {
  render() {
    const {
      items,
      active
    } = this.props;

    return <WrappedMap
      googleMapURL={'https://findanyjob.herokuapp.com/tripData/map'}
      loadingElement={<div style={{height: `100%`}}><Preloader/></div>}
      containerElement={<MapWrapper/>}
      mapElement={<MapContainer/>}
      active={active}
      items={items}
    />
  }
}
