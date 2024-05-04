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

    const createArrayWithTuple = <T, Q> (param1: T, param2:Q) :[T, Q] =>{
        return[param1, param2]
    }

    const res2 = createArrayWithTuple<string, number>("Bangladesh", 222)
    const resGeneric2 = createArrayWithTuple <string, {name: string}>('bangladesh', {
        name: 'Asia',
    })


    const addCourseToStuedent =<T>(student : T) =>{
        const course = 'Next level web development';
        return{
            ...student,
            course,
        };
    };
    const student1 = addCourseToStuedent({
        name: 'MR X',
        email:'x@gmail.com',
        devType: 'NLWD'
    })
    const student2 = addCourseToStuedent({
        name: 'MR Y',
        email:'y@gmail.com',
        handwatch: 'Apple watch'
    })


    // 
}