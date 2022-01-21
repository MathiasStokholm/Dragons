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

    static renderText(text) {
        const reg = new RegExp(/({@\w+ \d?d\d*})/, 'gi');
        const parts = text.split(reg);
        return parts.map(str => {
            if (reg.test(str)) {
                const valReg = new RegExp(/{@(\w+) (\d?d\d*)}/, 'i');
                const matches = str.match(valReg);
                if (matches[0] !== str) {
                    return str
                }
                const type = matches[1]
                const count = matches[2]
                const color = type === "damage" ? "red" : "blue";
                return <span style={{color: color}}>{count}</span>;
            }
            return str;
        });
        //console.log("hello _there_".replace(/_(.*?)_/g, "<div>\$1</div>"));
        //return <div>{text.replace(/{@damage (\d?d\d*)}/g, <span style={{color: "red"}}>\$1</span>)}</div>;
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
                    <p>{description}</p>
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
