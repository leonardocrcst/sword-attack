import Sword from "../../Interface/Sword";
import {SwordType} from "../../Type/SwordType";

class StoneSword implements Sword {
    dano: {
        cortante: number;
        perfurante: number;
        contundente: number
    };
    material: SwordType;
    imagem: string;

    constructor() {
        this.dano = {
            cortante: 3,
            perfurante: 2,
            contundente: 4
        }
        this.imagem = "stone-sword.svg";
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
export default StoneSword;
