import * as fs from "fs";

function binToHex(filePath) {
    const buffer = fs.readFileSync(filePath);
    return buffer.toString('hex');
}

console.log(`\nRunning sway hex convert script`);

const data = fs.readFileSync("./src/routes/(examples)/examples.json", "utf-8");
const examples = JSON.parse(data);
for (const i in examples) {
    const example = examples[i];
    if (!fs.existsSync(`./src/routes/(examples)/${example.id}`)) {
        console.log(`   > WARNING: route (examples)/${example.id} not found in src`);
        continue;
    }
    const releasePath = `./src/routes/(examples)/${example.id}/out/release`;
    fs.writeFileSync(`${releasePath}/${example.name}.hex`, binToHex(`${releasePath}/${example.name}.bin`));
    console.log(`   > ${example.id} Converted successfully`);
}
