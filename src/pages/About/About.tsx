import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
	margin-top: 5rem;
	text-align: center;
`;

const About : FunctionComponent<{}> = props => {
	return (
		<AboutWrapper>
			About Page ⚡
		</AboutWrapper>
	)
}
export default About;