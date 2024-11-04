import CredentialsProvider from 'next-auth/providers/credentials'
import db from '@repo/db/client'
import bcrypt from 'bcrypt'

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                phone: { label: "Phone number", type: "text", placeholder: "9876543210", required: true},
                password: { label: "Password", type: "password", required: true}
            },
            async authorize(credentials: any){
                // add zod validation (credentials) or otp verification if needed 
                const hashedPassword = await bcrypt.hash(credentials.password, 10)
                const existingUser = await db.user.findFirst({
                    where: {
                        number: credentials.phone
                    }
                })
                if(existingUser){
                    const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password)
                    if(passwordValidation){
                        return{
                            id: existingUser.id.toString(),
                            name: existingUser.name,
                            email: existingUser.email
                        }
                    }
                    return null;
                }
                try{
                    const user = await db.user.create({
                        data : {
                            number: credentials.phone,
                            password: hashedPassword
                        }
                    })
                    // do otp verification
                    return{
                        id: user.id.toString(),
                        name: user.name,
                        email: user.email
                    }

                }catch(e){
                    console.error(e);
                }
                return null;
            }
        })
    ],
    secrets: process.env.JWT_SECRET || "secret",
    callbacks:{
        async session({token, session} : any) {
            session.user.id = token.sub

            return session
        }
    }
}