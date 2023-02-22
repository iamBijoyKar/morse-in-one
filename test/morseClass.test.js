const {MorseCode} = require('./../dist/main');

const mcObj = new MorseCode();

test('MorseCode Class Initialization',()=>{
    expect(mcObj.str).toBe('');
})

test('Morse code of a ',()=>{
    mcObj.str = 'a'
    expect(mcObj.mcConvert()).toBe('.-');
    
})

test('String : "hi, I am developer"',()=>{
    mcObj.str = "hi, I am developer";
    expect(mcObj.mcConvert()).toBe(".... .. --..-- / .. / .- -- / -.. . ...- . .-.. --- .--. . .-.");
})
