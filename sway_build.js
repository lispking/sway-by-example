import { execSync } from "child_process";
import * as fs from "fs";

function binToHex(filePath) {
    const buffer = fs.readFileSync(filePath);
    return buffer.toString('hex');
}

console.log(`\nRunning sway hex convert script`);

const routesDir = "./src/routes";
const examplesDir = `${routesDir}/(examples)`;
const data = fs.readFileSync(`${examplesDir}/examples.json`, "utf-8");
const examples = JSON.parse(data);
for (const i in examples) {
    const example = examples[i];
    if (!fs.existsSync(`${examplesDir}/${example.id}`)) {
        console.log(`   > WARNING: route (examples)/${example.id} not found in src`);
        continue;
    }

    const releasePath = `${examplesDir}/${example.id}/out/release`;
    if (!fs.existsSync(`${releasePath}/${example.name}.hex`)) {
        console.log(`   > ${example.id} Converting...`);
        execSync(`forc build --path ${routesDir}/\\(examples\\)/${example.id} --release`);
    
        fs.writeFileSync(`${releasePath}/${example.name}.hex`, binToHex(`${releasePath}/${example.name}.bin`));
        console.log(`   > ${example.id} Converted successfully`);
    } else {
        console.log(`   > ${example.id} Already converted`);
    }
}
