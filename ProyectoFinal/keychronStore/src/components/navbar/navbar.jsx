import React from 'react';

const Navbar = () => {
	return (
		<nav class='navbar navbar-expand-lg navbar-light bg-light'>
			<div class='container-fluid'>
				<img
					src='src\assets\keychron-Icon.png'
					width={40}
					alt='Icon'
					style={{ margin: '0.2rem' }}
				/>
				<a class='navbar-brand' href='/'>
					Keychron Store
				</a>
				<div class='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul class='navbar-nav me-auto mb-2 mb-lg-0'>
						<li class='nav-item'>
							<a class='nav-link active' aria-current='page' href='#'>
								Home
							</a>
						</li>
						<li class='nav-item'>
							<a class='nav-link' href='#'>
								Store
							</a>
						</li>
						<li class='nav-item dropdown'>
							<a
								class='nav-link dropdown-toggle'
								href='#'
								id='navbarDropdown'
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								Categories
							</a>
							<ul
								class='dropdown-menu'
								aria-labelledby='navbarDropdown'>
								<li>
									<a class='dropdown-item' href='#'>
										keyboards
									</a>
								</li>
								<li>
									<a class='dropdown-item' href='#'>
										Mouses
									</a>
								</li>
								<li>
									<a class='dropdown-item' href='#'>
										All Products
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
