# BecknOdrApiSpecification.Catalog

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**descriptor** | [**Descriptor**](Descriptor.md) |  | [optional] 
**fulfillments** | [**[Fulfillment]**](Fulfillment.md) | Fulfillment modes offered at the BPP level. This is used when a BPP itself offers fulfillments on behalf of the providers it has onboarded. | [optional] 
**payments** | [**[Payment]**](Payment.md) | Payment terms offered by the BPP for all transactions. This can be overriden at the provider level. | [optional] 
**offers** | [**[Offer]**](Offer.md) | Offers at the BPP-level. This is common across all providers onboarded by the BPP. | [optional] 
**providers** | [**[Provider]**](Provider.md) |  | [optional] 
**exp** | **Date** | Timestamp after which catalog will expire | [optional] 
**ttl** | **String** | Duration in seconds after which this catalog will expire | [optional] 


