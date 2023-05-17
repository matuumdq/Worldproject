import Link from "next/link"

const KnowUs: React.FC = () => {
    return(
        <div className="flex max-w-screen-lg flex-col mx-3 md:mx-auto mt-6 md:flex-row justify-center items-center h-auto">
            <img src="https://images.pexels.com/photos/3678428/pexels-photo-3678428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="md:w-1/2 rounded-md" />
            <div className="bg-black/60 py-4 -translate-y-2 md:translate-y-0 rounded-b-lg md:rounded-bl-none md:rounded-r-lg md:py-4">
            <div className="text-center">
                <Link href='/tienda'>
                <button className="bg-secondary-bg cursor-default uppercase mb-5 text-primary-bg hover:scale-105 hover:border hover:border-black font-semibold ease-in duration-300 px-10 py-1 rounded-lg">Conoce nuestra Historia</button> </Link>
            </div>
            <p className="text-sm mx-4 text-secondary-bg">¡Bienvenidos a nuestra armería! Fundada en 1968, nos enorgullece ser una empresa de larga trayectoria en el mundo de las armas. A lo largo de los años, hemos brindado a nuestros clientes un servicio excepcional y productos de la más alta calidad. Nuestra pasión por las armas y nuestro compromiso con la seguridad nos ha convertido en un referente en el mercado. Ya sea que estés buscando armas para caza, tiro deportivo o seguridad personal, aquí encontrarás una amplia selección para satisfacer tus necesidades. Explora nuestra página y descubre la fascinante historia de nuestra armería y la variedad de productos que ofrecemos. ¡Gracias por elegirnos!</p>
            
            </div>
        </div>
    )
}

export default KnowUs