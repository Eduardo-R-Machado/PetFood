import './styles.css';

const Product = () => {
    return (
        <div className="product-list col-12">
            <div className="row">
                <div className="col-5">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT34WE67TPdy7ESmbXQ3U_1aN8U0r4PLdSII84IMZdKTTYw2KwIXNqP0FVZkxlkvK3zUPPY-fDf&usqp=CAc" 
                    className="img-fluid" />
                </div>
                <div className="col-6">
                    <h6>
                        <label className="badge badge-primary">
                            R$30,00
                        </label>
                    </h6>
                    <small>
                        <b>Nome do produto</b>
                    </small>
                    <button className="btn btn-secondary rounded-circle">-</button>
                </div>
                <div className="col-3">
                   
                     </div>
            </div>
        </div>
    )
}

export default Product;