
export const getConvertedDateTime = (date?:string)=>{
    const dateConverted = new Date(date? date: '')

    return `${dateConverted.toDateString()}  ${dateConverted.toLocaleTimeString()}`
}