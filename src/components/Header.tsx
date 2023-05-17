import Link from "next/link"

const Header: React.FC = () => {
    
    return (
      <main className="h-[94vh] bg-[url('https://res.cloudinary.com/dnzdg980p/image/upload/v1684346349/hero_olostl.jpg')] bg-cover bg-center">
        <div className="h-full flex flex-col justify-center md:items-center px-2 sm:px-16 ">
          <div className="bg-black/40 p-5 text-white rounded-lg flex flex-col justify-center items-center gap-3 w-auto">
            <h1 className="font-bold text-2xl text-center">World Guns</h1>
            <p>Compra las mejores armas al mejor precio</p>
          </div>
          <div>
            <Link href='/tienda'>
              <button className="bg-black/70 uppercase mt-5 text-secondary-bg hover:scale-105 hover:bg-black font-semibold ease-in duration-300 px-10 py-1 rounded-lg">Visita nuestra tienda</button> </Link>
          </div>
        </div>
        <div className="absolute flex bottom-10 right-10 items-center justify-end">
          <img src="https://res.cloudinary.com/dnzdg980p/image/upload/v1684347125/clientes_x59jui.png" alt="clientes" className="w-28 md:w-44 h-auto" />
          <div className="flex flex-col ">
            <p className="text-xl font-semibold text-secondary-bg">+4000</p>
            <p className="text-xl font-thin text-secondary-bg">Clientes</p>
          </div>
        </div>
      </main>
    )
  }
  
  export default Header