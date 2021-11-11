import React from "react";
import { Link } from 'react-router-dom'

import { Wrapper, Content, LogoImg, Menu, MenuLink } from "./Header.styles";

import img from '../../img/logo.png';

const Header = () => {
	return (
		<Wrapper>
			<Content>
				<Link to="/">
					<LogoImg src={img} alt="democrata-logo"/>

				</Link>
			<Menu>
				<Link to="/poll">

				<MenuLink>polls</MenuLink>
				
				</Link>
			</Menu>

			</Content>
		</Wrapper>
	)

}
export default Header;