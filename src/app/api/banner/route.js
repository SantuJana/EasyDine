import connect from "@/lib/db/dbConnect";
import Banner from '@/lib/model/Banner'

export async function GET(){
    try {
        await connect();
        const banners = await Banner.find({})
        return Response.json({success: true, data:banners, message: "SUCCESS"})
    } catch (error) {
        return Response.json({success: false, data:[], message: error.message})
    }
}