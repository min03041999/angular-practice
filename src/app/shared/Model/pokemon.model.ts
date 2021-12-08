export interface Pokemon {
    id: number;
    name: {
        chinese: string;
        english: string;
        french: string;
        japanese: string;
    }
    type: string[];
    base: {
        Attack: number;
        Defense: number;
        HP: number;
        SpAttack: number;
        SpDefense: number;
        Speed: number;
    }
    img: string;
}