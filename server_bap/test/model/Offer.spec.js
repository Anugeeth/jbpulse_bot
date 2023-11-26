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
    instance = new BecknOdrApiSpecification.Offer();
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

  describe('Offer', function() {
    it('should create an instance of Offer', function() {
      // uncomment below and update the code to test Offer
      //var instance = new BecknOdrApiSpecification.Offer();
      //expect(instance).to.be.a(BecknOdrApiSpecification.Offer);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new BecknOdrApiSpecification.Offer();
      //expect(instance).to.be();
    });

    it('should have the property descriptor (base name: "descriptor")', function() {
      // uncomment below and update the code to test the property descriptor
      //var instance = new BecknOdrApiSpecification.Offer();
      //expect(instance).to.be();
    });

    it('should have the property locationIds (base name: "location_ids")', function() {
      // uncomment below and update the code to test the property locationIds
      //var instance = new BecknOdrApiSpecification.Offer();
      //expect(instance).to.be();
    });

    it('should have the property categoryIds (base name: "category_ids")', function() {
      // uncomment below and update the code to test the property categoryIds
      //var instance = new BecknOdrApiSpecification.Offer();
      //expect(instance).to.be();
    });

    it('should have the property itemIds (base name: "item_ids")', function() {
      // uncomment below and update the code to test the property itemIds
      //var instance = new BecknOdrApiSpecification.Offer();
      //expect(instance).to.be();
    });

    it('should have the property time (base name: "time")', function() {
      // uncomment below and update the code to test the property time
      //var instance = new BecknOdrApiSpecification.Offer();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new BecknOdrApiSpecification.Offer();
      //expect(instance).to.be();
    });

  });

}));
