export function getCurrentFormattedDate(): string {
    const date = new Date();

    const options: Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };

    return date.toLocaleDateString('en-US', options);
}

export function formatDate(date: string) {
    const parsedDate = new Date(date);

    const options = { year: "2-digit", month: "2-digit", day: "2-digit" };
    return parsedDate.toLocaleDateString("en-US", options);
}


export function formatDateWithTime(dateString: string) {
    const date = new Date(dateString);
  
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }
  
    const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
  
  
    return date.toLocaleDateString("en-US", options);
  }