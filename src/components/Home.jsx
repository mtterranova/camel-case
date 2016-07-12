import React from 'react';
import PulseGrid from './PulseGrid/PulseGrid';
import Nav from './NavBar/Nav';
import CategoryMenu from './CategoryMenu/CategoryMenu';

class Home extends React.Component {

  render() {

    return (
      <div>
      	<Nav />
        <PulseGrid />
        <CategoryMenu />
      </div>
    );

  }
}

module.exports = Home
