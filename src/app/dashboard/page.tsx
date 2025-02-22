import {redirect} from "next/navigation";


export default async function DashboardPage() {

    redirect('/dashboard/disk')

    return(
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}
