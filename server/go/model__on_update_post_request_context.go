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



type OnUpdatePostRequestContext struct {

	Domain Code `json:"domain,omitempty"`

	Location Location `json:"location,omitempty"`

	Action string `json:"action"`

	// Version of transaction protocol being used by the sender.
	Version string `json:"version,omitempty"`

	// A globally unique identifier of the platform, Typically it is the fully qualified domain name (FQDN) of the platform.
	BapId string `json:"bap_id,omitempty"`

	// The callback URL of the Subscriber. This should necessarily contain the same domain name as set in `subscriber_id``.
	BapUri string `json:"bap_uri,omitempty"`

	BppId Model0 `json:"bpp_id,omitempty"`

	BppUri Model0 `json:"bpp_uri,omitempty"`

	// This is a unique value which persists across all API calls from `search` through `confirm`. This is done to indicate an active user session across multiple requests. The BPPs can use this value to push personalized recommendations, and dynamic offerings related to an ongoing transaction despite being unaware of the user active on the BAP.
	TransactionId string `json:"transaction_id,omitempty"`

	// This is a unique value which persists during a request / callback cycle. Since beckn protocol APIs are asynchronous, BAPs need a common value to match an incoming callback from a BPP to an earlier call. This value can also be used to ignore duplicate messages coming from the BPP. It is recommended to generate a fresh message_id for every new interaction. When sending unsolicited callbacks, BPPs must generate a new message_id.
	MessageId string `json:"message_id,omitempty"`

	// Time of request generation in RFC3339 format
	Timestamp time.Time `json:"timestamp,omitempty"`

	// The encryption public key of the sender
	Key string `json:"key,omitempty"`

	// The duration in ISO8601 format after timestamp for which this message holds valid
	Ttl string `json:"ttl,omitempty"`
}

// AssertOnUpdatePostRequestContextRequired checks if the required fields are not zero-ed
func AssertOnUpdatePostRequestContextRequired(obj OnUpdatePostRequestContext) error {
	elements := map[string]interface{}{
		"action": obj.Action,
	}
	for name, el := range elements {
		if isZero := IsZeroValue(el); isZero {
			return &RequiredError{Field: name}
		}
	}

	if err := AssertLocationRequired(obj.Location); err != nil {
		return err
	}
	return nil
}

// AssertOnUpdatePostRequestContextConstraints checks if the values respects the defined constraints
func AssertOnUpdatePostRequestContextConstraints(obj OnUpdatePostRequestContext) error {
	return nil
}
