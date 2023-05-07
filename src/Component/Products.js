import React, { useCallback, useEffect, useState } from 'react';
import Skeleton from "react-loading-skeleton";
import { Link } from 'react-router-dom';


const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let ComponentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (ComponentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }

            return () => {
                ComponentMounted = false;
            }
        }
        getProducts();
    }, [])


    const Loading = () => {
        return (
            <>
                <div className='col-md-3'>
                    <Skeleton height={350}/>
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350}/>
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350}/>
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350}/>
                </div>
            </>
        )
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x)=>x.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='buttons d-flex justify-content-center mb-3'>
                                <button className='btn btn-outline-dark mx-2' onClick={()=>setFilter(data)}>All</button>
                                <button className='btn btn-outline-dark mx-2' onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                                <button className='btn btn-outline-dark mx-2' onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                                <button className='btn btn-outline-dark mx-2' onClick={()=>filterProduct("jewelery")}>Jewelery Clothing</button>
                                <button className='btn btn-outline-dark mx-2' onClick={()=>filterProduct("electronics")}>Electronic Clothing</button>
                            </div>
                        </div>
                    </div>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className='col-md-3 mb-4'>
                                <div className="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} className="card-img-top" alt={product.title} height="200px" />
                                    <div class="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                                        <p className="card-text">
                                            ${product.price}
                                        </p>
                                        <Link to={'/products/${product.id}'} className="btn btn-outline-dark">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )

    }

    return (
        <div>
            <div>
                <div className='container my-5 py-5'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1 className='dispaly-6 fw-bolder text-center'>Latest Products </h1>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}

export default Products