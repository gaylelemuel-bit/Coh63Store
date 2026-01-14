
import React, { useState } from 'react';

function Admin() {
    // 1. State Declarations
    const [couponCode, setCouponCode] = useState('');
    const [productTitle, setTitle] = useState('');
    const [productCategory, setCategory] = useState('');
    const [productImage, setImage] = useState('');
    const [productPrice, setPrice] = useState('');
    const [couponDiscount, setCouponDiscount] = useState(0);
    const [coupons, setCoupons] = useState([]);
    const [items, setItems] = useState([]); // Added missing items state

    // 2. Logic Functions (Now inside the Admin component scope)
    function addProduct() {
        const newProduct = {
            title: productTitle,
            category: productCategory,
            image: productImage,
            price: productPrice
        };

        setItems([...items, newProduct]); // Use setItems, not newItem
        
        // Clear fields
        setTitle('');
        setCategory('');
        setImage('');
        setPrice('');
    }

    function saveCoupon() {
        const newCoupon = {
            code: couponCode,
            discount: couponDiscount
        };

        setCoupons([...coupons, newCoupon]);
        setCouponCode('');
        setCouponDiscount(0);
    }

    // 3. Return Block
    return (
        <div className="container py-4">
            <h1>Store Admin Page</h1>
            <div className='d-flex gap-4'>
                <section className='w-50'>
                    <h3>Add Products</h3>
                    <div className="border bg-white p-4">
                        <div className='mb-4'>
                            <label className='form-label'>Title</label>
                            <input className='form-control' type='text' value={productTitle} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className='mb-4'>
                            <label className='form-label'>Category:</label>
                            <input className='form-control' type='text' value={productCategory} onChange={(e) => setCategory(e.target.value)} />
                        </div>
                        <div className='mb-4'>
                            <label className='form-label'>Image (URL)</label>
                            <input className='form-control' type='text' value={productImage} onChange={(e) => setImage(e.target.value)} />
                        </div>
                        <div className='mb-4'>
                            <label className='form-label'>Price</label>
                            <input className='form-control' type='number' placeholder='0.00' value={productPrice} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        <button className='btn btn-primary mt-2' onClick={addProduct}>Add Product</button>
                    </div>

                    <div className="mt-4">
                        <h5>Product List</h5>
                        {items.length === 0 ? <p>No products listed</p> : 
                            items.map((prod, index) => (
                                <div className="card h-50 border-0 rounded-4 bg-info-subtle mb-3 p-1" style={{ width: '20rem' }} key={index}>
                                    <h5 className="card-title mb-0 text-end">{prod.category}</h5>
                                    <img src={prod.image} className="card-img-top-cover rounded-top-4" alt={prod.category} />
                                    <div className="card-body m-2 d-flex align-items-center flex-row justify-content-between mb-1 ">
                                        <h5 className="card-title fs-4">{prod.title}</h5>
                                        <p className="card-text fw-bold fs-3 align-item-end text-danger">${prod.price}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>

                <section className='w-50'>
                    <h3>Add Coupons</h3>
                    <div className="border bg-white p-4">
                        <div className='mb-4'>
                            <label className='form-label'>Code:</label>
                            <input className='form-control' type='text' value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
                        </div>
                        <div className='mb-4'>
                            <label className='form-label'>Discount %:</label>
                            <input className='form-control' type='number' value={couponDiscount} onChange={(e) => setCouponDiscount(e.target.value)} />
                        </div>
                        <button className='btn btn-primary mt-2' onClick={saveCoupon}>Save Coupon</button>
                    </div>
                    <div className="mt-4">
                        <h5>Coupons List</h5>
                        <ul className="list-group">
                            {coupons.length === 0 ? <p>No coupons listed</p> : 
                                coupons.map((c, index) => (
                                    <li key={index} className="list-group-item">{c.code} - {c.discount}% Off</li>
                                ))
                            }
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Admin;
