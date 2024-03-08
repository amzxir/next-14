import { revalidateTag } from "next/cache";

async function ProductPage() {

    const res = await fetch("http://localhost:8000/products" , {
        cache:'no-cache',
        next:{
            tags:['products']
        }
    });
    const data = await res.json();


    async function addProduct(e) {
        'use server'

        const title = e.get("title")
        const price = e.get("price")

        const newProduct = { title , price }

        await fetch("http://localhost:8000/products" , {
            method:'post',
            body:JSON.stringify(newProduct),
            headers:{
                'Content-Type':'application/json'
            }
        })

        revalidateTag("products")
    }


    return (
        <div>
            <form action={addProduct} className="flex flex-col gap-5 max-w-xl p-8 mx-auto bg-slate-800 rounded-md">
                <input className="p-2 bg-slate-600 outline-none rounded-md" type="text" placeholder="title" name="title" />
                <input className="p-2 bg-slate-600 outline-none rounded-md" type="text" placeholder="price" name="price" />
                <button className="p-2 bg-slate-900 text-slate-100 rounded-md">add product</button>
            </form>
            <div className="flex flex-wrap justify-center max-w-xl mx-auto my-10 gap-5">
                {
                    data.map((i) => (
                        <div className="p-5 bg-slate-800 rounded-md text-center" key={i.id}>
                            <p>{i.title}</p>
                            <p>{i.price}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default ProductPage;