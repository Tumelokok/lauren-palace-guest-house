export type UserRole =
  | "SUPER_ADMIN"
  | "OWNER"
  | "MANAGER"
  | "STAFF"
  | "HOUSEKEEPING"
  | "CUSTOMER"

export type Permission =
  | "MANAGE_USERS"
  | "MANAGE_ROLES"
  | "MANAGE_ROOMS"
  | "MANAGE_PRICING"
  | "MANAGE_BOOKINGS"
  | "MANAGE_PROMO_CODES"
  | "MANAGE_REWARDS"
  | "MANAGE_HOUSEKEEPING"
  | "VIEW_AUDIT_LOGS"
  | "VIEW_REPORTS"
  | "VIEW_REVENUE"

export interface User {
  id: string
  email: string
  name?: string
  role: UserRole
  permissions: Permission[]
  createdAt: string
  updatedAt: string
}

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

export interface PricingSnapshot {
  currency: Currency
  basePrice: number
  websitePrice: number
  platformFee: number
  maintenanceFee: number
  discountAmount: number
  finalCustomerPrice: number
  businessAmount: number
  platformAmount: number
}

export interface RoomType {
  id: RoomTypeId
  name: string
  description?: string
  capacity?: string
  verifiedDirectPrice: boolean
  bookingComPrice?: number
}

export interface Room {
  id: string
  roomTypeId: RoomTypeId
  name?: string
  status: RoomStatus
  active: boolean
}

export interface Booking {
  id: string
  customerId: string
  roomId: string
  roomTypeId: RoomTypeId
  checkIn: string
  checkOut: string
  guests: number
  status: BookingStatus
  pricing: PricingSnapshot
  reference: string
  source: string
  createdAt: string
  updatedAt: string
}

export type PaymentStatus = "PENDING" | "COMPLETED" | "FAILED" | "REFUNDED"

export interface Payment {
  id: string
  bookingId: string
  amount: number
  currency: Currency
  status: PaymentStatus
  provider: string
  providerReference: string
  createdAt: string
  updatedAt: string
}

export interface PromoCode {
  id: string
  code: string
  description?: string
  percentageDiscount?: number
  fixedDiscount?: number
  validFrom: string
  validUntil: string
  usageLimit?: number
  minimumBookingAmount?: number
  roomTypeId?: RoomTypeId
  active: boolean
}

export interface RewardAccount {
  id: string
  customerId: string
  pointsBalance: number
  lifetimePoints: number
  tier?: string
  createdAt: string
  updatedAt: string
}

export interface RewardTransaction {
  id: string
  customerId: string
  bookingId?: string
  points: number
  reason: string
  createdAt: string
}

export type HousekeepingStatus =
  | "DIRTY"
  | "CLEANING"
  | "CLEAN"
  | "INSPECTED"
  | "OCCUPIED"
  | "OUT_OF_SERVICE"

export interface HousekeepingTask {
  id: string
  roomId: string
  assignedStaffId?: string
  taskType: string
  status: HousekeepingStatus
  scheduledAt?: string
  completedAt?: string
  notes?: string
}

export interface AuditLog {
  id: string
  userId: string
  action: string
  entity: string
  entityId: string
  metadata?: Record<string, unknown>
  createdAt: string
}
