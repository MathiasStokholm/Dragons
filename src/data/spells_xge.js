export default function getXanatharsSpells() {
    return (
        [
            {
                "name": "Abi-Dalzim's Horrid Wilting",
                "source": "XGE",
                "level": 8,
                "school": "N",
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
                        "amount": 150
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "a bit of sponge"
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
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You draw the moisture from every creature in a 30-foot cube centered on a point you choose within range. Each creature in that area must make a Constitution saving throw. Constructs and undead aren't affected, and plants and water elementals make this saving throw with disadvantage. A creature takes {@dice 12d8} necrotic damage on a failed save, or half as much damage on a successful one.",
                    "Nonmagical plants in the area that aren't creatures, such as trees and shrubs, wither and die instantly."
                ],
                "page": 150,
                "damageInflict": [
                    "necrotic"
                ],
                "savingThrow": [
                    "constitution"
                ]
            },
            {
                "name": "Absorb Elements",
                "source": "XGE",
                "level": 1,
                "school": "A",
                "time": [
                    {
                        "number": 1,
                        "unit": "reaction",
                        "condition": "which you take when you take acid, cold, fire, lightning, or thunder damage"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "self"
                    }
                },
                "components": {
                    "s": true
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
                            "name": "Druid",
                            "source": "PHB"
                        },
                        {
                            "name": "Ranger",
                            "source": "PHB"
                        },
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack. You have resistance to the triggering damage type until the start of your next turn. Also, the first time you hit with a melee attack on your next turn, the target takes an extra {@dice 1d6} damage of the triggering type, and the spell ends."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by {@dice 1d6} for each slot level above 1st."
                        ]
                    }
                ],
                "page": 150,
                "damageResist": [
                    "acid",
                    "cold",
                    "fire",
                    "lightning",
                    "thunder"
                ]
            },
            {
                "name": "Aganazzar's Scorcher",
                "source": "XGE",
                "level": 2,
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
                        "amount": 30
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "a red dragon's scale"
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
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "A line of roaring flame 30 feet long and 5 feet wide emanates from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes {@dice 3d8} fire damage on a failed save, or half as much damage on a successful one."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by {@dice 1d8} for each slot level above 2nd."
                        ]
                    }
                ],
                "page": 150,
                "damageInflict": [
                    "fire"
                ],
                "savingThrow": [
                    "dexterity"
                ]
            },
            {
                "name": "Beast Bond",
                "source": "XGE",
                "level": 1,
                "school": "D",
                "time": [
                    {
                        "number": 1,
                        "unit": "action"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "touch"
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "a bit of fur wrapped in a cloth"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 10
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
                        {
                            "name": "Ranger",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You establish a telepathic link with one beast you touch that is friendly to you or {@condition charmed} by you. The spell fails if the beast's Intelligence is 4 or higher. Until the spell ends, the link is active while you and the beast are within line of sight of each other. Through the link, the beast can understand your telepathic messages to it, and it can telepathically communicate simple emotions and concepts back to you. While the link is active, the beast gains advantage on attack rolls against any creature within 5 feet of you that you can see."
                ],
                "page": 150
            },
            {
                "name": "Bones of the Earth",
                "source": "XGE",
                "level": 6,
                "school": "T",
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
                        "amount": 120
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "instant"
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You cause up to six pillars of stone to burst from places on the ground that you can see within range. Each pillar is a cylinder that has a diameter of 5 feet and a height of up to 30 feet. The ground where a pillar appears must be wide enough for its diameter, and you can target ground under a creature if that creature is Medium or smaller. Each pillar has AC 5 and 30 hit points. When reduced to 0 hit points, a pillar crumbles into rubble, which creates an area of difficult terrain with a 10-foot radius that lasts until the rubble is cleared. Each 5-foot diameter portion of the area requires at least 1 minute to clear by hand.",
                    "If a pillar is created under a creature, that creature must succeed on a Dexterity saving throw or be lifted by the pillar. A creature can choose to fail the save.",
                    "If a pillar is prevented from reaching its full height because of a ceiling or other obstacle, a creature on the pillar takes {@dice 6d6} bludgeoning damage and is {@condition restrained}, pinched between the pillar and the obstacle. The {@condition restrained} creature can use an action to make a Strength or Dexterity check (the creature's choice) against the spell's save DC. On a success, the creature is no longer {@condition restrained} and must either move off the pillar or fall off it."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 7th level or higher, you can create two additional pillars for each slot level above 6th."
                        ]
                    }
                ],
                "page": 150,
                "damageInflict": [
                    "bludgeoning"
                ],
                "savingThrow": [
                    "dexterity"
                ],
                "opposedCheck": [
                    "strength",
                    "dexterity"
                ]
            },
            {
                "name": "Catapult",
                "source": "XGE",
                "level": 1,
                "school": "T",
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
                        "amount": 60
                    }
                },
                "components": {
                    "s": true
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
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "Choose one object weighing 1 to 5 pounds within range that isn't being worn or carried. The object flies in a straight line up to 90 feet in a direction you choose before falling to the ground, stopping early if it impacts against a solid surface. If the object would strike a creature, that creature must make a Dexterity saving throw. On a failed save, the object strikes the target and stops moving. When the object strikes something, the object and what it strikes each take {@dice 3d8} bludgeoning damage."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 2nd level or higher, the maximum weight of objects that you can target with this spell increases by 5 pounds, and the damage increases by {@dice 1d8}, for each slot level above 1st."
                        ]
                    }
                ],
                "page": 150,
                "damageInflict": [
                    "bludgeoning"
                ],
                "savingThrow": [
                    "dexterity"
                ]
            },
            {
                "name": "Catnap",
                "source": "XGE",
                "level": 3,
                "school": "E",
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
                        "amount": 30
                    }
                },
                "components": {
                    "s": true,
                    "m": "a pinch of sand"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 10
                        }
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Bard",
                            "source": "PHB"
                        },
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You make a calming gesture, and up to three willing creatures of your choice that you can see within range fall {@condition unconscious} for the spell's duration. The spell ends on a target early if it takes damage or someone uses an action to shake or slap it awake. If a target remains {@condition unconscious} for the full duration, that target gains the benefit of a short rest, and it can't be affected by this spell again until it finishes a long rest."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 4th level or higher, you can target one additional willing creature for each slot level above 3rd."
                        ]
                    }
                ],
                "page": 151
            },
            {
                "name": "Cause Fear",
                "source": "XGE",
                "level": 1,
                "school": "N",
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
                        "amount": 60
                    }
                },
                "components": {
                    "v": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
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
                    "You awaken the sense of mortality in one creature you can see within range. A construct or an undead is immune to this effect. The target must succeed on a Wisdom saving throw or become {@condition frightened} of you until the spell ends. The {@condition frightened} target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success"
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."
                        ]
                    }
                ],
                "page": 151,
                "savingThrow": [
                    "wisdom"
                ]
            },
            {
                "name": "Ceremony",
                "source": "XGE",
                "level": 1,
                "school": "A",
                "time": [
                    {
                        "number": 1,
                        "unit": "hour"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "touch"
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "25 gp worth of powdered silver, which the spell consumes"
                },
                "duration": [
                    {
                        "type": "instant"
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Cleric",
                            "source": "PHB"
                        },
                        {
                            "name": "Paladin",
                            "source": "PHB"
                        }
                    ]
                },
                "meta": {
                    "ritual": true
                },
                "entries": [
                    "You perform a special religious ceremony that is infused with magic. When you cast the spell, choose one of the following rites, the target of which must be within 10 feet of you throughout the casting.",
                    {
                        "type": "entries",
                        "name": "Atonement",
                        "entries": [
                            "You touch one willing creature whose alignment has changed, and you make a DC 20 Wisdom (Insight) check. On a successful check, you restore the target to its original alignment."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Bless Water",
                        "entries": [
                            "You touch one vial of water and cause it to become holy water."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Coming of Age",
                        "entries": [
                            "You touch one humanoid who is a young adult. For the next 24 hours, whenever the target makes an ability check, it can roll a {@dice d4} and add the number rolled to the ability check. A creature can benefit from this rite only once."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Dedication",
                        "entries": [
                            "You touch one humanoid who wishes to be dedicated to your god's service. For the next 24 hours, whenever the target makes a saving throw, it can roll a {@dice d4} and add the number rolled to the save. A creature can benefit from this rite only once."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Funeral Rite",
                        "entries": [
                            "You touch one corpse, and for the next 7 days, the target can't become undead by any means short of a wish spell."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Wedding",
                        "entries": [
                            "You touch adult humanoids willing to be bonded together in marriage. For the next 7 days, each target gains a +2 bonus to AC while they are within 30 feet of each other. A creature can benefit from this rite again only if widowed."
                        ]
                    }
                ],
                "page": 151
            },
            {
                "name": "Chaos Bolt",
                "source": "XGE",
                "level": 1,
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
                        "amount": 120
                    }
                },
                "components": {
                    "v": true,
                    "s": true
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
                        }
                    ]
                },
                "entries": [
                    "You hurl an undulating, warbling mass of chaotic energy at one creature in range. Make a ranged spell attack against the target. On a hit, the target takes {@dice 2d8} damage + {@dice 1d6} damage. Choose one of the {@dice d8}s. The number rolled on that die determines the attack's damage type, as shown below.",
                    {
                        "type": "table",
                        "caption": "Chaos Bolt",
                        "colLabels": [
                            "{@dice d8}",
                            "Damage Type"
                        ],
                        "colStyles": [
                            "col-xs-1 text-align-center",
                            "col-xs-11"
                        ],
                        "rows": [
                            [
                                {
                                    "type": "cell",
                                    "roll": {
                                        "exact": 1
                                    }
                                },
                                "Acid"
                            ],
                            [
                                {
                                    "type": "cell",
                                    "roll": {
                                        "exact": 2
                                    }
                                },
                                "Cold"
                            ],
                            [
                                {
                                    "type": "cell",
                                    "roll": {
                                        "exact": 3
                                    }
                                },
                                "Fire"
                            ],
                            [
                                {
                                    "type": "cell",
                                    "roll": {
                                        "exact": 4
                                    }
                                },
                                "Force"
                            ],
                            [
                                {
                                    "type": "cell",
                                    "roll": {
                                        "exact": 5
                                    }
                                },
                                "Lightning"
                            ],
                            [
                                {
                                    "type": "cell",
                                    "roll": {
                                        "exact": 6
                                    }
                                },
                                "Poison"
                            ],
                            [
                                {
                                    "type": "cell",
                                    "roll": {
                                        "exact": 7
                                    }
                                },
                                "Psychic"
                            ],
                            [
                                {
                                    "type": "cell",
                                    "roll": {
                                        "exact": 8
                                    }
                                },
                                "Thunder"
                            ]
                        ]
                    },
                    "If you roll the same number on both {@dice d8}s, the chaotic energy leaps from the target to a different creature of your choice within 30 feet of it. Make a new attack roll against the new target, and make a new damage roll, which could cause the chaotic energy to leap again.",
                    "A creature can be targeted only once by each casting of this spell."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 2nd level or higher, each target takes {@dice 1d6} extra damage of the type rolled for each slot level above 1st."
                        ]
                    }
                ],
                "page": 151,
                "damageInflict": [
                    "acid",
                    "cold",
                    "fire",
                    "force",
                    "lightning",
                    "poison",
                    "psychic",
                    "thunder"
                ]
            },
            {
                "name": "Charm Monster",
                "source": "XGE",
                "level": 4,
                "school": "E",
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
                        "amount": 30
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "hours",
                            "amount": 1
                        }
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Bard",
                            "source": "PHB"
                        },
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
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
                    "You attempt to charm a creature you can see within range. It must make a Wisdom saving throw, and it does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is {@condition charmed} by you until the spell ends or until you or your companions do anything harmful to it. The {@condition charmed} creature is friendly to you. When the spell ends, the creature knows it was {@condition charmed} by you."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them."
                        ]
                    }
                ],
                "page": 151,
                "savingThrow": [
                    "wisdom"
                ]
            },
            {
                "name": "Control Flames",
                "source": "XGE",
                "level": 0,
                "school": "T",
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
                        "amount": 60
                    }
                },
                "components": {
                    "s": true
                },
                "duration": [
                    {
                        "type": "instant"
                    },
                    {
                        "type": "timed",
                        "duration": {
                            "type": "hours",
                            "amount": 1
                        }
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You choose nonmagical flame that you can see within range and that fits within a 5-foot cube. You affect it in one of the following ways:",
                    {
                        "type": "list",
                        "items": [
                            "You instantaneously expand the flame 5 feet in one direction, provided that wood or other fuel is present in the new location.",
                            "You instantaneously extinguish the flames within the cube.",
                            "You double or halve the area of bright light and dim light cast by the flame, change its color, or both. The change lasts for 1 hour.",
                            "You cause simple shapes\u2014such as the vague form of a creature, an inanimate object, or a location\u2014to appear within the flames and animate as you like. The shapes last for 1 hour."
                        ]
                    },
                    "If you cast this spell multiple times, you can have up to three non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
                ],
                "page": 152
            },
            {
                "name": "Control Winds",
                "source": "XGE",
                "level": 5,
                "school": "T",
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
                        "amount": 300
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "hours",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You take control of the air in a 100-foot cube that you can see within range. Choose one of the following effects when you cast the spell. The effect lasts for the spell's duration, unless you use your action on a later turn to switch to a different effect. You can also use your action to temporarily halt the effect or to restart one you've halted.",
                    {
                        "type": "entries",
                        "name": "Gusts",
                        "entries": [
                            "A wind picks up within the cube, continually blowing in a horizontal direction you designate. You choose the intensity of the wind: calm, moderate, or strong. If the wind is moderate or strong, ranged weapon attacks that pass through it or that are made against targets within the cube have disadvantage on their attack rolls. If the wind is strong, any creature moving against the wind must spend 1 extra foot of movement for each foot moved."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Downdraft",
                        "entries": [
                            "You cause a sustained blast of strong wind to blow downward from the top of the cube. Ranged weapon attacks that pass through the cube or that are made against targets within it have disadvantage on their attack rolls. A creature must make a Strength saving throw if it flies into the cube for the first time on a turn or starts its turn there flying. On a failed save, the creature is knocked {@condition prone}."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Updraft",
                        "entries": [
                            "You cause a sustained updraft within the cube, rising upward from the cube's bottom side. Creatures that end a fall within the cube take only half damage from the fall. When a creature in the cube makes a vertical jump, the creature can jump up to 10 feet higher than normal."
                        ]
                    }
                ],
                "page": 152,
                "savingThrow": [
                    "strength"
                ]
            },
            {
                "name": "Create Bonfire",
                "source": "XGE",
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
                        "amount": 60
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
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
                    "You create a bonfire on ground that you can see within range. Until the spell ends, the bonfire fills a 5-foot cube. Any creature in the bonfire's space when you cast the spell must succeed on a Dexterity saving throw or take {@dice 1d8} fire damage. A creature must also make the saving throw when it enters the bonfire's space for the first time on a turn or ends its turn there.",
                    "The spell's damage increases by {@dice 1d8} when you reach 5th level ({@dice 2d8}), 11th level ({@dice 3d8}), and 17th level ({@dice 4d8})."
                ],
                "page": 152,
                "damageInflict": [
                    "fire"
                ],
                "savingThrow": [
                    "dexterity"
                ]
            },
            {
                "name": "Create Homunculus",
                "source": "XGE",
                "level": 6,
                "school": "T",
                "time": [
                    {
                        "number": 1,
                        "unit": "hour"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "touch"
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "clay, ash, and mandrake root, all of which the spell consumes, and a jewel-encrusted dagger worth at least 1,000 gp"
                },
                "duration": [
                    {
                        "type": "instant"
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "While speaking an intricate incantation, you cut yourself with a jewel-encrusted dagger, taking {@dice 2d4} piercing damage that can't be reduced in any way. You then drip your blood on the spell's other components and touch them, transforming them into a special construct called a homunculus.",
                    "The statistics of the homunculus are in the Monster Manual. It is you faithful companion, and it dies if you die. Whenever you finish a long rest, you can spend up to half your Hit Dice if the homunculus is on the same plane of existence as you. When you do so, roll each die and add your Constitution modifier to it. Your hit point maximum is reduced by that total, and the homunculus's hit point maximum and current hit points are both increased by it. This process can reduce you to no lower than 1 hit point, and the change to your and the homunculus's hit points ends when you finish your next long rest. The reduction your hit point maximum can't be removed by any means before then, except by the homunculus's death.",
                    "You can have only one homunculus at a time. If you cast this spell while your homunculus lives, the spell fails."
                ],
                "page": 152
            },
            {
                "name": "Crown of Stars",
                "source": "XGE",
                "level": 7,
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
                        "type": "self"
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "hours",
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
                    "Seven star-like motes of light appear and orbit your head until the spell ends. You can use a bonus action to send one of the motes streaking toward one creature or object within 120 feet of you. When you do so, make a ranged spell attack. On a hit, the target takes {@dice 4d12} radiant damage. Whether you hit or miss, the mote is expended. The spell ends early if you expend the last mote.",
                    "If you have four or more motes remaining, they shed bright light in a 30-foot radius and dim light for an additional 30 feet. If you have one to three motes remaining, they shed dim light in a 30-foot radius."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 8th level or higher, the number of motes created increases by two for each slot level above 7th."
                        ]
                    }
                ],
                "page": 152,
                "damageInflict": [
                    "radiant"
                ]
            },
            {
                "name": "Danse Macabre",
                "source": "XGE",
                "level": 5,
                "school": "N",
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
                        "amount": 60
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "hours",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
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
                    "Threads of dark power leap from your fingers to pierce up to five Small or Medium corpses you can see within range. Each corpse immediately stands up and becomes undead. You decide whether it is a zombie or a skeleton (the statistics for zombies and skeletons are in the Monster Manual), and it gains a bonus to its attack and damage rolls equal to your spellcasting ability modifier.",
                    "You can use a bonus action to mentally command the creatures you make with this spell, issuing the same command to all of them. To receive the command, a creature must be within 60 feet of you. You decide what action the creatures will take and where they will move during their next turn, or you can issue a general command, such as to guard a chamber or passageway against your foes. If you issue no commands, the creature do nothing except defend themselves against hostile creatures. Once given an order, the creatures continue to follow it until their task is complete.",
                    "The creatures are under your control until the spell ends, after which they become inanimate once more."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 6th level or higher, you animate up to two additional corpses for each slot level above 5th."
                        ]
                    }
                ],
                "page": 153
            },
            {
                "name": "Dawn",
                "source": "XGE",
                "level": 5,
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
                        "amount": 60
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "a sunburst pendant worth at least 100 gp"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Cleric",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "The light of dawn shines down on a location you specify within range. Until the spell ends, a 30-foot-radius, 40-foot-high cylinder of bright light glimmers there. This light is sunlight.",
                    "When the cylinder appears, each creature in it must make a Constitution saving throw, taking {@dice 4d10} radiant damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw whenever it ends its turn in the cylinder.",
                    "If you're within 60 feet of the cylinder, you can move it up to 60 feet as a bonus action on your turn."
                ],
                "page": 153,
                "damageInflict": [
                    "radiant"
                ],
                "savingThrow": [
                    "constitution"
                ]
            },
            {
                "name": "Dragon's Breath",
                "source": "XGE",
                "level": 2,
                "school": "T",
                "time": [
                    {
                        "number": 1,
                        "unit": "bonus"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "touch"
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "a hot pepper"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You touch one willing creature and imbue it with the power to spew magical energy from its mouth, provided it has one. Choose acid, cold, fire, lightning, or poison. Until the spell ends, the creature can use an action to exhale energy of the chosen type in a 15-foot cone. Each creature in that area must make a Dexterity saving throw, taking {@dice 3d6} damage of the chosen type on a failed save, or half as much damage on a successful one."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by {@dice 1d6} for each slot level above 2nd."
                        ]
                    }
                ],
                "page": 154,
                "savingThrow": [
                    "dexterity"
                ]
            },
            {
                "name": "Druid Grove",
                "source": "XGE",
                "level": 6,
                "school": "A",
                "time": [
                    {
                        "number": 10,
                        "unit": "minute"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "touch"
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "mistletoe, which the spell consumes, that was harvested with a golden sickle under the light of a full moon"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "hours",
                            "amount": 24
                        }
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You invoke the spirits of nature to protect an area outdoors or underground. The area can be as small as a 30-foot cube or as large as 90-foot cube. Buildings and other structures are excluded from the affected area. If you can cast this spell in the same area every day for a year, the spell lasts until dispelled.",
                    "The spell creates the following effects within the area. When you cast this spell, you can specify creatures as friends who are immune to the effects. You can also specify a password that, when spoken aloud, makes the speaker immune to these effects.",
                    "The entire warded area radiates magic. A dispel magic cast on the area, if successful, removes only one of the following effects, not the entire area. That spell's caster chooses which effect to end. Only when all its effects are gone is this spell dispelled.",
                    {
                        "type": "entries",
                        "name": "Solid Fog",
                        "entries": [
                            "You can fill any number of 5-foot squares on the ground with thick fog, making them heavily obscured. The fog reaches 10 feet high. In addition, every foot of movement through the fog costs 2 extra feet. To a creature immune to this effect, the fog obscures nothing and looks like soft mist, with motes of green light floating in the air."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Grasping Undergrowth",
                        "entries": [
                            "You can fill any number of 5-foot squares on the ground that aren't filled with fog with grasping weeds and vines, as if they were affected by an entangle spell. To a creature immune to this effect the weeds and vines feel soft and reshape themselves to serve as temporary seats or beds."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Grove Guardians",
                        "entries": [
                            "You can animate up to four trees in the area, causing them to uproot themselves from the ground. These trees have the same statistics as an awakened tree, which appears in the Monster Manual, except they can't speak, and their bark is covered with druidic symbols. If any creature not immune to this effect enters the warded area, the grove guardians fight until they have drive off or slain the intruders. The grove guardians also obey your spoken commands (no action required by you) that you issue while in the area. If you don't give them commands and no intruders are present, the grove guardians do nothing. The grove guardians can't leave the the warded area. When the spell ends, the magic animating them disappears, and the trees take root again if possible."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Additional Spell Effect",
                        "entries": [
                            "You can place your choice of one of the following magical effects within the warded area:"
                        ]
                    },
                    {
                        "type": "list",
                        "items": [
                            "A constant gust of wind in two locations of your choice",
                            "Spike growth in one location of your choice",
                            "Wind wall in two locations of your choice"
                        ]
                    },
                    "To a creature immune to this effect, the winds are a fragrant, gentle breeze, and the area of spike growth is harmless."
                ],
                "page": 154
            },
            {
                "name": "Dust Devil",
                "source": "XGE",
                "level": 2,
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
                        "amount": 60
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "a pinch of dust"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "Choose an unoccupied 5-foot cube of air that you can see within range. An elemental force that resembles a dust devil appears in the cube and lasts for the spell's duration.",
                    "Any creature that ends its turn within 5 feet of the dust devil must make a Strength saving throw. On a failed save, the creature takes {@dice 1d8} bludgeoning damage and is pushed 10 feet away from the dust devil. On a successful save, the creature takes half as much damage and isn't pushed.",
                    "As a bonus action, you can move the dust devil up to 30 feet in any direction. If the dust devil moves over sand, dust, loose dirt, or light gravel, it sucks up the material and forms a 10-foot-radius cloud of debris around itself that lasts until the start of your next turn. The cloud heavily obscures its area."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by {@dice 1d8} for each slot level above 2nd."
                        ]
                    }
                ],
                "page": 154,
                "damageInflict": [
                    "bludgeoning"
                ],
                "savingThrow": [
                    "strength"
                ]
            },
            {
                "name": "Earth Tremor",
                "source": "XGE",
                "level": 1,
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
                        "amount": 10
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "instant"
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Bard",
                            "source": "PHB"
                        },
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You cause a tremor in the ground within range. Each creature other than you in that area must make a Dexterity saving throw. On a failed save, a creature takes {@dice 1d6} bludgeoning damage and is knocked {@condition prone}. If the ground in that area is loose earth or stone, it becomes difficult terrain until cleared, with each 5-foot diameter portion requiring at least 1 minute to clear by hand."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by {@dice 1d6} for each slot level above 1st."
                        ]
                    }
                ],
                "page": 155,
                "damageInflict": [
                    "bludgeoning"
                ],
                "savingThrow": [
                    "dexterity"
                ]
            },
            {
                "name": "Earthbind",
                "source": "XGE",
                "level": 2,
                "school": "T",
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
                        "amount": 300
                    }
                },
                "components": {
                    "v": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
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
                    "Choose one creature you can see within range. Yellow strips of magical energy loop around the creature. The target must succeed on a Strength saving throw, or its flying speed (if any) is reduced to 0 feet for the spell's duration. An airborne creature affected by this spell safely descends at 60 feet per round until it reaches the ground or the spell ends."
                ],
                "page": 154,
                "savingThrow": [
                    "strength"
                ]
            },
            {
                "name": "Elemental Bane",
                "source": "XGE",
                "level": 4,
                "school": "T",
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
                        "amount": 90
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
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
                    "Choose one creature you can see within range, and choose one of the following damage types: acid, cold, fire, lightning, or thunder. The target must succeed on a Constitution saving throw or be affected by the spell for its duration. The first time each turn the affected target takes damage of the chosen type, the target takes an extra {@dice 2d6} damage of that type. Moreover, the target loses any resistance to that damage type until the spell ends."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th. The creatures must be within 30 feet of each other when you target them."
                        ]
                    }
                ],
                "page": 155,
                "damageInflict": [
                    "acid",
                    "cold",
                    "fire",
                    "lightning",
                    "thunder"
                ],
                "savingThrow": [
                    "constitution"
                ]
            },
            {
                "name": "Enemies Abound",
                "source": "XGE",
                "level": 3,
                "school": "E",
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
                        "amount": 120
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Bard",
                            "source": "PHB"
                        },
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
                    "You reach into the mind of one creature you can see and force it to make an Intelligence saving throw. A creature automatically succeeds if it is immune to being {@condition frightened}. On a failed save, the target loses the ability to distinguish friend from foe, regarding all creatures it can see as enemies until the spell ends. Each time the target takes damage, it can repeat the saving throw, ending the effect on itself on a success.",
                    "Whenever the affected creature chooses another creature as a target, it must choose the target at random from among the creatures it can see within range of the attack, spell, or other ability it's using. If an enemy provokes an opportunity attack from the affected creature, the creature must make that attack if it is able to."
                ],
                "page": 155,
                "savingThrow": [
                    "intelligence"
                ]
            },
            {
                "name": "Enervation",
                "source": "XGE",
                "level": 5,
                "school": "N",
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
                        "amount": 60
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 1
                        },
                        "concentration": true
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
                    "A tendril of inky darkness reaches out from you, touching a creature you can see within range to drain life from it. The target must make a Dexterity saving throw. On a successful save, the target takes {@dice 2d8} necrotic damage, and the spell ends. On a failed save, the target takes {@dice 4d8} necrotic damage, and until the spell ends, you can use your action on each of your turns to automatically deal {@dice 4d8} necrotic damage to the target. The spell ends if you use your action to do anything else, if the target is ever outside the spell's range, or if the target has total cover from you.",
                    "Whenever the spell deals damage to a target, you regain hit points equal to half the amount of necrotic damage the target takes."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 6th level or higher, the damage increases by {@dice 1d8} for each slot level above 5th."
                        ]
                    }
                ],
                "page": 155,
                "damageInflict": [
                    "necrotic"
                ],
                "savingThrow": [
                    "dexterity"
                ]
            },
            {
                "name": "Erupting Earth",
                "source": "XGE",
                "level": 3,
                "school": "T",
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
                        "amount": 120
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "a piece of obsidian"
                },
                "duration": [
                    {
                        "type": "instant"
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "Choose a point you can see on the ground within range. A fountain of churned earth and stone erupts in a 20-foot cube centered on that point. Each creature in that area must make a Dexterity saving throw. A creature takes {@dice 3d12} bludgeoning damage on a failed save, or half as much damage on a successful one. Additionally, the ground in that area becomes difficult terrain until cleared. Each 5-foot-square portion of the area requires at least 1 minute to clear by hand."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 4th level or higher, the damage increases by {@dice 1d12} for each slot level above 3rd."
                        ]
                    }
                ],
                "page": 155,
                "damageInflict": [
                    "bludgeoning"
                ],
                "savingThrow": [
                    "dexterity"
                ]
            },
            {
                "name": "Far Step",
                "source": "XGE",
                "level": 5,
                "school": "C",
                "time": [
                    {
                        "number": 1,
                        "unit": "bonus"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "self"
                    }
                },
                "components": {
                    "v": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 1
                        },
                        "concentration": true
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
                    "You teleport up to 60 feet to an unoccupied space you can see. On each of your turns before the spell ends, you can use a bonus action to teleport in this way again."
                ],
                "page": 155
            },
            {
                "name": "Find Greater Steed",
                "source": "XGE",
                "level": 4,
                "school": "C",
                "time": [
                    {
                        "number": 10,
                        "unit": "minute"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "feet",
                        "amount": 30
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "instant"
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Paladin",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You summon a spirit that assumes the form of a loyal, majestic mount. Appearing in an unoccupied space within range, the spirit takes on a form you choose: a griffon, a pegasus, a peryton, a dire wolf, a rhinoceros, or a saber-toothed tiger. The creature has the statistics provided in the Monster Manual for the chosen form, though it is a celestial, a fey, or a fiend (your choice) instead of its normal creature type. Additionally, if it has an Intelligence score of 5 of lower, its Intelligence becomes 6, and it gains the ability to understand one language of your choice that you speak.",
                    "You control the mount in combat. While the mount is within 1 mile of you, you can communicate with it telepathically. While mounted on it, you can make any spell you cast that targets only you also target the mount.",
                    "The mount disappears temporarily when it drops to 0 hit points or when you dismiss it as an action. Casting this spell again re-summons the bonded mount, with all its hit points restored and any conditions removed.",
                    "You can't have more than one mount bonded by this spell or find steed at any time. As an action, you can release a mount from its bond, causing it to disappear permanently.",
                    "Whenever the mount disappears, it leaves behind any objects it was wearing or carrying."
                ],
                "page": 156
            },
            {
                "name": "Flame Arrows",
                "source": "XGE",
                "level": 3,
                "school": "T",
                "time": [
                    {
                        "number": 1,
                        "unit": "action"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "touch"
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "hours",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
                        {
                            "name": "Ranger",
                            "source": "PHB"
                        },
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You touch a quiver containing arrows or bolts. When a target is hit by a ranged weapon attack using a piece of ammunition drawn from the quiver, the target takes an extra {@dice 1d6} fire damage. The spell's magic ends on the piece of ammunition when it hits or misses, and the spell ends when twelve pieces of ammunition have been drawn from the quiver."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 4th level or higher, the number of pieces of ammunition you can affect with this spell increases by two for each slot level above 3rd."
                        ]
                    }
                ],
                "page": 156,
                "damageInflict": [
                    "fire"
                ]
            },
            {
                "name": "Frostbite",
                "source": "XGE",
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
                        "amount": 60
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "instant"
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
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
                    "You cause numbing frost to form on one creature that you can see within range. The target must make a Constitution saving throw. On a failed save, the target takes {@dice 1d6} cold damage, and it has disadvantage on the next weapon attack roll it makes before the end of its next turn.",
                    "The spell's damage increases by {@dice 1d6} when you reach 5th level ({@dice 2d6}), 11th level ({@dice 3d6}), and 17th level ({@dice 4d6})."
                ],
                "page": 156,
                "damageInflict": [
                    "cold"
                ],
                "savingThrow": [
                    "constitution"
                ]
            },
            {
                "name": "Guardian of Nature",
                "source": "XGE",
                "level": 4,
                "school": "T",
                "time": [
                    {
                        "number": 1,
                        "unit": "bonus"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "self"
                    }
                },
                "components": {
                    "v": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
                        {
                            "name": "Ranger",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "A nature spirit answers your call and transforms you into a powerful guardian. The transformation lasts until the spell ends. You choose one of the following forms to assume: Primal Beast or Great Tree.",
                    {
                        "type": "entries",
                        "name": "Primal Beast",
                        "entries": [
                            "Bestial fur covers your body, your facial feature becomes feral, and you gain the following benefits."
                        ]
                    },
                    {
                        "type": "list",
                        "items": [
                            "Your walking speed increases by 10 feet.",
                            "You gain darkvision with a range of 120 feet.",
                            "You make Strength-based attack rolls with advantage.",
                            "Your melee weapon attacks deal an extra {@dice 1d6} force damage on a hit."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Great Tree",
                        "entries": [
                            "Your skin appears barky, leaves sprout from your hair, and you gain the following benefits:"
                        ]
                    },
                    {
                        "type": "list",
                        "items": [
                            "You gain 10 temporary hit points.",
                            "You make Constitution saving throws with advantage.",
                            "You make Dexterity- and Wisdom-based attack rolls with advantage.",
                            "While you are on the ground, the ground within 15 feet of you is difficult terrain for your enemies."
                        ]
                    }
                ],
                "page": 157,
                "damageInflict": [
                    "force"
                ],
                "savingThrow": [
                    "constitution"
                ]
            },
            {
                "name": "Gust",
                "source": "XGE",
                "level": 0,
                "school": "T",
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
                        "amount": 30
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "instant"
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You seize the air and compel it to create one of the following effects at a point you can see within range:",
                    {
                        "type": "list",
                        "items": [
                            "One Medium or smaller creature that you choose must succeed on a Strength saving throw or be pushed up to 5 feet away from you.",
                            "You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away from you. It isn't pushed with enough force to cause damage.",
                            "You create a harmless sensory effect using air, such as causing leaves to rustle, wind to slam shutters shut, or your clothing to ripple in a breeze."
                        ]
                    }
                ],
                "page": 157,
                "savingThrow": [
                    "strength"
                ]
            },
            {
                "name": "Healing Spirit",
                "source": "XGE",
                "level": 2,
                "school": "C",
                "time": [
                    {
                        "number": 1,
                        "unit": "bonus"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "feet",
                        "amount": 60
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
                        {
                            "name": "Ranger",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You call forth a nature spirit to soothe the wounded. The intangible spirit appears in a space that is a 5-foot cube you can see within range. The spirit looks like a transparent beast or fey (your choice).",
                    "Until the spell ends, whenever you or a creature you can see moves into the spirit's space for the first time on a turn or starts its turn there, you can cause the spirit to restore {@dice 1d6} hit points to that creature (no action required). The spirit can't heal constructs or undead.",
                    "As a bonus action on your turn, you can move the spirit up to 30 feet to a space you can see."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 3rd level or higher, the healing increases by {@dice 1d6} for each slot level above 2nd."
                        ]
                    }
                ],
                "page": 157
            },
            {
                "name": "Holy Weapon",
                "source": "XGE",
                "level": 5,
                "school": "V",
                "time": [
                    {
                        "number": 1,
                        "unit": "bonus"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "touch"
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "hours",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Cleric",
                            "source": "PHB"
                        },
                        {
                            "name": "Paladin",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You imbue a weapon you touch with holy power. Until the spell ends, the weapon emits bright light in a 30-foot radius and dim light for an additional 30 feet. In addition, weapon attacks made with it deal an extra {@dice 2d8} radiant damage on a hit. If the weapon isn't already a magic weapon, it becomes one for the duration.",
                    "As a bonus action on your turn, you can dismiss this spell and cause the weapon to emit a burst of radiance. Each creature of your choice that you can see within 30 feet of you must make a Constitution saving throw. On a failed save, a creature takes {@dice 4d8} radiant damage, and it is {@condition blinded} for 1 minute. On a successful save, a creature takes half as much damage and isn't {@condition blinded}. At the end of each of its turns, a {@condition blinded} creature can make a Constitution saving throw, ending the effect on itself on a success."
                ],
                "page": 157,
                "damageInflict": [
                    "radiant"
                ],
                "savingThrow": [
                    "constitution"
                ]
            },
            {
                "name": "Ice Knife",
                "source": "XGE",
                "level": 1,
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
                        "amount": 60
                    }
                },
                "components": {
                    "s": true,
                    "m": "a drop of water or piece of ice"
                },
                "duration": [
                    {
                        "type": "instant"
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You create a shard of ice and fling it at one creature within range. Make a ranged spell attack against the target. On a hit, the target takes {@dice 1d10} piercing damage. Hit or miss, the shard then explodes. The target and each creature within 5 feet of it must succeed on a Dexterity saving throw or take {@dice 2d6} cold damage."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 2nd level or higher, the cold damage increases by {@dice 1d6} for each slot level above 1st."
                        ]
                    }
                ],
                "page": 157,
                "damageInflict": [
                    "cold",
                    "piercing"
                ],
                "savingThrow": [
                    "dexterity"
                ]
            },
            {
                "name": "Illusory Dragon",
                "source": "XGE",
                "level": 8,
                "school": "I",
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
                        "amount": 120
                    }
                },
                "components": {
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "By gathering threads of shadow material from the Shadowfell, you create a Huge shadowy dragon in an unoccupied space that you can see within range. The illusion lasts for the spell's duration and occupies its space, as if it were a creature",
                    "When the illusion appears, any of your enemies that can see it must succeed on a Wisdom saving throw or become {@condition frightened} of it for 1 minute. If a {@condition frightened} creature ends its turn in a location where it doesn't have line of sight to the illusion, it can repeat the saving throw, ending the effect on itself on a success.",
                    "As a bonus action on your turn, you can move the illusion up to 60 feet. At any point during its movement, you can cause it to exhale a blast of energy in a 60-foot cone originating from its space. When you create the dragon, choose a damage type: acid, cold, fire, lightning, necrotic, or poison. Each creature in the cone must make an Intelligence saving throw, taking {@dice 7d6} damage of the chosen damage type on a failed save, or half as much damage on a successful one.",
                    "The illusion is tangible because of the shadow stuff used to create it, but attacks miss it automatically, it succeeds on all saving throws, and it is immune to all damage and conditions. A creature that uses an action to examine the dragon can determine that it is an illusion by succeeding on an Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through it and has advantage on saving throws against its breath."
                ],
                "page": 157,
                "damageInflict": [
                    "acid",
                    "cold",
                    "fire",
                    "lightning",
                    "necrotic",
                    "poison"
                ],
                "savingThrow": [
                    "wisdom",
                    "intelligence"
                ],
                "opposedCheck": [
                    "intelligence"
                ]
            },
            {
                "name": "Immolation",
                "source": "XGE",
                "level": 5,
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
                        "amount": 90
                    }
                },
                "components": {
                    "v": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "Flames wreathe one creature you can see within range. The target must make a Dexterity saving throw. It takes {@dice 8d6} fire damage on a failed save, or half as much damage on a successful one. On a failed save, the target also burns for the spell's duration. The burning target sheds bright light in a 30-foot radius and dim light for an additional 30 feet. At the end of each of its turns, the target repeats the saving throw. It takes {@dice 4d6} fire damage on a failed save, and the spell ends on a successful one. These magical flames can't be extinguished by nonmagical means.",
                    "If damage from this spell kills a target, the target is turned to ash."
                ],
                "page": 158,
                "damageInflict": [
                    "fire"
                ],
                "savingThrow": [
                    "dexterity"
                ]
            },
            {
                "name": "Infernal Calling",
                "source": "XGE",
                "level": 5,
                "school": "C",
                "time": [
                    {
                        "number": 1,
                        "unit": "minute"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "feet",
                        "amount": 90
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "a ruby worth at least 999 gp"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "hours",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
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
                    "Uttering a dark incantation, you summon a devil from the Nine Hells. You choose the devil's type, which must be one of challenge rating 6 or lower, such as a barbed devil or a bearded devil. The devil appears in an unoccupied space that you can see within range. The devil disappears when it drops to 0 hit points or when the spell ends.",
                    "The devil is unfriendly toward you and your companions. Roll initiative for the devil, which has its own turns. It is under the Dungeon Master's control and acts according to its nature on each of its turns, which might result in its attacking you if it thinks it can prevail, or trying to tempt you to undertake an evil act in exchange for limited service. The DM has the creature's statistics.",
                    "On each of your turns, you can try to issue a verbal command to the devil (no action required by you). It obeys the command if the likely outcome is in accordance with its desires, especially if the result would draw you toward evil. Otherwise, you must make a Charisma (Deception, Intimidation, or Persuasion) check contested by its Wisdom (Insight) check. You make the check with advantage if you say the devil's true name. If your check fails, the devil becomes immune to your verbal commands for the duration of the spell, though it can still carry out your commands if it chooses. If your check succeeds, the devil carries out your command\u2014such as \"attack my enemies,\" \"explore the room ahead,\" or \"bear this message to the queen\"\u2014until it completes the activity, at which point it returns to you to report having done so.",
                    "If your concentration ends before the spell reaches its full duration, the devil doesn't disappear if it has become immune to your verbal commands. Instead, it acts in whatever manner it chooses for {@dice 3d6} minutes, and then it disappears.",
                    "If you possess an individual devil's talisman, you can summon that devil if it is of the appropriate challenge rating plus 1, and it obeys all your commands, with no Charisma checks required."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 6th level or higher, the challenge rating increases by 1 for each slot level above 5th."
                        ]
                    }
                ],
                "page": 158
            },
            {
                "name": "Infestation",
                "source": "XGE",
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
                        "amount": 30
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "a living flea"
                },
                "duration": [
                    {
                        "type": "instant"
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
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
                    "You cause a cloud of mites, fleas, and other parasites to appear momentarily on one creature you can see within range. The target must succeed on a Constitution saving throw, or it takes {@dice 1d6} poison damage and moves 5 feet in a random direction if it can move and its speed is at least 5 feet. Roll a {@dice d4} for the direction: 1, north; 2, south; 3, east; or 4, west. This movement doesn't provoke opportunity attacks, and if the direction rolled is blocked, the target doesn't move",
                    "The spell's damage increases by {@dice 1d6} when you reach 5th level ({@dice 2d6}), 11th level ({@dice 3d6}), and 17th level ({@dice 4d6})."
                ],
                "page": 158,
                "damageInflict": [
                    "poison"
                ],
                "savingThrow": [
                    "constitution"
                ]
            },
            {
                "name": "Investiture of Flame",
                "source": "XGE",
                "level": 6,
                "school": "T",
                "time": [
                    {
                        "number": 1,
                        "unit": "action"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "self"
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 10
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
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
                    "Flames race across your body, shedding bright light in a 30-foot radius and dim light for an additional 30 feet for the spell's duration. The flames don't harm you. Until the spell ends, you gain the following benefits.",
                    {
                        "type": "list",
                        "items": [
                            "You are immune to fire damage and have resistance to cold damage.",
                            "Any creature that moves within 5 feet of you for the first time on a turn or ends its turn there takes {@dice 1d10} fire damage.",
                            "You can use your action to create a line of fire 15 feet long and 5 feet wide extending from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes {@dice 4d8} fire damage on a failed save, or half as much damage on a successful one."
                        ]
                    }
                ],
                "page": 159,
                "damageImmune": [
                    "fire"
                ],
                "damageInflict": [
                    "fire"
                ],
                "damageResist": [
                    "cold"
                ],
                "savingThrow": [
                    "dexterity"
                ]
            },
            {
                "name": "Investiture of Ice",
                "source": "XGE",
                "level": 6,
                "school": "T",
                "time": [
                    {
                        "number": 1,
                        "unit": "action"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "self"
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 10
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
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
                    "Until the spell ends, ice rimes your body, and you gain the following benefits.",
                    {
                        "type": "list",
                        "items": [
                            "You are immune to cold damage and have resistance to fire damage.",
                            "You can move across difficult terrain created by ice or snow without spending extra movement.",
                            "The ground in a 10-foot radius around you is icy and is difficult terrain for creatures other than you. The radius moves with you.",
                            "You can use your action to create a 15-foot cone of freezing wind extending from your outstretched hand in a direction you choose. Each creature in the cone must make a Constitution saving throw. A creature takes {@dice 4d6} cold damage on a failed save, or half as much damage on a successful one. A creature that fails its save against this effect has its speed halved until the start of your next turn."
                        ]
                    }
                ],
                "page": 159,
                "damageImmune": [
                    "cold"
                ],
                "damageInflict": [
                    "cold"
                ],
                "damageResist": [
                    "fire"
                ],
                "savingThrow": [
                    "constitution"
                ]
            },
            {
                "name": "Investiture of Stone",
                "source": "XGE",
                "level": 6,
                "school": "T",
                "time": [
                    {
                        "number": 1,
                        "unit": "action"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "self"
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 10
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
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
                    "Until the spell ends, bits of rock spread across your body, and you gain the following benefits.",
                    {
                        "type": "list",
                        "items": [
                            "You have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.",
                            "You can use your action to create a small earthquake on the ground in a 15-foot radius centered on you. Other creatures on that ground must succeed on a Dexterity saving throw or be knocked {@condition prone}.",
                            "You can move across difficult terrain made of earth or stone without spending extra movement. You can move through solid earth or stone as if it was air and without destabilizing it, but you can't end your movement there. If you do so, you are ejected to the nearest unoccupied space, this spell ends, and you are {@condition stunned} until the end of your next turn."
                        ]
                    }
                ],
                "page": 159,
                "damageResist": [
                    "bludgeoning",
                    "piercing",
                    "slashing"
                ],
                "savingThrow": [
                    "dexterity"
                ]
            },
            {
                "name": "Investiture of Wind",
                "source": "XGE",
                "level": 6,
                "school": "T",
                "time": [
                    {
                        "number": 1,
                        "unit": "action"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "self"
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 10
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
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
                    "Until the spell ends, wind whirls around you, and you gain the following benefits.",
                    {
                        "type": "list",
                        "items": [
                            "Ranged weapon attacks made against you have disadvantage on the attack roll.",
                            "You gain a flying speed of 60 feet. If you are still flying when the spell ends, you fall, unless you can somehow prevent it.",
                            "You can use your action to create a 15-foot cube of swirling wind centered on a point you can see within 60 feet of you. Each creature in that area must make a Constitution saving throw. A creature takes {@dice 2d10} bludgeoning damage on a failed save, or half as much damage on a successful one. If a Large or smaller creature fails the save, that creature is also pushed up to 10 feet away from the center of the cube."
                        ]
                    }
                ],
                "page": 160,
                "damageInflict": [
                    "bludgeoning"
                ],
                "savingThrow": [
                    "constitution"
                ]
            },
            {
                "name": "Invulnerability",
                "source": "XGE",
                "level": 9,
                "school": "A",
                "time": [
                    {
                        "number": 1,
                        "unit": "action"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "self"
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "a small piece of adamantine worth at least 500 gp, which the spell consumes"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 10
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You are immune to all damage until the spell ends."
                ],
                "page": 160
            },
            {
                "name": "Life Transference",
                "source": "XGE",
                "level": 3,
                "school": "N",
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
                        "amount": 30
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "instant"
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Cleric",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You sacrifice some of your health to mend another creature's injuries. You take {@dice 4d8} necrotic damage, and one creature of your choice that you can see within range regains a number of hit points equal to twice the necrotic damage you take."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 4th level or higher, the damage increases by {@dice 1d8} for each slot level above 3rd."
                        ]
                    }
                ],
                "page": 160,
                "damageInflict": [
                    "necrotic"
                ]
            },
            {
                "name": "Maddening Darkness",
                "source": "XGE",
                "level": 8,
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
                        "amount": 150
                    }
                },
                "components": {
                    "v": true,
                    "m": "a drop of pitch mixed with a drop of mercury"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 10
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
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
                    "Magical darkness spreads from a point you choose within range to fill a 60-foot-radius sphere until the spell ends. The darkness spreads around corners. A creature with darkvision can't see through this darkness. Non-magical light, as well as light created by spells of 8th level or lower, can't illuminate the area.",
                    "Shrieks, gibbering, and mad laughter can be heard within the sphere. Whenever a creature starts its turn in the sphere, it must make a Wisdom saving throw, taking {@dice 8d8} psychic damage on a failed save, or half as much damage on a successful one."
                ],
                "page": 160,
                "damageInflict": [
                    "psychic"
                ],
                "savingThrow": [
                    "wisdom"
                ]
            },
            {
                "name": "Maelstrom",
                "source": "XGE",
                "level": 5,
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
                        "amount": 120
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "paper or leaf in the shape of a funnel"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "A swirling mass of 5-foot-deep water appears in a 30-foot radius centered on a point you can see within range. The point must be on ground or in a body of water. Until the spell ends, that area is difficult terrain, and any creature that starts its turn there must succeed on a Strength saving throw or take {@dice 6d6} bludgeoning damage and be pulled 10 feet toward the center."
                ],
                "page": 160,
                "damageInflict": [
                    "bludgeoning"
                ],
                "savingThrow": [
                    "strength"
                ]
            },
            {
                "name": "Magic Stone",
                "source": "XGE",
                "level": 0,
                "school": "T",
                "time": [
                    {
                        "number": 1,
                        "unit": "bonus"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "touch"
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 1
                        }
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
                        {
                            "name": "Warlock",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You touch one to three pebbles and imbue them with magic. You or someone else can make a ranged spell attack with one of the pebbles by throwing it or hurling it with a sling. If thrown, a pebble has a range of 60 feet. If someone else attacks with the pebble, that attacker adds your spellcasting ability modifier, not the attacker's, to the attack roll. On a hit, the target takes bludgeoning damage equal to {@dice 1d6} + your spellcasting ability modifier. Whether the attack hits or misses, the spell then ends on the stone.",
                    "If you cast this spell again, the spell ends on any pebbles still affected by your previous casting."
                ],
                "page": 160,
                "damageInflict": [
                    "bludgeoning"
                ]
            },
            {
                "name": "Mass Polymorph",
                "source": "XGE",
                "level": 9,
                "school": "T",
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
                        "amount": 120
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "a caterpillar cocoon"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "hours",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Bard",
                            "source": "PHB"
                        },
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You transform up to ten creatures of your choice that you can see within range. An unwilling target must succeed on a Wisdom saving throw to resist the transformation. An unwilling shapechanger automatically succeeds on the save.",
                    "Each target assumes a beast form of your choice, and you can choose the same form or a different ones for each target. The new form can be any beast you have seen whose challenge rating is equal to or less than the target's (or half the target's level, if the target doesn't have a challenge rating). The target's game statistics, including mental ability score, are replaced by the statistics of the chosen beast, but the target retains its hit points, alignment, and personality.",
                    "Each target gains a number of temporary hit points equal to hit points of its new form. These temporary hit points can't be replaced by temporary hit points from another source. A target reverts to its normal form when it has no more temporary hit points or it dies. If the spell ends before then, the creature loses all its temporary hit points and reverts to its normal form.",
                    "The creature is limited in the actions it can perform by the nature of its new form. It can't speak, cast spells, or do anything else that requires hands or speech.",
                    "The target's gear melds into the new form. The target can't activate, use, wield, or otherwise benefit from any of its equipment."
                ],
                "page": 160,
                "savingThrow": [
                    "wisdom"
                ]
            },
            {
                "name": "Maximilian's Earthen Grasp",
                "source": "XGE",
                "level": 2,
                "school": "T",
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
                        "amount": 30
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "a miniature hand sculpted from clay"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You choose a 5-foot-square unoccupied space on the ground that you can see within range. A Medium hand made from compacted soil rises there and reaches for one creature you can see within 5 feet of it. The target must make a Strength saving throw. On a failed save, the target takes {@dice 2d6} bludgeoning damage and is {@condition restrained} for the spell's duration.",
                    "As an action, you can cause the hand to crush the {@condition restrained} target, which must make a Strength saving throw. The target takes {@dice 2d6} bludgeoning damage on a failed save, or half as much damage on a successful one.",
                    "To break out, the {@condition restrained} target can use its action to make a Strength check against your spell save DC. On a success, the target escapes and is no longer {@condition restrained} by the hand.",
                    "As an action, you can cause the hand to reach for a different creature or to move to a different unoccupied space within range. The hand releases a {@condition restrained} target if you do either."
                ],
                "page": 161,
                "damageInflict": [
                    "bludgeoning"
                ],
                "savingThrow": [
                    "strength"
                ],
                "opposedCheck": [
                    "strength"
                ]
            },
            {
                "name": "Melf's Minute Meteors",
                "source": "XGE",
                "level": 3,
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
                        "type": "self"
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "niter, sulfur, and pine tar formed into a bead"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 10
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You create six tiny meteors in your space. They float in the air and orbit you for the spell's duration. When you cast the spell\u2014and as a bonus action on each of your turns thereafter\u2014you can expend one or two of the meteors, sending them streaking toward a point or points you choose within 120 feet of you. Once a meteor reaches its destination or impacts against a solid surface, the meteor explodes. Each creature within 5 feet of the point where the meteor explodes must make a Dexterity saving throw. A creature takes {@dice 2d6} fire damage on a failed save, or half as much damage on a successful one."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 4th level or higher, the number of meteors created increases by two for each slot level above 3rd."
                        ]
                    }
                ],
                "page": 161,
                "damageInflict": [
                    "fire"
                ],
                "savingThrow": [
                    "dexterity"
                ]
            },
            {
                "name": "Mental Prison",
                "source": "XGE",
                "level": 6,
                "school": "I",
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
                        "amount": 60
                    }
                },
                "components": {
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 1
                        },
                        "concentration": true
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
                    "You attempt to bind a creature within an illusory cell that only it perceives. One creature you can see within range must make an Intelligence saving throw. The target succeeds automatically if it is immune to being {@condition charmed}. On a successful save, the target takes {@dice 5d10} psychic damage, and the spell ends. On a failed save, the target takes {@dice 5d10} psychic damage, and you make the area immediately around the target's space appear dangerous to it in some way. You might cause the target to perceive itself as being surrounded by fire, floating razors, or hideous maws filled with dripping teeth. Whatever form the illusion takes, the target can't see or hear anything beyond it and is {@condition restrained} for the spell's duration. If the target is moved out of the illusion, makes a melee attack through it, or reaches any part of its body through it, the target takes {@dice 10d10} psychic damage, and the spell ends."
                ],
                "page": 161,
                "damageInflict": [
                    "psychic"
                ],
                "savingThrow": [
                    "intelligence"
                ]
            },
            {
                "name": "Mighty Fortress",
                "source": "XGE",
                "level": 8,
                "school": "C",
                "time": [
                    {
                        "number": 1,
                        "unit": "minute"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "miles",
                        "amount": 1
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "a diamond worth at least 500 gp, which the spell consumes"
                },
                "duration": [
                    {
                        "type": "instant"
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "A fortress of stone erupts from a square area of ground of your choice that you can see within range. The area is 120 feet on each side, and it must not have any buildings or other structures on it. Any creatures in the area are harmlessly lifted up as the fortress rises.",
                    "The fortress has four turrets with square bases, each one 20 feet on a side and 30 feet tall, with one turret on each corner. The turrets are connected to each other by stone walls that are each 80 feet long, creating an enclosed area. Each wall is 1 foot thick and is composed of panels that are 10 feet wide and 20 feet tall. Each panel is contiguous with two other panels or one other panel and a turret. You can place up to four stone doors in the fortress's outer wall.",
                    "A small keep stands inside the enclosed area. The keep has a square base that is 50 feet on each side, and it has three floors with 10-foot-high ceilings. Each of the floors can be divided into as many room as you like, provided each room is at least 5 feet on each side. The floors of the keep are connected by stone staircases, its walls are 6 inches thick, and interior rooms can have stone doors or open archways as you choose. The keep is furnished and decorated however you like, and it contains sufficient food to serve a nine-course banquet for up to 100 people each day. Furnishings, food, and other objects created by this spell crumble to dust if removed from the fortress.",
                    "A staff of one hundred invisible servants obeys any command given to them by creatures you designate when you cast the spell. Each servant functions as if created by the unseen servant spell.",
                    "The walls, turrets, and keep are all made of stone that can be damaged. Each 10-foot-by-10-foot section of stone has AC 15 and 30 hit points per inch of thickness. It is immune to poison and psychic damage. Reducing a section of stone to 0 hit points destroys it and might cause connected sections to buckle and collapse at the DM's discretion.",
                    "After 7 days or when you cast this spell somewhere else, the fortress harmlessly crumbles and sinks back into the ground, leaving any creatures that were inside it safely on the ground.",
                    "Casting this spell on the same spot once every 7 days for a year makes this fortress permanent."
                ],
                "page": 161,
                "damageInflict": [
                    "psychic"
                ],
                "damageImmune": [
                    "poison",
                    "psychic"
                ]
            },
            {
                "name": "Mind Spike",
                "source": "XGE",
                "level": 2,
                "school": "D",
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
                        "amount": 60
                    }
                },
                "components": {
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "hours",
                            "amount": 1
                        },
                        "concentration": true
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
                    "You reach into the mind of one creature you can see within range. The target must make a Wisdom saving throw, taking {@dice 3d8} psychic damage on a failed save, or half as much damage on a successful one. On a failed save, you also always know the target's location until the spell ends, but only while the two of you are on the same plane of existence. While you have this knowledge, the target can't become hidden from you, and if it's {@condition invisible} it gains no benefit from that condition against you."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by {@dice 1d8} for each slot level above 2nd."
                        ]
                    }
                ],
                "page": 162,
                "damageInflict": [
                    "psychic"
                ],
                "savingThrow": [
                    "wisdom"
                ]
            },
            {
                "name": "Mold Earth",
                "source": "XGE",
                "level": 0,
                "school": "T",
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
                        "amount": 30
                    }
                },
                "components": {
                    "s": true
                },
                "duration": [
                    {
                        "type": "instant"
                    },
                    {
                        "type": "timed",
                        "duration": {
                            "type": "hours",
                            "amount": 1
                        }
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You choose a portion of dirt or stone that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways.",
                    {
                        "type": "list",
                        "items": [
                            "If you target an area of loose earth, you can instantaneously excavate it, move it along the ground, and deposit it up to 5 feet away. This movement doesn't involve enough force to cause damage.",
                            "You cause shapes, colors, or both to appear on the dirt or stone, spelling out words, creating images, or shaping patterns. The changes last for 1 hour.",
                            "If the dirt or stone you target is on the ground, you cause it to become difficult terrain. Alternatively, you can cause the ground to become normal terrain if it is already difficult terrain. This change lasts for 1 hour."
                        ]
                    },
                    "If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
                ],
                "page": 162
            },
            {
                "name": "Negative Energy Flood",
                "source": "XGE",
                "level": 5,
                "school": "N",
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
                        "amount": 60
                    }
                },
                "components": {
                    "v": true,
                    "m": "a broken bone and a square of black silk"
                },
                "duration": [
                    {
                        "type": "instant"
                    }
                ],
                "classes": {
                    "fromClassList": [
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
                    "You send ribbons of negative energy at one creature you can see within range. Unless the target is undead, it must make a Constitution saving throw, taking {@dice 5d12} necrotic damage on a failed save, or half as much damage on a successful one. A target killed by this damage rises up as a zombie at the start of your next turn. The zombie pursues whatever creature it can see that is closest to it. Statistics for the zombie are in the Monster Manual.",
                    "If you target an undead with this spell, the target doesn't make a saving throw. Instead, roll {@dice 5d12}. The target gains half the total as temporary hit points."
                ],
                "page": 163,
                "damageInflict": [
                    "necrotic"
                ],
                "savingThrow": [
                    "constitution"
                ]
            },
            {
                "name": "Power Word Pain",
                "source": "XGE",
                "level": 7,
                "school": "E",
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
                        "amount": 60
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
                    "You speak a word of power that causes waves of intense pain to assail one creature you can see within range. If the target has 100 hit points or fewer, it is subject to crippling pain. Otherwise, the spell has no effect on it. A target is also unaffected if it is immune to being {@condition charmed}.",
                    "While the target is affected by crippling pain, any speed it has can be no higher than 10 feet. The target also has disadvantage on attack rolls, ability checks, and saving throws, other than Constitution saving throws. Finally, if the target tries to cast a spell, it must first succeed on a Constitution saving throw, or the casting fails and the spell is wasted.",
                    "A target suffering this pain can make a Constitution saving throw at the end of each of its turns. On a successful save, the pain ends."
                ],
                "page": 163,
                "savingThrow": [
                    "constitution"
                ]
            },
            {
                "name": "Primal Savagery",
                "source": "XGE",
                "level": 0,
                "school": "T",
                "time": [
                    {
                        "number": 1,
                        "unit": "action"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "self"
                    }
                },
                "components": {
                    "s": true
                },
                "duration": [
                    {
                        "type": "instant"
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You channel primal magic to cause your teeth or fingernails to sharpen, ready to deliver a corrosive attack. Make a melee spell attack against one creature within 5 feet of you. On a hit, the target takes {@dice 1d10} acid damage. After you make the attack, your teeth or fingernails return to normal.",
                    "The spell's damage increases by {@dice 1d10} when you reach 5th level ({@dice 2d10}), 11th level ({@dice 3d10}), and 17th level ({@dice 4d10})."
                ],
                "page": 163,
                "damageInflict": [
                    "acid"
                ]
            },
            {
                "name": "Primordial Ward",
                "source": "XGE",
                "level": 6,
                "school": "A",
                "time": [
                    {
                        "number": 1,
                        "unit": "action"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "self"
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You have resistance to acid, cold, fire, lightning, and thunder damage for the spell's duration.",
                    "When you take damage of one of those types, you can use your reaction to gain immunity to that type of damage, including against the triggering damage. If you do so, the resistances end, and you have the immunity until the end of your next turn, at which time the spell ends."
                ],
                "page": 163,
                "damageInflict": [
                    "thunder"
                ],
                "damageImmune": [
                    "acid",
                    "cold",
                    "fire",
                    "lightning"
                ]
            },
            {
                "name": "Psychic Scream",
                "source": "XGE",
                "level": 9,
                "school": "E",
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
                        "amount": 90
                    }
                },
                "components": {
                    "s": true
                },
                "duration": [
                    {
                        "type": "instant"
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Bard",
                            "source": "PHB"
                        },
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
                    "You unleash the power of your mind to blast the intellect of up to ten creatures of your choice that you can see within range. Creatures that have an Intelligence score of 2 or lower are unaffected.",
                    "Each target must make an Intelligence saving throw. On a failed save, a target takes {@dice 14d6} psychic damage and is {@condition stunned}. On a successful save, a target takes half as much damage and isn't {@condition stunned}. If a target is killed by this damage, its head explodes, assuming it has one.",
                    "A {@condition stunned} target can make an Intelligence saving throw at the end of each of its turns. On a successful save, the stunning effect ends."
                ],
                "page": 163,
                "damageInflict": [
                    "psychic"
                ],
                "savingThrow": [
                    "intelligence"
                ]
            },
            {
                "name": "Pyrotechnics",
                "source": "XGE",
                "level": 2,
                "school": "T",
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
                        "amount": 60
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "instant"
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Bard",
                            "source": "PHB"
                        },
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "Choose an area of flame that you can see and that can fit within a 5-foot cube within range. You can extinguish the fire in that area, and you create either fireworks or smoke when you do so.",
                    {
                        "type": "entries",
                        "name": "Fireworks",
                        "entries": [
                            "The target explodes with a dazzling display of colors. Each creature within 10 feet of the target must succeed on a Constitution saving throw or become {@condition blinded} until the end of your next turn."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Smoke",
                        "entries": [
                            "Thick black smoke spreads out from the target in a 20-foot radius, moving around corners. The area of the smoke is heavily obscured. The smoke persists for 1 minute or until a strong wind disperses it."
                        ]
                    }
                ],
                "page": 163,
                "savingThrow": [
                    "constitution"
                ]
            },
            {
                "name": "Scatter",
                "source": "XGE",
                "level": 6,
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
                        "amount": 30
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
                    "The air quivers around up to five creatures of your choice that you can see within range. An unwilling creature must succeed on a Wisdom saving throw to resist this spell. You teleport each affected target to an unoccupied space that you can see within 120 feet of you. That space must be on the ground or on a floor."
                ],
                "page": 164,
                "savingThrow": [
                    "wisdom"
                ]
            },
            {
                "name": "Shadow Blade",
                "source": "XGE",
                "level": 2,
                "school": "I",
                "time": [
                    {
                        "number": 1,
                        "unit": "bonus"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "self"
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 1
                        },
                        "concentration": true
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
                    "You weave together threads of shadow to create a sword of solidified gloom in your hand. This magic sword lasts until the spell ends. It counts as a simple melee weapon with which you are proficient. It deals {@dice 2d8} psychic damage on a hit and has the finesse, light, and thrown properties (range 20/60). In addition, when you use the sword to attack a target that is in dim light or darkness, you make the attack roll with advantage.",
                    "If you drop the weapon or throw it, it dissipates at the end of the turn. Thereafter, while the spell persists, you can use a bonus action to cause the sword to reappear in your hand."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a 3rd- or 4th-level spell slot, the damage increases to {@dice 3d8}. When you cast it using a 5th- or 6th-level spell slot, the damage increases to {@dice 4d8}. When you cast it using a spell slot of 7th level or higher, the damage increases to {@dice 5d8}."
                        ]
                    }
                ],
                "page": 164,
                "damageInflict": [
                    "psychic"
                ]
            },
            {
                "name": "Shadow of Moil",
                "source": "XGE",
                "level": 4,
                "school": "N",
                "time": [
                    {
                        "number": 1,
                        "unit": "action"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "self"
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "an undead eyeball encased in a gem worth at least 150 gp"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Warlock",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "Flame-like shadows wreathe your body until the spell ends, causing you to become heavily obscured to others. The shadows turn dim light within 10 feet of you into darkness, and bright light in the same area to dim light.",
                    "Until the spell ends, you have resistance to radiant damage. In addition, whenever a creature within 10 feet of you hits you with an attack, the shadows lash out at that creature, dealing it {@dice 2d8} necrotic damage."
                ],
                "page": 164,
                "damageInflict": [
                    "necrotic"
                ],
                "damageResist": [
                    "radiant"
                ]
            },
            {
                "name": "Shape Water",
                "source": "XGE",
                "level": 0,
                "school": "T",
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
                        "amount": 30
                    }
                },
                "components": {
                    "s": true
                },
                "duration": [
                    {
                        "type": "instant"
                    },
                    {
                        "type": "timed",
                        "duration": {
                            "type": "hours",
                            "amount": 1
                        }
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You choose an area of water that you can see within range and that fits within a 5-foot cube. You manipulate it in one of the following ways.",
                    {
                        "type": "list",
                        "items": [
                            "You instantaneously move or otherwise change the flow of the water as you direct, up to 5 feet in any direction. This movement doesn't have enough force to cause damage.",
                            "You cause the water to form into simple shapes and animate at your direction. This change lasts for 1 hour.",
                            "You change the water's color or opacity. The water must be changed in the same way throughout. This change lasts for 1 hour.",
                            "You freeze the water, provided that there are no creatures in it. The water unfreezes in 1 hour."
                        ]
                    },
                    "If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
                ],
                "page": 164
            },
            {
                "name": "Sickening Radiance",
                "source": "XGE",
                "level": 4,
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
                        "amount": 120
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 10
                        },
                        "concentration": true
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
                    "Dim, greenish light spreads within a 30-foot-radius sphere centered on a point you choose within range. The light spreads around corners, and it lasts until the spell ends.",
                    "When a creature moves into the spell's area for the first time on a turn or starts its turn there, that creature must succeed on a Constitution saving throw or take {@dice 4d10} radiant damage, and it suffers one level of {@condition exhaustion} and emits a dim, greenish light in a 5-foot radius. This light makes it impossible for the creature to benefit from being {@condition invisible}. The light and any levels of {@condition exhaustion} caused by this spell go away when the spell ends."
                ],
                "page": 164,
                "damageInflict": [
                    "radiant"
                ],
                "savingThrow": [
                    "constitution"
                ]
            },
            {
                "name": "Skill Empowerment",
                "source": "XGE",
                "level": 5,
                "school": "T",
                "time": [
                    {
                        "number": 1,
                        "unit": "action"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "touch"
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "hours",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Bard",
                            "source": "PHB"
                        },
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "Your magic deepens a creature's understanding of its own talent. You touch one willing creature and give it expertise in one skill of your choice; until the spell ends, the creature doubles its proficiency bonus for ability checks it makes that use the chosen skill.",
                    "You must choose a skill in which the target is proficient and that isn't already benefiting from an effect, such as Expertise, that doubles its proficiency bonus."
                ],
                "page": 165
            },
            {
                "name": "Skywrite",
                "source": "XGE",
                "level": 2,
                "school": "T",
                "time": [
                    {
                        "number": 1,
                        "unit": "action"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "sight"
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "hours",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Bard",
                            "source": "PHB"
                        },
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "meta": {
                    "ritual": true
                },
                "entries": [
                    "You cause up to ten words to form in a part of the sky you can see. The words appear to be made of cloud and remain in place for the spell's duration. The words dissipate when the spell ends. A strong wind can disperse the clouds and end the spell early."
                ],
                "page": 165
            },
            {
                "name": "Snare",
                "source": "XGE",
                "level": 1,
                "school": "A",
                "time": [
                    {
                        "number": 1,
                        "unit": "minute"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "touch"
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "25 feet of rope, which the spell consumes"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "hours",
                            "amount": 8
                        }
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
                        {
                            "name": "Ranger",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "As you cast this spell, you use the rope to create a circle with a 5-foot radius on the ground or the floor. When you finish casting, the rope disappears and the circle becomes a magical trap.",
                    "The trap is nearly invisible, requiring a successful Intelligence (Investigation) check against your spell save DC to be discerned.",
                    "The trap triggers when a Small, Medium, or Large creature moves onto the ground or the floor in the spell's radius. That creature must succeed on a Dexterity saving throw or be magically hoisted into the air, leaving it hanging upside down 3 feet above the ground or the floor. The creature is {@condition restrained} there until the spell ends.",
                    "A {@condition restrained} creature can make a Dexterity saving throw at the end of each of its turns, ending the effect on itself on a success. Alternatively, the creature or someone else who can reach it can use an action to make an Intelligence (Arcana) check against your spell save DC. On a success, the {@condition restrained} effect ends.",
                    "After the trap is triggered, the spell ends when no creature is {@condition restrained} by it."
                ],
                "page": 165,
                "savingThrow": [
                    "dexterity"
                ],
                "opposedCheck": [
                    "intelligence"
                ]
            },
            {
                "name": "Snilloc's Snowball Swarm",
                "source": "XGE",
                "level": 2,
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
                        "amount": 90
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "a piece of ice or a small white rock chip"
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
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "A flurry of magic snowballs erupts from a point you choose within range. Each creature in a 5-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes {@dice 3d6} cold damage on a failed save, or half as much damage on a successful one."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by {@dice 1d6} for each slot level above 2nd."
                        ]
                    }
                ],
                "page": 165,
                "damageInflict": [
                    "cold"
                ],
                "savingThrow": [
                    "dexterity"
                ]
            },
            {
                "name": "Soul Cage",
                "source": "XGE",
                "level": 6,
                "school": "N",
                "time": [
                    {
                        "number": 1,
                        "unit": "reaction",
                        "condition": "which you take when a humanoid you can see within 60 feet of you dies"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "feet",
                        "amount": 60
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "a tiny silver cage worth 100 gp"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "hours",
                            "amount": 8
                        }
                    }
                ],
                "classes": {
                    "fromClassList": [
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
                    "This spell snatches the soul of a humanoid as it dies and traps it inside the tiny cage you use for the material component. A stolen soul remains inside the cage until the spell ends or until you destroy the cage, which ends the spell. While you have a soul inside the cage, you can exploit it in any of the ways described below. You can use a trapped soul up to six times. Once you exploit a soul for the sixth time, it is released, and the spell ends. While a soul is trapped, the dead humanoid it came from can't be revived.",
                    {
                        "type": "entries",
                        "name": "Steal Life",
                        "entries": [
                            "You can use a bonus action to drain vigor from the soul and regain {@dice 2d8} hit points."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Query Soul",
                        "entries": [
                            "You ask the soul a question (no action required) and receive a brief telepathic answer, which you can understand regardless of the language used. The soul knows only what it knew in life, but it must answer you truthfully and to the best of its ability. The answer is no more than a sentence or two and might be cryptic."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Borrow Experience",
                        "entries": [
                            "You can use a bonus action to bolster yourself with the soul's life experience, making your next attack roll, ability check, or saving throw with advantage. If you don't use this benefit before the start of your next turn, it is lost."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Eyes of the Dead",
                        "entries": [
                            "You can use an action to name a place the humanoid saw in life, which creates an invisible sensor somewhere in that place if it is on the plane of existence you're currently on. The sensor remains for as long as you concentrate, up to 10 minutes (as if you were concentrating on a spell). You receive visual and auditory information from the sensor as if you were in its space using your senses."
                        ]
                    },
                    "A creature that can see the sensor (such as one using see invisibility or truesight) sees a translucent image of the tormented humanoid whose soul you caged."
                ],
                "page": 165
            },
            {
                "name": "Steel Wind Strike",
                "source": "XGE",
                "level": 5,
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
                        "amount": 30
                    }
                },
                "components": {
                    "s": true,
                    "m": "a melee weapon worth at least 1 sp"
                },
                "duration": [
                    {
                        "type": "instant"
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Ranger",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You flourish the weapon used in the casting and then vanish to strike like the wind. Choose up to five creatures you can see within range. Make a melee spell attack against each target. On a hit, a target takes {@dice 6d10} force damage.",
                    "You can then teleport to an unoccupied space you can see within 5 feet of one of the targets you hit or missed."
                ],
                "page": 166,
                "damageInflict": [
                    "force"
                ]
            },
            {
                "name": "Storm Sphere",
                "source": "XGE",
                "level": 4,
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
                        "amount": 150
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "A 20-foot-radius sphere of whirling air springs into existence, centered on a point you choose within range. The sphere remains for the spell's duration. Each creature in the sphere when it appears or that ends its turn there must succeed on a Strength saving throw or take {@dice 2d6} bludgeoning damage. The sphere's space is difficult terrain.",
                    "Until the spell ends, you can use a bonus action on each of your turns to cause a bolt of lightning to leap from the center of the sphere toward one creature you choose within 60 feet of the center. Make a ranged spell attack. You have advantage on the attack roll if the target is in the sphere. On a hit, the target takes {@dice 4d6} lightning damage.",
                    "Creatures within 30 feet of the sphere have disadvantage on Wisdom (Perception) checks made to listen."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 5th level or higher, the damage increases for each of its effects by {@dice 1d6} for each slot level above 4th"
                        ]
                    }
                ],
                "page": 166,
                "damageInflict": [
                    "bludgeoning",
                    "lightning"
                ],
                "savingThrow": [
                    "strength"
                ]
            },
            {
                "name": "Summon Greater Demon",
                "source": "XGE",
                "level": 4,
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
                        "amount": 60
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "a vial of blood from a humanoid killed within the past 24 hours"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "hours",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
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
                    "You utter foul words, summoning one demon from the chaos of the Abyss. You choose the demon's type, which must be one of challenge rating 5 or lower, such as a shadow demon or a barlgura. The demon appears in an unoccupied space you can see within range, and the demon disappears when it drops to 0 hit points or when the spell ends.",
                    "Roll initiative for the demon, which has its own turns. When you summon it and on each of your turns thereafter, you can issue a verbal command to it (requiring no action on your part), telling it what it must do on its next turn. If you issue no command, it spends its turn attacking any creature within reach that has attacked it.",
                    "At the end of each of the demon's turns, it makes a Charisma saving throw. The demon has disadvantage on this saving throw if you say its true name. On a failed save, the demon continues to obey you. On a successful save, your control of the demon ends for the rest of the duration, and the demon spends its turns pursuing and attacking the nearest non-demons to the best of its ability. If you stop concentrating on the spell before it reaches its full duration, an uncontrolled demon doesn't disappear for {@dice 1d6} rounds if it still has hit points.",
                    "As part of casting the spell, you can form a circle on the ground with the blood used as a material component. The circle is large enough to encompass your space. While the spell lasts, the summoned demon can't cross the circle or harm it, and it can't target anyone within it. Using the material component in this manner consumes it when the spell ends."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 5th level or higher, the challenge rating increases by 1 for each slot level above 4th."
                        ]
                    }
                ],
                "page": 166,
                "savingThrow": [
                    "charisma"
                ]
            },
            {
                "name": "Summon Lesser Demons",
                "source": "XGE",
                "level": 3,
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
                        "amount": 60
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "a vial of blood from a humanoid killed within the past 24 hours"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "hours",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
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
                    "You utter foul words, summoning demons from the chaos of the Abyss. Roll on the following table to determine what appears.",
                    {
                        "type": "table",
                        "colLabels": [
                            "{@dice d6}",
                            "Demons Summoned"
                        ],
                        "colStyles": [
                            "col-xs-1 text-align-center",
                            "col-xs-11"
                        ],
                        "rows": [
                            [
                                {
                                    "type": "cell",
                                    "roll": {
                                        "min": 1,
                                        "max": 2
                                    }
                                },
                                "Two demons of challenge rating 1 or lower"
                            ],
                            [
                                {
                                    "type": "cell",
                                    "roll": {
                                        "min": 3,
                                        "max": 4
                                    }
                                },
                                "Four demons of challenge rating 1/2 or lower"
                            ],
                            [
                                {
                                    "type": "cell",
                                    "roll": {
                                        "min": 5,
                                        "max": 6
                                    }
                                },
                                "Eight demons of challenge rating 1/4 or lower"
                            ]
                        ]
                    },
                    "The DM chooses the demons, such as manes or dretches, and you choose the unoccupied spaces you can see within range where they appear. A summoned demon disappears when it drops to 0 hit points or when the spell ends.",
                    "The demons are hostile to all creatures, including you. Roll initiative for the summoned demons as a group, which has its own turns. The demons pursue and attack the nearest non-demons to the best of their ability.",
                    "As part of casting the spell, you can form a circle on the ground with the blood used as a material component. The circle is large enough to encompass your space. While the spell lasts, the summoned demons can't cross the circle or harm it, and they can't target anyone within it. Using the material component in this manner consumes it when the spell ends."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 6th or 7th level, you summon twice as many demons. If you cast it using a spell slot of 8th or 9th level, you summon three times as many demons."
                        ]
                    }
                ],
                "page": 167
            },
            {
                "name": "Synaptic Static",
                "source": "XGE",
                "level": 5,
                "school": "E",
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
                        "amount": 120
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "instant"
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Bard",
                            "source": "PHB"
                        },
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
                    "You choose a point within range and cause psychic energy to explode there. Each creature in a 20-foot-radius sphere centered on that point must make an Intelligence saving throw. A creature with an Intelligence score of 2 or lower can't be affected by this spell. A target takes {@dice 8d6} psychic damage on a failed save, or half as much damage on a successful one.",
                    "After a failed save, a target has muddled thoughts for 1 minute. During that time, it rolls a {@dice d6} and subtracts the number rolled from all its attack rolls and ability checks, as well as its Constitution saving throws to maintain concentration. The target can make an Intelligence saving throw at the end of each of its turns, ending the effect on itself on a success."
                ],
                "page": 167,
                "damageInflict": [
                    "psychic"
                ],
                "savingThrow": [
                    "intelligence",
                    "constitution"
                ]
            },
            {
                "name": "Temple of the Gods",
                "source": "XGE",
                "level": 7,
                "school": "C",
                "time": [
                    {
                        "number": 1,
                        "unit": "hour"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "feet",
                        "amount": 120
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "a holy symbol worth at least 5 gp"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "hours",
                            "amount": 24
                        }
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Cleric",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You cause a temple to shimmer into existence on ground you can see within range. The temple must fit within an unoccupied cube of space, up to 120 feet on each side. The temple remains until the spell ends. It is dedicated to whatever god, pantheon, or philosophy is represented by the holy symbol used in the casting.",
                    "You make all decisions about the temple's appearance. The interior is enclosed by a floor, walls, and a roof, with one door granting access to the interior and as many windows as you wish. Only you and any creatures you designate when you cast the spell can open or close the door.",
                    "The temple's interior is an open space with an idol or altar at one end. You decide whether the temple is illuminated and whether that illumination is bright light or dim light. The smell of burning incense fills the air within, and the temperature is mild.",
                    "The temple opposes types of creatures you choose when you cast this spell. Choose one or more of the following: celestials, elementals, fey, fiends, or undead. If a creature of the chosen type attempts to enter the temple, that creature must make a Charisma saving throw. On a failed save, it can't enter the temple for 24 hours. Even if the creature can enter the temple, the magic there hinders it; whenever it makes an attack roll, an ability check, or a saving throw inside the temple, it must roll a {@dice d4} and subtract the number rolled from the {@dice d20} roll.",
                    "In addition, the sensors created by divination spells can't appear inside the temple, and creatures within can't be targeted by divination spells.",
                    "Finally, whenever any creature in the temple regains hit points from a spell of 1st level or higher, the creature regains additional hit points equal to your Wisdom modifier (minimum 1 hit point).",
                    "The temple is made from opaque magical force that extends into the Ethereal Plane, thus blocking ethereal travel into the temple's interior. Nothing can physically pass through the temple's exterior. It can't be dispelled by dispel magic, and antimagic field has no effect on it. A disintegrate spell destroys the temple instantly.",
                    "Casting this spell on the same spot every day for a year makes this effect permanent."
                ],
                "page": 167,
                "savingThrow": [
                    "charisma"
                ]
            },
            {
                "name": "Tenser's Transformation",
                "source": "XGE",
                "level": 6,
                "school": "T",
                "time": [
                    {
                        "number": 1,
                        "unit": "action"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "self"
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "a few hairs from a bull"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 10
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You endow yourself with endurance and martial prowess fueled by magic. Until the spell ends, you can't cast spells, and you gain the following benefits:",
                    {
                        "type": "list",
                        "items": [
                            "You gain 50 temporary hit points. If any of these remain when the spell ends, they are lost.",
                            "You have advantage on attack rolls that you make with simple and martial weapons.",
                            "When you hit a target with a weapon attack, that target takes an extra {@dice 2d12} force damage.",
                            "You have proficiency with all armor, shields, simple weapons, and martial weapons.",
                            "You have proficiency in Strength and Constitution saving throws.",
                            "You can attack twice, instead of once, when you take the Attack action on your turn. You ignore this benefit if you already have a feature, like Extra Attack, that gives you extra attacks."
                        ]
                    },
                    "Immediately after the spell ends, you must succeed on a DC 15 Constitution saving throw or suffer one level of {@condition exhaustion}."
                ],
                "page": 168,
                "damageInflict": [
                    "force"
                ],
                "savingThrow": [
                    "constitution"
                ]
            },
            {
                "name": "Thunder Step",
                "source": "XGE",
                "level": 3,
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
                        "amount": 90
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
                    "You teleport yourself to an unoccupied space you can see within range. Immediately after you disappear, a thunderous boom sounds, and each creature within 10 feet of the space you left must make a Constitution saving throw, taking {@dice 3d10} thunder damage on a failed save, or half as much damage on a successful one. The thunder can be heard from up to 300 feet away.",
                    "You can bring along objects as long as their weight doesn't exceed what you can carry. You can also teleport one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell, and there must be an unoccupied space within 5 feet of your destination space for the creature to appear in; otherwise, the creature is left behind."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 4th level or higher, the damage increases by {@dice 1d10} for each slot level above 3rd."
                        ]
                    }
                ],
                "page": 168,
                "damageInflict": [
                    "thunder"
                ],
                "savingThrow": [
                    "constitution"
                ]
            },
            {
                "name": "Thunderclap",
                "source": "XGE",
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
                    "s": true
                },
                "duration": [
                    {
                        "type": "instant"
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Bard",
                            "source": "PHB"
                        },
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
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
                    "You create a burst of thunderous sound that can be heard up to 100 feet away. Each creature within range, other than you, must make a Constitution saving throw or take {@dice 1d6} thunder damage.",
                    "The spell's damage increases by {@dice 1d6} when you reach 5th level ({@dice 2d6}), 11th level ({@dice 3d6}), and 17th level ({@dice 4d6})."
                ],
                "page": 168,
                "damageInflict": [
                    "thunder"
                ],
                "savingThrow": [
                    "constitution"
                ]
            },
            {
                "name": "Tidal Wave",
                "source": "XGE",
                "level": 3,
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
                        "amount": 120
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "a drop of water"
                },
                "duration": [
                    {
                        "type": "instant"
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You conjure up a wave of water that crashes down on an area within range. The area can be up to 30 feet long, up to 10 feet wide, and up to 10 feet tall. Each creature in that area must make a Dexterity saving throw. On a failure, a creature takes {@dice 4d8} bludgeoning damage and is knocked {@condition prone}. On a success, a creature takes half as much damage and isn't knocked {@condition prone}. The water then spreads out across the ground in all directions, extinguishing unprotected flames in its area and within 30 feet of it, and then vanishes."
                ],
                "page": 168,
                "damageInflict": [
                    "bludgeoning"
                ],
                "savingThrow": [
                    "dexterity"
                ]
            },
            {
                "name": "Tiny Servant",
                "source": "XGE",
                "level": 3,
                "school": "T",
                "time": [
                    {
                        "number": 1,
                        "unit": "minute"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "touch"
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "hours",
                            "amount": 8
                        }
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You touch one Tiny, nonmagical object that isn't attached to another object or a surface and isn't being carried by another creature. The target animates and sprouts little arms and legs, becoming a creature under your control until the spell ends or the creature drops to 0 hit points. See the {@creature tiny servant|xge|stat block} for its statistics.",
                    "As a bonus action, you can mentally command the creature if it is within 120 feet of you. (If you control multiple creatures with this spell, you can command any or all of them at the same time, issuing the same command to each one.) You decide what action the creature will take and where it will move during its next turn, or you can issue a simple, general command, such as to fetch a key, stand watch, or stack some books. If you issue no commands, the servant does nothing other than defend itself against hostile creatures. Once given an order, the servant continues to follow that order until its task is complete.",
                    "When the creature drops to 0 hit points, it reverts to its original form, and any remaining damage carries over to that form."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 4th level or higher, you can animate two additional objects for each slot level above 3rd."
                        ]
                    }
                ],
                "page": 168
            },
            {
                "name": "Toll the Dead",
                "source": "XGE",
                "level": 0,
                "school": "N",
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
                        "amount": 60
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "instant"
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Cleric",
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
                    "You point at one creature you can see within range, and the sound of a dolorous bell fills the air around it for a moment. The target must succeed on a Wisdom saving throw or take {@dice 1d8} necrotic damage. If the target is missing any of its hit points, it instead takes {@dice 1d12} necrotic damage.",
                    "The spell's damage increases by one die when you reach 5th level ({@dice 2d8} or {@dice 2d12}), 11th level ({@dice 3d8} or {@dice 3d12}), and 17th level ({@dice 4d8} or {@dice 4d12})."
                ],
                "page": 169,
                "damageInflict": [
                    "necrotic"
                ],
                "savingThrow": [
                    "wisdom"
                ]
            },
            {
                "name": "Transmute Rock",
                "source": "XGE",
                "level": 5,
                "school": "T",
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
                        "amount": 120
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "clay and water"
                },
                "duration": [
                    {
                        "type": "permanent",
                        "ends": [
                            "dispell"
                        ]
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You choose an area of stone or mud that you can see that fits within a 40-foot cube and that is within range, and choose one of the following effects.",
                    {
                        "type": "entries",
                        "name": "Transmute Rock to Mud",
                        "entries": [
                            "Nonmagical rock of any sort in the area becomes an equal volume of thick, flowing mud that remains for the spell's duration."
                        ]
                    },
                    "The ground in the spell's area becomes muddy enough that creatures can sink into it. Each foot that a creature moves through the mud costs 4 feet of movement, and any creature on the ground when you cast the spell must make a Strength saving throw. A creature must also make the saving throw when it moves into the area for the first time on a turn or ends its turn there. On a failed save, a creature sinks into the mud and is {@condition restrained}, though it can use an action to end the {@condition restrained} condition on itself by pulling itself free of the mud.",
                    "If you cast the spell on a ceiling, the mud falls. Any creature under the mud when it falls must make a Dexterity saving throw. A creature takes {@dice 4d8} bludgeoning damage on a failed save, or half as much damage on a successful one.",
                    {
                        "type": "entries",
                        "name": "Transmute Mud to Rock",
                        "entries": [
                            "Nonmagical mud or quicksand in the area no more than 10 feet deep transforms into soft stone for the spell's duration. Any creature in the mud when it transforms must make a Dexterity saving throw. On a successful save, a creature is shunted safely to the surface in an unoccupied space. On a failed save, a creature becomes {@condition restrained} by the rock. A {@condition restrained} creature, or another creature within reach, can use an action to try to break the rock by succeeding on a DC 20 Strength check or by dealing damage to it. The rock has AC 15 and 25 hit points, and is immune to poison and psychic damage."
                        ]
                    }
                ],
                "page": 169,
                "damageImmune": [
                    "poison",
                    "psychic"
                ],
                "damageInflict": [
                    "bludgeoning"
                ],
                "savingThrow": [
                    "strength",
                    "dexterity"
                ],
                "opposedCheck": [
                    "strength"
                ]
            },
            {
                "name": "Vitriolic Sphere",
                "source": "XGE",
                "level": 4,
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
                        "amount": 150
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "a drop of giant slug bile"
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
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You point at a place within range, and a glowing 1-foot diameter ball of emerald acid streaks there and explodes in a 20-foot radius sphere. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes {@dice 10d4} acid damage and another {@dice 5d4} acid damage at the end of its next turn. On a successful save, a creature takes half the initial damage and no damage at the end of its next turn."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 5th level or higher, the initial damage increases by {@dice 2d4} for each slot level above 4th."
                        ]
                    }
                ],
                "page": 170,
                "damageInflict": [
                    "acid"
                ],
                "savingThrow": [
                    "dexterity"
                ]
            },
            {
                "name": "Wall of Light",
                "source": "XGE",
                "level": 5,
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
                        "amount": 120
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "a hand mirror"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 10
                        },
                        "concentration": true
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
                    "A shimmering wall of bright light appears at a point you choose within range. The wall appears in any orientation you choose: horizontally, vertically, or diagonally. It can be free floating, or it can rest on a solid surface. The wall can be up to 60 feet long, 10 feet high, and 5 feet thick. The wall blocks line of sight, but creatures and objects can pass through it. It emits bright light out to 120 feet and dim light for an additional 120 feet.",
                    "When the wall appears, each creature in its area must make a Constitution saving throw. On a failed save, a creature takes {@dice 4d8} radiant damage, and it is {@condition blinded} for 1 minute. On a successful save, it takes half as much damage and isn't {@condition blinded}. A {@condition blinded} creature can make a Constitution saving throw at the end of each of its turns, ending the effect on itself on a success.",
                    "A creature that ends its turn in the wall's area takes {@dice 4d8} radiant damage.",
                    "Until the spell ends, you can use an action to launch a beam of radiance from the wall at one creature you can see within 60 feet of it. Make a ranged spell attack. On a hit, the target takes {@dice 4d8} radiant damage. Whether you hit or miss, reduce the length of the wall by 10 feet. If the wall's length drops to 0 feet, the spell ends."
                ],
                "entriesHigherLevel": [
                    {
                        "type": "entries",
                        "name": "At Higher Levels",
                        "entries": [
                            "When you cast this spell using a spell slot of 6th level or higher, the damage increases by {@dice 1d8} for each slot level above 5th."
                        ]
                    }
                ],
                "page": 170,
                "damageInflict": [
                    "radiant"
                ],
                "savingThrow": [
                    "constitution"
                ]
            },
            {
                "name": "Wall of Sand",
                "source": "XGE",
                "level": 3,
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
                        "amount": 90
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "a handful of sand"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 10
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You create a wall of swirling sand on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 10 feet thick, and it vanishes when the spell ends. It blocks line of sight but not movement. A creature is {@condition blinded} while in the wall's space and must spend 3 feet of movement for every 1 foot it moves there."
                ],
                "page": 170
            },
            {
                "name": "Wall of Water",
                "source": "XGE",
                "level": 3,
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
                        "amount": 60
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "a drop of water"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 10
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You create a wall of water on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 1 foot thick, or you can make a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall vanishes when the spell ends. The wall's space is difficult terrain.",
                    "Any ranged weapon attack that enters the wall's space has disadvantage on the attack roll, and fire damage is halved if the fire effect passes through the wall to reach its target. Spells that deal cold damage that pass through the wall cause the area of the wall they pass through to freeze solid (at least a 5-foot square section is frozen). Each 5-foot-square frozen section has AC 5 and 15 hit points. Reducing a frozen section to 0 hit points destroys it. When a section is destroyed, the wall's water doesn't fill it."
                ],
                "page": 170,
                "damageInflict": [
                    "cold",
                    "fire"
                ]
            },
            {
                "name": "Warding Wind",
                "source": "XGE",
                "level": 2,
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
                        "type": "self"
                    }
                },
                "components": {
                    "v": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 10
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Bard",
                            "source": "PHB"
                        },
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "A strong wind (20 miles per hour) blows around you in a 10-foot radius and moves with you, remaining centered on you. The wind lasts for the spell's duration.",
                    "The wind has the following effects:",
                    {
                        "type": "list",
                        "items": [
                            "It deafens you and other creatures in its area.",
                            "It extinguishes unprotected flames in its area that are torch-sized or smaller.",
                            "It hedges out vapor, gas, and fog that can be dispersed by strong wind.",
                            "The area is difficult terrain for creatures other than you.",
                            "The attack rolls of ranged weapon attacks have disadvantage if they pass in or out of the wind."
                        ]
                    }
                ],
                "page": 170
            },
            {
                "name": "Watery Sphere",
                "source": "XGE",
                "level": 4,
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
                        "amount": 90
                    }
                },
                "components": {
                    "v": true,
                    "s": true,
                    "m": "a droplet of water"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You conjure up a sphere of water with a 5-foot radius at a point you can see within range. The sphere can hover but no more than 10 feet off the ground. The sphere remains for the spell's duration.",
                    "Any creature in the sphere's space must make a Strength saving throw. On a successful save, a creature is ejected from that space to the nearest unoccupied space of the creature's choice outside it. A Huge or larger creature succeeds on the saving throw automatically, and a Large or smaller creature can choose to fail it. On a failed save, a creature is {@condition restrained} by the sphere and is engulfed by the water. At the end of each of its turns, a {@condition restrained} target can repeat the saving throw, ending the effect on itself on a success.",
                    "The sphere can restrain as many as four Medium or smaller creatures or one Large creature. If the sphere restrains a creature that causes it to exceed this capacity, a random creature that was already {@condition restrained} by the sphere falls out of it and lands {@condition prone} in a space within 5 feet of it.",
                    "As an action, you can move the sphere up to 30 feet in a straight line. If it moves over a pit, cliff, or other drop-off, it safely descends until it is hovering 10 feet above the ground. Any creature {@condition restrained} by the sphere moves with it. You can ram the sphere into creatures, forcing them to make the saving throw.",
                    "When the spell ends, the sphere falls to the ground and extinguishes all normal flames within 30 feet of it. Any creature {@condition restrained} by the sphere is knocked {@condition prone} in the space where it falls. The water then vanishes."
                ],
                "page": 170,
                "savingThrow": [
                    "strength"
                ]
            },
            {
                "name": "Whirlwind",
                "source": "XGE",
                "level": 7,
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
                        "amount": 300
                    }
                },
                "components": {
                    "v": true,
                    "m": "a piece of straw"
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
                        {
                            "name": "Sorcerer",
                            "source": "PHB"
                        },
                        {
                            "name": "Wizard",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "A whirlwind howls down to a point that you can see on the ground within range. The whirlwind is a 10-foot-radius, 30-foot-high cylinder centered on that point. Until the spell ends, you can use your action to move the whirlwind up to 30 feet in any direction along the ground. The whirlwind sucks up any Medium or smaller objects that aren't secured to anything and that aren't worn or carried by anyone.",
                    "A creature must make a Dexterity saving throw the first time on a turn that it enters the whirlwind or that the whirlwind enters its space, including when the whirlwind first appears. A creature takes {@dice 10d6} bludgeoning damage on a failed save, or half as much damage on a successful one. In addition, a Large or smaller creature that fails the save must succeed on a Strength saving throw or become {@condition restrained} in the whirlwind until the spell ends. When a creature starts its turn {@condition restrained} by the whirlwind, the creature is pulled 5 feet higher inside it, unless the creature is at the top. A {@condition restrained} creature moves with the whirlwind and falls when the spell ends, unless the creature has some means to stay aloft.",
                    "A {@condition restrained} creature can use an action to make a Strength or Dexterity check against your spell save DC. If successful, the creature is no longer {@condition restrained} by the whirlwind and is hurled {@dice 3d6} × 10 feet away from it in a random direction."
                ],
                "page": 171,
                "damageInflict": [
                    "bludgeoning"
                ],
                "savingThrow": [
                    "dexterity",
                    "strength"
                ],
                "opposedCheck": [
                    "strength",
                    "dexterity"
                ]
            },
            {
                "name": "Word of Radiance",
                "source": "XGE",
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
                    "m": "a holy symbol"
                },
                "duration": [
                    {
                        "type": "instant"
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Cleric",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You utter a divine word, and burning radiance erupts from you. Each creature of your choice that you can see within range must succeed on a Constitution saving throw or take {@dice 1d6} radiant damage.",
                    "The spell's damage increases by {@dice 1d6} when you reach 5th level ({@dice 2d6}), 11th level ({@dice 3d6}), and 17th level ({@dice 4d6})."
                ],
                "page": 171,
                "damageInflict": [
                    "radiant"
                ],
                "savingThrow": [
                    "constitution"
                ]
            },
            {
                "name": "Wrath of Nature",
                "source": "XGE",
                "level": 5,
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
                        "amount": 120
                    }
                },
                "components": {
                    "v": true,
                    "s": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Druid",
                            "source": "PHB"
                        },
                        {
                            "name": "Ranger",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You call out to the spirits of nature to rouse them against your enemies. Choose a point you can see within range. The spirits cause trees, rocks, and grasses in a 60-foot cube centered on that point to become animated until the spell ends.",
                    {
                        "type": "entries",
                        "name": "Grasses and Undergrowth",
                        "entries": [
                            "Any area of ground in the cube that is covered by grass or undergrowth is difficult terrain for your enemies."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Trees",
                        "entries": [
                            "At the start of each of your turns, each of your enemies within 10 feet of any tree in the cube must succeed on a Dexterity saving throw or take {@dice 4d6} slashing damage from whipping branches."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Roots and Vines",
                        "entries": [
                            "At the end of each of your turns, one creature of your choice that is on the ground in the cube must succeed on a Strength saving throw or become {@condition restrained} until the spell ends. A {@condition restrained} creature can use an action to make a Strength (Athletics) check against your spell save DC, ending the effect on itself on a success."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Rocks",
                        "entries": [
                            "As a bonus action on your turn, you can cause a loose rock in the cube to launch at a creature you can see in the cube. Make a ranged spell attack against the target. On a hit, the target takes {@dice 3d8} nonmagical bludgeoning damage, and it must succeed on a Strength saving throw or fall {@condition prone}."
                        ]
                    }
                ],
                "page": 171,
                "damageInflict": [
                    "bludgeoning",
                    "slashing"
                ],
                "savingThrow": [
                    "dexterity",
                    "strength"
                ],
                "opposedCheck": [
                    "strength"
                ]
            },
            {
                "name": "Zephyr Strike",
                "source": "XGE",
                "level": 1,
                "school": "T",
                "time": [
                    {
                        "number": 1,
                        "unit": "bonus"
                    }
                ],
                "range": {
                    "type": "point",
                    "distance": {
                        "type": "self"
                    }
                },
                "components": {
                    "v": true
                },
                "duration": [
                    {
                        "type": "timed",
                        "duration": {
                            "type": "minutes",
                            "amount": 1
                        },
                        "concentration": true
                    }
                ],
                "classes": {
                    "fromClassList": [
                        {
                            "name": "Ranger",
                            "source": "PHB"
                        }
                    ]
                },
                "entries": [
                    "You move like the wind. Until the spell ends, your movement doesn't provoke opportunity attacks.",
                    "Once before the spell ends, you can give yourself advantage on one weapon attack roll on your turn. That attack deals an extra {@dice 1d8} force damage on a hit. Whether you hit or miss, your walking speed increases by 30 feet until the end of that turn."
                ],
                "page": 171,
                "damageInflict": [
                    "force"
                ]
            }
        ]
    )
}