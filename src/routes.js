import React from 'react'
import Product from './pages/product'

import {

    BrowserRouter,
    Switch,
    Route

} from 'react-router-dom'

import Main from './pages/main'

const Routes = () => <BrowserRouter>

    <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/products/:id" component={Product} />
    </Switch>

</BrowserRouter>


export default Routes