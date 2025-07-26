function getStandardDateFormat(date) {

    const newDate = new Date(date);

    let yyyy = newDate.getFullYear().toString();
    let mm = (newDate.getMonth() + 1).toString();
    let dd = newDate.getDate().toString();

    const formattedDate = (yyyy + "." + (mm.length > 1 ? "" : "0") + mm + "." + (dd.length > 1 ? "" : "0") + dd + ".");

    return formattedDate;
}

exports.getStandardDateFormat = getStandardDateFormat;