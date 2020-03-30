import React from 'react'
import { genGetClassName } from 'utils/Namespacing';

const displayName = 'MainContent';
const getClassName = genGetClassName(displayName);

const MainContent = ({className}) => {
  return (
    <div className={getClassName({className})}>
      Main Content Stuff
    </div>
  );
}
