// todo: Better Comments is used 
// !For better experience install Better Comment VS code extension

const mcCode = require('./morse-code.json')
//  *English to Morse Code Json import 
const fs = require('fs')
// js file system import
const morseTo = require('./morse-to.json');
// *Morse code to English Json import 

class MorseCode{
    realStr:string; //? Input string
    mcCode:string;  //? Generated morse code
    strLen:Number;  //? Length of input string 
    mcLen:Number;   //? Length of generated morse code

    constructor(input:string=''){   // ! default input string is empty
        this.realStr = input;
        this.mcCode = this.mcConvert();
        this.strLen = this.realStr.length;
        this.mcLen = this.mcCode.length;
    }

    // *English to morse code method
    mcConvert():string{
        let ans:string = "";
        let input:string = this.realStr;
        let str = String(input).toLowerCase();
        for(let i=0; i<str.length; i++){
            const temp = mcCode[str[i]];
            if(temp !== undefined){
                ans += temp;//*chacking is input character present in morse code json
            }
            else{
                ans += input[i];
            }
            if(i!==str.length-1){
                ans += " ";//! Preventing space at the end of string
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
    mcJson():object{
        const input:string = this.realStr;
        let str:string = mcConvert(input);
        const obj = {
            "inputStr": input,
            "outputCode": str
        }
        return obj;
    }
    
    // *Create txt file with morse code content method
    toTxt(outFile:string='output'):void{
        const code = this.mcCode;
        fs.writeFile(`${outFile}.txt`,code,(err:Error)=>{
            if(err){
                throw err;
            }
        })
    }

    // *Create a json file with "inputStr" and "outputCode" keys
    // ! JSON Structure 
    //      {
    //          "inputStr": "hello",
    //          "outputCode": ".... . .-.. .-.. ---"
    //      }
    toJson(outFile:string='output'):void{
        const code = this.mcCode;
        const str:string = `{
            "inputStr": "${this.realStr}",
            "outputCode": "${code}"
        }`
        fs.writeFile(`${outFile}.json`,str,(err:Error)=>{
            if(err){
                throw err;
            }
        })
    }
    // *Decoding method from English to morse code
    mcDecode():string{
        const input = this.mcCode;
        let ans:string = "";
        let temp:string = "";
        for(let i=0;i<input.length;i++){
            if(input[i] === '/'){
                ans += " ";
                continue;
            }
            if(input[i]!==' '){
                temp += input[i];
            }
            else{
                const check = morseTo[`${temp}`];
                if(check !== undefined){
                    ans += check;
                }
                temp = "";
            }
        }
        ans+= morseTo[`${temp}`];//! for last character in the string
        return ans;
    }

    //* Calculate the length of morse code string
    calcMcLen():Number{
        this.mcLen = this.mcCode.length;
        return this.mcLen;
    }

    //* Calculate the length of input string
    calcStrLen():Number{
        this.strLen = this.realStr.length;
        return this.strLen;
    }

    // *Is the morse code legit check function 
    isLegit():boolean{
        const input:string = this.mcCode;
        let temp:string = "";
        for(let i=0;i<input.length;i++){
            if(input[i] === '/'){
                continue;
            }
            if(input[i]!==' '){
                temp += input[i];
            }
            else{
                const check = morseTo[`${temp}`];
                if(check === undefined){
                    return false;
                }
                temp = "";
            }
        }
        if(morseTo[`${temp}`] === undefined){
            return false;
        }
        return true;
    }
}



// todo: it has a linear time complexcity, need more efficient algorithm
function mcConvert(input:string):string{
    let ans:string = "";
    let str = String(input).toLowerCase();
    for(let i=0; i<str.length; i++){
        const temp = mcCode[str[i]];
        if(temp !== undefined){
            ans += temp;//*chacking is input character present in morse code json
        }
        else{
            ans += input[i];
        }
        if(i!==str.length-1){
            ans += " ";//! Preventing space at the end of string
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

function mcJson(input:string):object{
    let str:string = mcConvert(input);
    const obj = {
        "inputStr": input,
        "outputCode": str
    }
    return obj;
}


// *Create a json file with "inputStr" and "outputCode" keys
// ! JSON Structure 
//      {
//          "inputStr": "hello",
//          "outputCode": ".... . .-.. .-.. ---"
//      }

function toJson(input:string,outFile:string='output'):void{
    const code = mcConvert(input);
    const str:string = `{
        "inputStr": "${input}",
        "outputCode": "${code}"
    }`
    fs.writeFile(`${outFile}.json`,str,(err:Error)=>{
        if(err){
            throw err;
        }
    })
}

// *Create txt file with morse code content function
function toTxt(input:string,outFile:string='output'):void{
    const code = mcConvert(input);
    
    fs.writeFile(`${outFile}.txt`,code,(err:Error)=>{
        if(err){
            throw err;
        }
    })
}

// *Decoding function from English to morse code
function mcDecode(input:string):string{
    let ans:string = "";
    let temp:string = "";
    for(let i=0;i<input.length;i++){
        if(input[i] === '/'){
            ans += " ";
            continue;
        }
        if(input[i]!==' '){
            temp += input[i];
        }
        else{
            const check = morseTo[`${temp}`];
            if(check !== undefined){
                ans += check;
            }
            temp = "";
        }
    }
    ans+= morseTo[`${temp}`];
    return ans;
}

// *Is the morse code legit check function 
function isLegit(input:string):boolean{
    let temp:string = "";
    for(let i=0;i<input.length;i++){
        if(input[i] === '/'){
            continue;
        }
        if(input[i]!==' '){
            temp += input[i];
        }
        else{
            const check = morseTo[`${temp}`];
            if(check === undefined){
                return false;
            }
            temp = "";
        }
    }
    if(morseTo[`${temp}`] === undefined){
        return false;
    }
    return true;
}




module.exports = {mcConvert, mcCode, mcJson, toJson, toTxt, MorseCode, mcDecode, morseTo,isLegit};