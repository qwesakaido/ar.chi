export function Header() {
    return (

        <header>
            <nav>
                <div>
                    <ul>
                        <li className="after:content-['|']">AR.CHI</li>
                    </ul>
                    <div>
                        <select>
                            <option value="en">ENG</option>
                            <option value="ru">RUS</option>
                        </select>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>About us</li>
                        <li>Architecture</li>
                        <li>Interior</li>
                        <li>Contact</li>
                        <li>Shop</li>
                    </ul>
                    <div>
                        <ul>
                            <li>Search</li>
                            <li>Menu</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}