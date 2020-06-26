const actionFuncs = require('./_actionFuncs');

async function handleAction(page, action, value) {
    await actionFuncs[action](page, value);
}

module.exports = async (page, actions=[]) => {
    if ( typeof page === undefined || !actions.length )
        return false;

    try {
        for (let i=0; i<actions.length; i++ ) {
            const action = Object.keys(actions[i])[0];
            const value = actions[i][action];
            await handleAction(page, action, value);
        }
    }
    catch (e) {
        console.log(e);
    }
}