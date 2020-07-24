# term-pixel-size [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/term-pixel-size/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/term-pixel-size)

Get the size of the terminal in pixels.

[![NPM Badge](https://nodei.co/npm/term-pixel-size.png)](https://npmjs.com/package/term-pixel-size)

## Install

```sh
npm install term-pixel-size
```

## Usage

```js
const termPixelSize = require("term-pixel-size");

(async () => {
	const {width, height} = await termPixelSize()
})();
```

## API

### termPixelSize()

Returns a promise that resolves with an object containing `width` and `height` properties
