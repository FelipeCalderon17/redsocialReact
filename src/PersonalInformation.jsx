import React from 'react';
import "./Profile.css"

const PersonalInformation = () => {
    return ( <>
    <div className="card-body p-2" style={{backgroundColor:"white",borderRadius:"15px"}}>
<h4 className="header-title mt-0">Personal Information</h4>
<div className="panel-body">
<p className="text-muted font-13">Hye, I’m Johnathan Doe residing in this beautiful world. I create websites and mobile apps with great UX and UI design. I have done work with big companies like Nokia, Google and Yahoo. Meet me or Contact me for any queries. One Extra line for filling space. Fill as many you want.</p>
<hr/>
<div className="text-left">
<p className="text-muted font-13"><strong>Full Name :</strong> <span className="m-l-15">Johnathan Deo</span></p>
<p className="text-muted font-13"><strong>Mobile :</strong><span className="m-l-15">(+12) 123 1234 567</span></p>
<p className="text-muted font-13"><strong>Email :</strong> <span className="m-l-15"><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="ddbeb2b9b8afa9b5b8b0b8ae9dbab0bcb4b1f3beb2b0">[email&#160;protected]</a></span></p>
<p className="text-muted font-13"><strong>Location :</strong> <span className="m-l-15">USA</span></p>
<p className="text-muted font-13"><strong>Languages :</strong> <span className="m-l-5"><span className="flag-icon flag-icon-us m-r-5 m-t-0" title="us"></span> <span>English</span> </span><span className="m-l-5"><span className="flag-icon flag-icon-de m-r-5" title="de"></span> <span>German</span> </span><span className="m-l-5"><span className="flag-icon flag-icon-es m-r-5" title="es"></span> <span>Spanish</span> </span><span className="m-l-5"><span className="flag-icon flag-icon-fr m-r-5" title="fr"></span> <span>French</span></span>
</p>
</div>
<ul className="social-links list-inline mt-4 mb-0">
<li className="list-inline-item"><a title data-placement="top" data-toggle="tooltip" className="tooltips" href data-original-title="Facebook"><i className="fa fa-facebook"></i></a></li>
<li className="list-inline-item"><a title data-placement="top" data-toggle="tooltip" className="tooltips" href data-original-title="Twitter"><i className="fa fa-twitter"></i></a></li>
<li className="list-inline-item"><a title data-placement="top" data-toggle="tooltip" className="tooltips" href data-original-title="Skype"><i className="fa fa-skype"></i></a></li>
</ul>
</div>
</div>
    </> );
}
 
export default PersonalInformation;