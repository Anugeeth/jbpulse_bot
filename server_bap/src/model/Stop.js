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
import Authorization from './Authorization';
import Contact from './Contact';
import Descriptor from './Descriptor';
import Location from './Location';
import Person from './Person';
import Time from './Time';

/**
 * The Stop model module.
 * @module model/Stop
 * @version 1.1.0
 */
class Stop {
    /**
     * Constructs a new <code>Stop</code>.
     * A logical point in space and time during the fulfillment of an order.
     * @alias module:model/Stop
     */
    constructor() { 
        
        Stop.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Stop</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Stop} obj Optional instance to populate.
     * @return {module:model/Stop} The populated <code>Stop</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Stop();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('parent_stop_id')) {
                obj['parent_stop_id'] = ApiClient.convertToType(data['parent_stop_id'], 'String');
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], Location);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], Time);
            }
            if (data.hasOwnProperty('instructions')) {
                obj['instructions'] = ApiClient.convertToType(data['instructions'], Descriptor);
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = ApiClient.convertToType(data['contact'], Contact);
            }
            if (data.hasOwnProperty('person')) {
                obj['person'] = ApiClient.convertToType(data['person'], Person);
            }
            if (data.hasOwnProperty('authorization')) {
                obj['authorization'] = Authorization.constructFromObject(data['authorization']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Stop</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Stop</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['parent_stop_id'] && !(typeof data['parent_stop_id'] === 'string' || data['parent_stop_id'] instanceof String)) {
            throw new Error("Expected the field `parent_stop_id` to be a primitive type in the JSON string but got " + data['parent_stop_id']);
        }
        // validate the optional field `location`
        if (data['location']) { // data not null
          Location.validateJSON(data['location']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // validate the optional field `time`
        if (data['time']) { // data not null
          Time.validateJSON(data['time']);
        }
        // validate the optional field `instructions`
        if (data['instructions']) { // data not null
          Descriptor.validateJSON(data['instructions']);
        }
        // validate the optional field `contact`
        if (data['contact']) { // data not null
          Contact.validateJSON(data['contact']);
        }
        // validate the optional field `person`
        if (data['person']) { // data not null
          Person.validateJSON(data['person']);
        }
        // validate the optional field `authorization`
        if (data['authorization']) { // data not null
          Authorization.validateJSON(data['authorization']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
Stop.prototype['id'] = undefined;

/**
 * @member {String} parent_stop_id
 */
Stop.prototype['parent_stop_id'] = undefined;

/**
 * @member {module:model/Location} location
 */
Stop.prototype['location'] = undefined;

/**
 * The type of stop. Allowed values of this property can be defined by the network policy.
 * @member {String} type
 */
Stop.prototype['type'] = undefined;

/**
 * @member {module:model/Time} time
 */
Stop.prototype['time'] = undefined;

/**
 * @member {module:model/Descriptor} instructions
 */
Stop.prototype['instructions'] = undefined;

/**
 * @member {module:model/Contact} contact
 */
Stop.prototype['contact'] = undefined;

/**
 * @member {module:model/Person} person
 */
Stop.prototype['person'] = undefined;

/**
 * @member {module:model/Authorization} authorization
 */
Stop.prototype['authorization'] = undefined;






export default Stop;

