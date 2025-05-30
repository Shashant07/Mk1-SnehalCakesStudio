import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import Message from './Message';
import { Row, Col } from 'react-bootstrap';
import Paginate from './Paginate';

import { useGetProductsQuery } from '../slices/productsApiSlice';
import Product from '../components/Product';

const AllProducts = () => {
    const { pageNumber, keyword } = useParams();

    const { data, isLoading, error } = useGetProductsQuery({
        keyword,
        pageNumber,
    });
    return (
        <>
            {isLoading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>
                    {error?.data?.message || error.error}
                </Message>
            ) : (
                <>
                    {/* <Meta /> */}
                    <h2 className="card-title" style={{ fontWeight: "bold", letterSpacing: "2px", margin: "20px 0" }}>🍰 Our Signature Cakes</h2>
                    <h6>Deliciously handcrafted for every moment that matters.</h6>
                    <Row>
                        {data.products.map((product) => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>
                    {console.log(data)}
                    <Paginate
                        pages={data.pages}
                        page={data.page}
                        keyword={keyword ? keyword : ''}
                    />
                </>
            )}
        </>
    )
}

export default AllProducts;