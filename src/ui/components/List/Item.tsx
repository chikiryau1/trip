import React from 'react';
import {FormattedData as ListItemInterface} from "../../../data";
import styled from "styled-components";
import arrow from '../../assets/right-arrow.svg'

const Item = styled.div`
  position: relative;
  padding: 20px 10px;
  box-shadow: 0 2px 0 rgba(0, 0, 0, .2);
  cursor: pointer;
  &:hover{
    background-color: #F2F4F7;
  }
`;

const StationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Station = styled.span`
  font-weight: bold;
  line-height: 1.5;
`;

const Duration = styled.div`
  font-size: 12px;
  color: #555;
  font-weight: 300;
`;

const Day = styled.div`
  position: relative;
  font-size: 12px;
  font-weight: 300;
`;

interface StationProps {
  right?:boolean
}

const StationDate = styled.div<StationProps>`
  font-size: 12px;
  color: #555;
  ${p => p.right ? {'text-align': 'right'} : {}}
`;

const Arrow = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url(${arrow})
`;

const Splitter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


interface ListItemProps {
  item: ListItemInterface,
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  onMouseOver: (event: React.MouseEvent<HTMLElement>) => void
}

export default ({item, onClick, onMouseOver}: ListItemProps) => (
  <Item onClick={onClick} onMouseOver={onMouseOver}>
    <StationWrapper>
      <Station>
        {item.startStation.name}
        <StationDate>{item.time.start}</StationDate>
      </Station>
      <Splitter>
        <Arrow/>
        <Duration>{item.duration}</Duration>
      </Splitter>
      <Station>
        {item.endStation.name}
        <StationDate right>{item.time.end}</StationDate>
      </Station>
    </StationWrapper>
    {/*<Day>{item.time.day}</Day>*/}
  </Item>
);
