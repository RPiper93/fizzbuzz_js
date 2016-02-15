describe("fizzbuzz", function(){
  it ("returns 'fizz' when passed 3", function() {
    expect(fizzbuzz(3)).toEqual("fizz");
  });

  [6,12,48,72].forEach(function (number) {
    it ("returns 'fizz' when passed ".concat(number), function() {
      expect(fizzbuzz(number)).toEqual("fizz");
    });
  });

  it ("returns 'buzz' when passed 5", function() {
    expect(fizzbuzz(5)).toEqual("buzz");
  });

  [10,35,70,95].forEach(function (number) {
    it ("returns 'buzz' when passed ".concat(number), function() {
      expect(fizzbuzz(number)).toEqual("buzz");
    });
  });

  it ("returns 'fizzbuzz' when passed 15", function() {
    expect(fizzbuzz(15)).toEqual("fizzbuzz");
  });

  [30,45,60,75].forEach(function (number) {
    it ("returns 'fizzbuzz' when passed ".concat(number), function() {
      expect(fizzbuzz(number)).toEqual("fizzbuzz");
    });
  });

  [7,13,29,61].forEach(function (number) {
    it ("returns the same when passed ".concat(number), function() {
      expect(fizzbuzz(number)).toEqual(number);
    });
  });
});