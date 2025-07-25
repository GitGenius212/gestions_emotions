  export function getDateFromLocaleDate(): Date {
    //Déclaration de variables
    const localStringDate = new Date().toLocaleString();
    const date :string = localStringDate.split(",")[0];
    const clock: string = localStringDate.split(",")[1];

    //Traitements
    const year = parseInt(date.split("/")[2]);
    const month = parseInt(date.split("/")[0]);
    const day = parseInt(date.split("/")[1]);
    let hours = parseInt(clock.split(":")[0]);
    const minutes = parseInt(clock.split(":")[1]);
    const seconds = parseInt(clock.split(":")[2].substring(0, 2));
    const partie_journée = clock.split(":")[2].substring(3);

    if (partie_journée === "AM" && hours === 12) {
      hours = 0;
    } else if(partie_journée === "PM" && hours < 12) {
      hours += 12;
    }
    
    let date_from_locale_string = new Date(year, month-1, day, hours, minutes, seconds);
    
    //The date can add up a day
    if(hours >= 20) {
      date_from_locale_string = new Date(date_from_locale_string.setDate(date_from_locale_string.getDate() -1));
    }
    
    //Sorties/Affichages
    return date_from_locale_string;
    
}