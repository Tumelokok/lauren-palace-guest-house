# Pricing Model

## Pricing architecture goals

The pricing model must support:
- direct business pricing
- website customer pricing
- platform/service fees
- maintenance or service allocation
- discounts and promo discounts
- final customer price calculation
- business revenue share
- historical pricing snapshot storage on bookings

## Recommended pricing fields

### Room type pricing configuration
- `basePrice`: direct business base price
- `websitePrice`: customer-facing price on the official website
- `platformFee`: fee for platform or maintenance compensation
- `maintenanceFee`: optional service allocation fee
- `discountAmount`: any discount applied before final pricing
- `finalCustomerPrice`: total amount charged to the customer
- `businessAmount`: amount attributable to the guest house business
- `platformAmount`: amount attributable to platform/service compensation
- `currency`: `ZAR`

## Business rule prototype

The model should allow the business to configure values independently and preserve them in the booking snapshot.
For example:
- direct base price = `R650`
- customer-facing website price = `R689`
- platform fee = `R19.50`
- business amount = `R669.50`

This exact split is a prototype and must remain configurable.

## Pricing snapshot

Booking records should store the full pricing snapshot as a JSON object to prevent later price changes from affecting historical bookings.

### Snapshot example structure
- `currency`
- `basePrice`
- `websitePrice`
- `platformFee`
- `maintenanceFee`
- `discountAmount`
- `finalCustomerPrice`
- `businessAmount`
- `platformAmount`

## Future considerations

- separate promo discounts from base pricing
- support seasonal rates
- support weekend rates
- support room-specific pricing adjustments
- support special offer pricing and booking-level overrides
- ensure any fee split is easy to audit and report
