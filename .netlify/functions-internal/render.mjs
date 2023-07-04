import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/RobotoFlex.woff2","fonts/RobotoFlex[GRAD,XOPQ,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght].ttf","icons/arrow_right.svg","icons/close_icon.svg","icons/fb_logo.png","icons/icons8-new-tab.svg","icons/insta_logo.png","icons/menu_icon.svg","icons/teamapp_logo.png","img/bikers.png","img/bill.jpg","img/dan.jpg","img/HowardLion_color.png","img/HowardLion_Vectorized.png","img/mountain_bikers.jpg","img/NICA.png","img/NICA_MD.png","img/photos_tab/biker1.png","img/photos_tab/biker2.png","img/photos_tab/biker3.png","img/photos_tab/biker4.png","img/photos_tab/biker5.png","img/photos_tab/biker6.png","img/photos_tab/gallery10.png","img/photos_tab/gallery11.png","img/photos_tab/gallery12.png","img/photos_tab/gallery13.png","img/photos_tab/gallery14.png","img/photos_tab/gallery15.png","img/photos_tab/gallery16.png","img/photos_tab/gallery7.png","img/photos_tab/gallery8.png","img/photos_tab/gallery9.png","img/placeholder_merch.jpg"]),
	mimeTypes: {".png":"image/png",".woff2":"font/woff2",".ttf":"font/ttf",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.79d2c247.js","app":"_app/immutable/entry/app.b7042199.js","imports":["_app/immutable/entry/start.79d2c247.js","_app/immutable/chunks/index.772002be.js","_app/immutable/chunks/singletons.f660ba9e.js","_app/immutable/entry/app.b7042199.js","_app/immutable/chunks/index.772002be.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
