import * as flsFunctions from "./modules/functions.js";
import "./modules/map.js";
import "./modules/gallerySwiper.js";

import { readMore } from "./modules/readMore.js";
import { loadReviews } from "./modules/loadReviews.js";
import { toggleMenu } from "./modules/toggleMenu.js";
import { sendForm } from "./modules/sendForm.js";
import { popupAnimate } from "./modules/popupAnimate.js";

flsFunctions.isWebp();
readMore();
loadReviews();
toggleMenu();
sendForm('lead-form');
sendForm('project-form');
popupAnimate();
