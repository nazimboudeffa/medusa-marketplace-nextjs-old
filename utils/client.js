import Medusa from "@medusajs/medusa-js"

const medusaClient = new Medusa({ baseUrl: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL })

export { medusaClient }