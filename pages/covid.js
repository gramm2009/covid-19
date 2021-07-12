const axios = require("axios").default;
import Ru_Translation from "../utils/Ru_Translation";
import Vector1 from "../components/Vector1";
import Vector2 from "../components/Vector2";
import { handlerClick } from "../utils/handleClick";
import { useState } from "react";
import { resetStyle } from "../utils/resetStyle";
import {NavButtons} from "../components/NavButtons";
import FilteredByInput from "../components/FilteredByInput";
import FilteredByLetter from "../components/FilteredByLetter";
import Layout from "../components/Layout";
import state from "../mobX/state";


export default function Covid({ countries }) {
    state.addCountries(countries)
    
    const [clickId, setClickId] = useState(0);
    const [oldId, setOldId] = useState(0);
    const [letter, setLetter] = useState("");
    const [inputSearch, setInputSearch] = useState("");

    const arr_RU_Letters = Ru_Translation.arr_RU_Letters;
    const arr_RU_Countries = Ru_Translation.arr_RU_Countries;

    const navClick = (e) => {
        setInputSearch("");
        const element = e.target;
        const { newClick, oldClick, status } = handlerClick(element, clickId, oldId);

        if (status) setLetter(document.getElementById(oldClick).textContent);

        setOldId(oldClick);
        setClickId(newClick);
    };

    const handlerInput = (e) => {
        resetStyle(oldId);
        setInputSearch(e.target.value);
    };

    return (
        <Layout title="Covid-19">
        
            <section>
                <h2>
                    <b>Поиск по стране</b>
                </h2>
                <input type="text" value={inputSearch} onChange={handlerInput} />
                <nav onClick={(e) => navClick(e)}>
                    <span className="nav-arrow-left nav-arrow left">
                        <Vector1 />
                    </span>
                    <NavButtons letters={arr_RU_Letters} />
                    <span className="nav-arrow-right nav-arrow right">
                        <Vector2 />
                    </span>
                </nav>

                <div className="box-filter">
                    {inputSearch ? (
                        <FilteredByInput arr_RU_Countries={arr_RU_Countries} inputSearch={inputSearch} countries={countries} />
                    ) : (
                        <FilteredByLetter arr_RU_Countries={arr_RU_Countries} letter={letter} countries={countries} />
                    )}
                </div>
            </section>
        </Layout>
    );
}

Covid.getInitialProps = async (ctx) => {
    const options = {
        method: "GET",
        url: "https://covid-193.p.rapidapi.com/countries",
        headers: {
            "x-rapidapi-key": "94798c3c6bmshfca9a4960f75ed3p12f63ajsn2298b9459af5",
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
        },
    };

    const { data } = await axios.request(options);
    return {
        countries: data.response,
    };
};
