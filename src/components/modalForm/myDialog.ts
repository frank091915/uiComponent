import { App } from "vue";
import dialog from "./src/myDialog.vue";

export default {
  install(app: App) {
    app.component("myDialog", dialog);
  },
};
