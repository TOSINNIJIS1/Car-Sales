import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {connect} from 'react-redux';
import { Add, Remove} from "./components/action/action"

const App = ({state, addItem, removeItem}) => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    Remove(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    Add(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={state.store} buyItem={buyItem} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const map = state => {
  return {
    state: state
  };
};
export default connect(
  map, { Add, Remove }
)(App);
