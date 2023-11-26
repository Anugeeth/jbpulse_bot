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
import Item from './Item';
import Price from './Price';

/**
 * The QuotationBreakupInner model module.
 * @module model/QuotationBreakupInner
 * @version 1.1.0
 */
class QuotationBreakupInner {
    /**
     * Constructs a new <code>QuotationBreakupInner</code>.
     * @alias module:model/QuotationBreakupInner
     */
    constructor() { 
        
        QuotationBreakupInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>QuotationBreakupInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/QuotationBreakupInner} obj Optional instance to populate.
     * @return {module:model/QuotationBreakupInner} The populated <code>QuotationBreakupInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new QuotationBreakupInner();

            if (data.hasOwnProperty('item')) {
                obj['item'] = Item.constructFromObject(data['item']);
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = Price.constructFromObject(data['price']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>QuotationBreakupInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>QuotationBreakupInner</code>.
     */
    static validateJSON(data) {
        // validate the optional field `item`
        if (data['item']) { // data not null
          Item.validateJSON(data['item']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // validate the optional field `price`
        if (data['price']) { // data not null
          Price.validateJSON(data['price']);
        }

        return true;
    }


}



/**
 * @member {module:model/Item} item
 */
QuotationBreakupInner.prototype['item'] = undefined;

/**
 * @member {String} title
 */
QuotationBreakupInner.prototype['title'] = undefined;

/**
 * @member {module:model/Price} price
 */
QuotationBreakupInner.prototype['price'] = undefined;






export default QuotationBreakupInner;

