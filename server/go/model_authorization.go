/*
 * Beckn ODR API Specification
 *
 * Adaptation of Beckn protocol for the ODR sector.
 *
 * API version: 1.1.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi


import (
	"time"
)



// Authorization - Describes an authorization mechanism used to start or end the fulfillment of an order. For example, in the mobility sector, the driver may require a one-time password to initiate the ride. In the healthcare sector, a patient may need to provide a password to open a video conference link during a teleconsultation.
type Authorization struct {

	// Type of authorization mechanism used. The allowed values for this field can be published as part of the network policy.
	Type string `json:"type,omitempty"`

	// Token used for authorization. This is typically generated at the BPP. The BAP can send this value to the user via any channel that it uses to authenticate the user like SMS, Email, Push notification, or in-app rendering.
	Token string `json:"token,omitempty"`

	// Timestamp in RFC3339 format from which token is valid
	ValidFrom time.Time `json:"valid_from,omitempty"`

	// Timestamp in RFC3339 format until which token is valid
	ValidTo time.Time `json:"valid_to,omitempty"`

	// Status of the token
	Status string `json:"status,omitempty"`
}

// AssertAuthorizationRequired checks if the required fields are not zero-ed
func AssertAuthorizationRequired(obj Authorization) error {
	return nil
}

// AssertAuthorizationConstraints checks if the values respects the defined constraints
func AssertAuthorizationConstraints(obj Authorization) error {
	return nil
}
