const mcCode = require('./morse-code.json')
//  *Morse Code Json import 
const fs = require('fs')
// js file system import
const morseTo = require('./morse-to.json');


class MorseCode{
    realStr:string;
    mcCode:string;
    srtLen:Number;
    mcLen:Number;
    constructor(input:string=''){
        this.realStr = input;
        this.mcCode = this.mcConvert();
        this.srtLen = this.realStr.length;
        this.mcLen = this.mcCode.length;
    }
    
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

    mcJson():object{
        const input:string = this.realStr;
        let str:string = mcConvert(input);
        const obj = {
            "inputStr": input,
            "outputCode": str
        }
        return obj;
    }
    
    toTxt(input:string,outFile:string='output'):void{
        const code = mcConvert(input);
        
        fs.writeFile(`${outFile}.txt`,code,(err:Error)=>{
            if(err){
                throw err;
            }
        })
    }
    mcDecode():string{
        const input = this.realStr;
        let ans:string = "";
        let temp:string = "";
        for(let i=0;i<input.length;i++){
            if(input[i] === '/'){
                ans += " ";
            }
            else{
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
        }
        ans+= morseTo[`${temp}`];//! for last character in the string
        return ans;
    }
    calcMcLen():Number{
        return this.mcCode.length;
    }
    calcStrLen():Number{
        return this.realStr.length;
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

function mcJson(input:string):object{
    let str:string = mcConvert(input);
    const obj = {
        "inputStr": input,
        "outputCode": str
    }
    return obj;
}

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

function toTxt(input:string,outFile:string='output'):void{
    const code = mcConvert(input);
    
    fs.writeFile(`${outFile}.txt`,code,(err:Error)=>{
        if(err){
            throw err;
        }
    })
}

function mcDecode(input:string):string{
    let ans:string = "";
    let temp:string = "";
    for(let i=0;i<input.length;i++){
        if(input[i] === '/'){
            ans += " ";
        }
        else{
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
    }
    ans+= morseTo[`${temp}`];
    return ans;
}


module.exports = {mcConvert, mcCode, mcJson, toJson, toTxt, MorseCode, mcDecode};