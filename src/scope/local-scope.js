//Local Scope
const helloWorld = () => {
    const hello = 'hello World';
    console.log(hello);
}

helloWorld();

var scope = 'global';

const fuctionScope = () => {
    var scope = 'Ahora soy local';
    const func = () => {
        return scope
    }
    console.log(func());
}

fuctionScope();