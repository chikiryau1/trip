import React from 'react';
import {Marker, MarkerProps} from 'react-google-maps';

interface MarkInterface extends MarkerProps {
  active?: boolean,
  children?: JSX.Element,
  radius?: number
}

export default ({position, active, children, radius}: MarkInterface) => (
  <Marker
    position={position}
    icon={{
      path: 'M 0 -15 m -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0',
      scale: active ? radius : 1,
      strokeWeight: 0,
      fillColor: active ? '#ff0000' : '#000',
      fillOpacity: 1,
      anchor:{
        x: -2,
        y: -10
      }
    }}
    zIndex={active ? 2 : 1}
  >
    {children}
  </Marker>
);