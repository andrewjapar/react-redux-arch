import { createAction } from "typesafe-actions";

export const showSidebar = createAction("nav/SIDEBAR_SHOW")<boolean>();

export default { showSidebar }