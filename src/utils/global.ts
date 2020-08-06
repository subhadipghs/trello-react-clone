import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
		-webkit-font-smoothing: antialiased;
    	-moz-osx-font-smoothing: grayscale;
    	font-family: "Inter", serif;
    	font-weight: 400;
	}


	:root {
		--primary-color: ${props => props.theme.colors.primary};
		--secondary-color: ${props => props.theme.colors.secondary};
		--gray-color: ${props => props.theme.colors.shadowGrey};
		--danger-color: ${props => props.theme.colors.danger};
		--disable-color: ${props => props.theme.colors.disable};
		--white-color: ${props => props.theme.colors.whiteColor};
		--black-color: ${props => props.theme.colors.blackColor};
		--primary-light-text: ${props => props.theme.colors.primaryText};
		--primary-dark-text: ${props => props.theme.colors.primaryDarkText};
		--white-transparent: ${props => props.theme.colors.whiteTransparent};
		--black-transparent: ${props => props.theme.colors.blackTransparent};
		--box-shadow: ${props => props.theme.utils.boxShadow};
		--border-radius: ${props => props.theme.utils.borderRadius};
	}

	html {
		font-size: 16px;
		box-sizing: border-box;
	}

	a, button {
		text-decoration: none;
		&:hover {
			cursor: pointer;
		}
		&:active {
			text-decoration: none;
		}
		&:disabled {
			cursor: not-allowed;
		}
	}

	input, textarea {
		outline: none;
		&:focus {
			outline: none;
		}
	}
	code {
		font-family: Monaco, Consolas, Menlo, monospace; 
	}
`;

export default GlobalStyle;
