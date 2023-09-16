import { format, parseISO} from "date-fns";

function updateDays (dateOne, dateTwo) {
    let tomorrow = document.getElementById("tomorrow");
    tomorrow.textContent = format(new Date (parseISO(dateOne)), "EEEE");

    let afterTomorrow = document.getElementById("dayAfterTomorrow");
    afterTomorrow.textContent = format(new Date (parseISO(dateTwo)), "EEEE");
}

export { updateDays }