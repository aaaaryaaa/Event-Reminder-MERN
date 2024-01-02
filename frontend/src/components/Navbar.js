import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 px-10">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl" href='/'>Event Reminders</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/home'>Home</Link></li>
                    <li>
                        <details>
                            <summary>
                                Pages
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li><Link to='/'>All Reminders</Link></li>
                                <li><Link to='/upcoming'>Upcoming Reminders</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}