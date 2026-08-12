import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Create roles
  const roles = [
    "SUPER_ADMIN",
    "OWNER",
    "MANAGER",
    "STAFF",
    "HOUSEKEEPING",
    "CUSTOMER",
  ]

  for (const r of roles) {
    await prisma.role.upsert({
      where: { name: r },
      update: {},
      create: { name: r, description: `${r} role` },
    })
  }

  // Minimal permission set for dev
  const perms = [
    "MANAGE_USERS",
    "MANAGE_ROLES",
    "MANAGE_PERMISSIONS",
    "MANAGE_ROOMS",
    "MANAGE_BOOKINGS",
    "MANAGE_PAYMENTS",
  ]

  for (const p of perms) {
    await prisma.permission.upsert({
      where: { key: p },
      update: {},
      create: { key: p, description: `${p} permission` },
    })
  }

  // Create core room types with verified direct prices (cents)
  const standard = await prisma.roomType.upsert({
    where: { slug: "standard" },
    update: {},
    create: {
      slug: "standard",
      name: "Standard Room",
      capacity: 2,
      verifiedDirectPrice: true,
    },
  })

  const three = await prisma.roomType.upsert({
    where: { slug: "three-sleeper" },
    update: {},
    create: {
      slug: "three-sleeper",
      name: "Three-Sleeper Room",
      capacity: 3,
      verifiedDirectPrice: true,
    },
  })

  const cottage = await prisma.roomType.upsert({
    where: { slug: "cottage" },
    update: {},
    create: {
      slug: "cottage",
      name: "Cottage",
      capacity: 4,
      verifiedDirectPrice: true,
    },
  })

  // Pricing stored in cents (ZAR)
  await prisma.roomTypePricing.createMany({
    data: [
      { roomTypeId: standard.id, basePrice: 65000, websitePrice: 65000 },
      { roomTypeId: three.id, basePrice: 90000, websitePrice: 90000 },
      { roomTypeId: cottage.id, basePrice: 175000, websitePrice: 175000 },
    ],
    skipDuplicates: true,
  })

  console.log("Seed completed (roles, permissions, room types, pricing).")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
