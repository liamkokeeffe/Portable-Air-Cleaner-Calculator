import {Header} from "./Header/Header.js"

export function Layout({children}) {
    return (
        <div>
            <Header />
            <div>
                {children}
            </div>
            {/* <Footer /> */}
        </div>
    )
}