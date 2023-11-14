/*
 * Beckn ODR API Specification
 *
 * Adaptation of Beckn protocol for the ODR sector.
 *
 * API version: 1.1.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi




// Scalar - Describes a scalar
type Scalar struct {

	Type string `json:"type,omitempty"`

	// Describes a numerical value in decimal form
	Value string `json:"value,omitempty"`

	// Describes a numerical value in decimal form
	EstimatedValue string `json:"estimated_value,omitempty"`

	// Describes a numerical value in decimal form
	ComputedValue string `json:"computed_value,omitempty"`

	Range ScalarRange `json:"range,omitempty"`

	Unit string `json:"unit,omitempty"`
}

// AssertScalarRequired checks if the required fields are not zero-ed
func AssertScalarRequired(obj Scalar) error {
	if err := AssertScalarRangeRequired(obj.Range); err != nil {
		return err
	}
	return nil
}

// AssertScalarConstraints checks if the values respects the defined constraints
func AssertScalarConstraints(obj Scalar) error {
	return nil
}
