import connectDb from "@/lib/db/dbConnect";
await connectDb()
import Category from '@/lib/model/Category';


export async function GET(req){
    try {
        const categoryData = await Category.find({});
        return Response.json({success: true, data: categoryData})        
    } catch (error) {
        return Response.json({success: false, data: [], message: error.message}) 
    }
}