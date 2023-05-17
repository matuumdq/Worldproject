import Link from "next/link"

const Shop: React.FC = () => {
    return(
        <div className="flex max-w-screen-lg mx-6 md:mx-auto mt-10 flex-col-reverse md:flex-row justify-center items-center">
            <div className="bg-black/60 py-4 -translate-y-2 md:translate-y-0 rounded-b-lg md:rounded-br-none md:rounded-l-lg md:py-4">
            <p className="text-sm mx-4 text-secondary-bg">¡Te invitamos a visitar nuestra tienda en línea! Sumérgete en el mundo de las armas y descubre una experiencia de compra única. Nuestra tienda en línea está diseñada para ofrecerte comodidad y accesibilidad mientras exploras nuestra amplia gama de armas y accesorios. Desde rifles de precisión hasta pistolas compactas, tenemos todo lo que necesitas para satisfacer tus requerimientos. Navega por nuestras categorías y encuentra el arma perfecta para ti. Nuestro equipo de expertos está listo para ayudarte en cada paso del camino. ¿Qué esperas? ¡Explora, elige y disfruta de la calidad excepcional que ofrecemos!</p>
            <div className="text-center">
                <Link href='/tienda'>
                <button className="bg-black/70 uppercase mt-5 text-secondary-bg hover:scale-105 hover:bg-black font-semibold ease-in duration-300 px-10 py-1 rounded-lg">Visita nuestra tienda</button> </Link>
            </div>
            </div>
            <img src="https://img.freepik.com/fotos-premium/filas-rifles-pared-escaparate-armeria-nadie-euqipment-cazadores-stand-tienda-armas-hobby-caza-tiro-deportivo_266732-22522.jpg" alt="" className="md:w-1/2 rounded-md" />
        </div>
    )
}

export default Shop