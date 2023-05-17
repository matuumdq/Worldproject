import { GetStaticProps } from "next"
import { Product } from "../../product/types"
import api from "../../product/api"
import { useEffect, useState } from "react"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { AiFillInfoCircle, AiFillCloseCircle } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'

interface Props {
    products: Product[]
}

const IndexRoute: React.FC<Props> = ({products}) => {
    function renderModal(prodtitle:string) {
        const msg = `https://api.whatsapp.com/send?phone=+5492236681270&text=Hola,%20estoy%20interesado%20en%20el%20producto:%20${prodtitle},%20deseo%20mas%20info`;
        return (
            <a href={msg} target="_blank" rel="noreferrer" className="flex items-center gap-4 w-auto border border-white px-5 py-1 rounded-md text-white font-semibold uppercase hover:scale-105 hover:bg-white hover:text-black ease-in duration-300">Mas Informacion: <BsWhatsapp size={30} color="green"/></a>
        )
    }
    const [currentPage, setCurrentPage] = useState(1);
    const [prod, setProd] = useState(products)
    const [selectedProd, setSelectedProd] = useState(null)

    // const loadProducts = async (page: number) => {
    //     try {
    //       const response = await api.list(page);
    //       setProd((prevProducts) => [...prevProducts, ...response]);
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   };

    //   useEffect(() => {
    //     loadProducts(currentPage);
    //   }, [currentPage]);

    //   const handleLoadMore = () => {
    //     setCurrentPage((prevPage) => prevPage + 1);
    //   };

    const filterType = (category: string) => {
        setProd(
            products.filter((item: { category: any }) => {
                return item.category === category
            })
        )
    }

  return (
    <div className="bg-slate-950 py-5 min-h-screen">
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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-4 mx-5 lg:max-w-screen-lg md:mx-auto'>
        {prod.map((item) =>
            item.id === '' || item.title === '' ? null : (
                <div key={item.id} className='border border-slate-600 shadow-sm hover:shadow-none hover:border-green-400 rounded-md hover:scale-105 duration-300 flex flex-col items-center bg-black'>
                 <motion.img layoutId={item.image} src={item.image} alt={item.title} className='w-full h-[200px] object-scale-down bg-white rounded-t-md' />   
                 <button className="-translate-y-3.5 bg-white rounded-full p-0" onClick={() => setSelectedProd(item)}><AiFillInfoCircle size={32} color="green"/></button>
                <div className='flex flex-col items-center justify-center px-2 py-4 -translate-y-3'>
                    <p className='font-bold text-white'>{item.title.toUpperCase()}</p>
                {item.price !== 0 && 
                    <div className="text-white">$ {item.price}</div>
                }
                </div>
                </div>
            )
        )}
        {/* <button onClick={handleLoadMore}>Cargar más</button> */}
            </div>
            <AnimatePresence>
                {selectedProd && 
                    <motion.div  
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        key='backdrop' 
                        layoutId={selectedProd} 
                        className='h-auto min-h-screen w-full bg-black/90 text-white fixed top-0 left-0 flex flex-col item justify-center transition-all ease-in duration-300 md:px-10 lg:px-20 overflow-y-auto z-50'
                    >
                        <button className="absolute top-5 right-5" onClick={()=>setSelectedProd(null)}><AiFillCloseCircle size={30} /></button>
                        <div className="my-12 flex flex-col md:flex-row gap-5 items-center h-full">
                            <div className="mx-5 flex flex-col md:w-1/2 lg:pl-40">
                                <h3 className="text-lg md:text-3xl uppercase font-semibold">{selectedProd.title}</h3>
                                <h4 className="text-sm font-thin uppercase">{selectedProd.category}</h4>
                                <h5 className="font-bold pb-3">${selectedProd.price}</h5>
                                <motion.img src={selectedProd.image} alt={selectedProd.title} className='w-full h-[200px]  object-scale-down bg-white rounded-md md:rounded-sm' />   
                            </div>
                            <div className="mx-5 h-auto overflow-y-auto flex flex-col md:w-1/2 ">
                                <h3 className="uppercase font-semibold md:text-2xl pb-2 mx-auto">Caracteristicas: </h3>
                                {selectedProd.description.split('. ').map((punto, index) => (
                                    <p className="font-thin text-xs md:text-base lg:mx-10" key={index}>
                                        {punto}
                                    </p>
                                ))}
                                {(selectedProd.disponible !== '' && selectedProd.disponible === 'si')
                                    && <button className="bg-green-400 uppercase px-5 py-1 mt-5 text-left w-auto mx-auto rounded-md cursor-default">En stock</button>
                                }
                                {(selectedProd.disponible !== '' && selectedProd.disponible === 'no')
                                    && <button className="bg-red-600 uppercase px-5 py-1 mt-5 text-left w-auto mx-auto rounded-md cursor-default">sin stock</button>
                                }
                            </div>
                        </div>
                        <div className="max-w-full mx-10 md:mx-48 border border-white"></div>
                        {selectedProd.marcas !== '' 
                        && <div className="flex items-center mt-10 gap-2">
                                <h4 className="uppercase text-xl ml-10 pr-5">Marcas:</h4> 
                                {selectedProd.marcas.split(', ').map((marca, index) => (
                                    <button className="text-xs md:text-base uppercase border rounded-md px-2 py-1 hover:scale-105 bg-white text-black hover:font-normal hover:cursor-default ease-in duration-200" key={index}>
                                        {marca}
                                    </button>
                                ))}
                            </div> 
                        }
                        <div className="flex justify-center md:justify-end mt-10 mr-5 md:mr-40">
                            {renderModal(selectedProd.title)}
                        </div>
                        
                        {/* <motion.img src={selectedProd.image} alt={selectedProd.title} className="w-auto mx-auto max-h-11" />
                        <p className="text-xl text-center">{selectedProd.title}</p>
                        <p className="text-sm w-full md:w-1/2">{selectedProd.description}</p>
                        <button className="text-green">ir a wpp</button> */}
                    </motion.div>
                }
            </AnimatePresence>
        

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