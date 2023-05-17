import { Product } from "./types"
import axios from "axios"
import Papa from 'papaparse'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    list: async(page: number): Promise<Product[]> => {
        const startIndex = (page - 1) * 5;
        return axios.get(
            `https://docs.google.com/spreadsheets/d/e/2PACX-1vSThQAPJxZnYVlWqv-XahTcj1wLhyJ10ZKuyOonk-lEX6CPS7cwQES1HLLetuOr8alUXcQVSmbhsz4l/pub?output=csv&start=${startIndex}`, 
            {
                responseType: 'blob'
            }
        ).then(response => {
            return new Promise<Product[]>((resolve, reject) => {
                Papa.parse(response.data, {
                    header: true,
                    complete: results => {
                        const products = results.data as Product[]
                        return resolve (
                            products.map((product) => ({
                                ...product,
                                price: Number(product.price)
                            }))
                        )
                    },
                    error: (error) => {
                        return reject(error.message)
                    }
                })
            })
        })
    }
}