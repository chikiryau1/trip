import React, {PureComponent} from 'react';
import {List, Map} from './ui/components'
import {getData} from './data'

class App extends PureComponent{
  constructor(props: object) {
    super(props);
    getData()
      .then(console.log)
  }

  render(){
    return <>
      {/*<Map/>*/}
      <List/>
    </>
  }
}

export default App;
