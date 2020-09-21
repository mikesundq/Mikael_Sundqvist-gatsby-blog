import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"
import { MDXProvider } from "@mdx-js/react"
import { Table } from "./src/components"

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body, html {
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
        background-color: ${porps => porps.theme.colors.light1};
    }

`
const components = {
    table: Table
}


export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>
        <ThemeProvider theme={Theme}>
            <GlobalStyles/>
            {element}
        </ThemeProvider>
    </MDXProvider>
)