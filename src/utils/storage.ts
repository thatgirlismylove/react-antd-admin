import { TOKEN_KEY } from "./constant"

export const setStorage = (key: string, value: string) => {
    localStorage.setItem(key, value)
}

export const getStorage = (key: string) => {
    return localStorage.getItem(key)
}

export const removeStorage = (key: string) => {
    localStorage.removeItem(key)
}

export const clearStorage = () => {
    localStorage.clear()
}

export const getToken = () => {
    return getStorage(TOKEN_KEY)
}

export const setToken = (token) => {
    setStorage(TOKEN_KEY, token)
}

export const removeToken = () => {
    removeStorage(TOKEN_KEY)
}

