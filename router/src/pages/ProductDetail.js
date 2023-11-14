import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
    const params = useParams()
    
    return (
        <Fragment>
            <h1>Prodcut Details!</h1>
            <p>{params.productId}</p>
            <p><Link to=".." relative="path">Back</Link></p>
        </Fragment>

    );
};

export default ProductDetail;