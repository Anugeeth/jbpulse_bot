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


import ApiClient from './ApiClient';
import Ack from './model/Ack';
import AddOn from './model/AddOn';
import Agent from './model/Agent';
import Authorization from './model/Authorization';
import Billing from './model/Billing';
import CancelPostRequest from './model/CancelPostRequest';
import CancelPostRequestContext from './model/CancelPostRequestContext';
import CancelPostRequestMessage from './model/CancelPostRequestMessage';
import Cancellation from './model/Cancellation';
import CancellationTerm from './model/CancellationTerm';
import Catalog from './model/Catalog';
import Category from './model/Category';
import Circle from './model/Circle';
import City from './model/City';
import ConfirmPostRequest from './model/ConfirmPostRequest';
import ConfirmPostRequestContext from './model/ConfirmPostRequestContext';
import Contact from './model/Contact';
import Context from './model/Context';
import Country from './model/Country';
import Credential from './model/Credential';
import Customer from './model/Customer';
import Descriptor from './model/Descriptor';
import DescriptorAdditionalDesc from './model/DescriptorAdditionalDesc';
import Domain from './model/Domain';
import Error from './model/Error';
import Fee from './model/Fee';
import Form from './model/Form';
import Fulfillment from './model/Fulfillment';
import FulfillmentState from './model/FulfillmentState';
import Image from './model/Image';
import InitPostRequest from './model/InitPostRequest';
import InitPostRequestContext from './model/InitPostRequestContext';
import Intent from './model/Intent';
import Item from './model/Item';
import ItemQuantity from './model/ItemQuantity';
import ItemQuantityAllocated from './model/ItemQuantityAllocated';
import ItemQuantityAvailable from './model/ItemQuantityAvailable';
import ItemQuantityMaximum from './model/ItemQuantityMaximum';
import ItemQuantityMinimum from './model/ItemQuantityMinimum';
import ItemQuantitySelected from './model/ItemQuantitySelected';
import ItemQuantityUnitized from './model/ItemQuantityUnitized';
import ItemRefundTermsInner from './model/ItemRefundTermsInner';
import Location from './model/Location';
import MediaFile from './model/MediaFile';
import Offer from './model/Offer';
import Option from './model/Option';
import Order from './model/Order';
import Organization from './model/Organization';
import Payment from './model/Payment';
import PaymentParams from './model/PaymentParams';
import Person from './model/Person';
import PersonLanguagesInner from './model/PersonLanguagesInner';
import PersonSkillsInner from './model/PersonSkillsInner';
import Price from './model/Price';
import Provider from './model/Provider';
import Quotation from './model/Quotation';
import QuotationBreakupInner from './model/QuotationBreakupInner';
import Rating from './model/Rating';
import RatingPostRequest from './model/RatingPostRequest';
import RatingPostRequestContext from './model/RatingPostRequestContext';
import RatingPostRequestMessage from './model/RatingPostRequestMessage';
import Region from './model/Region';
import ReplacementTerm from './model/ReplacementTerm';
import ReturnTerm from './model/ReturnTerm';
import Scalar from './model/Scalar';
import ScalarRange from './model/ScalarRange';
import Schedule from './model/Schedule';
import SearchPost200Response from './model/SearchPost200Response';
import SearchPost200ResponseMessage from './model/SearchPost200ResponseMessage';
import SearchPost200ResponseMessageAck from './model/SearchPost200ResponseMessageAck';
import SearchPostRequest from './model/SearchPostRequest';
import SearchPostRequestContext from './model/SearchPostRequestContext';
import SearchPostRequestMessage from './model/SearchPostRequestMessage';
import SelectPostRequest from './model/SelectPostRequest';
import SelectPostRequestContext from './model/SelectPostRequestContext';
import SelectPostRequestMessage from './model/SelectPostRequestMessage';
import State from './model/State';
import StatusPostRequest from './model/StatusPostRequest';
import StatusPostRequestContext from './model/StatusPostRequestContext';
import StatusPostRequestMessage from './model/StatusPostRequestMessage';
import Stop from './model/Stop';
import Support from './model/Support';
import SupportPostRequest from './model/SupportPostRequest';
import SupportPostRequestContext from './model/SupportPostRequestContext';
import SupportPostRequestMessage from './model/SupportPostRequestMessage';
import Tag from './model/Tag';
import TagGroup from './model/TagGroup';
import Time from './model/Time';
import TimeRange from './model/TimeRange';
import Tracking from './model/Tracking';
import UpdatePostRequest from './model/UpdatePostRequest';
import UpdatePostRequestContext from './model/UpdatePostRequestContext';
import UpdatePostRequestMessage from './model/UpdatePostRequestMessage';
import Vehicle from './model/Vehicle';
import XInput from './model/XInput';
import BecknApplicationPlatformBAPApi from './api/BecknApplicationPlatformBAPApi';


/**
* Adaptation of Beckn protocol for the ODR sector..<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var BecknOdrApiSpecification = require('index'); // See note below*.
* var xxxSvc = new BecknOdrApiSpecification.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new BecknOdrApiSpecification.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new BecknOdrApiSpecification.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new BecknOdrApiSpecification.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Ack model constructor.
     * @property {module:model/Ack}
     */
    Ack,

    /**
     * The AddOn model constructor.
     * @property {module:model/AddOn}
     */
    AddOn,

    /**
     * The Agent model constructor.
     * @property {module:model/Agent}
     */
    Agent,

    /**
     * The Authorization model constructor.
     * @property {module:model/Authorization}
     */
    Authorization,

    /**
     * The Billing model constructor.
     * @property {module:model/Billing}
     */
    Billing,

    /**
     * The CancelPostRequest model constructor.
     * @property {module:model/CancelPostRequest}
     */
    CancelPostRequest,

    /**
     * The CancelPostRequestContext model constructor.
     * @property {module:model/CancelPostRequestContext}
     */
    CancelPostRequestContext,

    /**
     * The CancelPostRequestMessage model constructor.
     * @property {module:model/CancelPostRequestMessage}
     */
    CancelPostRequestMessage,

    /**
     * The Cancellation model constructor.
     * @property {module:model/Cancellation}
     */
    Cancellation,

    /**
     * The CancellationTerm model constructor.
     * @property {module:model/CancellationTerm}
     */
    CancellationTerm,

    /**
     * The Catalog model constructor.
     * @property {module:model/Catalog}
     */
    Catalog,

    /**
     * The Category model constructor.
     * @property {module:model/Category}
     */
    Category,

    /**
     * The Circle model constructor.
     * @property {module:model/Circle}
     */
    Circle,

    /**
     * The City model constructor.
     * @property {module:model/City}
     */
    City,

    /**
     * The ConfirmPostRequest model constructor.
     * @property {module:model/ConfirmPostRequest}
     */
    ConfirmPostRequest,

    /**
     * The ConfirmPostRequestContext model constructor.
     * @property {module:model/ConfirmPostRequestContext}
     */
    ConfirmPostRequestContext,

    /**
     * The Contact model constructor.
     * @property {module:model/Contact}
     */
    Contact,

    /**
     * The Context model constructor.
     * @property {module:model/Context}
     */
    Context,

    /**
     * The Country model constructor.
     * @property {module:model/Country}
     */
    Country,

    /**
     * The Credential model constructor.
     * @property {module:model/Credential}
     */
    Credential,

    /**
     * The Customer model constructor.
     * @property {module:model/Customer}
     */
    Customer,

    /**
     * The Descriptor model constructor.
     * @property {module:model/Descriptor}
     */
    Descriptor,

    /**
     * The DescriptorAdditionalDesc model constructor.
     * @property {module:model/DescriptorAdditionalDesc}
     */
    DescriptorAdditionalDesc,

    /**
     * The Domain model constructor.
     * @property {module:model/Domain}
     */
    Domain,

    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error,

    /**
     * The Fee model constructor.
     * @property {module:model/Fee}
     */
    Fee,

    /**
     * The Form model constructor.
     * @property {module:model/Form}
     */
    Form,

    /**
     * The Fulfillment model constructor.
     * @property {module:model/Fulfillment}
     */
    Fulfillment,

    /**
     * The FulfillmentState model constructor.
     * @property {module:model/FulfillmentState}
     */
    FulfillmentState,

    /**
     * The Image model constructor.
     * @property {module:model/Image}
     */
    Image,

    /**
     * The InitPostRequest model constructor.
     * @property {module:model/InitPostRequest}
     */
    InitPostRequest,

    /**
     * The InitPostRequestContext model constructor.
     * @property {module:model/InitPostRequestContext}
     */
    InitPostRequestContext,

    /**
     * The Intent model constructor.
     * @property {module:model/Intent}
     */
    Intent,

    /**
     * The Item model constructor.
     * @property {module:model/Item}
     */
    Item,

    /**
     * The ItemQuantity model constructor.
     * @property {module:model/ItemQuantity}
     */
    ItemQuantity,

    /**
     * The ItemQuantityAllocated model constructor.
     * @property {module:model/ItemQuantityAllocated}
     */
    ItemQuantityAllocated,

    /**
     * The ItemQuantityAvailable model constructor.
     * @property {module:model/ItemQuantityAvailable}
     */
    ItemQuantityAvailable,

    /**
     * The ItemQuantityMaximum model constructor.
     * @property {module:model/ItemQuantityMaximum}
     */
    ItemQuantityMaximum,

    /**
     * The ItemQuantityMinimum model constructor.
     * @property {module:model/ItemQuantityMinimum}
     */
    ItemQuantityMinimum,

    /**
     * The ItemQuantitySelected model constructor.
     * @property {module:model/ItemQuantitySelected}
     */
    ItemQuantitySelected,

    /**
     * The ItemQuantityUnitized model constructor.
     * @property {module:model/ItemQuantityUnitized}
     */
    ItemQuantityUnitized,

    /**
     * The ItemRefundTermsInner model constructor.
     * @property {module:model/ItemRefundTermsInner}
     */
    ItemRefundTermsInner,

    /**
     * The Location model constructor.
     * @property {module:model/Location}
     */
    Location,

    /**
     * The MediaFile model constructor.
     * @property {module:model/MediaFile}
     */
    MediaFile,

    /**
     * The Offer model constructor.
     * @property {module:model/Offer}
     */
    Offer,

    /**
     * The Option model constructor.
     * @property {module:model/Option}
     */
    Option,

    /**
     * The Order model constructor.
     * @property {module:model/Order}
     */
    Order,

    /**
     * The Organization model constructor.
     * @property {module:model/Organization}
     */
    Organization,

    /**
     * The Payment model constructor.
     * @property {module:model/Payment}
     */
    Payment,

    /**
     * The PaymentParams model constructor.
     * @property {module:model/PaymentParams}
     */
    PaymentParams,

    /**
     * The Person model constructor.
     * @property {module:model/Person}
     */
    Person,

    /**
     * The PersonLanguagesInner model constructor.
     * @property {module:model/PersonLanguagesInner}
     */
    PersonLanguagesInner,

    /**
     * The PersonSkillsInner model constructor.
     * @property {module:model/PersonSkillsInner}
     */
    PersonSkillsInner,

    /**
     * The Price model constructor.
     * @property {module:model/Price}
     */
    Price,

    /**
     * The Provider model constructor.
     * @property {module:model/Provider}
     */
    Provider,

    /**
     * The Quotation model constructor.
     * @property {module:model/Quotation}
     */
    Quotation,

    /**
     * The QuotationBreakupInner model constructor.
     * @property {module:model/QuotationBreakupInner}
     */
    QuotationBreakupInner,

    /**
     * The Rating model constructor.
     * @property {module:model/Rating}
     */
    Rating,

    /**
     * The RatingPostRequest model constructor.
     * @property {module:model/RatingPostRequest}
     */
    RatingPostRequest,

    /**
     * The RatingPostRequestContext model constructor.
     * @property {module:model/RatingPostRequestContext}
     */
    RatingPostRequestContext,

    /**
     * The RatingPostRequestMessage model constructor.
     * @property {module:model/RatingPostRequestMessage}
     */
    RatingPostRequestMessage,

    /**
     * The Region model constructor.
     * @property {module:model/Region}
     */
    Region,

    /**
     * The ReplacementTerm model constructor.
     * @property {module:model/ReplacementTerm}
     */
    ReplacementTerm,

    /**
     * The ReturnTerm model constructor.
     * @property {module:model/ReturnTerm}
     */
    ReturnTerm,

    /**
     * The Scalar model constructor.
     * @property {module:model/Scalar}
     */
    Scalar,

    /**
     * The ScalarRange model constructor.
     * @property {module:model/ScalarRange}
     */
    ScalarRange,

    /**
     * The Schedule model constructor.
     * @property {module:model/Schedule}
     */
    Schedule,

    /**
     * The SearchPost200Response model constructor.
     * @property {module:model/SearchPost200Response}
     */
    SearchPost200Response,

    /**
     * The SearchPost200ResponseMessage model constructor.
     * @property {module:model/SearchPost200ResponseMessage}
     */
    SearchPost200ResponseMessage,

    /**
     * The SearchPost200ResponseMessageAck model constructor.
     * @property {module:model/SearchPost200ResponseMessageAck}
     */
    SearchPost200ResponseMessageAck,

    /**
     * The SearchPostRequest model constructor.
     * @property {module:model/SearchPostRequest}
     */
    SearchPostRequest,

    /**
     * The SearchPostRequestContext model constructor.
     * @property {module:model/SearchPostRequestContext}
     */
    SearchPostRequestContext,

    /**
     * The SearchPostRequestMessage model constructor.
     * @property {module:model/SearchPostRequestMessage}
     */
    SearchPostRequestMessage,

    /**
     * The SelectPostRequest model constructor.
     * @property {module:model/SelectPostRequest}
     */
    SelectPostRequest,

    /**
     * The SelectPostRequestContext model constructor.
     * @property {module:model/SelectPostRequestContext}
     */
    SelectPostRequestContext,

    /**
     * The SelectPostRequestMessage model constructor.
     * @property {module:model/SelectPostRequestMessage}
     */
    SelectPostRequestMessage,

    /**
     * The State model constructor.
     * @property {module:model/State}
     */
    State,

    /**
     * The StatusPostRequest model constructor.
     * @property {module:model/StatusPostRequest}
     */
    StatusPostRequest,

    /**
     * The StatusPostRequestContext model constructor.
     * @property {module:model/StatusPostRequestContext}
     */
    StatusPostRequestContext,

    /**
     * The StatusPostRequestMessage model constructor.
     * @property {module:model/StatusPostRequestMessage}
     */
    StatusPostRequestMessage,

    /**
     * The Stop model constructor.
     * @property {module:model/Stop}
     */
    Stop,

    /**
     * The Support model constructor.
     * @property {module:model/Support}
     */
    Support,

    /**
     * The SupportPostRequest model constructor.
     * @property {module:model/SupportPostRequest}
     */
    SupportPostRequest,

    /**
     * The SupportPostRequestContext model constructor.
     * @property {module:model/SupportPostRequestContext}
     */
    SupportPostRequestContext,

    /**
     * The SupportPostRequestMessage model constructor.
     * @property {module:model/SupportPostRequestMessage}
     */
    SupportPostRequestMessage,

    /**
     * The Tag model constructor.
     * @property {module:model/Tag}
     */
    Tag,

    /**
     * The TagGroup model constructor.
     * @property {module:model/TagGroup}
     */
    TagGroup,

    /**
     * The Time model constructor.
     * @property {module:model/Time}
     */
    Time,

    /**
     * The TimeRange model constructor.
     * @property {module:model/TimeRange}
     */
    TimeRange,

    /**
     * The Tracking model constructor.
     * @property {module:model/Tracking}
     */
    Tracking,

    /**
     * The UpdatePostRequest model constructor.
     * @property {module:model/UpdatePostRequest}
     */
    UpdatePostRequest,

    /**
     * The UpdatePostRequestContext model constructor.
     * @property {module:model/UpdatePostRequestContext}
     */
    UpdatePostRequestContext,

    /**
     * The UpdatePostRequestMessage model constructor.
     * @property {module:model/UpdatePostRequestMessage}
     */
    UpdatePostRequestMessage,

    /**
     * The Vehicle model constructor.
     * @property {module:model/Vehicle}
     */
    Vehicle,

    /**
     * The XInput model constructor.
     * @property {module:model/XInput}
     */
    XInput,

    /**
    * The BecknApplicationPlatformBAPApi service constructor.
    * @property {module:api/BecknApplicationPlatformBAPApi}
    */
    BecknApplicationPlatformBAPApi
};
