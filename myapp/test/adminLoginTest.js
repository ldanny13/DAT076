var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
var app = require('../app.js');
var booking = require('../models/bookings.js');
var db = require('../Database/createdb.js');
var logins = require('../models/logins.js');

chai.use(chaiHttp);

describe('Login entity', function () {
  it('Should be an empty login', function(done) {
    var login = logins.build({});
    expect(login.username).to.be.null;
    expect(login.password).to.be.undefined;
    expect(login.status).to.equal("employee");
    done();
  });
});

describe('POST /admin', () => {
  it('Should login an employee', (done) => {
    chai.request(app)
    .post('/admin')
    .send({ username:'test',  password:'test'})
    .end((err,res) => {
      expect(res.redirects[0]).to.contain('/admin-page');
      done();
  });
});
});

describe('POST /admin', () => {
  it('Should login an employee', (done) => {
    chai.request(app)
    .post('/admin')
    .send({ username:'da',  password:'da'})
    .end((err,res) => {
      expect(err).to.be.null;
      expect(res.redirects[0]).to.contain('/newsfeed');
      expect(res).to.have.status(200);
      done();
  });
});
});
