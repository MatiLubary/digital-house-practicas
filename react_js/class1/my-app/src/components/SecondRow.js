import React from 'react';
import SecondRowItems from './SecondRowItems';

function SecondRow() {

	let categories = [
		{id: 1, name: "uno"},
		{id: 2, name: "dos"},
		{id: 3, name: "tres"},
		{id: 4, name: "cuatro"},
		{id: 5, name: "cinco"},
		{id: 6, name: "sies"}
	]


    return (

        <div>




                    <div className="row">
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style= {{width: "25rem"}} src="/images/product_dummy.svg" alt="dummy" />
									</div>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
									<a target="_blank" rel="nofollow" href="/">View product detail</a>
								</div>
							</div>
						</div>


						<div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
								</div>






								<div className="card-body">
									<div className="row">

									{ categories.map(category => <SecondRowItems key={category.id} data={category} />) }										



									</div>
								</div>









							</div>
						</div>
					</div>




        </div>




);
}


export default SecondRow;