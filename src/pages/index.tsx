import { GetStaticProps } from "next"
import { Product } from "../../product/types"
import api from "../../product/api"
import { useEffect, useState } from "react"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import { AiFillInfoCircle, AiFillCloseCircle } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import Navbar from "@/components/Navbar"

interface Props {
    products: Product[]
}

const IndexRoute: React.FC<Props> = () => {
    
  return (
    <div>
        home
    </div>
  )
}

export default IndexRoute