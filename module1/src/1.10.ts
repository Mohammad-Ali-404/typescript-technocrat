{
    // 
    // union types
    type FrontendDeveloper ='fakibazDeveloper' | 'junorDeveloper'
    const newDeveloper : FrontendDeveloper = 'junorDeveloper'

    type User = {
        name: string;
        email?: string;
        gender?: 'Male' | 'Female';
        bloodGroup? : 'A+' | 'B+' | 'O+'
    }

    const user : User ={
        name: 'Mohammad',
        email: 'ali@gmail.com',
        gender: 'Male' ,
        bloodGroup : 'A+',
    }

    // 
}