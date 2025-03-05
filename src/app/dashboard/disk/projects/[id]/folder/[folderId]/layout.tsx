import {FolderProvider} from "@/app/dashboard/disk/projects/[id]/folder/[folderId]/FolderProvider";

const FolderPageIdLayout = async (
    {params, children}: {params: {folderId: string}, children: React.ReactNode}
) => {
    const folderId = (await params).folderId
    return (
        <FolderProvider folderId={+folderId}>
            {children}
        </FolderProvider>
    )
}

export default FolderPageIdLayout;