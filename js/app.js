
// variable set as object holding arrays of tweets, which are key:value pairs
let birds= [
    {
        tweet: `What a wonderful day it is today!`,
        username: `BigBird`,
        createdAt: `01-02-2001`,
        age: 16,

    },

    {
        tweet: `What's everyone else doing this summer? Just set up my camping rig and will be offline for 6 weeks! See you all on the flipside!`,
        username: `Woody`,
        createdAt: `06-12-2019`,
        age: 17,

    },
    {
        tweet: `If we all ust stick together through this with uplifting positivity we will all make it through stronger!`,
        username: `BirdsofaFeather`,
        createdAt: `03-16-2021`,
        age: 46,

    },
    {
        tweet:`Who else is coming with me to the pond this weekend? Some major canon balls off the rocks!` ,
        username: `Bomb`,
        createdAt: `07-23-2022` ,
        age: 22 ,

    },
    {
        tweet:`I have to thank everyone for supporting me and my causes over the years and with my marathons. I am getting ready for my 6th year!` ,
        username: `Chuck`,
        createdAt: `05-14-2023`,
        age: 32,

    },
    {
        tweet: `Well everybody! I am off again. Another adventure to be had. One way flight booked to Japan and will see where I end up from there`,
        username: `ByeByeBirdie`,
        createdAt: `02-13-2017`,
        age: 42,

    },
    {
        tweet: `Beach hair, dont care!`,
        username: `ParadiseBird`,
        createdAt:`08-20-2022` ,
        age: 18,

    },
    {
        tweet:`I am honored to be nominated for the Birds Eye View awards! Thank you all for your support` ,
        username: `BirdieHawn`,
        createdAt:`04-01-2016` ,
        age: 56,

    },
    {
        tweet:`One last competition of the season!! I can't belive how fast this season as flown by!` ,
        username: `TailFeather`,
        createdAt:`09-28-2013` ,
        age: 17,

    },
    {
        tweet: `Well boys, lets make this last one count!`,
        username: `EagleEye`,
        createdAt:`09-09-2009` ,
        age: 30,

    },
];

// setting the variable as a counter to count allow counting each index of the object if/when called
let counter = 0;
// while loop set the counter to stop at the amount of indexs inside the birds variable.
while(counter < birds.length){
    // if statement sets the condition for the while loop to progress through as if age is 18+ to print the object info
    if(birds[counter][`age`]>=18){
        console.log(birds[counter][`tweet`],birds[counter][`username`],birds[counter][`createdAt`]);
    }
    // counter ++ makes the loop loop until counter has reached set limit
counter++;
}
// for loop will excecute just as while loop does only printing info when age is under18
for(counter=0; counter<birds.length; counter++){
    if(birds[counter][`age`]<18){
        console.log(birds[counter][`tweet`],birds[counter][`username`],birds[counter][`createdAt`]);
    }
}