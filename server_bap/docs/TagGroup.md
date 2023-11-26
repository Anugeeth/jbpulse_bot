# BecknOdrApiSpecification.TagGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **Boolean** | Indicates the display properties of the tag group. If display is set to false, then the group will not be displayed. If it is set to true, it should be displayed. However, group-level display properties can be overriden by individual tag-level display property. As this schema is purely for catalog display purposes, it is not recommended to send this value during search. | [optional] [default to true]
**descriptor** | [**Descriptor**](Descriptor.md) |  | [optional] 
**list** | [**[Tag]**](Tag.md) | An array of Tag objects listed under this group. This property can be set by BAPs during search to narrow the &#x60;search&#x60; and achieve more relevant results. When received during &#x60;on_search&#x60;, BAPs must render this list under the heading described by the &#x60;name&#x60; property of this schema. | [optional] 


