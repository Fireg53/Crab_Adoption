// Just export the routes array, no router creation here
import AboutUs from "./pages/aboutUs.vue";
import Crabs from "./pages/crabs.vue";
import Home from "./pages/index.vue";

export const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/aboutUs", name: "About", component: AboutUs },
  { path: "/crabs", name: "Crabs", component: Crabs },
];
