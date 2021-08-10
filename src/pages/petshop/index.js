import Header from '../../components/header'

const Petshop = () => {
    return(
        <div classname="h-100">
           <Header/> 
           <div classname="container">
               <div classname='row'>
                <div classname="col-2">
                    <img 
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtvoQJPo-1ssaXFLokuZtzwW5xshwl5JsOi_fAG6M8-Sr14Hv7YvL6BFNYHWDzs2lAcao&usqp=CAU' 
                    classname="img-fluid"/>
                    <b>Petlove</b>
                    <div classname="petshop-infos">
                        <span classname="mdi mdi-home"></span>
                        <text>
                            <b>3,7</b>
                        </text>
                    </div>
                </div>
                <div classname="products col-10">

                </div>
                

               </div>
           </div>
        </div>
    )

}

export default Petshop