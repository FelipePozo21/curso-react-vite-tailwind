import React, { useState, useEffect } from "react"
import { Layout } from "../../components/Layout"
import { Card } from "../../components/Card/Card"
import { API } from "../../auth/api/api"
export function Home() {
    const [items,setItems] = React.useState([])

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setItems(data))


        },[])

    const Props = {
        id: items.id,
        title: items.title,
        image: items.image,
        category: items.category,
        price: items.price,
    }    


    return (
        <Layout>
            Home
            {
                items?.map((item) => (
                    <Card key={item.id} prop={item}/>
                ))
            }
        </Layout>
    )
}