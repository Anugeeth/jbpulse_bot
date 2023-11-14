/*
 * Beckn ODR API Specification
 *
 * Adaptation of Beckn protocol for the ODR sector.
 *
 * API version: 1.1.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi




type OnRatingPostRequestMessage struct {

	FeedbackForm XInput `json:"feedback_form,omitempty"`
}

// AssertOnRatingPostRequestMessageRequired checks if the required fields are not zero-ed
func AssertOnRatingPostRequestMessageRequired(obj OnRatingPostRequestMessage) error {
	if err := AssertXInputRequired(obj.FeedbackForm); err != nil {
		return err
	}
	return nil
}

// AssertOnRatingPostRequestMessageConstraints checks if the values respects the defined constraints
func AssertOnRatingPostRequestMessageConstraints(obj OnRatingPostRequestMessage) error {
	return nil
}
