import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from '../../../settings/User/Auth/privateRoute'
import CoreTemplate from '../../templates/Core'

const Page2 = lazy(() => import(/* webpackChunkName: 'Page2' */ './Page2'))

export default () => (
  <Switch>
    <Route
      exact
      path="/Page2"
      render={() => (
        <PrivateRoute>
          <CoreTemplate>
            <Suspense fallback={null}>
              <Page2 />
            </Suspense>
          </CoreTemplate>
        </PrivateRoute>
      )}
    />
  </Switch>
)