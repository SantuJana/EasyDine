import connectDb from "@/lib/db/dbConnect";
await connectDb()
import Product from '@/lib/model/Product';

export async function GET(){
    try {
        const products = await Product.find({},{description: 0, images: 0}).sort({rating: -1}).limit(5);
        return Response.json({success: true, data: products, message: "SUCCESS"})        
    } catch (error) {
        return Response.json({success: false, data: [], message: error.message}) 
    }
}