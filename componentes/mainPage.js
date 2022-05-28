import Link from "next/link"
import classes from "./mainPage.module.css" 
export default function MainNavigation(){
    return ( 
    <header className={classes.header}>
                <div>
             <Link href="/">Cards Aganist Humanity</Link>
                </div>
            </header>
            )
    }