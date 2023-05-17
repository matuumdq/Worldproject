import Link from "next/link"
import { Parallax } from "react-parallax"

const KnowUs: React.FC = () => {
    return(
    //     <div className="flex flex-col mt-6 md:flex-row justify-center items-center h-auto">
    //         <Parallax blur={1} bgImage="https://images.pexels.com/photos/3678428/pexels-photo-3678428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  bgImageAlt="the cat" strength={400} className="w-full">
    //     <div className="w-full min-h-[20vh] md:min-h-[40vh] flex justify-center items-center">
    //         <div className="bg-secondary-bg/20 flex flex-col justify-center items-center gap-4 md:w-2/3 mx-auto md:rounded-lg h-auto text-white">
    //             <h2 className="w-full text-center uppercase font-light text-xl md:text-6xl pt-4">Nosotros</h2>
    //                 <p className="text-base mx-4 font-mono md:w-2/3">
    //                     ¡Bienvenidos a nuestra armería fundada en 1968! Ofrecemos productos de alta calidad y un servicio excepcional. Descubre nuestra amplia selección de armas para caza, tiro deportivo y seguridad personal. ¡Gracias por elegirnos!
    //                 </p>
    //                 <div className="text-center">
    //                     <Link href='/tienda'>
    //                     <button className="bg-secondary-bg cursor-default uppercase mb-5 text-primary-bg hover:scale-105 hover:border hover:border-black font-semibold ease-in duration-300 px-10 py-1 rounded-lg">Conoce nuestra Historia</button> </Link>
    //                 </div>
    //         </div>
                
    //     </div>
    //   </Parallax>
    // </div>
    <div className="flex flex-col mt-6 md:flex-row justify-center items-center h-auto">
        <Parallax blur={1} bgImage="https://images.pexels.com/photos/3678428/pexels-photo-3678428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  bgImageAlt="the cat" strength={400} className="w-full ">
            <div className="w-full min-h-[20vh] md:min-h-[40vh] flex justify-center items-center bg-black/70">
                <div className="flex flex-col justify-center items-center gap-4 md:w-2/3 mx-auto md:rounded-lg h-auto text-white">
                    <h2 className="w-full text-center uppercase font-light text-xl md:text-6xl pt-4">Nosotros</h2>
                        <p className="text-base mx-4 font-mono text-center md:w-2/3">
                        ¡Bienvenidos a nuestra armería fundada en 1968! Ofrecemos productos de alta calidad y un servicio excepcional. Descubre nuestra amplia selección de armas para caza, tiro deportivo y seguridad personal. ¡Gracias por elegirnos!
                        </p>
                        <div className="text-center">
                            <Link href='/tienda'>
                            <button className="border border-secondary-bg uppercase mb-5 text-white hover:scale-105 font-semibold ease-in duration-300 px-10 py-1 rounded-full">leer mas</button> </Link>
                        </div>
                </div>
                    
            </div>
            
        </Parallax>
    </div>
    )
}

export default KnowUs