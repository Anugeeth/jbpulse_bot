# BecknOdrApiSpecification.Payment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ID of the payment term that can be referred at an item or an order level in a catalog | [optional] 
**collectedBy** | **Object** | This field indicates who is the collector of payment. The BAP can set this value to &#39;bap&#39; if it wants to collect the payment first and  settle it to the BPP. If the BPP agrees to those terms, the BPP should not send the payment url. Alternatively, the BPP can set this field with the value &#39;bpp&#39; if it wants the payment to be made directly. | [optional] 
**url** | **String** | A payment url to be called by the BAP. If empty, then the payment is to be done offline. The details of payment should be present in the params object. If tl_method &#x3D; http/get, then the payment details will be sent as url params. Two url param values, &#x60;&#x60;&#x60;$transaction_id&#x60;&#x60;&#x60; and &#x60;&#x60;&#x60;$amount&#x60;&#x60;&#x60; are mandatory. | [optional] 
**params** | [**PaymentParams**](PaymentParams.md) |  | [optional] 
**type** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**time** | [**Time**](Time.md) |  | [optional] 
**tags** | [**[TagGroup]**](TagGroup.md) |  | [optional] 



## Enum: TypeEnum


* `PRE-ORDER` (value: `"PRE-ORDER"`)

* `PRE-FULFILLMENT` (value: `"PRE-FULFILLMENT"`)

* `ON-FULFILLMENT` (value: `"ON-FULFILLMENT"`)

* `POST-FULFILLMENT` (value: `"POST-FULFILLMENT"`)





## Enum: StatusEnum


* `PAID` (value: `"PAID"`)

* `NOT-PAID` (value: `"NOT-PAID"`)




