const defaultURL = 'https://avatars.yandex.net/get-yapic';

/*
    original    : 200x200
    xl          : 100x100
    md          : 56x56
    xs          : 28x28
 */

type defaultSize = 'original' | 'xl' | 'md' | 'xs';
const defaultSize = {
    original: 'islands-200',
    xl: 'islands-retina-50',
    md: 'islands-retina-small',
    xs: 'islands-small'
}

export const getYandexAvatar = (avatarId:string | null, size: defaultSize = 'md') => {
    if (!avatarId) return 'defaultAvatar.jpg'
    return `${defaultURL}/${avatarId}/${defaultSize[size]}`
}