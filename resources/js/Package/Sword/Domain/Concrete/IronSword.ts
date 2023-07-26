import Sword from "../../Interface/Sword";
import {SwordType} from "../../Type/SwordType";

class IronSword implements Sword {
    dano: {
        cortante: number;
        perfurante: number;
        contundente: number
    };
    material: SwordType;
    imagem: string;

    constructor() {
        this.dano = {
            cortante: 5,
            perfurante: 4,
            contundente: 4
        }
        this.imagem = "iron-sword.svg";
        this.material = "ferro";
    }

    ataqueContundente(): number {
        return this.dano.contundente;
    }

    ataqueCortante(): number {
        return this.dano.cortante;
    }

    ataquePerfurante(): number {
        return this.dano.cortante;
    }

    imagemEspada(): string {
        return this.imagem
    }

    titulo(): string {
        return `Espada de ${this.material}`;
    }
}
export default IronSword;
