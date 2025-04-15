import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
import { Container } from 'react-bootstrap';
// import Paginate from '../components/Paginate';

// import { useGetProductsQuery } from '../slices/productsApiSlice';
// import Product from '../components/Product';
// import ProductCarousel from '../components/ProductCarousel';
import AllProducts from '../components/AllProducts';


const AllProductsScreen = () => {

    // const { pageNumber, keyword } = useParams();

    // const { data, isLoading, error } = useGetProductsQuery({
    //     keyword,
    //     pageNumber,
    // });
    return (
        <Container>
            <AllProducts />
        </Container>

    )
}


export default AllProductsScreen