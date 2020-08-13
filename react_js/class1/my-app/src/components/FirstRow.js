import React from 'react';
import FirstRowItems, {Component} from './FirstRowItems';

function FirstRow() {
    return (

        <div>
                <div className="row">
                
                
                    <FirstRowItems color = "primary" icon = "clipboard-list" title = "Products in database" price ="123" />

                    <FirstRowItems color = "success" icon = "dollar-sign" title = "Amount in products" price ="$546.456"/>

                    <FirstRowItems color = "warning" icon = "user-check" title = "Users quantity" price ="38"/>


                </div>


        </div>



);
}


export default FirstRow;