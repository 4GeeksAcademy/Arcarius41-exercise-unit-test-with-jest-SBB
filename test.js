test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const {fromEuroToDollar} = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
test ("One dollar should be 146.26 yen", function() {
    const {fromDollarToYen} = require('./app.js');
    const yen = fromDollarToYen(3);
    const expected = (3 / 1.07) * 156.5;
    expect(fromDollarToYen(3)).toBe(438.78504672897196);
})
test("One yen should be 0.005559 pound", function() {
    const {fromYenToPound} = require('./app.js');
    const pound = fromYenToPound(300);
    const expected = (300 / 156.5) * .87;
    expect(fromYenToPound(300)).toBe(1.6677316293929714);
}) 