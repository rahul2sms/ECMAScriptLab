class MyGenerator
{
    * generator_func()
    {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
    }
}

let g = new MyGenerator().generator_func();

for(var i = 0; i< 5; i++)
{
    console.log(g.next());
}

g.next();

console.log("generator_func" in MyGenerator.prototype);