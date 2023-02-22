const {mcConvert, mcCode} = require('./main');
const json = require('./morse-code.json');



test('Morse Code Json',()=>{
    expect(mcCode).toEqual(json)
})
test('Morse Code of A',()=>{
    expect(mcConvert('a')).toBe('.-');
    expect(mcConvert("A")).toBe('.-');
    expect(mcConvert("`")).toBe('`');
})

test('Hello World!',()=>{
    expect(mcConvert('hello world!')).toBe('.... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--');
    expect(mcConvert('Hello World!')).toBe('.... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--');
    expect(mcConvert('Hello World')).not.toBe('.... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--');
})

test('String : "hi, I am developer"',()=>{
    expect(mcConvert("hi, I am developer")).toBe(".... .. --..-- / .. / .- -- / -.. . ...- . .-.. --- .--. . .-.");
})

test('String: "!@#$%^&*()"',()=>{
    expect(mcConvert("!@#$%^&*()")).toBe("-.-.-- .--.-. # $ % ^ & * -.--. -.--.-");
})

test('More space between :"nknfondfn ad n    nlkanfksdnfan   "',()=>{
    expect(mcConvert('nknfondfn ad n    nlkanfksdnfan   ')).toBe('-. -.- -. ..-. --- -. -.. ..-. -. / .- -.. / -. / / / / -. .-.. -.- .- -. ..-. -.- ... -.. -. ..-. .- -. / / /')
})