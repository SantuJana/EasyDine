import connect from "@/lib/db/dbConnect";
import Category from '@/lib/model/Category';


export async function GET(req){
    try {
        await connect();
        const categoryData = await Category.find({});
        return Response.json({success: true, data: categoryData})        
    } catch (error) {
        return Response.json({success: false, data: [], message: error.message}) 
    }
}