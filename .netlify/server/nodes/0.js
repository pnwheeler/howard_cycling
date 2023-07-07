import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.faa7bd43.js","_app/immutable/chunks/index.69a6f942.js","_app/immutable/chunks/index.8710e3a6.js","_app/immutable/chunks/stores.af28e5f4.js","_app/immutable/chunks/singletons.b6448ed2.js"];
export const stylesheets = ["_app/immutable/assets/0.e6114828.css"];
export const fonts = [];
