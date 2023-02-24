# morse-in-one
***A npm package for morse code***

![banner](morse-in-one.jpg)

[![NPM](https://img.shields.io/npm/l/morse-in-one)](./LICENSE)
![npm](https://img.shields.io/npm/v/morse-in-one)
<img alt="npm" src="https://img.shields.io/npm/dw/morse-in-one">
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/iamBijoyKar/morse-in-one/publish.yml)
![GitHub top language](https://img.shields.io/github/languages/top/iamBijoyKar/morse-in-one)

### Deployment Status 🚀 [![Netlify Status](https://api.netlify.com/api/v1/badges/2697554f-7da8-476e-99e5-6f4f7aa55d5e/deploy-status)](https://app.netlify.com/sites/morse-in-one/deploys)

## [✨ npm package](https://www.npmjs.com/package/morse-in-one)

##  Install 🎉

```cmd
npm install morse-in-one
npm i morse-in-one
```
## Usage 🔥

```javascript
const { mcConvert } = require('../package/dist/main');
console.log(mcConvert('hello world!'))
```
This function will return the morse code of english words.

Output: 
```cmd
.... . .-.. .-.. --- / .-- --- .-. .-.. -.. -.-.--
```

```javascript
const { mcConvert, mcJson, toJson, toTxt, MorseCode } = require('../package/dist/main');
```

These are some more utility functions.
