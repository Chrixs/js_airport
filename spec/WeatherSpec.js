describe("Weather", function () {
  var weather;

  beforeEach(function() {
    weather = new Weather;
    });

  it("tests that isStormy returns true", function() {
    spyOn(weather, 'isStormy').and.returnValue(true);
    expect(weather.isStormy()).toEqual(true);
  });

  it("tests that isStormy returns false", function() {
    spyOn(weather, 'isStormy').and.returnValue(false);
    expect(weather.isStormy()).toEqual(false);
  });

});
