import prisma from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import SubmitButton from "../../components/submitButton"


export const  metadata ={
    title: 'Add Product-Shep-Shope',
    
}

//*addProduct functionality by server actions
async function addProduct(formData:FormData){
'use server';
const name = formData.get('name')?.toString();
const discription = formData.get('description')?.toString();
const imageUrl = formData.get('imageurl')?.toString();
const price = Number(formData.get('price') || 0);

//* check if all fields are not empty
if(!name || !discription || !imageUrl || !price){
    throw new Error('Please enter all required fields')
}


//*create new product
await prisma.product.create({
    data:{
        name,discription,imageUrl,price
    }
})

redirect('/')

}


export default function addProducts() {
  return (
    <div className="w-full ">
        <form action={addProduct} className=" m-11">
            <h1 className="text-lg mb-3 uppercase font-bold">add a new product</h1>
            <input required 
            type="text" name="name"
            placeholder="Name" 
            className="mb-2 input input-bordered w-full  bg-white" />
            <textarea name="description"
            placeholder="Description" 
            className="w-full mb-2 textarea textarea-bordered bg-white" />
            <input required 
            type="url" name="imageurl"
            placeholder="Imageurl" 
            className="mb-2 input input-bordered w-full  bg-white" />
            <input required 
            type="number" name="price"
            placeholder="Price" 
            className="mb-2 input input-bordered w-full  bg-white" />
            <SubmitButton className="btn-block text-white">add product</SubmitButton>
        </form>
    </div>
  )
}
