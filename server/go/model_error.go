/*
 * Beckn ODR API Specification
 *
 * Adaptation of Beckn protocol for the ODR sector.
 *
 * API version: 1.1.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi




// Error - Describes an error object that is returned by a BAP, BPP or BG as a response or callback to an action by another network participant. This object is sent when any request received by a network participant is unacceptable. This object can be sent either during Ack or with the callback.
type Error struct {

	// Standard error code. For full list of error codes, refer to docs/protocol-drafts/BECKN-005-ERROR-CODES-DRAFT-01.md of this repo\"
	Code string `json:"code,omitempty"`

	// Path to json schema generating the error. Used only during json schema validation errors
	Paths string `json:"paths,omitempty"`

	// Human readable message describing the error. Used mainly for logging. Not recommended to be shown to the user.
	Message string `json:"message,omitempty"`
}

// AssertErrorRequired checks if the required fields are not zero-ed
func AssertErrorRequired(obj Error) error {
	return nil
}

// AssertErrorConstraints checks if the values respects the defined constraints
func AssertErrorConstraints(obj Error) error {
	return nil
}
