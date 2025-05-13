import {atomWithStorage} from 'jotai/utils';

export const appCollapsed = atomWithStorage('isCollapsed', false, {
    getItem: (key) => JSON.parse(localStorage.getItem(key)!),
    setItem: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
    removeItem: (key) => localStorage.removeItem(key),
}, {
    getOnInit: true
});
