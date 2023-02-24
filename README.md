# morse-in-one
***A npm package for morse code with lots of features. Encode, Decode morse code, export as JSON ot TXT files. And more....***

![banner](morse-in-one.jpg)

[![NPM](https://img.shields.io/npm/l/morse-in-one)](./LICENSE)
![npm](https://img.shields.io/npm/v/morse-in-one)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/iamBijoyKar/morse-in-one/publish.yml)
![GitHub top language](https://img.shields.io/github/languages/top/iamBijoyKar/morse-in-one)
![](https://img.shields.io/badge/msg-npm--package-orange)

### Website Deployment Status 🚀 [![Netlify Status](https://api.netlify.com/api/v1/badges/2697554f-7da8-476e-99e5-6f4f7aa55d5e/deploy-status)](https://app.netlify.com/sites/morse-in-one/deploys)
## [✨ npm package](https://www.npmjs.com/package/morse-in-one)

##  Install 🎉

```cmd
npm install morse-in-one
npm i morse-in-one
```
## Usage 🔥

### Morse Code Encode
```javascript
import { mcConvert } from 'morse-in-one'
console.log(mcConvert('hello world!'))
```
This function will return the morse code of english words.

Output: 
```cmd
.... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--
```
### Morse Code Decode
```javascript
import { mcDecode }  from 'morse-in-one';
console.log(mcDecode('.... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--'))
```

Output: 
```cmd
hello world!
```
### Morse Code Class 
```javascript
import { MorseCode } from 'morse-in-one';
const newObj = new MorseCode('hello');
console.log(newObj.mcCode);
```
Output: 
```cmd
.... . .-.. .-.. ---
```
### Class Attributes : 

| Attribute Name | Description |
|-----------------|-------------|
|realStr| Real input string|
|mcCode| Morse code of input string|
|strLen| Length of input string|
|mcLen| Length of morse code of input string|


## npm version and support 
| Version | Support | Recommended|
|---------|--------|------------|
|[0.0.0](https://www.npmjs.com/package/morse-in-one?activeTab=versions)| `module.export` `require`    | ❌ |
|[0.0.1](https://www.npmjs.com/package/morse-in-one?activeTab=versions)| `import` `export` | ❌ |
|[0.0.2](https://www.npmjs.com/package/morse-in-one?activeTab=versions)| `import` `export` | ✅ |

## ❤️ Visit my [GitHub Repository](https://github.com/iamBijoyKar/morse-in-one) and give a star 🌟 
## 😍 Contributers are warmly welcomed 👫
