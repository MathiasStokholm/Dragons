import React from 'react'
import {Table, Tooltip} from "reactstrap";
import getClasses from "../util/SpellUtils.js"
import spell from "./Spell";

class Feat extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false
        };
    }

    static renderData(data) {
        if (data.type === 'entries') {
            return (
                <div>
                    <p><b>{data.name}</b></p>
                    <ul>
                        {data.entries.map(entry =>
                            <li>{entry}</li>
                        )}
                    </ul>
                </div>
            )
        } else if (data.type === 'list') {
            return (
                <ul>
                    {data.items.map(entry =>
                        <li>{entry}</li>
                    )}
                </ul>
            )
        } else {
            return <p><b>RENDERING OF TYPE {data.type} NOT SUPPORTED YET - REFER TO BOOK</b></p>
        }
    }

    static isString(data) {
        return typeof data === 'string' || data instanceof String;
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    render() {
        const feat = this.props.feat;

        // Feat descriptions can be strings or lists of entries
        const entries = feat.entries.map((description, index) =>
            <div key={index}>
                {Feat.isString(description) ? (
                    <p>{description}</p>
                ) : (
                    Feat.renderData(description)
                )}
            </div>
        );

        function getAbilityScore() {
            return feat.ability.map(obj => Object.entries(obj).map(([key, value]) => {
                if (key === "choose") {
                    // User can choose between different scores here
                    return <td>{`+${value["amount"]} ${(value["from"].join(" or "))}`}</td>;
                }
                // Regular single ability score improvement
                return <td>{`+${value} ${key}`}</td>;
            }));
        }

        return (
            <div>
                <Table striped condensed>
                    <tbody>
                    {feat.ability &&
                        <tr>
                            <th>Ability Score Improvement(s):</th>
                            {getAbilityScore()}
                        </tr>
                    }
                    <tr>
                        <th>Source & page:</th>
                        <td>{feat.source + ": " + feat.page}</td>
                    </tr>
                    </tbody>
                </Table>

                {entries}
            </div>
        );
    }
}

export default Feat
