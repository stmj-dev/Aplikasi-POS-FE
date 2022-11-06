import AppLayout from "../../layouts/AppLayout";
import {useEffect, useState} from "react";
import axios from "axios";

function product(){
    const api = process.env.NEXT_PUBLIC_URL_API
    const [product, setProduct] = useState([])
    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const [category, setCategory] = useState([])
    const [categoryId, setCategoryId] = useState(0)
    
    // Load Product
    useEffect(() => {
        async function barang(){
            try {
                const {data} = await axios(api+'barang')
                const res = data.data
                setProduct(res.data)
                setCategory(data.categories)
            } catch (e) {
                console.log(e)
            }
        }
        barang(r => r)
    }, [])

    function idChange(e){
        setId(e.target.value)
    }

    function nameChange(e){
        // console.log(e.target.value);
        setName(e.target.value)
    }

    function category_id(e){
        setCategoryId(e.target.value)
    }

    function priceChange(e){
        setPrice(e.target.value)
    }

    function stockChange(e){
        setStock(e.target.value)
    }

    function deleteProduct({res}){
        async function deleteItems(){
            await axios.delete(api+'barang/'+res.id)
                .then(function (res){
                    alert(res.data.message)
                    async function afterDelete(){
                        try {
                            const {data} = await axios(api+'barang')
                            const res = data.data
                            setProduct(res.data)
                            setCategory(data.categories)
                        } catch (e) {
                            console.log(e)
                        }
                    }
                    afterDelete(r => r)
                })
        }
        deleteItems(r => r)
    }

    function submitForm(e){
        e.preventDefault()
        async function Kirim(){
            await axios.post(api+'barang', {
                    id: id,
                    name: name,
                    category_id: categoryId,
                    price: price,
                    stock: stock
            })
                .then(function (res){
                    alert(res.data.message)
                    async function reRender(){
                        try {
                            const {data} = await axios(api+'barang')
                            const res = data.data
                            setProduct(res.data)
                            setCategory(data.categories)
                        } catch (e) {
                            console.log(e)
                        }
                    }
                    reRender(r => r)
                })
                .catch(function (error){
                    console.log(error.response.data.message)
                })
        }
        Kirim(r => r)
    }



    return (
        <div>
            <AppLayout>
                <div className="row justify-content-center">
                    <div className="col-md-5 mt-3">
                        <form>
                            <input className="form-control mb-3" type="number" onChange={(e) => idChange(e)}  placeholder="ID Barang"
                                   aria-label="default input example" />
                            <input className="form-control mb-3" type="text" onChange={(e) => nameChange(e)}  placeholder="Nama Barang"
                                   aria-label="default input example" />
                            <select className={"w-100 mb-3 form-control"} onChange={(e) => category_id(e)}>
                                <option>Select one</option>
                                {category.map((res, i) => (
                                    <option value={res.id} key={i}>{res.name}</option>
                                ))}
                            </select>
                            <input className="form-control mb-3" type="number" onChange={(e) => priceChange(e)} placeholder="Harga"
                                                               aria-label="default input example" />
                            <input className="form-control mb-3" type="number" onChange={(e) => stockChange(e)} placeholder="Stock"
                                                               aria-label="default input example" />

                            <button className={"btn btn-success"} onClick={submitForm}>Kirim</button>
                        </form>
                    </div>
                    <div className="col-md-7">
                        <table className={"table"}>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama Barang</th>
                                    <th>Harga</th>
                                    <th>Stock</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.map((res, i) => (
                                    <tr key={i}>
                                        <td>{res.id}</td>
                                        <td>{res.name}</td>
                                        <td>{res.price}</td>
                                        <td>{res.stock}</td>
                                        <td>
                                                <button className={"btn btn-sm btn-danger"} onClick={() => deleteProduct({
                                                    res
                                                })}>Hapus</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </AppLayout>
        </div>
    )
}

export default product