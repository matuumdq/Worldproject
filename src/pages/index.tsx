import { GetStaticProps } from "next"
import { Product } from "../../product/types"
import api from "../../product/api"

interface Props {
    products: Product[]
}

const IndexRoute: React.FC<Props> = ({products}) => {
    
  return (
    <div className="flex gap-6 bg-white h-screen">
        {products.map((product) => (
            <div key={product.id}>
                <div className="bg-red-400 text-white" >{product.title}</div>
                <div>${product.price}</div>
                {product.description !== '' && <div>{product.description}</div> }
            </div>
        ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async() => {

    const products = await api.list()
    return {
        props: {
            products,
        },
        // revalidate: 10
    }
}

export default IndexRoute