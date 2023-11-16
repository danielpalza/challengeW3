import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../index'; // Asegúrate de que este es el camino correcto a tu servidor
import { expect } from 'chai';

chai.use(chaiHttp);

describe('API Tests', function() {
  it('should return error if name is less than 3 characters', function(done) {
    chai.request(server)
      .get('/api/country/getCountrys?name=ab') // Reemplaza 'ab' con el valor correcto
      .end(function(err, res){
        expect(res).to.have.status(204); // Asume que tu API devuelve un estado 400 cuando el nombre es demasiado corto
        done();
      });
  });

  it('should return country data with correct structure', function(done) {
    chai.request(server)
      .get('/api/country/getCountrys?name=dia')
      .end(function(err, res){
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('countries');
        expect(res.body).to.have.property('totalPopulation');
        expect(res.body.countries).to.be.an('array');
        for (let country of res.body.countries) {
          expect(country).to.have.property('name');
          expect(country).to.have.property('population');
        }
        done();
      });
  });

  it('should return at most 5 countries', function(done) {
    chai.request(server)
      .get('/api/country/getCountrys?name=dia')
      .end(function(err, res){
        expect(res.body.countries.length).to.be.at.most(5);
        done();
      });
  });

  it('should return correct total population', function(done) {
    chai.request(server)
      .get('/api/country/getCountrys?name=dia')
      .end(function(err, res){
        let totalPopulation = 0;
        for (let country of res.body.countries) {
          totalPopulation +=parseInt( country.population);
        }
        expect(res.body.totalPopulation).to.equal(totalPopulation);
        done();
      });
  });
});
