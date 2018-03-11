import React from 'react'
import {withRouter} from 'react-router-dom';
import io from 'socket.io-client';
import {
    Button, ButtonGroup, Col, Container, Form, FormGroup, Input, Label, ListGroup, Row
} from "reactstrap";
import Character from "./Character";
import styled from 'styled-components';


const AlignedText = styled.div`
  display: flex; 
  align-items: center;
`;

const socket = io('http://192.168.1.181:5000/initiative', {transports: ['websocket']});

class Initiative extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            encounter: null,
            name: "",
            initiative: 0,
            secret_initiative: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);

        socket.on('new_state', encounter => {
            console.log('Got new state:', encounter);
            this.setState({
                encounter: encounter
            });
        });
    }

    onSubmit(event) {
        event.preventDefault();
        socket.emit('new_character',
            {'name': this.state.name,
                'initiative': this.state.initiative,
                'secret_initiative': this.state.secret_initiative})
    }

    onStatusChange(event) {
        event.preventDefault();
        if (this.state.encounter) {
            socket.emit('set_status', {'running': !this.state.encounter.running})
        }
    }

    onNextTurn(event) {
        event.preventDefault();
        socket.emit('next_turn')
    }

    onDelete(character_id) {
        console.log('Deleting character: ', character_id);
        socket.emit('delete_character', {'id': character_id})
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const id = target.id;

        this.setState({
            [id]: value
        });
    }

    render() {
        let characters = [];
        let running = false;
        if (this.state.encounter && this.state.encounter.characters) {
            const encounter = this.state.encounter;
            running = encounter.running;
            characters = encounter.characters
                .sort((a, b) => parseInt(b.initiative, 10) - parseInt(a.initiative, 10))
                .map(character => <Character character={character}
                                             hasTurn={encounter.running && (encounter.current_character_id === character.id)}
                                             onDeleteClicked={() => this.onDelete(character.id)}
                                             key={character.id} /> );
        }

        return (
            <Container>
                <Row>
                    <Col/>
                    <Col xs="auto">
                        <Form onSubmit={this.onSubmit.bind(this)}>
                            <FormGroup row>
                                <Label for="name">Name</Label>
                                <Input type="search" name="search" id="name" placeholder="Character name"
                                       onChange={this.handleInputChange}/>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="initiative">Initiative</Label>
                                <Input type="number" name="number" id="initiative" placeholder="Initiative"
                                       onChange={this.handleInputChange}/>
                            </FormGroup>
                            <FormGroup check row style={{marginBottom: "10px"}}>
                                <Label check>
                                    <Input type="checkbox" name="secret_initiative" id="secret_initiative"
                                           onChange={this.handleInputChange} />Secret initiative
                                </Label>
                            </FormGroup>
                            <FormGroup check row>
                                <Button color="primary">
                                    <AlignedText>
                                        <span className="material-icons" style={{color: "white", marginRight: "10px"}}>add</span>Add new character
                                    </AlignedText>
                                </Button>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col/>
                </Row>
                <hr/>

                <Row style={{marginTop: "20px"}}>
                    <Col/>
                    <Col xs="auto">
                        <ButtonGroup className="align-content-center">
                            <Button color={running? "danger": "primary"}
                                    onClick={this.onStatusChange.bind(this)}>{running? "Stop": "Start"}</Button>
                            {running &&
                            <Button color="primary" onClick={this.onNextTurn.bind(this)}>Next turn</Button>
                            }
                        </ButtonGroup>
                    </Col>
                    <Col/>
                </Row>
                <hr/>

                <Row style={{marginTop: "00px"}}>
                    <Col/>
                    <Col xs="auto">
                        <ListGroup style={{width: "auto"}}>
                            {characters}
                        </ListGroup>
                    </Col>
                    <Col/>
                </Row>

            </Container>
        );
    }
}

export default withRouter(Initiative)
