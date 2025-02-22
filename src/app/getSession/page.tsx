import {getSession} from "@utils/lib/getSession";
import {redirect} from "next/navigation";
import {getYandexAvatar} from "@utils/lib/getYandexAvatar";
import Image from "next/image";

export default async function GetUserSession  () {
    const user = await getSession();


    if(!user){
        redirect('/api/auth/login');
    }

    return(
        <div className='flex flex-col gap-3'>
            <Image src={getYandexAvatar(user.avatarId)} width={50} height={50} alt='User Avatar'/>
            <span>{user.name}</span>
            <span>{user.email}</span>
        </div>
    )
}



