/*
 * @Description:
 * @Author: liuxiaodan
 * @FilePath: \packages\play\src\main.ts
 * @Date: 2025-01-17 16:38:21
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import CyriexUi from "cyriex-ui";
// import 'cyriex-ui/dist/index.css';

const app = createApp(App);
app.use(CyriexUi);
app.mount("#app");
