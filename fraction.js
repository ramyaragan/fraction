
const prompt = require('prompt-sync')();
class numbers{
  constructor(a,b)
  {
    this.a=a;
    this.b=b;
    this.product = a*b
   }
   get_product(){
    return this.product
    
 function display_product(p){
  console.log("The product of  %f,%f is %f", p.a,p.b,p.product);
  
 
function input_numbers()
{
  a = parseFloat(prompt("Enter a number:"));
  b = parseFloat(prompt("Enter a number:"));
  
  return new numbers(a,b);
}

function main(){
  n = input_numbers();
  display_product(n);
}

main();
