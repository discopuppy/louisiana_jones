import React from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import HomePage from '../components/HomePage';
import Header from '../components/Header';
import ArticlesPage from '../components/ArticlesPage';
import Footer from '../components/Footer';
import NotFoundPage from '../components/NotFoundPage';
import ConstructionPage from '../components/ConstructionPage';
import Article1 from '../components/articles/Article1';
import QuotesPage from '../components/QuotesPage';
import AboutMePage from '../components/AboutMePage';

export const history = createHistory();

const AppRouter = () => ( // Client-Side Routing
    <BrowserRouter>
        <div>
            <Header />
            <hr  className="main__hr" />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/articles" component={ArticlesPage} />
                <Route path="/construction"component={ConstructionPage} />
                <Route path="/article1"component={Article1} />
                <Route path="/quotesPage" component={QuotesPage} />
                <Route path="/aboutMePage" component={AboutMePage} />
                <Route component={NotFoundPage} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

//<BrowserRouter history={history}>

//<Header history={history}/>

export default AppRouter;