import { changeBGC } from "./changeBGC";

export const handlerClick = (e, clickId, oldId) => {
    let newClick = clickId;
    let oldClick = oldId;
    let status = false;
    const clickElement = e;

    if (clickElement.classList.contains("nav-letter")) {
        oldClick = changeBGC(clickElement.id, oldClick.toString());
        status = true
        return {newClick,oldClick,status}
    }

    if (clickElement.classList.contains("left")) {
        if ((newClick ===  0) || (newClick ===  1)) {
            newClick = 26;
            oldClick = changeBGC(newClick.toString(), oldClick.toString());
        } else {
            newClick--;
            oldClick = changeBGC(newClick.toString(), oldClick.toString());
        }
        status = true
        return {newClick,oldClick,status}
    }

    if (clickElement.classList.contains("right")) {
        if (newClick === 26) {
            newClick = 1;
            oldClick = changeBGC(newClick.toString(), oldClick.toString());
        } else {
            newClick++;
            oldClick = changeBGC(newClick.toString(), oldClick.toString());
        }
        status = true
        return {newClick,oldClick,status}
    }
    return {newClick,oldClick,status}
};
