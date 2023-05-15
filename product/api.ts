import { Product } from "./types"
import axios from "axios"
import Papa from 'papaparse'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    list: async(): Promise<Product[]> => {
        return axios.get(
            `https://docs.google.com/spreadsheets/d/e/2PACX-1vSThQAPJxZnYVlWqv-XahTcj1wLhyJ10ZKuyOonk-lEX6CPS7cwQES1HLLetuOr8alUXcQVSmbhsz4l/pub?output=csv`, 
            {
                responseType: 'blob'
            }
        ).then(response => {
            return new Promise<Product[]>((resolve, reject) => {
                Papa.parse(response.data, {
                    header: true,
                    complete: results => {
                        return resolve(results.data as Product[])
                    },
                    error: (error) => {
                        return reject(error.message)
                    }
                })
            })
        })
    }
}