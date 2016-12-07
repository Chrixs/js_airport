function Airport(weather) {
this._weather = typeof weather !== 'undefined' ? weather : new Weather();

this.planes = [];
}


Airport.prototype.landPlane = function(plane) {
  if (this._weather.isStormy())
    throw new Error("Cannot land plane in stormy weather");
  else
    this.planes.push(plane);
};

Airport.prototype.takeoffPlane = function(plane) {
  var index = this.planes.indexOf(plane);
  this.planes.splice(index, 1);
};
