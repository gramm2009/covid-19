import Link from "next/link"

export default function FilteredByInput({arr_RU_Countries,inputSearch,countries}) {
    let arr_index = [];
    return (
        <ul >
        {arr_RU_Countries
            .filter((el, i) => {
                if (el.toLowerCase().includes(inputSearch.toLowerCase())) {
                    arr_index.push(i);
                    return el;
                }
            })
            .map((el, i) => (
                <li key={arr_index[i]} >
                    <Link   href={`/covid/${countries[arr_index[i]].toLowerCase()}`}>
                        <a>{el}</a>
                    </Link>
                </li>
            ))}
    </ul>
    )
}
