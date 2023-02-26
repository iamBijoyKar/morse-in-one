// const {mcConvert, mcCode} = require('../dist/main');
const { mcCode ,mcConvert, mcDecode, isLegit, mcJson} =require('../dist/main');
const json = require('../dist/morse-code.json');


// *English to morse code Json test 
test('Morse Code Json',()=>{
    expect(mcCode).toEqual(json)
})

// *Encoding Tests 

test('Encode : Morse Code of A',()=>{
    expect(mcConvert('a')).toBe('.-');
    expect(mcConvert("A")).toBe('.-');
    expect(mcConvert("`")).toBe('`');
})

test('Encode : Hello World!',()=>{
    expect(mcConvert('hello world!')).toBe('.... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--');
    expect(mcConvert('Hello World!')).toBe('.... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--');
    expect(mcConvert('Hello World')).not.toBe('.... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--');
})

test('Encode String : "hi, I am developer"',()=>{
    expect(mcConvert("hi, I am developer")).toBe(".... .. --..-- / .. / .- -- / -.. . ...- . .-.. --- .--. . .-.");
})

test('Encode String: "!@#$%^&*()"',()=>{
    expect(mcConvert("!@#$%^&*()")).toBe("-.-.-- .--.-. # $ % ^ & * -.--. -.--.-");
})

test('Encode : More space between :"nknfondfn ad n    nlkanfksdnfan   "',()=>{
    expect(mcConvert('nknfondfn ad n    nlkanfksdnfan   ')).toBe('-. -.- -. ..-. --- -. -.. ..-. -. / .- -.. / -. / / / / -. .-.. -.- .- -. ..-. -.- ... -.. -. ..-. .- -. / / /')
})

// *Decoding Tests 

test('Decode : a',()=>{
    expect(mcDecode('.-')).toBe('a');
})

test('Decode : abc',()=>{
    expect(mcDecode('.- -... -.-.')).toBe('abc');
})

test('Decode : `--..-- -..-. --..-- --..-- ; --..-- --..-- ;`',()=>{
    expect(mcDecode('--..-- -..-. --..-- --..-- ; --..-- --..-- ;')).toBe(',/,,;,,;');
})

test('Decode : "i am a developer" ',()=>{
    expect(mcDecode('.. / .- -- / .- / -.. . ...- . .-.. --- .--. . .-.')).toBe('i am a developer');
})

test('Decode : "hello, i am bijoy kar. nice to meet you." ',()=>{
    expect(mcDecode('.... . .-.. .-.. --- --..-- / .. / .- -- / -... .. .--- --- -.-- / -.- .- .-. .-.-.- / -. .. -.-. . / - --- / -- . . - / -.-- --- ..- .-.-.-')).toBe('hello, i am bijoy kar. nice to meet you.');
})

// * Is Legit Morse code Tests 

test('isLegit: a ',()=>{
    expect(isLegit('.-')).toBe(true);
})

test('isLegit : `-- --- .-. ... . / -.-. --- -.. . / --. . -. . .-. .- - --- .-.`',()=>{
    expect(isLegit('-- --- .-. ... . / -.-. --- -.. . / --. . -. . .-. .- - --- .-.')).toBe(true);
})

test('isLegit : --------',()=>{
    expect(isLegit('--------')).toBe(false);
})

test('isLegit : .... -- .. . ..-----',()=>{
    expect(isLegit('.... -- .. . ..-----')).toBe(false);
})