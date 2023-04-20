const prompt = require('prompt-sync)();
class subract(){
  constructor(a,b){
    this.a = a;
    this.b = b;
    this.c = a-b;
  }
  get_c(){
    return(this.c);
  }
}

function input(){
  a = parseInt(prompt("Enter 1st number");
  b = parseInt(prompt("Enter 2nd number");
  return[a,b];
}

function output(s){
  console.log("The difference between %d and %d is %d",s.a,s.b,s.c);
}

function main(){
  let a = 0;
  let b = 0;
  [a,b] = input();
  let s = new subract(a,b);
  output(s);
}
