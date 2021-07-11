export const changeBGC = (newId, oldId) => {
    console.log(newId+'  newId');


    console.log(oldId+'  oldId');
 

    if (newId === oldId) {
        console.log("ОНИ ОДИНАКОВЫ");
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
