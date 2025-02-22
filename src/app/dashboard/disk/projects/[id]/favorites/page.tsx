export default async function FavoriteProjectPage(
    {params}: {params: {id: string}}
){
    const {id: projectId} = await params;
    return(
        <div>Favorite {projectId}</div>
    )
}