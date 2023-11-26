# BecknOdrApiSpecification.Tracking

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique tracking reference number | [optional] 
**url** | **String** | A URL to the tracking endpoint. This can be a link to a tracking webpage, a webhook URL created by the BAP where BPP can push the tracking data, or a GET url creaed by the BPP which the BAP can poll to get the tracking data. It can also be a websocket URL where the BPP can push real-time tracking data. | [optional] 
**location** | [**Location**](Location.md) |  | [optional] 
**status** | **String** | This value indicates if the tracking is currently active or not. If this value is &#x60;active&#x60;, then the BAP can begin tracking the order. If this value is &#x60;inactive&#x60;, the tracking URL is considered to be expired and the BAP should stop tracking the order. | [optional] 



## Enum: StatusEnum


* `active` (value: `"active"`)

* `inactive` (value: `"inactive"`)




