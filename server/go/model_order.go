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



// Order - Describes a legal purchase order. It contains the complete details of the legal contract created between the buyer and the seller.
type Order struct {

	// Human-readable ID of the order. This is generated at the BPP layer. The BPP can either generate order id within its system or forward the order ID created at the provider level.
	Id string `json:"id,omitempty"`

	// A list of order IDs to link this order to previous orders.
	RefOrderIds []string `json:"ref_order_ids,omitempty"`

	// Status of the order. Allowed values can be defined by the network policy
	Status string `json:"status,omitempty"`

	// This is used to indicate the type of order being created to BPPs. Sometimes orders can be linked to previous orders, like a replacement order in a retail domain. A follow-up consultation in healthcare domain. A single order part of a subscription order. The list of order types can be standardized at the network level.
	Type string `json:"type,omitempty"`

	Provider Provider `json:"provider,omitempty"`

	// The items purchased / availed in this order
	Items []Item `json:"items,omitempty"`

	// The add-ons purchased / availed in this order
	AddOns []AddOn `json:"add_ons,omitempty"`

	// The offers applied in this order
	Offers []Offer `json:"offers,omitempty"`

	Billing Billing `json:"billing,omitempty"`

	// The fulfillments involved in completing this order
	Fulfillments []Fulfillment `json:"fulfillments,omitempty"`

	Cancellation Cancellation `json:"cancellation,omitempty"`

	// Cancellation terms of this item
	CancellationTerms []CancellationTerm `json:"cancellation_terms,omitempty"`

	// Refund terms of this item
	RefundTerms []Items `json:"refund_terms,omitempty"`

	// Replacement terms of this item
	ReplacementTerms []ReplacementTerm `json:"replacement_terms,omitempty"`

	// Return terms of this item
	ReturnTerms []ReturnTerm `json:"return_terms,omitempty"`

	Quote Quotation `json:"quote,omitempty"`

	// The terms of settlement for this order
	Payments []Payment `json:"payments,omitempty"`

	// The date-time of creation of this order
	CreatedAt time.Time `json:"created_at,omitempty"`

	// The date-time of updated of this order
	UpdatedAt time.Time `json:"updated_at,omitempty"`

	Xinput XInput `json:"xinput,omitempty"`

	Tags []TagGroup `json:"tags,omitempty"`
}

// AssertOrderRequired checks if the required fields are not zero-ed
func AssertOrderRequired(obj Order) error {
	if err := AssertProviderRequired(obj.Provider); err != nil {
		return err
	}
	for _, el := range obj.Items {
		if err := AssertItemRequired(el); err != nil {
			return err
		}
	}
	for _, el := range obj.AddOns {
		if err := AssertAddOnRequired(el); err != nil {
			return err
		}
	}
	for _, el := range obj.Offers {
		if err := AssertOfferRequired(el); err != nil {
			return err
		}
	}
	if err := AssertBillingRequired(obj.Billing); err != nil {
		return err
	}
	for _, el := range obj.Fulfillments {
		if err := AssertFulfillmentRequired(el); err != nil {
			return err
		}
	}
	if err := AssertCancellationRequired(obj.Cancellation); err != nil {
		return err
	}
	for _, el := range obj.CancellationTerms {
		if err := AssertCancellationTermRequired(el); err != nil {
			return err
		}
	}
	for _, el := range obj.ReplacementTerms {
		if err := AssertReplacementTermRequired(el); err != nil {
			return err
		}
	}
	for _, el := range obj.ReturnTerms {
		if err := AssertReturnTermRequired(el); err != nil {
			return err
		}
	}
	if err := AssertQuotationRequired(obj.Quote); err != nil {
		return err
	}
	for _, el := range obj.Payments {
		if err := AssertPaymentRequired(el); err != nil {
			return err
		}
	}
	if err := AssertXInputRequired(obj.Xinput); err != nil {
		return err
	}
	for _, el := range obj.Tags {
		if err := AssertTagGroupRequired(el); err != nil {
			return err
		}
	}
	return nil
}

// AssertOrderConstraints checks if the values respects the defined constraints
func AssertOrderConstraints(obj Order) error {
	return nil
}
