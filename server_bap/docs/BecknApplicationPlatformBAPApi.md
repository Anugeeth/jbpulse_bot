# BecknOdrApiSpecification.BecknApplicationPlatformBAPApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelPost**](BecknApplicationPlatformBAPApi.md#cancelPost) | **POST** /cancel | 
[**confirmPost**](BecknApplicationPlatformBAPApi.md#confirmPost) | **POST** /confirm | 
[**initPost**](BecknApplicationPlatformBAPApi.md#initPost) | **POST** /init | 
[**ratingPost**](BecknApplicationPlatformBAPApi.md#ratingPost) | **POST** /rating | 
[**searchPost**](BecknApplicationPlatformBAPApi.md#searchPost) | **POST** /search | 
[**selectPost**](BecknApplicationPlatformBAPApi.md#selectPost) | **POST** /select | 
[**statusPost**](BecknApplicationPlatformBAPApi.md#statusPost) | **POST** /status | 
[**supportPost**](BecknApplicationPlatformBAPApi.md#supportPost) | **POST** /support | 
[**updatePost**](BecknApplicationPlatformBAPApi.md#updatePost) | **POST** /update | 



## cancelPost

> SearchPost200Response cancelPost(opts)



Cancel the dispute.

### Example

```javascript
import BecknOdrApiSpecification from 'beckn_odr_api_specification';
let defaultClient = BecknOdrApiSpecification.ApiClient.instance;
// Configure API key authorization: SubscriberAuth
let SubscriberAuth = defaultClient.authentications['SubscriberAuth'];
SubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SubscriberAuth.apiKeyPrefix = 'Token';

let apiInstance = new BecknOdrApiSpecification.BecknApplicationPlatformBAPApi();
let opts = {
  'cancelPostRequest': {"context":{"domain":"online-dispute-resolution:0.1.0","location":{"country":{"code":"IND"}},"transaction_id":"a9aaecca-10b7-4d19-b640-b047a7c62196","message_id":"$bb579fb8-cb82-4824-be12-fcbc405b6608","action":"cancel","timestamp":"2023-05-25T05:23:03.443Z","version":"1.1.0","bap_uri":"https://odr-network-bap.becknprotocol.io/","bap_id":"odr-bap.becknprotocol.io","bpp_id":"alpha-odr-bpp.becknprotocol.io","bpp_uri":"https://alpha-odr-network-bpp.becknprotocol.io","ttl":"PT10M"},"message":{"order_id":"572BHD23HD","cancellation_reason_id":"5","descriptor":{"short_desc":"Dispute dropped"}}} // CancelPostRequest | 
};
apiInstance.cancelPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cancelPostRequest** | [**CancelPostRequest**](CancelPostRequest.md)|  | [optional] 

### Return type

[**SearchPost200Response**](SearchPost200Response.md)

### Authorization

[SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## confirmPost

> SearchPost200Response confirmPost(opts)



Confirms filing of the dispute by agreeing to the terms and conditions.

### Example

```javascript
import BecknOdrApiSpecification from 'beckn_odr_api_specification';
let defaultClient = BecknOdrApiSpecification.ApiClient.instance;
// Configure API key authorization: SubscriberAuth
let SubscriberAuth = defaultClient.authentications['SubscriberAuth'];
SubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SubscriberAuth.apiKeyPrefix = 'Token';

let apiInstance = new BecknOdrApiSpecification.BecknApplicationPlatformBAPApi();
let opts = {
  'confirmPostRequest': {"context":{"domain":"online-dispute-resolution:0.1.0","location":{"country":{"code":"IND"}},"transaction_id":"a9aaecca-10b7-4d19-b640-b047a7c62196","message_id":"$bb579fb8-cb82-4824-be12-fcbc405b6608","action":"confirm","timestamp":"2023-05-25T05:23:03.443Z","version":"1.1.0","bap_uri":"https://odr-network-bap.becknprotocol.io/","bap_id":"odr-bap.becknprotocol.io","bpp_id":"alpha-odr-bpp.becknprotocol.io","bpp_uri":"https://alpha-odr-network-bpp.becknprotocol.io","ttl":"PT10M"},"message":{"order":{"provider":{"id":"ODR001"},"items":[{"id":"ALPHA-ARB-01","xinput":{"form_response":{"status":true,"submission_id":"c844d5f4-29c3-4398-b594-8b4716ef5dbf"}}}],"billing":{"name":"John Doe","email":"john.doe@example.com","address":"21A, ABC Appartments, HSR Layout, Bengaluru","city":"Bengaluru"},"fulfillments":[{"customer":{"person":{"name":"John Doe"},"contact":{"phone":"+91-9999999999","email":"john.doe@example.com"}}}],"payments":[{"params":{"amount":"12000","currency":"INR"},"status":"PAID"}]}}} // ConfirmPostRequest | 
};
apiInstance.confirmPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **confirmPostRequest** | [**ConfirmPostRequest**](ConfirmPostRequest.md)|  | [optional] 

### Return type

[**SearchPost200Response**](SearchPost200Response.md)

### Authorization

[SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## initPost

> SearchPost200Response initPost(opts)



Initialize the order for the dispute by providing essential details about the parties, documents and nature of the disagreement.

### Example

```javascript
import BecknOdrApiSpecification from 'beckn_odr_api_specification';
let defaultClient = BecknOdrApiSpecification.ApiClient.instance;
// Configure API key authorization: SubscriberAuth
let SubscriberAuth = defaultClient.authentications['SubscriberAuth'];
SubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SubscriberAuth.apiKeyPrefix = 'Token';

let apiInstance = new BecknOdrApiSpecification.BecknApplicationPlatformBAPApi();
let opts = {
  'initPostRequest': {"context":{"domain":"online-dispute-resolution:0.1.0","location":{"country":{"code":"IND"}},"transaction_id":"a9aaecca-10b7-4d19-b640-b047a7c62196","message_id":"$bb579fb8-cb82-4824-be12-fcbc405b6608","action":"init","timestamp":"2023-05-25T05:23:03.443Z","version":"1.1.0","bap_uri":"https://odr-network-bap.becknprotocol.io/","bap_id":"odr-bap.becknprotocol.io","bpp_id":"alpha-odr-bpp.becknprotocol.io","bpp_uri":"https://alpha-odr-network-bpp.becknprotocol.io","ttl":"PT10M"},"message":{"order":{"provider":{"id":"ODR001"},"items":[{"id":"ALPHA-ARB-01"}],"billing":{"name":"John Doe","email":"john.doe@example.com","address":"21A, ABC Appartments, HSR Layout, Bengaluru","city":"Bengaluru"},"fulfillments":[{"customer":{"person":{"name":"John Doe"},"contact":{"phone":"+91-9999999999","email":"john.doe@example.com"}}}]}}} // InitPostRequest | 
};
apiInstance.initPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **initPostRequest** | [**InitPostRequest**](InitPostRequest.md)|  | [optional] 

### Return type

[**SearchPost200Response**](SearchPost200Response.md)

### Authorization

[SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ratingPost

> SearchPost200Response ratingPost(opts)



Provide feedback on a service provided by the ODR.

### Example

```javascript
import BecknOdrApiSpecification from 'beckn_odr_api_specification';
let defaultClient = BecknOdrApiSpecification.ApiClient.instance;
// Configure API key authorization: SubscriberAuth
let SubscriberAuth = defaultClient.authentications['SubscriberAuth'];
SubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SubscriberAuth.apiKeyPrefix = 'Token';

let apiInstance = new BecknOdrApiSpecification.BecknApplicationPlatformBAPApi();
let opts = {
  'ratingPostRequest': {"context":{"domain":"online-dispute-resolution:0.1.0","location":{"country":{"code":"IND"}},"transaction_id":"a9aaecca-10b7-4d19-b640-b047a7c62196","message_id":"$bb579fb8-cb82-4824-be12-fcbc405b6608","action":"rating","timestamp":"2023-05-25T05:23:03.443Z","version":"1.1.0","bap_uri":"https://odr-network-bap.becknprotocol.io/","bap_id":"odr-bap.becknprotocol.io","bpp_id":"alpha-odr-bpp.becknprotocol.io","bpp_uri":"https://alpha-odr-network-bpp.becknprotocol.io","ttl":"PT10M"},"message":{"ratings":[{"id":"a9aaecca-10b7-4d19-b640-b047a7c621961676906777032","rating_category":"portal"}]}} // RatingPostRequest | 
};
apiInstance.ratingPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ratingPostRequest** | [**RatingPostRequest**](RatingPostRequest.md)|  | [optional] 

### Return type

[**SearchPost200Response**](SearchPost200Response.md)

### Authorization

[SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchPost

> SearchPost200Response searchPost(opts)



This allows the customer to search for Online Dispute Resolution Services.

### Example

```javascript
import BecknOdrApiSpecification from 'beckn_odr_api_specification';
let defaultClient = BecknOdrApiSpecification.ApiClient.instance;
// Configure API key authorization: SubscriberAuth
let SubscriberAuth = defaultClient.authentications['SubscriberAuth'];
SubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SubscriberAuth.apiKeyPrefix = 'Token';

let apiInstance = new BecknOdrApiSpecification.BecknApplicationPlatformBAPApi();
let opts = {
  'searchPostRequest': {"context":{"domain":"online-dispute-resolution:0.1.0","location":{"country":{"code":"IND"}},"transaction_id":"a9aaecca-10b7-4d19-b640-b047a7c62196","message_id":"$bb579fb8-cb82-4824-be12-fcbc405b6608","action":"search","timestamp":"2023-05-25T05:23:03.443Z","version":"1.1.0","bap_uri":"https://odr-network-bap.becknprotocol.io/","bap_id":"odr-bap.becknprotocol.io","ttl":"PT10M"},"message":{"intent":{"category":{"descriptor":{"code":"arbitration-service"}}}}} // SearchPostRequest | 
};
apiInstance.searchPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchPostRequest** | [**SearchPostRequest**](SearchPostRequest.md)|  | [optional] 

### Return type

[**SearchPost200Response**](SearchPost200Response.md)

### Authorization

[SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## selectPost

> SearchPost200Response selectPost(opts)



Customer chooses a provider and the dispute resolution service they require.

### Example

```javascript
import BecknOdrApiSpecification from 'beckn_odr_api_specification';
let defaultClient = BecknOdrApiSpecification.ApiClient.instance;
// Configure API key authorization: SubscriberAuth
let SubscriberAuth = defaultClient.authentications['SubscriberAuth'];
SubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SubscriberAuth.apiKeyPrefix = 'Token';

let apiInstance = new BecknOdrApiSpecification.BecknApplicationPlatformBAPApi();
let opts = {
  'selectPostRequest': {"context":{"domain":"online-dispute-resolution:0.1.0","location":{"country":{"code":"IND"}},"transaction_id":"a9aaecca-10b7-4d19-b640-b047a7c62196","message_id":"$bb579fb8-cb82-4824-be12-fcbc405b6608","action":"select","timestamp":"2023-05-25T05:23:03.443Z","version":"1.1.0","bap_uri":"https://odr-network-bap.becknprotocol.io/","bap_id":"odr-bap.becknprotocol.io","bpp_id":"alpha-odr-bpp.becknprotocol.io","bpp_uri":"https://alpha-odr-network-bpp.becknprotocol.io","ttl":"PT10M"},"message":{"order":{"provider":{"id":"ODR001"},"items":[{"id":"ALPHA-ARB-01"}]}}} // SelectPostRequest | 
};
apiInstance.selectPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **selectPostRequest** | [**SelectPostRequest**](SelectPostRequest.md)|  | [optional] 

### Return type

[**SearchPost200Response**](SearchPost200Response.md)

### Authorization

[SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## statusPost

> SearchPost200Response statusPost(opts)



Fetch the latest status of the dispute.

### Example

```javascript
import BecknOdrApiSpecification from 'beckn_odr_api_specification';
let defaultClient = BecknOdrApiSpecification.ApiClient.instance;
// Configure API key authorization: SubscriberAuth
let SubscriberAuth = defaultClient.authentications['SubscriberAuth'];
SubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SubscriberAuth.apiKeyPrefix = 'Token';

let apiInstance = new BecknOdrApiSpecification.BecknApplicationPlatformBAPApi();
let opts = {
  'statusPostRequest': {"context":{"domain":"online-dispute-resolution:0.1.0","location":{"country":{"code":"IND"}},"transaction_id":"a9aaecca-10b7-4d19-b640-b047a7c62196","message_id":"$bb579fb8-cb82-4824-be12-fcbc405b6608","action":"status","timestamp":"2023-05-25T05:23:03.443Z","version":"1.1.0","bap_uri":"https://odr-network-bap.becknprotocol.io/","bap_id":"odr-bap.becknprotocol.io","ttl":"PT10M","bpp_id":"odr-bpp.becknprotocol.io","bpp_uri":"https://odr-network-bpp.becknprotocol.io"},"message":{"order_id":"66b7b9bad166"}} // StatusPostRequest | 
};
apiInstance.statusPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **statusPostRequest** | [**StatusPostRequest**](StatusPostRequest.md)|  | [optional] 

### Return type

[**SearchPost200Response**](SearchPost200Response.md)

### Authorization

[SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## supportPost

> SearchPost200Response supportPost(opts)



Contact support for the dispute.

### Example

```javascript
import BecknOdrApiSpecification from 'beckn_odr_api_specification';
let defaultClient = BecknOdrApiSpecification.ApiClient.instance;
// Configure API key authorization: SubscriberAuth
let SubscriberAuth = defaultClient.authentications['SubscriberAuth'];
SubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SubscriberAuth.apiKeyPrefix = 'Token';

let apiInstance = new BecknOdrApiSpecification.BecknApplicationPlatformBAPApi();
let opts = {
  'supportPostRequest': {"context":{"domain":"online-dispute-resolution:0.1.0","location":{"country":{"code":"IND"}},"transaction_id":"a9aaecca-10b7-4d19-b640-b047a7c62196","message_id":"$bb579fb8-cb82-4824-be12-fcbc405b6608","action":"support","timestamp":"2023-05-25T05:23:03.443Z","version":"1.1.0","bap_uri":"https://odr-network-bap.becknprotocol.io/","bap_id":"odr-bap.becknprotocol.io","bpp_id":"alpha-odr-bpp.becknprotocol.io","bpp_uri":"https://alpha-odr-network-bpp.becknprotocol.io","ttl":"PT10M"},"message":{"support":{"order_id":"572BHD23HD","phone":"+919876543210","email":"john.doe@gmail.com"}}} // SupportPostRequest | 
};
apiInstance.supportPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supportPostRequest** | [**SupportPostRequest**](SupportPostRequest.md)|  | [optional] 

### Return type

[**SearchPost200Response**](SearchPost200Response.md)

### Authorization

[SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePost

> SearchPost200Response updatePost(opts)



Update the details of the dispute.

### Example

```javascript
import BecknOdrApiSpecification from 'beckn_odr_api_specification';
let defaultClient = BecknOdrApiSpecification.ApiClient.instance;
// Configure API key authorization: SubscriberAuth
let SubscriberAuth = defaultClient.authentications['SubscriberAuth'];
SubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SubscriberAuth.apiKeyPrefix = 'Token';

let apiInstance = new BecknOdrApiSpecification.BecknApplicationPlatformBAPApi();
let opts = {
  'updatePostRequest': {"context":{"domain":"online-dispute-resolution:0.1.0","location":{"country":{"code":"IND"}},"version":"1.1.0","action":"update","bap_uri":"https://odr-network-bap.becknprotocol.io/","bap_id":"odr-bap.becknprotocol.io","bpp_id":"odr-bpp.becknprotocol.io","bpp_uri":"https://odr-network-bpp.becknprotocol.io","transaction_id":"a9aaecca-10b7-4d19-b640-b047a7c62196","message_id":"166a5633-66d2-4ec8-bdcb-65cfeb1e4697","ttl":"PT10M","timestamp":"2023-05-25T05:23:03.443Z"},"message":{"update_target":"order.fulfillments[0].agent","order":{"id":"66b7b9bad166","fulfillments":[{"agent":{"person":{"id":"ca063dc9d321","name":"Mr Adam Smith"}}}]}}} // UpdatePostRequest | 
};
apiInstance.updatePost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updatePostRequest** | [**UpdatePostRequest**](UpdatePostRequest.md)|  | [optional] 

### Return type

[**SearchPost200Response**](SearchPost200Response.md)

### Authorization

[SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

