export const fileCountToString = (fileCount:number)=>{
    if(fileCount>=5 && fileCount<=20 || fileCount === 0) return `${fileCount} файлов`
    if(fileCount % 10 === 1 ) return `${fileCount} файл`
    if(fileCount % 10 === 2||fileCount % 10 === 3||fileCount % 10 === 4) return `${fileCount} файла`
    return `${fileCount} файлов`
}