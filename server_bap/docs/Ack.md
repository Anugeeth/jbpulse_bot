# BecknOdrApiSpecification.Ack

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | The status of the acknowledgement. If the request passes the validation criteria of the BPP, then this is set to ACK. If a BPP responds with status &#x3D; &#x60;ACK&#x60; to a request, it is required to respond with a callback. If the request fails the validation criteria, then this is set to NACK. Additionally, if a BPP does not intend to respond with a callback even after the request meets the validation criteria, it should set this value to &#x60;NACK&#x60;. | [optional] 
**tags** | [**[TagGroup]**](TagGroup.md) | A list of tags containing any additional information sent along with the Acknowledgement. | [optional] 



## Enum: StatusEnum


* `ACK` (value: `"ACK"`)

* `NACK` (value: `"NACK"`)




