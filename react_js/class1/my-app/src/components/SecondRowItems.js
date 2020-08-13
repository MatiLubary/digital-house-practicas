import React, {Component} from 'react';
import PropTypes from 'prop-types';


function SecondRowItems(props) {
    return (



        <div className="col-lg-6 mb-4">
            <div className="card bg-info text-white shadow">
                <div className="card-body">
                    {props.data.name}
                </div>
            </div>
        </div>
);
}

SecondRowItems.propTypes = {
    data : PropTypes.object
}


export default SecondRowItems;