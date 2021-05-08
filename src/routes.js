import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'

export function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={LandingPage} />
            </Switch>
        </BrowserRouter>
    )
}
