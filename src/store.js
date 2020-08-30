import {writable} from "svelte/store";
export let turn = writable("Player1");
export let player = writable("Single player");
export let option = writable("Reset");
