{
    // ternary operator || optional chaining || nullish coalescing
    const age : number = 18;
    if (age >= 18) {
        console.log('adult');
    }else{
        console.log('child');
    }

    const isAdult = age >= 18? 'adult' : 'child'
    console.log({isAdult});
    // nullish coalescing operator ---> use for null & undefiend --> decision making
    const isAuthenticated = null;

    const result1 = isAuthenticated ?? 'guest'
    console.log({result1});
    // 
}