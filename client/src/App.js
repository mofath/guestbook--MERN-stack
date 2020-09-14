import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './views/_Layout/Layout';
import Spinner from './views/UI/Spinner/Spinner'
import LandingScreen from './views/Screens/Landing/Landing';
const Home = React.lazy(() => { return import('./views/Screens/Home/Home'); });


const App = () =>
  <div className="app">
    <Layout>
      <Switch>
        <Route path="/home" exact render={() => <Suspense fallback={Spinner}><Home /></Suspense>} />
        <Route path="/" exact component={LandingScreen} />
      </Switch>
    </Layout>
  </div>


export default App;