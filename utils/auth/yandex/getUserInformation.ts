import axios, {AxiosRequestConfig} from "axios";
import {YANDEX_OAUTH} from "@constants/settings";


export const getUserInformation = async (accessToken: string)=>{

    const config :AxiosRequestConfig = {
        method: "GET",
        url: YANDEX_OAUTH.USER_INFO_URL,
        headers: {
            "Authorization": `OAuth ${accessToken}`
        }
    }
    try{
        const userInfoResponse = await axios(config)
        return userInfoResponse.data
    }
    catch (error){
        console.log("Error getting user information:", error);
        throw error;
    }
}




/*

GET https://login.yandex.ru/info?
[& format=json | xml | jwt]
[& jwt_secret=<секретный ключ>]

Authorization: OAuth <OAuth-токен>

 */