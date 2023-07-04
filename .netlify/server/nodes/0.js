import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.c9258d9a.js","_app/immutable/chunks/index.772002be.js","_app/immutable/chunks/index.1ee06b8e.js","_app/immutable/chunks/stores.aaf82596.js","_app/immutable/chunks/singletons.f660ba9e.js"];
export const stylesheets = ["_app/immutable/assets/0.30b19739.css"];
export const fonts = [];
