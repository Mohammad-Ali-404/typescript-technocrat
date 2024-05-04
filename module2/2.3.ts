{
    // 
    // generic type
    type genericArray<T> = Array<T> 

    // const rollNumbers : number[] = [1, 2, 3]
    const rollNumbers : genericArray<number> = [1, 2, 3]

    // const rollNumbers : string[] = ['mr x', 'mr y', 'my z']
    const rollNumbers : genericArray<string> = ['mr x', 'mr y', 'my z']

    // const boolArray : boolean[] = [true, false, true]
    const boolArray : genericArray<boolean> = [true, false, true]

    const user : genericArray<object> =[
        {
            name: 'Mohammad',
            age: 21,
        },
        {
            name: 'Nasim',
            age: '24',
        },
        
    ]


    // 
}