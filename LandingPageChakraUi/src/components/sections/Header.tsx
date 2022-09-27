import React from "react"
import { Link } from "react-router-dom"
import { Box, Flex, Text, Button, Stack, FlexProps, OmitCommonProps } from "@chakra-ui/react"
import Logo from "../ui/Logo"

import { CloseIcon, MenuIcon } from ".../Icons"

const MenuItems = (props: { [x: string]: any; children: any; isLast: any; to?: "/" | undefined }) => {
    const { children, isLast, to = "/", ...rest } = props
    return (
        <Text
            mb={{ base: isLast ? 0 : 8, sm: 0 }}
            mr={{ base: 0, sm: isLast ? 0 : 8 }}
            display="block"
            {...rest}
        >
            <Link to={to}>{children}</Link>
        </Text>
    )
}

const Header = (props: JSX.IntrinsicAttributes & OmitCommonProps<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof FlexProps> & FlexProps & { as?: "div" | undefined }) => {
    const [show, setShow] = React.useState(false)
    const toggleMenu = () => setShow(!show)

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={8}
            bg={["primary.500", "primary.500", "transparent", "transparent"]}
            color={["white", "white", "primary.700", "primary.700"]}
            {...props}
        >
            <Flex align="center">
                <Logo
                    w="100px"
                    color={["white", "white", "primary.500", "primary.500"]}
                />
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
                {show ? <CloseIcon /> : <MenuIcon />}
            </Box>

            <Box
                display={{ base: show ? "block" : "none", md: "block" }}
                flexBasis={{ base: "100%", md: "auto" }}
            >
                <Flex
                    align={["center", "center", "center", "center"]}
                    justify={["center", "space-between", "flex-end", "flex-end"]}
                    direction={["column", "row", "row", "row"]}
                    pt={[4, 4, 0, 0]}
                >
                    <MenuItems to="/">Home</MenuItems>
                    <MenuItems to="/how">How It works </MenuItems>
                    <MenuItems to="/faetures">Features </MenuItems>
                    <MenuItems to="/pricing">Pricing </MenuItems>
                    <MenuItems to="/signup" isLast>
                        <Button
                            size="sm"
                            rounded="md"
                            color={["primary.500", "primary.500", "white", "white"]}
                            bg={["white", "white", "primary.500", "primary.500"]}
                            _hover={{
                                bg: [
                                    "primary.100",
                                    "primary.100",
                                    "primary.600",
                                    "primary.600",
                                ],
                            }}
                        >
                            Create Account
                        </Button>
                    </MenuItems>
                </Flex>
            </Box>
        </Flex>
    )
}

export default Header