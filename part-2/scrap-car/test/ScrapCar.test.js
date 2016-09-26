/**
 * Tests for the ScrapCar type.
 *
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

const expect = require('chai').expect;

describe('ScrapCar - Using public properties (file: ScrapCar.js)', function() {
  let ScrapCar;

  describe('Type', function() {
    it('ScrapCar should be defined', function() {
      ScrapCar = require('../src/ScrapCar');
    });

    it('should be instance of ScrapCar', function() {
      const car = new ScrapCar();
      expect(car).to.be.an.instanceOf(ScrapCar);
    });
  });

  describe('Constructor', function() {
    it('should have the default speed set to 0', function() {
      const car = new ScrapCar();
      expect(car).to.have.property('speed', 0);
    });

    it('should have a default pet name', function() {
      const car = new ScrapCar();
      expect(car).to.have.property('petName', 'Skrotbilen');
    });

    it('should set car\'s pet name if provided', function() {
      const car = new ScrapCar('Bettan');
      expect(car).to.have.property('petName', 'Bettan');
    });
  });

  describe('Prototype', function() {
    describe('accelerate method', function() {
      it('should have an accelerate method', function() {
        expect(ScrapCar.prototype).to.have.property('accelerate').that.is.a('Function');
      });

      it('should have increased the speed of the car to 30 km/h', function() {
        const car = new ScrapCar();
        car.accelerate(30);
        expect(car.speed).to.equal(30);
      });

      it('should have decreased the speed of the car to 20 km/h', function() {
        const car = new ScrapCar();
        car.accelerate(30);
        car.accelerate(-10);
        expect(car.speed).to.equal(20);
      });

      it('should have returned \'Lorems hastighet ökar från 0 km/h till 30 km/h.\'', function() {
        const car = new ScrapCar('Lorem');
        expect(car.accelerate(30)).to.equal('Lorems hastighet ökar från 0 km/h till 30 km/h.');
      });

      it('should have returned \'Lorems hastighet minskar från 30 km/h till 10 km/h.\'', function() {
        const car = new ScrapCar('Lorem');
        car.accelerate(30);
        expect(car.accelerate(-20)).to.equal('Lorems hastighet minskar från 30 km/h till 10 km/h.');
      });

      it('no argument should have returned \'Lorems hastighet är oförändrad!\'', function() {
        const car = new ScrapCar('Lorem');
        expect(car.accelerate()).to.equal('Lorems hastighet är oförändrad!');
      });

      it('not a number argument should have returned \'Lorems hastighet är oförändrad!\'', function() {
        const car = new ScrapCar('Lorem');
        expect(car.accelerate('not a number')).to.equal('Lorems hastighet är oförändrad!');
      });
    });

    describe('turnLeft method', function() {
      it('should have a turnLeft method', function() {
        expect(ScrapCar.prototype).to.have.property('turnLeft').that.is.a('Function');
      });

      it('should have returned \'Lorem svänger vänster.\'', function() {
        const car = new ScrapCar('Lorem');
        expect(car.turnLeft()).to.equal('Lorem svänger vänster.');
      });
    });

    describe('turnRight method', function() {
      it('should have a turnRight method', function() {
        expect(ScrapCar.prototype).to.have.property('turnRight').that.is.a('Function');
      });

      it('should have returned \'Lorem svänger höger.\'', function() {
        const car = new ScrapCar('Lorem');
        expect(car.turnRight()).to.equal('Lorem svänger höger.');
      });
    });

    describe('start method', function() {
      it('should have a start method', function() {
        expect(ScrapCar.prototype).to.have.property('start').that.is.a('Function');
      });

      it('should have returned \'Ipsum startar.\'', function() {
        const car = new ScrapCar('Ipsum');
        expect(car.start()).to.equal('Ipsum startar.');
      });
    });

    describe('stop method', function() {
      it('should have a stop method', function() {
        expect(ScrapCar.prototype).to.have.property('stop').that.is.a('Function');
      });

      it('should have returned \'Ipsum stannar.\'', function() {
        const car = new ScrapCar('Ipsum');
        expect(car.stop()).to.equal('Ipsum stannar.');
      });
    });
  });
});
