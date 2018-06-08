import React, { Component } from 'react';

import Hariini from './component/HariIni'
import RupiahBit from './component/RupiahBit'
import BitRupiah from './component/BitRupiah'

import { Route } from 'react-router-dom';

class App extends Component 
{
    
  render() 
  {
    return (
        <div>
          <Route exact path="/" component={Hariini}/>
          <Route path="/RupiahBit" component={RupiahBit}/>
          <Route path="/BitRupiah" component={BitRupiah}/>

        </div>
        );
  }
}
    

export default App;

