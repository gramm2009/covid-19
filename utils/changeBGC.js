export const changeBGC = (newId, oldId) => {

 

    if (newId === oldId) {
        return newId;
    } else {
        let clickElement = document.getElementById(newId);

        clickElement.style.color = "#333333";
        clickElement.style.fontWeight = "600";

        if (oldId !== "0") {
            let prevElement = document.getElementById(oldId);
            prevElement.style.color = "#BDBDBD";
            prevElement.style.fontWeight = "400";
        }
        return newId;
        
    }
};
