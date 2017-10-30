import React from 'react'
import PropTypes from 'prop-types'
import StylesIgnored from '../styles/main.css'
import Navbar from './navbar'
import Footer from './footer'

const Main = props => (
  <div>
    <Navbar />
      {props.children}
    <Footer />
  </div>
);

Main.propTypes = {
  children: PropTypes.object.isRequired
}

export default Main