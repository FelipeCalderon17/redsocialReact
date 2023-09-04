import React from 'react';
import "./Profile.css"

const Information = () => {
    return (<>
    <div className="col-sm-4">
<div className="card-box tilebox-one"><i className="icon-layers float-right text-muted"></i>
<h6 className="text-muted text-uppercase mt-0">Orders</h6>
<h2 className data-plugin="counterup">1,587</h2><span className="badge badge-custom">+11% </span><span className="text-muted">From previous period</span></div>
</div>

<div className="col-sm-4">
<div className="card-box tilebox-one"><i className="icon-paypal float-right text-muted"></i>
<h6 className="text-muted text-uppercase mt-0">Revenue</h6>
<h2 className>$<span data-plugin="counterup">46,782</span></h2><span className="badge badge-danger">-29% </span><span className="text-muted">From previous period</span></div>
</div>

<div className="col-sm-4">
<div className="card-box tilebox-one"><i className="icon-rocket float-right text-muted"></i>
<h6 className="text-muted text-uppercase mt-0">Product Sold</h6>
<h2 className data-plugin="counterup">1,890</h2><span className="badge badge-custom">+89% </span><span className="text-muted">Last year</span></div>
</div>
    </>  );
}
 
export default Information;