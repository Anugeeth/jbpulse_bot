/*
 * Beckn ODR API Specification
 *
 * Adaptation of Beckn protocol for the ODR sector.
 *
 * API version: 1.1.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi




// Location - The physical location of something
type Location struct {

	Id string `json:"id,omitempty"`

	Descriptor Descriptor `json:"descriptor,omitempty"`

	// The url to the map of the location. This can be a globally recognized map url or the one specified by the network policy.
	MapUrl string `json:"map_url,omitempty"`

	// Describes a GPS coordinate
	Gps string `json:"gps,omitempty"`

	// Describes a postal address.
	Address string `json:"address,omitempty"`

	City City `json:"city,omitempty"`

	// The state this location is, or is located within
	District string `json:"district,omitempty"`

	State State `json:"state,omitempty"`

	Country Country `json:"country,omitempty"`

	AreaCode string `json:"area_code,omitempty"`

	Circle Circle `json:"circle,omitempty"`

	// The boundary polygon of this location
	Polygon string `json:"polygon,omitempty"`

	// The three dimensional region describing this location
	Var3dspace string `json:"3dspace,omitempty"`

	Rating Value `json:"rating,omitempty"`
}

// AssertLocationRequired checks if the required fields are not zero-ed
func AssertLocationRequired(obj Location) error {
	if err := AssertDescriptorRequired(obj.Descriptor); err != nil {
		return err
	}
	if err := AssertCityRequired(obj.City); err != nil {
		return err
	}
	if err := AssertStateRequired(obj.State); err != nil {
		return err
	}
	if err := AssertCountryRequired(obj.Country); err != nil {
		return err
	}
	if err := AssertCircleRequired(obj.Circle); err != nil {
		return err
	}
	return nil
}

// AssertLocationConstraints checks if the values respects the defined constraints
func AssertLocationConstraints(obj Location) error {
	return nil
}
