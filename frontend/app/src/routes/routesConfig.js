import Home from "../screens/home/Home";
import Phim from "../screens/home/Phim";



const HOME = { component: Home, path: "/home", isPrivate: false };
const PHIM = { component: Phim, path: "/phim", isPrivate: false };
// const PHIMLE = { component: Watch, path: "/phim-le", isPrivate: false };

export default [HOME, PHIM];