import axios from "axios"
import Link from "next/link"
import {useEffect,useState} from "react"
import AppLayout from "../../layouts/AppLayout"

function Restock(){
    const api = process.env.NEXT_PUBLIC_URL_API
    const [productId, setProductId] = useState(0)
    const [stock, setStock] = useState(0)
    const [data, setData] = useState([])

    useEffect(() => {
        async function Data(){
            const token = localStorage.getItem('token')
            try{
                const {data} = await axios(api+'restock', {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                setData(data)
            } catch(e){
                console.log(e.response.status);
                if(e.response.status == 401){
                    window.location.href = '/login'
                }
            }
        }
        Data()
    }, [])
    return (
        <AppLayout>
            <div className="row justify-content-ceneter">
                <div className="col-md-7">
                    <form>
                        
                    </form>
                </div>
                <div className="col-md-5">
                    <table>

                    </table>
                </div>
            </div>
        </AppLayout>
    )
}

export default Restock