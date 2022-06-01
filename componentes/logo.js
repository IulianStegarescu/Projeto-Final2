import Link from "next/link"
import classes from "./logo.module.css"
export default function MainNavigation() {
    return (
        <header>
            <nav className={classes.header}>
                <div >
                    <a href="/" >
                        <img className={classes.logo} src="../logo.svg" alt="logo" />
                    </a>
                </div>
            </nav>
        </header>
    )
}