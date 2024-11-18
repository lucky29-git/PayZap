
import express from "express"
import db from "@repo/db/client"

const app = express()
app.use(express.json())

app.post("/hdfcWebhook", async (req, res) => {
    // TODO: add zod validation
    // check if txn actually came from hdfc bank ( TODO add middleware to check )
    const paymentInformation: {
        token: String, 
        userId: String,
        amount: String 
    } = {
        token : req.body.token,
        userId : req.body.user_identifier,
        amount : req.body.amount
    };
    // Update bal in db, add txn
    try{
        console.log( "Amount from webhook: " + paymentInformation.amount);
        await db.$transaction([
            db.balance.upsert({
                where: {
                    userId: Number(paymentInformation.userId)
                }, 
                update: {
                    amount: {
                        increment: Number(paymentInformation.amount)        // using increment instead of updating bal by adding in it, to prevent raceCondition if two req came very quickly 
                    }
                },
                create: {
                    amount: Number(paymentInformation.amount),
                    locked: 0,
                    user: {
                        connect: {
                            id: Number(paymentInformation.userId)
                        }
                    }
                }
            }),
            db.onRampTransaction.updateMany({
                where: {
                    token: String(paymentInformation.token)
                },
                data: {
                    status: "Success"
                }
            })
        ])
        res.json({
            message: "captured"       // tell hdfc bank requested is captured ( this is v.imp, what if req failed in between) 
        })
    }catch(e){
        console.error(e);
        res.status(411).json({
            message: "Error while processing webhook"
        })
    }
    
})

app.listen(3003);