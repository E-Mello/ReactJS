import { Switch } from "@chakra-ui/react"
import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import LandingLayout from "./components/layouts/LandingLayout"


export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <LandingLayout />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}