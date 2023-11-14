/*
 * Beckn ODR API Specification
 *
 * Adaptation of Beckn protocol for the ODR sector.
 *
 * API version: 1.1.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi




type OnSelectPostRequest struct {

	Context OnSelectPostRequestContext `json:"context"`

	Message OnSelectPostRequestMessage `json:"message,omitempty"`

	Error Error `json:"error,omitempty"`
}

// AssertOnSelectPostRequestRequired checks if the required fields are not zero-ed
func AssertOnSelectPostRequestRequired(obj OnSelectPostRequest) error {
	elements := map[string]interface{}{
		"context": obj.Context,
	}
	for name, el := range elements {
		if isZero := IsZeroValue(el); isZero {
			return &RequiredError{Field: name}
		}
	}

	if err := AssertOnSelectPostRequestContextRequired(obj.Context); err != nil {
		return err
	}
	if err := AssertOnSelectPostRequestMessageRequired(obj.Message); err != nil {
		return err
	}
	if err := AssertErrorRequired(obj.Error); err != nil {
		return err
	}
	return nil
}

// AssertOnSelectPostRequestConstraints checks if the values respects the defined constraints
func AssertOnSelectPostRequestConstraints(obj OnSelectPostRequest) error {
	return nil
}
