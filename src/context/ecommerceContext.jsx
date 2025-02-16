import { createContext, useReducer } from "react";
import { getAllProducts } from "../db/getAllProducts";

export const EcommerceContext = createContext();

const { dados } = getAllProducts()

const initialState = {
    todosProdutos: [],
    produtosBuscados: [],
    logado: false
};


const EcommerceReducer = (state, action) => {
    switch (action.type) {
        case "INIT":
            return {
                ...state,
                todosProdutos: action.payload
            }

        case "BUSCAR_PRODUTOS":
            const lowerCase = (str) => str.toLowerCase()
            const sTodosProdutos = state.todosProdutos
            let newProdutosProcurados = sTodosProdutos.filter(dado => lowerCase(dado.nome).includes(lowerCase(action.search)))

            return {
                ...state,
                produtosBuscados: newProdutosProcurados
            }

        case "VER_STATE":
            console.log(state)

            return state
    }
}

export const EcommerceContextProvider = ({ children }) => {
    const data = useReducer(EcommerceReducer, initialState);

    return <EcommerceContext.Provider value={data}>{children}</EcommerceContext.Provider>;
};