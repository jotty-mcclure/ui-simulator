const a11y = require('./a11y.js')
const assert = require('./assert.js')
const click = require('./click.js')
const evaluate = require('./evaluate.js')
const focus = require('./focus.js')
const hover = require('./hover.js')
const keyboardNavigateTo = require('./keyboardNavigateTo.js')
const keypress = require('./keypress.js')
const navigateUrl = require('./navigateUrl.js')
const screenshot = require('./screenshot.js')
const select = require('./select.js')
const setValue = require('./setValue.js')
const _type = require('./type.js')
const waitFor = require('./waitFor.js')

module.exports = {
	a11y,
	assert,
	click,
	evaluate,
	focus,
	hover,
	keyboardNavigateTo,
	keypress,
	navigateUrl,
	screenshot,
	select,
	setValue,
	type: _type,
	waitFor,
}