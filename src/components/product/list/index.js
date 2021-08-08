const Product = () => {
    return (
        <div className="col-12">
            <div className="row">
                <div className="col-3">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT34WE67TPdy7ESmbXQ3U_1aN8U0r4PLdSII84IMZdKTTYw2KwIXNqP0FVZkxlkvK3zUPPY-fDf&usqp=CAc" 
                    className="img-fluid" />
                </div>
                <div className="col-6">
                    <small>
                        <b>Nome do produto</b>
                    </small>
                </div>
                <div className="col-3">
                    <button className="btn btn-secundary rounded-circle">-</button>
                     </div>
            </div>
        </div>
    )
}

export default Product;