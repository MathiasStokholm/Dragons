import getClasses from './SpellUtils';

it('finds classes from spell', () => {
    let spell = {
        classes: {
            fromClassList: [
                {name: "test1"},
                {name: "test2"}
            ],
            fromClassListVariant: [
                {name: "variant 1"},
                {name: "variant 2"}
            ]
        }
    }
    expect(getClasses(spell)).toEqual(["test1", "test2", "variant 1", "variant 2"]);
});