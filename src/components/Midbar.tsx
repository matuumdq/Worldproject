import { AiFillStar } from "react-icons/ai"
import { FaHandsHelping } from "react-icons/fa"
import { MdWorkspacePremium } from "react-icons/md"

const Midbar: React.FC = () => {
    return(
        <div className="w-full bg-black/70 my-20 py-4 px-4">
            <div className="flex flex-col gap-3 md:grid md:grid-cols-4 md:justify-items-center max-w-screen-lg mx-auto text-white">
                <div className="flex items-center font-bold uppercase text-2xl">Que nos hace los mejores?</div>
                <div className="flex items-center md:justify-center gap-1 border-b-2 md:border-b-0 pb-2 w-full text-center md:border-l-2 border-gray-500">
                    <AiFillStar className="text-amber-500 text-2xl md:text-4xl ml-5"/>
                    <p className="italic">Experiencia y tradición</p>
                </div>
                <div className="flex items-center md:justify-center gap-1 border-b-2 md:border-b-0 pb-2 w-full text-center md:border-l-2 border-gray-500">
                    <MdWorkspacePremium className="text-2xl md:text-4xl ml-5"/>
                    <p className="italic">Calidad y variedad de productos</p>
                </div>
                <div className="flex items-center md:justify-center gap-1 border-b-2 md:border-b-0 pb-2 w-full text-center md:border-l-2 border-gray-500">
                    <FaHandsHelping className="text-2xl md:text-4xl ml-5"/>
                    <p className="italic">Cumplimiento de normativas</p>
                </div>
            </div>
        </div>
    )
}

export default Midbar