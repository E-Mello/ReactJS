import React from "react"
import { Flex, FlexProps, OmitCommonProps } from "@chakra-ui/react"
import { Header } from "../sections/Header"
import { Footer } from "../sections/Footer" // will add this in the part 2

export default function LandingLayout(props: JSX.IntrinsicAttributes & OmitCommonProps<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof FlexProps> & FlexProps & { as?: "div" | undefined }) {
    return (
        <Flex
            direction="column"
            align="center"
            maxW={{ xl: "1200px" }}
            m="0 auto"
            {...props}
        >
            <Header />
            {props.children}
            <Footer />
        </Flex>
    )
}