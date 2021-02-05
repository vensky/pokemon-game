import { useRouteMatch, Route, Switch, Redirect } from 'react-router-dom';
import cn from 'classnames';

import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer';
import HomePage from './routes/Home';
import GamePage from './routes/Game';
import AboutPage from './routes/About';
import ContactPage from './routes/Contact';

import s from './style.module.css';

const App = () => {
    const match = useRouteMatch('/');

    return (
        <Switch>
            <Route path='/404' render={() => <h1>404 page not found</h1>} />
            <Route>
                <>
                    <MenuHeader bgActive={!match.isExact} />
                    <div
                        className={cn(s.wrap, {
                            [s.isHomePage]: match.isExact,
                        })}
                    >
                        <Switch>
                            <Route path='/' exact component={HomePage} />
                            <Route path='/game' exact component={GamePage} />
                            <Route path='/about' exact component={AboutPage} />
                            <Route
                                path='/contact'
                                exact
                                component={ContactPage}
                            />
                            <Route render={() => <Redirect to='/404' />} />
                        </Switch>
                    </div>
                    <Footer />
                </>
            </Route>
        </Switch>
    );
};

export default App;
