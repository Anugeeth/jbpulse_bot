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
import Agent from './Agent';
import Contact from './Contact';
import Customer from './Customer';
import FulfillmentState from './FulfillmentState';
import Stop from './Stop';
import TagGroup from './TagGroup';
import Value from './Value';
import Vehicle from './Vehicle';

/**
 * The Fulfillment model module.
 * @module model/Fulfillment
 * @version 1.1.0
 */
class Fulfillment {
    /**
     * Constructs a new <code>Fulfillment</code>.
     * Describes how a an order will be rendered/fulfilled to the end-customer
     * @alias module:model/Fulfillment
     */
    constructor() { 
        
        Fulfillment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Fulfillment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Fulfillment} obj Optional instance to populate.
     * @return {module:model/Fulfillment} The populated <code>Fulfillment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Fulfillment();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('rateable')) {
                obj['rateable'] = ApiClient.convertToType(data['rateable'], 'Boolean');
            }
            if (data.hasOwnProperty('rating')) {
                obj['rating'] = ApiClient.convertToType(data['rating'], Value);
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], FulfillmentState);
            }
            if (data.hasOwnProperty('tracking')) {
                obj['tracking'] = ApiClient.convertToType(data['tracking'], 'Boolean');
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = ApiClient.convertToType(data['customer'], Customer);
            }
            if (data.hasOwnProperty('agent')) {
                obj['agent'] = ApiClient.convertToType(data['agent'], Agent);
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = Contact.constructFromObject(data['contact']);
            }
            if (data.hasOwnProperty('vehicle')) {
                obj['vehicle'] = Vehicle.constructFromObject(data['vehicle']);
            }
            if (data.hasOwnProperty('stops')) {
                obj['stops'] = ApiClient.convertToType(data['stops'], [Stop]);
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [TagGroup]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Fulfillment</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Fulfillment</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // validate the optional field `state`
        if (data['state']) { // data not null
          FulfillmentState.validateJSON(data['state']);
        }
        // validate the optional field `customer`
        if (data['customer']) { // data not null
          Customer.validateJSON(data['customer']);
        }
        // validate the optional field `agent`
        if (data['agent']) { // data not null
          Agent.validateJSON(data['agent']);
        }
        // validate the optional field `contact`
        if (data['contact']) { // data not null
          Contact.validateJSON(data['contact']);
        }
        // validate the optional field `vehicle`
        if (data['vehicle']) { // data not null
          Vehicle.validateJSON(data['vehicle']);
        }
        if (data['stops']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['stops'])) {
                throw new Error("Expected the field `stops` to be an array in the JSON data but got " + data['stops']);
            }
            // validate the optional field `stops` (array)
            for (const item of data['stops']) {
                Stop.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['path'] && !(typeof data['path'] === 'string' || data['path'] instanceof String)) {
            throw new Error("Expected the field `path` to be a primitive type in the JSON string but got " + data['path']);
        }
        if (data['tags']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tags'])) {
                throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
            }
            // validate the optional field `tags` (array)
            for (const item of data['tags']) {
                TagGroup.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Unique reference ID to the fulfillment of an order
 * @member {String} id
 */
Fulfillment.prototype['id'] = undefined;

/**
 * A code that describes the mode of fulfillment. This is typically set when there are multiple ways an order can be fulfilled. For example, a retail order can be fulfilled either via store pickup or a home delivery. Similarly, a medical consultation can be provided either in-person or via tele-consultation. The network policy must publish standard fulfillment type codes for the different modes of fulfillment.
 * @member {String} type
 */
Fulfillment.prototype['type'] = undefined;

/**
 * Whether the fulfillment can be rated or not
 * @member {Boolean} rateable
 */
Fulfillment.prototype['rateable'] = undefined;

/**
 * @member {module:model/Value} rating
 */
Fulfillment.prototype['rating'] = undefined;

/**
 * @member {module:model/FulfillmentState} state
 */
Fulfillment.prototype['state'] = undefined;

/**
 * Indicates whether the fulfillment allows tracking
 * @member {Boolean} tracking
 * @default false
 */
Fulfillment.prototype['tracking'] = false;

/**
 * @member {module:model/Customer} customer
 */
Fulfillment.prototype['customer'] = undefined;

/**
 * @member {module:model/Agent} agent
 */
Fulfillment.prototype['agent'] = undefined;

/**
 * @member {module:model/Contact} contact
 */
Fulfillment.prototype['contact'] = undefined;

/**
 * @member {module:model/Vehicle} vehicle
 */
Fulfillment.prototype['vehicle'] = undefined;

/**
 * The list of logical stops encountered during the fulfillment of an order.
 * @member {Array.<module:model/Stop>} stops
 */
Fulfillment.prototype['stops'] = undefined;

/**
 * The physical path taken by the agent that can be rendered on a map. The allowed format of this property can be set by the network.
 * @member {String} path
 */
Fulfillment.prototype['path'] = undefined;

/**
 * @member {Array.<module:model/TagGroup>} tags
 */
Fulfillment.prototype['tags'] = undefined;






export default Fulfillment;

