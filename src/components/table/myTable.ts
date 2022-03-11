import { App } from "vue";
import myTable from "./src/myTable.vue";

export default {
  install(app: App) {
    app.component("myTable", myTable);
  },
};
