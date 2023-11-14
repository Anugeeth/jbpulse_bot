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
	"errors"
)



// ItemQuantityAllocated - This represents the exact quantity allocated for purchase of the item.
type ItemQuantityAllocated struct {

	Count int32 `json:"count,omitempty"`

	Measure Scalar `json:"measure,omitempty"`
}

// AssertItemQuantityAllocatedRequired checks if the required fields are not zero-ed
func AssertItemQuantityAllocatedRequired(obj ItemQuantityAllocated) error {
	if err := AssertScalarRequired(obj.Measure); err != nil {
		return err
	}
	return nil
}

// AssertItemQuantityAllocatedConstraints checks if the values respects the defined constraints
func AssertItemQuantityAllocatedConstraints(obj ItemQuantityAllocated) error {
	if obj.Count < 0 {
		return &ParsingError{Err: errors.New(errMsgMinValueConstraint)}
	}
	return nil
}
