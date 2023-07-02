export function load({url}){
    // Prevent full-page transitions on a submenu
    // const re = "\/[^\/]*";
    // let res = url.pathname.match(re);
    // return {
    //     url: res?.[0]
    // }
    return {
        url: url.pathname
    }
}