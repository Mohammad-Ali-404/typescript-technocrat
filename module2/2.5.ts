{
    // 
    // function with generics
    
    const createArray = (param: string) : string[] =>{
        return[param]
    }
    const createArrayWithGeneric = <T> (param: T) : T[] =>{
        return[param]
    }

    const res1 = createArray("Bangladesh")
    const resGeneric = createArrayWithGeneric <string>('bangladesh')
    const resGenericObj = createArrayWithGeneric <{id: number, name: string}>({ id: 222, name: 'Mohamamd'})



    // 
}