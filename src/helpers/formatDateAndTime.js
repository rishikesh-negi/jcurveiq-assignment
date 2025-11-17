export function formatDateAndTime(date, format = "date-time") {
  const options =
    format === "date"
      ? {
          month: "short",
          day: "numeric",
        }
      : format === "time"
        ? {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          }
        : {
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          };

  const formatter = new Intl.DateTimeFormat("en-US", options);

  return formatter.format(date);
}
