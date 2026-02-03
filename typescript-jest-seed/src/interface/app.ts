interface User {
    id: number;
    name: string;
    settings: {
        settingA: number;
        settingB: number;
    }
}

class Exercise1 {
    createUser(name: string): User {
        return {
            id: 123,
            name: name,
            settings: {
                settingA: 123,
                settingB: 456,
            }
        }
    }
}

let user = new Exercise1().createUser('Andreas');
console.log(user);