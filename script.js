let input = "1.2.3.4";
let output = input.split('.');
output = output.shift() + '.' + output.join('');
console.log(">>"+output);


let str = "1.2.3.4";
str = str.replace(/\./,"#").replace(/\./g,"").replace(/#/,".");
console.log(">>"+str);



