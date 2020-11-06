import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import PeoplePage from '../people-page/'

import './app.css';

const App = () => {
  return (
    <div>
      <Header />
      <div className="row mb2">
        <div className="col-md-6">
          <RandomPlanet />
        </div>
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          {/* <PersonDetails /> */}
        </div>
      </div>
      {/* <PeoplePage/> */}

      <div className="row mb2">
        <div className="col-md-6">
          {/* <ItemList onItemSelected={this.onPersonSelected}/> */}
        </div>
        <div className="col-md-6">
          {/* <PersonDetails personId={this.state.selectedPerson}/> */}
        </div>
      </div>
    </div>
  );
};

export default App;
