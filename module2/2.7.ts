{
    // 
    // generic constraint with keyof operator
    type vehicle ={
        bike: string;
        car: string;
        ship: string;
    }

    type Onwer = 'bike' | 'car' | 'ship';
    type Onwer2 = keyof vehicle;

    // const person1 : Onwer2 = ''
    
    const getPropertyValue = <X, Y extends keyof X> (obj: X, key: Y) => {
        return obj[key];
    }
    
    const user = {
        name:'Mohammad Ali',
        age:26,
        address: 'jhenaidah'
    }
    const result = getPropertyValue(user, 'address')

    // user['age'] 26


    // 
}