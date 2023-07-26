import {SwordType} from "../Type/SwordType";

interface Sword {
    imagem: string
    material: SwordType
    dano: {
        cortante: number
        perfurante: number
        contundente: number
    }
    ataqueCortante(): number
    ataquePerfurante(): number
    ataqueContundente(): number
    imagemEspada(): string
    titulo(): string
}
export default Sword;
