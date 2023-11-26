# BecknOdrApiSpecification.Location

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**descriptor** | [**Descriptor**](Descriptor.md) |  | [optional] 
**mapUrl** | **String** | The url to the map of the location. This can be a globally recognized map url or the one specified by the network policy. | [optional] 
**gps** | **String** | Describes a GPS coordinate | [optional] 
**address** | **String** | Describes a postal address. | [optional] 
**city** | [**City**](City.md) |  | [optional] 
**district** | **String** | The state this location is, or is located within | [optional] 
**state** | [**State**](State.md) |  | [optional] 
**country** | [**Country**](Country.md) |  | [optional] 
**areaCode** | **String** |  | [optional] 
**circle** | [**Circle**](Circle.md) |  | [optional] 
**polygon** | **String** | The boundary polygon of this location | [optional] 
**_3dspace** | **String** | The three dimensional region describing this location | [optional] 
**rating** | [**Value**](Value.md) |  | [optional] 


