/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
/* eslint-disable object-shorthand */
/* eslint-disable import/prefer-default-export */
export async function getAllTracks() {
    const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/');

    if(!response.ok) {
        throw new Error ("Ошибка сервера")
    }

    const data = await response.json();
    return data;
}

export async function registerUser({ email, password, username }) {
    const response = await fetch('https://skypro-music-api.skyeng.tech/user/signup/', {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password,
            username: username,
        }),
        headers: {
            "content-type": "application/json",
        },
    })

    console.log(response);

    if(response.ok) {
        return response.json()
    // eslint-disable-next-line no-else-return
    } else if (response.status === 400) {
        throw new Error('Не получилось зарегистрировать пользователя с указанными данным')
    } else if (response.status === 500) {
        throw new Error ('Сервер сломался')
    }
}

export async function loginUser({ email, password }) {
    const response = await fetch('https://skypro-music-api.skyeng.tech/user/login/', {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password,
        }),
        headers: {
            "content-type": "application/json",
        },
    })

    console.log(response);

    if(response.ok) {
        return response.json()
    } else if (response.status === 400) {
        throw new Error('Запрос составлен некорректно')
    } else if (response.status === 500) {
        throw new Error ('Сервер сломался')
    } else if (response.status === 401) {
        throw new Error ('Пользователь с таким email или паролем не найден')
    }
}
