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
    instance = new BecknOdrApiSpecification.ReturnTerm();
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

  describe('ReturnTerm', function() {
    it('should create an instance of ReturnTerm', function() {
      // uncomment below and update the code to test ReturnTerm
      //var instance = new BecknOdrApiSpecification.ReturnTerm();
      //expect(instance).to.be.a(BecknOdrApiSpecification.ReturnTerm);
    });

    it('should have the property fulfillmentState (base name: "fulfillment_state")', function() {
      // uncomment below and update the code to test the property fulfillmentState
      //var instance = new BecknOdrApiSpecification.ReturnTerm();
      //expect(instance).to.be();
    });

    it('should have the property returnEligible (base name: "return_eligible")', function() {
      // uncomment below and update the code to test the property returnEligible
      //var instance = new BecknOdrApiSpecification.ReturnTerm();
      //expect(instance).to.be();
    });

    it('should have the property returnTime (base name: "return_time")', function() {
      // uncomment below and update the code to test the property returnTime
      //var instance = new BecknOdrApiSpecification.ReturnTerm();
      //expect(instance).to.be();
    });

    it('should have the property returnLocation (base name: "return_location")', function() {
      // uncomment below and update the code to test the property returnLocation
      //var instance = new BecknOdrApiSpecification.ReturnTerm();
      //expect(instance).to.be();
    });

    it('should have the property fulfillmentManagedBy (base name: "fulfillment_managed_by")', function() {
      // uncomment below and update the code to test the property fulfillmentManagedBy
      //var instance = new BecknOdrApiSpecification.ReturnTerm();
      //expect(instance).to.be();
    });

  });

}));
