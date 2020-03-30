import React from 'react'
import { genGetClassName } from 'utils/Namespacing';

const displayName = 'SideContent';
const getClassName = genGetClassName(displayName);

const SideContent = ({className}) => {
  return (
    <div className={getClassName({className})}>
      Side Content Stuff
    </div>
  );
}
