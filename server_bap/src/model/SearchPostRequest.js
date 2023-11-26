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
import SearchPostRequestContext from './SearchPostRequestContext';
import SearchPostRequestMessage from './SearchPostRequestMessage';

/**
 * The SearchPostRequest model module.
 * @module model/SearchPostRequest
 * @version 1.1.0
 */
class SearchPostRequest {
    /**
     * Constructs a new <code>SearchPostRequest</code>.
     * @alias module:model/SearchPostRequest
     * @param context {module:model/SearchPostRequestContext} 
     * @param message {module:model/SearchPostRequestMessage} 
     */
    constructor(context, message) { 
        
        SearchPostRequest.initialize(this, context, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, context, message) { 
        obj['context'] = context;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>SearchPostRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchPostRequest} obj Optional instance to populate.
     * @return {module:model/SearchPostRequest} The populated <code>SearchPostRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchPostRequest();

            if (data.hasOwnProperty('context')) {
                obj['context'] = SearchPostRequestContext.constructFromObject(data['context']);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = SearchPostRequestMessage.constructFromObject(data['message']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SearchPostRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchPostRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SearchPostRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `context`
        if (data['context']) { // data not null
          SearchPostRequestContext.validateJSON(data['context']);
        }
        // validate the optional field `message`
        if (data['message']) { // data not null
          SearchPostRequestMessage.validateJSON(data['message']);
        }

        return true;
    }


}

SearchPostRequest.RequiredProperties = ["context", "message"];

/**
 * @member {module:model/SearchPostRequestContext} context
 */
SearchPostRequest.prototype['context'] = undefined;

/**
 * @member {module:model/SearchPostRequestMessage} message
 */
SearchPostRequest.prototype['message'] = undefined;






export default SearchPostRequest;

