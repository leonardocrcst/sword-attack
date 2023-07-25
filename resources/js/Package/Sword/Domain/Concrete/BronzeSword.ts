import Sword from "../../Interface/Sword";
import {SwordType} from "../../Type/SwordType";

class BronzeSword implements Sword {
    dano: {
        cortante: number;
        perfurante: number;
        contundente: number
    };
    material: SwordType;
    imagem: string;

    constructor() {
        this.dano = {
            cortante: 4,
            perfurante: 3,
            contundente: 3
        }
        this.imagem = "bronze-sword.svg";
        this.material = "madeira";
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
}
export default BronzeSword;
