import styled from 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			primary : string,
			secondary ?: string,
			danger : string,
			shadowGrey ?: string,
			disable ?: string,
			primaryText ?: string,
			primaryDarkText ?: string,
			whiteColor : string,
			blackColor: string,
			whiteTransparent ?: string,
			blackTransparent ?: string,
		},
		utils: {
			boxShadow ?: string,
			borderRadius ?: string
		}
	}
}