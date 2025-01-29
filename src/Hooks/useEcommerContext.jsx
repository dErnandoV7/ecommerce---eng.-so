import { useContext } from "react"
import { EcommerceContext } from "../context/ecommerceContext"

export const useEcommerce = () => {
    const data = useContext(EcommerceContext)
    
    return data
}