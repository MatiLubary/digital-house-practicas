import React, {Component} from 'react';
/* import PropTypes from 'prop-types'; */


function ThirdRowItems(props) {
    return (

        
            
        <>
            <tr>
                <td>{props.data.name}</td>
                <td>{props.data.description}</td>
                <td>{props.data.price}</td>
                <td>
                    <ul>
                        <li>{props.data.categories.cat1}</li>
                        <li>{props.data.categories.cat2}</li>
                        <li>{props.data.categories.cat3}</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li><span className="text-danger">{props.data.colors.color1}</span></li>
                        <li><span className="text-primary">{props.data.colors.color2}</span></li>
                        <li><span className="text-success">{props.data.colors.color3}</span></li>
                    </ul>
                </td>
                <td>{props.data.stock}</td>
            </tr>
                    


        </>
);
}

/* ThirdRowItems.propTypes = {
    title : PropTypes.string.isRequired,
    color : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired,
    icon : PropTypes.oneOf(["clipboard-list", "dollar-sign", "user-check"])

} */



export default ThirdRowItems;