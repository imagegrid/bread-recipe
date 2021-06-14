function get(name: string, defaultValue: any): any {
    const item = localStorage.getItem(name);
    if (item) {
        if (Number.isInteger(parseInt(item))) {
            return parseInt(localStorage.getItem(name));
        }
        if (item === 'true' || item === 'false') {
            return localStorage.getItem(name) === 'true';
        }
        return localStorage.getItem(name);
    }
    return defaultValue;
}

function set(name: string, value: string): void {
    return localStorage.setItem(name, value);
}

export default {
    get,
    set
}