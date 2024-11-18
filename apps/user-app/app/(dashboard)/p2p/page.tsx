import { getServerSession } from "next-auth"


export default async function P2P(){
    const session = await getServerSession

    return <div>
        P2P 
    </div>
}