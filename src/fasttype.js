const chalk = require('chalk');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

    const { sentences, words } = require('../typing/fasttype.json');

    const sentence = sentences[Math.floor(Math.random() * sentences.length)];
    const word = words[Math.floor(Math.random() * words.length)];

    console.clear();
    rl.question('What sort characters would you like to type?\n1. Word\n2. Sentence\n3. Random Letters\n4. Random Numbers\n5. Random Characters\n', async (type) => {
        if (type == '1') {

            console.clear();
            console.log(chalk.underline('You have 10 seconds to prepare, the word you must type will pop up on screen.'));
            await sleep(5000);
            console.clear();
            console.log('5');
            await sleep(1000);
            console.clear();
            console.log('4');
            await sleep(1000);
            console.clear();
            console.log('3');
            await sleep(1000);
            console.clear();
            console.log('2');
            await sleep(1000);
            console.clear();
            console.log('1');
            await sleep(1000);
            console.clear();

            const start = new Date();
            const simulateTime = 1000;

            rl.question(`${word}\n`, (typedword) => {

                const end = new Date() - start

                if (typedword == word) {
                    rl.close();
                    console.clear();
                    console.log(chalk.green(`Congrats! You typed "${word}" in ` + end / 1000 + ` seconds!`));
                } else {
                    rl.close();
                    console.clear();
                    console.log(chalk.red(`You failed! You typed "${typedword}" instead of "${word}" in ` + end / 1000 + ` seconds!`));
                }

            }, simulateTime);
        
        } else if (type == '2') {

            console.clear();
            console.log(chalk.underline('You have 10 seconds to prepare, the sentence you must type will pop up on screen.'));
            await sleep(5000);
            console.clear();
            console.log('5');
            await sleep(1000);
            console.clear();
            console.log('4');
            await sleep(1000);
            console.clear();
            console.log('3');
            await sleep(1000);
            console.clear();
            console.log('2');
            await sleep(1000);
            console.clear();
            console.log('1');
            await sleep(1000);
            console.clear();

            const start = new Date();
            const simulateTime = 1000;

            rl.question(`${sentence}\n`, (typedsentence) => {

                const end = new Date() - start

                if (typedsentence == sentence) {
                    rl.close();
                    console.clear();
                    console.log(chalk.green(`Congrats! You typed "${sentence}" in ` + end / 1000 + ` seconds!`));
                } else {
                    rl.close();
                    console.clear();
                    console.log(chalk.red(`You failed! You typed "${typedsentence}" in ` + end / 1000 + ` seconds!`));
                }

            }, simulateTime);

        } else if (type == '3') {

            console.clear();
            console.log(chalk.underline('You have 10 seconds to prepare, the random letters you must type will pop up on screen.'));
            await sleep(5000);
            console.clear();
            console.log('5');
            await sleep(1000);
            console.clear();
            console.log('4');
            await sleep(1000);
            console.clear();
            console.log('3');
            await sleep(1000);
            console.clear();
            console.log('2');
            await sleep(1000);
            console.clear();
            console.log('1');
            await sleep(1000);
            console.clear();
    
            const start = new Date();
            const simulateTime = 1000;

            var max = 10
            var min = 5
            var random = Math.floor(Math.random() * (max - min + 1)) + min;

            function randomLetters(length) {
                var result = '';
                var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                var charactersLength = characters.length;
                for ( var i = 0; i < length; i++ ) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
            }

            const randomletters = randomLetters(random);
    
            rl.question(`${randomletters}\n`, (typedletters) => {
    
                const end = new Date() - start
    
                if (typedletters == randomletters) {
                    rl.close();
                    console.clear();
                    console.log(chalk.green(`Congrats! You typed "${randomletters}" in ` + end / 1000 + ` seconds!`));
                } else {
                    rl.close();
                    console.clear();
                    console.log(chalk.red(`You failed! You typed "${typedletters}" in ` + end / 1000 + ` seconds!`));
                }
    
            }, simulateTime);

        } else if (type == '4') {

            console.clear();
            console.log(chalk.underline('You have 10 seconds to prepare, the random numbers you must type will pop up on screen.'));
            await sleep(5000);
            console.clear();
            console.log('5');
            await sleep(1000);
            console.clear();
            console.log('4');
            await sleep(1000);
            console.clear();
            console.log('3');
            await sleep(1000);
            console.clear();
            console.log('2');
            await sleep(1000);
            console.clear();
            console.log('1');
            await sleep(1000);
            console.clear();
    
            const start = new Date();
            const simulateTime = 1000;

            var max = 10
            var min = 5
            var random = Math.floor(Math.random() * (max - min + 1)) + min;

            function randomNumbers(length) {
                var result = '';
                var characters = '1234567890';
                var charactersLength = characters.length;
                for ( var i = 0; i < length; i++ ) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
            }

            const randomnumbers = randomNumbers(random);
    
            rl.question(`${randomnumbers}\n`, (typednumbers) => {
    
                const end = new Date() - start
    
                if (typednumbers == randomnumbers) {
                    rl.close();
                    console.clear();
                    console.log(chalk.green(`Congrats! You typed "${randomnumbers}" in ` + end / 1000 + ` seconds!`));
                } else {
                    rl.close();
                    console.clear();
                    console.log(chalk.red(`You failed! You typed "${typednumbers}" in ` + end / 1000 + ` seconds!`));
                }
    
            }, simulateTime);

        } else if (type == '5') {

            console.clear();
            console.log(chalk.underline('You have 10 seconds to prepare, the random characters you must type will pop up on screen.'));
            await sleep(5000);
            console.clear();
            console.log('5');
            await sleep(1000);
            console.clear();
            console.log('4');
            await sleep(1000);
            console.clear();
            console.log('3');
            await sleep(1000);
            console.clear();
            console.log('2');
            await sleep(1000);
            console.clear();
            console.log('1');
            await sleep(1000);
            console.clear();
    
            const start = new Date();
            const simulateTime = 1000;

            var max = 10
            var min = 5
            var random = Math.floor(Math.random() * (max - min + 1)) + min;

            function randomCharacters(length) {
                var result = '';
                var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~`!@#$%^&*()_-+=|{}[]:;",.<>/?';
                var charactersLength = characters.length;
                for ( var i = 0; i < length; i++ ) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
            }

            const randomcharacters = randomCharacters(random);
    
            rl.question(`${randomcharacters}\n`, (typedcharacters) => {
    
                const end = new Date() - start
    
                if (typedcharacters == randomcharacters) {
                    rl.close();
                    console.clear()
                    console.log(chalk.green(`Congrats! You typed "${randomcharacters}" in ` + end / 1000 + ` seconds!`))
                } else {
                    rl.close();
                    console.clear()
                    console.log(chalk.red(`You failed! You typed "${typedcharacters}" in ` + end / 1000 + ` seconds!`))
                }
    
            }, simulateTime);

        } else {
            console.log(chalk.red('Please input a valid answer! (1, 2, 3, 4, or 5)'))
        }
    });