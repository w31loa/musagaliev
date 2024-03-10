interface DateTimeFormatOptions {
    year?: "numeric" | "2-digit" | undefined;
    month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
    day?: "numeric" | "2-digit" | undefined;
    hour?: '2-digit'
    minute?: '2-digit'
}

export const formatDateFromIsoToLocal = (dateIsoStrins:string):string =>{
    const date = new Date(dateIsoStrins)
    const options:DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }

    return date.toLocaleDateString('us-Us' , options)
}