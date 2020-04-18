function A(a){
    this.a = a;
}

A.prototype.printA = function(){
    console.log(this.a);
}

class B extends A
{
    constructor(a, b){
        super(a);
        this.b = b;
    }

    printB()
    {
        console.log(this.b);
    }

    static sayHello()
    {
        console.log("Hello World!");
    }
}

class C extends B
{
    constructor(a, b, c)
    {
        super(a, b);
        this.c = c;
    }

    printC()
    {
        console.log(this.c);
    }
}

const c = new C(4, 5, 6);
C.sayHello();
c.printA();
c.printB();
c.printC();