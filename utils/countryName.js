import Ru_Translation from ".././utils/Ru_Translation";

import state from "../mobX/state";

export const countryName=(country)=>{
    
    let countries = state.countries
    
    const countryName = country.toLowerCase();
    countries = countries.map((el) => el.toLowerCase());
    const index = countries.indexOf(countryName);
    const ruCountry = Ru_Translation.arr_RU_Countries[index]
    
    return {ruCountry}
    
}
