import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
	text-align: center;
	margin-top: 5rem;
	color: black;
`;

const Home : React.FC<{}> = props => {
	return (
		<HomeWrapper>This is home page 🌎</HomeWrapper>
	);
}

export default Home;