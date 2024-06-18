<script lang="ts">
  import { getExample } from "$lib/helpers";
  import store from "$lib/store";
  import { deploy } from "$lib/deploy";
  import type { Contract } from "fuels";

  import markdown from "./content.md?raw";
  import swayCode from "./src/main.sw?raw";
  import binContent from './out/release/hello-modular.bin?raw';
  import abiContent from './out/release/hello-modular-abi.json?raw';

  let contract: Contract;
  let bytecode = stringToHexAsBytes(binContent);
  let abi = JSON.parse(abiContent);

  $store = {
    markdown,
    swayCode,
    deploy: async () => {
      contract = await deploy(bytecode, abi);
      return [contract];
    },
    messages: {},
    getters: {
      my_lucky_number: async () => {
        return await contract.functions.my_lucky_number().get();
      },
    },
    prev: getExample(import.meta.url).prev,
    next: getExample(import.meta.url).next,
  };

  function stringToHexAsBytes(str: string): string {
    const encoder = new TextEncoder();
    const bytes = encoder.encode(str);
    let hex = '0x';
    for (const byte of bytes) {
      hex += byte.toString(16).padStart(2, '0');
    }
    return hex;
  }
</script>
