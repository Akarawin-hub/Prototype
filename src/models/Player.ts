export class Player {

    id: number
    name: string
    money: number
    position: number
    properties: Property[]
    purchaseCount: number
    isBankrupt: boolean
    inJail: boolean

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
        this.money = 1000
        this.position = 1
        this.properties = []
        this.purchaseCount = 0
        this.isBankrupt = false
        this.inJail = false
    }

    move(steps: number): void {
        this.position += steps
    }

    pay(amount: number): boolean {
        if (this.money >= amount) {
            this.money -= amount
            return true
        }

        return false
    }

    receive(amount: number): void {
        this.money += amount
    }

    buyProperty(property: Property): boolean {
        if (
            this.money < property.getPrice() ||
            property.getOwner() !== null ||
            this.properties.length >= 5 ||
            this.purchaseCount >= 7
        ) {
            return false
        }

        this.money -= property.getPrice()
        this.properties.push(property)
        this.purchaseCount++
        property.setOwner(this)

        return true
    }

    sellProperty(property: Property): boolean {
        if (property.getOwner() !== this) {
            return false
        }

        const sellPrice = property.getPrice() * 0.2

        this.money += sellPrice
        this.removeProperty(property)
        property.setOwner(null)
        property.clearRentPool()

        return true
    }

    addProperty(property: Property): void {
        this.properties.push(property)
    }

    removeProperty(property: Property): void {
        const index = this.properties.indexOf(property)

        if (index !== -1) {
            this.properties.splice(index, 1)
        }
    }
}