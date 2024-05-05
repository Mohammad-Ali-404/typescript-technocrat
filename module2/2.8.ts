{
    // promise
    type Todo = {
        id:string;
        userId: string;
        title: string;
        completed : boolean;
    }
    const getTodo = async() : Promise<Todo> =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await res.json()
        return data;
        console.log(data);
    }
    getTodo()

    type Something = {something : string}
    // simulate
    const createPromise = () : Promise<Something> =>{
        return new Promise<Something>((resolved, reject) =>{
            const data : Something = {something : 'something'}
            if (data) {
                resolved(data)
            } else {
                reject('failed to load data')
            }
        })
    }

    // calling create promise function
    const showData = async() : Promise<Something> =>{
        const data : Something = await createPromise()
        return data;
        console.log(data);
    }

    showData()








    // 
}