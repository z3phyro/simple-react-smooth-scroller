import React, {useEffect, Fragment} from 'react';
import {useLocation} from 'react-router-dom';
import jump from 'jump.js';

export const Scroller =({children}) => {
  const location = useLocation();

  useEffect(() => {
    document.getElementById(location.hash.substr(1)) && jump(location.hash);
  }, [location.key, location.hash]);

  return <Fragment>{children}</Fragment>;
}
