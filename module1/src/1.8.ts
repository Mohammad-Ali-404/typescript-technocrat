// destructuring
const user ={
    id:123,
    name:{
        firstName:'Mohammad',
        lastName:'Ali'
    },
    contactNo: '0179656465',
    address:'Jhenaidah',
}

const {contactNo, name:{lastName}} = user;

const myFriends =['Anik', 'Dipu', 'Sajib', 'Robin']

const [,, bestFriend, ...rest] = myFriends;