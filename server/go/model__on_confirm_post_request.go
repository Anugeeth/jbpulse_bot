/*
 * Beckn ODR API Specification
 *
 * Adaptation of Beckn protocol for the ODR sector.
 *
 * API version: 1.1.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi




type OnConfirmPostRequest struct {

	Context OnConfirmPostRequestContext `json:"context"`

	Message OnInitPostRequestMessage `json:"message,omitempty"`

	Error Error `json:"error,omitempty"`
}

// AssertOnConfirmPostRequestRequired checks if the required fields are not zero-ed
func AssertOnConfirmPostRequestRequired(obj OnConfirmPostRequest) error {
	elements := map[string]interface{}{
		"context": obj.Context,
	}
	for name, el := range elements {
		if isZero := IsZeroValue(el); isZero {
			return &RequiredError{Field: name}
		}
	}

	if err := AssertOnConfirmPostRequestContextRequired(obj.Context); err != nil {
		return err
	}
	if err := AssertOnInitPostRequestMessageRequired(obj.Message); err != nil {
		return err
	}
	if err := AssertErrorRequired(obj.Error); err != nil {
		return err
	}
	return nil
}

// AssertOnConfirmPostRequestConstraints checks if the values respects the defined constraints
func AssertOnConfirmPostRequestConstraints(obj OnConfirmPostRequest) error {
	return nil
}
