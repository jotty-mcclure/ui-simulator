const actionFuncs = require('./_actionFuncs');
const ora = require('ora');
const chalk = require('chalk');
const logSymbols = require('log-symbols');

async function handleAction(page, action, value) {
    const noValueDisplay = ['a11y', 'evaluate', 'screenshot'];
    const logValue = typeof value == 'object' ? JSON.stringify(value) : value.toString();
    const valueString = noValueDisplay.indexOf(action) === -1 ? `: ${chalk.yellow(logValue)}` : '';

    const spinner = ora({ 
        discardStdin: false,
        text: `${chalk.cyan(action)}${valueString}`
    }).start();

    const resp = await actionFuncs[action](page, value);
    spinner.stop();
    
    if ( resp ) {
        console.log('  ', logSymbols.success, `${chalk.cyan(action)}${valueString}`);
    } else {
        console.log('  ', logSymbols.error, `${chalk.cyan(action)}${valueString}`);
    }
}

module.exports = async (page, actions=[]) => {
    if ( typeof page === undefined || !actions.length )
        return false;

    try {
        const availableActions = Object.keys(actionFuncs);

        console.log(chalk.blue(`${actions.length} steps defined:`));

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