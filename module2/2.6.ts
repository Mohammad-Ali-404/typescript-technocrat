{
    // 
    // constraints
    const addCourseToStuedent =<T>(student : T) =>{
        const course = 'Next level web development';
        return{
            ...student,
            course,
        };
    };
    const student1 = addCourseToStuedent({
        id: 222,
        name: 'MR X',
        email:'x@gmail.com',
        devType: 'NLWD'
    })
    const student2 = addCourseToStuedent({
        id: 224,
        name: 'MR Y',
        email:'y@gmail.com',
        handwatch: 'Apple watch'
    })

















    // 
}