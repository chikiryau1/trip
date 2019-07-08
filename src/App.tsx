import React, {PureComponent} from 'react';
import styled from 'styled-components'
import {List, Map} from './ui/components'
import {Preloader} from './ui/primitives'
import {initWorker} from './data'
import {FormattedData as ListItemInterface} from './data';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

interface State {
  items: {
    [index: number]: ListItemInterface
  },
  activeId: number,
  fetching: boolean
}

interface Props {

}

class App extends PureComponent<Props, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      items: [],
      activeId: 0,
      fetching: true
    };

    initWorker()
      .then(data => {
        return data as ListItemInterface[]
      })
      .then((data: ListItemInterface[]) => {
        this.setState({
          items: data,
          activeId: 0,
          fetching: false
        })
      });
  };

  setActiveItem = (activeId: number) => {
    const {
      activeId: oldActiveId
    } = this.state;

    if (oldActiveId !== activeId) {
      this.setState({
        activeId
      })
    }
  };

  render() {
    const {
      items,
      activeId,
      fetching
    } = this.state;
    console.log('RENDER APP');
    return <Wrapper>
      {
        fetching ? <Preloader/> : <>
          <List items={items} setActive={this.setActiveItem}/>
          <Map items={items} active={activeId}/>
        </>
      }
    </Wrapper>
  }
}

export default App;
