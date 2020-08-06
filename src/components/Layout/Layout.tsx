import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../Navigation/Navigation';


interface LayoutProps {
	children ?: React.ReactNode
};

interface MainWrapperProps {
	readonly background ?: string
};


const MainWrapper = styled.div<MainWrapperProps>`
	width: 100%;
	height: calc(100vh - 4rem);
	background-color: ${props => props.background || props.theme.colors.whiteColor};
`;


const Layout : React.FC<LayoutProps> = (props) => {
	return (
		<Router>
			<Navigation/>
			<MainWrapper>
				{props.children}
			</MainWrapper>
		</Router>
	);
}

export default Layout;