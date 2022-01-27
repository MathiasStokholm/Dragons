import React from 'react'
import {Table, Tooltip} from "reactstrap";
import processSymbols from "../util/TextUtils";

class Feat extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false
        };
    }

    static renderText(text) {
        return processSymbols(text, (type, value) => <span style={{color: "blue"}}>{value}</span>);
    }

    static renderData(data) {
        if (data.type === 'entries') {
            return (
                <div>
                    <p><b>{data.name}</b></p>
                    <ul>
                        {data.entries.map(entry =>
                            <li>{Feat.renderText(entry)}</li>
                        )}
                    </ul>
                </div>
            )
        } else if (data.type === 'list') {
            return (
                <ul>
                    {data.items.map(entry =>
                        <li>{Feat.renderText(entry)}</li>
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
                    <p>{Feat.renderText(description)}</p>
                ) : (
                    Feat.renderData(description)
                )}
            </div>
        );

        function getPrerequisite() {
            return feat.prerequisite.map(obj => Object.entries(obj).map(([key, value]) => {
                if (key === "proficiency") {
                    // Weapon or armor proficiencies required
                    return <td>{
                        value.map(obj => Object.entries(obj).map(([type, what]) => `${type}: ${what}`))
                            .join(" or ")
                    }</td>;
                } else if (key === "race") {
                    // Certain race or subrace required
                    return <td>{
                        "Race: " + value.map(obj => {
                            return obj["name"] + ("subrace" in obj ? ` (${obj["subrace"]})` : "")
                        }).join(" or ")
                    }</td>;
                } else if (key === "ability") {
                    // Ability of certain level required
                    return <td>{
                        value.map(obj => Object.entries(obj).map(([type, what]) => `${type}: ${what}`))
                            .join(" or ")
                    }</td>;
                } else if (key === "spellcasting" || key === "spellcasting2020") {
                    // Spellcasting ability required
                    return <td>{"Spellcaster"}</td>;
                }
                return <td>{`+${value} ${key}`}</td>;
            }));
        }

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
                    {feat.prerequisite &&
                        <tr>
                            <th>Prerequisite(s):</th>
                            {getPrerequisite()}
                        </tr>
                    }
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
