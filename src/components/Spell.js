import React from 'react'
import {Table} from "reactstrap";

class Spell extends React.Component {
    static renderData(data) {
        if (data.type === 'table') {
            return <p><b>TABLE RENDERING NOT SUPPORTED YET - REFER TO BOOK</b></p>
        }

        if (data.type === 'entries') {
            return (
                <div>
                    <p>{data.name}</p>
                    <ul>
                        {data.entries.map(entry =>
                            <li>{entry}</li>
                        )}
                    </ul>
                </div>
            )
        }

        if (data.type === 'list') {
            return (
                <ul>
                    {data.items.map(entry =>
                        <li>{entry}</li>
                    )}
                </ul>
            )
        }
    }

    static isString(data) {
        return typeof data === 'string' || data instanceof String;
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
                <Table style={{cellSpacing: 0}}>
                    <tbody>
                    <tr>
                        <th>Level:</th>
                        <td>{spell.classes.fromClassList.map(clazz => clazz.name).join("/") + " " + spell.level}</td>
                    </tr>
                    <tr>
                        <th>School:</th>
                        <td>{spell.school}</td>
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
                    {spell.duration[0].concentration &&
                    <tr>
                        <th>Concentration:</th>
                        <td>Yes</td>
                    </tr>
                    }
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
