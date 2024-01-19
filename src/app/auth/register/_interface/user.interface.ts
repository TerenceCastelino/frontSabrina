export interface UserInterface {

    idUtilisateur: number
    nom: string
    prenom: string
    emailUtilisateur: string
    role: string
    telephone: string
    gsm: string
    hashedPassword: string
    jwt: string
    emailConfirme: boolean
    profilActive: boolean
    confirmationHash: string
}
