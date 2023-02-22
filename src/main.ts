const mcCode = require('./morse-code.json')
//  *Morse Code Json import 
const fs = require('fs')
// js file system import


class MorseCode{
    str:string;
    constructor(){
        this.str = ''
    }

    mcConvert():string{
        let ans:string = "";
        let input:string = this.str;
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
        const input:string = this.str;
        let str:string = mcConvert(input);
        const obj = {
            "inputStr": input,
            "outputCode": str
        }
        return obj;
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



module.exports = {mcConvert, mcCode, mcJson, toJson, toTxt}