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
    const [category, setCategory] = useState('')

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
        setCategory(category)
        setProd(
            products.filter((item: { category: any }) => {
                return item.category === category
            })
        )
    }

  return (
    <div className="bg-primary-bg py-5 min-h-screen">
        {category==='' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:max-w-screen-lg mx-auto">
            <div
                className="flex items-center justify-center md:col-span-2 h-32 bg-[url('https://w0.peakpx.com/wallpaper/477/450/HD-wallpaper-steyr-aug-assault-rifle-armee-universal-gewehr-nato-bullpup-assault-rifle-stg-77-sturmgewehr-77-weapons.jpg')] bg-center bg-cover bg-no-repeat"
                onClick={()=> setProd(products)}
            >
                <p className="mx-auto text-white uppercase text-4xl font-bold">ver todos</p>
            </div>
            <div 
                className="flex items-center justify-center h-32 bg-[url('https://w0.peakpx.com/wallpaper/549/154/HD-wallpaper-m1911-colt-gun-weapon.jpg')] bg-center bg-cover bg-no-repeat"
                onClick={()=> filterType('pistola')}
            >
                <p className="mx-auto text-white uppercase text-4xl font-bold">pistolas</p>
            </div>
            <div 
                className="flex items-center justify-center h-32 bg-[url('https://images6.alphacoders.com/314/314786.jpg')] bg-center bg-cover bg-no-repeat"
                onClick={()=> filterType('escopetas')}
            >
                <p className="mx-auto text-white uppercase text-4xl font-bold">Escopetas</p>
            </div>
            <div 
                className="flex items-center justify-center h-32 bg-[url('https://images5.alphacoders.com/283/283267.jpg')] bg-center bg-cover bg-no-repeat"
                onClick={()=> filterType('escopetas')}
            >
                <p className="mx-auto text-white uppercase text-4xl font-bold">fusiles</p>
            </div>
            <div 
                className="flex items-center justify-center h-32 bg-[url('https://w0.peakpx.com/wallpaper/61/145/HD-wallpaper-m4-carbine-assault-rifle-m4-rifle-gun-assault-rifle-weapon-carbine.jpg')] bg-center bg-cover bg-no-repeat"
                onClick={()=> filterType('escopetas')}
            >
                <p className="mx-auto text-white uppercase text-4xl font-bold">carabinas</p>
            </div>
            <div 
                className="flex items-center justify-center h-32 bg-[url('https://w0.peakpx.com/wallpaper/612/442/HD-wallpaper-bowie-knife-graphy-bowie-abstract-knife.jpg')] bg-center bg-cover bg-no-repeat"
                onClick={()=> filterType('escopetas')}
            >
                <p className="mx-auto text-white uppercase text-4xl font-bold">cuchillos</p>
            </div>
            <div 
                className="flex items-center justify-center h-32 bg-[url('https://p4.wallpaperbetter.com/wallpaper/148/708/21/weapons-s-colt-wallpaper-preview.jpg')] bg-center bg-cover bg-no-repeat"
                onClick={()=> filterType('escopetas')}
            >
                <p className="mx-auto text-white uppercase text-4xl font-bold">fundas</p>
            </div>
            <div 
                className="flex items-center justify-center h-32 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Sniperscope.jpg/1200px-Sniperscope.jpg')] bg-center bg-cover bg-no-repeat"
                onClick={()=> filterType('CEPILLOS')}
            >
                <p className="mx-auto text-white uppercase text-4xl font-bold">miras</p>
            </div>
            <div 
                className="flex items-center justify-center h-32 bg-[url('https://m.media-amazon.com/images/S/aplus-media/sc/19854c15-ab01-481b-b197-3d5d85484512.__CR0,0,970,600_PT0_SX970_V1___.jpg')] bg-center bg-cover bg-no-repeat"
                onClick={()=> filterType('escopetas')}
            >
                <p className="mx-auto text-white uppercase text-4xl font-bold">limpieza</p>
            </div>
        </div>
        ) : ( 
            <div
                className="flex items-center justify-center max-w-screen-lg mx-auto h-32 bg-[url('https://w0.peakpx.com/wallpaper/477/450/HD-wallpaper-steyr-aug-assault-rifle-armee-universal-gewehr-nato-bullpup-assault-rifle-stg-77-sturmgewehr-77-weapons.jpg')] bg-center bg-cover bg-no-repeat"
                onClick={()=> {setProd(products), setCategory('')}}
            >
                <p className="mx-auto text-white uppercase text-4xl font-bold">ver todos</p>
            </div>
        )}
        

            <p className="text-xl text-white"> Categoria: {() => filterType()} {category === '' ? 'Todos' : category} </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4 mx-5 lg:max-w-screen-lg md:mx-auto'>
        {prod.map((item) =>
            item.id === '' || item.title === '' ? null : (
                <div key={item.id} onClick={() => setSelectedProd(item)} className='bg-other-200 shadow-sm hover:shadow-none hover:border-green-400 rounded-md hover:scale-105 duration-300 flex flex-col items-center'>
                 <motion.img layoutId={item.image} src={item.image} alt={item.title} className='w-full h-[200px] object-scale-down bg-white rounded-t-md' />   
                 <button className="-translate-y-3.5 bg-white rounded-full p-0 text-other-200" ><AiFillInfoCircle size={32} /></button>
                <div className='flex flex-col items-center justify-center px-2 py-4 -translate-y-3'>
                    <p className='font-bold text-secondary-bg'>{item.title.toUpperCase()}</p>
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
                            <div className="mx-5 h-auto overflow-y-auto flex flex-col w-full md:w-1/2 ">
                                <h3 className="uppercase font-semibold md:text-2xl pb-2 mx-auto">Caracteristicas: </h3>
                                {selectedProd.description.split('. ').map((punto, index) => (
                                    <p className="font-thin text-xs md:text-base mx-10" key={index}>
                                        {punto}
                                    </p>
                                ))}
                                {selectedProd.disponible !== ''
                                    && 
                                            <p className="flex items-center justify-start gap-2 cursor-default mt-2 mx-10">Estado: {selectedProd.disponible === 'si' ? <p className="text-md text-lime-500 font-bold">En Stock</p> : <p className="text-md text-red-600 font-bold">Sin Stock</p>}</p>  
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
                        
                    </motion.div>
                }
            </AnimatePresence>
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