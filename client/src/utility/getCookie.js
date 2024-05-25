import Cookies from 'universal-cookie';

export const getCookie = (name) => {
    const cookies = new Cookies();
    return cookies.get(name);
};

export const isAdmin = () => {
    const role = getCookie('role');
    console.log(role);
    return role === 'admin';
};