import React from 'react'
import { genGetClassName } from 'utils/Namespacing';

const displayName = 'FlatNavSideBar';
const getClassName = genGetClassName(displayName);

const FlatNavSideBar = ({className}) => {
  return (
    <div className={getClassName({className})}>
      Side Bar Stuff
    </div>
  );
}
