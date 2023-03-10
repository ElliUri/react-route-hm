import React from 'react';
import styles from "./style.module.css";
import {Link} from "react-router-dom";

const PromoBlock = () => {
  return (
    <div className={styles['main-title-wrap']}>
      <h1 className={styles.title}>
        Creative <span>Landing Page</span>
      </h1>
      <div className={styles.content}>
        <p className={styles.text}>
        The invention of the written word, sometime around 3200 B.C., launched creative writing with the recording of stories like The Odyssey and tales of Norse gods. Over time, the stories morphed and the skill of storytellers improved as well. Today, over three-fourths of the population can read and write. Oral storytellers have been using elements like voice and personality to entertain and convey human experience. 
        </p>
        <Link className={styles['read-more-link']} to='/about-us'>
          Read more about us
        </Link>
      </div>
    </div>
  );
};

export default PromoBlock;