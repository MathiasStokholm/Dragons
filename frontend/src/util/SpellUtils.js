
export default function getClasses(spell) {
    let classNames = [];
    if ("fromClassList" in spell.classes) {
        classNames = classNames.concat(spell.classes.fromClassList.map(clazz => clazz.name))
    }
    if ("fromClassListVariant" in spell.classes) {
        classNames = classNames.concat(spell.classes.fromClassListVariant.map(clazz => clazz.name))
    }
    return classNames;
}
