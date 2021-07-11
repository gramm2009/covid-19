import Link from "next/link";
import { filterLetter } from "../utils/filterLetter";

export default function FilteredByLetter({ arr_RU_Countries, letter, countries }) {
    let arr_index = [];
    return (
        <ul>
            {arr_RU_Countries
                .filter((el, i) => {
                    if (filterLetter(el, letter)) {
                        arr_index.push(i);
                        return el;
                    }
                })
                .map((el, i) => (
                    <li key={arr_index[i]}>
                        <Link href={`/covid/${countries[arr_index[i]].toLowerCase()}`}>
                            <a>{el}</a>
                        </Link>
                    </li>
                ))}
        </ul>
    );
}
