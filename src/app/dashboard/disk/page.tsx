import {redirect} from "next/navigation";

export default function Disk(){
    redirect('/dashboard/disk/projects');
    return(
        <div>
            Disk
        </div>
    )
}