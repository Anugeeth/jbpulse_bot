/**
 * Beckn ODR API Specification
 * Adaptation of Beckn protocol for the ODR sector.
 *
 * The version of the OpenAPI document: 1.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BecknOdrApiSpecification);
  }
}(this, function(expect, BecknOdrApiSpecification) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BecknOdrApiSpecification.ItemQuantity();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ItemQuantity', function() {
    it('should create an instance of ItemQuantity', function() {
      // uncomment below and update the code to test ItemQuantity
      //var instance = new BecknOdrApiSpecification.ItemQuantity();
      //expect(instance).to.be.a(BecknOdrApiSpecification.ItemQuantity);
    });

    it('should have the property allocated (base name: "allocated")', function() {
      // uncomment below and update the code to test the property allocated
      //var instance = new BecknOdrApiSpecification.ItemQuantity();
      //expect(instance).to.be();
    });

    it('should have the property available (base name: "available")', function() {
      // uncomment below and update the code to test the property available
      //var instance = new BecknOdrApiSpecification.ItemQuantity();
      //expect(instance).to.be();
    });

    it('should have the property maximum (base name: "maximum")', function() {
      // uncomment below and update the code to test the property maximum
      //var instance = new BecknOdrApiSpecification.ItemQuantity();
      //expect(instance).to.be();
    });

    it('should have the property minimum (base name: "minimum")', function() {
      // uncomment below and update the code to test the property minimum
      //var instance = new BecknOdrApiSpecification.ItemQuantity();
      //expect(instance).to.be();
    });

    it('should have the property selected (base name: "selected")', function() {
      // uncomment below and update the code to test the property selected
      //var instance = new BecknOdrApiSpecification.ItemQuantity();
      //expect(instance).to.be();
    });

    it('should have the property unitized (base name: "unitized")', function() {
      // uncomment below and update the code to test the property unitized
      //var instance = new BecknOdrApiSpecification.ItemQuantity();
      //expect(instance).to.be();
    });

  });

}));
