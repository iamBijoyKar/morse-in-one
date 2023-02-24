// const {mcConvert, mcCode} = require('../dist/main');
const { mcCode ,mcConvert, mcDecode} =require('../dist/main');
const json = require('../dist/morse-code.json');



test('Morse Code Json',()=>{
    expect(mcCode).toEqual(json)
})
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