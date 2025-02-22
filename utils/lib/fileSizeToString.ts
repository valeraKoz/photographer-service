export const fileSizeToString = (size:number)=>{
    const KB   = 1024;
    const MB   = 1024 * KB;
    const GB   = 1024 * MB;

    if(size >= GB) return `${(size/GB).toFixed(1)} Гб`
    if(size >= MB) return `${(size/MB).toFixed(1)} Мб`
    return `${(size/KB).toFixed(1)} Кб`
}