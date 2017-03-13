var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var app = require('../app.js');
var booking = require('../models/bookings.js');
var db = require('../Database/createdb.js');
var logins = require('../models/logins.js');

chai.use(chaiHttp);

beforeEach(function() {

})

describe('Booking entity', function () {
  it('Should be an empty booking', function(done) {
        var booked = booking.build({});
        expect(booked.phone).to.be.null;
        expect(booked.seats).to.be.undefined;
        expect(booked.bookingdate).to.be.undefined;
        expect(booked.bookingtime).to.be.undefined;
        expect(booked.name).to.be.undefined;
        done();
    });
});

describe('Book', function () {
  it('Should create a booking and store it in the database', function(done) {
    booking.sync({force:true}).then(() => {
        booking.create({phone:"03142345678", seats:3, bookingdate:"2017-03-13",bookingtime:"13:00",name:"johan aronsson"}).then(function()  {
          booking.findOne({where:{phone:"03142345678"}}).then(function(book) {
            expect(book.phone).to.eql("03142345678");
            expect(book.seats).to.eql(3);
            expect(book.seats).to.eql(3);
            done();
          });
        });
      });
    });
});

describe('GET /admin', () => {
  it('Should open the login page', (done) => {
    chai.request(app)
    .get('/admin')
    .end((err,res) => {
      expect(err).to.be.null;
      expect(res).to.exist;
      expect(res).to.have.status(200);

      done();
  });
});
});

describe ('Find user', () => {
  it('Should get the admin account', (done) => {
    logins.findOne({where:{ username : 'test'}}).then(function(user) {
      expect(user.username).to.eql('test');
      console.log("username: ", user.username);
      done();
    });
  });
});

describe('GET /admin-page', () => {
  it('Should reject us since we are not logged in', (done) => {
    chai.request(app)
    .get('/admin-page')
    .end((err,res) => {
      expect(err)
      expect(res).to.have.status(404);

      done();
  });
});
});

describe('GET /booking', () => {
  it('Should get the bookings page', (done) => {
    chai.request(app)
    .get('/booking')
    .end((err,res) => {
      expect(err).to.be.null;
      expect(res).to.exist;
      expect(res).to.have.status(200);

      done();
  });
});
});
