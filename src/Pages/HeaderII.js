import React from "react";
import "./head.css";
import identity from "../../src/identity.png";


function HeaderII(props) {
	return (
		<div className="headerOne">
			<div className=" header-nav">
				<img src={identity} alt="identity" />
				<h3>Forms</h3>
			</div>
			<div className="center">
				<nav>
					<ul className="profile-link">
						<li onClick={()=>props.goToNextPage(1)}>
							<a>Overview</a>
						</li>
						<li onClick={()=>props.goToNextPage(2)}>
							<a>Questions</a>
						</li>
						<li onClick={()=>props.goToNextPage(3)}>
							<a>Preview Form</a>
						</li>
						<li onClick={()=>props.goToNextPage(4)}>
							<a>ShareForm</a>
						</li>
						<li onClick={()=>props.goToNextPage(5)}>
							<a>Veiw Results</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default HeaderII;
