// run in terminal
// npm install --save vue-router
//to install vue-router

//import components to use
import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Stocks from './components/stocks/Stocks';

export const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio },
    { path: '/stocks', component: Stocks },
    { path: '*', redirect: '/' }
];