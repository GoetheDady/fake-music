"use strict";(self.webpackChunkmusic=self.webpackChunkmusic||[]).push([[898],{4717:function(n,t,i){i.d(t,{E:function(){return s},d:function(){return c}});var e=i(885),r=i(6871),o=i(2791),a=i(184);function s(n){return function(t){var i=(0,r.TH)(),e=(0,r.UO)(),o=(0,r.s0)();return(0,a.jsx)(n,{location:i,params:e,navigate:o})}}function c(n){var t=(0,o.useState)(!1),i=(0,e.Z)(t,2),r=i[0],a=i[1];return(0,o.useEffect)((function(){if(0!==n.length){var t=n.map((function(n){return new Promise((function(t,i){var e=new Image;e.onload=function(){e.onload=null,t(e)},e.error=function(){i(new Error("\u56fe\u7247\u52a0\u8f7d\u5931\u8d25"))},e.src=n}))}));Promise.all(t).then((function(n){a(!0)}))}}),[n]),0!==n.length&&r}},5297:function(n,t,i){i(2791);var e=i(6203),r=i(184);t.Z=function(n){var t=n.list,i=void 0===t?[]:t,o=n.type,a=void 0===o?"":o,s=n.length,c=void 0===s?6:s,l=function(n){switch(a){case"singer":return n.desciption;case"radio":return n.dj.nickname;default:return n.program.dj.nickname}};return(0,r.jsx)(e.ap,{height:"228px",length:c,children:i.map((function(n){return(0,r.jsxs)(e.q1,{children:[(0,r.jsxs)(e.GU,{children:[(0,r.jsx)(e._v,{src:"singer"===a?n.blurPicUrl:n.picUrl}),(0,r.jsx)(e.NR,{})]}),(0,r.jsxs)(e.HV,{children:[(0,r.jsx)(e.v5,{children:n.name}),(0,r.jsx)(e.AD,{children:l(n)})]})]},n.id)}))})}},1409:function(n,t,i){var e=i(7581),r=i(6203),o=i(9011),a=i(184);t.Z=function(n){var t=n.list,i=void 0===t?[]:t,s=n.type,c=void 0===s?"":s,l=(0,e.I0)();return(0,a.jsx)(r.pA,{height:"180px",children:i.map((function(n){var t;return(0,a.jsxs)(r.NV,{onDoubleClick:function(){!function(n){l({type:o._.PLAYER_ADD_SONG_AND_PLAY,payload:{item:n}})}(n)},children:[(0,a.jsxs)(r.$E,{children:[(0,a.jsx)(r.Qo,{src:"singer"===c?null===(t=n.al)||void 0===t?void 0:t.picUrl:n.picUrl}),(0,a.jsx)(r.B5,{children:(0,a.jsx)("ion-icon",{name:"play"})})]}),(0,a.jsxs)(r.U1,{children:[(0,a.jsx)(r.XD,{children:n.name}),(0,a.jsx)(r.Rg,{children:"singer"===c?n.al.name:n.song.artists.map((function(n){return n.name})).join("/")})]}),(0,a.jsx)(r.t3,{children:(0,a.jsx)("ion-icon",{name:"add-outline"})})]},n.id)}))})}},6203:function(n,t,i){i.d(t,{$E:function(){return Y},AD:function(){return F},B5:function(){return q},CO:function(){return C},GU:function(){return O},HV:function(){return X},NR:function(){return V},NV:function(){return I},Qo:function(){return T},Rg:function(){return K},Sv:function(){return D},U1:function(){return W},WD:function(){return L},XD:function(){return J},Zx:function(){return _},_m:function(){return E},_v:function(){return Q},ap:function(){return R},pA:function(){return G},q1:function(){return H},t3:function(){return B},v5:function(){return $},y2:function(){return N}});var e,r,o,a,s,c,l,u,d,p,f,h,x,g,v,m,Z,b,j,w,y,P,k,z=i(168),U=i(5751),S="\n  display: grid;\n  grid-column-gap: 20px;\n  width: 100%;\n  overflow-x: auto;\n  scrollbar-width: none;\n  position: relative;\n  &::-webkit-scrollbar {\n    display: none; /* Chrome Safari */\n  }\n",A="\n  flex-shrink: 0;\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n",D=U.ZP.div(e||(e=(0,z.Z)(["\n  ","\n  height: ",";\n  grid-template-columns: repeat(",", 214px);\n"])),S,(function(n){return n.height||"auto"}),(function(n){return n.length})),C=U.ZP.div(r||(r=(0,z.Z)(["\n  height: 284px;\n  ","\n"])),A),_=U.ZP.img(o||(o=(0,z.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n"]))),E=U.ZP.div(a||(a=(0,z.Z)(["\n  position: absolute;\n  height: 70px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-image: url(",");\n  background-size: 200%;\n  background-position: 50%;\n  background: rgba(0, 0, 0, .4);\n  backdrop-filter: blur(10px);\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])),(function(n){return n.background})),L=U.ZP.div(s||(s=(0,z.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 70px;\n  opacity: 1;\n  transition: all .5s;\n  background: transparent;\n  &:hover {\n    background: #000;\n    opacity: .4;\n  }\n"]))),N=U.ZP.span(c||(c=(0,z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 5px;\n  padding: 0 20px;\n  > *{\n    margin-right: 4px;\n  }\n"]))),R=U.ZP.div(l||(l=(0,z.Z)(["\n  ","\n  grid-template-columns: repeat(",", 186px);\n  height: ",";\n"])),S,(function(n){return n.length}),(function(n){return n.height||"auto"})),H=U.ZP.div(u||(u=(0,z.Z)(["\n  ","\n"])),A),O=U.ZP.div(d||(d=(0,z.Z)(["\n  width: 100%;\n  height: 186px;\n  margin-bottom: 10px;\n  position: relative;\n"]))),Q=U.ZP.img(p||(p=(0,z.Z)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 8px;\n  object-fit: cover;\n"]))),V=U.ZP.div(f||(f=(0,z.Z)(["\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  opacity: 1;\n  transition: all .5s;\n  background: transparent;\n  &:hover {\n    background: #000;\n    opacity: .4;\n  }\n"]))),X=U.ZP.div(h||(h=(0,z.Z)(["\n  width: 100%;\n  padding: 0 5px;\n  box-sizing: border-box;\n"]))),$=U.ZP.div(x||(x=(0,z.Z)(["\n  width: 100%;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 2px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"]))),F=U.ZP.div(g||(g=(0,z.Z)(["\n  width: 100%;\n  font-size: 12px;\n  font-weight: 300;\n"]))),G=U.ZP.div(v||(v=(0,z.Z)(["\n  display: grid;\n  grid-template-columns: 310px 310px 310px;\n  grid-template-rows: 60px 60px 60px;\n  justify-content: space-between;\n  grid-template-areas:  'a b c'\n                        'd e f'\n                        'g h i';\n  position: relative;\n  height: ",";\n"])),(function(n){return n.height||"auto"})),q=U.ZP.div(m||(m=(0,z.Z)(["\n  display: flex;\n  justify-content: center;\n  font-size: 20px;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  opacity: 0;\n  transition: all .5s;\n  background: rgba(0, 0, 0, .4);\n"]))),B=U.ZP.div(Z||(Z=(0,z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 30px;\n  font-size: 20px;\n  opacity: 0;\n  >ion-icon {\n    cursor: pointer;\n    &:active {\n      color: grey;\n    }\n  }\n"]))),I=U.ZP.div(b||(b=(0,z.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: .5px solid rgba(0, 0, 0, .1);\n  &:hover {\n    "," {\n      opacity: 1;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"])),q,B),Y=U.ZP.div(j||(j=(0,z.Z)(["\n  width: 40px;\n  height: 40px;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-right: 10px;\n  position: relative;\n"]))),T=U.ZP.img(w||(w=(0,z.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),W=U.ZP.div(y||(y=(0,z.Z)(["\n  flex: 1;\n"]))),J=U.ZP.div(P||(P=(0,z.Z)(["\n  font-size: 14px;\n  margin-bottom: 2px;\n"]))),K=U.ZP.div(k||(k=(0,z.Z)(["\n  font-size: 12px;\n  font-weight: 300;\n"])))},6763:function(n,t,i){i(2791);var e=i(3345),r=i(5232),o=i(3567),a=i(4717),s=i(184);t.Z=function(n){var t=n.list,i=void 0===t?[]:t,c=(0,a.d)(i.map((function(n){return n.imgurl16v9||n.coverUrl||n.cover})));return(0,s.jsx)(e.$2,{children:c&&i.map((function(n){return(0,s.jsxs)(e.UX,{children:[(0,s.jsxs)(e.lj,{children:[(0,s.jsx)(e.Ar,{src:n.imgurl16v9||n.coverUrl||n.cover}),(0,s.jsxs)(e.e5,{children:[n.playCount&&(0,s.jsxs)(e.mL,{children:[(0,s.jsx)(r.Z,{name:"play-outline",fontSize:"14px"}),(0,o.lt)(n.playCount)]}),(0,s.jsx)(e.AQ,{children:(0,o.LU)(n.duration||n.durationms)})]})]}),n.name||n.title]},n.id||n.vid)}))})}},3345:function(n,t,i){i.d(t,{$2:function(){return x},AQ:function(){return b},Ar:function(){return j},UX:function(){return g},Zv:function(){return y},e5:function(){return m},eD:function(){return w},lj:function(){return v},m4:function(){return P},mL:function(){return Z}});var e,r,o,a,s,c,l,u,d,p,f=i(168),h=i(5751),x=h.ZP.div(e||(e=(0,f.Z)(["\n  display: grid;\n  grid-column-gap: 20px;\n  width: 100%;\n  overflow-x: auto;\n  scrollbar-width: none;\n  grid-template-columns: repeat(10, 240px);\n  position: relative;\n  /* margin-bottom: 20px; */\n  &::-webkit-scrollbar {\n    display: none; /* Chrome Safari */\n  }\n"]))),g=h.ZP.div(r||(r=(0,f.Z)(["\n  width: 100%;\n  flex-shrink: 0;\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n  font-size: 14px;\n"]))),v=h.ZP.div(o||(o=(0,f.Z)(["\n  width: 100%;\n  height: 140px;\n  margin-bottom: 5px;\n  border-radius: 8px;\n  overflow: hidden;\n  position: relative;\n"]))),m=h.ZP.div(a||(a=(0,f.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transition: all .5s;\n  background: linear-gradient(rgba(0, 0, 0, 0.4), transparent, rgba(0, 0, 0, 0.4));\n  &:hover {\n    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));\n  }\n"]))),Z=h.ZP.div(s||(s=(0,f.Z)(["\n  position: absolute;\n  top: 5px;\n  right: 10px;\n  display: flex;\n  align-items: center;\n"]))),b=h.ZP.div(c||(c=(0,f.Z)(["\n  position: absolute;\n  bottom: 5px;\n  right: 10px;\n"]))),j=h.ZP.img(l||(l=(0,f.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),w=h.ZP.div(u||(u=(0,f.Z)(["\n  position: relative;\n  background-color: rgba(155, 178, 210, .4);\n  padding: 30px;\n"]))),y=h.ZP.div(d||(d=(0,f.Z)(["\n  font-size: 18px;\n  margin-bottom: 10px;\n"]))),P=h.ZP.div(p||(p=(0,f.Z)(["\n  font-size: 14px;\n  line-height: 20px;\n"])))},2898:function(n,t,i){i.r(t),i.d(t,{default:function(){return D}});var e,r,o,a,s,c,l,u=i(885),d=i(2791),p=i(6871),f=i(168),h=i(5751),x=h.ZP.div(e||(e=(0,f.Z)(["\n  width: 100%;\n  overflow: auto;\n  scrollbar-width: none;\n  &::-webkit-scrollbar {\n    display: none; /* Chrome Safari */\n  }\n"]))),g=h.ZP.div(r||(r=(0,f.Z)(["\n  width: 100%;\n  height: 430px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  background-color: rgba(155, 178, 210, .4);\n"]))),v=h.ZP.img(o||(o=(0,f.Z)(["\n  width: 170px;\n  height: 170px;\n  object-fit: cover;\n  border-radius: 85px;\n  box-shadow: 0 2px 10px grey;\n"]))),m=h.ZP.div(a||(a=(0,f.Z)(["\n  position: absolute;\n  left: 30px;\n  bottom: 20px;\n  display: flex;\n  align-items: center;\n  font-size: 24px;\n  font-weight: bold;\n  * {\n    margin-right: 5px;\n  }\n"]))),Z=h.ZP.div(s||(s=(0,f.Z)(["\n  width: 100%;\n  padding: 0 30px;\n  box-sizing: border-box;\n"]))),b=h.ZP.div(c||(c=(0,f.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: 14px;\n  width: 100%;\n  padding-bottom: 10px;\n  border-bottom: 1px solid rgba(155, 178, 210, .4);\n  margin-top: 20px;\n  margin-bottom: 10px;\n"]))),j=h.ZP.div(l||(l=(0,f.Z)(["\n  font-size: 14px;\n  color: rgba(155, 178, 210);\n  cursor: default;\n  user-select: none;\n"]))),w=i(9396),y=i(1409),P=i(5297),k=i(6763),z=i(3345),U=i(184);var S=function(n){var t=n.artics;return(0,U.jsxs)(z.eD,{children:[(0,U.jsxs)(z.Zv,{children:["\u201c",t.name,"\u201d\u7b80\u4ecb"]}),(0,U.jsx)(z.m4,{children:t.briefDesc})]})},A=i(5232);var D=function(){var n=(0,p.UO)(),t=(0,d.useState)({}),i=(0,u.Z)(t,2),e=i[0],r=i[1],o=(0,d.useState)([]),a=(0,u.Z)(o,2),s=a[0],c=a[1],l=(0,d.useState)([]),f=(0,u.Z)(l,2),h=f[0],z=f[1],D=(0,d.useState)([]),C=(0,u.Z)(D,2),_=C[0],E=C[1],L=(0,p.s0)();return(0,d.useEffect)((function(){!function(){var t=n.id;w.Z.get("/artists?id=".concat(t)).then((function(n){var t=n.artist,i=n.hotSongs;r(t),c(i.slice(0,9))})),w.Z.get("/artist/album",{params:{id:t,limit:10}}).then((function(n){var t=n.hotAlbums;z(t)})),w.Z.get("/artist/mv",{params:{id:t,limit:10}}).then((function(n){var t=n.mvs;E(t)}))}()}),[]),(0,U.jsxs)(x,{children:[(0,U.jsxs)(g,{children:[(0,U.jsx)(v,{src:e.picUrl}),(0,U.jsxs)(m,{children:[(0,U.jsx)(A.Z,{name:"play-circle",fontSize:"40px"}),e.name]})]}),(0,U.jsxs)(Z,{children:[0!==s.length&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(b,{children:["\u70ed\u95e8\u6b4c\u66f2",(0,U.jsx)(j,{onClick:function(){L("/singerHotSongsList/".concat(n.id))},children:"\u663e\u793a\u5168\u90e8"})]}),(0,U.jsx)(y.Z,{list:s,type:"singer"})]}),0!==h.length&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(b,{children:["\u4e13\u8f91",(0,U.jsx)(j,{children:"\u663e\u793a\u5168\u90e8"})]}),(0,U.jsx)(P.Z,{list:h,type:"singer",length:10})]}),0!==_.length&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(b,{children:["\u70ed\u95e8\u89c6\u9891",(0,U.jsx)(j,{children:"\u663e\u793a\u5168\u90e8"})]}),(0,U.jsx)(k.Z,{list:_})]})]}),(0,U.jsx)(S,{artics:e})]})}}}]);
//# sourceMappingURL=898.23a749ac.chunk.js.map