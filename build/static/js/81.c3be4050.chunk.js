"use strict";(self.webpackChunkmusic=self.webpackChunkmusic||[]).push([[81],{4717:function(n,t,i){i.d(t,{E:function(){return a},d:function(){return c}});var r=i(885),e=i(6871),o=i(2791),s=i(184);function a(n){return function(t){var i=(0,e.TH)(),r=(0,e.UO)(),o=(0,e.s0)();return(0,s.jsx)(n,{location:i,params:r,navigate:o})}}function c(n){var t=(0,o.useState)(!1),i=(0,r.Z)(t,2),e=i[0],s=i[1];return(0,o.useEffect)((function(){if(0!==n.length){var t=n.map((function(n){return new Promise((function(t,i){var r=new Image;r.onload=function(){r.onload=null,t(r)},r.error=function(){i(new Error("\u56fe\u7247\u52a0\u8f7d\u5931\u8d25"))},r.src=n}))}));Promise.all(t).then((function(n){s(!0)}))}}),[n]),0!==n.length&&e}},2037:function(n,t,i){var r=i(6871),e=i(6203),o=i(3567),s=i(184);t.Z=function(n){var t=n.list,i=void 0===t?[]:t,a=(0,r.s0)();return(0,s.jsx)(e.Sv,{height:"284px",length:i.length,children:i.map((function(n){return(0,s.jsxs)(e.CO,{onClick:function(){a("/songListDetail/".concat(n.id))},children:[(0,s.jsx)(e.Zx,{src:n.picUrl||n.coverImgUrl}),(0,s.jsxs)(e._m,{background:n.picUrl,children:[(0,s.jsx)(e.y2,{children:n.name}),(0,s.jsxs)(e.y2,{children:[(0,s.jsx)("ion-icon",{name:"play-outline"}),(0,o.lt)(n.playCount)]})]}),(0,s.jsx)(e.WD,{})]},n.id)}))})}},5297:function(n,t,i){i(2791);var r=i(6203),e=i(184);t.Z=function(n){var t=n.list,i=void 0===t?[]:t,o=n.type,s=void 0===o?"":o,a=n.length,c=void 0===a?6:a,l=function(n){switch(s){case"singer":return n.desciption;case"radio":return n.dj.nickname;default:return n.program.dj.nickname}};return(0,e.jsx)(r.ap,{height:"228px",length:c,children:i.map((function(n){return(0,e.jsxs)(r.q1,{children:[(0,e.jsxs)(r.GU,{children:[(0,e.jsx)(r._v,{src:"singer"===s?n.blurPicUrl:n.picUrl}),(0,e.jsx)(r.NR,{})]}),(0,e.jsxs)(r.HV,{children:[(0,e.jsx)(r.v5,{children:n.name}),(0,e.jsx)(r.AD,{children:l(n)})]})]},n.id)}))})}},1409:function(n,t,i){var r=i(7581),e=i(6203),o=i(9011),s=i(184);t.Z=function(n){var t=n.list,i=void 0===t?[]:t,a=n.type,c=void 0===a?"":a,l=(0,r.I0)();return(0,s.jsx)(e.pA,{height:"180px",children:i.map((function(n){var t;return(0,s.jsxs)(e.NV,{onDoubleClick:function(){!function(n){l({type:o._.PLAYER_ADD_SONG_AND_PLAY,payload:{item:n}})}(n)},children:[(0,s.jsxs)(e.$E,{children:[(0,s.jsx)(e.Qo,{src:"singer"===c?null===(t=n.al)||void 0===t?void 0:t.picUrl:n.picUrl}),(0,s.jsx)(e.B5,{children:(0,s.jsx)("ion-icon",{name:"play"})})]}),(0,s.jsxs)(e.U1,{children:[(0,s.jsx)(e.XD,{children:n.name}),(0,s.jsx)(e.Rg,{children:"singer"===c?n.al.name:n.song.artists.map((function(n){return n.name})).join("/")})]}),(0,s.jsx)(e.t3,{children:(0,s.jsx)("ion-icon",{name:"add-outline"})})]},n.id)}))})}},6203:function(n,t,i){i.d(t,{$E:function(){return $},AD:function(){return O},B5:function(){return T},CO:function(){return U},GU:function(){return N},HV:function(){return V},NR:function(){return I},NV:function(){return X},Qo:function(){return M},Rg:function(){return K},Sv:function(){return S},U1:function(){return Y},WD:function(){return B},XD:function(){return q},Zx:function(){return F},_m:function(){return _},_v:function(){return H},ap:function(){return L},pA:function(){return W},q1:function(){return R},t3:function(){return Q},v5:function(){return G},y2:function(){return z}});var r,e,o,s,a,c,l,d,u,p,h,g,f,x,v,m,b,Z,j,w,y,P,k,A=i(168),E=i(5751),D="\n  display: grid;\n  grid-column-gap: 20px;\n  width: 100%;\n  overflow-x: auto;\n  scrollbar-width: none;\n  position: relative;\n  &::-webkit-scrollbar {\n    display: none; /* Chrome Safari */\n  }\n",C="\n  flex-shrink: 0;\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n",S=E.ZP.div(r||(r=(0,A.Z)(["\n  ","\n  height: ",";\n  grid-template-columns: repeat(",", 214px);\n"])),D,(function(n){return n.height||"auto"}),(function(n){return n.length})),U=E.ZP.div(e||(e=(0,A.Z)(["\n  height: 284px;\n  ","\n"])),C),F=E.ZP.img(o||(o=(0,A.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n"]))),_=E.ZP.div(s||(s=(0,A.Z)(["\n  position: absolute;\n  height: 70px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-image: url(",");\n  background-size: 200%;\n  background-position: 50%;\n  background: rgba(0, 0, 0, .4);\n  backdrop-filter: blur(10px);\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])),(function(n){return n.background})),B=E.ZP.div(a||(a=(0,A.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 70px;\n  opacity: 1;\n  transition: all .5s;\n  background: transparent;\n  &:hover {\n    background: #000;\n    opacity: .4;\n  }\n"]))),z=E.ZP.span(c||(c=(0,A.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 5px;\n  padding: 0 20px;\n  > *{\n    margin-right: 4px;\n  }\n"]))),L=E.ZP.div(l||(l=(0,A.Z)(["\n  ","\n  grid-template-columns: repeat(",", 186px);\n  height: ",";\n"])),D,(function(n){return n.length}),(function(n){return n.height||"auto"})),R=E.ZP.div(d||(d=(0,A.Z)(["\n  ","\n"])),C),N=E.ZP.div(u||(u=(0,A.Z)(["\n  width: 100%;\n  height: 186px;\n  margin-bottom: 10px;\n  position: relative;\n"]))),H=E.ZP.img(p||(p=(0,A.Z)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n  object-fit: cover;\n"]))),I=E.ZP.div(h||(h=(0,A.Z)(["\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  opacity: 1;\n  transition: all .5s;\n  background: transparent;\n  &:hover {\n    background: #000;\n    opacity: .4;\n  }\n"]))),V=E.ZP.div(g||(g=(0,A.Z)(["\n  width: 100%;\n  padding: 0 5px;\n  box-sizing: border-box;\n"]))),G=E.ZP.div(f||(f=(0,A.Z)(["\n  width: 100%;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 2px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),O=E.ZP.div(x||(x=(0,A.Z)(["\n  width: 100%;\n  font-size: 12px;\n  font-weight: 300;\n"]))),W=E.ZP.div(v||(v=(0,A.Z)(["\n  display: grid;\n  grid-template-columns: 310px 310px 310px;\n  grid-template-rows: 60px 60px 60px;\n  justify-content: space-between;\n  grid-template-areas:  'a b c'\n                        'd e f'\n                        'g h i';\n  position: relative;\n  height: ",";\n"])),(function(n){return n.height||"auto"})),T=E.ZP.div(m||(m=(0,A.Z)(["\n  display: flex;\n  justify-content: center;\n  font-size: 20px;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  opacity: 0;\n  transition: all .5s;\n  background: rgba(0, 0, 0, .4);\n"]))),Q=E.ZP.div(b||(b=(0,A.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  font-size: 20px;\n  opacity: 0;\n  >ion-icon {\n    cursor: pointer;\n    &:active {\n      color: grey;\n    }\n  }\n"]))),X=E.ZP.div(Z||(Z=(0,A.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: .5px solid rgba(0, 0, 0, .1);\n  &:hover {\n    "," {\n      opacity: 1;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"])),T,Q),$=E.ZP.div(j||(j=(0,A.Z)(["\n  width: 40px;\n  height: 40px;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-right: 10px;\n  position: relative;\n"]))),M=E.ZP.img(w||(w=(0,A.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),Y=E.ZP.div(y||(y=(0,A.Z)(["\n  flex: 1;\n"]))),q=E.ZP.div(P||(P=(0,A.Z)(["\n  font-size: 14px;\n  margin-bottom: 2px;\n"]))),K=E.ZP.div(k||(k=(0,A.Z)(["\n  font-size: 12px;\n  font-weight: 300;\n"])))},4081:function(n,t,i){i.r(t),i.d(t,{default:function(){return q}});var r,e,o,s,a,c,l,d,u,p,h=i(885),g=i(5861),f=i(7757),x=i.n(f),v=i(2791),m=i(7581),b=i(168),Z=i(5751),j=Z.ZP.div(r||(r=(0,b.Z)(["\n  width: 100%;\n  padding: 30px;\n  box-sizing: border-box;\n  overflow: auto;\n  scrollbar-width: none;\n  &::-webkit-scrollbar {\n    display: none; /* Chrome Safari */\n  }\n"]))),w=Z.ZP.div(e||(e=(0,b.Z)(["\n  font-size: 30px;\n  margin-bottom: 20px;\n"]))),y=Z.ZP.div(o||(o=(0,b.Z)([""]))),P=Z.ZP.div(s||(s=(0,b.Z)(["\n  width: 100%;\n  margin-top: 20px;\n  border-bottom: 1px solid rgba(155, 178, 210, .4);\n  padding-bottom: 50px;\n"]))),k=Z.ZP.div(a||(a=(0,b.Z)(["\n  margin-bottom: 20px;\n"]))),A=i(9396),E=[["#4DA5F7","#9B54FF","#FCBDFF"],["#9E935D","#6E7957","#1D3233"],["#0E423A","#FFC77F","#BD1B2E"],["#D83510","#FFE375","#33CAF4"],["#FFE9A3","#FF4A79","#5488FF"],["#BDB8D3","#F2358D","#ACA9B8"],["#F0E5C9","#CCEEF8","#108B90"],["#18B6B9","#ADD6B8","#EB93B8"]],D=i(5232),C=i(6017),S=i(184),U=Z.ZP.div(c||(c=(0,b.Z)(["\n  width: 100%;\n"]))),F=Z.ZP.div(l||(l=(0,b.Z)(["\n  margin-bottom: 20px;\n"]))),_=Z.ZP.div(d||(d=(0,b.Z)(["\n  display: grid;\n  justify-content: space-between;\n  grid-template-columns: repeat(4, 23%);\n  grid-row-gap: 20px;\n"]))),B=Z.ZP.div(u||(u=(0,b.Z)(["\n  position: relative;\n  width: 100%;\n  height: 90px;\n  border-radius: 8px;\n  background: linear-gradient(-45deg,\n    ",",\n    ",",\n    ","\n  );\n  overflow: hidden;\n  user-select: none;\n  cursor: pointer;\n"])),(function(n){return n.background[0]}),(function(n){return n.background[1]}),(function(n){return n.background[2]})),z=Z.ZP.div(p||(p=(0,b.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(rgba(0, 0, 0, .4), transparent, rgba(0, 0, 0, .4));\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &:hover {\n    background: linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4), rgba(0, 0, 0, .4));\n  };\n"])));var L,R,N,H,I=function(n){var t=n.list,i=void 0===t?[]:t,r=(0,m.I0)();return(0,S.jsxs)(U,{children:[(0,S.jsx)(F,{children:"\u70ed\u95e8\u641c\u7d22"}),(0,S.jsx)(_,{children:i.map((function(n,t){return(0,S.jsx)(B,{background:E[t%7],onClick:function(){r({type:C._.CHANGE_KEYWORDS,payload:n.searchWord}),r({type:C._.BEGIN_SEARCH,payload:!0})},children:(0,S.jsxs)(z,{children:[t<3&&(0,S.jsx)(D.Z,{name:"flame",color:"red"}),n.searchWord]})},n.searchWord)}))})]})},V=i(4717),G=Z.ZP.div(L||(L=(0,b.Z)(["\n  display: grid;\n  grid-column-gap: 20px;\n  width: 100%;\n  overflow-x: auto;\n  scrollbar-width: none;\n  grid-template-columns: repeat(",", 120px);\n  scrollbar-width: none;\n  position: relative;\n  &::-webkit-scrollbar {\n    display: none; /* Chrome Safari */\n  }\n"])),(function(n){return n.length})),O=Z.ZP.div(R||(R=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n"]))),W=Z.ZP.img(N||(N=(0,b.Z)(["\n  width: 120px;\n  height: 120px;\n  border-radius: 60px;\n  object-fit: cover;\n"]))),T=Z.ZP.div(H||(H=(0,b.Z)(["\n  font-size: 12px;\n  width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"])));var Q=function(n){var t=n.list,i=void 0===t?[]:t,r=(0,V.d)(i.map((function(n){return n.img1v1Url||n.avatarUrl})));return(0,S.jsx)(G,{length:i.length,children:r&&i.map((function(n){return(0,S.jsxs)(O,{children:[(0,S.jsx)(W,{src:n.img1v1Url||n.avatarUrl}),(0,S.jsx)(T,{children:n.name||n.nickname})]},n.id||n.userId)}))})},X=i(5297),$=i(1409),M=i(2037),Y=i(6763);var q=function(){var n=(0,m.v9)((function(n){return n.SearchStore})),t=n.beginSearch,i=n.keywords,r=n.hotSearch,e=n.searchSinger,o=n.haveData,s=n.searchAlbum,a=n.searchSongs,c=n.searchSongsList,l=n.searchMvList,d=n.searchVideo,u=n.searchRadio,p=n.searchUser,f=(0,m.I0)(),b=function(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return A.Z.get("/cloudsearch",{params:{keywords:i,type:n,limit:t,offset:r}})},Z=function(){var n=(0,g.Z)(x().mark((function n(){var t,i,r,e,o,s,a,c,l,d,u,p,g,v,m,Z,j,w;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([b(100,10),b(10,10),b(1,9),b(1e3,10),b(1014,10),b(1009,10),b(1004,10),b(1002,10)]);case 2:t=n.sent,i=(0,h.Z)(t,8),r=i[0].result.artists,e=void 0===r?[]:r,o=i[1].result.albums,s=void 0===o?[]:o,a=i[2].result.songs,c=void 0===a?[]:a,l=i[3].result.playlists,d=void 0===l?[]:l,u=i[4].result.videos,p=void 0===u?[]:u,g=i[5].result.djRadios,v=void 0===g?[]:g,m=i[6].result.mvs,Z=void 0===m?[]:m,j=i[7].result.userprofiles,w=void 0===j?[]:j,f({type:C._.SET_ALL_DATA,payload:{searchSinger:e,searchAlbum:s,searchSongs:c,searchSongsList:d,searchMvList:Z,searchRadio:v,searchVideo:p,searchUser:w}}),f({type:C._.BEGIN_SEARCH,payload:!1});case 22:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,v.useEffect)((function(){t&&Z()}),[t]),(0,v.useEffect)((function(){A.Z.get("/search/hot/detail").then((function(n){var t=n.data;f({type:C._.SET_HOT_SEARCH,payload:t})}))}),[]),(0,S.jsxs)(j,{children:[(0,S.jsx)(w,{children:"\u641c\u7d22"}),o?(0,S.jsxs)(y,{children:["\u6b63\u5728\u663e\u793a\u641c\u7d22\u7684\u201c",i,"\u201d",0!==e.length&&(0,S.jsxs)(P,{children:[(0,S.jsx)(k,{children:"\u827a\u4eba"}),(0,S.jsx)(Q,{list:e})]}),0!==s.length&&(0,S.jsxs)(P,{children:[(0,S.jsx)(k,{children:"\u4e13\u8f91"}),(0,S.jsx)(X.Z,{list:s,type:"singer",length:10})]}),0!==a.length&&(0,S.jsxs)(P,{children:[(0,S.jsx)(k,{children:"\u6b4c\u66f2"}),(0,S.jsx)($.Z,{list:a,type:"singer"})]}),0!==c.length&&(0,S.jsxs)(P,{children:[(0,S.jsx)(k,{children:"\u6b4c\u5355"}),(0,S.jsx)(M.Z,{list:c,length:10})]}),0!==l.length&&(0,S.jsxs)(P,{children:[(0,S.jsx)(k,{children:"MV"}),(0,S.jsx)(Y.Z,{list:l})]}),0!==d.length&&(0,S.jsxs)(P,{children:[(0,S.jsx)(k,{children:"\u89c6\u9891"}),(0,S.jsx)(Y.Z,{list:d})]}),0!==u.length&&(0,S.jsxs)(P,{children:[(0,S.jsx)(k,{children:"\u7535\u53f0"}),(0,S.jsx)(X.Z,{list:u,type:"radio",length:10})]}),0!==p.length&&(0,S.jsxs)(P,{children:[(0,S.jsx)(k,{children:"\u7528\u6237"}),(0,S.jsx)(Q,{list:p})]})]}):(0,S.jsx)(I,{list:r})]})}},6763:function(n,t,i){i(2791);var r=i(3345),e=i(5232),o=i(3567),s=i(4717),a=i(184);t.Z=function(n){var t=n.list,i=void 0===t?[]:t,c=(0,s.d)(i.map((function(n){return n.imgurl16v9||n.coverUrl||n.cover})));return(0,a.jsx)(r.$2,{children:c&&i.map((function(n){return(0,a.jsxs)(r.UX,{children:[(0,a.jsxs)(r.lj,{children:[(0,a.jsx)(r.Ar,{src:n.imgurl16v9||n.coverUrl||n.cover}),(0,a.jsxs)(r.e5,{children:[n.playCount&&(0,a.jsxs)(r.mL,{children:[(0,a.jsx)(e.Z,{name:"play-outline",fontSize:"14px"}),(0,o.lt)(n.playCount)]}),(0,a.jsx)(r.AQ,{children:(0,o.LU)(n.duration||n.durationms)})]})]}),n.name||n.title]},n.id||n.vid)}))})}},3345:function(n,t,i){i.d(t,{$2:function(){return f},AQ:function(){return Z},Ar:function(){return j},UX:function(){return x},Zv:function(){return y},e5:function(){return m},eD:function(){return w},lj:function(){return v},m4:function(){return P},mL:function(){return b}});var r,e,o,s,a,c,l,d,u,p,h=i(168),g=i(5751),f=g.ZP.div(r||(r=(0,h.Z)(["\n  display: grid;\n  grid-column-gap: 20px;\n  width: 100%;\n  overflow-x: auto;\n  scrollbar-width: none;\n  grid-template-columns: repeat(10, 240px);\n  position: relative;\n  /* margin-bottom: 20px; */\n  &::-webkit-scrollbar {\n    display: none; /* Chrome Safari */\n  }\n"]))),x=g.ZP.div(e||(e=(0,h.Z)(["\n  width: 100%;\n  flex-shrink: 0;\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n  font-size: 14px;\n"]))),v=g.ZP.div(o||(o=(0,h.Z)(["\n  width: 100%;\n  height: 140px;\n  margin-bottom: 5px;\n  border-radius: 8px;\n  overflow: hidden;\n  position: relative;\n"]))),m=g.ZP.div(s||(s=(0,h.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transition: all .5s;\n  background: linear-gradient(rgba(0, 0, 0, 0.4), transparent, rgba(0, 0, 0, 0.4));\n  &:hover {\n    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));\n  }\n"]))),b=g.ZP.div(a||(a=(0,h.Z)(["\n  position: absolute;\n  top: 5px;\n  right: 10px;\n  display: flex;\n  align-items: center;\n"]))),Z=g.ZP.div(c||(c=(0,h.Z)(["\n  position: absolute;\n  bottom: 5px;\n  right: 10px;\n"]))),j=g.ZP.img(l||(l=(0,h.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),w=g.ZP.div(d||(d=(0,h.Z)(["\n  position: relative;\n  background-color: rgba(155, 178, 210, .4);\n  padding: 30px;\n"]))),y=g.ZP.div(u||(u=(0,h.Z)(["\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),P=g.ZP.div(p||(p=(0,h.Z)(["\n  font-size: 14px;\n  line-height: 20px;\n"])))}}]);
//# sourceMappingURL=81.c3be4050.chunk.js.map