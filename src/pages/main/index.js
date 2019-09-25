import React, { Component } from 'react'
import api from '../../services/api'
import './main.css'
import { Link } from 'react-router-dom'

export default class Main extends Component
{
    state = {

        products: [],
        info: {},
        page: 1
    }

    componentDidMount ()
    {
        this.loadProducts ()
    }

    loadProducts = async (page = 1) => {

        const response  = await api.get ('/products/?page=' + page)

        const { docs, ...productInfo } = response.data

        this.setState ({ products: docs, info: productInfo, page })
    }

    prevPage = () => {

        const { page } = this.state

        if (page ===1) return ;

        const pageNumber = page -1

        this.loadProducts (pageNumber)
    }

    nextPage = () => {

        const { page, info } = this.state

        if (page === info.pages) return ;

        const pageNumber = page + 1

        this.loadProducts (pageNumber)
    }

    render ()
    {
        const { products, page, info } = this.state

        return (<div className="product-list">

            {products.map (item => <div className="product-card" key={item._id}>

                <strong> {item.title} </strong>

                <p>{item.description}</p>

                <nav>
                    <Link to={ `/products/${item._id}` }>more</Link>
                </nav>

            </div> )}

            <div className="actions">
                <button disabled={page === 1} onClick={this.prevPage}>prev</button>
                <button disabled={ page === info.pages } onClick={this.nextPage}>next</button>
            </div>
        </div>)
    }
}