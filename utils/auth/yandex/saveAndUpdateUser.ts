import {YandexUserInformation} from "./types";
import prisma from "@myPrisma/prisma-client";

export const saveAndUpdateUser = async (yandexUser: YandexUserInformation) => {
    // Сохранение/обновление пользователя


    const user = await prisma.user.upsert({
        where: { yandexId: yandexUser.id },
        create: {
            yandexId: yandexUser.id,
            email: yandexUser.default_email,
            name: yandexUser.real_name || yandexUser.display_name,
            avatarId: yandexUser.is_avatar_empty ? null : yandexUser.default_avatar_id
        },
        update: {
            email: yandexUser.default_email,
            name: yandexUser.real_name || yandexUser.display_name,
            avatarId: yandexUser.default_avatar_id
        }
    });
    return user
}