import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { POST, ROOT } from '../constants/routes';

const Home = lazy(()  => import('../pages/Home'));
const PostDetail = lazy(()  => import('../pages/PostDetail'));

const Routes = () => (
    <Suspense fallback={<div>Loader...</div>}>
        <Switch>
            <Route exact path={ROOT} component={Home} />
            <Route path={`${POST}:id`} component={PostDetail} />
        </Switch>
    </Suspense>
)

export default Routes;