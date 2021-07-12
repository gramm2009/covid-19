export const NavButtons=({ letters }) => {
    return (
        <div>
            {letters.map((el, i) => {
                return (
                    <button className="nav-letter" key={i} id={i + 1}>
                        {el}
                    </button>
                );
            })}
        </div>
    );
}
