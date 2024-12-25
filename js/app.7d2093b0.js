(function(){"use strict";var e={7145:function(e,t,o){var n=o(5130),l=o(6768);const a={id:"app"};function i(e,t,o,n,i,s){const r=(0,l.g2)("HeaderComponent"),u=(0,l.g2)("router-view");return(0,l.uX)(),(0,l.CE)("div",a,[(0,l.bF)(r),(0,l.bF)(u)])}var s=o(4232);const r={id:"container"},u={class:"header-left"},c={class:"logo"},d={class:"nav-links desktop-nav"},v={class:"header-right"},g={key:0},h={class:"user-info"};function p(e,t,o,n,a,i){const p=(0,l.g2)("font-awesome-icon"),m=(0,l.g2)("router-link");return(0,l.uX)(),(0,l.CE)("div",r,[(0,l.Lk)("header",{class:(0,s.C4)(["app-header",{scrolled:n.isScrolled}])},[(0,l.Lk)("div",u,[(0,l.Lk)("div",c,[(0,l.bF)(m,{to:"/main"},{default:(0,l.k6)((()=>[(0,l.bF)(p,{icon:["fas","ticket"],style:{height:"100%",color:"#E50914"}})])),_:1})]),(0,l.Lk)("nav",d,[(0,l.Lk)("ul",null,[(0,l.Lk)("li",null,[(0,l.bF)(m,{to:"/main"},{default:(0,l.k6)((()=>t[3]||(t[3]=[(0,l.eW)("홈")]))),_:1})]),(0,l.Lk)("li",null,[(0,l.bF)(m,{to:"/popular"},{default:(0,l.k6)((()=>t[4]||(t[4]=[(0,l.eW)("대세 콘텐츠")]))),_:1})]),(0,l.Lk)("li",null,[(0,l.bF)(m,{to:"/wishlist"},{default:(0,l.k6)((()=>t[5]||(t[5]=[(0,l.eW)("내가 찜한 리스트")]))),_:1})]),(0,l.Lk)("li",null,[(0,l.bF)(m,{to:"/search"},{default:(0,l.k6)((()=>t[6]||(t[6]=[(0,l.eW)("찾아보기")]))),_:1})])])])]),(0,l.Lk)("div",v,[n.isLoggedIn?((0,l.uX)(),(0,l.CE)("div",g,[(0,l.Lk)("span",h,"Welcome, "+(0,s.v_)(n.userName),1),(0,l.Lk)("button",{class:"icon-button",onClick:t[0]||(t[0]=(...e)=>n.handleLogout&&n.handleLogout(...e))},[(0,l.bF)(p,{icon:["fas","user"]}),t[7]||(t[7]=(0,l.eW)(" Logout "))])])):((0,l.uX)(),(0,l.Wv)(m,{key:1,to:"/sign-in",class:"icon-button"},{default:(0,l.k6)((()=>[(0,l.bF)(p,{icon:["fas","user"]}),t[8]||(t[8]=(0,l.eW)(" Sign In "))])),_:1})),(0,l.Lk)("button",{class:"icon-button mobile-menu-button",onClick:t[1]||(t[1]=(...e)=>n.toggleMobileMenu&&n.toggleMobileMenu(...e))},[(0,l.bF)(p,{icon:["fas","bars"]})])])],2),(0,l.Lk)("div",{class:(0,s.C4)(["mobile-nav",{open:n.isMobileMenuOpen}])},[(0,l.Lk)("button",{class:"close-button",onClick:t[2]||(t[2]=(...e)=>n.toggleMobileMenu&&n.toggleMobileMenu(...e))},[(0,l.bF)(p,{icon:["fas","times"]})]),(0,l.Lk)("nav",null,[(0,l.Lk)("ul",null,[(0,l.Lk)("li",null,[(0,l.bF)(m,{to:"/main",onClick:n.toggleMobileMenu},{default:(0,l.k6)((()=>t[9]||(t[9]=[(0,l.eW)("홈")]))),_:1},8,["onClick"])]),(0,l.Lk)("li",null,[(0,l.bF)(m,{to:"/popular",onClick:n.toggleMobileMenu},{default:(0,l.k6)((()=>t[10]||(t[10]=[(0,l.eW)("대세 콘텐츠")]))),_:1},8,["onClick"])]),(0,l.Lk)("li",null,[(0,l.bF)(m,{to:"/wishlist",onClick:n.toggleMobileMenu},{default:(0,l.k6)((()=>t[11]||(t[11]=[(0,l.eW)("내가 찜한 리스트")]))),_:1},8,["onClick"])]),(0,l.Lk)("li",null,[(0,l.bF)(m,{to:"/search",onClick:n.toggleMobileMenu},{default:(0,l.k6)((()=>t[12]||(t[12]=[(0,l.eW)("찾아보기")]))),_:1},8,["onClick"])])])])],2)])}o(4114);var m=o(144),k=o(1387),f=o(5234);const b=(0,f.nY)("auth",{state:()=>({isLoggedIn:!1,user:null,tmdbApiKey:null}),actions:{initializeAuth(){const e=localStorage.getItem("kakaoAccessToken");e?(this.isLoggedIn=!0,window.Kakao.Auth.setAccessToken(e),window.Kakao.API.request({url:"/v2/user/me",success:e=>{this.user=e,this.tmdbApiKey="b4dd7d0ce31fa1fb024fd2f2e48e4135"},fail:e=>{console.error("Failed to restore user info:",e),this.logout()}})):this.logout()},login(e){this.isLoggedIn=!0,this.user=e,this.tmdbApiKey="b4dd7d0ce31fa1fb024fd2f2e48e4135"},logout(){this.isLoggedIn=!1,this.user=null,this.tmdbApiKey=null,localStorage.removeItem("kakaoAccessToken")}}});var w=o(292),y=o(2353),L=o(8950);L.Yv.add(y.X46,y.ycA,y.ckx,y.GRI);var C={name:"HeaderComponent",components:{FontAwesomeIcon:w.gc},setup(){const e=(0,m.KR)(!1),t=(0,m.KR)(!1),o=(0,k.rd)(),n=b(),a=(0,l.EW)((()=>n.isLoggedIn)),i=(0,l.EW)((()=>n.user?.properties?.nickname||"Guest")),s=()=>{localStorage.removeItem("kakaoAccessToken"),n.logout(),console.log("Is Logged In:",n.isLoggedIn),o.push("/sign-in")},r=()=>{t.value=!t.value},u=()=>{e.value=window.scrollY>50};return(0,l.sV)((()=>{window.addEventListener("scroll",u)})),(0,l.hi)((()=>{window.removeEventListener("scroll",u)})),{isScrolled:e,isMobileMenuOpen:t,isLoggedIn:a,userName:i,handleLogout:s,toggleMobileMenu:r}}},K=o(1241);const M=(0,K.A)(C,[["render",p],["__scopeId","data-v-6634f35a"]]);var I=M,_={name:"App",components:{HeaderComponent:I}};const E=(0,K.A)(_,[["render",i]]);var A=E;const R={class:"home"},W={key:1,class:"loading-banner"};function S(e,t,o,n,a,i){const s=(0,l.g2)("Banner"),r=(0,l.g2)("MovieRow");return(0,l.uX)(),(0,l.CE)("div",R,[n.featuredMovie?((0,l.uX)(),(0,l.Wv)(s,{key:0,movie:n.featuredMovie},null,8,["movie"])):((0,l.uX)(),(0,l.CE)("div",W,"로딩 중...")),(0,l.bF)(r,{key:"popular",title:"인기 영화",fetchUrl:n.getUniqueUrl(n.popularMoviesUrl)},null,8,["fetchUrl"]),(0,l.bF)(r,{key:"romanceMovies",title:"로맨스 영화",fetchUrl:n.getUniqueUrl(n.romanceMoviesUrl)},null,8,["fetchUrl"]),(0,l.bF)(r,{key:"actionMovies",title:"액션 영화",fetchUrl:n.getUniqueUrl(n.actionMoviesUrl)},null,8,["fetchUrl"]),(0,l.bF)(r,{key:"comedy",title:"코미디 영화",fetchUrl:n.getUniqueUrl(n.comedyMoviesUrl)},null,8,["fetchUrl"])])}const T={class:"banner-content"},X={key:0,class:"movie-rating"},U={key:1,class:"movie-release-date"},F={key:2,class:"movie-genres"};function P(e,t,o,n,a,i){return o.movie?((0,l.uX)(),(0,l.CE)("div",{key:0,class:"banner",style:(0,s.Tr)({backgroundImage:`url(${i.backdropUrl})`})},[(0,l.Lk)("div",T,[(0,l.Lk)("h1",null,(0,s.v_)(o.movie.title),1),(0,l.Lk)("p",null,(0,s.v_)(o.movie.overview),1),o.movie.vote_average?((0,l.uX)(),(0,l.CE)("div",X," 평점: "+(0,s.v_)(o.movie.vote_average)+" / 10 ",1)):(0,l.Q3)("",!0),o.movie.release_date?((0,l.uX)(),(0,l.CE)("div",U," 개봉일: "+(0,s.v_)(i.formattedReleaseDate),1)):(0,l.Q3)("",!0),i.genres&&i.genres.length>0?((0,l.uX)(),(0,l.CE)("div",F," 장르: "+(0,s.v_)(i.genres.join(", ")),1)):(0,l.Q3)("",!0),t[0]||(t[0]=(0,l.Lk)("button",{class:"play-btn title-btn"},"재생",-1)),t[1]||(t[1]=(0,l.Lk)("button",{class:"info-btn title-btn"},"상세 정보",-1))])],4)):(0,l.Q3)("",!0)}o(1454);var O={name:"BannerComponent",props:{movie:{type:Object,required:!0}},computed:{backdropUrl(){return this.movie?`https://image.tmdb.org/t/p/original${this.movie.backdrop_path}`:""},formattedReleaseDate(){if(this.movie.release_date){const e=new Date(this.movie.release_date);return e.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"})}return null},genres(){return this.movie.genres&&this.movie.genres.length>0?this.movie.genres.map((e=>e.name)):[]}}};const V=(0,K.A)(O,[["render",P],["__scopeId","data-v-e3f8c8d6"]]);var q=V;const x={class:"movie-row"},j=["disabled"],z={class:"slider-window",ref:"sliderWindow"},Q=["onClick"],$=["src","alt"],H={key:0,class:"wishlist-indicator"},G={class:"movie-title"},N=["disabled"],B={key:0,class:"error-message"};function D(e,t,o,n,a,i){return(0,l.uX)(),(0,l.CE)("div",x,[(0,l.Lk)("h2",null,(0,s.v_)(o.title),1),(0,l.Lk)("div",{class:"slider-container",onWheel:t[2]||(t[2]=(...e)=>n.handleWheel&&n.handleWheel(...e)),onTouchstart:t[3]||(t[3]=(...e)=>n.handleTouchStart&&n.handleTouchStart(...e)),onTouchmove:t[4]||(t[4]=(...e)=>n.handleTouchMove&&n.handleTouchMove(...e)),onTouchend:t[5]||(t[5]=(...e)=>n.handleTouchEnd&&n.handleTouchEnd(...e)),onMousemove:t[6]||(t[6]=(...e)=>n.handleMouseMove&&n.handleMouseMove(...e)),onMouseleave:t[7]||(t[7]=(...e)=>n.handleMouseLeave&&n.handleMouseLeave(...e))},[(0,l.Lk)("button",{class:"slider-button left",onClick:t[0]||(t[0]=e=>n.slide("left")),style:(0,s.Tr)({opacity:n.showButtons&&!n.atLeftEdge?1:0}),disabled:n.atLeftEdge}," < ",12,j),(0,l.Lk)("div",z,[(0,l.Lk)("div",{class:"movie-slider",ref:"slider",style:(0,s.Tr)({transform:`translateX(${-n.scrollAmount}px)`})},[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(n.movies,(e=>((0,l.uX)(),(0,l.CE)("div",{key:e.id,class:"movie-card",onClick:t=>n.toggleWishlist(e)},[(0,l.Lk)("img",{src:n.getImageUrl(e.poster_path),alt:e.title||"No Image"},null,8,$),n.isInWishlist(e.id)?((0,l.uX)(),(0,l.CE)("div",H,"👍")):(0,l.Q3)("",!0),(0,l.Lk)("div",G,(0,s.v_)(e.title),1)],8,Q)))),128))],4)],512),(0,l.Lk)("button",{class:"slider-button right",onClick:t[1]||(t[1]=e=>n.slide("right")),style:(0,s.Tr)({opacity:n.showButtons&&!n.atRightEdge?1:0}),disabled:n.atRightEdge}," > ",12,N)],32),0===n.movies.length?((0,l.uX)(),(0,l.CE)("p",B,"영화를 불러올 수 없습니다.")):(0,l.Q3)("",!0)])}var Y=o(4373);o(8992),o(4520),o(7550);const J=(0,m.KR)([]);function Z(){const e=localStorage.getItem("movieWishlist");e&&(J.value=JSON.parse(e))}function ee(){localStorage.setItem("movieWishlist",JSON.stringify(J.value))}function te(e){const t=J.value.findIndex((t=>t.id===e.id));-1===t?J.value.push(e):J.value=J.value.filter((t=>t.id!==e.id)),ee()}function oe(e){return J.value.some((t=>t.id===e))}Z();var ne={name:"MovieRow",props:{title:{type:String,required:!0},fetchUrl:{type:String,required:!0}},setup(e){const t=(0,m.KR)([]),o=(0,m.KR)(null),n=(0,m.KR)(null),a=(0,m.KR)(0),i=(0,m.KR)(!1),s=(0,m.KR)(!1),r=(0,m.KR)(0),u=(0,m.KR)(0),c=(0,m.KR)(0),d=(0,m.KR)(null),v=async()=>{d.value&&d.value.cancel("Request canceled by new request."),d.value=Y.A.CancelToken.source();try{t.value=[];const o=await Y.A.get(e.fetchUrl,{cancelToken:d.value.token});o.data&&Array.isArray(o.data.results)?t.value=o.data.results:(console.warn("Invalid API response:",o.data),t.value=[])}catch(o){Y.A.isCancel(o)?console.log("Previous request canceled:",o.message):(console.error("영화 데이터를 가져오는 중 오류 발생:",o.message||o),t.value=[])}},g=()=>{o.value&&n.value&&(c.value=Math.max(0,o.value.scrollWidth-n.value.clientWidth))},h=(e,t=null)=>{const o=t||.8*n.value.clientWidth;a.value="left"===e?Math.max(0,a.value-o):Math.min(c.value,a.value+o)},p=e=>e?`https://image.tmdb.org/t/p/w300${e}`:"/placeholder-image.jpg",k=()=>i.value=!0,f=()=>i.value=!1,b=e=>{if(s.value)return;s.value=!0;const t=e.deltaY>0?"right":"left";h(t),setTimeout((()=>{s.value=!1}),500)},w=e=>{r.value=e.touches[0].clientX,u.value=e.touches[0].clientX},y=e=>{u.value=e.touches[0].clientX},L=()=>{const e=r.value-u.value,t=50;if(Math.abs(e)>t){const t=e>0?"right":"left";h(t,Math.abs(e))}};return(0,l.sV)((()=>{v(),g(),window.addEventListener("resize",g)})),(0,l.wB)((()=>e.fetchUrl),(async()=>{await v()}),{immediate:!0}),{movies:t,slider:o,sliderWindow:n,scrollAmount:a,maxScroll:c,atLeftEdge:(0,l.EW)((()=>a.value<=0)),atRightEdge:(0,l.EW)((()=>a.value>=c.value)),showButtons:i,getImageUrl:p,slide:h,handleMouseMove:k,handleMouseLeave:f,handleWheel:b,handleTouchStart:w,handleTouchMove:y,handleTouchEnd:L,toggleWishlist:te,isInWishlist:oe}}};const le=(0,K.A)(ne,[["render",D],["__scopeId","data-v-7d4679b0"]]);var ae=le,ie={name:"HomeMain",components:{Banner:q,MovieRow:ae},setup(){const e="b4dd7d0ce31fa1fb024fd2f2e48e4135";if(!e)return console.error("API 키가 없습니다. 로그인 후 다시 시도해 주세요."),{};const t=(0,m.KR)(null),o=(0,m.KR)(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR`),n=(0,m.KR)(`https://api.themoviedb.org/3/discover/movie?api_key=${e}&with_genres=10749&language=ko-KR`),a=(0,m.KR)(`https://api.themoviedb.org/3/discover/movie?api_key=${e}&with_genres=28&language=ko-KR`),i=(0,m.KR)(`https://api.themoviedb.org/3/discover/movie?api_key=${e}&with_genres=35&language=ko-KR`),s=e=>`${e}&t=${(new Date).getTime()}`,r=async()=>{try{const e=await fetch(s(o.value)),n=await e.json();t.value=n.results[0]}catch(e){console.error("Error fetching featured movie:",e)}},u=()=>{const e=document.querySelector(".app-header");window.scrollY>50?e?.classList.add("scrolled"):e?.classList.remove("scrolled")};return(0,l.sV)((()=>{r(),window.addEventListener("scroll",u)})),(0,l.xo)((()=>{window.removeEventListener("scroll",u)})),{featuredMovie:t,popularMoviesUrl:o,romanceMoviesUrl:n,actionMoviesUrl:a,comedyMoviesUrl:i,getUniqueUrl:s}}};const se=(0,K.A)(ie,[["render",S],["__scopeId","data-v-28cc74eb"]]);var re=se;const ue={class:"popular-container"},ce={class:"view-toggle"};function de(e,t,o,n,a,i){const r=(0,l.g2)("MovieGrid"),u=(0,l.g2)("MovieInfiniteScroll");return(0,l.uX)(),(0,l.CE)("div",ue,[(0,l.Lk)("div",ce,[(0,l.Lk)("button",{onClick:t[0]||(t[0]=e=>n.setView("grid")),class:(0,s.C4)({active:"grid"===n.currentView})},"Grid View",2),(0,l.Lk)("button",{onClick:t[1]||(t[1]=e=>n.setView("list")),class:(0,s.C4)({active:"list"===n.currentView})},"List View",2)]),"grid"===n.currentView?((0,l.uX)(),(0,l.Wv)(r,{key:0,fetchUrl:n.fetchURL,apiKey:n.apiKey},null,8,["fetchUrl","apiKey"])):(0,l.Q3)("",!0),"list"===n.currentView?((0,l.uX)(),(0,l.Wv)(u,{key:1,apiKey:n.apiKey,genreCode:"28"},null,8,["apiKey"])):(0,l.Q3)("",!0)])}const ve={class:"movie-table-view"},ge={class:"movie-grid"},he=["onClick"],pe=["src","alt"],me={class:"movie-title"},ke={key:0,class:"wishlist-indicator"},fe={class:"pagination"},be=["disabled"],we=["disabled"];function ye(e,t,o,n,a,i){return(0,l.uX)(),(0,l.CE)("div",ve,[(0,l.Lk)("div",ge,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(n.paginatedMovies,(e=>((0,l.uX)(),(0,l.CE)("div",{key:e.id,class:"movie-card",onClick:t=>n.handleToggleWishlist(e)},[(0,l.Lk)("img",{src:n.getImageUrl(e.poster_path),alt:e.title},null,8,pe),(0,l.Lk)("div",me,(0,s.v_)(e.title),1),n.checkIsInWishlist(e.id)?((0,l.uX)(),(0,l.CE)("div",ke,"👍")):(0,l.Q3)("",!0)],8,he)))),128))]),(0,l.Lk)("div",fe,[(0,l.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>n.prevPage&&n.prevPage(...e)),disabled:1===n.currentPage},"이전",8,be),(0,l.Lk)("span",null,"페이지 "+(0,s.v_)(n.currentPage)+" / "+(0,s.v_)(n.totalPages),1),(0,l.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>n.nextPage&&n.nextPage(...e)),disabled:n.currentPage===n.totalPages},"다음",8,we)])])}var Le={props:["fetchUrl","apiKey"],setup(e){const t=(0,m.KR)(1),o=(0,m.KR)(1),n=(0,m.KR)([]),a=async(t=1)=>{try{const l=await Y.A.get(e.fetchUrl,{params:{page:t}});n.value=l.data.results,o.value=l.data.total_pages}catch(l){console.error("Error fetching movies:",l)}},i=(0,l.EW)((()=>n.value)),s=()=>{t.value<o.value&&(t.value++,a(t.value))},r=()=>{t.value>1&&(t.value--,a(t.value))},u=e=>oe(e),c=e=>{te(e)};return(0,l.sV)((()=>{a(t.value)})),{paginatedMovies:i,currentPage:t,totalPages:o,nextPage:s,prevPage:r,getImageUrl:e=>e?`https://image.tmdb.org/t/p/w300${e}`:"/assets/default-movie-poster.jpg",checkIsInWishlist:u,handleToggleWishlist:c}}};const Ce=(0,K.A)(Le,[["render",ye],["__scopeId","data-v-54f217e4"]]);var Ke=Ce;const Me={class:"movie-grid",ref:"gridContainer"},Ie=["onMouseup"],_e=["src","alt"],Ee={class:"movie-title"},Ae={key:0,class:"wishlist-indicator"},Re={ref:"loadingTrigger",class:"loading-trigger"},We={key:0,class:"loading-indicator"},Se={key:1,class:"no-movies-message"};function Te(e,t,o,n,a,i){return(0,l.uX)(),(0,l.CE)("div",null,[(0,l.Lk)("div",Me,[(0,l.Lk)("div",{class:(0,s.C4)(["grid-container",n.currentView])},[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(n.visibleMovieGroups,((e,t)=>((0,l.uX)(),(0,l.CE)("div",{key:t,class:(0,s.C4)(["movie-row",{full:e.length===n.rowSize}])},[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e,(e=>((0,l.uX)(),(0,l.CE)("div",{key:e.id,class:"movie-card",onMouseup:t=>n.handleToggleWishlist(e)},[(0,l.Lk)("img",{src:n.getImageUrl(e.poster_path),alt:e.title,loading:"lazy"},null,8,_e),(0,l.Lk)("div",Ee,(0,s.v_)(e.title),1),n.checkIsInWishlist(e.id)?((0,l.uX)(),(0,l.CE)("div",Ae,"👍")):(0,l.Q3)("",!0)],40,Ie)))),128))],2)))),128))],2),(0,l.Lk)("div",Re,[n.isLoading?((0,l.uX)(),(0,l.CE)("div",We,t[1]||(t[1]=[(0,l.Lk)("div",{class:"spinner"},null,-1),(0,l.Lk)("span",null,"로딩 중...",-1)]))):n.hasMore||0!==n.movies.length?(0,l.Q3)("",!0):((0,l.uX)(),(0,l.CE)("div",Se,t[2]||(t[2]=[(0,l.Lk)("p",null,"해당 조건에 맞는 영화가 없습니다.",-1)])))],512),n.showTopButton?((0,l.uX)(),(0,l.CE)("button",{key:0,onClick:t[0]||(t[0]=(...e)=>n.scrollToTopAndReset&&n.scrollToTopAndReset(...e)),class:"top-button","aria-label":"맨 위로 이동"}," Top ")):(0,l.Q3)("",!0)],512)])}o(8872);var Xe={name:"MovieInfiniteScroll",props:{genreCode:String,apiKey:String,sortingOrder:{type:String,default:"popularity.desc"},voteAverage:{type:Number,default:-1},language:{type:String,default:"en"}},setup(e){const t=(0,m.KR)([]),o=(0,m.KR)(1),n=(0,m.KR)(4),a=(0,m.KR)(!1),i=(0,m.KR)(window.innerWidth<=768),s=(0,m.KR)("grid"),r=(0,m.KR)(!0),u=(0,m.KR)(!1),c=(0,m.KR)(null),d=(0,m.KR)(null),v=(0,m.KR)(null),g=()=>{v.value=new IntersectionObserver((e=>{e[0].isIntersecting&&!a.value&&r.value&&h()}),{rootMargin:"100px",threshold:.1}),d.value&&v.value.observe(d.value)},h=async()=>{if(!a.value&&r.value){a.value=!0;try{const n={api_key:e.apiKey,language:e.language&&"all"!==e.language?e.language:"en",page:o.value,with_genres:e.genreCode&&"0"!==e.genreCode?e.genreCode:void 0,sort_by:e.sortingOrder??"popularity.desc","vote_average.gte":e.voteAverage>0?e.voteAverage:void 0};console.log("Fetching Movies with Params:",n);const l=await Y.A.get("https://api.themoviedb.org/3/discover/movie",{params:n}),a=l.data.results;a&&0!==a.length?(t.value=[...t.value,...a],o.value++):(1===o.value&&(t.value=[]),r.value=!1)}catch(n){console.error("Error fetching movies:",n)}finally{a.value=!1}}},p=e=>e?`https://image.tmdb.org/t/p/w300${e}`:"/assets/default-movie-poster.jpg",k=(0,l.EW)((()=>t.value.reduce(((e,t,o)=>{const l=Math.floor(o/n.value);return e[l]||(e[l]=[]),e[l].push(t),e}),[])));(0,l.wB)([()=>e.genreCode,()=>e.sortingOrder,()=>e.voteAverage,()=>e.language],(()=>{L()}));const f=()=>{i.value=window.innerWidth<=768,b()},b=()=>{if(c.value){const e=c.value.offsetWidth,t=i.value?100:300,o=i.value?10:15;n.value=Math.floor(e/(t+o))}},w=()=>{const e=window.pageYOffset||document.documentElement.scrollTop;u.value=e>300},y=()=>{window.scrollTo({top:0,behavior:"smooth"})},L=()=>{t.value=[],o.value=1,r.value=!0,h()},C=e=>{te(e)},K=e=>oe(e);return(0,l.sV)((()=>{g(),h(),f(),window.addEventListener("resize",f),window.addEventListener("scroll",w)})),(0,l.hi)((()=>{window.removeEventListener("resize",f),window.removeEventListener("scroll",w),v.value&&v.value.disconnect()})),{movies:t,currentPage:o,rowSize:n,isLoading:a,isMobile:i,currentView:s,hasMore:r,showTopButton:u,gridContainer:c,loadingTrigger:d,visibleMovieGroups:k,fetchMovies:h,getImageUrl:p,scrollToTopAndReset:y,handleToggleWishlist:C,checkIsInWishlist:K}}};const Ue=(0,K.A)(Xe,[["render",Te],["__scopeId","data-v-b5ed6130"]]);var Fe=Ue;function Pe(e,t=1){const o=`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=ko-KR&page=${t}`;return console.log("Popular Movies URL:",o),o}var Oe={name:"HomePopular",components:{MovieGrid:Ke,MovieInfiniteScroll:Fe},setup(){const e=(0,m.KR)("grid"),t="b4dd7d0ce31fa1fb024fd2f2e48e4135";if(!t)return void console.error("API 키가 없습니다. 로그인 후 다시 시도해 주세요.");const o=Pe(t),n=t=>{e.value=t};return{currentView:e,setView:n,fetchURL:o,apiKey:t}}};const Ve=(0,K.A)(Oe,[["render",de],["__scopeId","data-v-58220a2f"]]);var qe=Ve;function xe(e,t,o,n,a,i){const s=(0,l.g2)("MovieWishlist");return(0,l.uX)(),(0,l.Wv)(s)}const je={class:"movie-grid",ref:"gridContainer"},ze=["onClick"],Qe=["src","alt"],$e={class:"movie-title"},He={key:0,class:"empty-wishlist"},Ge={key:1,class:"pagination"},Ne=["disabled"],Be=["disabled"];function De(e,t,o,n,a,i){return(0,l.uX)(),(0,l.CE)("div",je,[(0,l.Lk)("div",{class:(0,s.C4)(["grid-container",n.currentView])},[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(n.visibleWishlistMovies,((e,o)=>((0,l.uX)(),(0,l.CE)("div",{key:o,class:(0,s.C4)(["movie-row",{full:e.length===n.rowSize}])},[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(e,(e=>((0,l.uX)(),(0,l.CE)("div",{key:e.id,class:"movie-card",onClick:t=>n.toggleWishlist(e)},[(0,l.Lk)("img",{src:n.getImageUrl(e.poster_path),alt:e.title},null,8,Qe),(0,l.Lk)("div",$e,(0,s.v_)(e.title),1),t[2]||(t[2]=(0,l.Lk)("div",{class:"wishlist-indicator"},"👍",-1))],8,ze)))),128))],2)))),128))],2),0===n.wishlistMovies.length?((0,l.uX)(),(0,l.CE)("div",He," 위시리스트가 비어 있습니다. ")):(0,l.Q3)("",!0),n.totalPages>1?((0,l.uX)(),(0,l.CE)("div",Ge,[(0,l.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>n.prevPage&&n.prevPage(...e)),disabled:1===n.currentPage},"< 이전",8,Ne),(0,l.Lk)("span",null,(0,s.v_)(n.currentPage)+" / "+(0,s.v_)(n.totalPages),1),(0,l.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>n.nextPage&&n.nextPage(...e)),disabled:n.currentPage===n.totalPages},"다음 >",8,Be)])):(0,l.Q3)("",!0)],512)}var Ye=o(3606),Je={name:"MovieWishlist",setup(){const e=(0,m.KR)(null),t=(0,m.KR)(4),o=(0,m.KR)(20),n=(0,m.KR)(1),a=(0,m.KR)(window.innerWidth<=768),i=(0,m.KR)("grid"),s=(0,m.KR)([]),r=(0,m.KR)([]);let u;const c=()=>{s.value=J.value||[],v()},d=()=>{if(e.value){const n=e.value.offsetWidth,l=window.innerHeight-e.value.offsetTop,i=a.value?90:220,s=a.value?150:330,r=a.value?10:15,u=-10;t.value=Math.floor(n/(i+r));const c=Math.floor(l/(s+u));o.value=t.value*c,v()}},v=()=>{const e=(n.value-1)*o.value,l=e+o.value,a=s.value.slice(e,l);r.value=a.reduce(((e,o,n)=>{const l=Math.floor(n/t.value);return e[l]||(e[l]=[]),e[l].push(o),e}),[])},g=()=>{n.value<b.value&&(n.value++,v())},h=()=>{n.value>1&&(n.value--,v())},p=()=>{a.value=window.innerWidth<=768,d()},k=e=>{J.value.includes(e)?J.value=J.value.filter((t=>t.id!==e.id)):J.value.push(e),c()},f=e=>e?`https://image.tmdb.org/t/p/w300${e}`:"/placeholder-image.jpg",b=(0,m.KR)(0);return(0,l.nT)((()=>{b.value=Math.ceil(s.value.length/o.value)})),(0,l.sV)((()=>{c(),p(),window.addEventListener("resize",p),u=new Ye.A((()=>d())),e.value&&u.observe(e.value)})),(0,l.hi)((()=>{window.removeEventListener("resize",p),e.value&&u.unobserve(e.value),u.disconnect()})),{gridContainer:e,rowSize:t,moviesPerPage:o,currentPage:n,isMobile:a,currentView:i,wishlistMovies:s,visibleWishlistMovies:r,totalPages:b,nextPage:g,prevPage:h,handleResize:p,toggleWishlist:k,getImageUrl:f}}};const Ze=(0,K.A)(Je,[["render",De],["__scopeId","data-v-4720f8aa"]]);var et=Ze,tt={name:"HomeWishlistComponent",components:{MovieWishlist:et}};const ot=(0,K.A)(tt,[["render",xe],["__scopeId","data-v-4cf7d73c"]]);var nt=ot;const lt={key:0,class:"container-search"},at={class:"container-search-bar"},it=["value"],st=["value"],rt={class:"content-search"};function ut(e,t,o,a,i,r){const u=(0,l.g2)("MovieInfiniteScroll");return a.isLoggedIn?((0,l.uX)(),(0,l.CE)("div",lt,[(0,l.Lk)("div",at,[(0,l.bo)((0,l.Lk)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.selectedGenre=e),onChange:t[1]||(t[1]=(...e)=>a.applyFilters&&a.applyFilters(...e)),class:"filter-select"},[t[5]||(t[5]=(0,l.Lk)("option",{value:"0"},"장르 (전체)",-1)),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(a.genreCode,((e,t)=>((0,l.uX)(),(0,l.CE)("option",{key:t,value:e},(0,s.v_)(t),9,it)))),128))],544),[[n.u1,a.selectedGenre]]),(0,l.bo)((0,l.Lk)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>a.selectedVoteAverage=e),onChange:t[3]||(t[3]=(...e)=>a.applyFilters&&a.applyFilters(...e)),class:"filter-select"},[t[6]||(t[6]=(0,l.Lk)("option",{value:""},"평점 (전체)",-1)),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(a.voteAverages,(e=>((0,l.uX)(),(0,l.CE)("option",{key:e,value:e},(0,s.v_)(e)+" 이상 ",9,st)))),128))],544),[[n.u1,a.selectedVoteAverage]]),(0,l.Lk)("button",{onClick:t[4]||(t[4]=(...e)=>a.resetFilters&&a.resetFilters(...e)),class:"reset-button"},"초기화")]),(0,l.Lk)("div",rt,[(0,l.bF)(u,{apiKey:a.apiKey,genreCode:a.selectedGenre,voteAverage:a.selectedVoteAverage},null,8,["apiKey","genreCode","voteAverage"])])])):(0,l.Q3)("",!0)}var ct={name:"HomeSearch",components:{MovieInfiniteScroll:Fe},setup(){const e=(0,k.rd)(),t=(0,m.KR)(!1),o="b4dd7d0ce31fa1fb024fd2f2e48e4135";(0,l.sV)((()=>{o.value?t.value=!0:e.push("/signin");const l=JSON.parse(localStorage.getItem("selectedOptions"));l&&(n.value=l.genreId||"0",a.value=l.voteAverage||"")}));const n=(0,m.KR)("0"),a=(0,m.KR)(""),i={Action:28,Adventure:12,Comedy:35,Crime:80,Drama:18,Family:10751,Fantasy:14,Horror:27,Romance:10749,"Science Fiction":878,Thriller:53},s=[5,6,7,8,9],r=()=>{localStorage.setItem("selectedOptions",JSON.stringify({genreId:n.value,voteAverage:a.value}))},u=()=>{n.value="0",a.value="",r()};return{isLoggedIn:t,apiKey:o,selectedGenre:n,selectedVoteAverage:a,genreCode:i,voteAverages:s,applyFilters:r,resetFilters:u}}};const dt=(0,K.A)(ct,[["render",ut],["__scopeId","data-v-2ca15c99"]]);var vt=dt;const gt={class:"login-container"};function ht(e,t,o,n,a,i){return(0,l.uX)(),(0,l.CE)("div",gt,[t[1]||(t[1]=(0,l.Lk)("h1",{class:"login-title"},"Welcome to Our Service",-1)),(0,l.Lk)("button",{class:"kakao-login-btn",onClick:t[0]||(t[0]=(...e)=>n.loginWithKakao&&n.loginWithKakao(...e))},"Login with Kakao")])}var pt={name:"SignIn",setup(){const e=b(),t=(0,k.rd)(),o=()=>{window.Kakao.isInitialized()?window.Kakao.Auth.login({success:o=>{console.log("Login successful:",o),localStorage.setItem("kakaoAccessToken",o.access_token),window.Kakao.API.request({url:"/v2/user/me",success:o=>{console.log("User Name:",o.properties.nickname),console.log("User ID:",o.id),console.log("Connected At:",o.connected_at),console.log("Email:",o.kakao_account?.email),e.login(o),localStorage.setItem("userName",o.properties.nickname),t.push("/main")},fail:e=>{console.error("Failed to fetch user info:",e),alert("Failed to fetch user information.")}})},fail:e=>{console.error("Login failed:",e),alert("Login failed. Please try again.")}}):console.error("Kakao SDK is not initialized")};return{loginWithKakao:o}}};const mt=(0,K.A)(pt,[["render",ht],["__scopeId","data-v-3304452e"]]);var kt=mt;const ft=()=>{const e=localStorage.getItem("kakaoAccessToken");return!!e},bt=[{path:"/",redirect:"/sign-in"},{path:"/main",name:"HomeMain",component:re,meta:{requiresAuth:!0}},{path:"/popular",name:"HomePopular",component:qe,meta:{requiresAuth:!0}},{path:"/wishlist",name:"HomeWishlist",component:nt,meta:{requiresAuth:!0}},{path:"/search",name:"HomeSearch",component:vt,meta:{requiresAuth:!0}},{path:"/sign-in",name:"SignIn",component:kt}],wt=(0,k.aE)({history:(0,k.LA)(),routes:bt});wt.beforeEach(((e,t,o)=>{console.log("Navigating to:",e.path),console.log("Is Logged In:",ft()),e.meta.requiresAuth&&!ft()?(console.log("Redirecting to Sign In..."),o({path:"/sign-in",query:{redirect:e.fullPath}})):(console.log("Access granted to:",e.path),o())}));var yt=wt,Lt=o(7411);o(7917);if(!window.Kakao.isInitialized()){const e="f25a51ba946937cdb23d35b9b7b5df0e";e?(window.Kakao.init(e),console.log("Kakao SDK initialized with key:",e)):console.error("Kakao JavaScript Key is missing.")}const Ct=(0,n.Ef)(A),Kt=(0,f.Ey)();Ct.use(Kt),Ct.use(yt),Ct.use(Lt.Ay);const Mt=b(),It=localStorage.getItem("kakaoAccessToken");It?(window.Kakao.Auth.setAccessToken(It),window.Kakao.API.request({url:"/v2/user/me",success:e=>{Mt.login(e),console.log("Login state restored:",e)},fail:e=>{console.error("Failed to restore login state:",e),localStorage.removeItem("kakaoAccessToken"),Mt.logout()}})):Mt.logout(),Ct.mount("#app")}},t={};function o(n){var l=t[n];if(void 0!==l)return l.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,l,a){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],l=e[c][1],a=e[c][2];for(var s=!0,r=0;r<n.length;r++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[r])}))?n.splice(r--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var u=l();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,l,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,a,i=n[0],s=n[1],r=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(l in s)o.o(s,l)&&(o.m[l]=s[l]);if(r)var c=r(o)}for(t&&t(n);u<i.length;u++)a=i[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},n=self["webpackChunkmy_vue_project"]=self["webpackChunkmy_vue_project"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(7145)}));n=o.O(n)})();
//# sourceMappingURL=app.7d2093b0.js.map