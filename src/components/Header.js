import React from 'react';
import { Link } from 'gatsby';

const Header = ({ titleLink }) => {
    return (
        <header className="flex items-center justify-between py-10">
            <Link to="/">
                <svg viewBox="0 0 54 16" width="84" height="21" xmlns="http://www.w3.org/2000/svg" style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:2}}><path d="M9.844 8.898h13.688v1.977c0 1.612-1.309 2.922-2.922 2.922-1.613 0-2.922-1.31-2.922-2.922h-2c0 2.716 2.205 4.922 4.922 4.922 2.716 0 4.922-2.206 4.922-4.922V4h-2v2.898h-5.844V4.922C17.688 2.205 15.482 0 12.766 0c-2.717 0-4.922 2.205-4.922 4.922v5.953c0 1.612-1.309 2.922-2.922 2.922-1.613 0-2.922-1.31-2.922-2.922H0c0 2.716 2.205 4.922 4.922 4.922 1.094 0 2.104-.358 2.922-.962v.962h2V8.898Zm5.844-2V4.922C15.688 3.309 14.379 2 12.766 2c-1.613 0-2.922 1.309-2.922 2.922v1.976h5.844ZM25.537 0h-2v2h2V0ZM43.229 6.898H29.541V4.922c0-1.613 1.31-2.922 2.922-2.922 1.613 0 2.922 1.309 2.922 2.922h2C37.385 2.205 35.18 0 32.463 0c-2.716 0-4.922 2.205-4.922 4.922v6.875h2V8.898h5.844v1.977c0 2.716 2.206 4.922 4.922 4.922 2.717 0 4.922-2.206 4.922-4.922V4.922c0-1.613 1.31-2.922 2.922-2.922 1.613 0 2.922 1.309 2.922 2.922h2C53.073 2.205 50.868 0 48.151 0c-1.093 0-2.104.357-2.922.962V0h-2v6.898Zm-5.844 2v1.977c0 1.612 1.31 2.922 2.922 2.922 1.613 0 2.922-1.31 2.922-2.922V8.898h-5.844Zm-9.848 6.899h2v-2h-2v2Z" /></svg>
            </Link>
            <nav className="flex items-center text-base leading-5">
                <ul className="flex flex-row">
                    <li>
                        <Link to="/" className="block py-2 pr-4 pl-3">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="block py-2 pr-4 pl-3">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" className="block py-2 pr-4 pl-3">
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;