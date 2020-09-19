import {ContainerWrapper} from "../elements"
import React from "react"
import { Nav, Footer } from "../components"

export const Container = ({children}) => {
    return (
        <ContainerWrapper>
            <Nav/>
            {children}
            <Footer/>
        </ContainerWrapper>
    )
}