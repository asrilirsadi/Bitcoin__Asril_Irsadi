import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavBar extends Component {
    
	render() {
 	return (
    	<div>
      	<center>
       	{/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2KFhvzigwmtyAUafx69Msh7ZLLNfFnIPKBoFqIZzE_N1NM7lB" style={{width:"541px", height:"100px", paddingTop:"20px"}}/> */}
       	<img src="https://en.bitcoin.it/w/images/en/e/ed/Bitcoin_accepted_here_printable.png" style={{width:"500px", height:"200px", paddingTop:"20px"}}/>
       	{/* <img src="https://cdn-images-1.medium.com/max/1600/1*pbtcVbrrPc5Z5-B1V3X_wg.gif" style={{width:"400px", height:"200px", paddingTop:"20px"}}/> */}
        
           
      	<div className="tabmenu" style={{width:"300px", marginTop:"20px", border:"10px solid black"}}>

      	{/* <ul className="nav nav-tabs" id="myTab" role="tablist">
        	<li className="nav-item">
          	<Link className="nav-link" id="home-tab" data-toggle="" to="/" role="tab" aria-controls="home" aria-selected="true">
          	Bitcoin Hari Ini</Link>
        	</li>
        	<li className="nav-item">
          	<Link className="nav-link" id="profile-tab" data-toggle=""  to="/Rupiahb" role="tab" aria-controls="profile" aria-selected="false">
          	Rupiah ke Bitcoin</Link>
        	</li>
        	<li className="nav-item">
          	<Link className="nav-link" id="profile-tab" data-toggle="" to="/Brupiah" role="tab" aria-controls="profile" aria-selected="false"> Bitcoin ke Rupiah</Link>
        	</li>
      	</ul> */}

        <ul className="nav nav-tabs" id="myTab" role="tablist">
        	<li className="nav-item">
          	<Link to="/">
          	Bitcoin Hari Ini</Link>
        	</li>
        	<li className="nav-item">
          	<Link to="/RupiahBit">
          	Rupiah ke Bitcoin</Link>
        	</li>
        	<li className="nav-item">
          	<Link to="/BitRupiah" > Bitcoin ke Rupiah</Link>
        	</li>
      	</ul>
      	</div>

       	</center>
    	</div>
    	);
   	}
 	}
    

export default NavBar;
