# BecknOdrApiSpecification.Order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Human-readable ID of the order. This is generated at the BPP layer. The BPP can either generate order id within its system or forward the order ID created at the provider level. | [optional] 
**refOrderIds** | **[String]** | A list of order IDs to link this order to previous orders. | [optional] 
**status** | **String** | Status of the order. Allowed values can be defined by the network policy | [optional] 
**type** | **String** | This is used to indicate the type of order being created to BPPs. Sometimes orders can be linked to previous orders, like a replacement order in a retail domain. A follow-up consultation in healthcare domain. A single order part of a subscription order. The list of order types can be standardized at the network level. | [optional] [default to &#39;DEFAULT&#39;]
**provider** | [**Provider**](Provider.md) |  | [optional] 
**items** | [**[Item]**](Item.md) | The items purchased / availed in this order | [optional] 
**addOns** | [**[AddOn]**](AddOn.md) | The add-ons purchased / availed in this order | [optional] 
**offers** | [**[Offer]**](Offer.md) | The offers applied in this order | [optional] 
**billing** | [**Billing**](Billing.md) |  | [optional] 
**fulfillments** | [**[Fulfillment]**](Fulfillment.md) | The fulfillments involved in completing this order | [optional] 
**cancellation** | [**Cancellation**](Cancellation.md) |  | [optional] 
**cancellationTerms** | [**[CancellationTerm]**](CancellationTerm.md) | Cancellation terms of this item | [optional] 
**refundTerms** | [**[Items]**](Items.md) | Refund terms of this item | [optional] 
**replacementTerms** | [**[ReplacementTerm]**](ReplacementTerm.md) | Replacement terms of this item | [optional] 
**returnTerms** | [**[ReturnTerm]**](ReturnTerm.md) | Return terms of this item | [optional] 
**quote** | [**Quotation**](Quotation.md) |  | [optional] 
**payments** | [**[Payment]**](Payment.md) | The terms of settlement for this order | [optional] 
**createdAt** | **Date** | The date-time of creation of this order | [optional] 
**updatedAt** | **Date** | The date-time of updated of this order | [optional] 
**xinput** | [**XInput**](XInput.md) |  | [optional] 
**tags** | [**[TagGroup]**](TagGroup.md) |  | [optional] 



## Enum: StatusEnum


* `ACTIVE` (value: `"ACTIVE"`)

* `COMPLETE` (value: `"COMPLETE"`)

* `CANCELLED` (value: `"CANCELLED"`)





## Enum: TypeEnum


* `DRAFT` (value: `"DRAFT"`)

* `DEFAULT` (value: `"DEFAULT"`)




