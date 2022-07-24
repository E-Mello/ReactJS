const name = 'Josh Perez';
const elemen = <h1>Hello, {name}</h1>;

const user = {
    firstName: 'Harper',
    laastName: 'Perez'
};

const element = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

function getGreeting(user) {
    if(user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

//Você deveria ou usar aspas (para valores em string) 
const urlAspas = <a href="http://www.google.com">Google</a>;

//chaves (para expressões), mas não ambos no mesmo atributo.
const expression = <img src={user.avatarUrl}></img>;

// os dois são iguais
const test = (
    <h1 className="greeting">
        Hello, world!
    </h1>
);

const test02 = (
    'h1',
    {className: 'greeting'},
    'Hello, world!'
);

// Nota: esta estrutura esta simplificada 
const ex = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world!'
    }
};


ReactDOM.render(
    element,
    document.getElementById('root')
);