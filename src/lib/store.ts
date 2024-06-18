import { Contract } from "fuels";
import { writable } from "svelte/store";

interface Store {
  markdown: string;
  swayCode: string;
  deploy: () => Promise<Contract[]>;
  messages: { [message: string]: () => Promise<any[]> };
  getters: { [getter: string]: () => Promise<any> };
  prev?: {
    name: string;
    id: string;
  };
  next?: {
    name: string;
    id: string;
  };
}

export default writable({
  markdown: "",
  swayCode: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  deploy: () => {},
  messages: {},
  getters: {},
} as Store);
