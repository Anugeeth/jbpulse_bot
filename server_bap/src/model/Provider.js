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
import Category from './Category';
import Descriptor from './Descriptor';
import Fulfillment from './Fulfillment';
import Item from './Item';
import Location from './Location';
import Offer from './Offer';
import Payment from './Payment';
import TagGroup from './TagGroup';
import Time from './Time';
import Value from './Value';

/**
 * The Provider model module.
 * @module model/Provider
 * @version 1.1.0
 */
class Provider {
    /**
     * Constructs a new <code>Provider</code>.
     * Describes the catalog of a business.
     * @alias module:model/Provider
     */
    constructor() { 
        
        Provider.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Provider</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Provider} obj Optional instance to populate.
     * @return {module:model/Provider} The populated <code>Provider</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Provider();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('descriptor')) {
                obj['descriptor'] = Descriptor.constructFromObject(data['descriptor']);
            }
            if (data.hasOwnProperty('category_id')) {
                obj['category_id'] = ApiClient.convertToType(data['category_id'], 'String');
            }
            if (data.hasOwnProperty('rating')) {
                obj['rating'] = Value.constructFromObject(data['rating']);
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = Time.constructFromObject(data['time']);
            }
            if (data.hasOwnProperty('categories')) {
                obj['categories'] = ApiClient.convertToType(data['categories'], [Category]);
            }
            if (data.hasOwnProperty('fulfillments')) {
                obj['fulfillments'] = ApiClient.convertToType(data['fulfillments'], [Fulfillment]);
            }
            if (data.hasOwnProperty('payments')) {
                obj['payments'] = ApiClient.convertToType(data['payments'], [Payment]);
            }
            if (data.hasOwnProperty('locations')) {
                obj['locations'] = ApiClient.convertToType(data['locations'], [Location]);
            }
            if (data.hasOwnProperty('offers')) {
                obj['offers'] = ApiClient.convertToType(data['offers'], [Offer]);
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [Item]);
            }
            if (data.hasOwnProperty('exp')) {
                obj['exp'] = ApiClient.convertToType(data['exp'], 'Date');
            }
            if (data.hasOwnProperty('rateable')) {
                obj['rateable'] = ApiClient.convertToType(data['rateable'], 'Boolean');
            }
            if (data.hasOwnProperty('ttl')) {
                obj['ttl'] = ApiClient.convertToType(data['ttl'], 'Number');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [TagGroup]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Provider</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Provider</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `descriptor`
        if (data['descriptor']) { // data not null
          Descriptor.validateJSON(data['descriptor']);
        }
        // ensure the json data is a string
        if (data['category_id'] && !(typeof data['category_id'] === 'string' || data['category_id'] instanceof String)) {
            throw new Error("Expected the field `category_id` to be a primitive type in the JSON string but got " + data['category_id']);
        }
        // validate the optional field `time`
        if (data['time']) { // data not null
          Time.validateJSON(data['time']);
        }
        if (data['categories']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['categories'])) {
                throw new Error("Expected the field `categories` to be an array in the JSON data but got " + data['categories']);
            }
            // validate the optional field `categories` (array)
            for (const item of data['categories']) {
                Category.validateJSON(item);
            };
        }
        if (data['fulfillments']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['fulfillments'])) {
                throw new Error("Expected the field `fulfillments` to be an array in the JSON data but got " + data['fulfillments']);
            }
            // validate the optional field `fulfillments` (array)
            for (const item of data['fulfillments']) {
                Fulfillment.validateJSON(item);
            };
        }
        if (data['payments']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['payments'])) {
                throw new Error("Expected the field `payments` to be an array in the JSON data but got " + data['payments']);
            }
            // validate the optional field `payments` (array)
            for (const item of data['payments']) {
                Payment.validateJSON(item);
            };
        }
        if (data['locations']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['locations'])) {
                throw new Error("Expected the field `locations` to be an array in the JSON data but got " + data['locations']);
            }
            // validate the optional field `locations` (array)
            for (const item of data['locations']) {
                Location.validateJSON(item);
            };
        }
        if (data['offers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['offers'])) {
                throw new Error("Expected the field `offers` to be an array in the JSON data but got " + data['offers']);
            }
            // validate the optional field `offers` (array)
            for (const item of data['offers']) {
                Offer.validateJSON(item);
            };
        }
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                Item.validateJSON(item);
            };
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
 * Id of the provider
 * @member {String} id
 */
Provider.prototype['id'] = undefined;

/**
 * @member {module:model/Descriptor} descriptor
 */
Provider.prototype['descriptor'] = undefined;

/**
 * Category Id of the provider at the BPP-level catalog
 * @member {String} category_id
 */
Provider.prototype['category_id'] = undefined;

/**
 * @member {module:model/Value} rating
 */
Provider.prototype['rating'] = undefined;

/**
 * @member {module:model/Time} time
 */
Provider.prototype['time'] = undefined;

/**
 * @member {Array.<module:model/Category>} categories
 */
Provider.prototype['categories'] = undefined;

/**
 * @member {Array.<module:model/Fulfillment>} fulfillments
 */
Provider.prototype['fulfillments'] = undefined;

/**
 * @member {Array.<module:model/Payment>} payments
 */
Provider.prototype['payments'] = undefined;

/**
 * @member {Array.<module:model/Location>} locations
 */
Provider.prototype['locations'] = undefined;

/**
 * @member {Array.<module:model/Offer>} offers
 */
Provider.prototype['offers'] = undefined;

/**
 * @member {Array.<module:model/Item>} items
 */
Provider.prototype['items'] = undefined;

/**
 * Time after which catalog has to be refreshed
 * @member {Date} exp
 */
Provider.prototype['exp'] = undefined;

/**
 * Whether this provider can be rated or not
 * @member {Boolean} rateable
 */
Provider.prototype['rateable'] = undefined;

/**
 * The time-to-live in seconds, for this object. This can be overriden at deeper levels. A value of -1 indicates that this object is not cacheable.
 * @member {Number} ttl
 */
Provider.prototype['ttl'] = undefined;

/**
 * @member {Array.<module:model/TagGroup>} tags
 */
Provider.prototype['tags'] = undefined;






export default Provider;

