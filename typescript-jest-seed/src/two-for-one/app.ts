export class TwoFer {
    get(name: string): string {
        return name ? `One for ${name}, one for me.` : "One for you, one for me."
    }
}

let twoFer = new TwoFer();

let statement = twoFer.get('Andreas');
let statement2 = twoFer.get('');
console.log(statement, statement2);