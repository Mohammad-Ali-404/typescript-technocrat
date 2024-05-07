{
    // type guards 
    // typeOf -->  type guard
    type Alphanumeric =  string | number;
    const add = (param1 : Alphanumeric, param2 : Alphanumeric): Alphanumeric =>{
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2
        }else{
            return param1.toString() + param2.toString();
        }
        
    }
    const result1 = add(2, 3)
    console.log(result1);

    // in guard 
    type normaUser = {
        name: string;
    }
    type adminUser = {
        name: string;
        role: 'admin';
    }
    const getUser = (user: normaUser | adminUser) => {
        if ('role' in user) {
            console.log(`my name is ${user.name} & my role is ${user.role}`)
        } else {
            
        }
    }



    // 
}