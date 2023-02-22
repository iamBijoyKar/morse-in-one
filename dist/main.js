"use strict";
const mcCode = require('./morse-code.json');
//  *Morse Code Json import 
const fs = require('fs');
// js file system import
class MorseCode {
    constructor() {
        this.str = '';
    }
    mcConvert() {
        let ans = "";
        let input = this.str;
        let str = String(input).toLowerCase();
        for (let i = 0; i < str.length; i++) {
            const temp = mcCode[str[i]];
            if (temp !== undefined) {
                ans += temp; //*chacking is input character present in morse code json
            }
            else {
                ans += input[i];
            }
            if (i !== str.length - 1) {
                ans += " "; //! Preventing space at the end of string
            }
        }
        return ans;
    }
    mcJson() {
        const input = this.str;
        let str = mcConvert(input);
        const obj = {
            "inputStr": input,
            "outputCode": str
        };
        return obj;
    }
}
// todo: it has a linear time complexcity, need more efficient algorithm
function mcConvert(input) {
    let ans = "";
    let str = String(input).toLowerCase();
    for (let i = 0; i < str.length; i++) {
        const temp = mcCode[str[i]];
        if (temp !== undefined) {
            ans += temp; //*chacking is input character present in morse code json
        }
        else {
            ans += input[i];
        }
        if (i !== str.length - 1) {
            ans += " "; //! Preventing space at the end of string
        }
    }
    return ans;
}
function mcJson(input) {
    let str = mcConvert(input);
    const obj = {
        "inputStr": input,
        "outputCode": str
    };
    return obj;
}
function toJson(input, outFile = 'output') {
    const code = mcConvert(input);
    const str = `{
        "inputStr": "${input}",
        "outputCode": "${code}"
    }`;
    fs.writeFile(`${outFile}.json`, str, (err) => {
        if (err) {
            throw err;
        }
    });
}
function toTxt(input, outFile = 'output') {
    const code = mcConvert(input);
    fs.writeFile(`${outFile}.txt`, code, (err) => {
        if (err) {
            throw err;
        }
    });
}
module.exports = { mcConvert, mcCode, mcJson, toJson, toTxt };
//# sourceMappingURL=main.js.map