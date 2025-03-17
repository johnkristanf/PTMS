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