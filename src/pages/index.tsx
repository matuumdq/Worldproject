import { GetStaticProps } from "next"
import { Product } from "../../product/types"
import api from "../../product/api"
import { useState } from "react"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"

interface Props {
    products: Product[]
}

const IndexRoute: React.FC<Props> = ({products}) => {
    const [prod, setProd] = useState(products)
    const [selectedProd, setSelectedProd] = useState(null)

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
        <button 
            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white ease-in-out duration-300'
            onClick={()=> filterType('pistola')}
        >
            Pistolas
        </button>
        <button 
            className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white ease-in-out duration-300'
            onClick={()=> filterType('escopetas')}
        >
            Escopetas
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
        <LayoutGroup id="a">
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 mx-5'>
        {prod.map((item) =>
            item.id === '' || item.title === '' ? null : (
                <div key={item.id} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                <img as={motion.img} onClick={() => setSelectedProd(item)} layoutId={item.image} src={item.image} alt={item.title} className='w-full h-[200px] object-cover rounded-t-lg cursor-pointer' />
                <div className='flex justify-between px-2 py-4'>
                    <p className='font-bold'>{item.title.toUpperCase()}</p>
                    <p>
                    <span className='bg-orange-500 text-white p-1 rounded-lg'>${item.price}</span>
                    </p>
                </div>
                </div>
            )
        )}
            </div>
            <AnimatePresence>
                {selectedProd && 
                    <div  
                        key='backdrop' 
                        layoutId={selectedProd} 
                        className="h-screen w-full bg-black/90 fixed top-0 left-0 flex flex-col item justify-center"
                    >
                        <button onClick={()=>setSelectedProd(null)}>X</button>
                        <img src={selectedProd.image} alt={selectedProd.title} className="w-1/2 mx-auto" />
                        <p className="text-xl text-center">{selectedProd.title}</p>
                        <p className="text-sm w-full md:w-1/2">{selectedProd.description}</p>
                        <button className="text-green">ir a wpp</button>
                    </div>
                }
            </AnimatePresence>
        </LayoutGroup>

            {/*  <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 mx-5'>
                {prod.map((item)=> (
                    <motion.div onClick={()=>setSelectedProd(item)} key={item.id} layoutId={item.id} className='border shadow-lg rounded-lg hover:scale-105 duration-300' >
                        <motion.img  src={item.image} alt={item.title} className='w-full h-[200px] object-cover rounded-t-lg cursor-pointer'/>
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.title.toUpperCase()}</p>
                            <p>
                                <span className='bg-orange-500 text-white p-1 rounded-lg'>${item.price}</span>
                            </p>
                        </div> 
                        <motion.h5>{item.title}</motion.h5>
                        <motion.h2>{item.description}</motion.h2>
                    </motion.div>
                ) )} 
            </div>
            <AnimatePresence>
                {selectedProd && (
                    <motion.div layoutId={selectedProd} className="bg-white">
                    <motion.h5 className="text-black">{selectedProd.title}</motion.h5>
                    <motion.h2 className="text-black">{selectedProd.description}</motion.h2>
                    <motion.button onClick={() => setSelectedProd(null)} />
                    </motion.div>
                )}
            </AnimatePresence> */}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async() => {

    const products = await api.list()
    return {
        props: {
            products,
        },
        revalidate: 10
    }
}

export default IndexRoute