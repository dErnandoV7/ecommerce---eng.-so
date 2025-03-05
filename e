[1mdiff --git a/src/components/Header.css b/src/components/Header.css[m
[1mindex b04c856..e5cc7a7 100644[m
[1m--- a/src/components/Header.css[m
[1m+++ b/src/components/Header.css[m
[36m@@ -1,4 +1,5 @@[m
 header {[m
[32m+[m[32m    position: relative;[m
     display: flex;[m
     justify-content: space-between;[m
     flex-direction: column;[m
[1mdiff --git a/src/components/Header.jsx b/src/components/Header.jsx[m
[1mindex 8929dc7..3bc59c6 100644[m
[1m--- a/src/components/Header.jsx[m
[1m+++ b/src/components/Header.jsx[m
[36m@@ -1,5 +1,6 @@[m
 import HeaderTop from './HeaderTop'[m
 import HeaderBottom from './HeaderBottom'[m
[32m+[m[32mimport SideBar from './sideBar'[m
 [m
 import './Header.css'[m
 [m
[36m@@ -8,6 +9,7 @@[m [mconst Header = () => {[m
     <header>[m
       <HeaderTop />[m
       <HeaderBottom />[m
[32m+[m[32m      <SideBar />[m
     </header>[m
   )[m
 }[m
[1mdiff --git a/src/components/HeaderTop.css b/src/components/HeaderTop.css[m
[1mindex 1e0fc84..f9f4dac 100644[m
[1m--- a/src/components/HeaderTop.css[m
[1m+++ b/src/components/HeaderTop.css[m
[36m@@ -172,7 +172,7 @@[m
     }[m
 [m
     .header-top .header-top-right .search {[m
[31m-        margin-right: 0;[m
[32m+[m[32m        margin-right: 20px;[m
     }[m
 }[m
 [m
[1mdiff --git a/src/components/HeaderTop.jsx b/src/components/HeaderTop.jsx[m
[1mindex 03d2c2a..d128c89 100644[m
[1m--- a/src/components/HeaderTop.jsx[m
[1m+++ b/src/components/HeaderTop.jsx[m
[36m@@ -1,3 +1,4 @@[m
[32m+[m
 import { useRef } from "react";[m
 import { useEcommerce } from "../Hooks/useEcommerContext"[m
 import { Link } from "react-router-dom";[m
[36m@@ -16,7 +17,7 @@[m [mconst HeaderTop = () => {[m
     return ([m
         <div className="header-top">[m
             <div className="logo">[m
[31m-                <img src="images/logo_branca.png" alt="Logo da empresa" />[m
[32m+[m[32m                <img src="images/logo_branca.png" alt="Logo da empresa" onClick={() => dispatch({ type: "VER_STATE" })} />[m
             </div>[m
             <div className="header-top-right">[m
                 <div className="search">[m
[36m@@ -39,8 +40,8 @@[m [mconst HeaderTop = () => {[m
                     (<Link to={"/login"}><button ><i className="fa-solid fa-right-to-bracket"></i> Entrar</button></Link>)[m
                     :[m
                     ([m
[31m-                        <div className="user-icon" onClick={() => handleLogOff()}>[m
[31m-                            <p>a</p>[m
[32m+[m[32m                        <div className="user-icon" onClick={() => dispatch({type: "SET_SHOW_SIDEBAR", show: true})}>[m
[32m+[m[32m                            <p>{state.user.name[0]}</p>[m
                         </div>[m
                     )}[m
 [m
[1mdiff --git a/src/components/Produtos.jsx b/src/components/Produtos.jsx[m
[1mindex ce0920d..91acfe6 100644[m
[1m--- a/src/components/Produtos.jsx[m
[1m+++ b/src/components/Produtos.jsx[m
[36m@@ -3,6 +3,7 @@[m [mimport { useEcommerce } from "../Hooks/useEcommerContext"[m
 import { getAllProducts } from "../db/getAllProducts";[m
 import Produto from "./Produto"[m
 import { checkUserLogin } from "../db/checkUserLogin";[m
[32m+[m[32mimport { fetchUserData } from "../db/fetchUserData";[m
 [m
 import "./Produtos.css"[m
 [m
[36m@@ -11,14 +12,20 @@[m [mconst Produtos = () => {[m
 [m
     const checkLogin = async () => {[m
         const result = await checkUserLogin();[m
[31m-        return result[m
[32m+[m
[32m+[m[32m        if (result.res) {[m
[32m+[m[32m            const resUser = await fetchUserData(result.user.uid)[m
[32m+[m[32m            dispatch({type: "SET_USUARIO", user: resUser})[m
[32m+[m[32m        }[m
[32m+[m[41m        [m
[32m+[m[32m        return result.res[m
     };[m
 [m
     useEffect(() => {[m
         const fetchData = async () => {[m
             const result = await checkLogin()[m
[31m-            if (result) dispatch({type: "SET_LOGADO", logado: true})[m
[31m-                [m
[32m+[m[32m            if (result) dispatch({ type: "SET_LOGADO", logado: true })[m
[32m+[m
             try {[m
                 const response = await getAllProducts();[m
                 dispatch({ type: 'INIT', payload: response.dados });[m
[1mdiff --git a/src/context/ecommerceContext.jsx b/src/context/ecommerceContext.jsx[m
[1mindex e1ef8bc..c9dd895 100644[m
[1m--- a/src/context/ecommerceContext.jsx[m
[1m+++ b/src/context/ecommerceContext.jsx[m
[36m@@ -5,7 +5,8 @@[m [mconst initialState = {[m
     todosProdutos: [],[m
     produtosBuscados: [],[m
     logado: false,[m
[31m-    user: false[m
[32m+[m[32m    user: false,[m
[32m+[m[32m    showSideBar: false[m
 };[m
 [m
 const EcommerceReducer = (state, action) => {[m
[36m@@ -32,6 +33,18 @@[m [mconst EcommerceReducer = (state, action) => {[m
                 logado: action.logado[m
             }[m
 [m
[32m+[m[32m        case "SET_USUARIO":[m
[32m+[m[32m            return {[m
[32m+[m[32m                ...state,[m
[32m+[m[32m                user: action.user[m
[32m+[m[32m            }[m
[32m+[m[41m        [m
[32m+[m[32m        case "SET_SHOW_SIDERBAR":[m
[32m+[m[32m            return {[m
[32m+[m[32m                ...state,[m
[32m+[m[32m                showSideBar: action.show[m
[32m+[m[32m            }[m
[32m+[m
         case "VER_STATE":[m
             console.log(state)[m
 [m
[1mdiff --git a/src/db/checkUserLogin.jsx b/src/db/checkUserLogin.jsx[m
[1mindex d2f0efd..c5f9ac2 100644[m
[1m--- a/src/db/checkUserLogin.jsx[m
[1m+++ b/src/db/checkUserLogin.jsx[m
[36m@@ -6,8 +6,8 @@[m [mconst auth = getAuth(app);[m
 export const checkUserLogin = async () => {[m
     return new Promise((resolve) => {[m
         onAuthStateChanged(auth, (user) => {[m
[31m-            if (user) resolve(true)[m
[31m-            else resolve(false)[m
[32m+[m[32m            if (user) resolve({res: true, user})[m
[32m+[m[32m            else resolve({res: false})[m
         });[m
     });[m
 };[m
\ No newline at end of file[m
[1mdiff --git a/src/index.css b/src/index.css[m
[1mindex e69de29..88959bc 100644[m
[1m--- a/src/index.css[m
[1m+++ b/src/index.css[m
[36m@@ -0,0 +1,3 @@[m
[32m+[m[32m*::-webkit-scrollbar {[m
[32m+[m[32m    display: none;[m
[32m+[m[32m}[m
\ No newline at end of file[m
[1mdiff --git a/src/router/Login.jsx b/src/router/Login.jsx[m
[1mindex 1b4866a..4f29e6d 100644[m
[1m--- a/src/router/Login.jsx[m
[1m+++ b/src/router/Login.jsx[m
[36m@@ -9,7 +9,6 @@[m [mimport { useEcommerce } from "../Hooks/useEcommerContext"[m
 import Loading from "../components/Loading"[m
 [m
 import "./Login.css"[m
[31m-import { faNavicon } from "@fortawesome/free-solid-svg-icons"[m
 [m
 const Login = () => {[m
     const [state, dispatch] = useEcommerce()[m
[36m@@ -38,7 +37,7 @@[m [mconst Login = () => {[m
 [m
     const checkLogin = async () => {[m
         const result = await checkUserLogin();[m
[31m-        return result[m
[32m+[m[32m        return result.res[m
     };[m
 [m
     const handleLogin = async (e) => {[m
