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
    instance = new BecknOdrApiSpecification.ConfirmPostRequest();
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

  describe('ConfirmPostRequest', function() {
    it('should create an instance of ConfirmPostRequest', function() {
      // uncomment below and update the code to test ConfirmPostRequest
      //var instance = new BecknOdrApiSpecification.ConfirmPostRequest();
      //expect(instance).to.be.a(BecknOdrApiSpecification.ConfirmPostRequest);
    });

    it('should have the property context (base name: "context")', function() {
      // uncomment below and update the code to test the property context
      //var instance = new BecknOdrApiSpecification.ConfirmPostRequest();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new BecknOdrApiSpecification.ConfirmPostRequest();
      //expect(instance).to.be();
    });

  });

}));
