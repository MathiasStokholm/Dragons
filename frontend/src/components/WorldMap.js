import React from 'react'
import "leaflet/dist/leaflet.css";
import {Map, ImageOverlay, LayersControl} from 'react-leaflet';
import {withRouter} from "react-router-dom";
import {CRS} from "leaflet";
import nameria from '../data/nameria.jpg';

const {BaseLayer} = LayersControl;

class WorldMap extends React.Component {
    imageWidth = 2048;
    imageHeight = 1380;
    bounds = [[0, 0], [this.imageHeight, this.imageWidth]];

    state = {
        height: 0
    };

    updateDimensions() {
        if (window.innerWidth < 992) {
            // On mobile
            this.setState({height: 400});
        } else {
            // Desktop
            const trueWidth = Math.min(window.innerWidth, 1024);
            const aspectRatio = this.imageWidth / this.imageHeight;
            this.setState({height: Math.min(window.innerHeight, (1/aspectRatio) * trueWidth)})
        }
    }

    componentWillMount() {
        this.updateDimensions()
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this))
    }

    render() {
        return (
            <div style={{height: this.state.height}}>
                <Map crs={CRS.Simple}
                     minZoom={-1}
                     style={{height: this.state.height}}
                     maxBounds={this.bounds}
                     bounds={this.bounds}
                     zoomSnap={0}>
                    <LayersControl position='topleft'>
                        <BaseLayer checked name='Nameria'>
                            <ImageOverlay url={nameria} bounds={this.bounds}/>
                        </BaseLayer>
                    </LayersControl>
                </Map>
            </div>
        )
    }
}

export default withRouter(WorldMap)
