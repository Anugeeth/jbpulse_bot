# BecknOdrApiSpecification.Authorization

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of authorization mechanism used. The allowed values for this field can be published as part of the network policy. | [optional] 
**token** | **String** | Token used for authorization. This is typically generated at the BPP. The BAP can send this value to the user via any channel that it uses to authenticate the user like SMS, Email, Push notification, or in-app rendering. | [optional] 
**validFrom** | **Date** | Timestamp in RFC3339 format from which token is valid | [optional] 
**validTo** | **Date** | Timestamp in RFC3339 format until which token is valid | [optional] 
**status** | **String** | Status of the token | [optional] 


