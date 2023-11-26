# BecknOdrApiSpecification.Provider

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Id of the provider | [optional] 
**descriptor** | [**Descriptor**](Descriptor.md) |  | [optional] 
**categoryId** | **String** | Category Id of the provider at the BPP-level catalog | [optional] 
**rating** | [**Value**](Value.md) |  | [optional] 
**time** | [**Time**](Time.md) |  | [optional] 
**categories** | [**[Category]**](Category.md) |  | [optional] 
**fulfillments** | [**[Fulfillment]**](Fulfillment.md) |  | [optional] 
**payments** | [**[Payment]**](Payment.md) |  | [optional] 
**locations** | [**[Location]**](Location.md) |  | [optional] 
**offers** | [**[Offer]**](Offer.md) |  | [optional] 
**items** | [**[Item]**](Item.md) |  | [optional] 
**exp** | **Date** | Time after which catalog has to be refreshed | [optional] 
**rateable** | **Boolean** | Whether this provider can be rated or not | [optional] 
**ttl** | **Number** | The time-to-live in seconds, for this object. This can be overriden at deeper levels. A value of -1 indicates that this object is not cacheable. | [optional] 
**tags** | [**[TagGroup]**](TagGroup.md) |  | [optional] 


