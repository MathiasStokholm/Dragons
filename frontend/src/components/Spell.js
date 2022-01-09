import React from 'react'
import {Table, Tooltip} from "reactstrap";
import getClasses from "../util/SpellUtils.js"

class Spell extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false
        };
    }

    SCHOOLS = {
        "C": "Conjuration",
        "A": "Abjuration",
        "T": "Transmutation",
        "E": "Enchantment",
        "N": "Necromancy",
        "D": "Divination",
        "V": "Evocation",
        "I": "Illusion"
    };

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
        const spell = this.props.spell;

        // Spell descriptions can be strings or lists of entries
        const entries = spell.entries.map((description, index) =>
            <div key={index}>
                {Spell.isString(description)? (
                    <p>{description}</p>
                ) : (
                    Spell.renderData(description)
                )}
            </div>
        );

        let entriesHigherLevel = "";
        if (spell.entriesHigherLevel) {
            entriesHigherLevel = spell.entriesHigherLevel.map((description, index) =>
                <div key={index}>
                    {Spell.isString(description)? (
                        <p>{description}</p>
                    ) : (
                        Spell.renderData(description)
                    )}
                </div>
            );
        }

        return (
            <div>
                <Table striped condensed>
                    <tbody>
                    <tr>
                        <th>Level:</th>
                        <td>{getClasses(spell).join("/") + " " + spell.level}</td>
                    </tr>
                    <tr>
                        <th>School:</th>
                        <td>{this.SCHOOLS[spell.school]}</td>
                    </tr>
                    <tr>
                        <th>Range:</th>
                        <td>{spell.range.type + " / " + spell.range.distance.amount + " " + spell.range.distance.type}</td>
                    </tr>
                    <tr>
                        <th>Casting time:</th>
                        <td>{spell.time[0].number + " " + spell.time[0].unit}</td>
                    </tr>
                    <tr>
                        <th>Duration:</th>
                        {spell.duration.map(duration =>
                            <td>{duration.type === 'timed'? (
                                duration.duration.amount + " " + duration.duration.type
                            ) : (
                                duration.type
                            )}
                            </td>
                        )}
                    </tr>
                    <tr>
                        <th>Components:</th>
                        <Table condensed>
                            <thead>
                                <th>Verbal</th>
                                <th>Somatic</th>
                                <th>Material</th>
                            </thead>
                            <tbody>
                                <td>{spell.components.v? "Yes": "No"}</td>
                                <td>{spell.components.s? "Yes": "No"}</td>
                                <td>{spell.components.m? (
                                    <div>
                                        <p><span style={{textDecoration: "underline", color:"blue"}} id="tooltip">Yes</span></p>
                                        <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target="tooltip" toggle={this.toggle}>
                                            {spell.components.m}
                                        </Tooltip>
                                    </div>
                                ): (
                                    <p>No</p>
                                )}
                                </td>
                            </tbody>
                        </Table>
                    </tr>
                    <tr>
                        <th>Concentration:</th>
                        <td>{spell.duration[0].concentration? "Yes": "No"}</td>
                    </tr>
                    {spell.ritual &&
                    <tr>
                        <th>Ritual:</th>
                        <td>{spell.ritual}</td>
                    </tr>
                    }
                    <tr>
                        <th>Source & page:</th>
                        <td>{spell.source + ": " + spell.page}</td>
                    </tr>
                    </tbody>
                </Table>

                {entries}

                {entriesHigherLevel}
            </div>
        );
    }
}

export default Spell
