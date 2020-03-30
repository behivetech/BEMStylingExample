import React from 'react'
import { genGetClassName } from 'utils/Namespacing';

const displayName = 'NavigationHeader';
const getClassName = genGetClassName(displayName);

const NavigationHeader = ({className}) => {
  return (
    <div className={getClassName({className})}>
      Navigation Header Stuff
    </div>
  );
}
