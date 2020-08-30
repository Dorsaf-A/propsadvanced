import React from "react";



const ProductTable = (props) => {
return(<React.Fragment>
  {props.prod.map((a,i)=>{
    return(<tr>
      <td>{a.name}</td>
      <td>{a.category}</td>
      <td>{a.price}</td>
    </tr>)
  })}
</React.Fragment>)
}

export default ProductTable;