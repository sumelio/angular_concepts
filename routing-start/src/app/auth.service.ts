export class AuthService {
    loogedIn = false;

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loogedIn);
                }, 900 );
            }
        );
        return promise;
    }

    login() {
        this.loogedIn = true;
    }

    logout() {
        this.loogedIn = false;
    }
}
