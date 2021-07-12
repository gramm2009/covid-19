export const NavButtons=({ letters }) => {
    return (
        <>
            {letters.map((el, i) => {
                return (
                    <button className="nav-letter" key={i} id={i + 1}>
                        {el}
                    </button>
                );
            })}
        </>
    );
}
