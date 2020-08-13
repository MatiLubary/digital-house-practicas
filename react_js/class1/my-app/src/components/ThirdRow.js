import React from 'react';
import ThirdRowItems, {Component} from './ThirdRowItems';

function ThirdRow() {

    let items = [
		{id: 1, name: "Tiger Nixon", description: "System Architect", price: "$320,800", categories: {cat1: "Category 01", cat2: "Category 02", cat3: "Category 03"}, colors: {color1: "Red", color2: "Blue", color3: "Green"}, stock: 245},
		{id: 2, name: "Jane Doe", description: "Fullstack developer", price: "$320,801", categories: {cat1: "Category 01", cat2: "Category 02", cat3: "Category 03"}, colors: {color1: "Red", color2: "Blue", color3: "Green"}, stock: 245}
	]

    return (

        <div>

<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
									<thead>
										<tr>
											<th>Name</th>
											<th>Description</th>
											<th>Price</th>
											<th>Categories</th>
											<th>Colors</th>
											<th>Stock</th>
										</tr>
									</thead>
									<tfoot>
										<tr>
											<th>Name</th>
											<th>Description</th>
											<th>Price</th>
											<th>Categories</th>
											<th>Colors</th>
											<th>Stock</th>
										</tr>
									</tfoot>
									<tbody>
										

                                    { items.map(item => <ThirdRowItems key={item.id} data={item} />) }



									</tbody>
								</table>
							</div>
						</div>
					</div>


        </div>



);
}


export default ThirdRow;