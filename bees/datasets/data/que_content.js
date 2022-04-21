export const header = "Answer these questions!";

export const qs = [
    "Did you know in a normal colony of bees there are about more than 50,000 active honey bees?",
    "How many eyes do you think a bee has?",
    "Are honey bees dying at a high rate?"


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