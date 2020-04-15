import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';

function IndexPage() {
  return (
    <div className={styles.test}>
      tsx
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
