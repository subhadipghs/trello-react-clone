import React, { FunctionComponent } from 'react';
import styled from 'styled-components'

interface BrandLogoProps {
	readonly imagesrc ?: string,
	readonly name ?: string
};
const LogoWrapper = styled.div`
	font-weight: 400;
	padding: 0.4rem 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
	& img {
		width: 3rem;
		height: 3rem;
	}
	.logo {
		font-weight: 600;
	}
`;

const BrandLogo : FunctionComponent<BrandLogoProps> = ({ imagesrc, name }) => {

	const logo = imagesrc !== undefined ? (
			<img src={imagesrc} alt={name} />
	) :	(
		<></>
	);

	return (
		<LogoWrapper>
			{logo}
			<div className="logo">{name}</div>
		</LogoWrapper>
	);
}

export default BrandLogo;