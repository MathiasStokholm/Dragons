export default function getScagSpells() {
    return (
        [
            {
                "name": "Booming Blade",
                "source": "SCAG",
                "level": 0,
                "school": "V",
                "time": [
                    {
                        "number": 1,
                        "unit": "action"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "feet",
                        "amount": 5
                    }
                },
                "components": {
                    "v": true,
                    "m": "a weapon"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "rounds",
                            "amount": 1
                        }
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Warlock",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range, otherwise the spell fails. On a hit, the target suffers the attack's normal effects, and it becomes sheathed in booming energy until the start of your next turn. If the target willingly moves before then, it immediately takes {@dice 1d8} thunder damage, and the spell ends.",
                    "This spell's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra {@dice 1d8} thunder damage to the target, and the damage the target takes for moving increases to {@dice 2d8}. Both damage rolls increase by {@dice 1d8} at 11th level and 17th level."
                ],
                "page": 142,
                "damageInflict": [
                    "thunder"
                ]
            },
            {
                "name": "Green-Flame Blade",
                "source": "SCAG",
                "level": 0,
                "school": "V",
                "time": [
                    {
                        "number": 1,
                        "unit": "action"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "feet",
                        "amount": 5
                    }
                },
                "components": {
                    "v": true,
                    "m": "a weapon"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "rounds",
                            "amount": 1
                        }
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Warlock",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "As part of the action used to cast this spell, you must make a melee attack with a weapon against one creature within the spell's range, otherwise the spell fails. On a hit, the target suffers the attack's normal effects, and green fire leaps from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes fire damage equal to your spellcasting ability modifier.",
                    "This spell's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra {@dice 1d8} fire damage to the target, and the fire damage to the second creature increases to {@dice 1d8} + your spellcasting ability modifier. Both damage rolls increase by {@dice 1d8} at 11th level and 17th level."
                ],
                "page": 143,
                "damageInflict": [
                    "fire"
                ]
            },
            {
                "name": "Lightning Lure",
                "source": "SCAG",
                "level": 0,
                "school": "V",
                "time": [
                    {
                        "number": 1,
                        "unit": "action"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "feet",
                        "amount": 15
                    }
                },
                "components": {
                    "v": true
                },
                "duration": [
                    {
                        "type": "instant"
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Warlock",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You create a lash of lightning energy that strikes at one creature of your choice that you can see within range. The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take {@dice 1d8} lightning damage if it is within 5 feet of you.",
                    "The spell's damage increases by {@dice 1d8} when you reach 5th level ({@dice 2d8}), 11th level ({@dice 3d8}), and 17th level ({@dice 4d8})."
                ],
                "page": 143,
                "damageInflict": [
                    "lightning"
                ],
                "savingThrow": [
                    "strength"
                ]
            },
            {
                "name": "Sword Burst",
                "source": "SCAG",
                "level": 0,
                "school": "C",
                "time": [
                    {
                        "number": 1,
                        "unit": "action"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "feet",
                        "amount": 5
                    }
                },
                "components": {
                    "v": true
                },
                "duration": [
                    {
                        "type": "instant"
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Warlock",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You create a momentary circle of spectral blades that sweep around you. Each creature within range, other than you, must succeed on a Dexterity saving throw or take {@dice 1d6} force damage.",
                    "The spell's damage increases by {@dice 1d6} when you reach 5th level ({@dice 2d6}), 11th level ({@dice 3d6}), and 17th level ({@dice 4d6})."
                ],
                "page": 143,
                "damageInflict": [
                    "force"
                ],
                "savingThrow": [
                    "dexterity"
                ]
            }
        ]
    )
}