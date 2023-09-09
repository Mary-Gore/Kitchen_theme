import { deleteAsync as del } from "del";
export const reset = () => del([app.path.clean, app.path.notClean]);