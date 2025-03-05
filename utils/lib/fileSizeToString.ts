export const fileSizeToString = (size:number)=>{
    const KB   = 1000;
    const MB   = 1000 * KB;
    const GB   = 1000 * MB;

    if(size >= GB) return `${(size/GB).toFixed(1)} Гб`
    if(size >= MB) return `${(size/MB).toFixed(1)} Мб`
    return `${(size/KB).toFixed(1)} Кб`
}


// Начиная с Mac OS 10.6, также как в убунту, пишут MB- это правильно (1Мегабайт - это 1000 килобайт).