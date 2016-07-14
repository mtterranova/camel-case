import React from 'react';
import PulseGrid from './PulseGrid/PulseGrid';
import Nav from './NavBar/Nav';
import CategoryMenu from './CategoryMenu/CategoryMenu';

export default class Home extends React.Component {

  render() {

    return (
      <div>
      	<Nav />
        <PulseGrid />
      </div>
    );

  }
}
