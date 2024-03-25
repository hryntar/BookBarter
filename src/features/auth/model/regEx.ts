export const USER_REGEX: RegExp = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
export const PWD_REGEX: RegExp = /^(?=.*[0-9])(?=.*[a-z]).{8,32}$/;
export const EMAIL_REGEX: RegExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
export const PHONE_REGEX: RegExp = /^(\+?38)?0\d{9}$/