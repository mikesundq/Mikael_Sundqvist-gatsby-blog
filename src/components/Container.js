import {ContainerWrapper} from "../elements"
import React from "react"

export const Container = ({children}) => {
    return (
        <ContainerWrapper>
            {children}
        </ContainerWrapper>
    )
}