import React, {PureComponent} from 'react';
import styled from 'styled-components'
import throttle from 'lodash.throttle'
import map from 'lodash.map'
import {FormattedData as ListItemInterface} from '../../data';

interface ListProps {
  items: {
    [index:number]: ListItemInterface
  },
  setActive: (a: number) => void,
}

interface ListItemProps {
  item: ListItemInterface,
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  onMouseOver: (event: React.MouseEvent<HTMLElement>) => void
}

const ListWrapper = styled.div`
  height: 100%;
  overflow-y: scroll;
`;

const Item = styled.div`
  border: 1px solid #000;
`;

const Station = styled.div`
  
`;

const Duration = styled.div`
  
`;

const Time = styled.div`
  
`;

const ListItem = ({ item, onClick, onMouseOver }: ListItemProps) => <Item onClick={onClick} onMouseOver={onMouseOver}>
  from: <Station>{item.startStation.name}</Station>
  to: <Station>{item.endStation.name}</Station>
  duration: <Duration>{item.duration}</Duration>
  time: <Time>{item.time.start} - {item.time.end}</Time>
</Item>;

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
