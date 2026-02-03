export class Charles {

    message(message: string): string {
        if (message.endsWith('?')) {
            return 'Sure.';
        }
        if (message.endsWith('!')) {
            return 'Whoa. Chill out!'
        }
        if (message.length === 0) {
            return 'Fine. Be that way!'
        }
        return 'Whatever.'
    }
}

const charles = new Charles();
console.log(charles.message('Howdy, partner?'));
console.log(charles.message('Hello, world!'));
console.log(charles.message(''));
console.log(charles.message('hi'));
