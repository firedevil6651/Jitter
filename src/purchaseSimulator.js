const chalk = require('chalk');
const ora = require('ora');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    rl.question('Please enter your card numbers here: ', async (numbers) => {
        rl.question('PLease enter your CVV here: ', async (cvv) => {
            rl.question('Please enter the expiration date here: ', async (expirationDate) => {


                function transactionId(length) {
                    var result = '';
                    var characters = '1234567890abcdefghijklmnopqrstuvwxyz';
                    var charactersLength = characters.length;
                    for ( var i = 0; i < length; i++ ) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    return result;
                }

                function sleep(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }

                var date_regex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;

                if (numbers != null && numbers.length == 12 && !isNaN(numbers) && cvv != null && cvv.length == 3) {
                    console.clear();
                    console.log('Your transaction is pending!');
                    await sleep(3000);
                    console.clear();
                    const loading = ora('Loading transaction...').start();
                    await sleep(5000);
                    console.clear();
                    loading.stop();
                    var max = 7
                    var min = 1
                    var random = Math.floor(Math.random() * (max - min + 1)) + min;
                    console.log(chalk.green('Purchase successful! Your item will be delivered within ' + random + ' business days! Thank you for your purchase!'));
                    console.log(chalk.grey('Transaction ID: ' + transactionId(10)));
                } else if (!(date_regex.test(expirationDate))) {
                    console.clear();
                    console.log(chalk.red("Invalid expiration date! (XX/XX)"));
                    rl.close();
                    return;
                } else if (numbers.length < 12) {
                    console.clear();
                    console.log(chalk.red("Invalid card number! (XXXXXXXXXXXX)"));
                    rl.close();
                    return;
                } else if (cvv.length < 3) {
                    console.clear();
                    console.log(chalk.red("Invalid CVV! (XXX)"));
                    rl.close();
                    return;
                } else {
                    console.clear();
                    console.log(chalk.red("An error occured!"));
                    rl.close();
                    return;
                }
            });
        });
    });