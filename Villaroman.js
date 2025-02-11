var a;
var b;

function plus(a, b) {
    a = parseFloat(document.getElementById('number1').value);
    b = parseFloat(document.getElementById('number2').value);
    var sum = add(a, b);

    document.getElementById("result").innerHTML="The sum of " + a + " and " + b +" is equal to "+ sum; 
}
function minus(a, b) {
    a = parseFloat(document.getElementById('number1').value);
    b = parseFloat(document.getElementById('number2').value);
    var difference = diff(a, b);

    document.getElementById("result").innerHTML="The difference of " + a + " and " + b +" is equal to "+ difference; 
}
function times(a, b) {
    a = parseFloat(document.getElementById('number1').value);
    b = parseFloat(document.getElementById('number2').value);
    var product = prod(a, b);

    document.getElementById("result").innerHTML="The product of " + a + " and " + b +" is equal to "+ product; 
}
function divide(a, b) {
    a = parseFloat(document.getElementById('number1').value);
    b = parseFloat(document.getElementById('number2').value);
    var quotient = quo(a, b);
    
    document.getElementById("result").innerHTML="The quotient of " + a + " and " + b +" is equal to "+ quotient; 
    
}
function modulus(a, b) {
    a = parseFloat(document.getElementById('number1').value);
    b = parseFloat(document.getElementById('number2').value);
    var remainder = rem(a, b);

    
    document.getElementById("result").innerHTML="The remainder of " + a + " and " + b +" is equal to "+remainder;
   
} 

function add(n1, n2) { 
    return n1 + n2; 
} 

function diff(n1, n2) { 
    return n1 - n2; 
} 

function prod(n1, n2) { 
    return n1 * n2; 
}

function quo(n1, n2) { 
    return n1 / n2; 
}

function rem(n1, n2) { 
    return n1 % n2; 
}