import Link from 'next/link'
import React from 'react'
import classes from '../../styles/main-header.module.css'
const MainHeader = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href="/"> Travel</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li><Link href="/events">Browse All Events</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader
