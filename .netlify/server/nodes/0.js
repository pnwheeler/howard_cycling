import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.560b5589.js","_app/immutable/chunks/index.852c76ba.js","_app/immutable/chunks/index.40ae64fa.js","_app/immutable/chunks/stores.36a19d31.js","_app/immutable/chunks/singletons.0b3a876e.js"];
export const stylesheets = ["_app/immutable/assets/0.5d646fb1.css"];
export const fonts = [];
