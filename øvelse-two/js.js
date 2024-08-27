
    const hvadErKlokken = new Date().getHours();


    if (hvadErKlokken >= 5 && hvadErKlokken < 10) {
        console.log("Godmorgen");
    } else if (hvadErKlokken >= 10 && hvadErKlokken < 18) {
        console.log("Goddag");
    } else if (hvadErKlokken >= 18 && hvadErKlokken < 24) {
        console.log("Godaften");
    } else {
        console.log("Godnat");
    }