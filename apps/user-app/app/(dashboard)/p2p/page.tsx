import { getServerSession } from "next-auth"
import SendMoney from "../../../components/SendMoney"


export default async function P2P(){
    const session = await getServerSession

    return <div className="h-full w-screen ">
        <div className="flex flex-col justify-center items-center h-full max-w-screen-lg -mt-16">
            <SendMoney/>
        </div>
    </div>
}