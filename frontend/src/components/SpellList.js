import React from 'react'
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {
    Button,
    Form, Input, InputGroup, InputGroupAddon, ListGroup,
    ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader
} from "reactstrap";
import Spell from "./Spell";

function getUrlParameter(inputString, name) {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    let results = regex.exec(inputString);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

class SpellList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            query: getUrlParameter(this.props.location.search, 'q'),
            modalOpen: false,
            selectedSpell: null
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

    spellDetails(spell) {
        this.setState({
            modalOpen: true,
            selectedSpell: spell
        });
    }

    closeModal() {
        this.setState({
            modalOpen: false,
            selectedSpell: null
        });
    }

    render() {
        const filteredSpells = this.props.spells.filter(spell => spell.name.toLowerCase().includes(this.state.query.toLowerCase()));
        const renderedSpells = filteredSpells.map(spell =>
            <ListGroupItem key={spell.name} tag="a" href="#" onClick={() => this.spellDetails(spell)}>
                {spell.name}
            </ListGroupItem>
        );

        // Handle spell details
        const selectedSpell = this.state.selectedSpell;

        return (
            <div>
                <Form onSubmit={this.onSearch.bind(this)}>
                    <InputGroup style={{width: "50%", margin: "0 auto", marginBottom: "10px", marginTop: "40px"}}>
                        <Input placeholder="Search spells" type="text"
                               onChange={this.onQueryChanged.bind(this)}/>
                        <InputGroupAddon addonType="append">
                            <Button type="submit"
                                    className="material-icons" style={{fontSize: 20}}>search</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </Form>

                {renderedSpells.length > 0?
                <ListGroup style={{width: "auto"}}>
                    {renderedSpells}
                </ListGroup>
                    : <h5 style={{textAlign: "center"}}>No spells matched search!</h5>
                }

                {selectedSpell && (
                    <Modal isOpen={this.state.modalOpen} toggle={this.closeModal}>
                        <ModalHeader toggle={this.toggle}>{selectedSpell.name}</ModalHeader>
                        <ModalBody>
                            <Spell spell={selectedSpell}/>
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

SpellList.propTypes = {
    spells: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired
};

export default withRouter(SpellList)
