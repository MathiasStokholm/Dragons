import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import registerServiceWorker from './registerServiceWorker';
import LandingPage from "./components/LandingPage";
import Page404 from "./components/Page404";
import Header from "./components/Header";
import SpellList from "./components/SpellList";
import getPhbSpells from "./data/spells_phb";
import getXanatharsSpells from "./data/spells_xge";
import getScagSpells from "./data/spells_scag";
import Initiative from "./components/Initiative";
import WorldMap from "./components/WorldMap";

const Main = styled.div`
  max-width: 1024px;
  margin: 0 auto; // Center in website
`;

const SpellListWithProps = (props) => {
    return (
        <SpellList spells={getPhbSpells().concat(getXanatharsSpells(), getScagSpells())} {...props}/>
    );
};

ReactDOM.render((
        <BrowserRouter>
            <div>
                <Header/>
                <Main>
                    <Switch>
                        <Route exact path='/' component={LandingPage} />
                        <Route exact path='/spells' component={SpellListWithProps} />
                        <Route exact path='/initiative' component={Initiative} />
                        <Route exact path='/map' component={WorldMap} />
                        <Route component={Page404} />
                    </Switch>
                </Main>
            </div>
        </BrowserRouter>
    ),
    document.getElementById('root')
);
registerServiceWorker();
