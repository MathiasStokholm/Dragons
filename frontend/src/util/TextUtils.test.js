import processSymbols from './TextUtils';

it('replaces symbols in text', () => {
    let texts = [
        "Hit Dice to regain hit points regains an extra {@dice 1d8} hit points.",
        "magically become {@condition invisible} until the end of your next turn",
        "You master the {@item handaxe|phb}, {@item battleaxe|phb}, {@item greataxe|phb},",
        "You learn the {@spell misty step} spell and can cast ",
        "spell and one {@filter 1st-level spell|spells|level=1|school=E;D} of your choice.",
        "You gain proficiency with {@item cook's utensils|phb}.",
        "You learn two {@filter maneuvers|optionalfeatures|feature type=MV:B} of your choice",
    ];
    let texts_expected = [
        "Hit Dice to regain hit points regains an extra <b>1d8</b> hit points.",
        "magically become <i>invisible</i> until the end of your next turn",
        "You master the handaxe, battleaxe, greataxe,",
        "You learn the MISTY STEP spell and can cast ",
        "spell and one 1st-level spell of your choice.",
        "You gain proficiency with cook's utensils.",
        "You learn two maneuvers of your choice",
    ];
    let func = (tag, value) => {
        if (tag === "dice") {
            return `<b>${value}</b>`;
        } else if (tag === "condition") {
            return `<i>${value}</i>`;
        } else if (tag === "item" || tag === "filter") {
            return value;
        } else if (tag === "spell") {
            return value.toUpperCase();
        }
    };

    // Zip
    texts.map((t, index) => [t, texts_expected[index]]).forEach(([text, text_expected]) => {
        expect(processSymbols(text, func).join("")).toEqual(text_expected);
    });
});