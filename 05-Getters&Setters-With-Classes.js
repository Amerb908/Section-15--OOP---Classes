class Person
{
    constructor(firstName, lastName)
    {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName()
    {
        return this.capitalizeFirst(this._firstName);
    }

    set firstName(value)
    {
        this._firstName = this.capitalizeFirst(value);
    }

    capitalizeFirst(value)
    {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}

const person1 = new Person('john', 'doe');
console.log(person1.firstName); // John
person1.firstName = 'jane';
console.log(person1.firstName); // Jane