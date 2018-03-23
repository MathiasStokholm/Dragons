import React from 'react'
import {Button, ListGroupItem} from "reactstrap";
import {withRouter} from "react-router-dom";

class Character extends React.Component {
    onCrossClick(event) {
        event.preventDefault();
        this.props.onDeleteClicked();
    }

    render() {
        const character = this.props.character;

        return (
            <ListGroupItem color={this.props.hasTurn ? "success" : ""}
                           className="align-middle">
                <b>{character.secret_initiative? "Secret": character.initiative}</b> {character.name}
                <Button
                    onClick={this.onCrossClick.bind(this)}
                    style={{marginLeft: "20px"}}
                    className="material-icons float-right">clear</Button>
            </ListGroupItem>
        );
    }
}

export default withRouter(Character)
