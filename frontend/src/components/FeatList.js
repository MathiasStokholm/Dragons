import React from 'react'
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {
    Button,
    Form, Input, InputGroup, InputGroupAddon, ListGroup,
    ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader
} from "reactstrap";
import Feat from "./Feat";

function getUrlParameter(inputString, name) {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    let results = regex.exec(inputString);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

class FeatList extends React.Component {
    CLASSES = [
        "sorcerer", "wizard", "cleric", "paladin", "artificer", "ranger", "bard", "druid", "warlock"
    ];

    constructor(props) {
        super(props);

        this.state = {
            query: getUrlParameter(this.props.location.search, 'q'),
            modalOpen: false,
            selectedFeat: null
        };

        this.closeModal = this.closeModal.bind(this);
    }

    onQueryChanged(event) {
        this.setState({
            query: event.target.value
        });
    }

    onSearch(event) {
        event.preventDefault();
        if (this.state.query.length > 0) {
            this.props.history.push('?q=' + this.state.query)
        }
    }

    featDetails(feat) {
        this.setState({
            modalOpen: true,
            selectedFeat: feat
        });
    }

    closeModal() {
        this.setState({
            modalOpen: false,
            selectedFeat: null
        });
    }

    filterFeats() {
        const query = this.state.query.toLowerCase();
        return this.props.feats.filter(feat => feat.name.toLowerCase().includes(query));
    }

    render() {
        const filteredFeats = this.filterFeats();
        const renderedFeats = filteredFeats.map(feat =>
            <ListGroupItem key={feat.name} tag="a" href="#" onClick={(e) => {
                    e.preventDefault();
                    this.featDetails(feat);
                }}>
                {feat.name}
            </ListGroupItem>
        );

        // Handle feat details
        const selectedFeat = this.state.selectedFeat;

        return (
            <div>
                <Form onSubmit={this.onSearch.bind(this)}>
                    <InputGroup style={{width: "50%", margin: "0 auto", marginBottom: "10px", marginTop: "40px"}}>
                        <Input placeholder="Search feats" type="text"
                               onChange={this.onQueryChanged.bind(this)}/>
                        <InputGroupAddon addonType="append">
                            <Button type="submit"
                                    className="material-icons" style={{fontSize: 20}}>search</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </Form>

                {renderedFeats.length > 0?
                    <ListGroup style={{width: "auto"}}>
                        {renderedFeats}
                    </ListGroup>
                    : <h5 style={{textAlign: "center"}}>No feats matched search!</h5>
                }

                {selectedFeat && (
                    <Modal isOpen={this.state.modalOpen} toggle={this.closeModal}>
                        <ModalHeader toggle={this.toggle}>{selectedFeat.name}</ModalHeader>
                        <ModalBody>
                            {<Feat feat={selectedFeat}/>}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.closeModal}>Close</Button>{' '}
                        </ModalFooter>
                    </Modal>
                )}
            </div>
        );
    }
}

FeatList.propTypes = {
    feats: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired
};

export default withRouter(FeatList)
