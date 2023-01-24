export class SessionStorageUtil {
    keyName: string;

    constructor() {
        this.keyName = 'products';
    }

    setPageNamber(page: number) {
        window.sessionStorage.setItem('Page', `${page}`);
    }

    getPageNamber() {
        const pageSesionStorage = sessionStorage.getItem('Page');
        if (pageSesionStorage !== null) {
            return JSON.parse(pageSesionStorage);
        }
        return '';
    }
}
