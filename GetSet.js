class GetSet{
    get firstName()
    {
        return this._firstName;
    }

    set firstName(firstName)
    {
        this._firstName = firstName;
    }

    get lastName()
    {
        return this._lastName;
    }

    set lastName(lastName)
    {
        this._lastName = lastName;
    }

    get fullName()
    {
        return `${this.firstName} ${this.lastName}`;
    }

    sayHello()
    {
        console.log(`Hello ${this.fullName} !!`);
    }
}

const gs = new GetSet();

gs.firstName = "Rahul";
gs.lastName = "Jaiswal";

gs.sayHello();
