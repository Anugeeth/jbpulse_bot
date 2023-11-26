# BecknOdrApiSpecification.Item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ID of the item. | [optional] 
**parentItemId** | [**Id**](Id.md) |  | [optional] 
**parentItemQuantity** | [**ItemQuantity**](ItemQuantity.md) |  | [optional] 
**descriptor** | [**Descriptor**](Descriptor.md) |  | [optional] 
**creator** | [**Organization**](Organization.md) |  | [optional] 
**price** | [**Price**](Price.md) |  | [optional] 
**quantity** | [**ItemQuantity**](ItemQuantity.md) |  | [optional] 
**categoryIds** | [**[Id]**](Id.md) | Categories this item can be listed under | [optional] 
**fulfillmentIds** | [**[Id]**](Id.md) | Modes through which this item can be fulfilled | [optional] 
**locationIds** | [**[Id]**](Id.md) | Provider Locations this item is available in | [optional] 
**paymentIds** | [**[Id]**](Id.md) | Payment modalities through which this item can be ordered | [optional] 
**addOns** | [**[AddOn]**](AddOn.md) |  | [optional] 
**cancellationTerms** | [**[CancellationTerm]**](CancellationTerm.md) | Cancellation terms of this item | [optional] 
**refundTerms** | [**[ItemRefundTermsInner]**](ItemRefundTermsInner.md) | Refund terms of this item | [optional] 
**replacementTerms** | [**[ReplacementTerm]**](ReplacementTerm.md) | Terms that are applicable be met when this item is replaced | [optional] 
**returnTerms** | [**[ReturnTerm]**](ReturnTerm.md) | Terms that are applicable when this item is returned | [optional] 
**xinput** | [**XInput**](XInput.md) |  | [optional] 
**time** | [**Time**](Time.md) |  | [optional] 
**rateable** | **Boolean** | Whether this item can be rated | [optional] 
**rating** | [**Value**](Value.md) |  | [optional] 
**matched** | **Boolean** | Whether this item is an exact match of the request | [optional] 
**related** | **Boolean** | Whether this item is a related item to the exactly matched item | [optional] 
**recommended** | **Boolean** | Whether this item is a recommended item to a response | [optional] 
**ttl** | **String** | Time to live in seconds for an instance of this schema | [optional] 
**tags** | [**[TagGroup]**](TagGroup.md) |  | [optional] 


