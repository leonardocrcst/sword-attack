import Sword from "./Interface/Sword";
import WoodSword from "./Domain/Concrete/WoodSword";
import StoneSword from "./Domain/Concrete/StoneSword";
import BronzeSword from "./Domain/Concrete/BronzeSword";
import IronSword from "./Domain/Concrete/IronSword";
import {SwordType} from "./Type/SwordType";

class SwordFactory {
    createSword(type: SwordType): Sword {
        switch (type) {
            case "madeira":
                return new WoodSword();
            case "pedra":
                return new StoneSword();
            case "bronze":
                return new BronzeSword();
            case "ferro":
                return new IronSword();
            default:
                throw new Error(`Tipo de espada desconhecido: ${type}`);
        }
    }
}
export default SwordFactory;
