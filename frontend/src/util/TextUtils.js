
export default function processSymbols(text, func) {
    const reg = new RegExp(/({@\w+ [\w+\s\-]+\|?[^}]*})/, 'i');
    const parts = text.split(reg);
    return parts.map(str => {
        if (reg.test(str)) {
            const valReg = new RegExp(/{@(\w+) ([^{|]+)\|?.*}/, 'i');
            const matches = str.match(valReg);
            if (matches === null) {
                return str
            }
            const tag = matches[1]
            const value = matches[2]
            return func(tag, value)
        }
        return str;
    });
}
