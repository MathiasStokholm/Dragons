import React from 'react'
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import dungeonMaster from '../data/dungeon_master.png';

const AlignedText = styled.h1`
  text-align: center;
  vertical-align: middle;
`;

class LandingPage extends React.Component {
    render() {
        return (
            <AlignedText>
                2770 Dungeons
                <br/>
                <img style={{maxWidth: "100%"}} src={dungeonMaster}/>
            </AlignedText>
        );
    }
}

export default withRouter(LandingPage)
