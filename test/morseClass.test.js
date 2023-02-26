const {MorseCode} = require('./../dist/main');

const mcObj = new MorseCode('hello');

// *Class Attributes Tests

test('MorseCode Class Initialization',()=>{
    expect(mcObj.realStr).toBe('hello');
})

test('MorseCode Class : realLen test',()=>{
    expect(mcObj.strLen).toBe('hello'.length);
})

test('MorseCode Class : mcLen test',()=>{
    expect(mcObj.mcLen).toBe('.... . .-.. .-.. ---'.length);
})

test('MorseCode Class : implicit mcCode',()=>{
    expect(mcObj.mcCode).toBe('.... . .-.. .-.. ---');
})


// *Class Methods Tests 

// *Encoding Tests 

test('MorseCode Encode : Morse code of a ',()=>{
    mcObj.realStr = 'a';
    expect(mcObj.mcConvert()).toBe('.-');
    
})

test('String : "hi, I am developer"',()=>{
    mcObj.realStr = "hi, I am developer";
    expect(mcObj.mcConvert()).toBe(".... .. --..-- / .. / .- -- / -.. . ...- . .-.. --- .--. . .-.");
})


// *Decoding Tests 

test('Decode : `-- --- .-. ... . / -.-. --- -.. . / --. . -. . .-. .- - --- .-. / -... -.-- / -... .. .--- --- -.-- / -.- .- .-. `',()=>{
    mcObj.mcCode = `-- --- .-. ... . / -.-. --- -.. . / --. . -. . .-. .- - --- .-. / -... -.-- / -... .. .--- --- -.-- / -.- .- .-.`;
    expect(mcObj.mcDecode()).toBe('Morse Code Generator by Bijoy Kar'.toLowerCase());
})

// *Is Legit Morse code Tests

test('isLegit : `- .... . / - . ... - / . -. ...- .. .-. --- -. -- . -. - / ..- ... . -.. / ..-. --- .-. / .- .-.. .-.. / - . ... - ... .-.-.- / - .... .. ... / -.-. .- -. / .--. --- .. -. - / - --- / .- -. -.-- / ..-. .. .-.. . / --- .-. / -. --- -.. . / -- --- -.. ..- .-.. . .-.-.-`',()=>{
    mcObj.mcCode = '- .... . / - . ... - / . -. ...- .. .-. --- -. -- . -. - / ..- ... . -.. / ..-. --- .-. / .- .-.. .-.. / - . ... - ... .-.-.- / - .... .. ... / -.-. .- -. / .--. --- .. -. - / - --- / .- -. -.-- / ..-. .. .-.. . / --- .-. / -. --- -.. . / -- --- -.. ..- .-.. . .-.-.-';
    expect(mcObj.isLegit()).toBe(true);
})
