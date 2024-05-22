import React, { useEffect, useState } from 'react'

export default function Api3() {

    let [data, setdata] = useState('');

    useEffect(() => {
        AllRecords();
    }, [])

    let AllRecords = async () => {
        const respond = await fetch('https://fakestoreapi.com/products')
        const second = await respond.json();
        setdata(second)
        console.log(second.category);
    }

    let handleCart=(i)=>
        {
            console.log('This is Cart');
        }
    

    return (
        <div>

            <div className='MyAllCards'>

            {
                data ?
                    data.map((e, i) => {
                        return  <div className="card p-2 m-2" style={{width:300}} key={i}>
                            <img className="card-img-top" src={e.image} alt="Card image cap"/>
                                <div className="card-body">
                                    <h4>{e.title}</h4>
                                    <p className="card-text">{e.description}</p>
                                    <h3>category : {e.category}</h3>
                                    <h5>{e.rating.rate}</h5>
                                    <h5>{e.rating.count}</h5>

                                    <div className='d-flex justify-content-between align-items-center'>
                                    <h4 style={{color:'blue'}}>{e.price+' $'}</h4>
                                    <button onClick={()=>handleCart(i)}>Add to Cart </button>
                                    </div>

                                </div>
                        </div>
                    })
                    :
                    <p>...Loading</p>
                }

                </div>
        </div>
    )
}
