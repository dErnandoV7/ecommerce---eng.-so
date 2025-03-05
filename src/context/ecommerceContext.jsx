import { createContext, useReducer } from "react";
export const EcommerceContext = createContext();

const initialState = {
    todosProdutos: [],
    produtosBuscados: [],
    logado: false,
    user: false,
    showSideBar: false
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

        case "SET_LOGADO":
            return {
                ...state,
                logado: action.logado
            }

        case "SET_USUARIO":
            return {
                ...state,
                user: action.user
            }
        case "SET_SHOW_SIDEBAR":

            return {
                ...state,
                showSideBar: action.show
            }
        case "VER_STATE":
            console.log(state)

            return state
    }
}

export const EcommerceContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(EcommerceReducer, initialState);

    return (
        <EcommerceContext.Provider value={{ state, dispatch }}>
            {children}
        </EcommerceContext.Provider>
    );
};