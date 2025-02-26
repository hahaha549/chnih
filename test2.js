let yourname="";
let yourlastname="";

let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("enter your first name:", str =>{
     yourname=str;
     

    readline.question("enter your last name:", last =>{
         yourlastname=last;
        readline.close();
        console.log("your full name is :" + " "+yourname+" "+yourlastname);
    });
});

