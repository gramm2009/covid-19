// import Head from "next/head";
import Link from "next/link";
import Router from "next/router"
import { useEffect } from "react";
// const axios = require("axios").default;
// import Ru_Translation from "../utils/Ru_Translation";
// import Vector1 from "../components/Vector1";
// import Vector2 from "../components/Vector2";
// import { handlerClick } from "../utils/handleClick";
// import { useState } from "react";
// import { filterLetter } from "../utils/filterLetter";
// import { resetStyle } from "../utils/resetStyle";

export default function Index() {
    
    useEffect(()=>{
        Router.push('/covid')
    },[])
    
    return(
        <div></div>
    )
    
//     const [clickId, setClickId] = useState(0);
//     const [oldId, setOldId] = useState(0);
//     const [letter, setLetter] = useState("");
//     const [inputSearch, setInputSearch] = useState("");
    
//     let arr_index = []

//     const arr_RU_Letters = Ru_Translation.arr_RU_Letters;
//     const arr_RU_Country = Ru_Translation.arr_RU_Country;

//     const navClick = (e) => {
//         setInputSearch("");
//         const element = e.target;
//         const { newClick, oldClick } = handlerClick(element, clickId, oldId);

//         setLetter(document.getElementById(oldClick).textContent);
//         setOldId(oldClick);
//         setClickId(newClick);
//     };

//     const handlerInput = (e) => {
//         console.log(clickId);
//         console.log(oldId);
//         resetStyle(oldId);
//         setInputSearch(e.target.value);
//     };

//     return (
//         <>
//             <Head>
//                 <title>Covid-19</title>
//             </Head>
//             <div className="container">
//                 <h1>Статистика по COVID-19</h1>

//                 <section>
//                     <h2>
//                         <b>Поиск по стране</b>
//                     </h2>
//                     <input type="text" value={inputSearch} onChange={handlerInput} />
//                     <div className="box-filter">
//                         {inputSearch ? (
//                             <ul>
//                                 {arr_RU_Country
//                                     .filter((el,i) => {
//                                         if(el.toLowerCase().includes(inputSearch.toLowerCase())){

//                                             arr_index.push(i)
//                                             return el
//                                         }
//                                     })
//                                     .map((el,i) => (
                                        
//                                         <li><Link href={`/${countries[arr_index[i]].toLowerCase()}`}><a>{el}</a></Link></li>
                                        
                                        
                                        
//                                     ))}
//                             </ul>
//                         ) : (
//                             <div>
//                                 {arr_RU_Country
//                                     .filter((el) => {
//                                         if (filterLetter(el, letter)) {
//                                             return el;
//                                         }
//                                     })
//                                     .map((el, i) => (
//                                         <div key={i}>{el}</div>
//                                     ))}
//                             </div>
//                         )}
//                     </div>
//                     <nav onClick={(e) => navClick(e)}>
//                         <span className="nav-arrow-left nav-arrow left">
//                             <Vector1 />
//                         </span>
//                         {arr_RU_Letters.map((el, i) => {
//                             return (
//                                 <button className="nav-letter" key={i} id={i + 1}>
//                                     {el}
//                                 </button>
//                             );
//                         })}
//                         <span className="nav-arrow-right nav-arrow right">
//                             <Vector2 />
//                         </span>
//                     </nav>
//                 </section>
//             </div>
//         </>
//     );
// }

// Index.getInitialProps = async (ctx) => {
//     const options = {
//         method: "GET",
//         url: "https://covid-193.p.rapidapi.com/countries",
//         headers: {
//             "x-rapidapi-key": "94798c3c6bmshfca9a4960f75ed3p12f63ajsn2298b9459af5",
//             "x-rapidapi-host": "covid-193.p.rapidapi.com",
//         },
//     };

//     const { data } = await axios.request(options);
//     return {
//         countries: data.response,
//     };
};
