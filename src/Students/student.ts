
export class Student {

    private id: number;
    private name: string;
    private surname: string;
    private age: number;
    private group: string;

    constructor(id: number, name: string, surname: string, age: number, group: string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.group = group;
    }

    getName(): string{
        return this.name;
    }

    getSurnmae(): string{
        return this.surname;
    }
    getAge(): number{
        return this.age;
    }
    getGroup(): string{
        return this.group;
    }
    
    
    

}