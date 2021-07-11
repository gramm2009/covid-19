const axios = require("axios").default;
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { continentTranslate } from "../../utils/continentTranslate";
import { countryName } from "../../utils/countryName";
import { letterSpacing } from "../../utils/letterSpacing";

export default function Country({ data }) {
    const { query } = useRouter();
    const { ruCountry } = countryName(query.country);
    console.log(data);

    return (
        <Layout title={query.country}>
            <p className="countryName-name">{ruCountry}</p>
            <div className="country-page__container">
                <p>
                    Континент: <b>{continentTranslate(data[0].continent)}</b>
                </p>
                <p className="country-page-margin-bottom">Популяция: <b>{letterSpacing(data[0].population)}</b></p>
                <div className="countryName-statistics">
                    <div>
                        <p className="country-page">
                            <b>Заболевшие: {letterSpacing(data[0].cases.total)}</b>
                        </p>
                        <p>{letterSpacing(data[0].cases["1M_pop"])}/1 млн. населения</p>
                        <p>
                            Новые случаи за сутки:{" "}
                            <span className="countryName-red">
                                <b>{letterSpacing(data[0].cases.new)}</b>
                            </span>
                        </p>
                        <p>Болеют в активной стадии: <b>{letterSpacing(data[0].cases.active)}</b></p>
                        <p>Критическое состояние: <b>{letterSpacing(data[0].cases.critical)}</b></p>
                        <p>Выздоровели: <b>{letterSpacing(data[0].cases.recovered)}</b></p>
                    </div>

                    <div>
                        <p>
                            <b>Умерли: {letterSpacing(data[0].deaths.total)}</b>
                        </p>
                        <p>{letterSpacing(data[0].deaths["1M_pop"])}/1млн.населения</p>
                        <p>
                            Новые случаи за сутки:{" "}
                            <span className="countryName-red">
                                <b>{letterSpacing(data[0].deaths.new)}</b>
                            </span>
                        </p>
                    </div>

                    <div>
                        <p>
                            <b>Сдали тест: {letterSpacing(data[0].tests.total)}</b>
                        </p>
                        <p>{letterSpacing(data[0].tests["1M_pop"])}/1млн.населения</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export async function getServerSideProps({ params }) {
    const { data } = await axios({
        method: "GET",
        url: "https://covid-193.p.rapidapi.com/statistics",
        params,
        headers: {
            "x-rapidapi-key": "94798c3c6bmshfca9a4960f75ed3p12f63ajsn2298b9459af5",
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
        },
    });

    return {
        props: { data: data.response },
    };
}
