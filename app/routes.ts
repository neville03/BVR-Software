import { type RouteConfig, index, route } from "@react-router/dev/routes";


export default [index("routes/home.tsx"), route('about', 'routes/aboutPage.tsx')] satisfies RouteConfig;
