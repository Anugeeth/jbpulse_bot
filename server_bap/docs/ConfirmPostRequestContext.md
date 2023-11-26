# BecknOdrApiSpecification.ConfirmPostRequestContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | [**Code**](Code.md) |  | [optional] 
**location** | [**Location**](Location.md) |  | [optional] 
**action** | **String** |  | 
**version** | **String** | Version of transaction protocol being used by the sender. | [optional] 
**bapId** | **String** | A globally unique identifier of the platform, Typically it is the fully qualified domain name (FQDN) of the platform. | [optional] 
**bapUri** | **String** | The callback URL of the Subscriber. This should necessarily contain the same domain name as set in &#x60;subscriber_id&#x60;&#x60;. | [optional] 
**bppId** | [**Model0**](Model0.md) |  | [optional] 
**bppUri** | [**Model0**](Model0.md) |  | [optional] 
**transactionId** | **String** | This is a unique value which persists across all API calls from &#x60;search&#x60; through &#x60;confirm&#x60;. This is done to indicate an active user session across multiple requests. The BPPs can use this value to push personalized recommendations, and dynamic offerings related to an ongoing transaction despite being unaware of the user active on the BAP. | [optional] 
**messageId** | **String** | This is a unique value which persists during a request / callback cycle. Since beckn protocol APIs are asynchronous, BAPs need a common value to match an incoming callback from a BPP to an earlier call. This value can also be used to ignore duplicate messages coming from the BPP. It is recommended to generate a fresh message_id for every new interaction. When sending unsolicited callbacks, BPPs must generate a new message_id. | [optional] 
**timestamp** | **Date** | Time of request generation in RFC3339 format | [optional] 
**key** | **String** | The encryption public key of the sender | [optional] 
**ttl** | **String** | The duration in ISO8601 format after timestamp for which this message holds valid | [optional] 



## Enum: ActionEnum


* `confirm` (value: `"confirm"`)




