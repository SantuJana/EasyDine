import connectDb from "@/lib/db/dbConnect";
await connectDb()
import Banner from '@/lib/model/Banner'

export async function GET(){
    try {
        const banners = await Banner.find({})
        return Response.json({success: true, data:banners, message: "SUCCESS"})
    } catch (error) {
        return Response.json({success: false, data:[], message: error.message})
    }
}