  export function getDateFromLocaleDate(): Date {
    //Déclaration de variables
    const now = new Date()


    //Traitements - SOLUTION SIMPLE : Utiliser l'heure réelle
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    let hours = now.getHours(); // CHANGÉ : utiliser l'heure réelle au lieu de 22
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    // Créer la date normalement (sans correction bizarre)
    let date_from_locale_string = new Date(year, month, day, hours, minutes, seconds);
    
    /* console.log("=== SOLUTION FINALE ===");
    console.log(`Date locale: ${date_from_locale_string.toLocaleDateString()} ${date_from_locale_string.toTimeString().slice(0,8)}`);
    console.log(`UTC: ${date_from_locale_string.toISOString()}`);
    console.log("======================="); */
    
    //Sorties/Affichages
    return date_from_locale_string;
    
}

// NOUVELLE FONCTION : Comparer seulement les jours civils (ignore l'heure)
export function isSameCivilDay(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
}