import React from 'react'
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

const AlignedText = styled.h1`
  text-align: center;
`;

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <AlignedText>2770 Dungeons</AlignedText>
            </div>
        );
    }
}

export default withRouter(LandingPage)
