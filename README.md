# morse-in-one
***A npm package for morse code with lots of features. Encode, Decode morse code, export as JSON ot TXT files. And more....***

![banner](readme-assets/morse-in-one.jpg)

[![NPM](https://img.shields.io/npm/l/morse-in-one)](./LICENSE)
![npm](https://img.shields.io/npm/v/morse-in-one)
<img alt="npm" src="https://img.shields.io/npm/dw/morse-in-one">
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/iamBijoyKar/morse-in-one/test.yml?label=test&logo=jest)
![GitHub Workflow Status (with branch)](https://img.shields.io/github/actions/workflow/status/iamBijoyKar/morse-in-one/publish.yml?branch=production&color=blueviolet&label=npm%20publish&logo=npm)
![GitHub top language](https://img.shields.io/github/languages/top/iamBijoyKar/morse-in-one)

### Deployment Status 🚀 [![Netlify Status](https://api.netlify.com/api/v1/badges/2697554f-7da8-476e-99e5-6f4f7aa55d5e/deploy-status)](https://app.netlify.com/sites/morse-in-one/deploys)

## 🥰 View the npm package 👇
[<img src="./readme-assets/npm-2009.png" width="200"/>](https://www.npmjs.com/package/morse-in-one)

##  Install 🎉

```cmd
npm install morse-in-one 
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

### Class Methods : 

| Method | Description |
|-----------------|-------------|
|mcConvert( )| Encode Morse Code|
|mcDecode( )| Decode Morse Code|
|mcJson( )| Return Js object of Morse Code|
|toJson( )| Create Json file|
|toTxt( )| Create Txt file|
|isLegit( )| Return Boolean : is it a Legit Morse code|


## 🔢 npm package version and support 
| Version | Support | Recommended|
|---------|--------|------------|
|[0.0.0](https://www.npmjs.com/package/morse-in-one?activeTab=versions)| `module.export` `require`    | ❌ |
|[0.0.1](https://www.npmjs.com/package/morse-in-one?activeTab=versions)| `import` `export` | ❌ |
|[0.0.2](https://www.npmjs.com/package/morse-in-one?activeTab=versions)| `import` `export` | ✅ |
|[0.0.3](https://www.npmjs.com/package/morse-in-one?activeTab=versions)| `import` `export` | ✅ |

## For more details check the [Docs](https://morse-in-one.netlify.app/)

## ❤️ Visit the project  [GitHub Repository](https://github.com/iamBijoyKar/morse-in-one) and give a star 🌟 
## 😍 Contributors are warmly welcomed 👫

