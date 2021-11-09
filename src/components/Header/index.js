import React from "react";

import { Wrapper, Content, LogoImg, Menu, MenuLink } from "./Header.styles";

import img from '../../img/logo.png';

const Header = () => {
	return (
		<Wrapper>
			<Content>
				<LogoImg src={img} alt="democrata-logo"/>
			<Menu>
					<MenuLink>polls</MenuLink>
			</Menu>

			</Content>
		</Wrapper>
	)

}
export default Header;