"use strict";
// todo: Better Comments is used 
// !For better experience install Better Comment VS code extension
const mcCode = require('./morse-code.json');
//  *English to Morse Code Json import 
const fs = require('fs');
// js file system import
const morseTo = require('./morse-to.json');
// *Morse code to English Json import 
class MorseCode {
    constructor(input = '') {
        this.realStr = input;
        this.mcCode = this.mcConvert();
        this.strLen = this.realStr.length;
        this.mcLen = this.mcCode.length;
    }
    // *English to morse code method
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
    // *Create a javascript object with "inputStr" and "outputCode" keys method
    // ! JSON Structure 
    //      {
    //          "inputStr": "hello",
    //          "outputCode": ".... . .-.. .-.. ---"
    // 
    mcJson() {
        const input = this.realStr;
        let str = mcConvert(input);
        const obj = {
            "inputStr": input,
            "outputCode": str
        };
        return obj;
    }
    // *Create txt file with morse code content method
    toTxt(outFile = 'output') {
        const code = this.mcCode;
        fs.writeFile(`${outFile}.txt`, code, (err) => {
            if (err) {
                throw err;
            }
        });
    }
    // *Create a json file with "inputStr" and "outputCode" keys
    // ! JSON Structure 
    //      {
    //          "inputStr": "hello",
    //          "outputCode": ".... . .-.. .-.. ---"
    //      }
    toJson(outFile = 'output') {
        const code = this.mcCode;
        const str = `{
            "inputStr": "${this.realStr}",
            "outputCode": "${code}"
        }`;
        fs.writeFile(`${outFile}.json`, str, (err) => {
            if (err) {
                throw err;
            }
        });
    }
    // *Decoding method from English to morse code
    mcDecode() {
        const input = this.mcCode;
        let ans = "";
        let temp = "";
        for (let i = 0; i < input.length; i++) {
            if (input[i] === '/') {
                ans += " ";
                continue;
            }
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
        ans += morseTo[`${temp}`]; //! for last character in the string
        return ans;
    }
    //* Calculate the length of morse code string
    calcMcLen() {
        this.mcLen = this.mcCode.length;
        return this.mcLen;
    }
    //* Calculate the length of input string
    calcStrLen() {
        this.strLen = this.realStr.length;
        return this.strLen;
    }
    // *Is the morse code legit check function 
    isLegit() {
        const input = this.mcCode;
        let temp = "";
        for (let i = 0; i < input.length; i++) {
            if (input[i] === '/') {
                continue;
            }
            if (input[i] !== ' ') {
                temp += input[i];
            }
            else {
                const check = morseTo[`${temp}`];
                if (check === undefined) {
                    return false;
                }
                temp = "";
            }
        }
        if (morseTo[`${temp}`] === undefined) {
            return false;
        }
        return true;
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
// *Create a javascript object with "inputStr" and "outputCode" keys
// ! JSON Structure 
//      {
//          "inputStr": "hello",
//          "outputCode": ".... . .-.. .-.. ---"
//      }
function mcJson(input) {
    let str = mcConvert(input);
    const obj = {
        "inputStr": input,
        "outputCode": str
    };
    return obj;
}
// *Create a json file with "inputStr" and "outputCode" keys
// ! JSON Structure 
//      {
//          "inputStr": "hello",
//          "outputCode": ".... . .-.. .-.. ---"
//      }
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
// *Create txt file with morse code content function
function toTxt(input, outFile = 'output') {
    const code = mcConvert(input);
    fs.writeFile(`${outFile}.txt`, code, (err) => {
        if (err) {
            throw err;
        }
    });
}
// *Decoding function from English to morse code
function mcDecode(input) {
    let ans = "";
    let temp = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '/') {
            ans += " ";
            continue;
        }
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
    ans += morseTo[`${temp}`];
    return ans;
}
// *Is the morse code legit check function 
function isLegit(input) {
    let temp = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '/') {
            continue;
        }
        if (input[i] !== ' ') {
            temp += input[i];
        }
        else {
            const check = morseTo[`${temp}`];
            if (check === undefined) {
                return false;
            }
            temp = "";
        }
    }
    if (morseTo[`${temp}`] === undefined) {
        return false;
    }
    return true;
}
module.exports = { mcConvert, mcCode, mcJson, toJson, toTxt, MorseCode, mcDecode, morseTo, isLegit };
//# sourceMappingURL=main.js.map