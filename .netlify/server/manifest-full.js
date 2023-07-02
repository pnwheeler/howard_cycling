export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","icons/arrow_right.svg","icons/close_icon.svg","icons/fb_logo.png","icons/icons8-new-tab.svg","icons/insta_logo.png","icons/menu_icon.svg","icons/teamapp_logo.png","img/bikers.png","img/bill.jpg","img/dan.jpg","img/HowardLion_color.png","img/HowardLion_Vectorized.png","img/mountain_bikers.jpg","img/NICA.png","img/NICA_MD.png","img/photos_tab/biker1.png","img/photos_tab/biker2.png","img/photos_tab/biker3.png","img/photos_tab/biker4.png","img/photos_tab/biker5.png","img/photos_tab/biker6.png","img/photos_tab/gallery10.png","img/photos_tab/gallery11.png","img/photos_tab/gallery12.png","img/photos_tab/gallery13.png","img/photos_tab/gallery14.png","img/photos_tab/gallery15.png","img/photos_tab/gallery16.png","img/photos_tab/gallery7.png","img/photos_tab/gallery8.png","img/photos_tab/gallery9.png","img/placeholder_merch.jpg","RobotoFlex[GRAD,XOPQ,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght].ttf"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg",".ttf":"font/ttf"},
	_: {
		client: {"start":"_app/immutable/entry/start.067778e7.js","app":"_app/immutable/entry/app.2d9feed4.js","imports":["_app/immutable/entry/start.067778e7.js","_app/immutable/chunks/index.d7c543de.js","_app/immutable/chunks/singletons.282dee4b.js","_app/immutable/entry/app.2d9feed4.js","_app/immutable/chunks/index.d7c543de.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/coaches",
				pattern: /^\/coaches\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/events",
				pattern: /^\/events\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/faq",
				pattern: /^\/faq\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/photos",
				pattern: /^\/photos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/registration",
				pattern: /^\/registration\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/teaminfo",
				pattern: /^\/teaminfo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
