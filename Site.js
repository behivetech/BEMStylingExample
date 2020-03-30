import React from 'react';
import PropTypes from 'prop-types';
import { genGetClassName } from 'utils/Namespacing';

import FlatNavSideBar from './FlatNavSideBar';
import MainContent from './MainContent';
import NavigationHeader from './NavigationHeader';
import SideContent from './SideContent';

const displayName = 'Site';
const getClassName = genGetClassName(displayName);

const Site = ({bespokeNavOpen, qdpOpen}) => {
  function getClass() {
    getClassName({
      modifiers: {
        bespokeNavOpen,
        qdpOpen
      }
    })
  }

  return (
    <div className={getClass()}>
      <FlatNavSideBar className={getClassName({displayName: 'sideBar'})} />
      <NavigationHeader className={getClassName({displayName: 'navigationHeader'})} />
      <MainContent className={getClassName({displayName: 'mainContent'})} />
      <SideContent className={getClassName({displayName: 'sideContent'})} />
    </div>
  );
}


Site.propTypes = {
  qdpOpen: PropTypes.bool,
  bespokeNavOpen: PropTypes.bool,
}
