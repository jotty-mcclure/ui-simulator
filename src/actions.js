const actionFuncs = require('./_actionFuncs');

async function handleAction(page, action, value) {
    await actionFuncs[action](page, value);
}

module.exports = async (page, actions=[]) => {
    if ( typeof page === undefined || !actions.length )
        return false;

    try {
        const availableActions = Object.keys(actionFuncs);

        for (let i=0; i<actions.length; i++ ) {
            const action = Object.keys(actions[i])[0];
            const value = actions[i][action];
            
            if ( availableActions.indexOf(action) > -1 ) {
                await handleAction(page, action, value);
            } else {
                throw Error(`"${action}" is not a command. Please check your configuration and try again.`)
            }
        }
    }
    catch (e) {
        console.log(e);
    }
}