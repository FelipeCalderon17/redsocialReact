import React from 'react';
import "./Profile.css"

const Aditionals = () => {
    return ( <>
    <div className="card-box">
<h4 className="header-title mb-3">My Projects</h4>
<div className="table-responsive">
<table className="table">
<thead>
<tr>
<th>#</th>
<th>Project Name</th>
<th>Start Date</th>
<th>Due Date</th>
<th>Status</th>
<th>Assign</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>Adminox Admin</td>
<td>01/01/2015</td>
<td>07/05/2015</td>
<td><span className="label label-info">Work in Progress</span></td>
<td>Coderthemes</td>
</tr>
<tr>
<td>2</td>
<td>Adminox Frontend</td>
<td>01/01/2015</td>
<td>07/05/2015</td>
<td><span className="label label-success">Pending</span></td>
<td>Coderthemes</td>
</tr>
<tr>
<td>3</td>
<td>Adminox Admin</td>
<td>01/01/2015</td>
<td>07/05/2015</td>
<td><span className="label label-pink">Done</span></td>
<td>Coderthemes</td>
</tr>
<tr>
<td>4</td>
<td>Adminox Frontend</td>
<td>01/01/2015</td>
<td>07/05/2015</td>
<td><span className="label label-purple">Work in Progress</span></td>
<td>Coderthemes</td>
</tr>
<tr>
<td>5</td>
<td>Adminox Admin</td>
<td>01/01/2015</td>
<td>07/05/2015</td>
<td><span className="label label-warning">Coming soon</span></td>
<td>Coderthemes</td>
</tr>
</tbody>
</table>
</div>
</div>
    </> );
}
 
export default Aditionals;