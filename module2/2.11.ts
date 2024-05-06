{
    // 
    // utility types 
    // pick
    type person ={
        name: string;
        age: number;
        email?: string;
        contactNot : string;
    }
    type nameAge = Pick<person,'name' | 'age'>
    type contactInfo = Omit<person,'name' | 'age'>










    // 
}