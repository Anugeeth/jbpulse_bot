# BecknOdrApiSpecification.Rating

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ratingCategory** | **String** | Category of the entity being rated | [optional] 
**id** | **String** | Id of the object being rated | [optional] 
**value** | **String** | Rating value given to the object. This can be a single value or can also contain an inequality operator like gt, gte, lt, lte. This can also contain an inequality expression containing logical operators like &amp;&amp; and ||. | [optional] 



## Enum: RatingCategoryEnum


* `Item` (value: `"Item"`)

* `Order` (value: `"Order"`)

* `Fulfillment` (value: `"Fulfillment"`)

* `Provider` (value: `"Provider"`)

* `Agent` (value: `"Agent"`)

* `Support` (value: `"Support"`)




