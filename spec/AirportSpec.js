describe("Airport", function () {
  var airport;
  var weather;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    // weather = jasmine.createSpyObj('weather', ['isStormy']);   THIS IS A DOUBLE
  });


  it("should land a plane", function() {
    spyOn(airport._weather, 'isStormy').and.returnValue(false);    // THIS IS A STUB
    airport.landPlane(plane);
    expect(airport.planes).toContain(plane)
  });

  it("should takeoff a plane", function() {
    spyOn(airport._weather, 'isStormy').and.returnValue(false);
    airport.landPlane(plane);
    airport.takeoffPlane(plane);
    expect(airport.planes).not.toContain(plane)
  });

  it("should prevent a plane from landing in stormy weather", function() {
    spyOn(airport._weather, 'isStormy').and.returnValue(true);
    expect( function() {airport.landPlane(plane);} ).toThrowError("Cannot land plane in stormy weather")
  });


});
