import { Property } from "../../../../../Property";
import { EasyAI } from "../../../../EasyAI";
import { HardAI } from "../../../../HardAI";
import { NormalAI } from "../../../../NormalAI";


function createProperty(price: number): Property {
    return new Property(
        1,
        "Test Property",
        2,
        "T1",
        price,
        price
    );
}

function check(
    name: string,
    actual: boolean,
    expected: boolean
): void {
    const result = actual === expected ? "PASS" : "FAIL";

    console.log(
        `[${result}] ${name} | Expected: ${expected} | Got: ${actual}`
    );
}

function checkText(
    name: string,
    actual: string,
    expected: string
): void {
    const result = actual === expected ? "PASS" : "FAIL";

    console.log(
        `[${result}] ${name} | Expected: ${expected} | Got: ${actual}`
    );
}


// =====================================================
// EASY AI - PURCHASE
// Requirement: เงินหลังซื้อ > 50%
// =====================================================

console.log("\n========== EASY AI - PURCHASE ==========");

const easy = new EasyAI(1, "Easy AI");

check(
    "Easy - Property 400",
    easy.decidePurchase(createProperty(400)),
    true
);

check(
    "Easy - Property 500 (50% boundary)",
    easy.decidePurchase(createProperty(500)),
    false
);

check(
    "Easy - Property 600",
    easy.decidePurchase(createProperty(600)),
    false
);


// =====================================================
// NORMAL AI - PURCHASE
// Requirement: เงินหลังซื้อ >= 30%
// =====================================================

console.log("\n========== NORMAL AI - PURCHASE ==========");

const normal = new NormalAI(2, "Normal AI");

check(
    "Normal - Property 600",
    normal.decidePurchase(createProperty(600)),
    true
);

check(
    "Normal - Property 700 (30% boundary)",
    normal.decidePurchase(createProperty(700)),
    true
);

check(
    "Normal - Property 800",
    normal.decidePurchase(createProperty(800)),
    false
);


// =====================================================
// HARD AI - PURCHASE
// Requirement: เงินหลังซื้อ >= 0
// =====================================================

console.log("\n========== HARD AI - PURCHASE ==========");

const hard = new HardAI(3, "Hard AI");

check(
    "Hard - Property 1000",
    hard.decidePurchase(createProperty(1000)),
    true
);

check(
    "Hard - Property 1001",
    hard.decidePurchase(createProperty(1001)),
    false
);

check(
    "Hard - Property 500",
    hard.decidePurchase(createProperty(500)),
    true
);


// =====================================================
// TAKE OVER
// Cost = Property Price × 1.65
// Requirement: เงินหลังจ่าย >= 0
// =====================================================

console.log("\n========== TAKE OVER ==========");

check(
    "Easy - Take Over T1 (500)",
    easy.decideTakeOver(createProperty(500)),
    true
);

check(
    "Normal - Take Over T1 (500)",
    normal.decideTakeOver(createProperty(500)),
    true
);

check(
    "Hard - Take Over T1 (500)",
    hard.decideTakeOver(createProperty(500)),
    true
);


// =====================================================
// JAIL
// =====================================================

console.log("\n========== JAIL ==========");

checkText(
    "Easy - Jail",
    easy.decideJail(),
    "BRIBE"
);

checkText(
    "Normal - Jail",
    normal.decideJail(),
    "SKIP"
);

checkText(
    "Hard - Jail",
    hard.decideJail(),
    "SKIP"
);


// =====================================================
// SELL ORDER
// Requirement: ถูก -> แพง
// =====================================================

console.log("\n========== SELL ORDER ==========");

const easyProperties = [
    createProperty(2000),
    createProperty(500),
    createProperty(1000)
];

const normalProperties = [
    createProperty(2000),
    createProperty(500),
    createProperty(1000)
];

const hardProperties = [
    createProperty(2000),
    createProperty(500),
    createProperty(1000)
];

const easySell = easy.decideSell(easyProperties);
const normalSell = normal.decideSell(normalProperties);
const hardSell = hard.decideSell(hardProperties);

check(
    "Easy - Sell cheapest",
    easySell?.getPrice() === 500,
    true
);

check(
    "Normal - Sell cheapest",
    normalSell?.getPrice() === 500,
    true
);

check(
    "Hard - Sell cheapest",
    hardSell?.getPrice() === 500,
    true
);


// =====================================================
// SUMMARY
// =====================================================

console.log("\n========== TEST COMPLETE ==========\n");