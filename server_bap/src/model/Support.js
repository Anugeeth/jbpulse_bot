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
 * The Support model module.
 * @module model/Support
 * @version 1.1.0
 */
class Support {
    /**
     * Constructs a new <code>Support</code>.
     * Details of customer support
     * @alias module:model/Support
     */
    constructor() { 
        
        Support.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Support</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Support} obj Optional instance to populate.
     * @return {module:model/Support} The populated <code>Support</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Support();

            if (data.hasOwnProperty('ref_id')) {
                obj['ref_id'] = ApiClient.convertToType(data['ref_id'], 'String');
            }
            if (data.hasOwnProperty('callback_phone')) {
                obj['callback_phone'] = ApiClient.convertToType(data['callback_phone'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Support</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Support</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['ref_id'] && !(typeof data['ref_id'] === 'string' || data['ref_id'] instanceof String)) {
            throw new Error("Expected the field `ref_id` to be a primitive type in the JSON string but got " + data['ref_id']);
        }
        // ensure the json data is a string
        if (data['callback_phone'] && !(typeof data['callback_phone'] === 'string' || data['callback_phone'] instanceof String)) {
            throw new Error("Expected the field `callback_phone` to be a primitive type in the JSON string but got " + data['callback_phone']);
        }
        // ensure the json data is a string
        if (data['phone'] && !(typeof data['phone'] === 'string' || data['phone'] instanceof String)) {
            throw new Error("Expected the field `phone` to be a primitive type in the JSON string but got " + data['phone']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}



/**
 * @member {String} ref_id
 */
Support.prototype['ref_id'] = undefined;

/**
 * @member {String} callback_phone
 */
Support.prototype['callback_phone'] = undefined;

/**
 * @member {String} phone
 */
Support.prototype['phone'] = undefined;

/**
 * @member {String} email
 */
Support.prototype['email'] = undefined;

/**
 * @member {String} url
 */
Support.prototype['url'] = undefined;






export default Support;

