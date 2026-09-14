import { PropertyTier } from "../types/PropertyTier";
import { Player } from "./Player";

export class Property {
    id: number;
    name: string;
    position: number;
    tier: PropertyTier;
    price: number;
    rent: number;
    owner: Player | null;
    rentPool: number;

    constructor(
        id: number,
        name: string,
        position: number,
        tier: PropertyTier,
        
    ) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.tier = tier;
        this.price = this.getPriceByTier(tier);
        this.rent = this.price;
        this.owner = null;
        this.rentPool = 0;
    }

    private getPriceByTier(tier: PropertyTier): number {
        switch (tier) {
            case "T1":
                return 500;
            case "T2":
                return 1000;
            case "T3":
                return 1500;
            case "T4":
                return 2000;
            case "T5":
                return 2500;
            case "T6":
                return 3000;
        }
    }

    setOwner(player: Player | null): void {
        this.owner = player;
    }

    addRent(amount: number): void {
        this.rentPool += amount;
    }

    collectRent(): number {
        const amount = this.rentPool;
        this.rentPool = 0;

        return amount;
    }
}