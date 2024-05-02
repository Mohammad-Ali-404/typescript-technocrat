{
    // 

    // type assertion
    let anything : any;
    anything = 'Next Level Web Development';
    anything = 252;

    (anything as number)

    const kgToGram = (value: string | number) : string | number | undefined =>{
        if (typeof value === 'string') {
            const convertedValue =  parseFloat(value)*1000;
            return `Converted Value is ${convertedValue}`
        }
        if (typeof value === 'number') {
            return value * 1000;
        }
    } 

    const result1 = kgToGram(1000) as number
    const result2 = kgToGram('1000') as string






    // 
}