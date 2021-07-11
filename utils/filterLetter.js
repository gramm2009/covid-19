export const filterLetter = (item, letter) => {
    let res = item.substr(0, 1);
    if (res === letter) return true;
    else return false;
};
