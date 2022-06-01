import Link from "next/link"
import classes from "./logo.module.css" 
export default function MainNavigation(){
    return ( 
    <header className={classes.header}>
             <nav>
             <Link href="/" >Cards4All</Link>
                </nav>
            </header>
            )
    }