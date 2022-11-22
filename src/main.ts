// import { test } from "./001";
// import { test } from "./002_Install_TypeScript";
import { test } from "./003_Into_Documentation";
import { style } from "./components/LiStyle";
import { estudio } from "./999_Estudio_Diario";

test();
style();
let $app = document.getElementById("app") as HTMLElement;
$app.innerHTML = estudio();
