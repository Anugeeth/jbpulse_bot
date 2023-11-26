# BecknOdrApiSpecification.Region

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | **String** | The number of dimensions that are used to describe any point inside that region. The most common dimensionality of a region is 2, that represents an area on a map. There are regions on the map that can be approximated to one-dimensional regions like roads, railway lines, or shipping lines. 3 dimensional regions are rarer, but are gaining popularity as flying drones are being adopted for various fulfillment services. | [optional] 
**type** | **String** | The type of region. This is used to specify the granularity of the region represented by this object. Various examples of two-dimensional region types are city, country, state, district, and so on. The network policy should contain a list of all possible region types supported by the network. | [optional] 
**name** | **String** | Name of the region as specified on the map where that region exists. | [optional] 
**code** | **String** | A standard code representing the region. This should be interpreted in the same way by all network participants. | [optional] 
**boundary** | **String** | A string representing the boundary of the region. One-dimensional regions are represented by polylines. Two-dimensional regions are represented by polygons, and three-dimensional regions can represented by polyhedra. | [optional] 
**mapUrl** | **String** | The url to the map of the region. This can be a globally recognized map or the one specified by the network policy. | [optional] 



## Enum: DimensionsEnum


* `1` (value: `"1"`)

* `2` (value: `"2"`)

* `3` (value: `"3"`)




