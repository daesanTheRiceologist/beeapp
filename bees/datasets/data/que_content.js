export const header = "Answer these questions!";

export const qs = [
    {
        title:""
    },
    {
        title:"In a normal colony of bees, how many active honey bees do you think there are?",
        ops:["5,000","10,000","50,000","200,000"]
    },
    {
        title:"How many eyes do you think a bee has?",
        ops:["1","2","5","8"]
    },
    {
        title:"For many flowers do you think a bee has to visit to produce a pound of honey?",
        ops:["10,000","100,000","500,000","2,000,000"]
    },
    {
        title:"For many flowers do you think a bee has to visit to produce a pound of honey?",
        ops:["10,000","100,000","500,000","2,000,000"]
    },
    {
        title:"How fast do you think a bee can fly?",
        ops:["5mph","10mph","20mph","50mph"]
    }
]

var answers = [];

var name = "";

export function ChangeName(n){
    name = n;
    console.log(name);
}

export function GetName(){
    return name;
}