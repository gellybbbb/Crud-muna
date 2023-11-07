
import {IProduct} from "./Product.type";

type Props={
    list:IProduct[];
};
const ProductList=(props:Props)=>{
    const {list}=props;


    return(
    <div>

<table>
  <tr>
    <th>Name</th>
    <th>Unit Price</th>
    <th>Total Price</th>
    <th>Created Date</th>
    <th>Actions</th>
  </tr>
  {list.map(product=>{
    console.log(product)
    return (
  <tr key={product.id}>
    
  <td>{`${product.name}`}</td>
  <td>{`${product.price}`}</td>
  <td>Total Price</td>
  <td></td>
  <td></td>
  <td>
    <div>
      <input type="button" value="Edit"/>
      <input type="button" value="View"/>
    </div>
  </td>
  
  </tr>
    );
  })}
  
</table>
    </div>
)
}
export default ProductList;