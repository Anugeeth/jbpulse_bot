/*
 * Beckn ODR API Specification
 *
 * Adaptation of Beckn protocol for the ODR sector.
 *
 * API version: 1.1.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi




// ItemQuantity - Describes the count or amount of an item
type ItemQuantity struct {

	Allocated ItemQuantityAllocated `json:"allocated,omitempty"`

	Available ItemQuantityAvailable `json:"available,omitempty"`

	Maximum ItemQuantityMaximum `json:"maximum,omitempty"`

	Minimum ItemQuantityMinimum `json:"minimum,omitempty"`

	Selected ItemQuantitySelected `json:"selected,omitempty"`

	Unitized ItemQuantityUnitized `json:"unitized,omitempty"`
}

// AssertItemQuantityRequired checks if the required fields are not zero-ed
func AssertItemQuantityRequired(obj ItemQuantity) error {
	if err := AssertItemQuantityAllocatedRequired(obj.Allocated); err != nil {
		return err
	}
	if err := AssertItemQuantityAvailableRequired(obj.Available); err != nil {
		return err
	}
	if err := AssertItemQuantityMaximumRequired(obj.Maximum); err != nil {
		return err
	}
	if err := AssertItemQuantityMinimumRequired(obj.Minimum); err != nil {
		return err
	}
	if err := AssertItemQuantitySelectedRequired(obj.Selected); err != nil {
		return err
	}
	if err := AssertItemQuantityUnitizedRequired(obj.Unitized); err != nil {
		return err
	}
	return nil
}

// AssertItemQuantityConstraints checks if the values respects the defined constraints
func AssertItemQuantityConstraints(obj ItemQuantity) error {
	return nil
}
