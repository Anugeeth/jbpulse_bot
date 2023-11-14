/*
 * Beckn ODR API Specification
 *
 * Adaptation of Beckn protocol for the ODR sector.
 *
 * API version: 1.1.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi




// Agent - Describes the direct performer, driver or executor that fulfills an order. It is usually a person. But in some rare cases, it could be a non-living entity like a drone, or a bot. Some examples of agents are Doctor in the healthcare sector, a driver in the mobility sector, or a delivery person in the logistics sector. This object can be set at any stage of the order lifecycle. This can be set at the discovery stage when the BPP wants to provide details on the agent fulfilling the order, like in healthcare, where the doctor's name appears during search. This object can also used to search for a particular person that the customer wants fulfilling an order. Sometimes, this object gets instantiated after the order is confirmed, like in the case of on-demand taxis, where the driver is assigned after the user confirms the ride.
type Agent struct {

	Person Person `json:"person,omitempty"`

	Contact Contact `json:"contact,omitempty"`

	Organization Organization `json:"organization,omitempty"`

	Rating Value `json:"rating,omitempty"`
}

// AssertAgentRequired checks if the required fields are not zero-ed
func AssertAgentRequired(obj Agent) error {
	if err := AssertPersonRequired(obj.Person); err != nil {
		return err
	}
	if err := AssertContactRequired(obj.Contact); err != nil {
		return err
	}
	if err := AssertOrganizationRequired(obj.Organization); err != nil {
		return err
	}
	return nil
}

// AssertAgentConstraints checks if the values respects the defined constraints
func AssertAgentConstraints(obj Agent) error {
	return nil
}
