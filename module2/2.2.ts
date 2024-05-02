{
    // 
    // interface

    type User1 ={
        name: string;
        age: number
    };
    type UserWithRole1 = User1 & {role : string}
    interface UserWithRole2 extends User2 {role : string};

    const user1 : UserWithRole1 ={
        name:"Mohammad",
        age:21,
        role: 'manager'
    }

    interface User2 {
        name: string;
        age: number
    };

    const user1 : User2 ={
        name:"Mohammad",
        age: 21
    }
    type roll1 = number[];
    interface roll2 {
        [index : number] : number
    }
    const rollNumber1 : roll1 = [1, 2, 3]

    type Add = (num1: number, num2: number) => number
    
    interface Add2 {
        (num1: number, num2: number) : number
    }
    const add : Add = (num1, num2) => num1 + num2;





    // 
}