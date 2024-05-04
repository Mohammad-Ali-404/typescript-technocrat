{
    // 
    // generic interface
    interface Developer<T> {
        name: string,
        computer:{
            brand: string, 
            model: string,
            releaseYear: number,
        },
        smartWatch : T
    }
    type AppleWatch ={
        brand: string;
        model:string;
        releaseYear:number;
        display:string
    }
    const poorDeveloper : Developer<AppleWatch> ={
        name:'Mohammad',
        computer:{
            brand:'Msi',
            model:'G27C4',
            releaseYear: 2020,
        },
        smartWatch: {
            brand:'Apple',
            model:'A244',
            releaseYear: 2024,
            display:'Apple'
        }
    }
    interface FestinaWatch {
        brand:string,
        model:string,
        pulse: boolean,
        sleepTrack: boolean,
    }
    const richDeveloper : Developer<FestinaWatch> ={
        name:'Mohammad',
        computer:{
            brand:'Apple',
            model:'A27C4',
            releaseYear: 2024,
        },
        smartWatch: {
            brand:'Festina',
            model:'F244',
            pulse: true,
            sleepTrack: false,
        }
    }





    // 
}