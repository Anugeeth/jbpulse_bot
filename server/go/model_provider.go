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
	"errors"
)



// Provider - Describes the catalog of a business.
type Provider struct {

	// Id of the provider
	Id string `json:"id,omitempty"`

	Descriptor Descriptor `json:"descriptor,omitempty"`

	// Category Id of the provider at the BPP-level catalog
	CategoryId string `json:"category_id,omitempty"`

	Rating Value `json:"rating,omitempty"`

	Time Time `json:"time,omitempty"`

	Categories []Category `json:"categories,omitempty"`

	Fulfillments []Fulfillment `json:"fulfillments,omitempty"`

	Payments []Payment `json:"payments,omitempty"`

	Locations []Location `json:"locations,omitempty"`

	Offers []Offer `json:"offers,omitempty"`

	Items []Item `json:"items,omitempty"`

	// Time after which catalog has to be refreshed
	Exp time.Time `json:"exp,omitempty"`

	// Whether this provider can be rated or not
	Rateable bool `json:"rateable,omitempty"`

	// The time-to-live in seconds, for this object. This can be overriden at deeper levels. A value of -1 indicates that this object is not cacheable.
	Ttl int32 `json:"ttl,omitempty"`

	Tags []TagGroup `json:"tags,omitempty"`
}

// AssertProviderRequired checks if the required fields are not zero-ed
func AssertProviderRequired(obj Provider) error {
	if err := AssertDescriptorRequired(obj.Descriptor); err != nil {
		return err
	}
	if err := AssertTimeRequired(obj.Time); err != nil {
		return err
	}
	for _, el := range obj.Categories {
		if err := AssertCategoryRequired(el); err != nil {
			return err
		}
	}
	for _, el := range obj.Fulfillments {
		if err := AssertFulfillmentRequired(el); err != nil {
			return err
		}
	}
	for _, el := range obj.Payments {
		if err := AssertPaymentRequired(el); err != nil {
			return err
		}
	}
	for _, el := range obj.Locations {
		if err := AssertLocationRequired(el); err != nil {
			return err
		}
	}
	for _, el := range obj.Offers {
		if err := AssertOfferRequired(el); err != nil {
			return err
		}
	}
	for _, el := range obj.Items {
		if err := AssertItemRequired(el); err != nil {
			return err
		}
	}
	for _, el := range obj.Tags {
		if err := AssertTagGroupRequired(el); err != nil {
			return err
		}
	}
	return nil
}

// AssertProviderConstraints checks if the values respects the defined constraints
func AssertProviderConstraints(obj Provider) error {
	if obj.Ttl < -1 {
		return &ParsingError{Err: errors.New(errMsgMinValueConstraint)}
	}
	return nil
}
