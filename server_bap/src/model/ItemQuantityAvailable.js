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
import Scalar from './Scalar';

/**
 * The ItemQuantityAvailable model module.
 * @module model/ItemQuantityAvailable
 * @version 1.1.0
 */
class ItemQuantityAvailable {
    /**
     * Constructs a new <code>ItemQuantityAvailable</code>.
     * This represents the exact quantity available for purchase of the item. The buyer can only purchase multiples of this
     * @alias module:model/ItemQuantityAvailable
     */
    constructor() { 
        
        ItemQuantityAvailable.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemQuantityAvailable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ItemQuantityAvailable} obj Optional instance to populate.
     * @return {module:model/ItemQuantityAvailable} The populated <code>ItemQuantityAvailable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemQuantityAvailable();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('measure')) {
                obj['measure'] = Scalar.constructFromObject(data['measure']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ItemQuantityAvailable</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ItemQuantityAvailable</code>.
     */
    static validateJSON(data) {
        // validate the optional field `measure`
        if (data['measure']) { // data not null
          Scalar.validateJSON(data['measure']);
        }

        return true;
    }


}



/**
 * @member {Number} count
 */
ItemQuantityAvailable.prototype['count'] = undefined;

/**
 * @member {module:model/Scalar} measure
 */
ItemQuantityAvailable.prototype['measure'] = undefined;






export default ItemQuantityAvailable;

