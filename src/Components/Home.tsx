import {useState} from 'react'

import {IProduct,dummyProductList,PageEnum} from "./Product.type";
import ProductList from './ProductList';
import AddProduct from './AddProduct';

const Home=()=>{


    const[productList,setProductList]=useState(
        dummyProductList as IProduct[],
    );

    const [shownPage,setShownPage]=useState(PageEnum.list)

    const onAddProductClickHnd=()=>{
        setShownPage(PageEnum.add)
    };
    return(
        <>
        <section> 
            {shownPage===PageEnum.list && (
                <> 
            <input type='button' value="Add Product"  onClick={onAddProductClickHnd}/>
            <ProductList list={productList}/>
            </>
            )}
            {shownPage===PageEnum.add &&<AddProduct/>}
            
        </section>
      </>
    );
};
export default Home;