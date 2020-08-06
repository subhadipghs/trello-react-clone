import React from 'react';
import { useRouteMatch, Link, match } from 'react-router-dom';
import styled from 'styled-components';

type StyledLinkProps = {
	to : string,
	lable: string,
	onExact ?: boolean
};

type LinkProps = {
	matched : match<{}> | null
}


const BetterLink = styled(Link)<LinkProps>`
	text-transform: capitalize;
	color: var(--white);
	height: 100%;
	background-color: var(--white);
	padding: 1.3em 1.3rem 0 1.3rem;
	border-bottom: ${props => props.matched ? "0.2rem solid var(--white-color)" : ""};
	&:hover {
		background-color: var(--black-color);
	}
`;


const StyledLink : React.FC<StyledLinkProps> = ({to, lable, onExact}) => {
	const matched : match<{}> | null = useRouteMatch({
		path: to,
		exact: onExact
	});
	return (
		<BetterLink to={to} matched={matched}>
			{lable}
		</BetterLink>
	);
}

export default StyledLink;