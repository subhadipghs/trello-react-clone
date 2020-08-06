import React, { FunctionComponent } from 'react';
import styled, { StyledComponent, DefaultTheme } from 'styled-components';
import NavigationLinks from './NavigationLinks/NavigationLinks';
import BrandLogo from '../BrandLogo/BrandLogo';
import logo from '../../trello-clone-icon.svg';

const NavigationWrapper : StyledComponent<"nav", DefaultTheme, {}, never> = styled.nav`
	position: fixed;
	background-color: var(--primary-color);
	padding-top: 0.1rem;
	top: 0;
	left: 0;
	overflow: hidden;
	height: 4rem;
	width: 100vw;
	font-weight: 400;
	z-index: 1;
	color: var(--white-color);
	box-shadow: var(--box-shadow);
	display: flex;
	& ul {
		display: flex;
		justify-contents: center;
	}
`;


interface FlexItemStyleProps {
	bgColor ?: string,
	widthP ?: string,
	justify ?: string,
	align ?: string,
	textAlign ?: string
};


const FlexItem = styled.div<FlexItemStyleProps>`
	align-items: ${props => !props.align ? "center" : props.align };
	background-color: ${props => !props.bgColor ? "var(--primary-color)" : props.bgColor};
	width: ${props => !props.widthP ? "100%" : props.widthP} ;
	text-align: ${props => !props.textAlign ? "center" : props.textAlign};
`;


const Navigation : FunctionComponent = () => {

	const links : Array<{href: string, lable: string}> = [
		{ href: "/", lable: "Home" },
		{ href: "/about", lable : "About" }
	];

	const btnLinks : Array<{href: string, lable: string}> = [
		{ href: "/login", lable: "Login" },
		{ href: "/register", lable: "Register" }
	];
	return (
		<NavigationWrapper>
			<FlexItem 
				align="flex-start" 
				widthP="50%" 
			>
				<BrandLogo 
					imagesrc={logo}
					name="Reacrello" 
				/>
			</FlexItem>
			<FlexItem  
				align="flex-end" 
				widthP="50%"
			>
				<NavigationLinks 
					links={links}
					buttonLinks={btnLinks}
				/>
			</FlexItem>
		</NavigationWrapper>
	)
}

export default Navigation;