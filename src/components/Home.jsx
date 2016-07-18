import React from 'react';
import PulseGrid from './PulseGrid/PulseGrid';
import CategoryMenu from './CategoryMenu/CategoryMenu';
import { Link } from 'react-router';
import Nav from './NavBar/Nav';
import About from './About/About'


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
