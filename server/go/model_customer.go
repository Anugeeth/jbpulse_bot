/*
 * Beckn ODR API Specification
 *
 * Adaptation of Beckn protocol for the ODR sector.
 *
 * API version: 1.1.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi




// Customer - Describes a customer buying/availing a product or a service
type Customer struct {

	Person Person `json:"person,omitempty"`

	Contact Contact `json:"contact,omitempty"`
}

// AssertCustomerRequired checks if the required fields are not zero-ed
func AssertCustomerRequired(obj Customer) error {
	if err := AssertPersonRequired(obj.Person); err != nil {
		return err
	}
	if err := AssertContactRequired(obj.Contact); err != nil {
		return err
	}
	return nil
}

// AssertCustomerConstraints checks if the values respects the defined constraints
func AssertCustomerConstraints(obj Customer) error {
	return nil
}
