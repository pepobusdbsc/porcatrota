!function(){var k,w,u,s,d,c,g,m,v,y,i,T,x,o,r,b,h,M,F,A,L,B,q,C,S,O,t,N
!function(a){"use strict"
var e,t,i
a(document).on("click",".nav-menu a, .mobile-nav a, .scrollto",function(e){var t
if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname&&(e.preventDefault(),(t=a(this.hash)).length))return t=t.offset().top,a("#header").length&&(t-=a("#header").outerHeight()-2),"#header"==a(this).attr("href")&&(t=0),a("html, body").animate({scrollTop:t},1500,"easeInOutExpo"),a(this).parents(".nav-menu, .mobile-nav").length&&(a(".nav-menu .active, .mobile-nav .active").removeClass("active"),a(this).closest("li").addClass("active")),a("body").hasClass("mobile-nav-active")&&(a("body").removeClass("mobile-nav-active"),a(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),a(".mobile-nav-overly").fadeOut()),!1}),a(".nav-menu").length?(e=a(".nav-menu").clone().prop({class:"mobile-nav d-lg-none"}),a("body").append(e),a("body").prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'),a("body").append('<div class="mobile-nav-overly"></div>'),a(document).on("click",".mobile-nav-toggle",function(e){a("body").toggleClass("mobile-nav-active"),a(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),a(".mobile-nav-overly").toggle()}),a(document).on("click",".mobile-nav .drop-down > a",function(e){e.preventDefault(),a(this).next().slideToggle(300),a(this).parent().toggleClass("active")}),a(document).click(function(e){var t=a(".mobile-nav, .mobile-nav-toggle")
t.is(e.target)||0!==t.has(e.target).length||a("body").hasClass("mobile-nav-active")&&(a("body").removeClass("mobile-nav-active"),a(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close"),a(".mobile-nav-overly").fadeOut())})):a(".mobile-nav, .mobile-nav-toggle").length&&a(".mobile-nav, .mobile-nav-toggle").hide(),t=a("section"),i=a(".nav-menu, #mobile-nav"),a(window).on("scroll",function(){var n=a(this).scrollTop()+80
t.each(function(){var e=a(this).offset().top,t=e+a(this).outerHeight()
e<=n&&n<=t&&(n<=t&&i.find("li").removeClass("active"),i.find('a[href="#'+a(this).attr("id")+'"]').parent("li").addClass("active"))})}),a(window).scroll(function(){100<a(this).scrollTop()?a("#header").addClass("header-scrolled"):a("#header").removeClass("header-scrolled")}),100<a(window).scrollTop()&&a("#header").addClass("header-scrolled"),a(window).scroll(function(){100<a(this).scrollTop()?a(".back-to-top").fadeIn("slow"):a(".back-to-top").fadeOut("slow")}),a(".back-to-top").click(function(){return a("html, body").animate({scrollTop:0},1500,"easeInOutExpo",function(){a(".nav-menu ul:first li:first").addClass("active")}),!1}),a(window).on("load",function(){var e=a(".portfolio-container").isotope({itemSelector:".portfolio-item",layoutMode:"fitRows"})
a("#portfolio-flters li").on("click",function(){a("#portfolio-flters li").removeClass("filter-active"),a(this).addClass("filter-active"),e.isotope({filter:a(this).data("filter")})}),a(document).ready(function(){a(".venobox").venobox()})}),a(".testimonials-carousel").owlCarousel({autoplay:!0,dots:!0,loop:!0,responsive:{0:{items:1},768:{items:2},900:{items:3}}}),a(".portfolio-details-carousel").owlCarousel({autoplay:!0,dots:!0,loop:!0,items:1}),AOS.init({duration:800})}(jQuery)
const P="0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F",I="0xBCfCcbde45cE874adCB698cC183deBcF17952812",E="0x10ED43C718714eb63d5aA57B78B54704E256024E",D="0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",R="0xeb3a9c56d963b971d320f889be2fb8b59853e449",W="0x3f4d6bf08cb7a003488ef082102c2e6418a4551e",U="0xe0c3ab2c69d8b43d8b0d922afa224a0ab6780de1",H="0xC765bddB93b0D1c1A88282BA0fa6B2d00E3e0c83",V="0xAe7e6CAbad8d80f0b4E1C4DDE2a5dB7201eF1252",z="0xd0C1d18f091B182B80f342C654280B9004c0b124",j="0x065a652435935dd870679c9d3caa2e96b2585f1e",Y="0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16",G="0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",X="0xe9e7cea3dedca5984780bafc599bd69add087d56",J=[{inputs:[{internalType:"address",name:"_feeToSetter",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"token0",type:"address"},{indexed:!0,internalType:"address",name:"token1",type:"address"},{indexed:!1,internalType:"address",name:"pair",type:"address"},{indexed:!1,internalType:"uint256",name:"",type:"uint256"}],name:"PairCreated",type:"event"},{constant:!0,inputs:[],name:"INIT_CODE_PAIR_HASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"allPairs",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"allPairsLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"}],name:"createPair",outputs:[{internalType:"address",name:"pair",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"feeTo",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"feeToSetter",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"},{internalType:"address",name:"",type:"address"}],name:"getPair",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"_feeTo",type:"address"}],name:"setFeeTo",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"_feeToSetter",type:"address"}],name:"setFeeToSetter",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],Q=[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amount0",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount1",type:"uint256"},{indexed:!0,internalType:"address",name:"to",type:"address"}],name:"Burn",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amount0",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount1",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amount0In",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount1In",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount0Out",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount1Out",type:"uint256"},{indexed:!0,internalType:"address",name:"to",type:"address"}],name:"Swap",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint112",name:"reserve0",type:"uint112"},{indexed:!1,internalType:"uint112",name:"reserve1",type:"uint112"}],name:"Sync",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[],name:"DOMAIN_SEPARATOR",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"MINIMUM_LIQUIDITY",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"PERMIT_TYPEHASH",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"},{internalType:"address",name:"",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"}],name:"burn",outputs:[{internalType:"uint256",name:"amount0",type:"uint256"},{internalType:"uint256",name:"amount1",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",
type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"factory",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getReserves",outputs:[{internalType:"uint112",name:"_reserve0",type:"uint112"},{internalType:"uint112",name:"_reserve1",type:"uint112"},{internalType:"uint32",name:"_blockTimestampLast",type:"uint32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"_token0",type:"address"},{internalType:"address",name:"_token1",type:"address"}],name:"initialize",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"kLast",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"}],name:"mint",outputs:[{internalType:"uint256",name:"liquidity",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"nonces",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"permit",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"price0CumulativeLast",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"price1CumulativeLast",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"}],name:"skim",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount0Out",type:"uint256"},{internalType:"uint256",name:"amount1Out",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"bytes",name:"data",type:"bytes"}],name:"swap",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"sync",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"token0",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"token1",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],K=[{inputs:[{internalType:"address",name:"_factory",type:"address"},{internalType:"address",name:"_WETH",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"WETH",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"},{internalType:"uint256",name:"amountADesired",type:"uint256"},{internalType:"uint256",name:"amountBDesired",type:"uint256"},{internalType:"uint256",name:"amountAMin",type:"uint256"},{internalType:"uint256",name:"amountBMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"addLiquidity",outputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"amountB",type:"uint256"},{internalType:"uint256",name:"liquidity",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amountTokenDesired",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"addLiquidityETH",outputs:[{internalType:"uint256",name:"amountToken",type:"uint256"},{internalType:"uint256",name:"amountETH",type:"uint256"},{internalType:"uint256",name:"liquidity",type:"uint256"}],stateMutability:"payable",type:"function"},{inputs:[],name:"factory",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"uint256",name:"reserveIn",type:"uint256"},{internalType:"uint256",name:"reserveOut",type:"uint256"}],name:"getAmountIn",outputs:[{internalType:"uint256",name:"amountIn",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"}
,{internalType:"uint256",name:"reserveIn",type:"uint256"},{internalType:"uint256",name:"reserveOut",type:"uint256"}],name:"getAmountOut",outputs:[{internalType:"uint256",name:"amountOut",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"}],name:"getAmountsIn",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"}],name:"getAmountsOut",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"reserveA",type:"uint256"},{internalType:"uint256",name:"reserveB",type:"uint256"}],name:"quote",outputs:[{internalType:"uint256",name:"amountB",type:"uint256"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountAMin",type:"uint256"},{internalType:"uint256",name:"amountBMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"removeLiquidity",outputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"amountB",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"removeLiquidityETH",outputs:[{internalType:"uint256",name:"amountToken",type:"uint256"},{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"removeLiquidityETHSupportingFeeOnTransferTokens",outputs:[{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bool",name:"approveMax",type:"bool"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"removeLiquidityETHWithPermit",outputs:[{internalType:"uint256",name:"amountToken",type:"uint256"},{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountTokenMin",type:"uint256"},{internalType:"uint256",name:"amountETHMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bool",name:"approveMax",type:"bool"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",outputs:[{internalType:"uint256",name:"amountETH",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"tokenA",type:"address"},{internalType:"address",name:"tokenB",type:"address"},{internalType:"uint256",name:"liquidity",type:"uint256"},{internalType:"uint256",name:"amountAMin",type:"uint256"},{internalType:"uint256",name:"amountBMin",type:"uint256"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"},{internalType:"bool",name:"approveMax",type:"bool"},{internalType:"uint8",name:"v",type:"uint8"},{internalType:"bytes32",name:"r",type:"bytes32"},{internalType:"bytes32",name:"s",type:"bytes32"}],name:"removeLiquidityWithPermit",outputs:[{internalType:"uint256",name:"amountA",type:"uint256"},{internalType:"uint256",name:"amountB",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapETHForExactTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactETHForTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactETHForTokensSupportingFeeOnTransferTokens",outputs:[],
stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForETH",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForETHSupportingFeeOnTransferTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountIn",type:"uint256"},{internalType:"uint256",name:"amountOutMin",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapExactTokensForTokensSupportingFeeOnTransferTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"uint256",name:"amountInMax",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapTokensForExactETH",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amountOut",type:"uint256"},{internalType:"uint256",name:"amountInMax",type:"uint256"},{internalType:"address[]",name:"path",type:"address[]"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"deadline",type:"uint256"}],name:"swapTokensForExactTokens",outputs:[{internalType:"uint256[]",name:"amounts",type:"uint256[]"}],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}],Z="0x0000000000000000000000000000000000000000",ee="0x0000000000000000000000000000000000000001",te="0x000000000000000000000000000000000000dead",ne=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],type:"function"},,{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!(N="binance smart chain mainnet"),stateMutability:"nonpayable",type:"function"}],ae=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!(t="https://bsc-dataseed.binance.org"),inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"tokenAddress",type:"address"},{indexed:!0,internalType:"address",name:"sender",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"unlockTime",type:"uint256"},{indexed:!1,internalType:"uint256",name:"depositId",type:"uint256"}],name:"TokensLocked",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"tokenAddress",type:"address"},{indexed:!0,internalType:"address",name:"receiver",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"TokensWithdrawn",type:"event"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"allDepositIds",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"bnbFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"depositId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"}],name:"depositsByTokenAddress",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"}],name:"depositsByWithdrawalAddress",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getAllDepositIds",
outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"getDepositDetails",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"}],name:"getDepositsByTokenAddress",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_withdrawalAddress",type:"address"}],name:"getDepositsByWithdrawalAddress",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"address",name:"_walletAddress",type:"address"}],name:"getTokenBalanceByAddress",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"}],name:"getTotalTokenBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_tokenAddress",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"uint256",name:"_unlockTime",type:"uint256"},{internalType:"bool",name:"_feeInBnb",type:"bool"}],name:"lockTokens",outputs:[{internalType:"uint256",name:"_id",type:"uint256"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"lockedToken",outputs:[{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"address",name:"withdrawalAddress",type:"address"},{internalType:"uint256",name:"tokenAmount",type:"uint256"},{internalType:"uint256",name:"unlockTime",type:"uint256"},{internalType:"bool",name:"withdrawn",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"lpFeePercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"remainingBnbFees",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"fee",type:"uint256"}],name:"setBnbFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"percent",type:"uint256"}],name:"setLpFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"tokensFees",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalBnbFees",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"address",name:"",type:"address"}],name:"walletTokenBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address payable",name:"withdrawalAddress",type:"address"}],name:"withdrawFees",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"withdrawTokens",outputs:[],stateMutability:"nonpayable",type:"function"}],ie=[{inputs:[{internalType:"contract IPancakeFactory",name:"_pancakeFactory",type:"address"},{internalType:"address",name:"_feesCalculator",type:"address"},{internalType:"address payable",name:"_feesReceiver",type:"address"},{internalType:"address",name:"_feeToken",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"OnLockAmountIncreased",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"newUnlockTime",type:"uint256"}],name:"OnLockDurationIncreased",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"},{indexed:!0,internalType:"address",name:"migrator",type:"address"}],name:"OnLockMigration",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OnLockOwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"OnLockWithdrawal",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"},{indexed:!0,internalType:"address",name:"tokenAddress",type:"address"},{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"unlockTime",type:"uint256"}],name:"OnTokenLock",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"}],name:"OnTokenUnlock",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"},{internalType:"uint256",
name:"newUnlockTime",type:"uint256"}],name:"extendLockTime",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"feeReceiver",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"feeToken",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"feesCalculator",outputs:[{internalType:"contract IFeesCalculator",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"},{internalType:"uint256",name:"amountToIncrement",type:"uint256"},{internalType:"uint8",name:"feePaymentMode",type:"uint8"}],name:"increaseLockAmount",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"lockNonce",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"lpToken",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"unlockTime",type:"uint256"},{internalType:"address payable",name:"withdrawer",type:"address"},{internalType:"uint8",name:"feePaymentMode",type:"uint8"}],name:"lockTokens",outputs:[{internalType:"uint256",name:"lockId",type:"uint256"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"},{internalType:"address",name:"migratorContract",type:"address"}],name:"migrate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"migrator",outputs:[{internalType:"contract IMigrator",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"pancakeFactory",outputs:[{internalType:"contract IPancakeFactory",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address payable",name:"newFeeReceiver",type:"address"}],name:"setFeeReceiver",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newFeesCalculator",type:"address"}],name:"setFeesCalculator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newMigrator",type:"address"}],name:"setMigrator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"tokenLocks",outputs:[{internalType:"address",name:"lpToken",type:"address"},{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"tokenAmount",type:"uint256"},{internalType:"uint256",name:"unlockTime",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"},{internalType:"address",name:"newOwner",type:"address"}],name:"transferLock",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"userLockAt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"userLocksLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"website",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdrawPartially",outputs:[],stateMutability:"nonpayable",type:"function"}],oe=[{inputs:[{internalType:"contract IUniFactory",name:"_uniswapFactory",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"lpToken",type:"address"},{indexed:!1,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"lockDate",type:"uint256"},{indexed:!1,internalType:"uint256",name:"unlockDate",type:"uint256"}],name:"onDeposit",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"lpToken",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"onWithdraw",type:"event"},{inputs:[],name:"MIGRATION_IN",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"gFees",outputs:[{internalType:"uint256",name:"ethFee",type:"uint256"},{internalType:"contract IERCBurn",name:"secondaryFeeToken",type:"address"},{internalType:"uint256",name:"secondaryTokenFee",type:"uint256"},{internalType:"uint256",name:"secondaryTokenDiscount",type:"uint256"},{internalType:"uint256",name:"liquidityFee",type:"uint256"},{internalType:"uint256",name:"referralPercent",type:"uint256"},{internalType:"contract IERCBurn",name:"referralToken",type:"address"},{internalType:"uint256",name:"referralHold",type:"uint256"},{internalType:"uint256",name:"referralDiscount",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_index",type:"uint256"}],name:"getLockedTokenAtIndex",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],
name:"getNumLockedTokens",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_lpToken",type:"address"}],name:"getNumLocksForToken",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"},{internalType:"address",name:"_lpToken",type:"address"},{internalType:"uint256",name:"_index",type:"uint256"}],name:"getUserLockForTokenAtIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"},{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"},{internalType:"uint256",name:"_index",type:"uint256"}],name:"getUserLockedTokenAtIndex",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"getUserNumLockedTokens",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"},{internalType:"address",name:"_lpToken",type:"address"}],name:"getUserNumLocksForToken",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"getUserWhitelistStatus",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_index",type:"uint256"}],name:"getWhitelistedUserAtIndex",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getWhitelistedUsersLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_lpToken",type:"address"},{internalType:"uint256",name:"_index",type:"uint256"},{internalType:"uint256",name:"_lockID",type:"uint256"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"incrementLock",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_lpToken",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"uint256",name:"_unlock_date",type:"uint256"},{internalType:"address payable",name:"_referral",type:"address"},{internalType:"bool",name:"_fee_in_eth",type:"bool"},{internalType:"address payable",name:"_withdrawer",type:"address"}],name:"lockLPToken",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"_lpToken",type:"address"},{internalType:"uint256",name:"_index",type:"uint256"},{internalType:"uint256",name:"_lockID",type:"uint256"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"migrate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_lpToken",type:"address"},{internalType:"uint256",name:"_index",type:"uint256"},{internalType:"uint256",name:"_lockID",type:"uint256"},{internalType:"uint256",name:"_unlock_date",type:"uint256"}],name:"relock",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address payable",name:"_devaddr",type:"address"}],name:"setDev",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_referralPercent",type:"uint256"},{internalType:"uint256",name:"_referralDiscount",type:"uint256"},{internalType:"uint256",name:"_ethFee",type:"uint256"},{internalType:"uint256",name:"_secondaryTokenFee",type:"uint256"},{internalType:"uint256",name:"_secondaryTokenDiscount",type:"uint256"},{internalType:"uint256",name:"_liquidityFee",type:"uint256"}],name:"setFees",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_migrationIn",type:"address"}],name:"setMigrationIn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"contract IMigrator",name:"_migrator",type:"address"}],name:"setMigrator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"contract IERCBurn",name:"_referralToken",type:"address"},{internalType:"uint256",name:"_hold",type:"uint256"}],name:"setReferralTokenAndHold",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_secondaryFeeToken",type:"address"}],name:"setSecondaryFeeToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_lpToken",type:"address"},{internalType:"uint256",name:"_index",type:"uint256"},{internalType:"uint256",name:"_lockID",type:"uint256"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"splitLock",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"},{internalType:"uint256",name:"",type:"uint256"}],name:"tokenLocks",outputs:[{internalType:"uint256",name:"lockDate",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"initialAmount",type:"uint256"},{internalType:"uint256",name:"unlockDate",type:"uint256"},{internalType:"uint256",name:"lockID",type:"uint256"},{internalType:"address",name:"owner",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_lpToken",type:"address"},{internalType:"uint256",name:"_index",type:"uint256"},{internalType:"uint256",name:"_lockID",type:"uint256"},{internalType:"address payable",name:"_newOwner",type:"address"}],
name:"transferLockOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"uniswapFactory",outputs:[{internalType:"contract IUniFactory",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"},{internalType:"bool",name:"_add",type:"bool"}],name:"whitelistFeeAccount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_lpToken",type:"address"},{internalType:"uint256",name:"_index",type:"uint256"},{internalType:"uint256",name:"_lockID",type:"uint256"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],re=[{inputs:[{internalType:"address payable",name:"_feesReceiver",type:"address"},{internalType:"address",name:"_mudraToken",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"OnLockAmountIncreased",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"newUnlockTime",type:"uint256"}],name:"OnLockDurationIncreased",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"},{indexed:!0,internalType:"address",name:"migrator",type:"address"}],name:"OnLockMigration",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OnLockOwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"OnLockWithdrawal",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"},{indexed:!0,internalType:"address",name:"tokenAddress",type:"address"},{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"unlockTime",type:"uint256"}],name:"OnTokenLock",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"lockId",type:"uint256"}],name:"OnTokenUnlock",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"bnbFeeAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"},{internalType:"uint256",name:"newUnlockTime",type:"uint256"}],name:"extendLockTime",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"feeReceiver",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"increaseAmountBnbFeeAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"increaseAmountMudraFeeAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"},{internalType:"uint256",name:"amountToIncrement",type:"uint256"},{internalType:"uint8",name:"feePaymentMode",type:"uint8"}],name:"increaseLockAmount",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"lockNonce",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"lpToken",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"unlockTime",type:"uint256"},{internalType:"address payable",name:"withdrawer",type:"address"},{internalType:"uint8",name:"feePaymentMode",type:"uint8"}],name:"lockTokens",outputs:[{internalType:"uint256",name:"lockId",type:"uint256"}],stateMutability:"payable",type:"function"},{inputs:[],name:"lpFeePercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"lpToken",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"lpLockAt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"lpToken",type:"address"}],name:"lpLocksLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"},{internalType:"address",name:"migratorContract",type:"address"}],name:"migrate",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"migrator",outputs:[{internalType:"contract IMigrator",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"mudraFeeAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"mudraToken",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"fee",type:"uint256"}],name:"setBnbFeeAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address payable",name:"newFeeReceiver",type:"address"}],name:"setFeeReceiver",outputs:[],stateMutability:"nonpayable",
type:"function"},{inputs:[{internalType:"uint256",name:"fee",type:"uint256"}],name:"setIncreaseAmountBnbFeeAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"fee",type:"uint256"}],name:"setIncreaseAmountMudraFeeAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"percent",type:"uint256"}],name:"setLpFeePercent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newMigrator",type:"address"}],name:"setMigrator",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"fee",type:"uint256"}],name:"setMudraFeeAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"tokenLocks",outputs:[{internalType:"address",name:"lpToken",type:"address"},{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"tokenAmount",type:"uint256"},{internalType:"uint256",name:"unlockTime",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"},{internalType:"address",name:"newOwner",type:"address"}],name:"transferLock",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"userLockAt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"userLocksLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"}],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"lockId",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"withdrawPartially",outputs:[],stateMutability:"nonpayable",type:"function"}],se=[{inputs:[{internalType:"address payable",name:"_feesReceiver",type:"address"},{internalType:"address",name:"_mudraToken",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"bnbFeeAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"contractNonce",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"name",type:"string"},{internalType:"string",name:"symbol",type:"string"},{internalType:"uint8",name:"decimal",type:"uint8"},{internalType:"uint256",name:"amountOfTokenWei",type:"uint256"},{internalType:"uint8",name:"mxTxPer",type:"uint8"},{internalType:"uint8",name:"mxWalletPer",type:"uint8"},{internalType:"address payable",name:"feeWallet",type:"address"},{internalType:"uint8",name:"feePaymentMode",type:"uint8"},{components:[{internalType:"uint8",name:"setTaxFee",type:"uint8"},{internalType:"uint8",name:"setLiqFee",type:"uint8"},{internalType:"uint8",name:"setBurnFee",type:"uint8"},{internalType:"uint8",name:"setWalletFee",type:"uint8"},{internalType:"uint8",name:"setBuybackFee",type:"uint8"}],internalType:"struct TokenDeployer.Fee",name:"fee",type:"tuple"}],name:"createTokenContract",outputs:[{internalType:"address",name:"contractAddress",type:"address"}],stateMutability:"payable",type:"function"},{inputs:[],name:"feeReceiver",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"geUnlockTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"time",type:"uint256"}],name:"lock",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"maxLiqFee",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxTaxFee",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"mudraFeeAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"mudraToken",outputs:[{internalType:"contract IERC20",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"fee",type:"uint256"}],name:"setBnbFeeAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address payable",name:"newFeeReceiver",type:"address"}],name:"setFeeReceiver",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint8",name:"fee",type:"uint8"}],name:"setMaxLiqFeeAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint8",name:"fee",type:"uint8"}],name:"setMaxTaxFeeAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"fee",type:"uint256"}],name:"setMudraFeeAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"tokenContracts",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],
name:"unlock",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"userContractAt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"userContractsLength",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],le=[{inputs:[{internalType:"address",name:"tokenOwner",type:"address"},{internalType:"string",name:"tokenName",type:"string"},{internalType:"string",name:"tokenSymbol",type:"string"},{internalType:"uint8",name:"decimal",type:"uint8"},{internalType:"uint256",name:"amountOfTokenWei",type:"uint256"},{internalType:"uint8",name:"setMxTxPer",type:"uint8"},{internalType:"uint8",name:"setMxWalletPer",type:"uint8"},{internalType:"address payable",name:"_feeWallet",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"tokensSwapped",type:"uint256"},{indexed:!1,internalType:"uint256",name:"ethReceived",type:"uint256"},{indexed:!1,internalType:"uint256",name:"tokensIntoLiqudity",type:"uint256"}],name:"SwapAndLiquify",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"bool",name:"enabled",type:"bool"}],name:"SwapAndLiquifyEnabledUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"_burnFee",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"_buybackFee",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"_liquidityFee",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"_maxTxAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"_maxWalletAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"_name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"_symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"_tTotal",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"_taxFee",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"_walletFee",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"buyBackUpperLimitAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tAmount",type:"uint256"}],name:"deliver",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"excludeFromFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"excludeFromReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"feeWallet",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"geUnlockTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"includeInFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"includeInReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isExcludedFromFee",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],
name:"isExcludedFromReward",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"time",type:"uint256"}],name:"lock",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"maxBurnFee",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxBuybackFee",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxLiqFee",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxTaxFee",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxWalletFee",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"minMxTxPercentage",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"minMxWalletPercentage",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"mintedByMudra",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"numTokensSellToAddToLiquidity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"pcsV2Pair",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"pcsV2Router",outputs:[{internalType:"contract IUniswapV2Router02",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"tokenAddress",type:"address"},{internalType:"uint256",name:"tokenAmount",type:"uint256"}],name:"recoverBEP20",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tAmount",type:"uint256"},{internalType:"bool",name:"deductTransferFee",type:"bool"}],name:"reflectionFromToken",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"router",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint8",name:"taxFee",type:"uint8"},{internalType:"uint8",name:"liquidityFee",type:"uint8"},{internalType:"uint8",name:"burnFee",type:"uint8"},{internalType:"uint8",name:"walletFee",type:"uint8"},{internalType:"uint8",name:"buybackFee",type:"uint8"}],name:"setAllFeePercent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"buyBackLimit",type:"uint256"}],name:"setBuybackUpperLimit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address payable",name:"newFeeWallet",type:"address"}],name:"setFeeWallet",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"maxTxPercent",type:"uint256"}],name:"setMaxTxPercent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"maxWalletPercent",type:"uint256"}],name:"setMaxWalletPercent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_enabled",type:"bool"}],name:"setSwapAndLiquifyEnabled",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"swapAndLiquifyEnabled",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"rAmount",type:"uint256"}],name:"tokenFromReflection",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalFees",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"unlock",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}],ue=`
// SPDX-License-Identifier: MIT

pragma solidity 0.8.6;

interface IERC20 {

    function totalSupply() external view returns (uint256);

    /**
        * @dev Returns the amount of tokens owned by \`account\`.
        */
    function balanceOf(address account) external view returns (uint256);

    /**
        * @dev Moves \`amount\` tokens from the caller's account to \`recipient\`.
        *
        * Returns a boolean value indicating whether the operation succeeded.
        *
        * Emits a {Transfer} event.
        */
    function transfer(address recipient, uint256 amount) external returns (bool);

    /**
        * @dev Returns the remaining number of tokens that \`spender\` will be
        * allowed to spend on behalf of \`owner\` through {transferFrom}. This is
        * zero by default.
        *
        * This value changes when {approve} or {transferFrom} are called.
        */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
        * @dev Sets \`amount\` as the allowance of \`spender\` over the caller's tokens.
        *
        * Returns a boolean value indicating whether the operation succeeded.
        *
        * IMPORTANT: Beware that changing an allowance with this method brings the risk
        * that someone may use both the old and the new allowance by unfortunate
        * transaction ordering. One possible solution to mitigate this race
        * condition is to first reduce the spender's allowance to 0 and set the
        * desired value afterwards:
        * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
        *
        * Emits an {Approval} event.
        */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
        * @dev Moves \`amount\` tokens from \`sender\` to \`recipient\` using the
        * allowance mechanism. \`amount\` is then deducted from the caller's
        * allowance.
        *
        * Returns a boolean value indicating whether the operation succeeded.
        *
        * Emits a {Transfer} event.
        */
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);

    /**
        * @dev Emitted when \`value\` tokens are moved from one account (\`from\`) to
        * another (\`to\`).
        *
        * Note that \`value\` may be zero.
        */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
        * @dev Emitted when the allowance of a \`spender\` for an \`owner\` is set by
        * a call to {approve}. \`value\` is the new allowance.
        */
    event Approval(address indexed owner, address indexed spender, uint256 value);
}


/**
    * @dev Wrappers over Solidity's arithmetic operations with added overflow
    * checks.
    *
    * Arithmetic operations in Solidity wrap on overflow. This can easily result
    * in bugs, because programmers usually assume that an overflow raises an
    * error, which is the standard behavior in high level programming languages.
    * \`SafeMath\` restores this intuition by reverting the transaction when an
    * operation overflows.
    *
    * Using this library instead of the unchecked operations eliminates an entire
    * class of bugs, so it's recommended to use it always.
    */
    
library SafeMath {
    /**
        * @dev Returns the addition of two unsigned integers, reverting on
        * overflow.
        *
        * Counterpart to Solidity's \`+\` operator.
        *
        * Requirements:
        *
        * - Addition cannot overflow.
        */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");

        return c;
    }

    /**
        * @dev Returns the subtraction of two unsigned integers, reverting on
        * overflow (when the result is negative).
        *
        * Counterpart to Solidity's \`-\` operator.
        *
        * Requirements:
        *
        * - Subtraction cannot overflow.
        */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        return sub(a, b, "SafeMath: subtraction overflow");
    }

    /**
        * @dev Returns the subtraction of two unsigned integers, reverting with custom message on
        * overflow (when the result is negative).
        *
        * Counterpart to Solidity's \`-\` operator.
        *
        * Requirements:
        *
        * - Subtraction cannot overflow.
        */
    function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b <= a, errorMessage);
        uint256 c = a - b;

        return c;
    }

    /**
        * @dev Returns the multiplication of two unsigned integers, reverting on
        * overflow.
        *
        * Counterpart to Solidity's \`*\` operator.
        *
        * Requirements:
        *
        * - Multiplication cannot overflow.
        */
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
        // benefit is lost if 'b' is also tested.
        // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522
        if (a == 0) {
            return 0;
        }

        uint256 c = a * b;
        require(c / a == b, "SafeMath: multiplication overflow");

        return c;
    }

    /**
        * @dev Returns the integer division of two unsigned integers. Reverts on
        * division by zero. The result is rounded towards zero.
        *
        * Counterpart to Solidity's \`/\` operator. Note: this function uses a
        * \`revert\` opcode (which leaves remaining gas untouched) while Solidity
        * uses an invalid opcode to revert (consuming all remaining gas).
        *
        * Requirements:
        *
        * - The divisor cannot be zero.
        */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return div(a, b, "SafeMath: division by zero");
    }

    /**
        * @dev Returns the integer division of two unsigned integers. Reverts with custom message on
        * division by zero. The result is rounded towards zero.
        *
        * Counterpart to Solidity's \`/\` operator. Note: this function uses a
        * \`revert\` opcode (which leaves remaining gas untouched) while Solidity
        * uses an invalid opcode to revert (consuming all remaining gas).
        *
        * Requirements:
        *
        * - The divisor cannot be zero.
        */
    function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b > 0, errorMessage);
        uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold

        return c;
    }

    /**
        * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
        * Reverts when dividing by zero.
        *
        * Counterpart to Solidity's \`%\` operator. This function uses a \`revert\`
        * opcode (which leaves remaining gas untouched) while Solidity uses an
        * invalid opcode to revert (consuming all remaining gas).
        *
        * Requirements:
        *
        * - The divisor cannot be zero.
        */
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        return mod(a, b, "SafeMath: modulo by zero");
    }

    /**
        * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
        * Reverts with custom message when dividing by zero.
        *
        * Counterpart to Solidity's \`%\` operator. This function uses a \`revert\`
        * opcode (which leaves remaining gas untouched) while Solidity uses an
        * invalid opcode to revert (consuming all remaining gas).
        *
        * Requirements:
        *
        * - The divisor cannot be zero.
        */
    function mod(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b != 0, errorMessage);
        return a % b;
    }
}

abstract contract Context {
    function _msgSender() internal view virtual returns (address payable) {
        return payable(address(msg.sender));
    }

    function _msgData() internal view virtual returns (bytes memory) {
        this; // silence state mutability warning without generating bytecode - see https://github.com/ethereum/solidity/issues/2691
        return msg.data;
    }
}


/**
    * @dev Collection of functions related to the address type
    */
library Address {
    /**
        * @dev Returns true if \`account\` is a contract.
        *
        * [IMPORTANT]
        * ====
        * It is unsafe to assume that an address for which this function returns
        * false is an externally-owned account (EOA) and not a contract.
        *
        * Among others, \`isContract\` will return false for the following
        * types of addresses:
        *
        *  - an externally-owned account
        *  - a contract in construction
        *  - an address where a contract will be created
        *  - an address where a contract lived, but was destroyed
        * ====
        */
    function isContract(address account) internal view returns (bool) {
        // According to EIP-1052, 0x0 is the value returned for not-yet created accounts
        // and 0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470 is returned
        // for accounts without code, i.e. \`keccak256('')\`
        bytes32 codehash;
        bytes32 accountHash = 0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470;
        // solhint-disable-next-line no-inline-assembly
        assembly { codehash := extcodehash(account) }
        return (codehash != accountHash && codehash != 0x0);
    }

    /**
        * @dev Replacement for Solidity's \`transfer\`: sends \`amount\` wei to
        * \`recipient\`, forwarding all available gas and reverting on errors.
        *
        * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost
        * of certain opcodes, possibly making contracts go over the 2300 gas limit
        * imposed by \`transfer\`, making them unable to receive funds via
        * \`transfer\`. {sendValue} removes this limitation.
        *
        * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].
        *
        * IMPORTANT: because control is transferred to \`recipient\`, care must be
        * taken to not create reentrancy vulnerabilities. Consider using
        * {ReentrancyGuard} or the
        * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].
        */
    function sendValue(address payable recipient, uint256 amount) internal {
        require(address(this).balance >= amount, "Address: insufficient balance");

        // solhint-disable-next-line avoid-low-level-calls, avoid-call-value
        (bool success, ) = recipient.call{ value: amount }("");
        require(success, "Address: unable to send value, recipient may have reverted");
    }

    /**
        * @dev Performs a Solidity function call using a low level \`call\`. A
        * plain\`call\` is an unsafe replacement for a function call: use this
        * function instead.
        *
        * If \`target\` reverts with a revert reason, it is bubbled up by this
        * function (like regular Solidity function calls).
        *
        * Returns the raw returned data. To convert to the expected return value,
        * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[\`abi.decode\`].
        *
        * Requirements:
        *
        * - \`target\` must be a contract.
        * - calling \`target\` with \`data\` must not revert.
        *
        * _Available since v3.1._
        */
    function functionCall(address target, bytes memory data) internal returns (bytes memory) {
        return functionCall(target, data, "Address: low-level call failed");
    }

    /**
        * @dev Same as {xref-Address-functionCall-address-bytes-}[\`functionCall\`], but with
        * \`errorMessage\` as a fallback revert reason when \`target\` reverts.
        *
        * _Available since v3.1._
        */
    function functionCall(address target, bytes memory data, string memory errorMessage) internal returns (bytes memory) {
        return _functionCallWithValue(target, data, 0, errorMessage);
    }

    /**
        * @dev Same as {xref-Address-functionCall-address-bytes-}[\`functionCall\`],
        * but also transferring \`value\` wei to \`target\`.
        *
        * Requirements:
        *
        * - the calling contract must have an ETH balance of at least \`value\`.
        * - the called Solidity function must be \`payable\`.
        *
        * _Available since v3.1._
        */
    function functionCallWithValue(address target, bytes memory data, uint256 value) internal returns (bytes memory) {
        return functionCallWithValue(target, data, value, "Address: low-level call with value failed");
    }

    /**
        * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[\`functionCallWithValue\`], but
        * with \`errorMessage\` as a fallback revert reason when \`target\` reverts.
        *
        * _Available since v3.1._
        */
    function functionCallWithValue(address target, bytes memory data, uint256 value, string memory errorMessage) internal returns (bytes memory) {
        require(address(this).balance >= value, "Address: insufficient balance for call");
        return _functionCallWithValue(target, data, value, errorMessage);
    }

    function _functionCallWithValue(address target, bytes memory data, uint256 weiValue, string memory errorMessage) private returns (bytes memory) {
        require(isContract(target), "Address: call to non-contract");

        // solhint-disable-next-line avoid-low-level-calls
        (bool success, bytes memory returndata) = target.call{ value: weiValue }(data);
        if (success) {
            return returndata;
        } else {
            // Look for revert reason and bubble it up if present
            if (returndata.length > 0) {
                // The easiest way to bubble the revert reason is using memory via assembly

                // solhint-disable-next-line no-inline-assembly
                assembly {
                    let returndata_size := mload(returndata)
                    revert(add(32, returndata), returndata_size)
                }
            } else {
                revert(errorMessage);
            }
        }
    }
}
/**
    * @title SafeERC20
    * @dev Wrappers around ERC20 operations that throw on failure (when the token
    * contract returns false). Tokens that return no value (and instead revert or
    * throw on failure) are also supported, non-reverting calls are assumed to be
    * successful.
    * To use this library you can add a \`using SafeERC20 for IERC20;\` statement to your contract,
    * which allows you to call the safe operations as \`token.safeTransfer(...)\`, etc.
    */
library SafeERC20 {
    using SafeMath for uint256;
    using Address for address;

    function safeTransfer(IERC20 token, address to, uint256 value) internal {
        _callOptionalReturn(token, abi.encodeWithSelector(token.transfer.selector, to, value));
    }

    function safeTransferFrom(IERC20 token, address from, address to, uint256 value) internal {
        _callOptionalReturn(token, abi.encodeWithSelector(token.transferFrom.selector, from, to, value));
    }

    /**
        * @dev Deprecated. This function has issues similar to the ones found in
        * {IERC20-approve}, and its usage is discouraged.
        *
        * Whenever possible, use {safeIncreaseAllowance} and
        * {safeDecreaseAllowance} instead.
        */
    function safeApprove(IERC20 token, address spender, uint256 value) internal {
        // safeApprove should only be called when setting an initial allowance,
        // or when resetting it to zero. To increase and decrease it, use
        // 'safeIncreaseAllowance' and 'safeDecreaseAllowance'
        // solhint-disable-next-line max-line-length
        require((value == 0) || (token.allowance(address(this), spender) == 0),
            "SafeERC20: approve from non-zero to non-zero allowance"
        );
        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, value));
    }

    function safeIncreaseAllowance(IERC20 token, address spender, uint256 value) internal {
        uint256 newAllowance = token.allowance(address(this), spender).add(value);
        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));
    }

    function safeDecreaseAllowance(IERC20 token, address spender, uint256 value) internal {
        uint256 newAllowance = token.allowance(address(this), spender).sub(value, "SafeERC20: decreased allowance below zero");
        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));
    }

    /**
        * @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement
        * on the return value: the return value is optional (but if data is returned, it must not be false).
        * @param token The token targeted by the call.
        * @param data The call data (encoded using abi.encode or one of its variants).
        */
    function _callOptionalReturn(IERC20 token, bytes memory data) private {
        // We need to perform a low level call here, to bypass Solidity's return data size checking mechanism, since
        // we're implementing it ourselves. We use {Address.functionCall} to perform this call, which verifies that
        // the target address contains contract code and also asserts for success in the low-level call.

        bytes memory returndata = address(token).functionCall(data, "SafeERC20: low-level call failed");
        if (returndata.length > 0) { // Return data is optional
            // solhint-disable-next-line max-line-length
            require(abi.decode(returndata, (bool)), "SafeERC20: ERC20 operation did not succeed");
        }
    }
}

/**
    * @dev Contract module which provides a basic access control mechanism, where
    * there is an account (an owner) that can be granted exclusive access to
    * specific functions.
    *
    * By default, the owner account will be the one that deploys the contract. This
    * can later be changed with {transferOwnership}.
    *
    * This module is used through inheritance. It will make available the modifier
    * \`onlyOwner\`, which can be applied to your functions to restrict their use to
    * the owner.
    */
abstract contract Ownable is Context {
    address private _owner;
    address private _previousOwner;
    uint256 private _lockTime;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /**
        * @dev Initializes the contract setting the deployer as the initial owner.
        */
    constructor ()  {
        address msgSender = _msgSender();
        _owner = msgSender;
        emit OwnershipTransferred(address(0), msgSender);
    }

    /**
        * @dev Returns the address of the current owner.
        */
    function owner() public view returns (address) {
        return _owner;
    }

    /**
        * @dev Throws if called by any account other than the owner.
        */
    modifier onlyOwner() {
        require(_owner == _msgSender(), "Ownable: caller is not the owner");
        _;
    }

        /**
        * @dev Leaves the contract without owner. It will not be possible to call
        * \`onlyOwner\` functions anymore. Can only be called by the current owner.
        *
        * NOTE: Renouncing ownership will leave the contract without an owner,
        * thereby removing any functionality that is only available to the owner.
        */
    function renounceOwnership() public virtual onlyOwner {
        emit OwnershipTransferred(_owner, address(0));
        _owner = address(0);
    }

    /**
        * @dev Transfers ownership of the contract to a new account (\`newOwner\`).
        * Can only be called by the current owner.
        */
    function transferOwnership(address newOwner) public virtual onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        emit OwnershipTransferred(_owner, newOwner);
        _owner = newOwner;
    }

    function geUnlockTime() public view returns (uint256) {
        return _lockTime;
    }

    //Locks the contract for owner for the amount of time provided
    function lock(uint256 time) public virtual onlyOwner {
        _previousOwner = _owner;
        _owner = address(0);
        _lockTime = block.timestamp + time;
        emit OwnershipTransferred(_owner, address(0));
    }
    
    //Unlocks the contract for owner when _lockTime is exceeds
    function unlock() public virtual {
        require(_previousOwner == msg.sender, "You don't have permission to unlock the token contract");
        require(block.timestamp > _lockTime , "Contract is locked until 7 days");
        emit OwnershipTransferred(_owner, _previousOwner);
        _owner = _previousOwner;
    }
}

// pragma solidity >=0.5.0;

interface IUniswapV2Factory {
    event PairCreated(address indexed token0, address indexed token1, address pair, uint);

    function feeTo() external view returns (address);
    function feeToSetter() external view returns (address);

    function getPair(address tokenA, address tokenB) external view returns (address pair);
    function allPairs(uint) external view returns (address pair);
    function allPairsLength() external view returns (uint);

    function createPair(address tokenA, address tokenB) external returns (address pair);

    function setFeeTo(address) external;
    function setFeeToSetter(address) external;
}



// pragma solidity >=0.6.2;

interface IUniswapV2Router01 {
    function factory() external pure returns (address);
    function WETH() external pure returns (address);

    function addLiquidity(
        address tokenA,
        address tokenB,
        uint amountADesired,
        uint amountBDesired,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline
    ) external returns (uint amountA, uint amountB, uint liquidity);
    function addLiquidityETH(
        address token,
        uint amountTokenDesired,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline
    ) external payable returns (uint amountToken, uint amountETH, uint liquidity);
    function removeLiquidity(
        address tokenA,
        address tokenB,
        uint liquidity,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline
    ) external returns (uint amountA, uint amountB);
    function removeLiquidityETH(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline
    ) external returns (uint amountToken, uint amountETH);
    function removeLiquidityWithPermit(
        address tokenA,
        address tokenB,
        uint liquidity,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline,
        bool approveMax, uint8 v, bytes32 r, bytes32 s
    ) external returns (uint amountA, uint amountB);
    function removeLiquidityETHWithPermit(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline,
        bool approveMax, uint8 v, bytes32 r, bytes32 s
    ) external returns (uint amountToken, uint amountETH);
    function swapExactTokensForTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);
    function swapTokensForExactTokens(
        uint amountOut,
        uint amountInMax,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);
    function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)
        external
        payable
        returns (uint[] memory amounts);
    function swapTokensForExactETH(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)
        external
        returns (uint[] memory amounts);
    function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)
        external
        returns (uint[] memory amounts);
    function swapETHForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline)
        external
        payable
        returns (uint[] memory amounts);

    function quote(uint amountA, uint reserveA, uint reserveB) external pure returns (uint amountB);
    function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) external pure returns (uint amountOut);
    function getAmountIn(uint amountOut, uint reserveIn, uint reserveOut) external pure returns (uint amountIn);
    function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts);
    function getAmountsIn(uint amountOut, address[] calldata path) external view returns (uint[] memory amounts);
}



// pragma solidity >=0.6.2;

interface IUniswapV2Router02 is IUniswapV2Router01 {
    function removeLiquidityETHSupportingFeeOnTransferTokens(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline
    ) external returns (uint amountETH);
    function removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline,
        bool approveMax, uint8 v, bytes32 r, bytes32 s
    ) external returns (uint amountETH);

    function swapExactTokensForTokensSupportingFeeOnTransferTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external;
    function swapExactETHForTokensSupportingFeeOnTransferTokens(
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external payable;
    function swapExactTokensForETHSupportingFeeOnTransferTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external;
}


contract Token is Context, IERC20, Ownable {
    using SafeMath for uint256;
    using Address for address;
    using SafeERC20 for IERC20;
    
    address dead = 0x000000000000000000000000000000000000dEaD;
    
    uint8 public maxLiqFee = 10;
    uint8 public maxTaxFee = 10;
    uint8 public maxBurnFee = 10;
    uint8 public maxWalletFee = 10;
    uint8 public maxBuybackFee = 10;
    uint8 public minMxTxPercentage = 1;
    uint8 public minMxWalletPercentage = 1;
    
    mapping (address => uint256) private _rOwned;
    mapping (address => uint256) private _tOwned;
    mapping (address => mapping (address => uint256)) private _allowances;

    mapping (address => bool) private _isExcludedFromFee;

    mapping (address => bool) private _isExcluded;
    address[] private _excluded;
    
    address public router = 0x10ED43C718714eb63d5aA57B78B54704E256024E;
    //address public router = 0xD99D1c33F9fC3444f8101754aBC46c52416550D1;
    
    uint256 private constant MAX = ~uint256(0);
    uint256 public _tTotal;
    uint256 private _rTotal;
    uint256 private _tFeeTotal;
    
    bool public mintedByMudra = true;
    
    string public _name;
    string public _symbol;
    uint8 private _decimals;
    
    uint8 public _taxFee = 0;
    uint8 private _previousTaxFee = _taxFee;
    
    uint8 public _liquidityFee = 0;
    uint8 private _previousLiquidityFee = _liquidityFee;

    uint8 public _burnFee = 0;
    uint8 private _previousBurnFee = _burnFee;

    uint8 public _walletFee = 0;
    uint8 private _previousWalletFee = _walletFee;

    uint8 public _buybackFee = 0;
    uint8 private _previousBuybackFee = _buybackFee;

    IUniswapV2Router02 public immutable pcsV2Router;
    address public immutable pcsV2Pair;
    address payable public feeWallet;
    
    bool inSwapAndLiquify;
    bool public swapAndLiquifyEnabled = true;    
    
    uint256 public _maxTxAmount;
    uint256 public _maxWalletAmount;
    uint256 public numTokensSellToAddToLiquidity;    
    uint256 private buyBackUpperLimit = 1 * 10**18;
    
    event SwapAndLiquifyEnabledUpdated(bool enabled);
    event SwapAndLiquify(
        uint256 tokensSwapped,
        uint256 ethReceived,
        uint256 tokensIntoLiqudity
    );
    
    modifier lockTheSwap {
        inSwapAndLiquify = true;
        _;
        inSwapAndLiquify = false;
    }
    
    constructor (address tokenOwner,string memory tokenName,
        string memory tokenSymbol, uint8 decimal, uint256 amountOfTokenWei,
        uint8 setMxTxPer, uint8 setMxWalletPer,
        address payable _feeWallet
        )  {
            
        _name = tokenName;
        _symbol = tokenSymbol;
        _decimals = decimal;
        _tTotal = amountOfTokenWei;
        _rTotal = (MAX - (MAX % _tTotal));
        
        _rOwned[tokenOwner] = _rTotal;

        feeWallet = _feeWallet;
        

        _maxTxAmount = _tTotal.mul(setMxTxPer).div(
            10**2
        );
        _maxWalletAmount = _tTotal.mul(setMxWalletPer).div(
            10**2
        );
        
        numTokensSellToAddToLiquidity = amountOfTokenWei.mul(1).div(1000);
        
        IUniswapV2Router02 _pcsV2Router = IUniswapV2Router02(router);
            // Create a uniswap pair for this new token
        pcsV2Pair = IUniswapV2Factory(_pcsV2Router.factory())
            .createPair(address(this), _pcsV2Router.WETH());

        // set the rest of the contract variables
        pcsV2Router = _pcsV2Router;
        
        _isExcludedFromFee[tokenOwner] = true;
        _isExcludedFromFee[address(this)] = true;
        
        emit Transfer(address(0), tokenOwner, _tTotal);
    }

    function name() public view returns (string memory) {
        return _name;
    }

    function symbol() public view returns (string memory) {
        return _symbol;
    }

    function decimals() public view returns (uint8) {
        return _decimals;
    }

    function totalSupply() public view override returns (uint256) {
        return _tTotal;
    }

    function balanceOf(address account) public view override returns (uint256) {
        if (_isExcluded[account]) return _tOwned[account];
        return tokenFromReflection(_rOwned[account]);
    }

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        _transfer(_msgSender(), recipient, amount);
        return true;
    }

    function allowance(address owner, address spender) public view override returns (uint256) {
        return _allowances[owner][spender];
    }

    function approve(address spender, uint256 amount) public override returns (bool) {
        _approve(_msgSender(), spender, amount);
        return true;
    }

    function transferFrom(address sender, address recipient, uint256 amount) public override returns (bool) {
        _transfer(sender, recipient, amount);
        _approve(sender, _msgSender(), _allowances[sender][_msgSender()].sub(amount, "ERC20: transfer amount exceeds allowance"));
        return true;
    }

    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        _approve(_msgSender(), spender, _allowances[_msgSender()][spender].add(addedValue));
        return true;
    }

    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        _approve(_msgSender(), spender, _allowances[_msgSender()][spender].sub(subtractedValue, "ERC20: decreased allowance below zero"));
        return true;
    }

    function isExcludedFromReward(address account) public view returns (bool) {
        return _isExcluded[account];
    }

    function totalFees() public view returns (uint256) {
        return _tFeeTotal;
    }

    function deliver(uint256 tAmount) public {
        address sender = _msgSender();
        require(!_isExcluded[sender], "Excluded addresses cannot call this function");
        (uint256 rAmount,,,,,) = _getValues(tAmount);
        _rOwned[sender] = _rOwned[sender].sub(rAmount);
        _rTotal = _rTotal.sub(rAmount);
        _tFeeTotal = _tFeeTotal.add(tAmount);
    }

    function reflectionFromToken(uint256 tAmount, bool deductTransferFee) public view returns(uint256) {
        require(tAmount <= _tTotal, "Amt must be less than supply");
        if (!deductTransferFee) {
            (uint256 rAmount,,,,,) = _getValues(tAmount);
            return rAmount;
        } else {
            (,uint256 rTransferAmount,,,,) = _getValues(tAmount);
            return rTransferAmount;
        }
    }

    function tokenFromReflection(uint256 rAmount) public view returns(uint256) {
        require(rAmount <= _rTotal, "Amt must be less than tot refl");
        uint256 currentRate =  _getRate();
        return rAmount.div(currentRate);
    }

    function excludeFromReward(address account) public onlyOwner() {
        require(!_isExcluded[account], "Account is already excluded from reward");
        if(_rOwned[account] > 0) {
            _tOwned[account] = tokenFromReflection(_rOwned[account]);
        }
        _isExcluded[account] = true;
        _excluded.push(account);
    }

    function includeInReward(address account) external onlyOwner() {
        require(_isExcluded[account], "Already excluded");
        for (uint256 i = 0; i < _excluded.length; i++) {
            if (_excluded[i] == account) {
                _excluded[i] = _excluded[_excluded.length - 1];
                _tOwned[account] = 0;
                _isExcluded[account] = false;
                _excluded.pop();
                break;
            }
        }
    }

    
    function excludeFromFee(address account) public onlyOwner {
        _isExcludedFromFee[account] = true;
    }
    
    function includeInFee(address account) public onlyOwner {
        _isExcludedFromFee[account] = false;
    }
    
    function setAllFeePercent(uint8 taxFee, uint8 liquidityFee, uint8 burnFee, uint8 walletFee, uint8 buybackFee) external onlyOwner() {
        require(taxFee >= 0 && taxFee <=maxTaxFee,"TF err");
        require(liquidityFee >= 0 && liquidityFee <=maxLiqFee,"LF err");
        require(burnFee >= 0 && burnFee <=maxBurnFee,"BF err");
        require(walletFee >= 0 && walletFee <=maxWalletFee,"WF err");
        require(buybackFee >= 0 && buybackFee <=maxBuybackFee,"BBF err");
        _taxFee = taxFee;
        _liquidityFee = liquidityFee;
        _burnFee = burnFee;
        _buybackFee = buybackFee;
        _walletFee = walletFee;
    }
    
    function buyBackUpperLimitAmount() public view returns (uint256) {
        return buyBackUpperLimit;
    }

    function setBuybackUpperLimit(uint256 buyBackLimit) external onlyOwner() {
        buyBackUpperLimit = buyBackLimit * 10**18;
    }
    
    function setMaxTxPercent(uint256 maxTxPercent) external onlyOwner() {
        require(maxTxPercent >= minMxTxPercentage && maxTxPercent <=100,"err");
        _maxTxAmount = _tTotal.mul(maxTxPercent).div(
            10**2
        );
    }

    function setMaxWalletPercent(uint256 maxWalletPercent) external onlyOwner() {
        require(maxWalletPercent >= minMxWalletPercentage && maxWalletPercent <=100,"err");
        _maxWalletAmount = _tTotal.mul(maxWalletPercent).div(
            10**2
        );
    }

    function setSwapAndLiquifyEnabled(bool _enabled) public onlyOwner {
        swapAndLiquifyEnabled = _enabled;
        emit SwapAndLiquifyEnabledUpdated(_enabled);
    }

    function setFeeWallet(address payable newFeeWallet) external onlyOwner {
        require(newFeeWallet != address(0), "ZERO ADDRESS");
        feeWallet = newFeeWallet;
    }

    
        //to recieve ETH from pcsV2Router when swaping
    receive() external payable {}

    function _reflectFee(uint256 rFee, uint256 tFee) private {
        _rTotal = _rTotal.sub(rFee);
        _tFeeTotal = _tFeeTotal.add(tFee);
    }

    function _getValues(uint256 tAmount) private view returns (uint256, uint256, uint256, uint256, uint256, uint256) {
        (uint256 tTransferAmount, uint256 tFee, uint256 tLiquidity) = _getTValues(tAmount);
        (uint256 rAmount, uint256 rTransferAmount, uint256 rFee) = _getRValues(tAmount, tFee, tLiquidity, _getRate());
        return (rAmount, rTransferAmount, rFee, tTransferAmount, tFee, tLiquidity);
    }

    function _getTValues(uint256 tAmount) private view returns (uint256, uint256, uint256) {
        uint256 tFee = calculateTaxFee(tAmount);
        uint256 tLiquidity = calculateLiquidityFee(tAmount);
        uint256 tTransferAmount = tAmount.sub(tFee).sub(tLiquidity);
        return (tTransferAmount, tFee, tLiquidity);
    }

    function _getRValues(uint256 tAmount, uint256 tFee, uint256 tLiquidity, uint256 currentRate) private pure returns (uint256, uint256, uint256) {
        uint256 rAmount = tAmount.mul(currentRate);
        uint256 rFee = tFee.mul(currentRate);
        uint256 rLiquidity = tLiquidity.mul(currentRate);
        uint256 rTransferAmount = rAmount.sub(rFee).sub(rLiquidity);
        return (rAmount, rTransferAmount, rFee);
    }

    function _getRate() private view returns(uint256) {
        (uint256 rSupply, uint256 tSupply) = _getCurrentSupply();
        return rSupply.div(tSupply);
    }

    function _getCurrentSupply() private view returns(uint256, uint256) {
        uint256 rSupply = _rTotal;
        uint256 tSupply = _tTotal;      
        for (uint256 i = 0; i < _excluded.length; i++) {
            if (_rOwned[_excluded[i]] > rSupply || _tOwned[_excluded[i]] > tSupply) return (_rTotal, _tTotal);
            rSupply = rSupply.sub(_rOwned[_excluded[i]]);
            tSupply = tSupply.sub(_tOwned[_excluded[i]]);
        }
        if (rSupply < _rTotal.div(_tTotal)) return (_rTotal, _tTotal);
        return (rSupply, tSupply);
    }
    
    function _takeLiquidity(uint256 tLiquidity) private {
        uint256 currentRate =  _getRate();
        uint256 rLiquidity = tLiquidity.mul(currentRate);
        _rOwned[address(this)] = _rOwned[address(this)].add(rLiquidity);
        if(_isExcluded[address(this)])
            _tOwned[address(this)] = _tOwned[address(this)].add(tLiquidity);
    }
    
    function calculateTaxFee(uint256 _amount) private view returns (uint256) {
        return _amount.mul(_taxFee).div(
            10**2
        );
    }

    function calculateLiquidityFee(uint256 _amount) private view returns (uint256) {
        return _amount.mul(_liquidityFee + _burnFee + _walletFee + _buybackFee).div(
            10**2
        );
    }
    
    function removeAllFee() private {
        if(_taxFee == 0 && _liquidityFee == 0 && _burnFee == 0 && _walletFee == 0 && _buybackFee == 0) return;
        
        _previousTaxFee = _taxFee;
        _previousLiquidityFee = _liquidityFee;
        _previousBurnFee = _burnFee;
        _previousWalletFee = _walletFee;
        _previousBuybackFee = _buybackFee;
        
        _taxFee = 0;
        _liquidityFee = 0;
        _burnFee = 0;
        _walletFee = 0;
        _buybackFee = 0;
    }
    
    function restoreAllFee() private {
        _taxFee = _previousTaxFee;
        _liquidityFee = _previousLiquidityFee;
        _burnFee = _previousBurnFee;
        _walletFee = _previousWalletFee;
        _buybackFee = _previousBuybackFee;
    }
    
    function isExcludedFromFee(address account) public view returns(bool) {
        return _isExcludedFromFee[account];
    }

    function _approve(address owner, address spender, uint256 amount) private {
        require(owner != address(0), "ERC20: approve from zero address");
        require(spender != address(0), "ERC20: approve to zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    function _transfer(
        address from,
        address to,
        uint256 amount
    ) private {
        require(from != address(0), "ERC20: transfer from zero address");
        require(to != address(0), "ERC20: transfer to zero address");
        require(amount > 0, "Transfer amount must be greater than zero");
        if(from != owner() && to != owner())
            require(amount <= _maxTxAmount, "Transfer amount exceeds the maxTxAmount.");

        if(from != owner() && to != owner() && to != address(0) && to != dead && to != pcsV2Pair){
            uint256 contractBalanceRecepient = balanceOf(to);
            require(contractBalanceRecepient + amount <= _maxWalletAmount, "Exceeds maximum wallet amount"); 
        }
        // is the token balance of this contract address over the min number of
        // tokens that we need to initiate a swap + liquidity lock?
        // also, don't get caught in a circular liquidity event.
        // also, don't swap & liquify if sender is uniswap pair.
        uint256 contractTokenBalance = balanceOf(address(this));
        
        if(contractTokenBalance >= _maxTxAmount)
        {
            contractTokenBalance = _maxTxAmount;
        }
        
        bool overMinTokenBalance = contractTokenBalance >= numTokensSellToAddToLiquidity;
        if (
            !inSwapAndLiquify &&
            to == pcsV2Pair &&
            swapAndLiquifyEnabled
        ) {
            if(overMinTokenBalance){
                contractTokenBalance = numTokensSellToAddToLiquidity;
                //add liquidity
                swapAndLiquify(contractTokenBalance);
            }
            if(_buybackFee !=0){
                uint256 balance = address(this).balance;
                if (balance > uint256(1 * 10**18)) {
                    
                    if (balance > buyBackUpperLimit)
                        balance = buyBackUpperLimit;
                    
                    buyBackTokens(balance.div(100));
                }
            }
            
        }
        
        
        //indicates if fee should be deducted from transfer
        bool takeFee = true;
        
        //if any account belongs to _isExcludedFromFee account then remove the fee
        if(_isExcludedFromFee[from] || _isExcludedFromFee[to]){
            takeFee = false;
        }
        
        //transfer amount, it will take tax, burn, liquidity fee
        _tokenTransfer(from,to,amount,takeFee);
    }

    function swapAndLiquify(uint256 contractTokenBalance) private lockTheSwap {
        //This needs to be distributed among burn, wallet and liquidity
        //burn
        uint8 totFee  = _burnFee + _walletFee + _liquidityFee + _buybackFee; 
        uint256 spentAmount = 0;
        uint256 totSpentAmount = 0;
        if(_burnFee != 0){
            spentAmount  = contractTokenBalance.div(totFee).mul(_burnFee);
            _tokenTransferNoFee(address(this), dead, spentAmount);
            totSpentAmount = spentAmount;
        }

        if(_walletFee != 0){
            spentAmount = contractTokenBalance.div(totFee).mul(_walletFee);
            _tokenTransferNoFee(address(this), feeWallet, spentAmount);
            totSpentAmount = totSpentAmount + spentAmount;
        }

        if(_buybackFee != 0){
            spentAmount = contractTokenBalance.div(totFee).mul(_buybackFee);
            swapTokensForBNB(spentAmount);
            totSpentAmount = totSpentAmount + spentAmount;
        }

        if(_liquidityFee != 0){
            contractTokenBalance = contractTokenBalance.sub(totSpentAmount);

            // split the contract balance into halves
            uint256 half = contractTokenBalance.div(2);
            uint256 otherHalf = contractTokenBalance.sub(half);

            // capture the contract's current ETH balance.
            // this is so that we can capture exactly the amount of ETH that the
            // swap creates, and not make the liquidity event include any ETH that
            // has been manually sent to the contract
            uint256 initialBalance = address(this).balance;

            // swap tokens for ETH
            swapTokensForBNB(half); // <- this breaks the ETH -> HATE swap when swap+liquify is triggered

            // how much ETH did we just swap into?
            uint256 newBalance = address(this).balance.sub(initialBalance);

            // add liquidity to uniswap
            addLiquidity(otherHalf, newBalance);

            emit SwapAndLiquify(half, newBalance, otherHalf);
        }

    }

    function buyBackTokens(uint256 amount) private lockTheSwap {
    	if (amount > 0) {
    	    swapBNBForTokens(amount);
	    }
    }

    function swapTokensForBNB(uint256 tokenAmount) private {
        // generate the uniswap pair path of token -> weth
        address[] memory path = new address[](2);
        path[0] = address(this);
        path[1] = pcsV2Router.WETH();

        _approve(address(this), address(pcsV2Router), tokenAmount);

        // make the swap
        pcsV2Router.swapExactTokensForETHSupportingFeeOnTransferTokens(
            tokenAmount,
            0, // accept any amount of ETH
            path,
            address(this),
            block.timestamp
        );
    }

    function swapBNBForTokens(uint256 amount) private {
        // generate the uniswap pair path of token -> weth
        address[] memory path = new address[](2);
        path[0] = pcsV2Router.WETH();
        path[1] = address(this);

      // make the swap
        pcsV2Router.swapExactETHForTokensSupportingFeeOnTransferTokens{value: amount}(
            0, // accept any amount of Tokens
            path,
            dead, // Burn address
            block.timestamp.add(300)
        );        
    }

    function addLiquidity(uint256 tokenAmount, uint256 ethAmount) private {
        // approve token transfer to cover all possible scenarios
        _approve(address(this), address(pcsV2Router), tokenAmount);

        // add the liquidity
        pcsV2Router.addLiquidityETH{value: ethAmount}(
            address(this),
            tokenAmount,
            0, // slippage is unavoidable
            0, // slippage is unavoidable
            dead,
            block.timestamp
        );
    }

    //this method is responsible for taking all fee, if takeFee is true
    function _tokenTransfer(address sender, address recipient, uint256 amount,bool takeFee) private {
        if(!takeFee)
            removeAllFee();
        
        if (_isExcluded[sender] && !_isExcluded[recipient]) {
            _transferFromExcluded(sender, recipient, amount);
        } else if (!_isExcluded[sender] && _isExcluded[recipient]) {
            _transferToExcluded(sender, recipient, amount);
        } else if (!_isExcluded[sender] && !_isExcluded[recipient]) {
            _transferStandard(sender, recipient, amount);
        } else if (_isExcluded[sender] && _isExcluded[recipient]) {
            _transferBothExcluded(sender, recipient, amount);
        } else {
            _transferStandard(sender, recipient, amount);
        }
        
        if(!takeFee)
            restoreAllFee();
    }

    function _transferStandard(address sender, address recipient, uint256 tAmount) private {
        (uint256 rAmount, uint256 rTransferAmount, uint256 rFee, uint256 tTransferAmount, uint256 tFee, uint256 tLiquidity) = _getValues(tAmount);
        _rOwned[sender] = _rOwned[sender].sub(rAmount);
        _rOwned[recipient] = _rOwned[recipient].add(rTransferAmount);
        _takeLiquidity(tLiquidity);
        _reflectFee(rFee, tFee);
        emit Transfer(sender, recipient, tTransferAmount);
    }

    function _transferToExcluded(address sender, address recipient, uint256 tAmount) private {
        (uint256 rAmount, uint256 rTransferAmount, uint256 rFee, uint256 tTransferAmount, uint256 tFee, uint256 tLiquidity) = _getValues(tAmount);
        _rOwned[sender] = _rOwned[sender].sub(rAmount);
        _tOwned[recipient] = _tOwned[recipient].add(tTransferAmount);
        _rOwned[recipient] = _rOwned[recipient].add(rTransferAmount);           
        _takeLiquidity(tLiquidity);
        _reflectFee(rFee, tFee);
        emit Transfer(sender, recipient, tTransferAmount);
    }

    function _transferFromExcluded(address sender, address recipient, uint256 tAmount) private {
        (uint256 rAmount, uint256 rTransferAmount, uint256 rFee, uint256 tTransferAmount, uint256 tFee, uint256 tLiquidity) = _getValues(tAmount);
        _tOwned[sender] = _tOwned[sender].sub(tAmount);
        _rOwned[sender] = _rOwned[sender].sub(rAmount);
        _rOwned[recipient] = _rOwned[recipient].add(rTransferAmount);   
        _takeLiquidity(tLiquidity);
        _reflectFee(rFee, tFee);
        emit Transfer(sender, recipient, tTransferAmount);
    }

    function _transferBothExcluded(address sender, address recipient, uint256 tAmount) private {
        (uint256 rAmount, uint256 rTransferAmount, uint256 rFee, uint256 tTransferAmount, uint256 tFee, uint256 tLiquidity) = _getValues(tAmount);
        _tOwned[sender] = _tOwned[sender].sub(tAmount);
        _rOwned[sender] = _rOwned[sender].sub(rAmount);
        _tOwned[recipient] = _tOwned[recipient].add(tTransferAmount);
        _rOwned[recipient] = _rOwned[recipient].add(rTransferAmount);        
        _takeLiquidity(tLiquidity);
        _reflectFee(rFee, tFee);
        emit Transfer(sender, recipient, tTransferAmount);
    }

    function _tokenTransferNoFee(address sender, address recipient, uint256 amount) private {        
        uint256 currentRate =  _getRate();  
        uint256 rAmount = amount.mul(currentRate);   

        _rOwned[sender] = _rOwned[sender].sub(rAmount);
        _rOwned[recipient] = _rOwned[recipient].add(rAmount); 
        
        if (_isExcluded[sender]) {
            _tOwned[sender] = _tOwned[sender].sub(amount);
        } 
        if (_isExcluded[recipient]) {
            _tOwned[recipient] = _tOwned[recipient].add(amount);
        } 
        emit Transfer(sender, recipient, amount);
    }

    function recoverBEP20(address tokenAddress, uint256 tokenAmount) public onlyOwner {
        // do not allow recovering self token
        require(tokenAddress != address(this), "Self withdraw");
        IERC20(tokenAddress).transfer(owner(), tokenAmount);
    }
}
`
w=k=void 0
async function de(){return v||$("#lock-list").is(":visible")?(console.log("skipping wallet refresh as some action is in progress"),$("#newlock_connect_wallet_msg").text("Your connected wallet information seems to have changed, please refresh page."),$("#newlock_connect_wallet_msg").show(),$("#discover_connect_wallet_msg").text("Your connected wallet information seems to have changed, please refresh page."),$("#discover_connect_wallet_msg").show(),$("#research_connect_wallet_msg").text("Your connected wallet information seems to have changed, please refresh page."),void $("#research_connect_wallet_msg").show()):(v_info=await pe(),0==v_info.status?(console.log("skipping wallet refresh as new account is not compatible"),$("#newlock_connect_wallet_msg").text("Your connected wallet information seems to have changed, please refresh page."),$("#newlock_connect_wallet_msg").show(),$("#discover_connect_wallet_msg").text("Your connected wallet information seems to have changed, please refresh page."),$("#discover_connect_wallet_msg").show(),$("#research_connect_wallet_msg").text("Your connected wallet information seems to have changed, please refresh page."),void $("#research_connect_wallet_msg").show()):(Je(v_info),Rt(v_info),Oe(v_info),void ye(v_info)))}function ce(e){e.on("accountsChanged",async e=>{await de()}),e.on("chainChanged",async e=>{await de()}),e.on("disconnect",async(e,t)=>{$("#newlock_connect_wallet_msg").text("Wallet Disconnected. Please refresh page."),$("#newlock_connect_wallet_msg").show(),$("#discover_connect_wallet_msg").text("Wallet Disconnected. Please refresh page."),$("#discover_connect_wallet_msg").show(),$("#research_connect_wallet_msg").text("Wallet Disconnected. Please refresh page."),await $("#research_connect_wallet_msg").show()})}async function pe(){var e={status:!0,msg:""},t={status:!0,msg:""},n=new Web3(k),a=await n.eth.getChainId()
return(a=evmChains.getChain(a)).name.toLowerCase()!=i?(console.log("Not on BSC Mainnet"),t.status=!1,t.msg="Current wallet not on BSC Mainnet"):(await n.eth.getAccounts()).length||(console.log("No account information present"),t.status=!1,t.msg="No account information in current wallet."),0==(e=await t).status||(e=await async function(){var e,t={status:!0,msg:""},n=new Web3(k),a=await n.eth.getAccounts()
if(!a.length)return console.log("No account information present"),t.status=!1,t.msg="No account information in current wallet.",t
for(e=0;e<a.length;){if(n.utils.isAddress(a[e].toLowerCase())){w=a[e]
break}e++}return e>=a.length&&(console.log("No account information present"),t.status=!1,t.msg="No account information in current wallet."),t}()).status,e}async function me(){var t={status:!0,msg:""}
try{k=await o.connect()}catch(e){return k=void 0,console.log("Could not get injected wallet connection",e),t.status=!1,t.msg="No wallet detected",t}return 0==(t=await pe()).status?w=k=void 0:(ce(k),Je(t),Rt(t),Oe(t),ye(t)),t}function ye(e){}$(document).ready(async function(){var e={walletconnect:{package:Ie,options:{rpc:{56:"https://bsc-dataseed.binance.org/"},rpcUrl:"https://bsc-dataseed.binance.org/",network:"binance",chainId:56}}}
o=new Pe({cacheProvider:!1,providerOptions:e,disableInjectedProvider:!1}),console.log("Web3Modal instance is",o),await async function(){var t={status:!0,msg:""}
try{k=await o.connectTo("injected")}catch(e){return k=void 0,console.log("Could not get injected wallet connection",e),t.status=!1,t.msg="No wallet detected",t}return 0==(t=await pe()).status?w=k=void 0:(ce(k),Je(t),Rt(t),Oe(t),ye(t)),t}()})
const _e=[{name:"address_0",msg:"Comparison with address(0)",signature:{type:"FunctionCall",expression:{type:"TypeNameExpression",typeName:{type:"ElementaryTypeName",name:"address",stateMutability:null}},arguments:[{type:"NumberLiteral",number:"0",subdenomination:null}],names:[],identifiers:[]}},{name:"",msg:"",signature:{type:"Identifier",name:"uniswapv2pair"}},{name:"",msg:"",signature:{type:"Identifier",name:"pancakeswapv2pair"}},{name:"",msg:"",signature:{type:"Identifier",name:"pcsV2Pair"}},{name:"",msg:"",signature:{type:"Identifier",name:"dead"}},{name:"",msg:"",signature:{type:"Identifier",name:"uniswapv1pair"}},{name:"",msg:"",signature:{type:"Identifier",name:"pancakeswapv1pair"}}]
function fe(e,t,i){var o,r,s={status:!0,msg:"",details:[],score:0}
if("=="==e.operator||"!="==e.operator)for(n in t)o=t[n],r=void 0,e.left.name==o.name&&(r=e.right),null==(r=e.right.name==o.name?e.right:r)||function(e){for(a in i){var t=_e[a]
if("Identifier"==e.type&&(e.name=e.name.toLowerCase()),_.isEqual(t.signature,e))return 1}}(r)||(s.score=s.score+1)
return s}E,D,s=G,d=X
const be=30,he=1e5,ke=20,we=80,ge=50
async function ve(e,t){e=await(t=new u.eth.Contract(ne,t)).methods.balanceOf(e).call()
return e=u.utils.toBN(e)}function Te(e,t){var n,a="("
for(f in e=[...new Set(e)])if(n=e[f],"("==a&&(a+="Functions:"),fun=e[f],100<(a+=" "+n+",").length){a+=" ..."
break}return(a+="("==a?'No functions increasing token supply detected in <a target="_blank" href=https://bscscan.com/address/'+t+"#code> contract code&nbsp;</a>":' which can increase token supply detected in <a target="_blank" href=https://bscscan.com/address/'+t+"#code> contract code&nbsp;</a>")+")"}function xe(e,t){var n="("
return(n+=0==e?'No or harmless comparison to owner or custom addresses found in transfer functions of <a target="_blank" href=https://bscscan.com/address/'+t+"#code> contract code&nbsp;</a>":'Comparison to owner or custom addresses found in transfer functions of <a target="_blank" href=https://bscscan.com/address/'+t+"#code> contract code&nbsp;</a>")+")"}async function $e(e){var t,n,a,i,o
if(e.research_insights.push((o="Token developers hold no special privileges after renouncing ownership of the token.",(i=e.token_info).owner!=Z?{title:"Token Ownership",text:"unknown"!=i.owner.toLowerCase()?"Ownership not renounced (Owner: "+i.owner+")":"Owner could not be found",details:"",score:-1,priority:1,tooltip:o}:{title:"Token Ownership",text:"Ownership renounced",details:"",score:1,priority:1,tooltip:o})),e.research_insights.push((-1==(i=e.token_info).total_supply&&console.log("Skipping token burn as total supply is not available"),o="Burned token indicates that owner share of token is permanently reduced",await((i=i.total_token_burned.muln(100).div(i.total_supply))<be?{title:"Token Burn",text:0==i?"No tokens burned":"Only "+i.toNumber().toFixed(2)+"% tokens burned",details:"",score:0,priority:-1,tooltip:o}:{title:"Token Burn",text:i.toNumber().toFixed(2)+"% tokens burned",details:"",score:1,priority:-1,tooltip:o}))),e.research_insights.push(await async function(e){var t,n,a="Verified contract Source code provides transparency for users interacting with smart contracts."
try{return t=await $.getJSON("https://api.bscscan.com/api?module=contract&action=getsourcecode&address="+e.address+"&apikey=GNRFBMP3MVFK82MU8DI41ZX4QTDJFNRT4D"),n="","ok"==t.message.toLowerCase()&&""!=t.result[0].SourceCode&&(n=t.result[0].SourceCode,e.source_code=n,e.contract_name=t.result[0].ContractName),""!=n?{title:"Token Contract",text:"Token contract source code published at BscScan",details:"",score:1,priority:-1,tooltip:a}:{title:"Token Contract",text:"Token contract source code not published at BscScan",details:"",score:-1,priority:-1,tooltip:a}}catch(e){return Se("Research: Skipping bscscan contract check"+(null!=e.message?e.message:"Unknown error")),{title:"Token Contract",text:"Token contract source code publish status on BscScan could not be determined",details:"",score:0,priority:-1,tooltip:a}}}(e.token_info)),""!=e.token_info.source_code)try{e.token_info.ast=SolidityParser.parse(e.token_info.source_code)}catch(i){try{t="",n=JSON.parse(e.token_info.source_code)
for(a of Object.keys(n))t+=n[a].content
e.token_info.ast=SolidityParser.parse(t)}catch(i){Se("AST parsing failed for: "+e.token_info.address+(null!=i.message?i.message:"Unknown error"))}try{if(""==e.token_info.ast){t="",n=JSON.parse(e.token_info.source_code.substring(1,e.token_info.source_code.length-1))
for(a of Object.keys(n.sources))t+=n.sources[a].content
e.token_info.ast=SolidityParser.parse(t)}}catch(i){Se("AST parsing failed for: "+e.token_info.address+(null!=i.message?i.message:"Unknown error"))}}e.research_insights.push(await async function(e){var t,n,a,i,o="A mintable token has non-fixed supply, enabling owner to generate and dump tokens at will. We analyze smart contract code to check if minting is possible. This feature is being continuously improved."
try{return""==e.ast?{title:"Token Mint",text:"Token contract source code not available or could not be analyzed.",details:"",score:0,priority:-1,tooltip:o}:(n=e.ast,a=e.contract_name,i={status:!0,msg:"",details:[],score:0},SolidityParser.visit(n,{ContractDefinition:function(e){var n,t
null!=e.name&&e.name.toLowerCase()==a.toLowerCase()&&(SolidityParser.visit(e,{FunctionDefinition:function(e){null!=e.name&&"mint"==e.name.toLowerCase()&&(i.score=i.score+1,i.details.push("mint"))}}),SolidityParser.visit(e,{FunctionDefinition:function(t){SolidityParser.visit(t,{FunctionCall:function(e){null!=e.expression.name&&"_mint"==e.expression.name.toLowerCase()&&1!=t.isConstructor&&"public"==t.visibility&&(i.score=i.score+1,i.details.push(t.name))}})}}),n=void 0,t=!1,SolidityParser.visit(e,{FunctionDefinition:function(e){null!=e.name&&"totalSupply"==e.name&&SolidityParser.visit(e,{ReturnStatement:function(e){"Identifier"==e.expression.type&&(n=e.expression.name)}})}}),null!=n&&(SolidityParser.visit(e,{StateVariableDeclaration:function(e){SolidityParser.visit(e,{VariableDeclaration:function(e){null!=e.identifier.name&&e.identifier.name==n&&e.isDeclaredConst&&(t=!0)}})}}),t||SolidityParser.visit(e,{FunctionDefinition:function(t){"_mint"!=t.name&&SolidityParser.visit(t,{ExpressionStatement:function(e){"="==e.expression.operator&&e.expression.left.name==n&&1!=t.isConstructor&&"public"==t.visibility&&(i.score=i.score+1,i.details.push(t.name))}})}})))}}),0==(t=i).score?{title:"Token Mint",text:"Token is likely non-mintable",details:"",custom_html:Te(t.details,e.address),score:1,priority:-1,tooltip:o,premium:!0}:{title:"Token Mint",text:"Token is likely mintable",details:"",custom_html:Te(t.details,e.address),score:-1,priority:-1,tooltip:o,premium:!0})}catch(e){return Se("Research: Skipping mint check"+(null!=e.message?e.message:"Unknown error")),{title:"Token Mint",text:"Token contract source code not available or could not be analyzed.",details:"",score:0,priority:-1,tooltip:o}}}(e.token_info)),e.research_insights.push(await async function(e){var t,s,n,l,a="A honeypot token restricts non privileged users to transfer/sell tokens. We analyze smart contract code to detect this. This feature is being continuously improved."
try{return""==e.ast?{title:"Honeypot",text:"Token contract source code not available or could not be analyzed.",details:"",score:0,priority:-1,tooltip:a}:(s=e.ast,n=e.contract_name,l={status:!0,msg:"",details:[],score:0},SolidityParser.visit(s,{ContractDefinition:function(r){null!=r.name&&r.name.toLowerCase()==n.toLowerCase()&&SolidityParser.visit(r,{FunctionDefinition:function(e){var a,i,o
"_transfer"==e.name&&(a=e.parameters[0],i=e.parameters[1],o=e.parameters[2],SolidityParser.visit(e,{ExpressionStatement:function(e){SolidityParser.visit(e,{BinaryOperation:function(e){e=fe(e,[a,i],_e),l.score=l.score+e.score}})}}),SolidityParser.visit(e,{IfStatement:function(e){var t=!1
SolidityParser.visit(e,{BinaryOperation:function(e){0!=fe(e,[a,i],_e).score&&(t=!0)}}),t&&SolidityParser.visit(e,{ExpressionStatement:function(e){SolidityParser.visit(e,{BinaryOperation:function(e){var t,n
"=="!=e.operator&&"!="!=e.operator&&">="!=e.operator&&"<="!=e.operator&&">"!=e.operator&&"<"!=e.operator||(e.left.name==o.name||e.right.name==o.name?(t=void 0,e.left.name==o.name&&(t=e.right),"Identifier"==(t=e.right.name==o.name?e.right:t).type&&(n=!1,SolidityParser.visit(r,{StateVariableDeclaration:function(e){SolidityParser.visit(e,{VariableDeclaration:function(e){null!=e.identifier.name&&e.identifier.name==t.name&&e.isDeclaredConst&&(n=!0)}})}}),n||SolidityParser.visit(r,{FunctionDefinition:function(e){SolidityParser.visit(e,{ExpressionStatement:function(e){"="==e.expression.operator&&e.expression.left.name==t.name&&(l.msg="can")}})}}))):e.left.name==a.name&&e.right.name==a.name&&e.left.name==i.name&&e.right.name==i.name||(l.score=l.score+1,SolidityParser.visit(s,{Identifier:function(e){"mintedByMudra"==e.name&&(l.score=0)}})))}})}})}}))}})}}),0==l.score?(t="Token is likey not a honeypot","can"==l.msg&&(t+=", however there is a way if ownership is not renounced it can be turned into a honeypot."),{title:"Honeypot",text:t,details:"",custom_html:xe(l.score,e.address),score:1,priority:-1,tooltip:a,premium:!0}):{title:"Token Honeypot",text:"Token is likely a honeypot",details:"",custom_html:xe(l.score,e.address),score:-1,priority:-1,tooltip:a,premium:!0})}catch(e){return Se("Research: Skipping honeypot check"+(null!=e.message?e.message:"Unknown error")),{title:"Honeypot",text:"Token contract source code not available or could not be analyzed.",details:"",score:0,priority:-1,tooltip:a}}}(e.token_info))}async function Me(e){var t,n,a,i={address:e,symbol:"",name:"",owner:"unknown",valid:!0,err_msg:"",decimals:-1,total_supply:-1,total_token_burned:new u.utils.BN(0),source_code:"",ast:"",contract_name:""}
if(!u.utils.isAddress(e))return i.err_msg="Please enter a valid token address",i.valid=!1,i
if("0x"==await u.eth.getCode(e))return i.err_msg="Please enter a valid token address",i.valid=!1,i
a=new u.eth.Contract(ne,e)
try{i.symbol=await a.methods.symbol().call()}catch(e){console.log(e)}try{i.name=await a.methods.name().call()}catch(e){console.log(e)}if("Pancake LPs"==i.name)return i.err_msg="Please enter a valid token address. This seems to be a LP token.",i.valid=!1,i
try{i.owner=await a.methods.owner().call()}catch(e){console.log(e)}try{i.decimals=await a.methods.decimals().call()}catch(e){console.log(e)}try{i.total_supply=await a.methods.totalSupply().call(),i.total_supply=u.utils.toBN(i.total_supply)}catch(e){console.log(e)}return t=await ve(Z,i.address),n=await ve(ee,i.address),e=await ve(te,i.address),a=(a=(a=(a=new u.utils.BN(0)).add(t)).add(n)).add(e),i.total_token_burned=a,i}function Fe(e,t,n,a){var i=new u.utils.BN(0)
return{time1:i=i.add(t),time2:i}}c=[{name:"DXSale",address:[R],enabled:!0,balance_calculator:async function(e,t,n,a){return{time1:t,time2:new u.utils.BN(0)}},link_generator:function(e,t){return"https://dxsale.app/app/pages/dxlock"}},{name:"UniCrypt",address:[H],enabled:!0,balance_calculator:async function(e,t,n,a){for(var i,o={time1:new u.utils.BN(0),time2:new u.utils.BN(0)},r=new u.eth.Contract(oe,H),s=await r.methods.getNumLocksForToken(e).call(),l=0;l<s;)(i=await r.methods.tokenLocks(e,l).call()).unlockDate>n&&(o.time1=o.time1.add(new Web3.utils.toBN(i.amount))),i.unlockDate>a&&(o.time2=o.time2.add(new Web3.utils.toBN(i.amount))),l++
return o.time1=-1==o.time1.cmp(t)?o.time1:t,o.time2=-1==o.time2.cmp(t)?o.time2:t,o},link_generator:function(e,t){return"https://app.unicrypt.network/amm/pancake-v"+t+"/pair/"+e}},{name:"CryptEx",address:[U],enabled:!0,balance_calculator:async function(e,t,n,a){for(var i,o={time1:new u.utils.BN(0),time2:new u.utils.BN(0)},r=new u.eth.Contract(ie,U),s=await r.methods.lockNonce().call(),l=0;l<s;)(i=await r.methods.tokenLocks(l).call()).lpToken.toLowerCase()==e.toLowerCase()&&(i.unlockTime>n&&(o.time1=o.time1.add(new Web3.utils.toBN(i.tokenAmount))),i.unlockTime>a&&(o.time2=o.time2.add(new Web3.utils.toBN(i.tokenAmount)))),l++
return o.time1=-1==o.time1.cmp(t)?o.time1:t,o.time2=-1==o.time2.cmp(t)?o.time2:t,o},link_generator:function(e,t){return"https://cryptexlock.me/pair/"+e}},{name:"DeepLocker",address:[W],enabled:!0,balance_calculator:async function(e,t,n,a){var i,o={time1:new u.utils.BN(0),time2:new u.utils.BN(0)},r=new u.eth.Contract(ae,W),s=await r.methods.getDepositsByTokenAddress(e).call()
for(id in s)(i=await r.methods.lockedToken(s[id]).call()).unlockTime>n&&(o.time1=o.time1.add(new Web3.utils.toBN(i.tokenAmount))),i.unlockTime>a&&(o.time2=o.time2.add(new Web3.utils.toBN(i.tokenAmount)))
return o.time1=-1==o.time1.cmp(t)?o.time1:t,o.time2=-1==o.time2.cmp(t)?o.time2:t,o},link_generator:function(e,t){return"https://deeplock.io/lock/"+e}},{name:"Mudra Locker",address:[V],enabled:!0,balance_calculator:async function(e,t,n,a){for(var i,o={time1:new u.utils.BN(0),time2:new u.utils.BN(0)},r=new u.eth.Contract(re,V),s=await r.methods.lpLocksLength(e).call(),l=0;l<s;)i=await r.methods.lpLockAt(e,l).call(),(i=await r.methods.tokenLocks(i).call()).lpToken.toLowerCase()==e.toLowerCase()&&(i.unlockTime>n&&(o.time1=o.time1.add(new Web3.utils.toBN(i.tokenAmount))),i.unlockTime>a&&(o.time2=o.time2.add(new Web3.utils.toBN(i.tokenAmount)))),l++
return o.time1=-1==o.time1.cmp(t)?o.time1:t,o.time2=-1==o.time2.cmp(t)?o.time2:t,o},link_generator:function(e,t){return"https://mudra.website/index/?certificate=yes&type=0&lp="+e}},{name:"Burned_",address:[Z],enabled:!0,balance_calculator:Fe,link_generator:function(e,t){return"https://bscscan.com/token/"+e+"?a="+Z}},{name:"Burned_One",address:[ee],enabled:!0,balance_calculator:Fe,link_generator:function(e,t){return"https://bscscan.com/token/"+e+"?a="+ee}},{name:"Burned_Dead",address:[te],enabled:!0,balance_calculator:Fe,link_generator:function(e,t){return"https://bscscan.com/token/"+e+"?a="+te}}]
async function Ae(e,t,n){var i={total_value_USD_today:0,total_token_reserves:new u.utils.BN(0),total_value_USD_burned_forever:0,total_value_USD_locked_today:0,total_value_USD_locked_after_1year:0,pool_address:void 0,total_supply:0,locker_providers:[]},o=new u.eth.Contract(J,n),r=await o.methods.getPair(e.address,t).call()
return r.toLowerCase()==Z.toLowerCase()?log_str="PanCake has no "+e.symbol+"-"+t+" pair":(i.pool_address=r,i.label=(o=e.symbol,e="",e=o+"/",t==s&&(e+="WBNB"),t==d&&(e+="BUSD"),(o=n)==D&&(e+=" PancakeV2"),o==I&&(e+=" PancakeV1"),e),n=await async function(e,t,n){var i={pegged_reserve:0,token_reserve:0,total_supply:new u.utils.BN(0),locker_providers:[],total_lptoken_burned_forever:u.utils.toBN(0),total_lptoken_locked_today:u.utils.toBN(0),total_lptoken_locked_after_1year:u.utils.toBN(0),links:[]},o=new u.eth.Contract(Q,e),r=await o.methods.getReserves().call(),s=await o.methods.token0().call()
for(p in i.total_supply=u.utils.toBN(await o.methods.totalSupply().call()),s==t?(i.pegged_reserve=u.utils.toBN(r[0]),i.token_reserve=u.utils.toBN(r[1])):(i.pegged_reserve=u.utils.toBN(r[1]),i.token_reserve=u.utils.toBN(r[0])),i.locker_providers=await async function(e,t,n){var i,o=[]
for(l in c)c[l].enabled&&1e3<(i=await async function(e,t,n,i){var o,r,s={}
for(a in s.balance=new u.utils.BN(0),s.balance_after_1year=new u.utils.BN(0),s.name=n.name,n.address)o=await e.methods.balanceOf(n.address[a]).call(),s.balance=s.balance.add(new u.utils.toBN(o))
return s.balance<=1e3||((r=new Date).setMonth(r.getMonth()+12),r=r.getTime()/1e3,r=await n.balance_calculator(t,s.balance,(new Date).getTime()/1e3,r),s.balance=r.time1,s.balance_after_1year=r.time2,s.link=n.link_generator(t,i)),s}(e,t,c[l],n)).balance&&o.push(i)
return o}(o,e,n),i.locker_providers)provider=i.locker_providers[p],i.total_lptoken_locked_today=i.total_lptoken_locked_today.add(provider.balance),i.total_lptoken_locked_after_1year=i.total_lptoken_locked_after_1year.add(provider.balance_after_1year)
return i}(r,t,n==D?2:1),i.total_value_USD_today=await async function(e,t){if(t==s)return i=await(a=new u.eth.Contract(J,D)).methods.getPair(s,d).call(),i=await(a=new u.eth.Contract(Q,i)).methods.getReserves().call(),n=await(i=(a=await a.methods.token0().call())==s?(n=u.utils.toBN(i[0]),u.utils.toBN(i[1])):(n=u.utils.toBN(i[1]),u.utils.toBN(i[0]))).div(n).toNumber(),e.pegged_reserve.muln(n)/1e18
var n,a,i
if(t==d)return e.pegged_reserve/1e18
throw"unknown pegged token"}(n,t),i.total_token_reserves=n.token_reserve,i.total_supply=n.total_supply,i.locker_providers=i.locker_providers.concat(n.locker_providers),0!=i.total_supply&&(i.total_value_USD_locked_today=n.total_lptoken_locked_today/i.total_supply*i.total_value_USD_today,i.total_value_USD_locked_after_1year=n.total_lptoken_locked_after_1year/i.total_supply*i.total_value_USD_today,i.total_value_USD_burned_forever=n.total_lptoken_burned_forever/i.total_supply*i.total_value_USD_today)),i}const Le=e=>e<1e3?e.toFixed(2):1e3<=e&&e<1e6?+(e/1e3).toFixed(2)+"K":1e6<=e&&e<1e9?+(e/1e6).toFixed(2)+"M":1e9<=e&&e<1e12?+(e/1e9).toFixed(2)+"B":1e12<=e?+(e/1e12).toFixed(2)+"T":void 0
function Be(e){var t="("
for(l in e)liquidity=e[l],liquidity.pool_address&&(t+='&nbsp;<a target="_blank" href=https://bscscan.com/address/'+liquidity.pool_address+">"+liquidity.label+"&nbsp;</a>")
return"("==t&&(t+="No Pools found "),t+")"}function qe(e){var t,n="("
for(l in e)if(liquidity=e[l],t=0,liquidity.pool_address)for(ll in liquidity.locker_providers)t++,n+='&nbsp;<a target="_blank" href='+liquidity.locker_providers[ll].link+">"+liquidity.label+"-Locker-"+t+"&nbsp;</a>"
return"("==n&&(n+="No Lockers found "),n+")"}function Ce(e){var t,n,a,i,o=e.aggregate_liquidity_info
e.research_insights.push((i=e.liquidity_info,n="Large liquidity pool facilitates large trading volumes. We currently track Pancake V1 and V2 for WBNB and BUSD liquidity pools.",(a=o).total_value_USD_today<he?{title:"Liquidity Pool Value",text:"Only $"+Le(a.total_value_USD_today)+" value available in liquidity pools",details:"",custom_html:Be(i),score:-1,priority:1,tooltip:n}:{title:"Liquidity Pool Value",text:"$"+Le(a.total_value_USD_today)+" value available in liquidity pools",details:"",custom_html:Be(i),score:1,priority:1,tooltip:n})),e.research_insights.push((a=e.token_info,i="Large allocation of tokens to liquidity pools facilitates large trading volumes. Burned tokens are excluded from total supply for this calculation.",n=o.total_token_reserves,(n=0==(t=a.total_supply.sub(a.total_token_burned))?0:n/t*100)<ke?{title:"Liquidity Pool Token Allocation",text:"Only "+n.toFixed(2)+"% of "+a.symbol+" tokens available in liquidity pools",details:"",score:-1,priority:1,tooltip:i}:{title:"Liquidity Pool Token Allocation",text:n.toFixed(2)+"%  of "+a.symbol+" tokens available in liquidity pools",details:"",score:1,priority:1,tooltip:i})),e.research_insights.push((a=e.liquidity_info,i="Locked liquidity pool assures no rug pull. We only track well known LP lockers (Mudra, DXSale Lock, UniCrypt, DeepLocker, CryptEx, Burn address). Custom lockers can be easily manipulated.",(n=0==(n=o).total_value_USD_today?0:n.total_value_USD_locked_today/n.total_value_USD_today*100)<we?{title:"Locked Liquidity",text:"As of today, only "+n.toFixed(2)+"% of liquidity is locked in known lockers (includes burned tokens).",details:"",custom_html:qe(a),score:-1,priority:1,tooltip:i,premium:!0}:{title:"Locked Liquidity",text:"As of today, "+n.toFixed(2)+" % of liquidity is locked in known lockers (includes burned tokens).",details:"",custom_html:qe(a),score:1,priority:1,tooltip:i,premium:!0})),e.research_insights.push((o=(e=function(e){for(ll in e.locker_providers)if("DXSale"==e.locker_providers[ll].name)return!0
return!1}(i=o))?"(Warning: This information may be incomplete, few lock providers for this token do not provide access to lock time)":"",e="Locked liquidity pool assures no rug pull. We only track well known LP lockers (Mudra, DXSale, UniCrypt, DeepLocker, CryptEx). Custom lockers can be easily manipulated.",(i=0==i.total_value_USD_today?0:i.total_value_USD_locked_after_1year/i.total_value_USD_today*100)<ge?{title:"Locked Liquidity Time",text:"After 1 year from now, only "+i.toFixed(2)+"% of liquidity will remain locked in known lockers. "+o,details:"",custom_html:void 0,score:-1,priority:1,tooltip:e,premium:!0}:{title:"Locked Liquidity Time",text:"After 1 year from now, "+i.toFixed(2)+" % of liquidity will remain locked in known lockers",details:"",custom_html:void 0,score:1,priority:1,tooltip:e,premium:!0}))}function Se(e){try{$.post("/api/log/",{address:e})}catch(e){console.log(e)}}function Oe(e){null!=w?($("#research_connect_wallet").hide(),$("#research_connected_wallet_address").text(w.substring(0,6)+".."+w.substring(w.length-4,w.length)),$("#research_connected_wallet").show(),$("#research_connect_wallet_msg").hide()):($("#research_connect_wallet").show(),$("#research_connected_wallet_address").text(""),$("#research_connected_wallet").hide(),$("#research_connect_wallet_msg").text(e.msg),$("#research_connect_wallet_msg").show())}async function Ne(){try{$("#research_token_info").text(""),$("#research_token_info_spinner").show(),Se("Research Input  for: "+$("#research_token_address").val().trim().toLowerCase())
var e=await Me($("#research_token_address").val().trim().toLowerCase())
e.valid?($("#research_fee").show(),$("#research_button").show(),$("#research_button").prop("disabled",!1),$("#research_token_info_spinner").hide(),$("#research_token_info").text(e.name+"("+e.symbol+")"),"url"==$("#research_token_address").attr("data-trigger")&&($("#research_token_address").attr("data-trigger",""),$("#research_button").trigger("click"))):($("#research_fee").hide(),$("#research_button").hide(),$("#research_token_info_spinner").hide(),$("#research_token_info").html(e.err_msg),Se("Research Input failed: "+e.err_msg))}catch(e){Se("Research Input failed: "+(null!=e.message?e.message:"Unknown error")),console.log(e),$("#research_fee").hide(),$("#research_button").hide(),$("#research_token_info_spinner").hide(),$("#research_token_info").text("Something went wrong. Please try again.")}}$(document).ready(function(){var e
u=new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org")),$("#research_token_address").prop("disabled",!1),$("#research_token_address").on("input",async function(e){await Ne()}),$("#research_token_address").on("keypress",async function(e){13==e.which&&await Ne()}),$("#research_button").on("click",async function(e){try{$("#research_token_address").prop("disabled",!0),$("#research_button").prop("disabled",!0),$("#research_button_spinner").show(),await async function(e){var t,n,a,i,o,r,s,l,u,d=!1
try{null!=w&&(n=await new(t=new Web3(k)).eth.Contract(ne,z).methods.balanceOf(w).call(),n=t.utils.toBN(n),a=await new t.eth.Contract(Q,Y).methods.getReserves().call(),i=t.utils.toBN(a[0]),o=t.utils.toBN(a[1]).div(i),r=await new t.eth.Contract(Q,j).methods.getReserves().call(),s=t.utils.toBN(r[0]),l=t.utils.toBN(r[1]),u=t.utils.fromWei(s.mul(n).div(l))*o,d=100<=u)}catch(e){Dt("Research user account failed: "+(null!=e.message?e.message:"Unknown error")),Dt("Research user account failed: "+(null!=e.stack?e.stack:"Unknown stack"))}$("#research_result_title").text("Insights for "+e.token_info.name+"("+e.token_info.symbol+")"),$("#research_result_insights li").remove(),$.each(e.research_insights,function(e,t){var n,a=t.text
""!=t.details&&(a=a+"("+t.details+")"),n=t.custom_html||"",null!=t.premium&&1==t.premium&&(t.title=t.title+'<sup style="color:green;background-color:powderblue;">Premium</sup>'),null==t.premium||1!=t.premium||d?(icon=1==t.score?"icofont-check-circled green":0==t.score?"icofont-warning yellow":"icofont-error red",color=1==t.score?"#28a745":0==t.score?"#FFA500":"#DC143C",$("#research_result_insights").append('<li><i class="'+icon+'" style="color:'+color+';"></i><h5 class="title" style="display:inline-block;">'+t.title+"</h5>:&nbsp;"+a+"&nbsp;"+n+'<a href="#" data-toggle="tooltip" data-placement="right" title="'+t.tooltip+'"onclick="return false"><i class="icofont-info-circle" style="color: #C0C0C0"></i></a></li>')):(icon="icofont-question-circle yellow",color="#FFA500",a='<span style="color: transparent;text-shadow: 0 0 5px rgba(0,0,0,0.5);">Research findings</span>Get access with <a href="#pricing">Mudra Premium</a>',$("#research_result_insights").append('<li><i class="'+icon+'" style="color:'+color+';"></i><h5 class="title" style="display:inline-block;">'+t.title+"</h5>:&nbsp;"+a+'&nbsp;<a href="#" data-toggle="tooltip" data-placement="right" title="'+t.tooltip+'"onclick="return false"><i class="icofont-info-circle" style="color: #C0C0C0"></i></a></li>'))}),$('[data-toggle="tooltip"]').tooltip()}(await async function(e){Se("Research request for: "+e)
var t={basic_info:{},valid:!0,err_msg:""}
return t.token_info=await Me(e),t.research_insights=[],await $e(t),t.liquidity_info=[],t.liquidity_info.push(await Ae(t.token_info,s,D,E)),t.liquidity_info.push(await Ae(t.token_info,d,D,E)),t.liquidity_info.push(await Ae(t.token_info,s,I,P)),t.liquidity_info.push(await Ae(t.token_info,d,I,P)),t.aggregate_liquidity_info=function(e){var t={total_value_USD_today:0,total_token_reserves:new u.utils.BN(0),total_supply:new u.utils.BN(0),total_value_USD_burned_forever:0,total_value_USD_locked_today:0,total_value_USD_locked_after_1year:0,locker_providers:[]}
for(l in e)liquidity=e[l],t.total_value_USD_today+=liquidity.total_value_USD_today,t.total_token_reserves=t.total_token_reserves.add(liquidity.total_token_reserves),t.total_value_USD_burned_forever+=liquidity.total_value_USD_burned_forever,t.total_value_USD_locked_today+=liquidity.total_value_USD_locked_today,t.total_value_USD_locked_after_1year+=liquidity.total_value_USD_locked_after_1year,t.locker_providers=t.locker_providers.concat(liquidity.locker_providers)
return t}(t.liquidity_info),Ce(t),t}($("#research_token_address").val().trim().toLowerCase())),$("#research_result").show(),$("#research_button_spinner").hide(),$("#research_token_address").prop("disabled",!1),$("#research_button").prop("disabled",!1),$("#research_fee").hide(),$("#research_button").hide()}catch(e){console.log(e),Se("Research request failed: "+(null!=e.message?e.message:"Unknown error")),$("#research_button_spinner").hide(),$("#research_token_address").prop("disabled",!1),$("#research_button").prop("disabled",!1),$("#research_token_info_spinner").hide(),$("#research_token_info").text("Something went wrong. Please try again."),$("#research_fee").hide(),$("#research_button").hide(),$("#research_token_address").attr("data-trigger","")}}),new URLSearchParams(window.location.search).has("research")&&((e=new URLSearchParams(window.location.search)).has("address")?(e=e.get("address"),$("#research_token_address").val(e),$("#research_token_address").attr("data-trigger","url"),$("#research_token_address").trigger("input"),document.querySelector("#features-research").scrollIntoView({behavior:"smooth"})):console.log("incorrect research URL")),$("#research_connect_wallet").on("click",async function(e){await me()})}),g=void 0,m=[]
const Pe=window.Web3Modal.default,Ie=window.WalletConnectProvider.default
v=!1
const Ee=.1
y=t,i=N,T=V,x=new Web3(new Web3.providers.HttpProvider(y))
async function De(){var e,t,n,a,i,o,r,s,l
for(console.log("get all locks"),e=[],t=new Web3(k),n=w,i=await(a=new t.eth.Contract(re,T)).methods.userLocksLength(n).call(),o=0;o<i;)r=await a.methods.userLockAt(n,o).call(),(s=await a.methods.tokenLocks(r).call()).lpToken=s.lpToken.toLowerCase(),l=await Ue(s.lpToken),l={id:r,lp_address:s.lpToken,amount:t.utils.toBN(s.tokenAmount),status:!0,unlock_time:s.unlockTime,lp_info:l},e.push(l),o++
return e}async function Re(e,t){var n,a,i,o,r,s,l
if(console.log("get all locks"),n=[],o=await(i=new(a=new Web3(y)).eth.Contract(re,T)).methods.lockNonce().call(),!((o=parseInt(o))<e)){for(r=e;r<o&&r<e+t;)(s=await i.methods.tokenLocks(r).call()).lpToken=s.lpToken.toLowerCase(),s.lpToken.toLowerCase()!=Z.toLowerCase()&&(l=await Ue(s.lpToken),l={id:r,lp_address:s.lpToken,amount:a.utils.toBN(s.tokenAmount),status:!0,unlock_time:s.unlockTime,lp_info:l},n.push(l)),r++
return n}}async function We(){await me()}async function Ue(e){var t,n=e,a=null==k?y:k,a={token0_info:{address:"",name:"",symbol:""},token1_info:{address:"",name:"",symbol:""},total_supply:new(e=new Web3(a)).utils.BN(0),valid:!0,err_msg:"",allowance:!1}
if(!e.utils.isAddress(n))return a.err_msg="Not a valid LP address",et("LP token address"+n),a.valid=!1,a
if((await e.eth.getCode(n)).toLowerCase()=="0x".toLowerCase())return a.err_msg="Not a valid LP address",et("LP token code"+n),a.valid=!1,a
try{if(t=new e.eth.Contract(Q,n),a.name=await t.methods.name().call(),a.name.toLowerCase()!="Pancake LPs".toLowerCase())return a.err_msg="Not a valid LP address",et("LP token pancake"+n),a.valid=!1,a}catch(e){return a.err_msg="Not a valid LP address",et("LP token pancake exception"+n),a.valid=!1,a}return a.token0_info.address=await t.methods.token0().call(),a.token1_info.address=await t.methods.token1().call(),a.total_supply=e.utils.toBN(await t.methods.totalSupply().call()),t=new e.eth.Contract(ne,a.token0_info.address),a.token0_info.symbol=await t.methods.symbol().call(),a.token0_info.name=await t.methods.name().call(),e=new e.eth.Contract(ne,a.token1_info.address),a.token1_info.symbol=await e.methods.symbol().call(),a.token1_info.name=await e.methods.name().call(),null!=w&&(a.allowance=(e=n,e=await(e=new(n=new Web3(k)).eth.Contract(Q,e)).methods.allowance(w,T).call(),await((n=n.utils.toBN(2).pow(n.utils.toBN(256)).sub(n.utils.toBN(1))).cmp(Web3.utils.toBN(e))<=0))),a}async function He(e){var t=new Web3(k),e=await(e=new t.eth.Contract(Q,e)).methods.balanceOf(w).call(),e=t.utils.fromWei(e,"ether")
return parseFloat(e),e}async function Ve(){var e,t
if(g)for(l in e=await He(g),$("#newlock_lptoken_balance_info").text(e),$("#newlock_amount").val(e),t=await De())t[l].lp_address.toLowerCase()==g.toLowerCase()&&$("#newlock_result_info").html("You already have a lock for this LP. You can <a onclick=$('#lock_manage_tab_link').click() href='#tab-2'>view/manage your locks.</a>")}function ze(e){$("#newlock_lock_max_amount").prop("disabled",e),$("#newlock_amount").prop("disabled",e),$("#newlock_unlocktime_now").prop("disabled",e),$("#newlock_unlocktime_plus1").prop("disabled",e),$("#newlock_unlocktime").prop("disabled",e),$("#newlock_feeLP").prop("disabled",e),$("#newlock_feeBNB").prop("disabled",e),$("#newlock_lockbutton").prop("disabled",e),$("#newlock_lockbutton_approve").prop("disabled",e)}function je(){$("#newlock_amount").val(""),document.querySelector("#newlock_unlocktime")._flatpickr.setDate((new Date).setHours((new Date).getHours()+24),!0),$("#newlock_feeLP").prop("checked",!1),$("#newlock_feeBNB").prop("checked",!0),$("#newlock_lptoken_info").html("--/--"),$("#newlock_lptoken_balance_info").text("0"),$("#newlock_lockbutton_approve span").first().text("Approve LP Token")}async function Ye(e,t,n){var a={status:!1,address:""}
return(t=await new new Web3(null==k?y:k).eth.Contract(J,n).methods.getPair(e,t).call()).toLowerCase()!=Z.toLowerCase()&&(a.status=!0,a.address=t),a}async function Ge(e){var t,n=null==k?y:k,a=e
return(n=new Web3(n)).utils.isAddress(e)&&(await n.eth.getCode(e)).toLowerCase()!="0x".toLowerCase()&&(await new n.eth.Contract(Q,e).methods.name().call()).toLowerCase()!="Pancake LPs".toLowerCase()&&((t=await Ye(a,G,D)).status||(t=await Ye(a,G,I)).status)?t.address:a}async function Xe(e){var t,n
try{if($("#newlock_result_info").html(""),$("#newlock_lptoken_info_spinner").show(),je(),42==(e=$("#newlock_lpaddress").val().trim().toLowerCase()).length&&!x.utils.isAddress(e)&&(et("lower case not valid "+e),e=e.toUpperCase(),!x.utils.isAddress(e))){et("upper case not valid "+e)
try{e=x.utils.toChecksumAddress(e),et("checksum case is valid "+x.utils.isAddress(e))}catch(e){et("checksum case is not failed")}}et("New Lock input for: "+e)
try{e=await Ge(e)}catch(e){}(t=await Ue(e)).valid?(g=e,n="https://bscscan.com/token/",$("#newlock_lptoken_info").html('<a target="_blank" href='+n+t.token0_info.address+">"+t.token0_info.symbol+'</a> / <a target="_blank" href='+n+t.token1_info.address+">"+t.token1_info.symbol+"</a>"),await Ve(),ze(!1),t.allowance?($("#newlock_lockbutton_approve").prop("disabled",!0),$("#newlock_lockbutton_approve span").first().text("Approved")):$("#newlock_lockbutton").prop("disabled",!0)):($("#newlock_lptoken_info").html(t.err_msg),ze(!0),et("New LP token fetch failed: "+t.err_msg))}catch(e){console.log(e),et("New LP token fetch failed: "+(null!=e.message?e.message:"Unknown error")),et("New LP token fetch failed stack: "+(null!=e.stack?e.stack:"Unknown stack")),$("#newlock_lptoken_info").text("Something went wrong. Please try again."),ze(!0),g=void 0}finally{$("#newlock_lptoken_info_spinner").hide()}}async function Je(e){var t
null!=w?($("#newlock_connect_wallet").hide(),$("#newlock_connected_wallet_address").text(w.substring(0,6)+".."+w.substring(w.length-4,w.length)),$("#newlock_connected_wallet").show(),$("#newlock_connect_wallet_msg").hide(),$("#newlock_lpaddress").prop("disabled",!1),!g||(t=await Ue(g)).valid&&(await Ve(),t.allowance?($("#newlock_lockbutton_approve").prop("disabled",!0),$("#newlock_lockbutton_approve span").first().text("Approved"),$("#newlock_lockbutton").prop("disabled",!1)):($("#newlock_lockbutton").prop("disabled",!0),$("#newlock_lockbutton_approve").prop("disabled",!1),$("#newlock_lockbutton_approve span").first().text("Approve LP Token")))):($("#newlock_connect_wallet").show(),$("#newlock_connected_wallet_address").text(""),$("#newlock_connected_wallet").hide(),$("#newlock_lpaddress").prop("disabled",!0),$("#newlock_connect_wallet_msg").text(e.msg),$("#newlock_connect_wallet_msg").show(),ze(!0))}function Qe(){$("#managelock_withdraw_input").hide(),$("#managelock_withdraw_max_button").hide(),$("#managelock_withdraw_available_display").hide(),$("#managelock_withdraw_submit_button").hide(),$("#managelock_withdraw_spinner").hide(),$("#managelock_withdraw_result").hide(),$("#managelock_extend_input").hide(),$("#managelock_extend_current_button").hide(),$("#managelock_extend_plus1_button").hide(),$("#managelock_extend_submit_button").hide(),$("#managelock_extend_spinner").hide(),$("#managelock_extend_result").hide(),$("#managelock_increment_input").hide(),$("#managelock_increment_max_button").hide(),$("#managelock_increment_available_display").hide(),$("#managelock_increment_submit_button").hide(),$("#managelock_increment_spinner").hide(),$("#managelock_increment_result").hide(),$("#managelock_increment_feeLP").hide(),$("#managelock_increment_feeBNB").hide(),$("#managelock_increment_fee_container").hide(),$("#managelock_transfer_input").hide(),$("#managelock_transfer_submit_button").hide(),$("#managelock_transfer_spinner").hide(),$("#managelock_transfer_result").hide(),$("#managelock_generatelink_display").hide(),$("#managelock_generatelink_spinner").hide(),$("#managelock_generatelink_result").hide()}function Ke(e){$("#managelock_optionwithdraw_button").prop("disabled",e),$("#managelock_optionextend_button").prop("disabled",e),$("#managelock_optionincrement_button").prop("disabled",e),$("#managelock_optiontransfer_button").prop("disabled",e),$("#managelock_optiongeneratelink_button").prop("disabled",e)}function Ze(){$("#managelock_optionwithdraw_button").on("click",async function(e){await function(){Qe(),$("#managelock_withdraw_input").show(),$("#managelock_withdraw_input").focus(),$("#managelock_withdraw_max_button").show(),$("#managelock_withdraw_available_display").show(),$("#managelock_withdraw_submit_button").show(),$("#managelock_withdraw_max_button").unbind("click"),$("#managelock_withdraw_submit_button").unbind("click"),$("#managelock_withdraw_input").unbind("keyup")
var e=$("#managelock_withdraw_submit_button").attr("data-index")
m[e].unlock_time>(new Date).getTime()/1e3?($("#managelock_withdraw_available_display span").text("0"),$("#managelock_withdraw_submit_button").prop("disabled",!0)):($("#managelock_withdraw_available_display span").text($("#lock_list_lockamount").text()),$("#managelock_withdraw_submit_button").prop("disabled",!1)),$("#managelock_withdraw_submit_button").on("click",async function(e){await async function(){var e,t,n,a,i,o,r,s,l,u,d
if($("#managelock_withdraw_result").html(""),$("#managelock_withdraw_result").show(),$("#managelock_withdraw_spinner").show(),e=!1,$("#managelock_withdraw_available_display span").text()==$("#managelock_withdraw_input").val().trim().toString()&&(e=!0),0==(t=x.utils.toBN(x.utils.toWei($("#managelock_withdraw_input").val().trim(),"ether"))))return $("#managelock_withdraw_result").html("Withdraw amount not set"),void $("#managelock_withdraw_spinner").hide()
Ke(v=!0),$("#managelock_withdraw_input").prop("disabled",!0),$("#managelock_withdraw_max_button").prop("disabled",!0),$("#managelock_withdraw_submit_button").prop("disabled",!0),n=$("#managelock_withdraw_submit_button").attr("data-index"),n=m[n].id
try{i=n,o=t,r=e,console.log("unlock token"),s={output:{},status:!0,msg:""},d=new Web3(k),l=w,u=d.utils.toBN(0),d=new d.eth.Contract(re,T),r?await d.methods.withdraw(i).send({from:l,value:u}).on("transactionHash",function(e){console.log("Unlock : ",e)}).on("confirmation",function(e,t){console.log("Unlock confirmed")}).on("receipt",function(e){}).on("error",function(e,t){s.status=!1,s.err_msg=e}):await d.methods.withdrawPartially(i,o).send({from:l,value:u}).on("transactionHash",function(e){console.log("Unlock : ",e)}).on("confirmation",function(e,t){console.log("Unlock confirmed")}).on("receipt",function(e){}).on("error",function(e,t){s.status=!1,s.err_msg=e}),(a=await s).status?$("#managelock_withdraw_result").html("Withdraw successful. Please refresh page."):$("#managelock_withdraw_result").html("Withdraw failed: "+a.err_msg)}catch(e){console.log(e),et(n+" Withdraw Lock failed: "+(null!=e.message?e.message:"Unknown error")),et(n+" Withdraw Lock failed stack: "+(null!=e.stack?e.stack:"Unknown stack")),$("#managelock_withdraw_result").html("Withdraw failed: "+(null!=e.message?e.message:"Unknown error"))}finally{$("#managelock_withdraw_input").prop("disabled",!1),$("#managelock_withdraw_max_button").prop("disabled",!1),$("#managelock_withdraw_submit_button").prop("disabled",!1),$("#managelock_withdraw_spinner").hide(),Ke(!1),v=!1}}()}),$("#managelock_withdraw_max_button").on("click",function(e){$("#managelock_withdraw_input").val($("#managelock_withdraw_available_display span").text())}),$("#managelock_withdraw_input").keyup(function(){var e=$(this).val(),e=(e=isNaN(e)&&2<(e=e.replace(/[^0-9\.]/g,"")).split(".").length?e.replace(/\.+$/,""):e)||0
$(this).val(e)})}()}),$("#managelock_optionextend_button").on("click",async function(e){var t,n
Qe(),$("#managelock_extend_input").show(),$("#managelock_extend_input").focus(),$("#managelock_extend_current_button").show(),$("#managelock_extend_plus1_button").show(),$("#managelock_extend_submit_button").show(),$("#managelock_extend_current_button").unbind("click"),$("#managelock_extend_plus1_button").unbind("click"),$("#managelock_extend_submit_button").unbind("click"),$("#managelock_extend_input").unbind("input"),t=$("#managelock_increment_submit_button").attr("data-index"),n=m[t].unlock_time,n=parseInt(n)+60,flatpickr("#managelock_extend_input",{enableTime:!0,dateFormat:"Y-m-d H:i",defaultDate:new Date(1e3*n),minDate:new Date(1e3*(n-59)),allowInput:!0}),$("#managelock_extend_submit_button").on("click",async function(e){await async function(){var e,t,n,a,i,o,r,s,l
$("#managelock_extend_result").html(""),$("#managelock_extend_result").show(),e=new Date(document.querySelector("#managelock_extend_input")._flatpickr.latestSelectedDateObj),Ke(v=!0),$("#managelock_extent_input").prop("disabled",!0),$("#managelock_extend_submit_button").prop("disabled",!0),$("#managelock_extend_current_button").prop("disabled",!0),$("#managelock_extend_plus1_button").prop("disabled",!0),$("#managelock_extend_spinner").show(),t=$("#managelock_extend_submit_button").attr("data-index"),t=m[t].id
try{a=t,i=e,console.log("increment unlock time"),o={output:{},status:!0,msg:""},r=new Web3(k),s=w,l=r.utils.toBN(0),await new r.eth.Contract(re,T).methods.extendLockTime(a,parseInt(i.getTime()/1e3)).send({from:s,value:l}).on("transactionHash",function(e){console.log("Extend : ",e)}).on("confirmation",function(e,t){console.log("Extend confirmed")}).on("receipt",function(e){}).on("error",function(e,t){o.status=!1,o.err_msg=e}),(n=await o).status?$("#managelock_extend_result").html("Extend successful. Please refresh page."):$("#managelock_extend_result").html("Extend failed: "+n.err_msg)}catch(e){console.log(e),et(t+" Extend Lock failed: "+(null!=e.message?e.message:"Unknown error")),et(t+" Extend Lock failed stack: "+(null!=e.stack?e.stack:"Unknown stack")),$("#managelock_extend_result").html("Extend failed: "+(null!=e.message?e.message:"Unknown error"))}finally{$("#managelock_extent_input").prop("disabled",!1),$("#managelock_extend_submit_button").prop("disabled",!1),$("#managelock_extend_current_button").prop("disabled",!1),$("#managelock_extend_plus1_button").prop("disabled",!1),$("#managelock_extend_spinner").hide(),Ke(!1),v=!1}}()}),$("#managelock_extend_input").on("input",function(){"Invalid Date"==new Date(document.querySelector("#managelock_extend_input")._flatpickr.latestSelectedDateObj)&&document.querySelector("#managelock_extend_input")._flatpickr.setDate(new Date(1e3*n),!0)}),$("#managelock_extend_current_button").on("click",function(e){document.querySelector("#managelock_extend_input")._flatpickr.setDate(new Date(1e3*n),!0)}),await $("#managelock_extend_plus1_button").on("click",function(e){var t=new Date(document.querySelector("#managelock_extend_input")._flatpickr.latestSelectedDateObj)
t.setMonth(t.getMonth()+12),document.querySelector("#managelock_extend_input")._flatpickr.setDate(t,!0)})}),$("#managelock_optionincrement_button").on("click",async function(e){var t
Qe(),$("#managelock_increment_input").show(),$("#managelock_increment_input").focus(),$("#managelock_increment_max_button").show(),$("#managelock_increment_available_display").show(),$("#managelock_increment_submit_button").show(),$("#managelock_increment_feeLP").show(),$("#managelock_increment_feeBNB").show(),$("#managelock_increment_fee_container").show(),$("#managelock_increment_max_button").unbind("click"),$("#managelock_increment_submit_button").unbind("click"),$("#managelock_increment_input").unbind("keyup"),$("#managelock_increment_submit_button").on("click",async function(e){await async function(){var e,t,n,a,i,o,r,s,l,u,d,c
if($("#managelock_increment_result").html(""),$("#managelock_increment_result").show(),0!=(e=x.utils.toBN(x.utils.toWei($("#managelock_increment_input").val().trim(),"ether")))){Ke(v=!0),$("#managelock_increment_input").prop("disabled",!0),$("#managelock_increment_submit_button").prop("disabled",!0),$("#managelock_increment_feeLP").prop("disabled",!0),$("#managelock_increment_feeBNB").prop("disabled",!0),$("#managelock_increment_spinner").show(),n=$("#managelock_increment_submit_button").attr("data-index"),t=m[n].id,n=$("input[name=managelock_increment_fee]:checked").val()
try{i=t,o=e,r=n,console.log("increment lock amount"),s={output:{},status:!0,msg:""},l=new Web3(k),u=w,d=l.utils.toBN(0),c=0,"BNB"==r?d=l.utils.toBN(l.utils.toWei(Ee.toString(),"ether")):c=1,await new l.eth.Contract(re,T).methods.increaseLockAmount(i,o,c).send({from:u,value:d}).on("transactionHash",function(e){console.log("Lock : ",e)}).on("confirmation",function(e,t){console.log("Lock confirmed")}).on("receipt",function(e){}).on("error",function(e,t){s.status=!1,s.err_msg=e}),(a=await s).status?$("#managelock_increment_result").html("Increment successful. Please refresh page."):$("#managelock_increment_result").html("Increment failed: "+a.err_msg)}catch(e){console.log(e),et(t+" Increment Lock failed: "+(null!=e.message?e.message:"Unknown error")),et(t+" Increment Lock failed stack: "+(null!=e.stack?e.stack:"Unknown stack")),$("#managelock_increment_result").html("Increment failed: "+(null!=e.message?e.message:"Unknown error"))}finally{$("#managelock_increment_input").prop("disabled",!1),$("#managelock_increment_submit_button").prop("disabled",!1),$("#managelock_increment_spinner").hide(),$("#managelock_increment_feeLP").prop("disabled",!1),$("#managelock_increment_feeBNB").prop("disabled",!1),Ke(!1),v=!1}}else $("#managelock_increment_result").html("Increment amount not set")}()}),t=$("#managelock_transfer_submit_button").attr("data-index"),t=await He(m[t].lp_address),$("#managelock_increment_available_display span").text(t),$("#managelock_increment_max_button").on("click",function(e){$("#managelock_increment_input").val($("#managelock_increment_available_display span").text())}),await $("#managelock_increment_input").keyup(function(){var e=$(this).val(),e=(e=isNaN(e)&&2<(e=e.replace(/[^0-9\.]/g,"")).split(".").length?e.replace(/\.+$/,""):e)||0
$(this).val(e)})}),$("#managelock_optiontransfer_button").on("click",async function(e){Qe(),$("#managelock_transfer_input").show(),$("#managelock_transfer_input").focus(),$("#managelock_transfer_submit_button").show(),$("#managelock_transfer_submit_button").unbind("click"),await $("#managelock_transfer_submit_button").on("click",async function(e){await async function(){var e,t,n,a,i,o,r,s,l
if($("#managelock_transfer_result").html(""),$("#managelock_transfer_result").show(),e=(e=$("#managelock_transfer_input").val().trim()).toLowerCase(),x.utils.isAddress(e)){Ke(v=!0),$("#managelock_transfer_input").prop("disabled",!0),$("#managelock_transfer_submit_button").prop("disabled",!0),$("#managelock_transfer_spinner").show(),t=$("#managelock_transfer_submit_button").attr("data-index"),t=m[t].id
try{a=t,i=e,console.log("transfer owner"),o={output:{},status:!0,msg:""},r=new Web3(k),s=w,l=r.utils.toBN(0),await new r.eth.Contract(re,T).methods.transferLock(a,i).send({from:s,value:l}).on("transactionHash",function(e){console.log("transfer : ",e)}).on("confirmation",function(e,t){console.log("Transfer confirmed")}).on("receipt",function(e){}).on("error",function(e,t){o.status=!1,o.err_msg=e}),(n=await o).status?$("#managelock_transfer_result").html("Transfer successful. Please refresh page."):$("#managelock_transfer_result").html("Transfer failed: "+n.err_msg)}catch(e){console.log(e),et(t+" Transfer Lock failed: "+(null!=e.message?e.message:"Unknown error")),et(t+" Transfer Lock failed stack: "+(null!=e.stack?e.stack:"Unknown stack")),$("#managelock_transfer_result").html("Transfer failed: "+(null!=e.message?e.message:"Unknown error"))}finally{$("#managelock_transfer_input").prop("disabled",!1),$("#managelock_transfer_submit_button").prop("disabled",!1),$("#managelock_transfer_spinner").hide(),Ke(!1),v=!1}}else $("#managelock_transfer_result").html("New owner is not a valid address")}()})}),$("#managelock_optiongeneratelink_button").on("click",async function(e){Qe(),$("#managelock_generatelink_display").show(),$("#managelock_generatelink_display").focus(),$("#managelock_generatelink_display").prop("href",window.location.origin+window.location.pathname+"?certificate=yes&type=0&lp="+$("#managelock_generatelink_display").attr("data-address")),await $("#managelock_generatelink_display").html("<i class='icofont-share'></i>Shareable Link")})}function et(e){try{$.post("/api/log/",{address:e})}catch(e){console.log(e)}}$(document).ready(async function(){var e,t
flatpickr("#newlock_unlocktime",{enableTime:!0,dateFormat:"Y-m-d H:i",defaultDate:(new Date).setHours((new Date).getHours()+24),minDate:(new Date).setHours((new Date).getHours()+12),allowInput:!0}),$('a[data-toggle="tab"]').on("shown.bs.tab",async function(e){"#tab-2"==$(e.target).attr("href")&&await async function(){var e,t,n,a,i=$("#lock-list")
if(i.html(""),null!=w){$("#managelock_spinner").show(),m=[]
try{for(l in 0==(e=await De()).length&&i.text("No locks found for connected user!"),e)e[l],t=$("<li />").appendTo(i),n=$('<a data-toggle="collapse" class="" href="#list-lock'+l+'"/>').appendTo(t),a=parseInt(l)+1,n.text("Lock "+a),$('<i class="icofont-simple-down"/>').appendTo(n),$('<div data-index="'+l+'"id="list-lock'+l+'" class="collapse " data-parent=".lock-list" />').appendTo(i),l++
$(".lock-list .collapse").on("shown.bs.collapse",function(e){var t,n,a
$(".lock-list .collapse").each(function(e){$(this).html("")}),$("#"+$(e.target).attr("id")).html(r),t=m[$(e.target).attr("data-index")],$("#lock_list_lockamount").text(x.utils.fromWei(t.amount,"ether")),a=(n=new Date(1e3*t.unlock_time))-new Date,$("#lock_list_unlocktime").text(moment.duration(a).humanize(!0)+" ("+n+")"),$("#managelock_generatelink_display").attr("data-address",t.lp_address),$("#lock_list_lptoken").prop("href","https://bscscan.com/token/"+t.lp_address),$("#lock_list_token0").prop("href","https://bscscan.com/token/"+t.lp_info.token0_info.address),$("#lock_list_token1").prop("href","https://bscscan.com/token/"+t.lp_info.token1_info.address),$("#lock_list_token0 span").text(t.lp_info.token0_info.symbol),$("#lock_list_token1 span").text(t.lp_info.token1_info.symbol),e=$(e.target).attr("data-index"),$("#managelock_withdraw_submit_button").attr("data-index",e),$("#managelock_extend_submit_button").attr("data-index",e),$("#managelock_increment_submit_button").attr("data-index",e),$("#managelock_transfer_submit_button").attr("data-index",e),Ze()}),m=e}catch(e){i.text("Something went wrong!"),console.log(e),et(w+" Get Lock List failed: "+(null!=e.message?e.message:"Unknown error")),et(w+" Get Lock List failed stack: "+(null!=e.stack?e.stack:"Unknown stack"))}finally{$("#managelock_spinner").hide()}}else i.text("Please connect wallet to see locks.")}(),"#browse-locks"==$(e.target).attr("href")&&await async function(){var e,t,n,a,i,o=$("#browse-locks-list")
o.html(""),$("#browselock_spinner").show(),e=0
try{for(t=await Re(e,1);null!=t;){for(l in t)n=t[l],a=$('<li style="top-margin:10px"/>').appendTo(o),(i=$('<a target="_blank" href="" />').appendTo(a)).prop("href",window.location.origin+window.location.pathname+"?certificate=yes&type=0&lp="+n.lp_address),$('<i class="icofont-certificate" style="font-size: 50px;"/>').appendTo(i),$("<span/>").appendTo(i).text(n.lp_info.token0_info.symbol+" / "+n.lp_info.token1_info.symbol),l++
t=await Re(e+=1,1)}}catch(e){o.text("Something went wrong. Please refresh page!"),console.log(e),et(w+" Browse Lock List failed: "+(null!=e.message?e.message:"Unknown error")),et(w+" Browse Lock List failed stack: "+(null!=e.stack?e.stack:"Unknown stack"))}finally{$("#browselock_spinner").hide()}}()}),$("#newlock_lpaddress").on("input",async function(e){await Xe()}),$("#newlock_lpaddress").on("keypress",async function(e){13==e.which&&await Xe()}),$("#newlock_lock_max_amount").on("click",function(e){$("#newlock_amount").val($("#newlock_lptoken_balance_info").text())}),$("#newlock_amount").keyup(function(){var e=$(this).val(),e=(e=isNaN(e)&&2<(e=e.replace(/[^0-9\.]/g,"")).split(".").length?e.replace(/\.+$/,""):e)||0
$(this).val(e)}),$("#newlock_unlocktime").on("input",function(){"Invalid Date"==new Date(document.querySelector("#newlock_unlocktime")._flatpickr.latestSelectedDateObj)&&document.querySelector("#newlock_unlocktime")._flatpickr.setDate((new Date).setHours((new Date).getHours()+24),!0)}),$("#newlock_unlocktime_now").on("click",function(e){document.querySelector("#newlock_unlocktime")._flatpickr.setDate((new Date).setHours((new Date).getHours()+24),!0)}),$("#newlock_unlocktime_plus1").on("click",function(e){var t=new Date(document.querySelector("#newlock_unlocktime")._flatpickr.latestSelectedDateObj)
t.setMonth(t.getMonth()+12),document.querySelector("#newlock_unlocktime")._flatpickr.setDate(t,!0)}),$("#newlock_lockbutton").on("click",async function(e){await async function(e){var t,n,a,i,o,r,s,l,u,d,c,p,m,y,_,f,b,h
ze(v=!0),$("#newlock_lpaddress").prop("disabled",!0),$("#newlock_lockbutton_spinner").show(),$("#newlock_result_info").html("")
try{if(t=x.utils.toBN(x.utils.toWei($("#newlock_amount").val().trim(),"ether")),n=new Date(document.querySelector("#newlock_unlocktime")._flatpickr.latestSelectedDateObj),a=$("input[name=newlock_fee]:checked").val(),42==(e=$("#newlock_lpaddress").val().trim().toLowerCase()).length&&!x.utils.isAddress(e)&&(et("lower case not valid "+e),e=e.toUpperCase(),!x.utils.isAddress(e))){et("upper case not valid "+e)
try{e=x.utils.toChecksumAddress(e),et("checksum case is valid "+x.utils.isAddress(e))}catch(e){et("checksum case is not failed")}}try{e=await Ge(e)}catch(e){}if(et("New Lock submit for amount: "+t+" time: "+n+"fee: "+a+"adress: "+e),_=t,f=n,b=a,h={valid:!0,msg:""},null==e?(h.msg="LP Token address not set.",h.valid=!1):0==_?(h.msg="LP Token amount not set.",h.valid=!1):f<(f=(f=new Date).setHours(f.getHours()+12))?(h.msg="Unlock time too soon.",h.valid=!1):"BNB"!=b&&"LP"!=b&&(h.msg="Fee not set.",h.valid=!1),(i=h).valid)if(r=e,s=t,l=n,u=a,console.log("lock token"),d={output:{},status:!0,msg:""},c=new Web3(k),p=w,m=c.utils.toBN("0"),y=0,"BNB"==u?m=c.utils.toBN(c.utils.toWei(Ee.toString(),"ether")):y=1,await new c.eth.Contract(re,T).methods.lockTokens(r,s,parseInt(l.getTime()/1e3),p,y).send({from:p,value:m}).on("transactionHash",function(e){console.log("Lock : ",e)}).on("confirmation",function(e,t){console.log("Lock confirmed")}).on("receipt",function(e){}).on("error",function(e,t){d.status=!1,d.err_msg=e}),(o=await d).status){$("#newlock_result_info").html("Lock successfully created. <a onclick=$('#lock_manage_tab_link').click() href='#tab-2'>View/Manage your LP locks.</a> Use <a target='_blank' href='/tokenlocker'> Mudra Token Locker </a> to lock team tokens.")
try{$("#newlock_lpaddress").val(""),g=void 0,je()}catch(e){et("Minor New Lock failed: "+(null!=e.message?e.message:"Unknown error")),et("Minor New Lock failed stack: "+(null!=e.stack?e.stack:"Unknown stack"))}}else console.log(o.err_msg),$("#newlock_result_info").html(o.err_msg),et("New Lock failed: "+o.err_msg),ze(!1),$("#newlock_lockbutton_approve").prop("disabled",!0)
else $("#newlock_result_info").html(i.msg),ze(!1),$("#newlock_lockbutton_approve").prop("disabled",!0)}catch(e){console.log(e),et("New Lock failed: "+(null!=e.message?e.message:"Unknown error")),et("New Lock failed stack: "+(null!=e.stack?e.stack:"Unknown stack")),$("#newlock_result_info").html("Lock could not be created: "+(null!=e.message?e.message:"Unknown error")),ze(!1),$("#newlock_lockbutton_approve").prop("disabled",!0)}finally{$("#newlock_lpaddress").prop("disabled",!1),$("#newlock_lockbutton_spinner").hide(),v=!1}}()}),$("#newlock_lockbutton_approve").on("click",async function(e){await async function(){var e,t,n,a
ze(v=!0),$("#newlock_lpaddress").prop("disabled",!0),$("#newlock_lockbutton_approve_spinner").show(),$("#newlock_result_info").html("")
try{t=g,n={output:{},status:!0,msg:""},t=new(a=new Web3(k)).eth.Contract(Q,t),a=a.utils.toBN(2).pow(a.utils.toBN(256)).sub(a.utils.toBN(1)),await t.methods.approve(T,a).send({from:w}).on("transactionHash",function(e){console.log("Approve : ",e)}).on("confirmation",function(e,t){console.log("Approve confirmed")}).on("receipt",function(e){}).on("error",function(e,t){n.status=!1,n.err_msg=e}),(e=await n).status?($("#newlock_result_info").html("Approved"),$("#newlock_lockbutton_approve").prop("disabled",!0),$("#newlock_lockbutton_approve span").first().text("Approved"),$("#newlock_lockbutton").prop("disabled",!1)):($("#newlock_result_info").html("Approval failed: "+e.err_msg),$("#newlock_lockbutton").prop("disabled",!0))}catch(e){console.log(e),et(g+" Approval failed: "+(null!=e.message?e.message:"Unknown error")),et(g+" Approval failed stack: "+(null!=e.stack?e.stack:"Unknown stack")),$("#newlock_result_info").html("Approval failed: "+(null!=e.message?e.message:"Unknown error")),$("#newlock_lockbutton").prop("disabled",!0)}finally{$("#newlock_lockbutton_approve_spinner").hide(),$("#newlock_lpaddress").prop("disabled",!1),e=$("#newlock_lockbutton").prop("disabled"),ze(!1),$("#newlock_lockbutton").prop("disabled",e),v=!1}}()}),$("#newlock_connect_wallet").on("click",async function(e){await We()}),new URLSearchParams(window.location.search).has("certificate")&&await((t=new URLSearchParams(window.location.search)).has("type")&&"0"==(e=t.get("type"))?($('a[href="#certificate"]').show(),$('a[href="#certificate"]').tab("show"),document.querySelector("#features").scrollIntoView({behavior:"smooth"}),"0"==e&&await async function(e){var t,n,a,i,o,r,s,u,d,c
$("#lock_certificate_container").show(),$("#lock_certificate_spinner").show()
try{if(0==(t=await async function(e){var t,n,a,i,o,r,s,l
for(console.log("get lock by LP"),t=[],null==(n=k)&&(n=y),o=await(i=new(a=new Web3(n)).eth.Contract(re,T)).methods.lpLocksLength(e).call(),r=0;r<o;)l=await i.methods.lpLockAt(e,r).call(),(s=await i.methods.tokenLocks(l).call()).lpToken=s.lpToken.toLowerCase(),l=await Ue(s.lpToken),l={lp_address:s.lpToken,amount:a.utils.toBN(s.tokenAmount),status:!0,unlock_time:s.unlockTime,lp_info:l},t.push(l),r++
return t}(e)).length)return void console.log("no address found")
for(l in new QRCode(document.getElementById("certificate_qrcode"),{text:window.location.origin+window.location.pathname+"?certificate=yes&type=0&lp="+t[0].lp_address,width:128,height:128,correctLevel:QRCode.CorrectLevel.H}),$("#lock_certificate_lptoken").prop("href","https://bscscan.com/token/"+t[0].lp_address),$("#lock_certificate_token0").prop("href","https://bscscan.com/token/"+t[0].lp_info.token0_info.address),$("#lock_certificate_token1").prop("href","https://bscscan.com/token/"+t[0].lp_info.token1_info.address),$("#lock_certificate_token0 span").text(t[0].lp_info.token0_info.symbol),$("#lock_certificate_token1 span").text(t[0].lp_info.token1_info.symbol),n=new x.utils.BN(0),a=t[0].lp_info.total_supply,i=[],t)o=t[l],new Date(1e3*o.unlock_time)>new Date&&(n=n.add(o.amount),i.push({time:new Date(1e3*o.unlock_time),amount:parseFloat(x.utils.fromWei(o.amount,"ether"))}))
r=x.utils.fromWei(n,"ether"),s=x.utils.fromWei(a,"ether"),0!=r?$("#lock_certificate_status").html("<i class='icofont-ui-lock' style='font-size: 30px;'></i> Liquidity Locked"):$("#lock_certificate_status").html("<i class='icofont-ui-unlock' style='font-size: 30px;'></i> Liquidity Unlocked"),$("#lock_certificate_lockpercent .progress-value").text((r/s*100).toFixed(2)+"%"),d=180<(u=parseInt(r/s*360))?"#049dff":90<u?"#fdba04":"#ff0c04",$(".progress.red .progress-bar").prop("style","border-color: "+d),180<u?($.keyframe.define({name:"loading-1",from:{transform:"rotate(0deg)"},to:{transform:"rotate(180deg)"}}),$.keyframe.define({name:"loading-2",from:{transform:"rotate(0deg)"},to:{transform:"rotate("+(u-180)+"deg)"}})):($.keyframe.define({name:"loading-1",from:{transform:"rotate(0deg)"},to:{transform:"rotate("+u+"deg)"}}),$.keyframe.define({name:"loading-2",from:{transform:"rotate(0deg)"},to:{transform:"rotate(0deg)"}})),$("#lock_certificate_lockamount").text(parseFloat(r).toFixed(4)),$("#lock_certificate_totalamount").text(parseFloat(s).toFixed(4)),$("#lock_certificate_unlocktime").html(""),c=$("#lock_certificate_unlocktime"),$.each(i,function(e){var t=(a=i[e].time)-new Date,n=(i[e].amount/s*100).toFixed(2),a=$("<li />").appendTo(c)
$("<small><a/>").text(i[e].amount.toFixed(4)+"("+n+"%) tokens unlock "+moment.duration(t).humanize(!0)).appendTo(a)})}finally{$("#lock_certificate_spinner").hide()}}(t.get("lp"))):console.log("incorrect certificate URL"))}),r=`                 
<div class="form-group row text-left">
<div class="col-lg-12 offset-lg-2">

  <a target="_blank" href="" id="lock_list_lptoken" style="display:inline"><span>LP Token </span></a>:
  <a target="_blank" href="" id="lock_list_token0" style="display:inline"><span >--</span></a>/
  <a target="_blank" href="" id="lock_list_token1" style="display:inline"><span >--</span></a>
</div>
<div class="col-lg-12 offset-lg-2">
  <b>Locked LP tokens:&nbsp;</b><span id="lock_list_lockamount">---</span>
</div>
<div class="col-lg-12 offset-lg-2">
  <b>Unlock Time:&nbsp;</b><span id="lock_list_unlocktime"  style="list-style: none" >--</span>
</div>
</div>
<div class="form-group row ">
<div class="col-lg-10 offset-lg-2">
  <button id="managelock_optionwithdraw_button" type="button" class="btn btn-primary" style="margin-top: 5px;">Withdraw Amount</button>
  <button id="managelock_optionextend_button" type="button" class="btn btn-primary" style="margin-top: 5px;">Extend Lock Time</button>
  <button id="managelock_optionincrement_button" type="button" class="btn btn-primary" style="margin-top: 5px;">Increase Amount</button>
  <button id="managelock_optiontransfer_button" type="button" class="btn btn-primary" style="margin-top: 5px;">Transfer Ownership</button>
  <button id="managelock_optiongeneratelink_button" type="button" class="btn btn-primary" style="margin-top: 5px;">Generate Public Link</button>
</div>
</div>
<br>
<br>
<!-- Withdraw amount-->
<div class="form-group row ">
<div class="col-lg-8 offset-lg-2">
  <div class="input-group">
    <input style="display:none" type="text" class="form-control" id="managelock_withdraw_input" value="0" placeholder="Enter LP token amount to withdraw">
    <div class="input-group-append">
      <button style="display:none;" class="btn btn-outline-secondary" type="button" id="managelock_withdraw_max_button">Max</button>
    </div>
  </div>
</div>
<div class="col-lg-8 offset-lg-2 text-left" style="bottom: -10px;">
  <h6 style="display:none"  id="managelock_withdraw_available_display" >Available to withdraw: 
    <span>
      0
    </span>
  </h6>
</div>
<div class="col-lg-8 offset-lg-4">
  <button style="display:none;margin-top: 5px;" id= "managelock_withdraw_submit_button" type="button" class="btn btn-primary" style="margin-top: 5px;">
    Withdraw
  </button>
</div>


<!-- Extend time-->
<div class="col-lg-8 offset-lg-2">
  <div class="input-group">
    <input style="display:none" type="text" class="form-control" id="managelock_extend_input" placeholder="Enter new LP token unlock time">
    <div class="input-group-append">
      <button style="display:none" class="btn btn-outline-secondary" type="button" id="managelock_extend_current_button" >Current</button>
      <button style="display:none" class="btn btn-outline-secondary" type="button" id="managelock_extend_plus1_button" >+1 Year</button>
    </div>
  </div>
</div>
<div class="col-lg-8 offset-lg-4">
  <button style="display:none;margin-top: 5px;" id= "managelock_extend_submit_button" type="button" class="btn btn-primary" style="margin-top: 5px;">
    Extend
  </button>
</div>



<!-- Increase ampunt-->
<div class="col-lg-8 offset-lg-2">
  <div class="input-group">
    <input style="display:none" type="text" class="form-control" id="managelock_increment_input" placeholder="Enter LP token amount to add" >
    <div class="input-group-append">
      <button style="display:none" class="btn btn-outline-secondary" type="button" id="managelock_increment_max_button">Max</button>
    </div>
  </div>
</div>
<div class="col-lg-8 offset-lg-2 text-left" style="bottom: -10px;">
  <h6 style="display:none" id="managelock_increment_available_display">Available: 
    <span>
      0
    </span>
  </h6>
</div>
<div class="col-lg-8 offset-lg-2  text-left" style="display: none" id="managelock_increment_fee_container">
    <h6 style="margin-top: 10px;">Select fee type:</h6>
    <input type="radio" id="managelock_increment_feeLP" style="display:none" name="managelock_increment_fee" value="LP" >
    <label for="managelock_increment_feeLP"> Pay in LP <small>(.5 % of locked LP token)</small></label><br>
    <input type="radio" id="managelock_increment_feeBNB" style="display:none" name="managelock_increment_fee" value="BNB" checked>
    <label for="managelock_increment_feeBNB"> Pay in BNB <small> (.1 BNB flat)</small></label>
</div>
<div class="col-lg-8 offset-lg-4">
  <button style="display:none;margin-top: 5px;" id= "managelock_increment_submit_button" type="button" class="btn btn-primary" style="margin-top: 5px;">
    Increase
  </button>
</div>



<!-- Transfer lock-->
<div class="col-lg-8 offset-lg-2">
  <div class="input-group">
    <input style="display:none" type="text" class="form-control" id="managelock_transfer_input" placeholder="Enter new owner address">
   </div>
</div>

<div class="col-lg-8 offset-lg-4">
  <button style="display:none;margin-top: 5px;" id= "managelock_transfer_submit_button" type="button" class="btn btn-primary" style="margin-top: 5px;">
    Transfer
  </button>
</div>


<!-- Generate Link -->
<div class="col-lg-8 offset-lg-4">
 
  <div class="input-group">
    <a style="display:none" target="_blank" href="" id="managelock_generatelink_display">---
    </a>
  </div>
  </center>
</div>
</div>
<!--All result panels-->
<center>
<span id ="managelock_withdraw_spinner" style="display:none"
              class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
<span id ="managelock_withdraw_result"></span>
<span id ="managelock_extend_spinner" style="display:none"
              class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
<span id ="managelock_extend_result"></span>
<span id ="managelock_increment_spinner" style="display:none"
              class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
<span id ="managelock_increment_result"></span>
<span id ="managelock_transfer_spinner" style="display:none"
              class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
<span id ="managelock_transfer_result"></span>
<span id ="managelock_generatelink_spinner" style="display:none"
              class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
<span id ="managelock_generatelink_result"></span>
</center>
`,b=E,h=D,M=G,i=N
const tt=1e9,nt=18,at=5,it=5,ot=0,rt=0,st=0,lt=te,ut=10,dt=10
function ye(e){null!=w?($("#launcher_connect_wallet").hide(),$("#launcher_connected_wallet_address").text(w.substring(0,6)+".."+w.substring(w.length-4,w.length)),$("#launcher_connected_wallet").show(),$("#launcher_connect_wallet_msg").hide(),ct(!1),$("#launcher_token_name").val(""),$("#launcher_token_symbol").val(""),$("#launcher_token_total_supply").val(tt),$("#launcher_token_decimals").val(nt),$("#launcher_token_fee_holders").val(at),$("#launcher_token_fee_lp").val(it),$("#launcher_token_fee_burn").val(ot),$("#launcher_token_fee_wallet").val(rt),$("#launcher_token_fee_buyback").val(st),null!=w?$("#launcher_token_wallet").val(w):$("#launcher_token_wallet").val(lt),$("#launcher_max_wallet").val(ut),$("#launcher_max_transaction").val(dt)):($("#launcher_connect_wallet").show(),$("#launcher_connected_wallet_address").text(""),$("#launcher_connected_wallet").hide(),$("#launcher_connect_wallet_msg").text(e.msg),$("#launcher_connect_wallet_msg").show())}function ct(e){$("#launcher_token_name").prop("disabled",e),$("#launcher_token_symbol").prop("disabled",e),$("#launcher_token_total_supply").prop("disabled",e),$("#launcher_token_decimals").prop("disabled",e),$("#launcher_token_fee_holders").prop("disabled",e),$("#launcher_token_fee_lp").prop("disabled",e),$("#launcher_token_fee_burn").prop("disabled",e),$("#launcher_token_fee_wallet").prop("disabled",e),$("#launcher_token_wallet").prop("disabled",e),$("#launcher_token_fee_buyback").prop("disabled",e),$("#launcher_max_wallet").prop("disabled",e),$("#launcher_max_transaction").prop("disabled",e),$("#launcher_create_button").prop("disabled",e)}function pt(e){try{$.post("/api/log/",{address:e})}catch(e){console.log(e)}}async function mt(t,e){$.ajax({type:"POST",url:"https://api.bscscan.com/api",data:{apikey:"GNRFBMP3MVFK82MU8DI41ZX4QTDJFNRT4D",module:"contract",action:"verifysourcecode",contractaddress:t,sourceCode:ue,codeformat:"solidity-single-file",contractname:"Token",compilerversion:"v0.8.6+commit.11564f7e",optimizationUsed:1,runs:200,constructorArguements:e,evmversion:"",licenseType:3},success:function(e){if("ok"==e.message.toLowerCase())$("#launcher_create_result_info").append(" Contract verification has also been completed.")
else{try{pt("Contract verification failed 2"+t+"  "+JSON.stringify(e))}catch(e){}$("#launcher_create_result_info").append(" Contract verification unsuccessful. Please contact us via the link below for any support.")}},error:function(e){try{pt("Contract verification failed 2"+t+"  "+JSON.stringify(e))}catch(e){}$("#launcher_create_result_info").append(" Contract verification unsuccessful. Please contact us via the link below for any support.")}})}async function yt(){var e,t,n,a,i,o,r,s,l,u,d
if(ct(!0),$("#launcher_create_spinner").show(),$("#launcher_create_result_info").html(""),(e={}).name=$("#launcher_token_name").val().trim(),e.symbol=$("#launcher_token_symbol").val().trim(),e.supply=$("#launcher_token_total_supply").val().trim(),e.decimals=$("#launcher_token_decimals").val().trim(),e.fee_to_holders=$("#launcher_token_fee_holders").val().trim(),e.fee_to_lp=$("#launcher_token_fee_lp").val().trim(),e.fee_to_burn=$("#launcher_token_fee_burn").val().trim(),e.fee_to_wallet=$("#launcher_token_fee_wallet").val().trim(),e.fee_wallet=$("#launcher_token_wallet").val().trim(),e.fee_to_buyback=$("#launcher_token_fee_buyback").val().trim(),e.max_wallet=$("#launcher_max_wallet").val().trim(),e.max_transaction=$("#launcher_max_transaction").val().trim(),0==function(e){if(e.name.length<=0||30<e.name.length)return $("#launcher_create_result_info").html("Token name cannot be empty or greater than 30 characters"),$("#launcher_create_result_info").css("color","red"),!1
if(e.symbol.length<=0||10<e.symbol.length)return $("#launcher_create_result_info").html("Token symbol cannot be empty or greater than 10 characters"),$("#launcher_create_result_info").css("color","red"),!1
try{if(""==e.supply)return $("#launcher_create_result_info").html("Token supply should be in range 1 to 1000000000000000"),$("#launcher_create_result_info").css("color","red"),!1
if(e.supply=parseInt(e.supply),e.supply<=0||1e15<e.supply)return $("#launcher_create_result_info").html("Token supply should be in range 1 to 1000000000000000"),$("#launcher_create_result_info").css("color","red"),!1}catch(e){return $("#launcher_create_result_info").html("Token supply not set properly"),$("#launcher_create_result_info").css("color","red"),!1}try{if(""==e.decimals)return $("#launcher_create_result_info").html("Token decimals should be in range 1 to 18"),$("#launcher_create_result_info").css("color","red"),!1
if(e.decimals=parseInt(e.decimals),e.decimals<=0||18<e.decimals)return $("#launcher_create_result_info").html("Token decimals should be in range 1 to 18"),$("#launcher_create_result_info").css("color","red"),!1}catch(e){return $("#launcher_create_result_info").html("Token decimals not set properly"),$("#launcher_create_result_info").css("color","red"),!1}try{if(""==e.fee_to_holders)return $("#launcher_create_result_info").html("Fees to holders should be in range 0 to 10"),$("#launcher_create_result_info").css("color","red"),!1
if(e.fee_to_holders=parseInt(e.fee_to_holders),e.fee_to_holders<0||10<e.fee_to_holders)return $("#launcher_create_result_info").html("Fees to holders should be in range 0 to 10"),$("#launcher_create_result_info").css("color","red"),!1}catch(e){return $("#launcher_create_result_info").html("Fees to holders not set properly"),$("#launcher_create_result_info").css("color","red"),!1}try{if(""==e.fee_to_lp)return $("#launcher_create_result_info").html("Fees to LP should be in range 0 to 10"),$("#launcher_create_result_info").css("color","red"),!1
if(e.fee_to_lp=parseInt(e.fee_to_lp),e.fee_to_lp<0||10<e.fee_to_lp)return $("#launcher_create_result_info").html("Fees to LP should be in range 0 to 10"),$("#launcher_create_result_info").css("color","red"),!1}catch(e){return $("#launcher_create_result_info").html("Fees to LP not set properly"),$("#launcher_create_result_info").css("color","red"),!1}try{if(""==e.fee_to_burn)return $("#launcher_create_result_info").html("Fees Burned should be in range 0 to 10"),$("#launcher_create_result_info").css("color","red"),!1
if(e.fee_to_burn=parseInt(e.fee_to_burn),e.fee_to_burn<0||10<e.fee_to_burn)return $("#launcher_create_result_info").html("Fees Burned should be in range 0 to 10"),$("#launcher_create_result_info").css("color","red"),!1}catch(e){return $("#launcher_create_result_info").html("Fees Burned not set properly"),$("#launcher_create_result_info").css("color","red"),!1}try{if(""==e.fee_to_wallet)return $("#launcher_create_result_info").html("Fees to Wallet should be in range 0 to 10"),$("#launcher_create_result_info").css("color","red"),!1
if(e.fee_to_wallet=parseInt(e.fee_to_wallet),e.fee_to_wallet<0||10<e.fee_to_wallet)return $("#launcher_create_result_info").html("Fees to Wallet should be in range 0 to 10"),$("#launcher_create_result_info").css("color","red"),!1}catch(e){return $("#launcher_create_result_info").html("Fees to Wallet not set properly"),$("#launcher_create_result_info").css("color","red"),!1}try{if(""==e.fee_wallet)return $("#launcher_create_result_info").html("Fees Wallet should be a proper address"),$("#launcher_create_result_info").css("color","red"),!1
if(!new Web3(k).utils.isAddress(e.fee_wallet))return $("#launcher_create_result_info").html("Fees Wallet should be a proper address"),$("#launcher_create_result_info").css("color","red"),!1}catch(e){return $("#launcher_create_result_info").html("Fees Wallet should be a proper address"),$("#launcher_create_result_info").css("color","red"),!1}try{if(""==e.fee_to_buyback)return $("#launcher_create_result_info").html("Fees to Buyback should be in range 0 to 10"),$("#launcher_create_result_info").css("color","red"),!1
if(e.fee_to_buyback=parseInt(e.fee_to_buyback),e.fee_to_buyback<0||10<e.fee_to_buyback)return $("#launcher_create_result_info").html("Fees to Buyback should be in range 0 to 10"),$("#launcher_create_result_info").css("color","red"),!1}catch(e){return $("#launcher_create_result_info").html("Fees to Buyback not set properly"),$("#launcher_create_result_info").css("color","red"),!1}try{if(""==e.max_wallet)return $("#launcher_create_result_info").html("Max wallet % should be in range 1 to 100"),$("#launcher_create_result_info").css("color","red"),!1
if(e.max_wallet=parseInt(e.max_wallet),e.max_wallet<=0||100<e.max_wallet)return $("#launcher_create_result_info").html("Max wallet % should be in range 1 to 100"),$("#launcher_create_result_info").css("color","red"),!1}catch(e){return $("#launcher_create_result_info").html("Max wallet % not set properly"),$("#launcher_create_result_info").css("color","red"),!1}try{if(""==e.max_transaction)return $("#launcher_create_result_info").html("Max transaction %  should be in range 1 to 100"),$("#launcher_create_result_info").css("color","red"),!1
if(e.max_transaction=parseInt(e.max_transaction),e.max_transaction<=0||100<e.max_transaction)return $("#launcher_create_result_info").html("Max transaction %  should be in range 1 to 100"),$("#launcher_create_result_info").css("color","red"),!1}catch(e){return $("#launcher_create_result_info").html("Max transaction %  not set properly"),$("#launcher_create_result_info").css("color","red"),!1}return!0}(e))return ct(!1),void $("#launcher_create_spinner").hide()
try{if(i=e,console.log("create token"),o={output:{},status:!0,err_msg:"",address:""},d=new Web3(k),r=w,s=d.utils.toBN(d.utils.toWei(.3.toString(),"ether")),l=new d.eth.Contract(se,"0xd1E78C9D59746C4f9673038B45fAA999e586Ab75"),u=(u=d.utils.toBN(i.supply)).mul(d.utils.toBN(10**i.decimals)),o.constructor_args=d.eth.abi.encodeParameters(["address","string","string","uint8","uint256","uint8","uint8","address"],[w,i.name,i.symbol,i.decimals,u.toString(),i.max_transaction,i.max_wallet,i.fee_wallet]),o.constructor_args=o.constructor_args.substring(2,o.constructor_args.length),console.log(o),d={setTaxFee:i.fee_to_holders,setLiqFee:i.fee_to_lp,setBurnFee:i.fee_to_burn,setWalletFee:i.fee_to_wallet,setBuybackFee:i.fee_to_buyback},await l.methods.createTokenContract(i.name,i.symbol,i.decimals,u,i.max_transaction,i.max_wallet,i.fee_wallet,0,d).send({from:r,value:s}).on("transactionHash",function(e){console.log("Contract create : ",e)}).on("confirmation",function(e,t){console.log("Contract confirmed")}).on("receipt",function(e){o.address=e.events.OwnershipTransferred[0].address}).on("error",function(e,t){o.status=!1,o.err_msg=e}),(t=await o).status){$("#launcher_create_result_info").html("Congratulations! Token successfully created. <a target='_blank' href='https://bscscan.com/token/"+t.address+"'>See on BscScan</a>. Your contract will be verified in a few mins."),$("#launcher_create_result_info").css("color","black"),await new Promise(e=>setTimeout(e,3e4)),n=t.address,a=t.constructor_args,await $.ajax({type:"POST",url:"https://api.bscscan.com/api",data:{apikey:"GNRFBMP3MVFK82MU8DI41ZX4QTDJFNRT4D",module:"contract",action:"verifysourcecode",contractaddress:n,sourceCode:ue,codeformat:"solidity-single-file",contractname:"Token",compilerversion:"v0.8.6+commit.11564f7e",optimizationUsed:1,runs:200,constructorArguements:a,evmversion:"",licenseType:3},success:async function(e){if("ok"==e.message.toLowerCase())$("#launcher_create_result_info").append(" Contract verification has also been completed.")
else{try{pt("Contract verification failed"+n+"  "+JSON.stringify(e))}catch(e){}await new Promise(e=>setTimeout(e,3e4)),mt(n,a)}},error:async function(e){try{pt("Contract verification failed"+n+"  "+JSON.stringify(e))}catch(e){}await new Promise(e=>setTimeout(e,3e4)),mt(n,a)}}),$("#launcher_burn_token_address").val(t.address),$("#launcher_burn_token_address").trigger("input"),$("#newlock_lpaddress").val(t.address),$("#newlock_lpaddress").trigger("input"),$("#launcher_liq_token_address").val(t.address),$("#launcher_liq_token_address").trigger("input")
try{$("#launcher_token_name").val(""),$("#launcher_token_symbol").val(""),$("#launcher_token_total_supply").val(tt),$("#launcher_token_decimals").val(nt),$("#launcher_token_fee_holders").val(at),$("#launcher_token_fee_lp").val(it),$("#launcher_token_fee_burn").val(ot),$("#launcher_token_fee_wallet").val(rt),$("#launcher_token_fee_buyback").val(st),null!=w?$("#launcher_token_wallet").val(w):$("#launcher_token_wallet").val(lt),$("#launcher_max_wallet").val(ut),$("#launcher_max_transaction").val(dt)}catch(e){pt("Minor Create Token failed: "+(null!=e.message?e.message:"Unknown error")),pt("Minor Create Token failed stack: "+(null!=e.stack?e.stack:"Unknown stack"))}}else console.log(t.err_msg),$("#launcher_create_result_info").html(t.err_msg),$("#launcher_create_result_info").css("color","red"),pt("Create Token failed: "+t.err_msg+".")}catch(e){console.log(e),pt("Create Token failed: "+(null!=e.message?e.message:"Unknown error")),pt("Create TOken failed stack: "+(null!=e.stack?e.stack:"Unknown stack")),$("#launcher_create_result_info").html("Token could not be created: "+(null!=e.message?e.message:"Unknown error")+". Please contact us via the link below for any support."),$("#launcher_create_result_info").css("color","red")}finally{ct(!1),$("#launcher_create_spinner").hide()}}function _t(e){var t=$(e).val()
10<(t=isNaN(t)?t.replace(/[^0-9]/g,""):t)&&(t="1"==t[0]&&"0"==t[1]?10:t[0]),$(e).val(t)}function ft(e){var t=$(e).val()
100<(t="0"==(t=isNaN(t)?t.replace(/[^0-9]/g,""):t)?1:t)&&(t="1"==t[0]&&"0"==t[1]&&"0"==t[2]?100:parseInt(t.substring(0,2))),$(e).val(t)}function bt(){var e=parseInt($("#launcher_token_fee_holders").val().trim()),e=isNaN(e)?0:e,t=parseInt($("#launcher_token_fee_lp").val().trim()),t=isNaN(t)?0:t,n=parseInt($("#launcher_token_fee_burn").val().trim()),n=isNaN(n)?0:n,a=parseInt($("#launcher_token_fee_wallet").val().trim()),a=isNaN(a)?0:a,i=parseInt($("#launcher_token_fee_buyback").val().trim()),i=isNaN(i)?0:i
$("#launcher_create_total_fee_info").text("Total Token Transaction Fee: "+(e+t+a+n+i)+"% (distributed to holders + added to liquidity + burned + sent to wallet + used to buyback)")}async function ht(){try{$("#launcher_liq_token_info").text(""),$("#launcher_liq_token_address_info_spinner").show(),pt("Liq Input  for: "+$("#launcher_liq_token_address").val().trim().toLowerCase())
var e=await async function(e){var t,n=new Web3(k),a={status:!1,address:"",token0_info:{address:"",name:"",symbol:""},token1_info:{address:"",name:"",symbol:""},total_supply:new n.utils.BN(0),valid:!0,err_msg:""}
if((e=await new n.eth.Contract(J,h).methods.getPair(e,M).call()).toLowerCase()==Z.toLowerCase())return a.status=!1,a.err_msg="Not a valid LP address",a
a.status=!0,a.address=e
try{if(t=new n.eth.Contract(Q,a.address),a.name=await t.methods.name().call(),a.name.toLowerCase()!="Pancake LPs".toLowerCase())return a.err_msg="Not a valid LP address",et("LP token pancake"+lp_address_local),a.valid=!1,a}catch(e){return a.err_msg="Not a valid LP address",et("LP token pancake exception"+lp_address_local),a.valid=!1,a}return a.token0_info.address=await t.methods.token0().call(),a.token1_info.address=await t.methods.token1().call(),a.total_supply=n.utils.toBN(await t.methods.totalSupply().call()),e=new n.eth.Contract(ne,a.token0_info.address),a.token0_info.symbol=await e.methods.symbol().call(),a.token0_info.name=await e.methods.name().call(),a.token0_info.decimals=await e.methods.decimals().call(),a.token0_info.balance=await e.methods.balanceOf(w).call(),a.token0_info.balance=n.utils.toBN(a.token0_info.balance).div(n.utils.toBN(10**a.token0_info.decimals)),t=new n.eth.Contract(ne,a.token1_info.address),a.token1_info.symbol=await t.methods.symbol().call(),a.token1_info.name=await t.methods.name().call(),a.token1_info.decimals=await t.methods.decimals().call(),a.token1_info.balance=await t.methods.balanceOf(w).call(),a.token1_info.balance=n.utils.toBN(a.token1_info.balance).div(n.utils.toBN(10**a.token1_info.decimals)),"wbnb"==a.token0_info.symbol.toLowerCase()?a.allowance=await t.methods.allowance(w,b).call():a.allowance=await e.methods.allowance(w,b).call(),n.utils.toBN(2).pow(n.utils.toBN(256)).sub(n.utils.toBN(1)).cmp(Web3.utils.toBN(a.allowance))<=0?a.allowance=!0:a.allowance=!1,a}($("#launcher_liq_token_address").val().trim().toLowerCase())
e.valid&&0==e.total_supply?($("#launcher_liq_token_amount").prop("disabled",!1),$("#launcher_liq_max_token_amount").prop("disabled",!1),"wbnb"==e.token0_info.symbol.toLowerCase()?$("#launcher_liq_token_balance_info").text(e.token1_info.balance.toString()):$("#launcher_liq_token_balance_info").text(e.token0_info.balance.toString()),$("#launcher_liq_bnb_amount").prop("disabled",!1),$("#launcher_liq_bnb_max_amount").prop("disabled",!1),$("#launcher_liq_button").prop("disabled",!1),$("#launcher_liq_token_address_info_spinner").hide(),$("#launcher_liq_token_address_info").text(e.token0_info.symbol+" / "+e.token1_info.symbol),e.allowance?($("#launcher_liq_button_approve").prop("disabled",!0),$("#launcher_liq_button_approve span").first().text("Approved"),$("#launcher_liq_button_add").prop("disabled",!1)):($("#launcher_liq_button_approve").prop("disabled",!1),$("#launcher_liq_button_approve span").first().text("Approve Token"),$("#launcher_liq_button_add").prop("disabled",!0))):($("#launcher_liq_token_address_info_spinner").hide(),e.valid&&0!=e.total_supply?$("#launcher_liq_token_address_info").html("Tokens already added to liquidity pool"):$("#launcher_liq_token_address_info").html(e.err_msg),pt("Liq Input failed: "+e.err_msg),$("#launcher_liq_token_amount").prop("disabled",!0),$("#launcher_liq_max_token_amount").prop("disabled",!0),$("#launcher_liq_token_balance_info").text("0"),$("#launcher_liq_bnb_amount").prop("disabled",!0),$("#launcher_liq_bnb_max_amount").prop("disabled",!0),$("#launcher_liq_bnb_balance_info").text("0"),$("#launcher_liq_button").prop("disabled",!0))}catch(e){pt("Liq  Input failed: "+(null!=e.message?e.message:"Unknown error")),console.log(e),$("#launcher_liq_token_address_info_spinner").hide(),$("#launcher_liq_token_address_info").text("Something went wrong. Please try again."),$("#launcher_liq_token_amount").prop("disabled",!0),$("#launcher_liq_max_token_amount").prop("disabled",!0),$("#launcher_liq_token_balance_info").text("0"),$("#launcher_liq_bnb_amount").prop("disabled",!0),$("#launcher_liq_bnb_max_amount").prop("disabled",!0),$("#launcher_liq_bnb_balance_info").text("0"),$("#launcher_liq_button").prop("disabled",!0)}}function kt(){var e,t,n
try{e=parseFloat($("#launcher_liq_token_amount").val().trim()),e=isNaN(e)?0:e,t=parseFloat($("#launcher_liq_bnb_amount").val().trim()),"nan"==(n=((t=isNaN(t)?0:t)/e).toFixed(10)).toLowerCase()||"infinity"==n.toLowerCase()?$("#launcher_liq_price_info").text("The initial price of your token would be roughly -- BNB per token. 10% or more of your supply is recommended to be added to the liquidity pool. No fee except gas fee will be charged for this transaction."):$("#launcher_liq_price_info").text("The initial price of your token would be roughly "+n+" BNB per token. 10% or more of your supply is recommended to be added to the liquidity pool. No fee except gas fee will be charged for this transaction.")}catch(e){}}async function wt(){try{$("#launcher_burn_token_info").text(""),$("#launcher_burn_token_info_spinner").show(),pt("Burn Input  for: "+$("#launcher_burn_token_address").val().trim().toLowerCase())
var e=await async function(e){var t,n=new Web3(k),a={address:e,symbol:"",name:"",owner:"unknown",valid:!0,err_msg:"",decimals:-1,total_supply:-1,balance:-1,total_token_burned:new n.utils.BN(0),source_code:"",ast:"",contract_name:""}
if(!n.utils.isAddress(e))return a.err_msg="Please enter a valid token address",a.valid=!1,a
if("0x"==await n.eth.getCode(e))return a.err_msg="Please enter a valid token address",a.valid=!1,a
e=new n.eth.Contract(ne,e)
try{a.symbol=await e.methods.symbol().call()}catch(e){console.log(e)}try{a.name=await e.methods.name().call()}catch(e){console.log(e)}if(a.name.toLowerCase()=="Pancake LPs".toLowerCase())return a.err_msg="Please enter a valid token address. This seems to be a LP token.",a.valid=!1,a
try{a.owner=await e.methods.owner().call()}catch(e){console.log(e)}try{a.decimals=await e.methods.decimals().call()}catch(e){console.log(e)}try{a.total_supply=await e.methods.totalSupply().call(),a.total_supply=n.utils.toBN(a.total_supply)}catch(e){console.log(e)}try{t=await e.methods.balanceOf(w).call(),a.balance=n.utils.toBN(t).div(n.utils.toBN(10**a.decimals))}catch(e){console.log(e)}return a}($("#launcher_burn_token_address").val().trim().toLowerCase())
e.valid?($("#launcher_burn_token_amount").prop("disabled",!1),$("#launcher_burn_token_max_amount").prop("disabled",!1),$("#launcher_burn_button").prop("disabled",!1),$("#launcher_burn_token_info_spinner").hide(),$("#launcher_burn_token_info").text(e.name+"("+e.symbol+")"),$("#launcher_burn_token_balance_info").text(e.balance.toString())):($("#launcher_burn_token_info_spinner").hide(),$("#launcher_burn_token_info").html(e.err_msg),pt("Burn Input failed: "+e.err_msg),$("#launcher_burn_token_amount").prop("disabled",!0),$("#launcher_burn_token_max_amount").prop("disabled",!0),$("#launcher_burn_button").prop("disabled",!0))}catch(e){pt("Burn Input failed: "+(null!=e.message?e.message:"Unknown error")),console.log(e),$("#launcher_burn_token_info_spinner").hide(),$("#launcher_burn_token_info").text("Something went wrong. Please try again."),$("#launcher_burn_token_amount").prop("disabled",!0),$("#launcher_burn_token_max_amount").prop("disabled",!0),$("#launcher_burn_button").prop("disabled",!0)}}$(document).ready(async function(){$("#launcher_create_button").on("click",async function(e){await yt()}),$("#launcher_connect_wallet").on("click",async function(e){await We()}),$("#launcher_token_fee_holders").keyup(function(){_t(this),bt()}),$("#launcher_token_fee_lp").keyup(function(){_t(this),bt()}),$("#launcher_token_fee_burn").keyup(function(){_t(this),bt()}),$("#launcher_token_fee_wallet").keyup(function(){_t(this),bt()}),$("#launcher_token_fee_buyback").keyup(function(){_t(this),bt()}),$("#launcher_max_wallet").keyup(function(){ft(this)}),$("#launcher_max_transaction").keyup(function(){ft(this)}),$("#launcher_token_decimals").keyup(function(){var e=$(this).val()
18<(e="0"==(e=isNaN(e)?e.replace(/[^0-9]/g,""):e)?1:e)&&(e=18<e.substring(0,2)?e.substring(0,1):e.substring(0,2)),$(this).val(e)}),$("#launcher_token_total_supply").keyup(function(){var e=$(this).val()
1e15<(e="0"==(e=isNaN(e)?e.replace(/[^0-9]/g,""):e)?1:e)&&(e=1e15<e.substring(0,16)?e.substring(0,15):e.substring(0,16)),$(this).val(e)}),new URLSearchParams(window.location.search).has("certificate")&&($("#collapseTwo").collapse("show"),document.querySelector("#collapseTwo").scrollIntoView({behavior:"smooth"})),$("#launcher_liq_token_address").on("input",async function(e){await ht()}),$("#launcher_liq_token_address").on("keypress",async function(e){13==e.which&&await ht()}),$("#launcher_liq_max_token_amount").on("click",function(e){var t=parseFloat($("#launcher_liq_token_amount").val()),t=isNaN(t)?0:t
$("#launcher_liq_token_amount").val(t+.1*parseFloat($("#launcher_liq_token_balance_info").text())),$("#launcher_liq_token_amount").trigger("keyup")}),$("#launcher_liq_token_amount").keyup(function(){var e=$(this).val()
isNaN(e)&&2<(e=e.replace(/[^0-9\.]/g,"")).split(".").length&&(e=e.replace(/\.+$/,"")),$(this).val(e),kt()}),$("#launcher_liq_bnb_amount").keyup(function(){var e=$(this).val()
isNaN(e)&&2<(e=e.replace(/[^0-9\.]/g,"")).split(".").length&&(e=e.replace(/\.+$/,"")),$(this).val(e),kt()}),$("#launcher_liq_button_add").on("click",async function(e){await async function(){var e,t,n,a,i,o,r,s,l,u,d,c,p
$("#launcher_liq_token_address").prop("disabled",!0),$("#launcher_liq_button_add_spinner").show(),$("#launcher_liq_result_info").html("")
try{if(e=$("#launcher_liq_token_address").val().trim(),t=parseFloat($("#launcher_liq_token_amount").val().trim()),n=parseFloat($("#launcher_liq_bnb_amount").val().trim()),isNaN(n)||isNaN(t)||""==e||""==t||""==n)return $("#launcher_liq_result_info").html("Please fill all the fields."),$("#launcher_liq_button_approve").prop("disabled",!0),$("#launcher_liq_token_address").prop("disabled",!1),void $("#launcher_liq_button_add_spinner").hide()
i=e,o=n,r=t,console.log("create token"),s={output:{},status:!0,err_msg:"",address:""},l=new Web3(k),u=w,d=l.utils.toBN(l.utils.toWei(o.toString(),"ether")),c=new l.eth.Contract(K,b),o=await new l.eth.Contract(ne,i).methods.decimals().call(),r=(r=l.utils.toBN(r)).mul(l.utils.toBN(10**o)),await l.eth.getBlock("latest",(e,t)=>{p=t.timestamp+300}),p=l.utils.toHex(p),await c.methods.addLiquidityETH(i,r,0,0,w,p).send({from:u,value:d}).on("transactionHash",function(e){console.log("Liquidity add : ",e)}).on("confirmation",function(e,t){console.log("Liquidity confirmed")}).on("receipt",function(e){console.log("Liquidity complete")}).on("error",function(e,t){s.status=!1,s.err_msg=e}),(a=await s).status?$("#launcher_liq_result_info").html("Liquidity successfully added. "):(pt("Liq add failed: "+a.err_msg),$("#launcher_liq_result_info").html("Liquidity could not be added: "+(null!=a.err_msg?a.err_msg:"Unknown error")),$("#launcher_liq_button_approve").prop("disabled",!0))}catch(e){console.log(e),pt("Liq add failed: "+(null!=e.message?e.message:"Unknown error")),pt("Liq add failed stack: "+(null!=e.stack?e.stack:"Unknown stack")),$("#launcher_liq_result_info").html("Liquidity could not be added: "+(null!=e.message?e.message:"Unknown error")),$("#launcher_liq_button_approve").prop("disabled",!0)}finally{$("#launcher_liq_token_address").prop("disabled",!1),$("#launcher_liq_button_add_spinner").hide()}}()}),$("#launcher_liq_button_approve").on("click",async function(e){await async function(){var e,t,n,a
$("#launcher_liq_token_address").prop("disabled",!0),$("#launcher_liq_button_approve_spinner").show(),$("#launcher_liq_result_info").html("")
try{t=$("#launcher_liq_token_address").val().trim(),n={output:{},status:!0,msg:""},t=new(a=new Web3(k)).eth.Contract(le,t),a=a.utils.toBN(2).pow(a.utils.toBN(256)).sub(a.utils.toBN(1)),await t.methods.approve(b,a).send({from:w}).on("transactionHash",function(e){console.log("Approve : ",e)}).on("confirmation",function(e,t){console.log("Approve confirmed")}).on("receipt",function(e){}).on("error",function(e,t){n.status=!1,n.err_msg=e}),(e=await n).status?($("#launcher_liq_result_info").html("Approved"),$("#launcher_liq_button_approve").prop("disabled",!0),$("#launcher_liq_button_approve_spinner span").first().text("Approved"),$("#launcher_liq_button_add").prop("disabled",!1)):($("#launcher_liq_result_info").html("Approval failed: "+e.err_msg),$("#launcher_liq_button_add").prop("disabled",!0))}catch(e){console.log(e),pt($("#launcher_liq_token_address").val().trim()+" Launch Approval failed: "+(null!=e.message?e.message:"Unknown error")),et($("#launcher_liq_token_address").val().trim()+" Launch Approval failed stack: "+(null!=e.stack?e.stack:"Unknown stack")),$("#launcher_liq_result_info").html("Approval failed: "+(null!=e.message?e.message:"Unknown error")),$("#launcher_liq_button_add").prop("disabled",!0)}finally{$("#launcher_liq_button_approve_spinner").hide(),$("#launcher_liq_token_address").prop("disabled",!1)}}()}),$("#launcher_burn_token_address").on("input",async function(e){await wt()}),$("#launcher_burn_token_address").on("keypress",async function(e){13==e.which&&await wt()}),$("#launcher_burn_token_max_amount").on("click",function(e){$("#launcher_burn_token_amount").val("100")}),$("#launcher_burn_token_amount").keyup(function(){ft(this)}),$("#launcher_burn_button").on("click",async function(e){await async function(){var e,t,n,a
$("#launcher_burn_token_address").prop("disabled",!0),$("#launcher_burn_token_amount").prop("disabled",!0),$("#launcher_burn_button").prop("disabled",!0),$("#launcher_burn_button_spinner").show(),$("#launcher_burn_info").html("No fee except gas fee will be charged.")
try{n=await(t=new(e=new Web3(k)).eth.Contract(le,$("#launcher_burn_token_address").val())).methods.balanceOf(w).call(),a=(a=e.utils.toBN(parseInt($("#launcher_burn_token_amount").val()))).mul(e.utils.toBN(n)).div(e.utils.toBN(100)),await t.methods.transfer(te,a).send({from:w}).on("transactionHash",function(e){console.log("Burn : ",e)}).on("confirmation",function(e,t){console.log("Burn confirmed")}).on("receipt",function(e){$("#launcher_burn_info").html("Tokens successfully burned. Please refresh this page.")}).on("error",function(e,t){$("#launcher_burn_info").html("Tokens could not be burned: "+(null!=e.message?e.message:"Unknown error"))})}catch(e){console.log(e),pt("Burn failed: "+(null!=e.message?e.message:"Unknown error")),pt("Burnfailed stack: "+(null!=e.stack?e.stack:"Unknown stack")),$("#launcher_burn_info").html("Tokens could not be burned: "+(null!=e.message?e.message:"Unknown error"))}finally{$("#launcher_burn_token_address").prop("disabled",!1),$("#launcher_burn_token_amount").prop("disabled",!1),$("#launcher_burn_button").prop("disabled",!1),$("#launcher_burn_button_spinner").hide()}}()}),$("#launcher-helper").on("shown.bs.collapse",function(e){e="collapseThree"==(e=$(e.target).attr("id"))?"#launcher_burn_token_address":"collapseTwo"==e?"#newlock_lpaddress":"collapseOne"==e?"#launcher_liq_token_address":""
""!=$(e).val()&&$(e).trigger("input")})}),E,D,G,X
const gt=100,vt=100
O=!(S=B=void 0)
const Tt=["0x598cd56214a374d15f638dd04913e0288cd76c7833ee66b15cf55845d875a187"],xt=["0x601e52fd7ec7840490f1ae9c376bc3b32f6a6a6aac8dc10db76d87ef0fa45d32"],$t=["0xa6782d3322abbfbe850e6d5c5c78e8e1df603ea07608bb9a62dd83f40d4feccc"],Mt=["0x830357565da6ecfc26d8d9f69df488ed6f70361af9a07e570544aeb5c5e765e5"],Ft=["0x601e52fd7ec7840490f1ae9c376bc3b32f6a6a6aac8dc10db76d87ef0fa45d32"]
C=!(q=!(L=!(A=300)))
const At=e=>e<1e3?e.toFixed(2):1e3<=e&&e<1e6?+(e/1e3).toFixed(2)+"K":1e6<=e&&e<1e9?+(e/1e6).toFixed(2)+"M":1e9<=e&&e<1e12?+(e/1e9).toFixed(2)+"B":1e12<=e?+(e/1e12).toFixed(2)+"T":void 0
async function Lt(e){var t,n,a,i,o,r,s={token_address:"",token_symbol:"",msg:"",timestamp:"",txhash:"",status:!0},l=(t=e.lp_contract_address,r={token_info:{address:"",name:"",symbol:""},valid:!0,err_msg:""},F.utils.isAddress(t)&&"0x"!=await F.eth.getCode(t)?(i=new F.eth.Contract(Q,t),r.name=await i.methods.name().call(),"Pancake LPs"!=r.name?(r.err_msg="Not a valid LP address",r.valid=!1):(n=await i.methods.token0().call(),o=await i.methods.token1().call(),r.total_supply=F.utils.toBN(await i.methods.totalSupply().call()),a=await i.methods.getReserves().call(),i=t=void(l=0),n==G||n==X?(i=o,l=u.utils.toBN(a[0]),t=n):o!=G&&o!=X||(i=n,l=u.utils.toBN(a[1]),t=o),null==i?(console.log("Discover: Not a WBNB or BUSD pair"),Dt("Discover: Not a WBNB or BUSD pair"),r.err_msg=" Not a WBNB or BUSD pair",r.valid=!1):(o=new F.eth.Contract(ne,i),r.token_info.symbol=await o.methods.symbol().call(),r.token_info.name=await o.methods.name().call(),r.token_info.address=i,r.pegged_reserve=l,r.pegged_token=t))):(r.err_msg="Not a valid LP address",r.valid=!1),await r)
return 0==l.valid?s.status=!1:(s.token_address=l.token_info.address,s.token_symbol=l.token_info.symbol,t=await F.eth.getBlock(e.raw_ev.blockNumber),s.timestamp=t.timestamp,s.txhash=e.raw_ev.transactionHash,r=0,l.pegged_token==G&&(r=e.lp_token_amount/l.total_supply*l.pegged_reserve.muln(A)/1e18),t=1e3<=(r=l.pegged_token==X?e.lp_token_amount/l.total_supply*l.pegged_reserve/1e18:r)?"Bisque":"LightCoral",e=2629743e3<=(l=new Date(1e3*e.unlock_time)-new Date)?"Bisque":"LightCoral",31556926e3<=l&&(e="LightGreen"),s.msg="Liquidity value <span style='background-color:"+(t=1e4<=r?"LightGreen":t)+"'>$"+At(r)+"</span> locked for <span style='background-color:"+e+"'>"+moment.duration(l).humanize()+"</span>"),s}async function Bt(e,t){return transaction=await F.eth.getTransaction(e.transactionHash),!(null==transaction||!transaction.input.toLowerCase().startsWith(t))}async function qt(t,n){return n=await async function(t){var n,a,i,o=[]
for(e in t)verify_transacton=await Bt(t[e],"0x0511a506"),verify_transacton&&(n=t[e],i=a=void 0,a="0x"+(a=n.data.substring(0,66)).substring(26,66),i="0x"+(i=n.data.substring(66,130)).substring(24,64),1==(n=await Lt({from_address:a,lp_contract_address:i,lp_token_amount:parseInt(n.data.substring(130,194),16),lock_time:parseInt(n.data.substring(194,258),16),unlock_time:parseInt(n.data.substring(258,322),16),ev_type:"DxSale",raw_ev:n})).status&&o.push(n))
return o}(n=await F.eth.getPastLogs({fromBlock:t,toBlock:t+n,address:R,topics:Tt}))}async function Ct(t,n){return n=await async function(t){var n,a,i,o,r=[]
for(e in t)verify_transacton=await Bt(t[e],"0xe6a478b3"),verify_transacton&&(n=t[e],o=void 0,a=parseInt(n.data.substring(0,66),16),i=parseInt(n.data.substring(66,130),16),o="0x"+(o=n.topics[1]).substring(26,66),1==(n=await Lt({from_address:"0x"+n.topics[2].substring(26,66),lp_contract_address:o,lp_token_amount:a,lock_time:(new Date).getTime()/1e3,unlock_time:i,ev_type:"DeepLocker",raw_ev:n})).status&&r.push(n))
return r}(n=await F.eth.getPastLogs({fromBlock:t,toBlock:t+n,address:W,topics:$t}))}async function St(t,n){return n=await async function(t){var n,a,i,o,r=[]
for(e in t)verify_transacton=await Bt(t[e],"0x6167aa61"),verify_transacton&&(n=t[e],o=void 0,a=parseInt(n.data.substring(0,66),16),i=parseInt(n.data.substring(66,130),16),o="0x"+(o=n.topics[2]).substring(26,66),1==(n=await Lt({from_address:"0x"+n.topics[3].substring(26,66),lp_contract_address:o,lp_token_amount:a,lock_time:(new Date).getTime()/1e3,unlock_time:i,ev_type:"CryptEx",raw_ev:n})).status&&r.push(n))
return r}(n=await F.eth.getPastLogs({fromBlock:t,toBlock:t+n,address:U,topics:xt}))}async function Ot(t,n){return n=await async function(t){var n,a,i=[]
for(e in t)verify_transacton=await Bt(t[e],"0x8af416f6"),verify_transacton&&(n=t[e],a=void 0,a="0x"+(a=n.data.substring(0,66)).substring(26,66),1==(n=await Lt({from_address:"0x"+n.data.substring(66,130).substring(24,64),lp_contract_address:a,lp_token_amount:parseInt(n.data.substring(130,194),16),lock_time:parseInt(n.data.substring(194,258),16),unlock_time:parseInt(n.data.substring(258,322),16),ev_type:"Unicrypt",raw_ev:n})).status&&i.push(n))
return i}(n=await F.eth.getPastLogs({fromBlock:t,toBlock:t+n,address:H,topics:Mt}))}async function Nt(t,n){return n=await async function(t){var n,a,i,o,r=[]
for(e in t)verify_transacton=await Bt(t[e],"0x6167aa61"),verify_transacton&&(n=t[e],o=void 0,a=parseInt(n.data.substring(0,66),16),i=parseInt(n.data.substring(66,130),16),o="0x"+(o=n.topics[2]).substring(26,66),1==(n=await Lt({from_address:"0x"+n.topics[3].substring(26,66),lp_contract_address:o,lp_token_amount:a,lock_time:(new Date).getTime()/1e3,unlock_time:i,ev_type:"Mudra",raw_ev:n})).status&&r.push(n))
return r}(n=await F.eth.getPastLogs({fromBlock:t,toBlock:t+n,address:V,topics:Ft}))}async function Pt(){var e,t=new u.eth.Contract(J,D),n=await t.methods.getPair(s,d).call(),n=await(t=new u.eth.Contract(Q,n)).methods.getReserves().call()
return(n=(t=await t.methods.token0().call())==s?(e=u.utils.toBN(n[0]),u.utils.toBN(n[1])):(e=u.utils.toBN(n[1]),u.utils.toBN(n[0]))).div(e).toNumber()}async function It(){var t,n,a
if(!L){$("#discover_refresh_button").prop("disabled",!0),$("#discover_refresh_spinner").show(),L=!0
try{B=new Date,A=await Pt(),t=await F.eth.getBlockNumber(),t-=gt,n=[]
try{await new Promise(e=>setTimeout(e,1e3)),a=await qt(t,gt),n=n.concat(a)}catch(e){console.log("dxsale "+e),Dt("Discover dxsale failed: "+(null!=e.message?e.message:"Unknown error"))}try{await new Promise(e=>setTimeout(e,1e3)),a=await Ct(t,gt),n=n.concat(a)}catch(e){console.log("deeplock "+e),Dt("Discover deeplock failed: "+(null!=e.message?e.message:"Unknown error"))}try{await new Promise(e=>setTimeout(e,1e3)),a=await St(t,gt),n=n.concat(a)}catch(e){console.log("cryptex "+e),Dt("Discover deeplock failed: "+(null!=e.message?e.message:"Unknown error"))}try{await new Promise(e=>setTimeout(e,1e3)),a=await Ot(t,gt),n=n.concat(a)}catch(e){console.log("unicrypt "+e),Dt("Discover unicrypt failed: "+(null!=e.message?e.message:"Unknown error"))}try{await new Promise(e=>setTimeout(e,1e3)),a=await Nt(t,gt),n=n.concat(a)}catch(e){console.log("mudra "+e),Dt("Discover mudra failed: "+(null!=e.message?e.message:"Unknown error"))}await async function(t){var n,a,i,o,r,s,l,u,d,c,p,m,y,_,f=!1
try{null!=w&&(a=await new(n=new Web3(k)).eth.Contract(ne,z).methods.balanceOf(w).call(),a=n.utils.toBN(a),i=await new n.eth.Contract(Q,Y).methods.getReserves().call(),o=n.utils.toBN(i[0]),r=n.utils.toBN(i[1]).div(o),s=await new n.eth.Contract(Q,j).methods.getReserves().call(),l=n.utils.toBN(s[0]),u=n.utils.toBN(s[1]),f=100<=n.utils.fromWei(l.mul(a).div(u))*r)}catch(e){Dt("Discover user account failed: "+(null!=e.message?e.message:"Unknown error")),Dt("Discover user account failed: "+(null!=e.stack?e.stack:"Unknown stack"))}for(e in(d=$("#discover_list")).html(""),0==t.length&&d.html("No recent opportunities discovered."),t){if(c=t[e],p=new Date(1e3*c.timestamp)-new Date,m=!(10<Math.abs(p/6e4)),_=$("<li />").appendTo(d),y=c.token_symbol,m){if(!f){$("<p/>").prop("style","display:inline").html('<sup style="color:green;background-color:powderblue;">Premium</sup><span style="color: transparent;text-shadow: 0 0 5px rgba(0,0,0,0.5);">Token</span>: <small> ['+moment.duration(p).humanize(!0)+'] </small> Liquidity locked. Get early access with <a href="#pricing">Mudra Premium</a>').appendTo(_)
continue}y='<sup style="color:green;background-color:powderblue;">Premium</sup>'+c.token_symbol}(y=$("<a/>").html(y).appendTo(_)).prop("href","https://bscscan.com/token/"+c.token_address),y.prop("target","_blank"),$("<p/>").prop("style","display:inline").html(": <small> ["+moment.duration(p).humanize(!0)+"] </small> "+c.msg+". ").appendTo(_),(_=$("<a/>").prop("style","display:inline").text("   Mudra Research Report").appendTo(_)).prop("href","/?research=yes&address="+c.token_address),_.prop("target","_blank"),$("<i />").prop("class","bx bx-file").appendTo(_)}}(n=n.sort((e,t)=>e.timestamp<t.timestamp?1:-1)),q=!0,$("#discover_refresh_msg").html("Last updated "+moment(B).fromNow()+".")}catch(e){console.log(e),Dt("Discover failed: "+(null!=e.message?e.message:"Unknown error")),q=!1,$("#discover_refresh_msg").html("Last update failed "+moment(B).fromNow()+".")}finally{$("#discover_refresh_spinner").hide(),$("#discover_refresh_button").prop("disabled",!1),L=!1}}}async function Et(){var t,n,a,i,o,r,s,l,u,d,c,p,m
if(!C){$("#discover_all_refresh_button").prop("disabled",!0),$("#discover_all_refresh_spinner").show(),$("#discover_all_list").html("Finding all opportunities!"),u=!1
try{null!=w&&(n=await new(t=new Web3(k)).eth.Contract(ne,z).methods.balanceOf(w).call(),n=t.utils.toBN(n),a=await new t.eth.Contract(Q,Y).methods.getReserves().call(),i=t.utils.toBN(a[0]),o=t.utils.toBN(a[1]).div(i),r=await new t.eth.Contract(Q,j).methods.getReserves().call(),s=t.utils.toBN(r[0]),l=t.utils.toBN(r[1]),u=500<=t.utils.fromWei(s.mul(n).div(l))*o)}catch(e){Dt("Discover user account failed: "+(null!=e.message?e.message:"Unknown error")),Dt("Discover user account failed: "+(null!=e.stack?e.stack:"Unknown stack"))}if(0==u)return(u=$("#discover_all_list")).html(""),u.html("This feature is only available to <a target='_blank' href='/#pricing'>Mudra Premium Level 2 users</a>"),$("#discover_all_refresh_button").prop("disabled",!1),void $("#discover_all_refresh_spinner").hide()
$("#discover_all_list").html(""),$("#discover_all_refresh_spinner_more").show(),$("#discover_all_refresh_text_more").show(),C=!0
try{for(S=new Date,await Pt(),d=await F.eth.getBlockNumber();;){d-=vt,c=[]
try{p=await qt(d,vt),c=c.concat(p)}catch(e){}try{p=await Ct(d,vt),c=c.concat(p)}catch(e){}try{p=await St(d,vt),c=c.concat(p)}catch(e){}try{p=await Ot(d,vt),c=c.concat(p)}catch(e){}try{p=await Nt(d,vt),c=c.concat(p)}catch(e){}if(await async function(t){var n,a,i,o,r=$("#discover_all_list")
for(e in 0==t.length&&r.html("No recent opportunities discovered."),t)n=t[e],a=new Date(1e3*n.timestamp)-new Date,o=$("<li />").appendTo(r),i=n.token_symbol,(i=$("<a/>").html(i).appendTo(o)).prop("href","https://bscscan.com/token/"+n.token_address),i.prop("target","_blank"),$("<p/>").prop("style","display:inline").html(": <small> ["+moment.duration(a).humanize(!0)+"] </small> "+n.msg+". ").appendTo(o),(o=$("<a/>").prop("style","display:inline").text("   Mudra Research Report").appendTo(o)).prop("href","/?research=yes&address="+n.token_address),o.prop("target","_blank"),$("<i />").prop("class","bx bx-file").appendTo(o)}(c=c.sort((e,t)=>e.timestamp<t.timestamp?1:-1)),m=await F.eth.getBlock(d),new Date(1e3*m.timestamp)<(new Date).setHours((new Date).getHours()-24))break}O=!0,$("#discover_all_refresh_msg").html("Last updated "+moment(S).fromNow()+".")}catch(e){console.log(e),Dt("Discover failed: "+(null!=e.message?e.message:"Unknown error")),O=!1,$("#discover_all_refresh_msg").html("Last update failed "+moment(S).fromNow()+".")}finally{$("#discover_all_refresh_spinner").hide(),$("#discover_all_refresh_spinner_more").hide(),$("#discover_all_refresh_text_more").hide(),$("#discover_all_refresh_button").prop("disabled",!1),C=!1}}}function Dt(e){try{$.post("/api/log/",{address:e})}catch(e){console.log(e)}}function Rt(e){null!=w?($("#discover_connect_wallet").hide(),$("#discover_connected_wallet_address").text(w.substring(0,6)+".."+w.substring(w.length-4,w.length)),$("#discover_connected_wallet").show(),$("#discover_connect_wallet_msg").hide(),It(),0<$("#discover_all_refresh_button").length&&Et()):($("#discover_connect_wallet").show(),$("#discover_connected_wallet_address").text(""),$("#discover_connected_wallet").hide(),$("#discover_connect_wallet_msg").text(e.msg),$("#discover_connect_wallet_msg").show())}$(document).ready(async function(){F=new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org")),setInterval(function(){$("#discover_refresh_auto").is(":checked")&&It()},6e4),setInterval(function(){var e
L||(e=1==q?"":"failed ",$("#discover_refresh_msg").html("Last updated "+e+moment(B).fromNow()+"."))},6e4),$("#discover_refresh_button").on("click",function(e){It()}),It(),0<$("#discover_all_refresh_button").length&&(setInterval(function(){var e
C||(e=1==O?"":"failed ",$("#discover_all_refresh_msg").html("Last updated "+e+moment(S).fromNow()+"."))},6e4),$("#discover_all_refresh_button").on("click",function(e){Et()})),$("#discover_connect_wallet").on("click",async function(e){await me()})})}.call(this)
;