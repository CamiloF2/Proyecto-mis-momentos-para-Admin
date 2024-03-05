export type Auth = {
    correo: string;
    password: string;
};

export type AuthResponse = {
    id: number,
    nombreAdmin: string,
    correo: string
}