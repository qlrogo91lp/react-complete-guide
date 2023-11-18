import { Fragment } from 'react';
import classes from './PageContent.module.css';
import MainNavigation from './MainNavigation';

const PageContent = ({ title, children }) => {
  return (
    <Fragment>
      <div className={classes.content}>
        <h1>{title}</h1>
        {children}
      </div>
    </Fragment>
  );
}

export default PageContent;