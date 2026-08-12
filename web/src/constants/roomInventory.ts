export type RoomTypeId = "STANDARD" | "THREE_SLEEPER" | "COTTAGE"

export type RoomStatus =
  | "AVAILABLE"
  | "RESERVED"
  | "OCCUPIED"
  | "CLEANING"
  | "MAINTENANCE"
  | "OUT_OF_SERVICE"

export type BookingStatus =
  | "PENDING"
  | "CONFIRMED"
  | "CHECKED_IN"
  | "CHECKED_OUT"
  | "CANCELLED"
  | "NO_SHOW"

export type Currency = "ZAR"

export interface PricingConfig {
  currency: Currency
  basePrice: number
  websitePrice: number
  platformFee?: number
  maintenanceFee?: number
  discountAmount?: number
  finalCustomerPrice?: number
  businessAmount?: number
  platformAmount?: number
}

export interface RoomType {
  id: RoomTypeId
  name: string
  description: string
  capacity: string
  pricing: PricingConfig
  verifiedDirectPrice: boolean
  bookingComPrice?: number
  notes: string
}

export interface RoomInventoryItem {
  id: string
  roomTypeId: RoomTypeId
  status: RoomStatus
  active: boolean
  note?: string
}

export const ROOM_TYPES: RoomType[] = [
  {
    id: "STANDARD",
    name: "Standard Room",
    description:
      "Self-catering standard accommodation with a verified direct price. Exact layout details and amenities are pending verification.",
    capacity: "1-2 Guests",
    pricing: {
      currency: "ZAR",
      basePrice: 650,
      websitePrice: 650,
      platformFee: 0,
      maintenanceFee: 0,
      businessAmount: 650,
      platformAmount: 0,
      finalCustomerPrice: 650,
    },
    verifiedDirectPrice: true,
    bookingComPrice: 715,
    notes: "Direct booking price verified with Lauren Palace Guest House management.",
  },
  {
    id: "THREE_SLEEPER",
    name: "Three-Sleeper Room",
    description:
      "Self-catering three-sleeper accommodation. Exact layout and room details are pending verification.",
    capacity: "3 Guests",
    pricing: {
      currency: "ZAR",
      basePrice: 900,
      websitePrice: 900,
      platformFee: 0,
      maintenanceFee: 0,
      businessAmount: 900,
      platformAmount: 0,
      finalCustomerPrice: 900,
    },
    verifiedDirectPrice: true,
    notes: "Direct booking price verified with Lauren Palace Guest House management.",
  },
  {
    id: "COTTAGE",
    name: "Cottage",
    description:
      "Self-catering cottage accommodation. Exact configuration is pending verification.",
    capacity: "Details pending verification",
    pricing: {
      currency: "ZAR",
      basePrice: 1750,
      websitePrice: 1750,
      platformFee: 0,
      maintenanceFee: 0,
      businessAmount: 1750,
      platformAmount: 0,
      finalCustomerPrice: 1750,
    },
    verifiedDirectPrice: true,
    notes: "Direct booking price verified with Lauren Palace Guest House management.",
  },
]

export const ROOM_INVENTORY: RoomInventoryItem[] = [
  ...Array.from({ length: 18 }, (_, index) => ({
    id: `standard-${index + 1}`,
    roomTypeId: "STANDARD" as const,
    status: "AVAILABLE" as const,
    active: true,
    note: "Physical inventory unit for a standard room.",
  })),
  ...Array.from({ length: 2 }, (_, index) => ({
    id: `three-sleeper-${index + 1}`,
    roomTypeId: "THREE_SLEEPER" as const,
    status: "AVAILABLE" as const,
    active: true,
    note: "Physical inventory unit for a three-sleeper room.",
  })),
  {
    id: "cottage-1",
    roomTypeId: "COTTAGE",
    status: "AVAILABLE",
    active: true,
    note: "Physical inventory unit for the cottage.",
  },
]
