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
    instance = new BecknOdrApiSpecification.TagGroup();
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

  describe('TagGroup', function() {
    it('should create an instance of TagGroup', function() {
      // uncomment below and update the code to test TagGroup
      //var instance = new BecknOdrApiSpecification.TagGroup();
      //expect(instance).to.be.a(BecknOdrApiSpecification.TagGroup);
    });

    it('should have the property display (base name: "display")', function() {
      // uncomment below and update the code to test the property display
      //var instance = new BecknOdrApiSpecification.TagGroup();
      //expect(instance).to.be();
    });

    it('should have the property descriptor (base name: "descriptor")', function() {
      // uncomment below and update the code to test the property descriptor
      //var instance = new BecknOdrApiSpecification.TagGroup();
      //expect(instance).to.be();
    });

    it('should have the property list (base name: "list")', function() {
      // uncomment below and update the code to test the property list
      //var instance = new BecknOdrApiSpecification.TagGroup();
      //expect(instance).to.be();
    });

  });

}));
