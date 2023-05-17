import Link from "next/link"
import { Parallax } from "react-parallax"


const Shop: React.FC = () => {
    return(
        <div className="flex flex-col mt-6 md:flex-row justify-center items-center h-auto">
            <Parallax blur={1} bgImage="https://images.pexels.com/photos/889709/pexels-photo-889709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  bgImageAlt="the cat" strength={400} className="w-full ">
        <div className="w-full min-h-[20vh] md:min-h-[40vh] flex justify-center items-center bg-black/70">
            <div className="flex flex-col justify-center items-center gap-4 md:w-2/3 mx-auto md:rounded-lg h-auto text-white">
                <h2 className="w-full text-center uppercase font-light text-xl md:text-6xl pt-4">Compra lo que necesites</h2>
                    <p className="text-base mx-4 font-mono text-center md:w-2/3">
                    Descubre nuestra tienda en línea y encuentra una amplia selección de armas y accesorios. Nuestro equipo experto está listo para ayudarte en tu búsqueda. ¡Explora, elige y disfruta de una experiencia de compra excepcional!
                    </p>
                    <div className="text-center">
                        <Link href='/tienda'>
                        <button className="border border-secondary-bg uppercase mb-5 text-white hover:scale-105 font-semibold ease-in duration-300 px-10 py-1 rounded-full">Ir a la Tienda</button> </Link>
                    </div>
            </div>
                
        </div>
        <div className="absolute flex bottom-10 right-10 items-center justify-end hidden md:inline-block">
          <img src="https://res.cloudinary.com/dnzdg980p/image/upload/v1684347125/clientes_x59jui.png" alt="clientes" className="w-28 md:w-44 h-auto " />
          <div className="flex flex-col ">
            <p className="text-xl font-semibold text-secondary-bg">+4000</p>
            <p className="text-xl font-thin text-secondary-bg">Clientes</p>
          </div>
        </div>
      </Parallax>
      </div>
    // </div>
    //     <div className="flex max-w-screen-lg mx-6 md:mx-auto mt-10 flex-col-reverse md:flex-row justify-center items-center">
    //         <div className="bg-black/60 py-4 -translate-y-2 md:translate-y-0 rounded-b-lg md:rounded-br-none md:rounded-l-lg md:py-4">
    //         <p className="text-sm mx-4 text-secondary-bg">¡Te invitamos a visitar nuestra tienda en línea! Sumérgete en el mundo de las armas y descubre una experiencia de compra única. Nuestra tienda en línea está diseñada para ofrecerte comodidad y accesibilidad mientras exploras nuestra amplia gama de armas y accesorios. Desde rifles de precisión hasta pistolas compactas, tenemos todo lo que necesitas para satisfacer tus requerimientos. Navega por nuestras categorías y encuentra el arma perfecta para ti. Nuestro equipo de expertos está listo para ayudarte en cada paso del camino. ¿Qué esperas? ¡Explora, elige y disfruta de la calidad excepcional que ofrecemos!</p>
    //         <div className="text-center">
    //             <Link href='/tienda'>
    //             <button className="bg-black/70 uppercase mt-5 text-secondary-bg hover:scale-105 hover:bg-black font-semibold ease-in duration-300 px-10 py-1 rounded-lg">Visita nuestra tienda</button> </Link>
    //         </div>
    //         </div>
    //         <img src="https://images.pexels.com/photos/889709/pexels-photo-889709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="" />
    //     </div>
    )
}

export default Shop