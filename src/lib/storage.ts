function get(name: string): any {

    let settings = JSON.parse(localStorage.getItem('settings'));
    if (settings) {
        return settings[name];
    }
    return null;
}

function set(name: string, value: number | string | boolean): void {

    let settings: Settings = JSON.parse(localStorage.getItem('settings'));
    localStorage.setItem('settings', JSON.stringify({ ...settings, [name]: value }));

}

export default {
    get,
    set
}