# ui-simulator
Simulate user interactions with minimal scripting. Built on top of [puppeteer](https://github.com/puppeteer/puppeteer), but gives you a standardized command structure for easy script authoring.

## Install
`npm install ui-simulator --save-dev` 

or 

`yarn add -D ui-simulator`

## Prerequisites
* [puppeteer](https://www.npmjs.com/package/puppeteer)
* [axe-core](https://www.npmjs.com/package/axe-core)

## Usage
```javascript
const puppeteer = require('puppeteer');
const actions = require('ui-simulator');

(async () => {
	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();

	await actions(page, [
		{ navigateUrl: 'http://google.com/' },
		{ waitFor: 1000 },
		{ focus: 'input[name=q]' },
		{ type: 'puppeteer is awesome' },
		{ click: 'input[type=submit][name=btnK]' },
		{ waitFor: 1000 },
	]);

	await browser.close();
})();
```

## Command Definitions
The command definition is a simple array of objects. Each object in the array should be interpreted as a single step or action.

In the usage example illustrated above, we are navigating to a website, waiting 1 second, setting the focus, etc. This allows you to succinctly define the user simulation and interaction with a web interface.

## Commands
Each command is an object with a single key/value pair. 

example: `{ [COMMAND_NAME]: [VALUE] },`

* [a11y](#a11y)
* [assert](#assert)
* [click](#click)
* [evaluate](#evaluate)
* [focus](#focus)
* [hover](#hover)
* [keyboardNavigateTo](#keyboardNavigateTo)
* [keypress](#keypress)
* [navigateUrl](#navigateUrl)
* [screenshot](#screenshot)
* [select](#select)
* [setValue](#setValue)
* [type](#type)
* [waitFor](#waitFor)

### a11y
Performs an accessibility analysis using the [axe-core](https://github.com/dequelabs/axe-core) accessibility rules engine.

```javascript
{ a11y: {
	callback: async (results) => {
		console.log('Hey these are results: ', results.violations.length);
	},
	config: {
		include: [['#my-selector']],
	},
}},
```

### assert
Coming soon!

### click
Simulates a mouse click on an element.
```javascript
{ click: '#my-element' },
```

### evaluate
Allows you to run your own javascript.
```javascript
{ evaluate: async page => {
	await page.evaluate(() => alert('test!'));
	// do more cool stuff here...
}},
```

### focus
Set the focus to the provided target

```javascript
{ focus: '#my-element' },
```

### hover
Simulate a hover on the provided target

```javascript
{ hover: '#my-element' },
```

### keyboardNavigateTo
Simulates keyboard navigation. This will continue to tab through the UI elements until it has reached the target.

```javascript
{ keyboardNavigateTo: '#my-element' },
```

### keypress
Simulates a keypress. Use [this tool](https://w3c.github.io/uievents/tools/key-event-viewer) to help figure out keynames, if you need.

```javascript
{ keypress: 'Enter' },
```

### navigateUrl
Navigates to the specified URL.

```javascript
{ navigateUrl: 'http://cool.site.com' },
```

### screenshot
Coming soon!
<!-- Captures a screenshot of the current page state.

Provide the puppeteer options object as the value.

```
{ screenshot: {} },
``` -->
### select
Sets the value of the targeted select field.

```javascript
{ select: {target: '#my-select', value: 'option1'} },
```

### setValue
Sets the value of the targeted input field.

```javascript
{ setValue: {target: '#my-field', value: 'hello world'} },
```

### type
Simulates a user typing.

```javascript
{ type: 'hello world!' },
```

### waitFor
Pause the script for a given amount of time. Time is in milliseconds.

```javascript
{ waitFor: 1000 },
```
