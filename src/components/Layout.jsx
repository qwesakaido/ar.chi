import { Header } from "./Header"
import { Main } from "./Main"
import { Footer } from "./Footer"
import { Outlet } from "react-router-dom"

export function Layout() {
    return (
        <div>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </div>
    )
}