# BecknOdrApiSpecification.Form

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **String** | The URL from where the form can be fetched. The content fetched from the url must be processed as per the mime_type specified in this object. Once fetched, the rendering platform can choosed to render the form as-is as an embeddable element; or process it further to blend with the theme of the application. In case the interface is non-visual, the the render can process the form data and reproduce it as per the standard specified in the form. | [optional] 
**data** | **{String: String}** | The form submission data | [optional] 
**mimeType** | **String** | This field indicates the nature and format of the form received by querying the url. MIME types are defined and standardized in IETF&#39;s RFC 6838. | [optional] 
**submissionId** | **String** |  | [optional] 



## Enum: MimeTypeEnum


* `text/html` (value: `"text/html"`)

* `application/xml` (value: `"application/xml"`)




