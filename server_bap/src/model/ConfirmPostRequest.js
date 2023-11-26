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
import ConfirmPostRequestContext from './ConfirmPostRequestContext';
import SelectPostRequestMessage from './SelectPostRequestMessage';

/**
 * The ConfirmPostRequest model module.
 * @module model/ConfirmPostRequest
 * @version 1.1.0
 */
class ConfirmPostRequest {
    /**
     * Constructs a new <code>ConfirmPostRequest</code>.
     * @alias module:model/ConfirmPostRequest
     * @param context {module:model/ConfirmPostRequestContext} 
     * @param message {module:model/SelectPostRequestMessage} 
     */
    constructor(context, message) { 
        
        ConfirmPostRequest.initialize(this, context, message);
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
     * Constructs a <code>ConfirmPostRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfirmPostRequest} obj Optional instance to populate.
     * @return {module:model/ConfirmPostRequest} The populated <code>ConfirmPostRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConfirmPostRequest();

            if (data.hasOwnProperty('context')) {
                obj['context'] = ConfirmPostRequestContext.constructFromObject(data['context']);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = SelectPostRequestMessage.constructFromObject(data['message']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ConfirmPostRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConfirmPostRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ConfirmPostRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `context`
        if (data['context']) { // data not null
          ConfirmPostRequestContext.validateJSON(data['context']);
        }
        // validate the optional field `message`
        if (data['message']) { // data not null
          SelectPostRequestMessage.validateJSON(data['message']);
        }

        return true;
    }


}

ConfirmPostRequest.RequiredProperties = ["context", "message"];

/**
 * @member {module:model/ConfirmPostRequestContext} context
 */
ConfirmPostRequest.prototype['context'] = undefined;

/**
 * @member {module:model/SelectPostRequestMessage} message
 */
ConfirmPostRequest.prototype['message'] = undefined;






export default ConfirmPostRequest;

