export default function checkFalsyObject() {
    const res = falsyRecursive(this);
    return res
}

function falsyRecursive(obj) {
    const keys = Object.keys(obj);
    for (const key of keys) {
        if (obj[key] === null || obj[key] === undefined) {
            return key;
        }
        if (typeof obj[key] === 'object') {
            return falsyRecursive(obj[key]);
        }
    }
    return null
}

const o= {
    a: 0,
    b: {
        c: null,
        d: 5
    }
}

console.log(checkFalsyObject.call(o))