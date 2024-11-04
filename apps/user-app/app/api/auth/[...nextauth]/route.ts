import { authOptions } from "../../../lib/auth"
import NextAuth from "next-auth"

export const handler = NextAuth(authOptions)

// export const GET = handler ;
// export const POST = handler ;
export { handler as GET, handler as POST }