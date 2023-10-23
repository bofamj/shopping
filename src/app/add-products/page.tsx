export const  metadata ={
    title: 'Add Product-Shep-Shope',
    
}

export default function addProducts() {
  return (
    <div className="w-full ">
        <form action="" className=" m-11">
        <h1 className="text-lg mb-3 uppercase font-bold">add a new product</h1>
        <input required 
        type="text" name="name"
         placeholder="Name" 
         className="mb-2 input input-bordered w-full  bg-white" />
        <textarea name="descreption"
         placeholder="Descreption" 
         className="w-full mb-2 textarea textarea-bordered bg-white" />
         <input required 
        type="url" name="imageurl"
         placeholder="Imageurl" 
         className="mb-2 input input-bordered w-full  bg-white" />
         <input required 
        type="number" name="price"
         placeholder="Price" 
         className="mb-2 input input-bordered w-full  bg-white" />
         <button className="btn btn-primary btn-block text-white">add product</button>
        </form>
    </div>
  )
}
