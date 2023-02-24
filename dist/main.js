"use strict";
const mcCode = require('./morse-code.json');
//  *Morse Code Json import 
const fs = require('fs');
// js file system import
const morseTo = require('./morse-to.json');
class MorseCode {
    constructor(input = '') {
        this.realStr = input;
        this.mcCode = this.mcConvert();
        this.srtLen = this.realStr.length;
        this.mcLen = this.mcCode.length;
    }
    mcConvert() {
        let ans = "";
        let input = this.realStr;
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
        const input = this.realStr;
        let str = mcConvert(input);
        const obj = {
            "inputStr": input,
            "outputCode": str
        };
        return obj;
    }
    toTxt(input, outFile = 'output') {
        const code = mcConvert(input);
        fs.writeFile(`${outFile}.txt`, code, (err) => {
            if (err) {
                throw err;
            }
        });
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
function mcDecode(input) {
    let ans = "";
    let temp = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '/') {
            ans += " ";
        }
        else {
            if (input[i] !== ' ') {
                temp += input[i];
            }
            else {
                const check = morseTo[`${temp}`];
                if (check !== undefined) {
                    ans += check;
                }
                temp = "";
            }
        }
    }
    ans += morseTo[`${temp}`];
    return ans;
}
module.exports = { mcConvert, mcCode, mcJson, toJson, toTxt, MorseCode, mcDecode };
//# sourceMappingURL=main.js.map