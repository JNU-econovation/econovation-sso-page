export const postSignUp = (email:string, year:string, username:string, password:string) => {
    console.group('POST: /api/accounts/sign-up Form Data');
    console.log(`email:${email}`);
    console.log(`year:${year}`);
    console.log(`username:${username}`);
    console.log(`password:${password}`);
    console.groupEnd();
}