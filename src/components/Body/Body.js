import React from 'react';
import {CorpoStyle} from './style.js';
import CardSite from '../CardSites/CardSite.js';
import Footer from '../Footer/Footer.js';
import CardMe from '../CardMe/CardMe.js';

function Body() {
    return (
      <>
        <CardMe />
        <CorpoStyle>
            <CardSite />
        </CorpoStyle>
        <Footer />
      </>
    );
  }
  
  export default Body;