import Sword from "../../Interface/Sword";
import {SwordType} from "../../Type/SwordType";

class WoodSword implements Sword {
    dano: {
        cortante: number;
        perfurante: number;
        contundente: number
    };
    material: SwordType;
    imagem: string;

    constructor() {
        this.dano = {
            cortante: 2,
            perfurante: 1,
            contundente: 3
        }
        this.imagem = "wood-sword.svg";
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
export default WoodSword;
