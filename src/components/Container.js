import {ContainerWrapper} from "../elements"
import React from "react"
import { Nav } from "../components"

export const Container = ({children}) => {
    return (
        <ContainerWrapper>
            <Nav/>
            {children}
        </ContainerWrapper>
    )
}