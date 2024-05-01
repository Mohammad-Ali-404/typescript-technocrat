{   
    // spread oparator
    // rest oparator
    // destructuring





    // spread oparator
    const bros1: string [] =['Rajin', 'Dipu', 'Dandy']
    const bros2: string [] =['Anik', 'Nahid', 'Tonim']
    
    bros1.push(...bros2)

    const mentors1 = {
        webDevelopment : 'Jhankar Mahabub',
        Redux: 'Mir',
        NextJs: 'Tanmoy'
    }
    const mentors2 = {
        Prisma : 'Fahad',
        Cloud: 'Nahid',
        AWS: 'Anik'
    }
    
    const mentorList ={
        ...mentors1,
        ...mentors2
    }



    // learn rest operator

    const geetFriends = (...friends: string[]) =>{
        // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
        friends.forEach((friend: string) => {
            console.log(`Hi${friend}`);;
        });
    }
    geetFriends('abul', 'kabul', 'babul')
}
