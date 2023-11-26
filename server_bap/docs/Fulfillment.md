# BecknOdrApiSpecification.Fulfillment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique reference ID to the fulfillment of an order | [optional] 
**type** | **String** | A code that describes the mode of fulfillment. This is typically set when there are multiple ways an order can be fulfilled. For example, a retail order can be fulfilled either via store pickup or a home delivery. Similarly, a medical consultation can be provided either in-person or via tele-consultation. The network policy must publish standard fulfillment type codes for the different modes of fulfillment. | [optional] 
**rateable** | **Boolean** | Whether the fulfillment can be rated or not | [optional] 
**rating** | [**Value**](Value.md) |  | [optional] 
**state** | [**FulfillmentState**](FulfillmentState.md) |  | [optional] 
**tracking** | **Boolean** | Indicates whether the fulfillment allows tracking | [optional] [default to false]
**customer** | [**Customer**](Customer.md) |  | [optional] 
**agent** | [**Agent**](Agent.md) |  | [optional] 
**contact** | [**Contact**](Contact.md) |  | [optional] 
**vehicle** | [**Vehicle**](Vehicle.md) |  | [optional] 
**stops** | [**[Stop]**](Stop.md) | The list of logical stops encountered during the fulfillment of an order. | [optional] 
**path** | **String** | The physical path taken by the agent that can be rendered on a map. The allowed format of this property can be set by the network. | [optional] 
**tags** | [**[TagGroup]**](TagGroup.md) |  | [optional] 


