{
    // 
    // mapped types
    const arrayOfNumbers : number[] = [1, 2, 3, 4]

    // const arrayOfStrings : string[] = ['apple', 'mango', 'orange', 'lemon']

    const arrayOfStrings : string[] = arrayOfNumbers.map(number => number.toString())
    console.log(arrayOfStrings);


    type AreaNumber = {
        height : number;
        width: number
    }
    type height = AreaNumber['height']  // lookup type
    // type AreaString = {
    //     height : string;
    //     width: string
    // }
    type AreaString<T> = {
        [key in keyof T] : T[key]
    }

    const area1 : AreaString<{height:string, width: number}> ={
        height:"50",
        width:50
    } 






    // 
}