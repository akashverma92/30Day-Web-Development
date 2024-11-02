let ages = [6,18, 21, 16, 30, 25];
let adults = ages.filter(function(age) {
    return age <= 18;
});
console.log(adults); 
let doubleAges = ages.map(function(age) {
    return age * 2;
});
console.log(doubleAges); 
