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
import getTceSpells from "./data/spells_tce";
import getFeats from "./data/feats";
import Initiative from "./components/Initiative";
import WorldMap from "./components/WorldMap";
import FeatList from "./components/FeatList";

const Main = styled.div`
  max-width: 1024px;
  margin: 0 auto; // Center in website
`;

const SpellListWithProps = (props) => {
    // Some spells can be found in multiple books, remove these duplicates
    let spells = getPhbSpells().concat(getXanatharsSpells(), getScagSpells(), getTceSpells());
    let spellNames = spells.map(spell => spell.name);
    let uniqueSpells = spells.filter((spell, pos) => spellNames.indexOf(spell.name) === pos);
    return (
        <SpellList spells={uniqueSpells} {...props}/>
    );
};

const FeatListWithProps = (props) => {
    const valid_sources = ["PHB", "XGE", "TCE"];
    let feats = getFeats();
    let filteredFeats = feats.filter(feat => valid_sources.includes(feat.source));
    return (
        <FeatList feats={filteredFeats} {...props}/>
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
                        <Route exact path='/feats' component={FeatListWithProps} />
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
