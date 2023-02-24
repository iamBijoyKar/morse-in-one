const {MorseCode} = require('./../dist/main');

const mcObj = new MorseCode('hello');

test('MorseCode Class Initialization',()=>{
    expect(mcObj.realStr).toBe('hello');
})

test('MorseCode Class : realLen test',()=>{
    expect(mcObj.srtLen).toBe('hello'.length);
})

test('MorseCode Class : mcLen test',()=>{
    expect(mcObj.mcLen).toBe('.... . .-.. .-.. ---'.length);
})

test('MorseCode Class : implicit mcCode',()=>{
    expect(mcObj.mcCode).toBe('.... . .-.. .-.. ---');
})

test('MorseCode Encode : Morse code of a ',()=>{
    mcObj.realStr = 'a';
    expect(mcObj.mcConvert()).toBe('.-');
    
})

test('String : "hi, I am developer"',()=>{
    mcObj.realStr = "hi, I am developer";
    expect(mcObj.mcConvert()).toBe(".... .. --..-- / .. / .- -- / -.. . ...- . .-.. --- .--. . .-.");
})
