import { memo } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Helmet } from 'react-helmet';

type Props = RouteComponentProps;

const NotFound = ({ staticContext }: Props) => {
  // We have to check if staticContext exists
  // because it will be undefined if rendered through a BrowserRoute
  /* istanbul ignore next */
  if (staticContext) staticContext.statusCode = 404;

  return (
    <div>
      <Helmet title="Oops" />
      <p>Oops, Page was not found!</p>
    </div>
  );
};

export default memo(NotFound);
