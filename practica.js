// const hello ="Hello world"
// console.log(hello)
// const sum = 5 + 2
// console.log(sum)

// const name = 'José Pérez';
// const element = <h1>Hello, {$name}</h1>

function formatName(user){
    return user.firstName + ' ' + user.lastName
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
}

const element = (
    <h1>
        Hello, {formatName(user)}
    </h1>
)

