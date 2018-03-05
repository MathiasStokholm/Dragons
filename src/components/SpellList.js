import React from 'react'
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import {
    Button,
    Card, CardBody, CardLink, CardText, CardTitle, Form, Input, InputGroup, InputGroupAddon, ListGroup,
    ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader, Table
} from "reactstrap";
import getSpells from '../data/spells';

function getUrlParameter(inputString, name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
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
        const spells = getSpells();
        const filteredSpells = spells.filter(spell => spell.name.toLowerCase().includes(this.state.query.toLowerCase()));
        const renderedSpells = filteredSpells.map(spell =>
            <ListGroupItem tag="a" href="#" onClick={() => this.spellDetails(spell)}>
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

                <ListGroup style={{width: "auto"}}>
                    {renderedSpells}
                </ListGroup>

                {selectedSpell && (
                    <Modal isOpen={this.state.modalOpen} toggle={this.closeModal}>
                        <ModalHeader toggle={this.toggle}>{selectedSpell.name}</ModalHeader>
                        <ModalBody>
                            <Table style={{cellSpacing: 0}}>
                                <tbody>
                                <tr>
                                    <th>Level:</th>
                                    <td>{selectedSpell.classes.join("/") + " " + selectedSpell.level}</td>
                                </tr>
                                <tr>
                                    <th>Components:</th>
                                    <td>{selectedSpell.components.raw}</td>
                                </tr>
                                <tr>
                                    <th>School:</th>
                                    <td>{selectedSpell.school}</td>
                                </tr>
                                <tr>
                                    <th>Range:</th>
                                    <td>{selectedSpell.range}</td>
                                </tr>
                                <tr>
                                    <th>Casting time:</th>
                                    <td>{selectedSpell.casting_time}</td>
                                </tr>
                                <tr>
                                    <th>Duration:</th>
                                    <td>{selectedSpell.duration}</td>
                                </tr>
                                <tr>
                                    <th>Ritual:</th>
                                    <td>{selectedSpell.ritual? "Yes": "No"}</td>
                                </tr>
                                </tbody>
                            </Table>
                            <p>{selectedSpell.description}</p>


                            {selectedSpell.higher_levels &&
                            <Table style={{cellSpacing: 0}}>
                                <tbody>
                                <tr>
                                    <th>Higher levels:</th>
                                    <td>{selectedSpell.higher_levels}</td>
                                </tr>
                                </tbody>
                            </Table>
                            }

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
    match: PropTypes.object.isRequired
};

export default withRouter(SpellList)
