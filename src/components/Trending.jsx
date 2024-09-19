import {products} from "../data"
function Trending() {
    
  return (
    <div className='bg-white shadow-sm p-6'>
        <h1 className="text-3xl p-6 pt-12">Selected Trending Products</h1>
        <div className=" flex flex-wrap justify-between items-center gap-4 ">
        {products.map((product)=>(
            <div key={product.id}>
                <div className="w-full transform transition-transform duration-300 hover:scale-110" >
                    <img src={product.img} alt="car image" />
                    <p>{product.desciption}</p>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Trending