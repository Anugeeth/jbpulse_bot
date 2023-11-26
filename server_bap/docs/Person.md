# BecknOdrApiSpecification.Person

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Describes the identity of the person | [optional] 
**url** | **String** | Profile url of the person | [optional] 
**name** | **String** | the name of the person | [optional] 
**image** | [**Image**](Image.md) |  | [optional] 
**age** | **String** | Describes duration as per ISO8601 format | [optional] 
**dob** | **Date** | Date of birth of the person | [optional] 
**gender** | **String** | Gender of something, typically a Person, but possibly also fictional characters, animals, etc. While Male and Female may be used, text strings are also acceptable for people who do not identify as a binary gender.Allowed values for this field can be published in the network policy | [optional] 
**creds** | [**[Credential]**](Credential.md) |  | [optional] 
**languages** | [**[PersonLanguagesInner]**](PersonLanguagesInner.md) |  | [optional] 
**skills** | [**[PersonSkillsInner]**](PersonSkillsInner.md) |  | [optional] 
**tags** | [**[TagGroup]**](TagGroup.md) |  | [optional] 


