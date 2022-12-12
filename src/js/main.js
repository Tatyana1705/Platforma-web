import aboutSlaider from "./about-slaider";
import mainNav from "./main-nav";
import smoothScrolling from "./smooth-scrolling";
import apperBlocks from "./apper-blocks";

import { initSlaider } from "./slaider";
import { formInit } from "./form";
import { initModa } from "./modal";

aboutSlaider();
mainNav();
smoothScrolling();
apperBlocks();

formInit('page-form');
formInit('modal-form');

initSlaider('#team');
initSlaider('#works');

initModa('modal', 'open-modal');