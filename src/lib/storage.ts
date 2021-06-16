function get(name: string, defaultValue: any): any {
    const item = localStorage.getItem(name);
    if (item) {
        // Integer
        if (Number.isInteger(parseInt(item))) {
            return parseInt(localStorage.getItem(name));
        }
        // Boolean
        if (item === 'true' || item === 'false') {
            return localStorage.getItem(name) === 'true';
        }
        // String
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