import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import StyledLink from './StyledLink'
interface LinkProp {
	href : string,
	lable : string,
	exact ?: boolean
}

interface NavigationLinksProps {
	links : Array<LinkProp>,
	buttonLinks?: Array<LinkProp>,
	exactRoute ?: boolean
}

const UnorderedList = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	list-style-type: none;
	margin: 0 auto;
	height: 100%;
	& li {
		padding: 1rem;
	}
`;

const NavigationLinks : FunctionComponent<NavigationLinksProps> = ({ 
	links, 
	buttonLinks, 
	exactRoute 
}) => {

	return (
		<UnorderedList>
			{links && (
				links.map(({href, lable}) => {
					return (
						<StyledLink to={href} lable={lable} onExact={true}/>
					)
				})
			)}
			
		</UnorderedList>
	);
}
export default NavigationLinks;