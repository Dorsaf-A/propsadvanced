import React from "react";
import PropTypes from 'prop-types';


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

ProductTable.PropTypes = {
    prod : PropTypes.array
}

export default ProductTable;