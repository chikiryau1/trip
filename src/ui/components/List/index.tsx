import React, {PureComponent} from 'react';
import styled from 'styled-components';
import throttle from 'lodash.throttle';
import map from 'lodash.map';
import {FormattedData as ListItemInterface} from "../../../data";
import ListItem from './Item'

const ListWrapper = styled.div`
  height: 100%;
  overflow-y: scroll;
  flex-basis: 450px;
`;

interface ListProps {
  items: {
    [index:number]: ListItemInterface
  },
  setActive: (a: number) => void,
}

export default class List extends PureComponent<ListProps>{

  onMouseOver = throttle((index:number) => {
    this.props.setActive(index)
  }, 200);

  render(){
    const {
      items,
    } = this.props;
    console.log('RENDER LIST');

    return <ListWrapper>
      {
        map(items, (item:ListItemInterface, key) => {
          const index = parseInt(key, 10);
          return <ListItem
            onMouseOver={() => this.onMouseOver(index)}
            onClick={() => this.onMouseOver(index)}
            item={item}
            key={item.duration + index}
          />
        })
      }
    </ListWrapper>
  }
}