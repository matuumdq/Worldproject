import { GetStaticProps } from "next"
import { Product } from "../../product/types"
import api from "../../product/api"
import Image from "next/image"
import { useState } from "react"

interface Props {
    products: Product[]
}

const IndexRoute: React.FC<Props> = ({products}) => {
    const [prod, setProd] = useState(products)
    const filterType = (category: string) => {
        setProd(
            products.filter((item: { category: any }) => {
                return item.category === category
            })
        )
    }
  return (
    <div>
        <button 
            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white ease-in-out duration-300'
            onClick={()=> setProd(products)}
        >
            Todo
        </button>
        <button 
            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white ease-in-out duration-300'
            onClick={()=> filterType('CEPILLOS')}
        >
            Cepillos
        </button>
        {/* <div className="flex gap-6 bg-black h-screen">
            {prod.map((product) => (
                <div key={product.id}>
                    <div className="bg-red-400 text-white" >{product.title}</div>
                    <div>${product.price}</div>
                    {product.description !== '' && <div>{product.description}</div> }
                    <Image src={product.image} width={100} height={100} className="w-auto max-h-44" alt="" />
                    <button className="bg-white text-black">Agregar</button>
                </div>
            ))}
        </div> */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 mx-5'>
                {prod.map((item)=> (
                    <div key={item.id} className='border shadow-lg rounded-lg hover:scale-105 duration-300' >
                        <img src={item.image} alt={item.title} className='w-full h-[200px] object-cover rounded-t-lg'/>
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.title.toUpperCase()}</p>
                            <p>
                                <span className='bg-orange-500 text-white p-1 rounded-lg'>${item.price}</span>
                            </p>
                        </div>
                    </div>
                ) )}
            </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async() => {

    const products = await api.list()
    return {
        props: {
            products,
        },
        // revalidate: 10
    }
}

export default IndexRoute