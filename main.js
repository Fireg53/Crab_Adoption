import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import { routes } from "./router.js";

export const createApp = ViteSSG(App, { routes });
