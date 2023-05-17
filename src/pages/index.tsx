import Provedores from "@/components/Provedores"
import KnowUs from "@/components/Know"
import Shop from "@/components/Shop"
import Header from "@/components/Header"
import Midbar from "@/components/Midbar"


const IndexRoute: React.FC = () => {
    
  return (
    <div className="bg-[url('https://media.istockphoto.com/id/1308490645/es/v%C3%ADdeo/patr%C3%B3n-abstracto-de-hex%C3%A1gono-oscuro-en-estilo-de-tecnolog%C3%ADa-de-fondo-de-ne%C3%B3n-naranja-concepto.jpg?s=640x640&k=20&c=iH4xnfN4HknavhbJTkdzguxVRndHLM3ZJRN2EaAzQVg=')] ">
        <Header />
      <div className="bg-white/40 max-w-screen-xl mx-auto ">
        <Provedores />
        <KnowUs />
        <Shop />
        <Midbar />
        <Provedores />
      </div>

    </div>
  )
}

export default IndexRoute