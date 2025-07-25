  export function getDateFromLocaleDate(): Date {
    //Déclaration de variables
    const localStringDate = new Date().toLocaleString();
    const date :string = localStringDate.split(",")[0];
    const clock: string = localStringDate.split(",")[1];

    //Traitements
    const year = parseInt(date.split("/")[2]);
    const month = parseInt(date.split("/")[0]);
    const day = parseInt(date.split("/")[1]);
    const hours = parseInt(clock.split(":")[0]);
    const minutes = parseInt(clock.split(":")[1]);
    const seconds = parseInt(clock.split(":")[2].substring(0, 2));

    const date_from_locale_string = new Date(year, month-1, day, hours, minutes, seconds);

    //Sorties/Affichages
    return date_from_locale_string;
    
}