import React from 'react';
import Loader from 'react-loader-spinner';
import cn from 'classnames';

//style
import styles from './index.module.css';

function Spinner({ className }) {
  return (
    <div className={cn(styles.box, className)}>
      <Loader type="BallTriangle" color="#F5F6F8" height={50} width={50} />
    </div>
  );
}

export default Spinner;
