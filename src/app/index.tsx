import { Link } from 'react-router-dom';
import { RouteConfig, renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';

import logo from '../static/logo.svg';
import config from '../config';
// Import your global styles here
import 'normalize.css/normalize.css';

interface Route {
  route: { routes: RouteConfig[] };
}

const App = ({ route }: Route): JSX.Element => (
  <div >
    <Helmet {...config.APP} />
    <Link to="/" >
      <img src={logo} alt="Logo" role="presentation" />
      <h1>
        <em>{config.APP.title}</em>
      </h1>
    </Link>
    <hr />
    {/* Child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
);

export default App;
