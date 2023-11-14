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



// Catalog - Describes the products or services offered by a BPP. This is typically sent as the response to a search intent from a BAP. The payment terms, offers and terms of fulfillment supported by the BPP can also be included here. The BPP can show hierarchical nature of products/services in its catalog using the parent_category_id in categories. The BPP can also send a ttl (time to live) in the context which is the duration for which a BAP can cache the catalog and use the cached catalog.  <br>This has properties like bbp/descriptor,bbp/categories,bbp/fulfillments,bbp/payments,bbp/offers,bbp/providers and exp<br>This is used in the following situations.<br><ul><li>This is typically used in the discovery stage when the BPP sends the details of the products and services it offers as response to a search intent from the BAP. </li></ul>
type Catalog struct {

	Descriptor Descriptor `json:"descriptor,omitempty"`

	// Fulfillment modes offered at the BPP level. This is used when a BPP itself offers fulfillments on behalf of the providers it has onboarded.
	Fulfillments []Fulfillment `json:"fulfillments,omitempty"`

	// Payment terms offered by the BPP for all transactions. This can be overriden at the provider level.
	Payments []Payment `json:"payments,omitempty"`

	// Offers at the BPP-level. This is common across all providers onboarded by the BPP.
	Offers []Offer `json:"offers,omitempty"`

	Providers []Provider `json:"providers,omitempty"`

	// Timestamp after which catalog will expire
	Exp time.Time `json:"exp,omitempty"`

	// Duration in seconds after which this catalog will expire
	Ttl string `json:"ttl,omitempty"`
}

// AssertCatalogRequired checks if the required fields are not zero-ed
func AssertCatalogRequired(obj Catalog) error {
	if err := AssertDescriptorRequired(obj.Descriptor); err != nil {
		return err
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
	for _, el := range obj.Offers {
		if err := AssertOfferRequired(el); err != nil {
			return err
		}
	}
	for _, el := range obj.Providers {
		if err := AssertProviderRequired(el); err != nil {
			return err
		}
	}
	return nil
}

// AssertCatalogConstraints checks if the values respects the defined constraints
func AssertCatalogConstraints(obj Catalog) error {
	return nil
}
