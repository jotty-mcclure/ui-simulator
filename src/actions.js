const actionFuncs = require('./_actionFuncs');

async function handleAction(page, action, value) {
    await actionFuncs[action](page, value);
}

module.exports = async (page, actions=[]) => {
    // TODO: expect page instance
    for (let i=0; i<actions.length; i++ ) {
        const action = Object.keys(actions[i])[0];
        const value = actions[i][action];
        await handleAction(page, action, value);
    }
}