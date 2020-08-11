import React from 'react';
import FirstRowItems, {Component} from './FirstRowItems';

function FirstRow() {
    return (

        <div>
                <div className="row">
                
                
                    <FirstRowItems title = "cosa loca A" price ="123" />

                    <FirstRowItems title = "cosa loca B" price ="456"/>

                    <FirstRowItems title = "cosa loca C" price ="789"/>


                </div>


        </div>



);
}


export default FirstRow;