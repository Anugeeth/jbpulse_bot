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

import ApiClient from '../ApiClient';

/**
 * The Vehicle model module.
 * @module model/Vehicle
 * @version 1.1.0
 */
class Vehicle {
    /**
     * Constructs a new <code>Vehicle</code>.
     * Describes a vehicle is a device that is designed or used to transport people or cargo over land, water, air, or through space.&lt;br&gt;This has properties like category, capacity, make, model, size,variant,color,energy_type,registration
     * @alias module:model/Vehicle
     */
    constructor() { 
        
        Vehicle.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Vehicle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Vehicle} obj Optional instance to populate.
     * @return {module:model/Vehicle} The populated <code>Vehicle</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Vehicle();

            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('capacity')) {
                obj['capacity'] = ApiClient.convertToType(data['capacity'], 'Number');
            }
            if (data.hasOwnProperty('make')) {
                obj['make'] = ApiClient.convertToType(data['make'], 'String');
            }
            if (data.hasOwnProperty('model')) {
                obj['model'] = ApiClient.convertToType(data['model'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'String');
            }
            if (data.hasOwnProperty('variant')) {
                obj['variant'] = ApiClient.convertToType(data['variant'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('energy_type')) {
                obj['energy_type'] = ApiClient.convertToType(data['energy_type'], 'String');
            }
            if (data.hasOwnProperty('registration')) {
                obj['registration'] = ApiClient.convertToType(data['registration'], 'String');
            }
            if (data.hasOwnProperty('wheels_count')) {
                obj['wheels_count'] = ApiClient.convertToType(data['wheels_count'], 'String');
            }
            if (data.hasOwnProperty('cargo_volumne')) {
                obj['cargo_volumne'] = ApiClient.convertToType(data['cargo_volumne'], 'String');
            }
            if (data.hasOwnProperty('wheelchair_access')) {
                obj['wheelchair_access'] = ApiClient.convertToType(data['wheelchair_access'], 'String');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('emission_standard')) {
                obj['emission_standard'] = ApiClient.convertToType(data['emission_standard'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Vehicle</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Vehicle</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['category'] && !(typeof data['category'] === 'string' || data['category'] instanceof String)) {
            throw new Error("Expected the field `category` to be a primitive type in the JSON string but got " + data['category']);
        }
        // ensure the json data is a string
        if (data['make'] && !(typeof data['make'] === 'string' || data['make'] instanceof String)) {
            throw new Error("Expected the field `make` to be a primitive type in the JSON string but got " + data['make']);
        }
        // ensure the json data is a string
        if (data['model'] && !(typeof data['model'] === 'string' || data['model'] instanceof String)) {
            throw new Error("Expected the field `model` to be a primitive type in the JSON string but got " + data['model']);
        }
        // ensure the json data is a string
        if (data['size'] && !(typeof data['size'] === 'string' || data['size'] instanceof String)) {
            throw new Error("Expected the field `size` to be a primitive type in the JSON string but got " + data['size']);
        }
        // ensure the json data is a string
        if (data['variant'] && !(typeof data['variant'] === 'string' || data['variant'] instanceof String)) {
            throw new Error("Expected the field `variant` to be a primitive type in the JSON string but got " + data['variant']);
        }
        // ensure the json data is a string
        if (data['color'] && !(typeof data['color'] === 'string' || data['color'] instanceof String)) {
            throw new Error("Expected the field `color` to be a primitive type in the JSON string but got " + data['color']);
        }
        // ensure the json data is a string
        if (data['energy_type'] && !(typeof data['energy_type'] === 'string' || data['energy_type'] instanceof String)) {
            throw new Error("Expected the field `energy_type` to be a primitive type in the JSON string but got " + data['energy_type']);
        }
        // ensure the json data is a string
        if (data['registration'] && !(typeof data['registration'] === 'string' || data['registration'] instanceof String)) {
            throw new Error("Expected the field `registration` to be a primitive type in the JSON string but got " + data['registration']);
        }
        // ensure the json data is a string
        if (data['wheels_count'] && !(typeof data['wheels_count'] === 'string' || data['wheels_count'] instanceof String)) {
            throw new Error("Expected the field `wheels_count` to be a primitive type in the JSON string but got " + data['wheels_count']);
        }
        // ensure the json data is a string
        if (data['cargo_volumne'] && !(typeof data['cargo_volumne'] === 'string' || data['cargo_volumne'] instanceof String)) {
            throw new Error("Expected the field `cargo_volumne` to be a primitive type in the JSON string but got " + data['cargo_volumne']);
        }
        // ensure the json data is a string
        if (data['wheelchair_access'] && !(typeof data['wheelchair_access'] === 'string' || data['wheelchair_access'] instanceof String)) {
            throw new Error("Expected the field `wheelchair_access` to be a primitive type in the JSON string but got " + data['wheelchair_access']);
        }
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['emission_standard'] && !(typeof data['emission_standard'] === 'string' || data['emission_standard'] instanceof String)) {
            throw new Error("Expected the field `emission_standard` to be a primitive type in the JSON string but got " + data['emission_standard']);
        }

        return true;
    }


}



/**
 * @member {String} category
 */
Vehicle.prototype['category'] = undefined;

/**
 * @member {Number} capacity
 */
Vehicle.prototype['capacity'] = undefined;

/**
 * @member {String} make
 */
Vehicle.prototype['make'] = undefined;

/**
 * @member {String} model
 */
Vehicle.prototype['model'] = undefined;

/**
 * @member {String} size
 */
Vehicle.prototype['size'] = undefined;

/**
 * @member {String} variant
 */
Vehicle.prototype['variant'] = undefined;

/**
 * @member {String} color
 */
Vehicle.prototype['color'] = undefined;

/**
 * @member {String} energy_type
 */
Vehicle.prototype['energy_type'] = undefined;

/**
 * @member {String} registration
 */
Vehicle.prototype['registration'] = undefined;

/**
 * @member {String} wheels_count
 */
Vehicle.prototype['wheels_count'] = undefined;

/**
 * @member {String} cargo_volumne
 */
Vehicle.prototype['cargo_volumne'] = undefined;

/**
 * @member {String} wheelchair_access
 */
Vehicle.prototype['wheelchair_access'] = undefined;

/**
 * @member {String} code
 */
Vehicle.prototype['code'] = undefined;

/**
 * @member {String} emission_standard
 */
Vehicle.prototype['emission_standard'] = undefined;






export default Vehicle;

