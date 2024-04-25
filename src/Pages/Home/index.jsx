import React, { useEffect } from "react"
import { ProductDetail } from "../../components/ProductDetail"
import { Layout } from "../../components/Layout"
import { Card } from "../../components/Card/Card"
import { API } from "../../auth/api/api"
export function Home() {
    const [items,setItems] = React.useState([])

    useEffect(() => {
        const fetchData = async () => {
           try {
            const res = await fetch(API)
            const data = await res.json()
            console.log(data)
            setItems(data)
           }
           catch (error) {
            throw new Error(error)
           }
        } 
        fetchData()
        },[])

    return (
        <Layout>
            Home
            <section className="grid gap-4 grid-cols-4 w-full max-w-screen-lg ">
            {
                items?.map((item) => (
                    <Card key={item.id} prop={item}/>
                ))
            }
            </section>
            <ProductDetail />
        </Layout>
    )
}