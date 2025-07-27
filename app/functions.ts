  export function getDateFromLocaleDate(): Date {
    //Déclaration de variables
    const now = new Date()
    

    //Traitements
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDate();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    let date_from_locale_string = new Date(year, month, day, hours, minutes, seconds);
    
    //The date can add up a day
    if(hours >= 20) {
      date_from_locale_string = new Date(date_from_locale_string.setDate(date_from_locale_string.getDate() -1));
    }
    
    //Sorties/Affichages
    return date_from_locale_string;
    
}