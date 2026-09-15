import { EasyAI } from "../../EasyAI";
import { NormalAI } from "../../NormalAI";
import { HardAI } from "../../HardAI";
import { Property } from "../../../Property";

function createProperty(
    id: number,
    name: string,
    position: number,
    tier: "T1" | "T2" | "T3" | "T4" | "T5" | "T6",
    price: number
): Property {
    return new Property(
        id,
        name,
        position,
        tier,
        price,
        price
    );
}

function printAIInfo(ai: EasyAI | NormalAI | HardAI) {
    console.log(`Name           : ${ai.name}`);
    console.log(`Money          : ${ai.money}`);
    console.log(`Position       : ${ai.position}`);
    console.log(`Properties     : ${ai.properties.length}`);
    console.log(`Purchase Count : ${ai.purchaseCount}`);
    console.log(`Bankrupt       : ${ai.isBankrupt}`);
    console.log(`In Jail        : ${ai.inJail}`);
}

function testPurchase(
    ai: EasyAI | NormalAI | HardAI,
    property: Property
) {
    const moneyBefore = ai.money;
    const price = property.getPrice();
    const moneyAfter = moneyBefore - price;

    const result = ai.decidePurchase(property);

    console.log(`Property Price : ${price}`);
    console.log(`Money Before   : ${moneyBefore}`);
    console.log(`Money After    : ${moneyAfter}`);
    console.log(`Purchase      : ${result ? "BUY" : "NO BUY"}`);
}

function testTakeOver(
    ai: EasyAI | NormalAI | HardAI,
    property: Property
) {
    const moneyBefore = ai.money;
    const cost = property.getPrice() * 1.65;
    const moneyAfter = moneyBefore - cost;

    const result = ai.decideTakeOver(property);

    console.log(`Property Price : ${property.getPrice()}`);
    console.log(`Take Over Cost : ${cost}`);
    console.log(`Money Before   : ${moneyBefore}`);
    console.log(`Money After    : ${moneyAfter}`);
    console.log(`Take Over      : ${result ? "YES" : "NO"}`);
}

function testJail(
    ai: EasyAI | NormalAI | HardAI
) {
    const result = ai.decideJail();

    console.log(`Money          : ${ai.money}`);
    console.log(`Jail Decision   : ${result}`);
}

function testSell(
    ai: EasyAI | NormalAI | HardAI,
    properties: Property[]
) {
    const result = ai.decideSell(properties);

    if (result === null) {
        console.log("Sell Decision  : NONE");
        return;
    }

    console.log("Properties:");

    for (const property of properties) {
        console.log(
            `  ${property.getName()} - ${property.getPrice()}`
        );
    }

    console.log(
        `Sell Decision  : ${result.getName()} (${result.getPrice()})`
    );
}


/* =====================================================
   EASY AI
===================================================== */

console.log("\n================================");
console.log("          EASY AI TEST");
console.log("================================");

const easy = new EasyAI(1, "Easy AI");

printAIInfo(easy);

const easyProperty = createProperty(
    1,
    "T1-1",
    2,
    "T1",
    500
);

console.log("\n--- Purchase Test ---");
testPurchase(easy, easyProperty);

console.log("\n--- Take Over Test ---");
testTakeOver(easy, easyProperty);

console.log("\n--- Jail Test ---");
testJail(easy);

console.log("\n--- Sell Test ---");

const easyProperties = [
    createProperty(1, "T3-1", 13, "T3", 1500),
    createProperty(2, "T1-1", 2, "T1", 500),
    createProperty(3, "T5-1", 25, "T5", 2500),
];

testSell(easy, easyProperties);


/* =====================================================
   NORMAL AI
===================================================== */

console.log("\n================================");
console.log("         NORMAL AI TEST");
console.log("================================");

const normal = new NormalAI(2, "Normal AI");

printAIInfo(normal);

const normalProperty = createProperty(
    4,
    "T2-1",
    7,
    "T2",
    1000
);

console.log("\n--- Purchase Test ---");
testPurchase(normal, normalProperty);

console.log("\n--- Take Over Test ---");
testTakeOver(normal, normalProperty);

console.log("\n--- Jail Test ---");
testJail(normal);

console.log("\n--- Sell Test ---");

const normalProperties = [
    createProperty(5, "T4-1", 19, "T4", 2000),
    createProperty(6, "T1-1", 2, "T1", 500),
    createProperty(7, "T3-1", 13, "T3", 1500),
];

testSell(normal, normalProperties);


/* =====================================================
   HARD AI
===================================================== */

console.log("\n================================");
console.log("          HARD AI TEST");
console.log("================================");

const hard = new HardAI(3, "Hard AI");

printAIInfo(hard);

const hardProperty = createProperty(
    8,
    "T6-1",
    31,
    "T6",
    3000
);

console.log("\n--- Purchase Test ---");
testPurchase(hard, hardProperty);

console.log("\n--- Take Over Test ---");
testTakeOver(hard, hardProperty);

console.log("\n--- Jail Test ---");
testJail(hard);

console.log("\n--- Sell Test ---");

const hardProperties = [
    createProperty(9, "T5-1", 25, "T5", 2500),
    createProperty(10, "T2-1", 7, "T2", 1000),
    createProperty(11, "T1-1", 2, "T1", 500),
];

testSell(hard, hardProperties);


console.log("\n================================");
console.log("          TEST FINISHED");
console.log("================================\n");