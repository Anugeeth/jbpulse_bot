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
import Descriptor from './Descriptor';
import Tag from './Tag';

/**
 * The TagGroup model module.
 * @module model/TagGroup
 * @version 1.1.0
 */
class TagGroup {
    /**
     * Constructs a new <code>TagGroup</code>.
     * A collection of tag objects with group level attributes. For detailed documentation on the Tags and Tag Groups schema go to https://github.com/beckn/protocol-specifications/discussions/316
     * @alias module:model/TagGroup
     */
    constructor() { 
        
        TagGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TagGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TagGroup} obj Optional instance to populate.
     * @return {module:model/TagGroup} The populated <code>TagGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TagGroup();

            if (data.hasOwnProperty('display')) {
                obj['display'] = ApiClient.convertToType(data['display'], 'Boolean');
            }
            if (data.hasOwnProperty('descriptor')) {
                obj['descriptor'] = ApiClient.convertToType(data['descriptor'], Descriptor);
            }
            if (data.hasOwnProperty('list')) {
                obj['list'] = ApiClient.convertToType(data['list'], [Tag]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TagGroup</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TagGroup</code>.
     */
    static validateJSON(data) {
        // validate the optional field `descriptor`
        if (data['descriptor']) { // data not null
          Descriptor.validateJSON(data['descriptor']);
        }
        if (data['list']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['list'])) {
                throw new Error("Expected the field `list` to be an array in the JSON data but got " + data['list']);
            }
            // validate the optional field `list` (array)
            for (const item of data['list']) {
                Tag.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * Indicates the display properties of the tag group. If display is set to false, then the group will not be displayed. If it is set to true, it should be displayed. However, group-level display properties can be overriden by individual tag-level display property. As this schema is purely for catalog display purposes, it is not recommended to send this value during search.
 * @member {Boolean} display
 * @default true
 */
TagGroup.prototype['display'] = true;

/**
 * @member {module:model/Descriptor} descriptor
 */
TagGroup.prototype['descriptor'] = undefined;

/**
 * An array of Tag objects listed under this group. This property can be set by BAPs during search to narrow the `search` and achieve more relevant results. When received during `on_search`, BAPs must render this list under the heading described by the `name` property of this schema.
 * @member {Array.<module:model/Tag>} list
 */
TagGroup.prototype['list'] = undefined;






export default TagGroup;

