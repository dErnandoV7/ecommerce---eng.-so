import { useRef, useState } from "react"
import { useEcommerce } from "../Hooks/useEcommerContext"
import { uploadImageToCloudinary } from "../uploadImg"
import { createProduct } from "../db/createProduct"
import Loading from "../components/Loading"

import "./Modal.css"

const Model = ({func}) => {
  const { state, dispatch } = useEcommerce()
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState()
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [whats, setWhats] = useState("")
  const [emptyFiels, setEmptyFields] = useState(false)
  const [loading, setLoading] = useState(false)
  const ref = useRef()

  const handleNumericInput = (e, func) => {
    const value = e.target.value;
    const newValue = value.replace(/\D/g, '')

    func(newValue)
  };

  const resetInputs = () => {
    setName("")
    setWhats("")
    setEmptyFields(false)
    setDesc("")
    setCategory("")
    setPrice("")
    setFile()
  }

  const createProductFn = async (e) => {
    e.preventDefault()

    if (name && desc && file && price && category && whats) {
      setLoading(true)
      setEmptyFields(false)

      const result = await uploadImageToCloudinary(file)

      if (result.success) {
        const res = await createProduct(name, desc, price, result.url, whats, category)

        if (res.success) {
          func()
          resetInputs()
          dispatch({ type: "SET_SHOW_MODAL", showModal: false })
        } else {
          console.log("Erro ao criar o produto.")
        }

        setLoading(true)

      }
    }
    else {
      setEmptyFields(true)
      setLoading(true)
    }
    setLoading(false)
  }

  return (
    <>
      {loading && <Loading />}
      <div className="model-cadastrar-produtos">
        <div className="cadastrar-produtos">
          <h2>Cadastro de Produtos</h2>
          <p>Preencha todos os campos abaixo: </p>
          <form className="form-cadastro-produto">
            <p>Atenção: Não será possivel fazer qualquer alteração no produto após o cadastro.</p>
            <label>
              <span>Nome: </span>
              <input type="text" placeholder="Nome do produto" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              <span>Descrição: </span>
              <textarea maxLength={100} placeholder="Descrição do produto" value={desc} onChange={(e) => setDesc(e.target.value)} ></textarea>
            </label>
            <label>
              <span>Imagem do produto: </span>
              <input className="input-file"
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <label>
              <span>Valor: </span>
              <input type="text" placeholder="Valor do produto" value={price} onChange={(e) => handleNumericInput(e, setPrice)} />
            </label>
            <label>
              <span>Categoria: </span>
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value=""></option>
                <option value="Outro">Outro</option>
                <option value="Computadores">Computadores</option>
                <option value="Periféricos">Periféricos</option>
                <option value="Componentes">Componentes</option>
                <option value="Smartphones">Smartphones & Tablets</option>
              </select>
            </label>
            <label>
              <span>Whatsapp para contato: </span>
              <input type="text" placeholder="Seu Whatsapp" maxLength={11} value={whats} onChange={(e) => handleNumericInput(e, setWhats)} />
            </label>
            {emptyFiels && <p>Preencha todos os campos!</p>}
            <div className="buttons-painel">
              <button className="cancelar-cadastro-produto" onClick={() => dispatch({ type: "SET_SHOW_MODAL", showModal: false })}>Cancelar</button>
              <button className="cadastrar-produto" onClick={(e) => createProductFn(e)}>Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </>

  )
}

export default Model