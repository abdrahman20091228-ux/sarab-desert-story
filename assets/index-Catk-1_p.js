(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const so="172",Il=0,Io=1,Dl=2,ro=1,Va=2,pn=3,xn=0,Ae=1,ye=2,Tn=0,_i=1,mr=2,Do=3,Uo=4,Ul=5,zn=100,Fl=101,Nl=102,Bl=103,Ol=104,zl=200,kl=201,Gl=202,Hl=203,gr=204,_r=205,Vl=206,Wl=207,Xl=208,ql=209,Yl=210,jl=211,Zl=212,$l=213,Kl=214,xr=0,vr=1,Mr=2,Mi=3,yr=4,Sr=5,Er=6,wr=7,Wa=0,Jl=1,Ql=2,An=0,tc=1,ec=2,nc=3,Xa=4,ic=5,sc=6,rc=7,qa=300,yi=301,Si=302,br=303,Tr=304,Ds=306,Yn=1e3,Hn=1001,Ar=1002,We=1003,oc=1004,Qi=1005,on=1006,Bs=1007,Vn=1008,vn=1009,Ya=1010,ja=1011,Yi=1012,oo=1013,jn=1014,an=1015,$i=1016,ao=1017,lo=1018,Ei=1020,Za=35902,$a=1021,Ka=1022,en=1023,Ja=1024,Qa=1025,xi=1026,wi=1027,co=1028,ho=1029,tl=1030,uo=1031,fo=1033,ws=33776,bs=33777,Ts=33778,As=33779,Cr=35840,Rr=35841,Pr=35842,Lr=35843,Ir=36196,Dr=37492,Ur=37496,Fr=37808,Nr=37809,Br=37810,Or=37811,zr=37812,kr=37813,Gr=37814,Hr=37815,Vr=37816,Wr=37817,Xr=37818,qr=37819,Yr=37820,jr=37821,Cs=36492,Zr=36494,$r=36495,el=36283,Kr=36284,Jr=36285,Qr=36286,ac=3200,lc=3201,nl=0,cc=1,sn="",Ie="srgb",bi="srgb-linear",Ps="linear",ie="srgb",Jn=7680,Fo=519,hc=512,uc=513,dc=514,il=515,fc=516,pc=517,mc=518,gc=519,No=35044,Bo="300 es",gn=2e3,Ls=2001;class Ai{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oo=1234567;const Xi=Math.PI/180,ji=180/Math.PI;function Ci(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[s&255]+Pe[s>>8&255]+Pe[s>>16&255]+Pe[s>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function kt(s,t,e){return Math.max(t,Math.min(e,s))}function po(s,t){return(s%t+t)%t}function _c(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function xc(s,t,e){return s!==t?(e-s)/(t-s):0}function qi(s,t,e){return(1-e)*s+e*t}function vc(s,t,e,n){return qi(s,t,1-Math.exp(-e*n))}function Mc(s,t=1){return t-Math.abs(po(s,t*2)-t)}function yc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Sc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Ec(s,t){return s+Math.floor(Math.random()*(t-s+1))}function wc(s,t){return s+Math.random()*(t-s)}function bc(s){return s*(.5-Math.random())}function Tc(s){s!==void 0&&(Oo=s);let t=Oo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ac(s){return s*Xi}function Cc(s){return s*ji}function Rc(s){return(s&s-1)===0&&s!==0}function Pc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Lc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ic(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*d,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*p,a*c);break;case"YXY":s.set(l*p,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ue(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const xt={DEG2RAD:Xi,RAD2DEG:ji,generateUUID:Ci,clamp:kt,euclideanModulo:po,mapLinear:_c,inverseLerp:xc,lerp:qi,damp:vc,pingpong:Mc,smoothstep:yc,smootherstep:Sc,randInt:Ec,randFloat:wc,randFloatSpread:bc,seededRandom:Tc,degToRad:Ac,radToDeg:Cc,isPowerOfTwo:Rc,ceilPowerOfTwo:Pc,floorPowerOfTwo:Lc,setQuaternionFromProperEuler:Ic,normalize:Ue,denormalize:fi};class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,i,r,o,a,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],v=i[1],S=i[4],x=i[7],R=i[2],A=i[5],T=i[8];return r[0]=o*_+a*v+l*R,r[3]=o*m+a*S+l*A,r[6]=o*f+a*x+l*T,r[1]=c*_+h*v+d*R,r[4]=c*m+h*S+d*A,r[7]=c*f+h*x+d*T,r[2]=u*_+p*v+g*R,r[5]=u*m+p*S+g*A,r[8]=u*f+p*x+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,p=c*r-o*l,g=e*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Os.makeScale(t,e)),this}rotate(t){return this.premultiply(Os.makeRotation(-t)),this}translate(t,e){return this.premultiply(Os.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Os=new Ft;function sl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Zi(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Dc(){const s=Zi("canvas");return s.style.display="block",s}const zo={};function pi(s){s in zo||(zo[s]=!0,console.warn(s))}function Uc(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Fc(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Nc(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ko=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Go=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bc(){const s={enabled:!0,workingColorSpace:bi,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ie&&(i.r=_n(i.r),i.g=_n(i.g),i.b=_n(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ie&&(i.r=vi(i.r),i.g=vi(i.g),i.b=vi(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===sn?Ps:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[bi]:{primaries:t,whitePoint:n,transfer:Ps,toXYZ:ko,fromXYZ:Go,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:ko,fromXYZ:Go,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),s}const Jt=Bc();function _n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function vi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Qn;class Oc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Qn===void 0&&(Qn=Zi("canvas")),Qn.width=t.width,Qn.height=t.height;const n=Qn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Qn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=_n(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_n(e[n]/255)*255):e[n]=_n(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zc=0;class rl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zc++}),this.uuid=Ci(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(zs(i[o].image)):r.push(zs(i[o]))}else r=zs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function zs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Oc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kc=0;class Ce extends Ai{constructor(t=Ce.DEFAULT_IMAGE,e=Ce.DEFAULT_MAPPING,n=Hn,i=Hn,r=on,o=Vn,a=en,l=vn,c=Ce.DEFAULT_ANISOTROPY,h=sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kc++}),this.uuid=Ci(),this.name="",this.source=new rl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yn:t.x=t.x-Math.floor(t.x);break;case Hn:t.x=t.x<0?0:1;break;case Ar:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yn:t.y=t.y-Math.floor(t.y);break;case Hn:t.y=t.y<0?0:1;break;case Ar:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ce.DEFAULT_IMAGE=null;Ce.DEFAULT_MAPPING=qa;Ce.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,i=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,x=(p+1)/2,R=(f+1)/2,A=(h+u)/4,T=(d+_)/4,C=(g+m)/4;return S>x&&S>R?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=A/n,r=T/n):x>R?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=C/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=T/r,i=C/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gc extends Ai{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ce(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new rl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Gc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ol extends Ce{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=We,this.minFilter=We,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hc extends Ce{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=We,this.minFilter=We,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==u||c!==p||h!==g){let m=1-a;const f=l*u+c*p+h*g+d*_,v=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const R=Math.sqrt(S),A=Math.atan2(R,f*v);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const x=a*v;if(l=l*m+u*x,c=c*m+p*x,h=h*m+g*x,d=d*m+_*x,m===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-a*p,t[e+2]=c*g+h*p+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),p=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ho.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ho.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ks.copy(this).projectOnVector(t),this.sub(ks)}reflect(t){return this.sub(ks.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ks=new L,Ho=new Cn;class $n{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ke):Ke.fromBufferAttribute(r,o),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ts.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ts.copy(n.boundingBox)),ts.applyMatrix4(t.matrixWorld),this.union(ts)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Di),es.subVectors(this.max,Di),ti.subVectors(t.a,Di),ei.subVectors(t.b,Di),ni.subVectors(t.c,Di),Mn.subVectors(ei,ti),yn.subVectors(ni,ei),Ln.subVectors(ti,ni);let e=[0,-Mn.z,Mn.y,0,-yn.z,yn.y,0,-Ln.z,Ln.y,Mn.z,0,-Mn.x,yn.z,0,-yn.x,Ln.z,0,-Ln.x,-Mn.y,Mn.x,0,-yn.y,yn.x,0,-Ln.y,Ln.x,0];return!Gs(e,ti,ei,ni,es)||(e=[1,0,0,0,1,0,0,0,1],!Gs(e,ti,ei,ni,es))?!1:(ns.crossVectors(Mn,yn),e=[ns.x,ns.y,ns.z],Gs(e,ti,ei,ni,es))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const cn=[new L,new L,new L,new L,new L,new L,new L,new L],Ke=new L,ts=new $n,ti=new L,ei=new L,ni=new L,Mn=new L,yn=new L,Ln=new L,Di=new L,es=new L,ns=new L,In=new L;function Gs(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){In.fromArray(s,r);const a=i.x*Math.abs(In.x)+i.y*Math.abs(In.y)+i.z*Math.abs(In.z),l=t.dot(In),c=e.dot(In),h=n.dot(In);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Vc=new $n,Ui=new L,Hs=new L;class Ri{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Vc.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ui.subVectors(t,this.center);const e=Ui.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ui,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ui.copy(t.center).add(Hs)),this.expandByPoint(Ui.copy(t.center).sub(Hs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new L,Vs=new L,is=new L,Sn=new L,Ws=new L,ss=new L,Xs=new L;class al{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(hn.copy(this.origin).addScaledVector(this.direction,e),hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Vs.copy(t).add(e).multiplyScalar(.5),is.copy(e).sub(t).normalize(),Sn.copy(this.origin).sub(Vs);const r=t.distanceTo(e)*.5,o=-this.direction.dot(is),a=Sn.dot(this.direction),l=-Sn.dot(is),c=Sn.lengthSq(),h=Math.abs(1-o*o);let d,u,p,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Vs).addScaledVector(is,u),p}intersectSphere(t,e){hn.subVectors(t.center,this.origin);const n=hn.dot(this.direction),i=hn.dot(hn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,hn)!==null}intersectTriangle(t,e,n,i,r){Ws.subVectors(e,t),ss.subVectors(n,t),Xs.crossVectors(Ws,ss);let o=this.direction.dot(Xs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sn.subVectors(this.origin,t);const l=a*this.direction.dot(ss.crossVectors(Sn,ss));if(l<0)return null;const c=a*this.direction.dot(Ws.cross(Sn));if(c<0||l+c>o)return null;const h=-a*Sn.dot(Xs);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yt{constructor(t,e,n,i,r,o,a,l,c,h,d,u,p,g,_,m){Yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,p,g,_,m)}set(t,e,n,i,r,o,a,l,c,h,d,u,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ii.setFromMatrixColumn(t,0).length(),r=1/ii.setFromMatrixColumn(t,1).length(),o=1/ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,p=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,p=l*d,g=c*h,_=c*d;e[0]=u+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,p=l*d,g=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,p=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wc,t,Xc)}lookAt(t,e,n){const i=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),En.crossVectors(n,Ge),En.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),En.crossVectors(n,Ge)),En.normalize(),rs.crossVectors(Ge,En),i[0]=En.x,i[4]=rs.x,i[8]=Ge.x,i[1]=En.y,i[5]=rs.y,i[9]=Ge.y,i[2]=En.z,i[6]=rs.z,i[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],v=n[3],S=n[7],x=n[11],R=n[15],A=i[0],T=i[4],C=i[8],E=i[12],M=i[1],P=i[5],N=i[9],B=i[13],V=i[2],q=i[6],W=i[10],K=i[14],G=i[3],Y=i[7],ot=i[11],vt=i[15];return r[0]=o*A+a*M+l*V+c*G,r[4]=o*T+a*P+l*q+c*Y,r[8]=o*C+a*N+l*W+c*ot,r[12]=o*E+a*B+l*K+c*vt,r[1]=h*A+d*M+u*V+p*G,r[5]=h*T+d*P+u*q+p*Y,r[9]=h*C+d*N+u*W+p*ot,r[13]=h*E+d*B+u*K+p*vt,r[2]=g*A+_*M+m*V+f*G,r[6]=g*T+_*P+m*q+f*Y,r[10]=g*C+_*N+m*W+f*ot,r[14]=g*E+_*B+m*K+f*vt,r[3]=v*A+S*M+x*V+R*G,r[7]=v*T+S*P+x*q+R*Y,r[11]=v*C+S*N+x*W+R*ot,r[15]=v*E+S*B+x*K+R*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*d-i*c*d-r*a*u+n*c*u+i*a*p-n*l*p)+_*(+e*l*p-e*c*u+r*o*u-i*o*p+i*c*h-r*l*h)+m*(+e*c*d-e*a*p-r*o*d+n*o*p+r*a*h-n*c*h)+f*(-i*a*h-e*l*d+e*a*u+i*o*d-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],v=d*m*c-_*u*c+_*l*p-a*m*p-d*l*f+a*u*f,S=g*u*c-h*m*c-g*l*p+o*m*p+h*l*f-o*u*f,x=h*_*c-g*d*c+g*a*p-o*_*p-h*a*f+o*d*f,R=g*d*l-h*_*l-g*a*u+o*_*u+h*a*m-o*d*m,A=e*v+n*S+i*x+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=v*T,t[1]=(_*u*r-d*m*r-_*i*p+n*m*p+d*i*f-n*u*f)*T,t[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*f+n*l*f)*T,t[3]=(d*l*r-a*u*r-d*i*c+n*u*c+a*i*p-n*l*p)*T,t[4]=S*T,t[5]=(h*m*r-g*u*r+g*i*p-e*m*p-h*i*f+e*u*f)*T,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*f-e*l*f)*T,t[7]=(o*u*r-h*l*r+h*i*c-e*u*c-o*i*p+e*l*p)*T,t[8]=x*T,t[9]=(g*d*r-h*_*r-g*n*p+e*_*p+h*n*f-e*d*f)*T,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*f+e*a*f)*T,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*p-e*a*p)*T,t[12]=R*T,t[13]=(h*_*i-g*d*i+g*n*u-e*_*u-h*n*m+e*d*m)*T,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*T,t[15]=(o*d*i-h*a*i+h*n*l-e*d*l-o*n*u+e*a*u)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,p=r*h,g=r*d,_=o*h,m=o*d,f=a*d,v=l*c,S=l*h,x=l*d,R=n.x,A=n.y,T=n.z;return i[0]=(1-(_+f))*R,i[1]=(p+x)*R,i[2]=(g-S)*R,i[3]=0,i[4]=(p-x)*A,i[5]=(1-(u+f))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(g+S)*T,i[9]=(m-v)*T,i[10]=(1-(u+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ii.set(i[0],i[1],i[2]).length();const o=ii.set(i[4],i[5],i[6]).length(),a=ii.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Je.copy(this);const c=1/r,h=1/o,d=1/a;return Je.elements[0]*=c,Je.elements[1]*=c,Je.elements[2]*=c,Je.elements[4]*=h,Je.elements[5]*=h,Je.elements[6]*=h,Je.elements[8]*=d,Je.elements[9]*=d,Je.elements[10]*=d,e.setFromRotationMatrix(Je),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=gn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let p,g;if(a===gn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ls)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=gn){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(o-r),u=(e+t)*c,p=(n+i)*h;let g,_;if(a===gn)g=(o+r)*d,_=-2*d;else if(a===Ls)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ii=new L,Je=new Yt,Wc=new L(0,0,0),Xc=new L(1,1,1),En=new L,rs=new L,Ge=new L,Vo=new Yt,Wo=new Cn;class Oe{constructor(t=0,e=0,n=0,i=Oe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Vo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wo.setFromEuler(this),this.setFromQuaternion(Wo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oe.DEFAULT_ORDER="XYZ";class ll{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qc=0;const Xo=new L,si=new Cn,un=new Yt,os=new L,Fi=new L,Yc=new L,jc=new Cn,qo=new L(1,0,0),Yo=new L(0,1,0),jo=new L(0,0,1),Zo={type:"added"},Zc={type:"removed"},ri={type:"childadded",child:null},qs={type:"childremoved",child:null};class xe extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new L,e=new Oe,n=new Cn,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Ft}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.multiply(si),this}rotateOnWorldAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.premultiply(si),this}rotateX(t){return this.rotateOnAxis(qo,t)}rotateY(t){return this.rotateOnAxis(Yo,t)}rotateZ(t){return this.rotateOnAxis(jo,t)}translateOnAxis(t,e){return Xo.copy(t).applyQuaternion(this.quaternion),this.position.add(Xo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qo,t)}translateY(t){return this.translateOnAxis(Yo,t)}translateZ(t){return this.translateOnAxis(jo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?os.copy(t):os.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Fi,os,this.up):un.lookAt(os,Fi,this.up),this.quaternion.setFromRotationMatrix(un),i&&(un.extractRotation(i.matrixWorld),si.setFromRotationMatrix(un),this.quaternion.premultiply(si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zo),ri.child=t,this.dispatchEvent(ri),ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zc),qs.child=t,this.dispatchEvent(qs),qs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),un.multiply(t.parent.matrixWorld)),t.applyMatrix4(un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zo),ri.child=t,this.dispatchEvent(ri),ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,t,Yc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,jc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}xe.DEFAULT_UP=new L(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qe=new L,dn=new L,Ys=new L,fn=new L,oi=new L,ai=new L,$o=new L,js=new L,Zs=new L,$s=new L,Ks=new se,Js=new se,Qs=new se;class tn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Qe.subVectors(t,e),i.cross(Qe);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Qe.subVectors(i,e),dn.subVectors(n,e),Ys.subVectors(t,e);const o=Qe.dot(Qe),a=Qe.dot(dn),l=Qe.dot(Ys),c=dn.dot(dn),h=dn.dot(Ys),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fn.x),l.addScaledVector(o,fn.y),l.addScaledVector(a,fn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Ks.setScalar(0),Js.setScalar(0),Qs.setScalar(0),Ks.fromBufferAttribute(t,e),Js.fromBufferAttribute(t,n),Qs.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Ks,r.x),o.addScaledVector(Js,r.y),o.addScaledVector(Qs,r.z),o}static isFrontFacing(t,e,n,i){return Qe.subVectors(n,e),dn.subVectors(t,e),Qe.cross(dn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Qe.cross(dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return tn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;oi.subVectors(i,n),ai.subVectors(r,n),js.subVectors(t,n);const l=oi.dot(js),c=ai.dot(js);if(l<=0&&c<=0)return e.copy(n);Zs.subVectors(t,i);const h=oi.dot(Zs),d=ai.dot(Zs);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(oi,o);$s.subVectors(t,r);const p=oi.dot($s),g=ai.dot($s);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ai,a);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return $o.subVectors(r,i),a=(d-h)/(d-h+(p-g)),e.copy(i).addScaledVector($o,a);const f=1/(m+_+u);return o=_*f,a=u*f,e.copy(n).addScaledVector(oi,o).addScaledVector(ai,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},as={h:0,s:0,l:0};function tr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ct{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Jt.workingColorSpace){if(t=po(t,1),e=kt(e,0,1),n=kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=tr(o,r,t+1/3),this.g=tr(o,r,t),this.b=tr(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const n=cl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_n(t.r),this.g=_n(t.g),this.b=_n(t.b),this}copyLinearToSRGB(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return Jt.fromWorkingColorSpace(Le.copy(this),t),Math.round(kt(Le.r*255,0,255))*65536+Math.round(kt(Le.g*255,0,255))*256+Math.round(kt(Le.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Le.copy(this),e);const n=Le.r,i=Le.g,r=Le.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=Ie){Jt.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,i=Le.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(wn),this.setHSL(wn.h+t,wn.s+e,wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wn),t.getHSL(as);const n=qi(wn.h,as.h,e),i=qi(wn.s,as.s,e),r=qi(wn.l,as.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new ct;ct.NAMES=cl;let $c=0;class Pi extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=_i,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gr,this.blendDst=_r,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jn,this.stencilZFail=Jn,this.stencilZPass=Jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gr&&(n.blendSrc=this.blendSrc),this.blendDst!==_r&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class rn extends Pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oe,this.combine=Wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new L,ls=new Ct;class Qt{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=No,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ls.fromBufferAttribute(this,e),ls.applyMatrix3(t),this.setXY(e,ls.x,ls.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==No&&(t.usage=this.usage),t}}class hl extends Qt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ul extends Qt{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ce extends Qt{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Kc=0;const je=new Yt,er=new xe,li=new L,He=new $n,Ni=new $n,we=new L;class me extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sl(t)?ul:hl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return er.lookAt(t),er.updateMatrix(),this.applyMatrix4(er.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(li).negate(),this.translate(li.x,li.y,li.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ce(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];He.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ni.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(He.min,Ni.min),He.expandByPoint(we),we.addVectors(He.max,Ni.max),He.expandByPoint(we)):(He.expandByPoint(Ni.min),He.expandByPoint(Ni.max))}He.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)we.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(we));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)we.fromBufferAttribute(a,c),l&&(li.fromBufferAttribute(t,c),we.add(li)),i=Math.max(i,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new L,l[C]=new L;const c=new L,h=new L,d=new L,u=new Ct,p=new Ct,g=new Ct,_=new L,m=new L;function f(C,E,M){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,M),u.fromBufferAttribute(r,C),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(c),d.sub(c),p.sub(u),g.sub(u);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[C].add(_),a[E].add(_),a[M].add(_),l[C].add(m),l[E].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,E=v.length;C<E;++C){const M=v[C],P=M.start,N=M.count;for(let B=P,V=P+N;B<V;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const S=new L,x=new L,R=new L,A=new L;function T(C){R.fromBufferAttribute(i,C),A.copy(R);const E=a[C];S.copy(E),S.sub(R.multiplyScalar(R.dot(E))).normalize(),x.crossVectors(A,E);const P=x.dot(l[C])<0?-1:1;o.setXYZW(C,S.x,S.y,S.z,P)}for(let C=0,E=v.length;C<E;++C){const M=v[C],P=M.start,N=M.count;for(let B=P,V=P+N;B<V;B+=3)T(t.getX(B+0)),T(t.getX(B+1)),T(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,d=new L;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new Qt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new me,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ko=new Yt,Dn=new al,cs=new Ri,Jo=new L,hs=new L,us=new L,ds=new L,nr=new L,fs=new L,Qo=new L,ps=new L;class ut extends xe{constructor(t=new me,e=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){fs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(nr.fromBufferAttribute(d,t),o?fs.addScaledVector(nr,h):fs.addScaledVector(nr.sub(e),h))}e.add(fs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(r),Dn.copy(t.ray).recast(t.near),!(cs.containsPoint(Dn.origin)===!1&&(Dn.intersectSphere(cs,Jo)===null||Dn.origin.distanceToSquared(Jo)>(t.far-t.near)**2))&&(Ko.copy(r).invert(),Dn.copy(t.ray).applyMatrix4(Ko),!(n.boundingBox!==null&&Dn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Dn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,R=S;x<R;x+=3){const A=a.getX(x),T=a.getX(x+1),C=a.getX(x+2);i=ms(this,f,t,n,c,h,d,A,T,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);i=ms(this,o,t,n,c,h,d,v,S,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,R=S;x<R;x+=3){const A=x,T=x+1,C=x+2;i=ms(this,f,t,n,c,h,d,A,T,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const v=m,S=m+1,x=m+2;i=ms(this,o,t,n,c,h,d,v,S,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Jc(s,t,e,n,i,r,o,a){let l;if(t.side===Ae?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===xn,a),l===null)return null;ps.copy(a),ps.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ps);return c<e.near||c>e.far?null:{distance:c,point:ps.clone(),object:s}}function ms(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,hs),s.getVertexPosition(l,us),s.getVertexPosition(c,ds);const h=Jc(s,t,e,n,hs,us,ds,Qo);if(h){const d=new L;tn.getBarycoord(Qo,hs,us,ds,d),i&&(h.uv=tn.getInterpolatedAttribute(i,a,l,c,d,new Ct)),r&&(h.uv1=tn.getInterpolatedAttribute(r,a,l,c,d,new Ct)),o&&(h.normal=tn.getInterpolatedAttribute(o,a,l,c,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new L,materialIndex:0};tn.getNormal(hs,us,ds,u.normal),h.face=u,h.barycoord=d}return h}class At extends me{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2));function g(_,m,f,v,S,x,R,A,T,C,E){const M=x/T,P=R/C,N=x/2,B=R/2,V=A/2,q=T+1,W=C+1;let K=0,G=0;const Y=new L;for(let ot=0;ot<W;ot++){const vt=ot*P-B;for(let Rt=0;Rt<q;Rt++){const Gt=Rt*M-N;Y[_]=Gt*v,Y[m]=vt*S,Y[f]=V,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[f]=A>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(Rt/T),d.push(1-ot/C),K+=1}}for(let ot=0;ot<C;ot++)for(let vt=0;vt<T;vt++){const Rt=u+vt+q*ot,Gt=u+vt+q*(ot+1),X=u+(vt+1)+q*(ot+1),et=u+(vt+1)+q*ot;l.push(Rt,Gt,et),l.push(Gt,X,et),G+=6}a.addGroup(p,G,E),p+=G,u+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new At(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ti(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Fe(s){const t={};for(let e=0;e<s.length;e++){const n=Ti(s[e]);for(const i in n)t[i]=n[i]}return t}function Qc(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function dl(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const th={clone:Ti,merge:Fe};var eh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ze extends Pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eh,this.fragmentShader=nh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ti(t.uniforms),this.uniformsGroups=Qc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class fl extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bn=new L,ta=new Ct,ea=new Ct;class Ve extends fl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ji*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ji*2*Math.atan(Math.tan(Xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bn.x,bn.y).multiplyScalar(-t/bn.z),bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bn.x,bn.y).multiplyScalar(-t/bn.z)}getViewSize(t,e){return this.getViewBounds(t,ta,ea),e.subVectors(ea,ta)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ci=-90,hi=1;class ih extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ve(ci,hi,t,e);i.layers=this.layers,this.add(i);const r=new Ve(ci,hi,t,e);r.layers=this.layers,this.add(r);const o=new Ve(ci,hi,t,e);o.layers=this.layers,this.add(o);const a=new Ve(ci,hi,t,e);a.layers=this.layers,this.add(a);const l=new Ve(ci,hi,t,e);l.layers=this.layers,this.add(l);const c=new Ve(ci,hi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class pl extends Ce{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:yi,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sh extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new pl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new At(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ae,blending:Tn});r.uniforms.tEquirect.value=e;const o=new ut(i,r),a=e.minFilter;return e.minFilter===Vn&&(e.minFilter=on),new ih(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class mo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ct(t),this.density=e}clone(){return new mo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ml extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oe,this.environmentIntensity=1,this.environmentRotation=new Oe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class rh extends Ce{constructor(t=null,e=1,n=1,i,r,o,a,l,c=We,h=We,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class to extends Qt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ui=new Yt,na=new Yt,gs=[],ia=new $n,oh=new Yt,Bi=new ut,Oi=new Ri;class Be extends ut{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new to(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,oh)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $n),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ui),ia.copy(t.boundingBox).applyMatrix4(ui),this.boundingBox.union(ia)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ui),Oi.copy(t.boundingSphere).applyMatrix4(ui),this.boundingSphere.union(Oi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Bi.geometry=this.geometry,Bi.material=this.material,Bi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oi.copy(this.boundingSphere),Oi.applyMatrix4(n),t.ray.intersectsSphere(Oi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ui),na.multiplyMatrices(n,ui),Bi.matrixWorld=na,Bi.raycast(t,gs);for(let o=0,a=gs.length;o<a;o++){const l=gs[o];l.instanceId=r,l.object=this,e.push(l)}gs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new to(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new rh(new Float32Array(i*this.count),i,this.count,co,an));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const ir=new L,ah=new L,lh=new Ft;class Bn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ir.subVectors(n,e).cross(ah.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ir),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||lh.getNormalMatrix(t),i=this.coplanarPoint(ir).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new Ri,_s=new L;class go{constructor(t=new Bn,e=new Bn,n=new Bn,i=new Bn,r=new Bn,o=new Bn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=gn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],v=i[13],S=i[14],x=i[15];if(n[0].setComponents(l-r,u-c,m-p,x-f).normalize(),n[1].setComponents(l+r,u+c,m+p,x+f).normalize(),n[2].setComponents(l+o,u+h,m+g,x+v).normalize(),n[3].setComponents(l-o,u-h,m-g,x-v).normalize(),n[4].setComponents(l-a,u-d,m-_,x-S).normalize(),e===gn)n[5].setComponents(l+a,u+d,m+_,x+S).normalize();else if(e===Ls)n[5].setComponents(a,d,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(t){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(t.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(_s.x=i.normal.x>0?t.max.x:t.min.x,_s.y=i.normal.y>0?t.max.y:t.min.y,_s.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(_s)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ch extends Pi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const sa=new Yt,eo=new al,xs=new Ri,vs=new L;class hh extends xe{constructor(t=new me,e=new ch){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(i),xs.radius+=r,t.ray.intersectsSphere(xs)===!1)return;sa.copy(i).invert(),eo.copy(t.ray).applyMatrix4(sa);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,_=p;g<_;g++){const m=c.getX(g);vs.fromBufferAttribute(d,m),ra(vs,m,l,i,t,e,this)}}else{const u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=u,_=p;g<_;g++)vs.fromBufferAttribute(d,g),ra(vs,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ra(s,t,e,n,i,r,o){const a=eo.distanceSqToPoint(s);if(a<e){const l=new L;eo.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Te extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Ms extends Ce{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gl extends Ce{constructor(t,e,n,i,r,o,a,l,c,h=xi){if(h!==xi&&h!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xi&&(n=jn),n===void 0&&h===wi&&(n=Ei),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:We,this.minFilter=l!==void 0?l:We,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class _o extends me{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new L,h=new Ct;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const p=n+d/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(a,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _o(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class pe extends me{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],p=[];let g=0;const _=[],m=n/2;let f=0;v(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(p,2));function v(){const x=new L,R=new L;let A=0;const T=(e-t)/n;for(let C=0;C<=r;C++){const E=[],M=C/r,P=M*(e-t)+t;for(let N=0;N<=i;N++){const B=N/i,V=B*l+a,q=Math.sin(V),W=Math.cos(V);R.x=P*q,R.y=-M*n+m,R.z=P*W,d.push(R.x,R.y,R.z),x.set(q,T,W).normalize(),u.push(x.x,x.y,x.z),p.push(B,1-M),E.push(g++)}_.push(E)}for(let C=0;C<i;C++)for(let E=0;E<r;E++){const M=_[E][C],P=_[E+1][C],N=_[E+1][C+1],B=_[E][C+1];(t>0||E!==0)&&(h.push(M,P,B),A+=3),(e>0||E!==r-1)&&(h.push(P,N,B),A+=3)}c.addGroup(f,A,0),f+=A}function S(x){const R=g,A=new Ct,T=new L;let C=0;const E=x===!0?t:e,M=x===!0?1:-1;for(let N=1;N<=i;N++)d.push(0,m*M,0),u.push(0,M,0),p.push(.5,.5),g++;const P=g;for(let N=0;N<=i;N++){const V=N/i*l+a,q=Math.cos(V),W=Math.sin(V);T.x=E*W,T.y=m*M,T.z=E*q,d.push(T.x,T.y,T.z),u.push(0,M,0),A.x=q*.5+.5,A.y=W*.5*M+.5,p.push(A.x,A.y),g++}for(let N=0;N<i;N++){const B=R+N,V=P+N;x===!0?h.push(V,V+1,B):h.push(V+1,V,B),C+=3}c.addGroup(f,C,x===!0?1:2),f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wn extends pe{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Wn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class xo extends me{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const S=new L,x=new L,R=new L;for(let A=0;A<e.length;A+=3)p(e[A+0],S),p(e[A+1],x),p(e[A+2],R),l(S,x,R,v)}function l(v,S,x,R){const A=R+1,T=[];for(let C=0;C<=A;C++){T[C]=[];const E=v.clone().lerp(x,C/A),M=S.clone().lerp(x,C/A),P=A-C;for(let N=0;N<=P;N++)N===0&&C===A?T[C][N]=E:T[C][N]=E.clone().lerp(M,N/P)}for(let C=0;C<A;C++)for(let E=0;E<2*(A-C)-1;E++){const M=Math.floor(E/2);E%2===0?(u(T[C][M+1]),u(T[C+1][M]),u(T[C][M])):(u(T[C][M+1]),u(T[C+1][M+1]),u(T[C+1][M]))}}function c(v){const S=new L;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(v),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function h(){const v=new L;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];const x=m(v)/2/Math.PI+.5,R=f(v)/Math.PI+.5;o.push(x,1-R)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){const S=o[v+0],x=o[v+2],R=o[v+4],A=Math.max(S,x,R),T=Math.min(S,x,R);A>.9&&T<.1&&(S<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function p(v,S){const x=v*3;S.x=t[x+0],S.y=t[x+1],S.z=t[x+2]}function g(){const v=new L,S=new L,x=new L,R=new L,A=new Ct,T=new Ct,C=new Ct;for(let E=0,M=0;E<r.length;E+=9,M+=6){v.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),A.set(o[M+0],o[M+1]),T.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),R.copy(v).add(S).add(x).divideScalar(3);const P=m(R);_(A,M+0,v,P),_(T,M+2,S,P),_(C,M+4,x,P)}}function _(v,S,x,R){R<0&&v.x===1&&(o[S]=v.x-1),x.x===0&&x.z===0&&(o[S]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xo(t.vertices,t.indices,t.radius,t.details)}}class vo extends xo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vo(t.radius,t.detail)}}class _e extends me{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const v=f*u-o;for(let S=0;S<c;S++){const x=S*d-r;g.push(x,-v,0),_.push(0,0,1),m.push(S/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){const S=v+c*f,x=v+c*(f+1),R=v+1+c*(f+1),A=v+1+c*f;p.push(S,x,A),p.push(x,R,A)}this.setIndex(p),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _e(t.width,t.height,t.widthSegments,t.heightSegments)}}class Mo extends me{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let d=t;const u=(e-t)/i,p=new L,g=new Ct;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<i;_++){const m=_*(n+1);for(let f=0;f<n;f++){const v=f+m,S=v,x=v+n+1,R=v+n+2,A=v+1;a.push(S,x,A),a.push(x,R,A)}}this.setIndex(a),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Is extends me{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new L,u=new L,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const v=[],S=f/n;let x=0;f===0&&o===0?x=.5/e:f===n&&l===Math.PI&&(x=-.5/e);for(let R=0;R<=e;R++){const A=R/e;d.x=-t*Math.cos(i+A*r)*Math.sin(o+S*a),d.y=t*Math.cos(o+S*a),d.z=t*Math.sin(i+A*r)*Math.sin(o+S*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(A+x,1-S),v.push(c++)}h.push(v)}for(let f=0;f<n;f++)for(let v=0;v<e;v++){const S=h[f][v+1],x=h[f][v],R=h[f+1][v],A=h[f+1][v+1];(f!==0||o>0)&&p.push(S,x,A),(f!==n-1||l<Math.PI)&&p.push(x,R,A)}this.setIndex(p),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Is(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class yo extends me{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new L,d=new L,u=new L;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,v=(i+1)*p+g;o.push(_,m,v),o.push(m,f,v)}this.setIndex(o),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class re extends Pi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class uh extends Pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ac,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dh extends Pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const oa={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class fh{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const ph=new fh;class So{constructor(t){this.manager=t!==void 0?t:ph,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}So.DEFAULT_MATERIAL_NAME="__DEFAULT";class mh extends So{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=oa.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Zi("img");function l(){h(),oa.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(d){h(),i&&i(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class _l extends So{constructor(t){super(t)}load(t,e,n,i){const r=new Ce,o=new mh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Eo extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class gh extends Eo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const sr=new Yt,aa=new L,la=new L;class xl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new go,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;aa.setFromMatrixPosition(t.matrixWorld),e.position.copy(aa),la.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(la),e.updateMatrixWorld(),sr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ca=new Yt,zi=new L,rr=new L;class _h extends xl{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ct(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),zi.setFromMatrixPosition(t.matrixWorld),n.position.copy(zi),rr.copy(n.position),rr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(rr),n.updateMatrixWorld(),i.makeTranslation(-zi.x,-zi.y,-zi.z),ca.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ca)}}class vl extends Eo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new _h}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ml extends fl{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class xh extends xl{constructor(){super(new Ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ha extends Eo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new xh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class vh extends me{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Mh extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class yh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ua(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ua();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ua(){return performance.now()}function da(s,t,e,n){const i=Sh(n);switch(e){case $a:return s*t;case Ja:return s*t;case Qa:return s*t*2;case co:return s*t/i.components*i.byteLength;case ho:return s*t/i.components*i.byteLength;case tl:return s*t*2/i.components*i.byteLength;case uo:return s*t*2/i.components*i.byteLength;case Ka:return s*t*3/i.components*i.byteLength;case en:return s*t*4/i.components*i.byteLength;case fo:return s*t*4/i.components*i.byteLength;case ws:case bs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ts:case As:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Rr:case Lr:return Math.max(s,16)*Math.max(t,8)/4;case Cr:case Pr:return Math.max(s,8)*Math.max(t,8)/2;case Ir:case Dr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ur:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Fr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Nr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Br:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Or:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case zr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case kr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Gr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Hr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Vr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Wr:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Xr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case qr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Yr:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case jr:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Cs:case Zr:case $r:return Math.ceil(s/4)*Math.ceil(t/4)*16;case el:case Kr:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Jr:case Qr:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sh(s){switch(s){case vn:case Ya:return{byteLength:1,components:1};case Yi:case ja:case $i:return{byteLength:2,components:1};case ao:case lo:return{byteLength:2,components:4};case jn:case oo:case an:return{byteLength:4,components:1};case Za:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:so}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=so);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yl(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Eh(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var wh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Th=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ah=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ch=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ph=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ih=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Dh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Oh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Yh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Zh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$h=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tu="gl_FragColor = linearToOutputTexel( gl_FragColor );",eu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,iu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,su=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ru=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ou=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,au=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,du=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_u=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Su=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Eu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Au=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ru=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Du=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ou=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ku=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ju=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$u=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ku=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ju=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Qu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,td=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ed=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,id=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,od=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ad=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ld=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ud=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,md=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_d=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Sd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ed=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Td=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ld=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Id=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ud=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Od=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Wd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Xd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$d=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ef=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:wh,alphahash_pars_fragment:bh,alphamap_fragment:Th,alphamap_pars_fragment:Ah,alphatest_fragment:Ch,alphatest_pars_fragment:Rh,aomap_fragment:Ph,aomap_pars_fragment:Lh,batching_pars_vertex:Ih,batching_vertex:Dh,begin_vertex:Uh,beginnormal_vertex:Fh,bsdfs:Nh,iridescence_fragment:Bh,bumpmap_pars_fragment:Oh,clipping_planes_fragment:zh,clipping_planes_pars_fragment:kh,clipping_planes_pars_vertex:Gh,clipping_planes_vertex:Hh,color_fragment:Vh,color_pars_fragment:Wh,color_pars_vertex:Xh,color_vertex:qh,common:Yh,cube_uv_reflection_fragment:jh,defaultnormal_vertex:Zh,displacementmap_pars_vertex:$h,displacementmap_vertex:Kh,emissivemap_fragment:Jh,emissivemap_pars_fragment:Qh,colorspace_fragment:tu,colorspace_pars_fragment:eu,envmap_fragment:nu,envmap_common_pars_fragment:iu,envmap_pars_fragment:su,envmap_pars_vertex:ru,envmap_physical_pars_fragment:gu,envmap_vertex:ou,fog_vertex:au,fog_pars_vertex:lu,fog_fragment:cu,fog_pars_fragment:hu,gradientmap_pars_fragment:uu,lightmap_pars_fragment:du,lights_lambert_fragment:fu,lights_lambert_pars_fragment:pu,lights_pars_begin:mu,lights_toon_fragment:_u,lights_toon_pars_fragment:xu,lights_phong_fragment:vu,lights_phong_pars_fragment:Mu,lights_physical_fragment:yu,lights_physical_pars_fragment:Su,lights_fragment_begin:Eu,lights_fragment_maps:wu,lights_fragment_end:bu,logdepthbuf_fragment:Tu,logdepthbuf_pars_fragment:Au,logdepthbuf_pars_vertex:Cu,logdepthbuf_vertex:Ru,map_fragment:Pu,map_pars_fragment:Lu,map_particle_fragment:Iu,map_particle_pars_fragment:Du,metalnessmap_fragment:Uu,metalnessmap_pars_fragment:Fu,morphinstance_vertex:Nu,morphcolor_vertex:Bu,morphnormal_vertex:Ou,morphtarget_pars_vertex:zu,morphtarget_vertex:ku,normal_fragment_begin:Gu,normal_fragment_maps:Hu,normal_pars_fragment:Vu,normal_pars_vertex:Wu,normal_vertex:Xu,normalmap_pars_fragment:qu,clearcoat_normal_fragment_begin:Yu,clearcoat_normal_fragment_maps:ju,clearcoat_pars_fragment:Zu,iridescence_pars_fragment:$u,opaque_fragment:Ku,packing:Ju,premultiplied_alpha_fragment:Qu,project_vertex:td,dithering_fragment:ed,dithering_pars_fragment:nd,roughnessmap_fragment:id,roughnessmap_pars_fragment:sd,shadowmap_pars_fragment:rd,shadowmap_pars_vertex:od,shadowmap_vertex:ad,shadowmask_pars_fragment:ld,skinbase_vertex:cd,skinning_pars_vertex:hd,skinning_vertex:ud,skinnormal_vertex:dd,specularmap_fragment:fd,specularmap_pars_fragment:pd,tonemapping_fragment:md,tonemapping_pars_fragment:gd,transmission_fragment:_d,transmission_pars_fragment:xd,uv_pars_fragment:vd,uv_pars_vertex:Md,uv_vertex:yd,worldpos_vertex:Sd,background_vert:Ed,background_frag:wd,backgroundCube_vert:bd,backgroundCube_frag:Td,cube_vert:Ad,cube_frag:Cd,depth_vert:Rd,depth_frag:Pd,distanceRGBA_vert:Ld,distanceRGBA_frag:Id,equirect_vert:Dd,equirect_frag:Ud,linedashed_vert:Fd,linedashed_frag:Nd,meshbasic_vert:Bd,meshbasic_frag:Od,meshlambert_vert:zd,meshlambert_frag:kd,meshmatcap_vert:Gd,meshmatcap_frag:Hd,meshnormal_vert:Vd,meshnormal_frag:Wd,meshphong_vert:Xd,meshphong_frag:qd,meshphysical_vert:Yd,meshphysical_frag:jd,meshtoon_vert:Zd,meshtoon_frag:$d,points_vert:Kd,points_frag:Jd,shadow_vert:Qd,shadow_frag:tf,sprite_vert:ef,sprite_frag:nf},nt={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},nn={basic:{uniforms:Fe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Fe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new ct(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Fe([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Fe([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Fe([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new ct(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Fe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Fe([nt.points,nt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Fe([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Fe([nt.common,nt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Fe([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Fe([nt.sprite,nt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Fe([nt.common,nt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Fe([nt.lights,nt.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};nn.physical={uniforms:Fe([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const ys={r:0,b:0,g:0},Fn=new Oe,sf=new Yt;function rf(s,t,e,n,i,r,o){const a=new ct(0);let l=r===!0?0:1,c,h,d=null,u=0,p=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function _(S){let x=!1;const R=g(S);R===null?f(a,l):R&&R.isColor&&(f(R,1),x=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,x){const R=g(x);R&&(R.isCubeTexture||R.mapping===Ds)?(h===void 0&&(h=new ut(new At(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:Ti(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Ae,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Fn.copy(x.backgroundRotation),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sf.makeRotationFromEuler(Fn)),h.material.toneMapped=Jt.getTransfer(R.colorSpace)!==ie,(d!==R||u!==R.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=R,u=R.version,p=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new ut(new _e(2,2),new ze({name:"BackgroundMaterial",uniforms:Ti(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(R.colorSpace)!==ie,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||u!==R.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=R,u=R.version,p=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,x){S.getRGB(ys,dl(s)),n.buffers.color.setClear(ys.r,ys.g,ys.b,x,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(a,l)},render:_,addToRenderList:m,dispose:v}}function of(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(M,P,N,B,V){let q=!1;const W=d(B,N,P);r!==W&&(r=W,c(r.object)),q=p(M,B,N,V),q&&g(M,B,N,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,x(M,P,N,B),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function d(M,P,N){const B=N.wireframe===!0;let V=n[M.id];V===void 0&&(V={},n[M.id]=V);let q=V[P.id];q===void 0&&(q={},V[P.id]=q);let W=q[B];return W===void 0&&(W=u(l()),q[B]=W),W}function u(M){const P=[],N=[],B=[];for(let V=0;V<e;V++)P[V]=0,N[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,P,N,B){const V=r.attributes,q=P.attributes;let W=0;const K=N.getAttributes();for(const G in K)if(K[G].location>=0){const ot=V[G];let vt=q[G];if(vt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(vt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(vt=M.instanceColor)),ot===void 0||ot.attribute!==vt||vt&&ot.data!==vt.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function g(M,P,N,B){const V={},q=P.attributes;let W=0;const K=N.getAttributes();for(const G in K)if(K[G].location>=0){let ot=q[G];ot===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ot=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ot=M.instanceColor));const vt={};vt.attribute=ot,ot&&ot.data&&(vt.data=ot.data),V[G]=vt,W++}r.attributes=V,r.attributesNum=W,r.index=B}function _(){const M=r.newAttributes;for(let P=0,N=M.length;P<N;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){const N=r.newAttributes,B=r.enabledAttributes,V=r.attributeDivisors;N[M]=1,B[M]===0&&(s.enableVertexAttribArray(M),B[M]=1),V[M]!==P&&(s.vertexAttribDivisor(M,P),V[M]=P)}function v(){const M=r.newAttributes,P=r.enabledAttributes;for(let N=0,B=P.length;N<B;N++)P[N]!==M[N]&&(s.disableVertexAttribArray(N),P[N]=0)}function S(M,P,N,B,V,q,W){W===!0?s.vertexAttribIPointer(M,P,N,V,q):s.vertexAttribPointer(M,P,N,B,V,q)}function x(M,P,N,B){_();const V=B.attributes,q=N.getAttributes(),W=P.defaultAttributeValues;for(const K in q){const G=q[K];if(G.location>=0){let Y=V[K];if(Y===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(Y=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(Y=M.instanceColor)),Y!==void 0){const ot=Y.normalized,vt=Y.itemSize,Rt=t.get(Y);if(Rt===void 0)continue;const Gt=Rt.buffer,X=Rt.type,et=Rt.bytesPerElement,_t=X===s.INT||X===s.UNSIGNED_INT||Y.gpuType===oo;if(Y.isInterleavedBufferAttribute){const it=Y.data,Tt=it.stride,It=Y.offset;if(it.isInstancedInterleavedBuffer){for(let Ot=0;Ot<G.locationSize;Ot++)f(G.location+Ot,it.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Ot=0;Ot<G.locationSize;Ot++)m(G.location+Ot);s.bindBuffer(s.ARRAY_BUFFER,Gt);for(let Ot=0;Ot<G.locationSize;Ot++)S(G.location+Ot,vt/G.locationSize,X,ot,Tt*et,(It+vt/G.locationSize*Ot)*et,_t)}else{if(Y.isInstancedBufferAttribute){for(let it=0;it<G.locationSize;it++)f(G.location+it,Y.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let it=0;it<G.locationSize;it++)m(G.location+it);s.bindBuffer(s.ARRAY_BUFFER,Gt);for(let it=0;it<G.locationSize;it++)S(G.location+it,vt/G.locationSize,X,ot,vt*et,vt/G.locationSize*it*et,_t)}}else if(W!==void 0){const ot=W[K];if(ot!==void 0)switch(ot.length){case 2:s.vertexAttrib2fv(G.location,ot);break;case 3:s.vertexAttrib3fv(G.location,ot);break;case 4:s.vertexAttrib4fv(G.location,ot);break;default:s.vertexAttrib1fv(G.location,ot)}}}}v()}function R(){C();for(const M in n){const P=n[M];for(const N in P){const B=P[N];for(const V in B)h(B[V].object),delete B[V];delete P[N]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const N in P){const B=P[N];for(const V in B)h(B[V].object),delete B[V];delete P[N]}delete n[M.id]}function T(M){for(const P in n){const N=n[P];if(N[M.id]===void 0)continue;const B=N[M.id];for(const V in B)h(B[V].object),delete B[V];delete N[M.id]}}function C(){E(),o=!0,r!==i&&(r=i,c(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function af(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function l(c,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function lf(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==en&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===$i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==vn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==an&&!C)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:R,maxSamples:A}}function cf(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Bn,a=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const v=r?0:n,S=v*4;let x=f.clippingState||null;l.value=x,x=h(g,u,S,p);for(let R=0;R!==S;++R)x[R]=e[R];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,x=p;S!==_;++S,x+=4)o.copy(d[S]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function hf(s){let t=new WeakMap;function e(o,a){return a===br?o.mapping=yi:a===Tr&&(o.mapping=Si),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===br||a===Tr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new sh(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const gi=4,fa=[.125,.215,.35,.446,.526,.582],kn=20,or=new Ml,pa=new ct;let ar=null,lr=0,cr=0,hr=!1;const On=(1+Math.sqrt(5))/2,di=1/On,ma=[new L(-On,di,0),new L(On,di,0),new L(-di,0,On),new L(di,0,On),new L(0,On,-di),new L(0,On,di),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class no{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ar=this._renderer.getRenderTarget(),lr=this._renderer.getActiveCubeFace(),cr=this._renderer.getActiveMipmapLevel(),hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_a(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ar,lr,cr),this._renderer.xr.enabled=hr,t.scissorTest=!1,Ss(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yi||t.mapping===Si?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ar=this._renderer.getRenderTarget(),lr=this._renderer.getActiveCubeFace(),cr=this._renderer.getActiveMipmapLevel(),hr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:$i,format:en,colorSpace:bi,depthBuffer:!1},i=ga(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ga(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uf(r)),this._blurMaterial=df(r,t,e)}return i}_compileMaterial(t){const e=new ut(this._lodPlanes[0],t);this._renderer.compile(e,or)}_sceneToCubeUV(t,e,n,i){const a=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(pa),h.toneMapping=An,h.autoClear=!1;const p=new rn({name:"PMREM.Background",side:Ae,depthWrite:!1,depthTest:!1}),g=new ut(new At,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(pa),_=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const S=this._cubeSize;Ss(i,v*S,f>2?S:0,S,S),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===yi||t.mapping===Si;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_a());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ut(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ss(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,or)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ma[(i-r-1)%ma.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ut(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*kn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):kn;m>kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${kn}`);const f=[];let v=0;for(let T=0;T<kn;++T){const C=T/_,E=Math.exp(-C*C/2);f.push(E),T===0?v+=E:T<m&&(v+=2*E)}for(let T=0;T<f.length;T++)f[T]=f[T]/v;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;const x=this._sizeLods[i],R=3*x*(i>S-gi?i-S+gi:0),A=4*(this._cubeSize-x);Ss(e,R,A,3*x,2*x),l.setRenderTarget(e),l.render(d,or)}}function uf(s){const t=[],e=[],n=[];let i=s;const r=s-gi+1+fa.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-gi?l=fa[o-s+gi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*p),S=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,C=A>2?0:-1,E=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];v.set(E,_*g*A),S.set(u,m*g*A);const M=[A,A,A,A,A,A];x.set(M,f*g*A)}const R=new me;R.setAttribute("position",new Qt(v,_)),R.setAttribute("uv",new Qt(S,m)),R.setAttribute("faceIndex",new Qt(x,f)),t.push(R),i>gi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ga(s,t,e){const n=new Zn(s,t,e);return n.texture.mapping=Ds,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ss(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function df(s,t,e){const n=new Float32Array(kn),i=new L(0,1,0);return new ze({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function _a(){return new ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function xa(){return new ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function wo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ff(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===br||l===Tr,h=l===yi||l===Si;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new no(s)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new no(s)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function pf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&pi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function mf(s,t,e,n){const i={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)t.update(u[p],s.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let S=0,x=v.length;S<x;S+=3){const R=v[S+0],A=v[S+1],T=v[S+2];u.push(R,A,A,T,T,R)}}else if(g!==void 0){const v=g.array;_=g.version;for(let S=0,x=v.length/3-1;S<x;S+=3){const R=S+0,A=S+1,T=S+2;u.push(R,A,A,T,T,R)}}else return;const m=new(sl(u)?ul:hl)(u,1);m.version=_;const f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function gf(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){s.drawElements(n,p,r,u*o),e.update(p,n,1)}function c(u,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,u*o,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function d(u,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,_,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*_[v];e.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function _f(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function xf(s,t,e){const n=new WeakMap,i=new se;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let R=a.attributes.position.count*x,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const T=new Float32Array(R*A*4*d),C=new ol(T,R,A,d);C.type=an,C.needsUpdate=!0;const E=x*4;for(let P=0;P<d;P++){const N=f[P],B=v[P],V=S[P],q=R*A*4*P;for(let W=0;W<N.count;W++){const K=W*E;g===!0&&(i.fromBufferAttribute(N,W),T[q+K+0]=i.x,T[q+K+1]=i.y,T[q+K+2]=i.z,T[q+K+3]=0),_===!0&&(i.fromBufferAttribute(B,W),T[q+K+4]=i.x,T[q+K+5]=i.y,T[q+K+6]=i.z,T[q+K+7]=0),m===!0&&(i.fromBufferAttribute(V,W),T[q+K+8]=i.x,T[q+K+9]=i.y,T[q+K+10]=i.z,T[q+K+11]=V.itemSize===4?i.w:1)}}u={count:d,texture:C,size:new Ct(R,A)},n.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function vf(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Sl=new Ce,va=new gl(1,1),El=new ol,wl=new Hc,bl=new pl,Ma=[],ya=[],Sa=new Float32Array(16),Ea=new Float32Array(9),wa=new Float32Array(4);function Li(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Ma[i];if(r===void 0&&(r=new Float32Array(i),Ma[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Se(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ee(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Us(s,t){let e=ya[t];e===void 0&&(e=new Int32Array(t),ya[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Mf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function yf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2fv(this.addr,t),Ee(e,t)}}function Sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;s.uniform3fv(this.addr,t),Ee(e,t)}}function Ef(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4fv(this.addr,t),Ee(e,t)}}function wf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;wa.set(n),s.uniformMatrix2fv(this.addr,!1,wa),Ee(e,n)}}function bf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;Ea.set(n),s.uniformMatrix3fv(this.addr,!1,Ea),Ee(e,n)}}function Tf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;Sa.set(n),s.uniformMatrix4fv(this.addr,!1,Sa),Ee(e,n)}}function Af(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Cf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2iv(this.addr,t),Ee(e,t)}}function Rf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3iv(this.addr,t),Ee(e,t)}}function Pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4iv(this.addr,t),Ee(e,t)}}function Lf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function If(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2uiv(this.addr,t),Ee(e,t)}}function Df(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3uiv(this.addr,t),Ee(e,t)}}function Uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4uiv(this.addr,t),Ee(e,t)}}function Ff(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(va.compareFunction=il,r=va):r=Sl,e.setTexture2D(t||r,i)}function Nf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||wl,i)}function Bf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||bl,i)}function Of(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||El,i)}function zf(s){switch(s){case 5126:return Mf;case 35664:return yf;case 35665:return Sf;case 35666:return Ef;case 35674:return wf;case 35675:return bf;case 35676:return Tf;case 5124:case 35670:return Af;case 35667:case 35671:return Cf;case 35668:case 35672:return Rf;case 35669:case 35673:return Pf;case 5125:return Lf;case 36294:return If;case 36295:return Df;case 36296:return Uf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ff;case 35679:case 36299:case 36307:return Nf;case 35680:case 36300:case 36308:case 36293:return Bf;case 36289:case 36303:case 36311:case 36292:return Of}}function kf(s,t){s.uniform1fv(this.addr,t)}function Gf(s,t){const e=Li(t,this.size,2);s.uniform2fv(this.addr,e)}function Hf(s,t){const e=Li(t,this.size,3);s.uniform3fv(this.addr,e)}function Vf(s,t){const e=Li(t,this.size,4);s.uniform4fv(this.addr,e)}function Wf(s,t){const e=Li(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Xf(s,t){const e=Li(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function qf(s,t){const e=Li(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Yf(s,t){s.uniform1iv(this.addr,t)}function jf(s,t){s.uniform2iv(this.addr,t)}function Zf(s,t){s.uniform3iv(this.addr,t)}function $f(s,t){s.uniform4iv(this.addr,t)}function Kf(s,t){s.uniform1uiv(this.addr,t)}function Jf(s,t){s.uniform2uiv(this.addr,t)}function Qf(s,t){s.uniform3uiv(this.addr,t)}function tp(s,t){s.uniform4uiv(this.addr,t)}function ep(s,t,e){const n=this.cache,i=t.length,r=Us(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Sl,r[o])}function np(s,t,e){const n=this.cache,i=t.length,r=Us(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||wl,r[o])}function ip(s,t,e){const n=this.cache,i=t.length,r=Us(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||bl,r[o])}function sp(s,t,e){const n=this.cache,i=t.length,r=Us(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||El,r[o])}function rp(s){switch(s){case 5126:return kf;case 35664:return Gf;case 35665:return Hf;case 35666:return Vf;case 35674:return Wf;case 35675:return Xf;case 35676:return qf;case 5124:case 35670:return Yf;case 35667:case 35671:return jf;case 35668:case 35672:return Zf;case 35669:case 35673:return $f;case 5125:return Kf;case 36294:return Jf;case 36295:return Qf;case 36296:return tp;case 35678:case 36198:case 36298:case 36306:case 35682:return ep;case 35679:case 36299:case 36307:return np;case 35680:case 36300:case 36308:case 36293:return ip;case 36289:case 36303:case 36311:case 36292:return sp}}class op{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zf(e.type)}}class ap{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rp(e.type)}}class lp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const ur=/(\w+)(\])?(\[|\.)?/g;function ba(s,t){s.seq.push(t),s.map[t.id]=t}function cp(s,t,e){const n=s.name,i=n.length;for(ur.lastIndex=0;;){const r=ur.exec(n),o=ur.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ba(e,c===void 0?new op(a,s,t):new ap(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new lp(a),ba(e,d)),e=d}}}class Rs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);cp(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ta(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const hp=37297;let up=0;function dp(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Aa=new Ft;function fp(s){Jt._getMatrix(Aa,Jt.workingColorSpace,s);const t=`mat3( ${Aa.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(s)){case Ps:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ca(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+dp(s.getShaderSource(t),o)}else return i}function pp(s,t){const e=fp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function mp(s,t){let e;switch(t){case tc:e="Linear";break;case ec:e="Reinhard";break;case nc:e="Cineon";break;case Xa:e="ACESFilmic";break;case sc:e="AgX";break;case rc:e="Neutral";break;case ic:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Es=new L;function gp(){Jt.getLuminanceCoefficients(Es);const s=Es.x.toFixed(4),t=Es.y.toFixed(4),e=Es.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _p(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vi).join(`
`)}function xp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Vi(s){return s!==""}function Ra(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pa(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Mp=/^[ \t]*#include +<([\w\d./]+)>/gm;function io(s){return s.replace(Mp,Sp)}const yp=new Map;function Sp(s,t){let e=Bt[t];if(e===void 0){const n=yp.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return io(e)}const Ep=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function La(s){return s.replace(Ep,wp)}function wp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ia(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ro?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Va?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===pn&&(t="SHADOWMAP_TYPE_VSM"),t}function Tp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case yi:case Si:t="ENVMAP_TYPE_CUBE";break;case Ds:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ap(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Si:t="ENVMAP_MODE_REFRACTION";break}return t}function Cp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Wa:t="ENVMAP_BLENDING_MULTIPLY";break;case Jl:t="ENVMAP_BLENDING_MIX";break;case Ql:t="ENVMAP_BLENDING_ADD";break}return t}function Rp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Pp(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=bp(e),c=Tp(e),h=Ap(e),d=Cp(e),u=Rp(e),p=_p(e),g=xp(r),_=i.createProgram();let m,f,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vi).join(`
`),f.length>0&&(f+=`
`)):(m=[Ia(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vi).join(`
`),f=[Ia(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==An?"#define TONE_MAPPING":"",e.toneMapping!==An?Bt.tonemapping_pars_fragment:"",e.toneMapping!==An?mp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,pp("linearToOutputTexel",e.outputColorSpace),gp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vi).join(`
`)),o=io(o),o=Ra(o,e),o=Pa(o,e),a=io(a),a=Ra(a,e),a=Pa(a,e),o=La(o),a=La(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=v+m+o,x=v+f+a,R=Ta(i,i.VERTEX_SHADER,S),A=Ta(i,i.FRAGMENT_SHADER,x);i.attachShader(_,R),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(P){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(R).trim(),V=i.getShaderInfoLog(A).trim();let q=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,R,A);else{const K=Ca(i,R,"vertex"),G=Ca(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+K+`
`+G)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||V==="")&&(W=!1);W&&(P.diagnostics={runnable:q,programLog:N,vertexShader:{log:B,prefix:m},fragmentShader:{log:V,prefix:f}})}i.deleteShader(R),i.deleteShader(A),C=new Rs(i,_),E=vp(i,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,hp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=up++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let Lp=0;class Ip{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Dp(t),e.set(t,n)),n}}class Dp{constructor(t){this.id=Lp++,this.code=t,this.usedTimes=0}}function Up(s,t,e,n,i,r,o){const a=new ll,l=new Ip,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,P,N,B){const V=N.fog,q=B.geometry,W=E.isMeshStandardMaterial?N.environment:null,K=(E.isMeshStandardMaterial?e:t).get(E.envMap||W),G=K&&K.mapping===Ds?K.image.height:null,Y=g[E.type];E.precision!==null&&(p=i.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const ot=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,vt=ot!==void 0?ot.length:0;let Rt=0;q.morphAttributes.position!==void 0&&(Rt=1),q.morphAttributes.normal!==void 0&&(Rt=2),q.morphAttributes.color!==void 0&&(Rt=3);let Gt,X,et,_t;if(Y){const ne=nn[Y];Gt=ne.vertexShader,X=ne.fragmentShader}else Gt=E.vertexShader,X=E.fragmentShader,l.update(E),et=l.getVertexShaderID(E),_t=l.getFragmentShaderID(E);const it=s.getRenderTarget(),Tt=s.state.buffers.depth.getReversed(),It=B.isInstancedMesh===!0,Ot=B.isBatchedMesh===!0,ue=!!E.map,jt=!!E.matcap,ge=!!K,I=!!E.aoMap,Xe=!!E.lightMap,Ht=!!E.bumpMap,Vt=!!E.normalMap,St=!!E.displacementMap,le=!!E.emissiveMap,yt=!!E.metalnessMap,b=!!E.roughnessMap,y=E.anisotropy>0,O=E.clearcoat>0,Z=E.dispersion>0,J=E.iridescence>0,j=E.sheen>0,Mt=E.transmission>0,at=y&&!!E.anisotropyMap,ft=O&&!!E.clearcoatMap,Zt=O&&!!E.clearcoatNormalMap,tt=O&&!!E.clearcoatRoughnessMap,pt=J&&!!E.iridescenceMap,bt=J&&!!E.iridescenceThicknessMap,Pt=j&&!!E.sheenColorMap,mt=j&&!!E.sheenRoughnessMap,Wt=!!E.specularMap,Nt=!!E.specularColorMap,oe=!!E.specularIntensityMap,D=Mt&&!!E.transmissionMap,st=Mt&&!!E.thicknessMap,H=!!E.gradientMap,$=!!E.alphaMap,ht=E.alphaTest>0,lt=!!E.alphaHash,Ut=!!E.extensions;let de=An;E.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(de=s.toneMapping);const Re={shaderID:Y,shaderType:E.type,shaderName:E.name,vertexShader:Gt,fragmentShader:X,defines:E.defines,customVertexShaderID:et,customFragmentShaderID:_t,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ot,batchingColor:Ot&&B._colorsTexture!==null,instancing:It,instancingColor:It&&B.instanceColor!==null,instancingMorph:It&&B.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:it===null?s.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:bi,alphaToCoverage:!!E.alphaToCoverage,map:ue,matcap:jt,envMap:ge,envMapMode:ge&&K.mapping,envMapCubeUVHeight:G,aoMap:I,lightMap:Xe,bumpMap:Ht,normalMap:Vt,displacementMap:u&&St,emissiveMap:le,normalMapObjectSpace:Vt&&E.normalMapType===cc,normalMapTangentSpace:Vt&&E.normalMapType===nl,metalnessMap:yt,roughnessMap:b,anisotropy:y,anisotropyMap:at,clearcoat:O,clearcoatMap:ft,clearcoatNormalMap:Zt,clearcoatRoughnessMap:tt,dispersion:Z,iridescence:J,iridescenceMap:pt,iridescenceThicknessMap:bt,sheen:j,sheenColorMap:Pt,sheenRoughnessMap:mt,specularMap:Wt,specularColorMap:Nt,specularIntensityMap:oe,transmission:Mt,transmissionMap:D,thicknessMap:st,gradientMap:H,opaque:E.transparent===!1&&E.blending===_i&&E.alphaToCoverage===!1,alphaMap:$,alphaTest:ht,alphaHash:lt,combine:E.combine,mapUv:ue&&_(E.map.channel),aoMapUv:I&&_(E.aoMap.channel),lightMapUv:Xe&&_(E.lightMap.channel),bumpMapUv:Ht&&_(E.bumpMap.channel),normalMapUv:Vt&&_(E.normalMap.channel),displacementMapUv:St&&_(E.displacementMap.channel),emissiveMapUv:le&&_(E.emissiveMap.channel),metalnessMapUv:yt&&_(E.metalnessMap.channel),roughnessMapUv:b&&_(E.roughnessMap.channel),anisotropyMapUv:at&&_(E.anisotropyMap.channel),clearcoatMapUv:ft&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Zt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(E.sheenRoughnessMap.channel),specularMapUv:Wt&&_(E.specularMap.channel),specularColorMapUv:Nt&&_(E.specularColorMap.channel),specularIntensityMapUv:oe&&_(E.specularIntensityMap.channel),transmissionMapUv:D&&_(E.transmissionMap.channel),thicknessMapUv:st&&_(E.thicknessMap.channel),alphaMapUv:$&&_(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Vt||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(ue||$),fog:!!V,useFog:E.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Tt,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Rt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:de,decodeVideoTexture:ue&&E.map.isVideoTexture===!0&&Jt.getTransfer(E.map.colorSpace)===ie,decodeVideoTextureEmissive:le&&E.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(E.emissiveMap.colorSpace)===ie,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ye,flipSided:E.side===Ae,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ut&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&E.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function f(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)M.push(P),M.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(v(M,E),S(M,E),M.push(s.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function v(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function S(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const M=g[E.type];let P;if(M){const N=nn[M];P=th.clone(N.uniforms)}else P=E.uniforms;return P}function R(E,M){let P;for(let N=0,B=h.length;N<B;N++){const V=h[N];if(V.cacheKey===M){P=V,++P.usedTimes;break}}return P===void 0&&(P=new Pp(s,M,E,r),h.push(P)),P}function A(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function T(E){l.remove(E)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:R,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:C}}function Fp(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Np(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Da(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ua(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,p,g,_,m){let f=s[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),t++,f}function a(d,u,p,g,_,m){const f=o(d,u,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(d,u,p,g,_,m){const f=o(d,u,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||Np),n.length>1&&n.sort(u||Da),i.length>1&&i.sort(u||Da)}function h(){for(let d=t,u=s.length;d<u;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Bp(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Ua,s.set(n,[o])):i>=r.length?(o=new Ua,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Op(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new ct};break;case"SpotLight":e={position:new L,direction:new L,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":e={color:new ct,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function zp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let kp=0;function Gp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Hp(s){const t=new Op,e=zp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new Yt,o=new Yt;function a(c){let h=0,d=0,u=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,v=0,S=0,x=0,R=0,A=0,T=0;c.sort(Gp);for(let E=0,M=c.length;E<M;E++){const P=c[E],N=P.color,B=P.intensity,V=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*B,d+=N.g*B,u+=N.b*B;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],B);T++}else if(P.isDirectionalLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,G=e.get(P);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=P.shadow.matrix,v++}n.directional[p]=W,p++}else if(P.isSpotLight){const W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(N).multiplyScalar(B),W.distance=V,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[_]=W;const K=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,K.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=K.matrix,P.castShadow){const G=e.get(P);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=q,x++}_++}else if(P.isRectAreaLight){const W=t.get(P);W.color.copy(N).multiplyScalar(B),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=W,m++}else if(P.isPointLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const K=P.shadow,G=e.get(P);G.shadowIntensity=K.intensity,G.shadowBias=K.bias,G.shadowNormalBias=K.normalBias,G.shadowRadius=K.radius,G.shadowMapSize=K.mapSize,G.shadowCameraNear=K.camera.near,G.shadowCameraFar=K.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=P.shadow.matrix,S++}n.point[g]=W,g++}else if(P.isHemisphereLight){const W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(B),W.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[f]=W,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==v||C.numPointShadows!==S||C.numSpotShadows!==x||C.numSpotMaps!==R||C.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=v,C.numPointShadows=S,C.numSpotShadows=x,C.numSpotMaps=R,C.numLightProbes=T,n.version=kp++)}function l(c,h){let d=0,u=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const S=c[f];if(S.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(S.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Fa(s){const t=new Hp(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Vp(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Fa(s),t.set(i,[a])):r>=o.length?(a=new Fa(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Wp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qp(s,t,e){let n=new go;const i=new Ct,r=new Ct,o=new se,a=new uh({depthPacking:lc}),l=new dh,c={},h=e.maxTextureSize,d={[xn]:Ae,[Ae]:xn,[ye]:ye},u=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:Wp,fragmentShader:Xp}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new me;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ut(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ro;let f=this.type;this.render=function(A,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const E=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Tn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=f!==pn&&this.type===pn,V=f===pn&&this.type!==pn;for(let q=0,W=A.length;q<W;q++){const K=A[q],G=K.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const Y=G.getFrameExtents();if(i.multiply(Y),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,G.mapSize.y=r.y)),G.map===null||B===!0||V===!0){const vt=this.type!==pn?{minFilter:We,magFilter:We}:{};G.map!==null&&G.map.dispose(),G.map=new Zn(i.x,i.y,vt),G.map.texture.name=K.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const ot=G.getViewportCount();for(let vt=0;vt<ot;vt++){const Rt=G.getViewport(vt);o.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),N.viewport(o),G.updateMatrices(K,vt),n=G.getFrustum(),x(T,C,G.camera,K,this.type)}G.isPointLightShadow!==!0&&this.type===pn&&v(G,C),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(E,M,P)};function v(A,T){const C=t.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Zn(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(T,null,C,u,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(T,null,C,p,_,null)}function S(A,T,C,E){let M=null;const P=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)M=P;else if(M=C.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const N=M.uuid,B=T.uuid;let V=c[N];V===void 0&&(V={},c[N]=V);let q=V[B];q===void 0&&(q=M.clone(),V[B]=q,T.addEventListener("dispose",R)),M=q}if(M.visible=T.visible,M.wireframe=T.wireframe,E===pn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:d[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=s.properties.get(M);N.light=C}return M}function x(A,T,C,E,M){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===pn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const B=t.update(A),V=A.material;if(Array.isArray(V)){const q=B.groups;for(let W=0,K=q.length;W<K;W++){const G=q[W],Y=V[G.materialIndex];if(Y&&Y.visible){const ot=S(A,Y,E,M);A.onBeforeShadow(s,A,T,C,B,ot,G),s.renderBufferDirect(C,null,B,ot,A,G),A.onAfterShadow(s,A,T,C,B,ot,G)}}}else if(V.visible){const q=S(A,V,E,M);A.onBeforeShadow(s,A,T,C,B,q,null),s.renderBufferDirect(C,null,B,q,A,null),A.onAfterShadow(s,A,T,C,B,q,null)}}const N=A.children;for(let B=0,V=N.length;B<V;B++)x(N[B],T,C,E,M)}function R(A){A.target.removeEventListener("dispose",R);for(const C in c){const E=c[C],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const Yp={[xr]:vr,[Mr]:Er,[yr]:wr,[Mi]:Sr,[vr]:xr,[Er]:Mr,[wr]:yr,[Sr]:Mi};function jp(s,t){function e(){let D=!1;const st=new se;let H=null;const $=new se(0,0,0,0);return{setMask:function(ht){H!==ht&&!D&&(s.colorMask(ht,ht,ht,ht),H=ht)},setLocked:function(ht){D=ht},setClear:function(ht,lt,Ut,de,Re){Re===!0&&(ht*=de,lt*=de,Ut*=de),st.set(ht,lt,Ut,de),$.equals(st)===!1&&(s.clearColor(ht,lt,Ut,de),$.copy(st))},reset:function(){D=!1,H=null,$.set(-1,0,0,0)}}}function n(){let D=!1,st=!1,H=null,$=null,ht=null;return{setReversed:function(lt){if(st!==lt){const Ut=t.get("EXT_clip_control");st?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const de=ht;ht=null,this.setClear(de)}st=lt},getReversed:function(){return st},setTest:function(lt){lt?it(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(lt){H!==lt&&!D&&(s.depthMask(lt),H=lt)},setFunc:function(lt){if(st&&(lt=Yp[lt]),$!==lt){switch(lt){case xr:s.depthFunc(s.NEVER);break;case vr:s.depthFunc(s.ALWAYS);break;case Mr:s.depthFunc(s.LESS);break;case Mi:s.depthFunc(s.LEQUAL);break;case yr:s.depthFunc(s.EQUAL);break;case Sr:s.depthFunc(s.GEQUAL);break;case Er:s.depthFunc(s.GREATER);break;case wr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=lt}},setLocked:function(lt){D=lt},setClear:function(lt){ht!==lt&&(st&&(lt=1-lt),s.clearDepth(lt),ht=lt)},reset:function(){D=!1,H=null,$=null,ht=null,st=!1}}}function i(){let D=!1,st=null,H=null,$=null,ht=null,lt=null,Ut=null,de=null,Re=null;return{setTest:function(ne){D||(ne?it(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(ne){st!==ne&&!D&&(s.stencilMask(ne),st=ne)},setFunc:function(ne,Ze,ln){(H!==ne||$!==Ze||ht!==ln)&&(s.stencilFunc(ne,Ze,ln),H=ne,$=Ze,ht=ln)},setOp:function(ne,Ze,ln){(lt!==ne||Ut!==Ze||de!==ln)&&(s.stencilOp(ne,Ze,ln),lt=ne,Ut=Ze,de=ln)},setLocked:function(ne){D=ne},setClear:function(ne){Re!==ne&&(s.clearStencil(ne),Re=ne)},reset:function(){D=!1,st=null,H=null,$=null,ht=null,lt=null,Ut=null,de=null,Re=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,S=null,x=null,R=null,A=null,T=new ct(0,0,0),C=0,E=!1,M=null,P=null,N=null,B=null,V=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,K=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=K>=1):G.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=K>=2);let Y=null,ot={};const vt=s.getParameter(s.SCISSOR_BOX),Rt=s.getParameter(s.VIEWPORT),Gt=new se().fromArray(vt),X=new se().fromArray(Rt);function et(D,st,H,$){const ht=new Uint8Array(4),lt=s.createTexture();s.bindTexture(D,lt),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ut=0;Ut<H;Ut++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(st,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,ht):s.texImage2D(st+Ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ht);return lt}const _t={};_t[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),_t[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_t[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(s.DEPTH_TEST),o.setFunc(Mi),Ht(!1),Vt(Io),it(s.CULL_FACE),I(Tn);function it(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Tt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function It(D,st){return d[D]!==st?(s.bindFramebuffer(D,st),d[D]=st,D===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=st),D===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=st),!0):!1}function Ot(D,st){let H=p,$=!1;if(D){H=u.get(st),H===void 0&&(H=[],u.set(st,H));const ht=D.textures;if(H.length!==ht.length||H[0]!==s.COLOR_ATTACHMENT0){for(let lt=0,Ut=ht.length;lt<Ut;lt++)H[lt]=s.COLOR_ATTACHMENT0+lt;H.length=ht.length,$=!0}}else H[0]!==s.BACK&&(H[0]=s.BACK,$=!0);$&&s.drawBuffers(H)}function ue(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const jt={[zn]:s.FUNC_ADD,[Fl]:s.FUNC_SUBTRACT,[Nl]:s.FUNC_REVERSE_SUBTRACT};jt[Bl]=s.MIN,jt[Ol]=s.MAX;const ge={[zl]:s.ZERO,[kl]:s.ONE,[Gl]:s.SRC_COLOR,[gr]:s.SRC_ALPHA,[Yl]:s.SRC_ALPHA_SATURATE,[Xl]:s.DST_COLOR,[Vl]:s.DST_ALPHA,[Hl]:s.ONE_MINUS_SRC_COLOR,[_r]:s.ONE_MINUS_SRC_ALPHA,[ql]:s.ONE_MINUS_DST_COLOR,[Wl]:s.ONE_MINUS_DST_ALPHA,[jl]:s.CONSTANT_COLOR,[Zl]:s.ONE_MINUS_CONSTANT_COLOR,[$l]:s.CONSTANT_ALPHA,[Kl]:s.ONE_MINUS_CONSTANT_ALPHA};function I(D,st,H,$,ht,lt,Ut,de,Re,ne){if(D===Tn){_===!0&&(Tt(s.BLEND),_=!1);return}if(_===!1&&(it(s.BLEND),_=!0),D!==Ul){if(D!==m||ne!==E){if((f!==zn||x!==zn)&&(s.blendEquation(s.FUNC_ADD),f=zn,x=zn),ne)switch(D){case _i:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mr:s.blendFunc(s.ONE,s.ONE);break;case Do:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Uo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case _i:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Do:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Uo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,S=null,R=null,A=null,T.set(0,0,0),C=0,m=D,E=ne}return}ht=ht||st,lt=lt||H,Ut=Ut||$,(st!==f||ht!==x)&&(s.blendEquationSeparate(jt[st],jt[ht]),f=st,x=ht),(H!==v||$!==S||lt!==R||Ut!==A)&&(s.blendFuncSeparate(ge[H],ge[$],ge[lt],ge[Ut]),v=H,S=$,R=lt,A=Ut),(de.equals(T)===!1||Re!==C)&&(s.blendColor(de.r,de.g,de.b,Re),T.copy(de),C=Re),m=D,E=!1}function Xe(D,st){D.side===ye?Tt(s.CULL_FACE):it(s.CULL_FACE);let H=D.side===Ae;st&&(H=!H),Ht(H),D.blending===_i&&D.transparent===!1?I(Tn):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const $=D.stencilWrite;a.setTest($),$&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),le(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?it(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(D){M!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),M=D)}function Vt(D){D!==Il?(it(s.CULL_FACE),D!==P&&(D===Io?s.cullFace(s.BACK):D===Dl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),P=D}function St(D){D!==N&&(W&&s.lineWidth(D),N=D)}function le(D,st,H){D?(it(s.POLYGON_OFFSET_FILL),(B!==st||V!==H)&&(s.polygonOffset(st,H),B=st,V=H)):Tt(s.POLYGON_OFFSET_FILL)}function yt(D){D?it(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function b(D){D===void 0&&(D=s.TEXTURE0+q-1),Y!==D&&(s.activeTexture(D),Y=D)}function y(D,st,H){H===void 0&&(Y===null?H=s.TEXTURE0+q-1:H=Y);let $=ot[H];$===void 0&&($={type:void 0,texture:void 0},ot[H]=$),($.type!==D||$.texture!==st)&&(Y!==H&&(s.activeTexture(H),Y=H),s.bindTexture(D,st||_t[D]),$.type=D,$.texture=st)}function O(){const D=ot[Y];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Zt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(D){Gt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Gt.copy(D))}function mt(D){X.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function Wt(D,st){let H=c.get(st);H===void 0&&(H=new WeakMap,c.set(st,H));let $=H.get(D);$===void 0&&($=s.getUniformBlockIndex(st,D.name),H.set(D,$))}function Nt(D,st){const $=c.get(st).get(D);l.get(st)!==$&&(s.uniformBlockBinding(st,$,D.__bindingPointIndex),l.set(st,$))}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Y=null,ot={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,S=null,x=null,R=null,A=null,T=new ct(0,0,0),C=0,E=!1,M=null,P=null,N=null,B=null,V=null,Gt.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:Tt,bindFramebuffer:It,drawBuffers:Ot,useProgram:ue,setBlending:I,setMaterial:Xe,setFlipSided:Ht,setCullFace:Vt,setLineWidth:St,setPolygonOffset:le,setScissorTest:yt,activeTexture:b,bindTexture:y,unbindTexture:O,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:pt,texImage3D:bt,updateUBOMapping:Wt,uniformBlockBinding:Nt,texStorage2D:Zt,texStorage3D:tt,texSubImage2D:j,texSubImage3D:Mt,compressedTexSubImage2D:at,compressedTexSubImage3D:ft,scissor:Pt,viewport:mt,reset:oe}}function Zp(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return p?new OffscreenCanvas(b,y):Zi("canvas")}function _(b,y,O){let Z=1;const J=yt(b);if((J.width>O||J.height>O)&&(Z=O/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const j=Math.floor(Z*J.width),Mt=Math.floor(Z*J.height);d===void 0&&(d=g(j,Mt));const at=y?g(j,Mt):d;return at.width=j,at.height=Mt,at.getContext("2d").drawImage(b,0,0,j,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+Mt+")."),at}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){s.generateMipmap(b)}function v(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(b,y,O,Z,J=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let j=y;if(y===s.RED&&(O===s.FLOAT&&(j=s.R32F),O===s.HALF_FLOAT&&(j=s.R16F),O===s.UNSIGNED_BYTE&&(j=s.R8)),y===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.R8UI),O===s.UNSIGNED_SHORT&&(j=s.R16UI),O===s.UNSIGNED_INT&&(j=s.R32UI),O===s.BYTE&&(j=s.R8I),O===s.SHORT&&(j=s.R16I),O===s.INT&&(j=s.R32I)),y===s.RG&&(O===s.FLOAT&&(j=s.RG32F),O===s.HALF_FLOAT&&(j=s.RG16F),O===s.UNSIGNED_BYTE&&(j=s.RG8)),y===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RG8UI),O===s.UNSIGNED_SHORT&&(j=s.RG16UI),O===s.UNSIGNED_INT&&(j=s.RG32UI),O===s.BYTE&&(j=s.RG8I),O===s.SHORT&&(j=s.RG16I),O===s.INT&&(j=s.RG32I)),y===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RGB8UI),O===s.UNSIGNED_SHORT&&(j=s.RGB16UI),O===s.UNSIGNED_INT&&(j=s.RGB32UI),O===s.BYTE&&(j=s.RGB8I),O===s.SHORT&&(j=s.RGB16I),O===s.INT&&(j=s.RGB32I)),y===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),O===s.UNSIGNED_INT&&(j=s.RGBA32UI),O===s.BYTE&&(j=s.RGBA8I),O===s.SHORT&&(j=s.RGBA16I),O===s.INT&&(j=s.RGBA32I)),y===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),y===s.RGBA){const Mt=J?Ps:Jt.getTransfer(Z);O===s.FLOAT&&(j=s.RGBA32F),O===s.HALF_FLOAT&&(j=s.RGBA16F),O===s.UNSIGNED_BYTE&&(j=Mt===ie?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(b,y){let O;return b?y===null||y===jn||y===Ei?O=s.DEPTH24_STENCIL8:y===an?O=s.DEPTH32F_STENCIL8:y===Yi&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===jn||y===Ei?O=s.DEPTH_COMPONENT24:y===an?O=s.DEPTH_COMPONENT32F:y===Yi&&(O=s.DEPTH_COMPONENT16),O}function R(b,y){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==We&&b.minFilter!==on?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function A(b){const y=b.target;y.removeEventListener("dispose",A),C(y),y.isVideoTexture&&h.delete(y)}function T(b){const y=b.target;y.removeEventListener("dispose",T),M(y)}function C(b){const y=n.get(b);if(y.__webglInit===void 0)return;const O=b.source,Z=u.get(O);if(Z){const J=Z[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(b),Object.keys(Z).length===0&&u.delete(O)}n.remove(b)}function E(b){const y=n.get(b);s.deleteTexture(y.__webglTexture);const O=b.source,Z=u.get(O);delete Z[y.__cacheKey],o.memory.textures--}function M(b){const y=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let J=0;J<y.__webglFramebuffer[Z].length;J++)s.deleteFramebuffer(y.__webglFramebuffer[Z][J]);else s.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)s.deleteFramebuffer(y.__webglFramebuffer[Z]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=b.textures;for(let Z=0,J=O.length;Z<J;Z++){const j=n.get(O[Z]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(O[Z])}n.remove(b)}let P=0;function N(){P=0}function B(){const b=P;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),P+=1,b}function V(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function q(b,y){const O=n.get(b);if(b.isVideoTexture&&St(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const Z=b.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(O,b,y);return}}e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+y)}function W(b,y){const O=n.get(b);if(b.version>0&&O.__version!==b.version){X(O,b,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+y)}function K(b,y){const O=n.get(b);if(b.version>0&&O.__version!==b.version){X(O,b,y);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+y)}function G(b,y){const O=n.get(b);if(b.version>0&&O.__version!==b.version){et(O,b,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+y)}const Y={[Yn]:s.REPEAT,[Hn]:s.CLAMP_TO_EDGE,[Ar]:s.MIRRORED_REPEAT},ot={[We]:s.NEAREST,[oc]:s.NEAREST_MIPMAP_NEAREST,[Qi]:s.NEAREST_MIPMAP_LINEAR,[on]:s.LINEAR,[Bs]:s.LINEAR_MIPMAP_NEAREST,[Vn]:s.LINEAR_MIPMAP_LINEAR},vt={[hc]:s.NEVER,[gc]:s.ALWAYS,[uc]:s.LESS,[il]:s.LEQUAL,[dc]:s.EQUAL,[mc]:s.GEQUAL,[fc]:s.GREATER,[pc]:s.NOTEQUAL};function Rt(b,y){if(y.type===an&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===on||y.magFilter===Bs||y.magFilter===Qi||y.magFilter===Vn||y.minFilter===on||y.minFilter===Bs||y.minFilter===Qi||y.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,Y[y.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,Y[y.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,Y[y.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,ot[y.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,ot[y.minFilter]),y.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,vt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===We||y.minFilter!==Qi&&y.minFilter!==Vn||y.type===an&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Gt(b,y){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",A));const Z=y.source;let J=u.get(Z);J===void 0&&(J={},u.set(Z,J));const j=V(y);if(j!==b.__cacheKey){J[j]===void 0&&(J[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),J[j].usedTimes++;const Mt=J[b.__cacheKey];Mt!==void 0&&(J[b.__cacheKey].usedTimes--,Mt.usedTimes===0&&E(y)),b.__cacheKey=j,b.__webglTexture=J[j].texture}return O}function X(b,y,O){let Z=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=s.TEXTURE_3D);const J=Gt(b,y),j=y.source;e.bindTexture(Z,b.__webglTexture,s.TEXTURE0+O);const Mt=n.get(j);if(j.version!==Mt.__version||J===!0){e.activeTexture(s.TEXTURE0+O);const at=Jt.getPrimaries(Jt.workingColorSpace),ft=y.colorSpace===sn?null:Jt.getPrimaries(y.colorSpace),Zt=y.colorSpace===sn||at===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let tt=_(y.image,!1,i.maxTextureSize);tt=le(y,tt);const pt=r.convert(y.format,y.colorSpace),bt=r.convert(y.type);let Pt=S(y.internalFormat,pt,bt,y.colorSpace,y.isVideoTexture);Rt(Z,y);let mt;const Wt=y.mipmaps,Nt=y.isVideoTexture!==!0,oe=Mt.__version===void 0||J===!0,D=j.dataReady,st=R(y,tt);if(y.isDepthTexture)Pt=x(y.format===wi,y.type),oe&&(Nt?e.texStorage2D(s.TEXTURE_2D,1,Pt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,Pt,tt.width,tt.height,0,pt,bt,null));else if(y.isDataTexture)if(Wt.length>0){Nt&&oe&&e.texStorage2D(s.TEXTURE_2D,st,Pt,Wt[0].width,Wt[0].height);for(let H=0,$=Wt.length;H<$;H++)mt=Wt[H],Nt?D&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,mt.width,mt.height,pt,bt,mt.data):e.texImage2D(s.TEXTURE_2D,H,Pt,mt.width,mt.height,0,pt,bt,mt.data);y.generateMipmaps=!1}else Nt?(oe&&e.texStorage2D(s.TEXTURE_2D,st,Pt,tt.width,tt.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,pt,bt,tt.data)):e.texImage2D(s.TEXTURE_2D,0,Pt,tt.width,tt.height,0,pt,bt,tt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Nt&&oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,st,Pt,Wt[0].width,Wt[0].height,tt.depth);for(let H=0,$=Wt.length;H<$;H++)if(mt=Wt[H],y.format!==en)if(pt!==null)if(Nt){if(D)if(y.layerUpdates.size>0){const ht=da(mt.width,mt.height,y.format,y.type);for(const lt of y.layerUpdates){const Ut=mt.data.subarray(lt*ht/mt.data.BYTES_PER_ELEMENT,(lt+1)*ht/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,lt,mt.width,mt.height,1,pt,Ut)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,mt.width,mt.height,tt.depth,pt,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,H,Pt,mt.width,mt.height,tt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,mt.width,mt.height,tt.depth,pt,bt,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,H,Pt,mt.width,mt.height,tt.depth,0,pt,bt,mt.data)}else{Nt&&oe&&e.texStorage2D(s.TEXTURE_2D,st,Pt,Wt[0].width,Wt[0].height);for(let H=0,$=Wt.length;H<$;H++)mt=Wt[H],y.format!==en?pt!==null?Nt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,H,0,0,mt.width,mt.height,pt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,H,Pt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?D&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,mt.width,mt.height,pt,bt,mt.data):e.texImage2D(s.TEXTURE_2D,H,Pt,mt.width,mt.height,0,pt,bt,mt.data)}else if(y.isDataArrayTexture)if(Nt){if(oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,st,Pt,tt.width,tt.height,tt.depth),D)if(y.layerUpdates.size>0){const H=da(tt.width,tt.height,y.format,y.type);for(const $ of y.layerUpdates){const ht=tt.data.subarray($*H/tt.data.BYTES_PER_ELEMENT,($+1)*H/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,tt.width,tt.height,1,pt,bt,ht)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,pt,bt,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Pt,tt.width,tt.height,tt.depth,0,pt,bt,tt.data);else if(y.isData3DTexture)Nt?(oe&&e.texStorage3D(s.TEXTURE_3D,st,Pt,tt.width,tt.height,tt.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,pt,bt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,Pt,tt.width,tt.height,tt.depth,0,pt,bt,tt.data);else if(y.isFramebufferTexture){if(oe)if(Nt)e.texStorage2D(s.TEXTURE_2D,st,Pt,tt.width,tt.height);else{let H=tt.width,$=tt.height;for(let ht=0;ht<st;ht++)e.texImage2D(s.TEXTURE_2D,ht,Pt,H,$,0,pt,bt,null),H>>=1,$>>=1}}else if(Wt.length>0){if(Nt&&oe){const H=yt(Wt[0]);e.texStorage2D(s.TEXTURE_2D,st,Pt,H.width,H.height)}for(let H=0,$=Wt.length;H<$;H++)mt=Wt[H],Nt?D&&e.texSubImage2D(s.TEXTURE_2D,H,0,0,pt,bt,mt):e.texImage2D(s.TEXTURE_2D,H,Pt,pt,bt,mt);y.generateMipmaps=!1}else if(Nt){if(oe){const H=yt(tt);e.texStorage2D(s.TEXTURE_2D,st,Pt,H.width,H.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,pt,bt,tt)}else e.texImage2D(s.TEXTURE_2D,0,Pt,pt,bt,tt);m(y)&&f(Z),Mt.__version=j.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function et(b,y,O){if(y.image.length!==6)return;const Z=Gt(b,y),J=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+O);const j=n.get(J);if(J.version!==j.__version||Z===!0){e.activeTexture(s.TEXTURE0+O);const Mt=Jt.getPrimaries(Jt.workingColorSpace),at=y.colorSpace===sn?null:Jt.getPrimaries(y.colorSpace),ft=y.colorSpace===sn||Mt===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Zt=y.isCompressedTexture||y.image[0].isCompressedTexture,tt=y.image[0]&&y.image[0].isDataTexture,pt=[];for(let $=0;$<6;$++)!Zt&&!tt?pt[$]=_(y.image[$],!0,i.maxCubemapSize):pt[$]=tt?y.image[$].image:y.image[$],pt[$]=le(y,pt[$]);const bt=pt[0],Pt=r.convert(y.format,y.colorSpace),mt=r.convert(y.type),Wt=S(y.internalFormat,Pt,mt,y.colorSpace),Nt=y.isVideoTexture!==!0,oe=j.__version===void 0||Z===!0,D=J.dataReady;let st=R(y,bt);Rt(s.TEXTURE_CUBE_MAP,y);let H;if(Zt){Nt&&oe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,st,Wt,bt.width,bt.height);for(let $=0;$<6;$++){H=pt[$].mipmaps;for(let ht=0;ht<H.length;ht++){const lt=H[ht];y.format!==en?Pt!==null?Nt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,0,0,lt.width,lt.height,Pt,lt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,Wt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,0,0,lt.width,lt.height,Pt,mt,lt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht,Wt,lt.width,lt.height,0,Pt,mt,lt.data)}}}else{if(H=y.mipmaps,Nt&&oe){H.length>0&&st++;const $=yt(pt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,st,Wt,$.width,$.height)}for(let $=0;$<6;$++)if(tt){Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pt[$].width,pt[$].height,Pt,mt,pt[$].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Wt,pt[$].width,pt[$].height,0,Pt,mt,pt[$].data);for(let ht=0;ht<H.length;ht++){const Ut=H[ht].image[$].image;Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,0,0,Ut.width,Ut.height,Pt,mt,Ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,Wt,Ut.width,Ut.height,0,Pt,mt,Ut.data)}}else{Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Pt,mt,pt[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Wt,Pt,mt,pt[$]);for(let ht=0;ht<H.length;ht++){const lt=H[ht];Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,0,0,Pt,mt,lt.image[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ht+1,Wt,Pt,mt,lt.image[$])}}}m(y)&&f(s.TEXTURE_CUBE_MAP),j.__version=J.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function _t(b,y,O,Z,J,j){const Mt=r.convert(O.format,O.colorSpace),at=r.convert(O.type),ft=S(O.internalFormat,Mt,at,O.colorSpace),Zt=n.get(y),tt=n.get(O);if(tt.__renderTarget=y,!Zt.__hasExternalTextures){const pt=Math.max(1,y.width>>j),bt=Math.max(1,y.height>>j);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,j,ft,pt,bt,y.depth,0,Mt,at,null):e.texImage2D(J,j,ft,pt,bt,0,Mt,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,b),Vt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,J,tt.__webglTexture,0,Ht(y)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,J,tt.__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function it(b,y,O){if(s.bindRenderbuffer(s.RENDERBUFFER,b),y.depthBuffer){const Z=y.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,j=x(y.stencilBuffer,J),Mt=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=Ht(y);Vt(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,j,y.width,y.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,j,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,j,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,b)}else{const Z=y.textures;for(let J=0;J<Z.length;J++){const j=Z[J],Mt=r.convert(j.format,j.colorSpace),at=r.convert(j.type),ft=S(j.internalFormat,Mt,at,j.colorSpace),Zt=Ht(y);O&&Vt(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,ft,y.width,y.height):Vt(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Zt,ft,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ft,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Tt(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(y.depthTexture);Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q(y.depthTexture,0);const J=Z.__webglTexture,j=Ht(y);if(y.depthTexture.format===xi)Vt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(y.depthTexture.format===wi)Vt(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function It(b){const y=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){const Z=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=Z}if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Tt(y.__webglFramebuffer,b)}else if(O){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=s.createRenderbuffer(),it(y.__webglDepthbuffer[Z],b,!1);else{const J=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,j)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),it(y.__webglDepthbuffer,b,!1);else{const Z=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,J)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(b,y,O){const Z=n.get(b);y!==void 0&&_t(Z.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&It(b)}function ue(b){const y=b.texture,O=n.get(b),Z=n.get(y);b.addEventListener("dispose",T);const J=b.textures,j=b.isWebGLCubeRenderTarget===!0,Mt=J.length>1;if(Mt||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=y.version,o.memory.textures++),j){O.__webglFramebuffer=[];for(let at=0;at<6;at++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[at]=[];for(let ft=0;ft<y.mipmaps.length;ft++)O.__webglFramebuffer[at][ft]=s.createFramebuffer()}else O.__webglFramebuffer[at]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let at=0;at<y.mipmaps.length;at++)O.__webglFramebuffer[at]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Mt)for(let at=0,ft=J.length;at<ft;at++){const Zt=n.get(J[at]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=s.createTexture(),o.memory.textures++)}if(b.samples>0&&Vt(b)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let at=0;at<J.length;at++){const ft=J[at];O.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[at]);const Zt=r.convert(ft.format,ft.colorSpace),tt=r.convert(ft.type),pt=S(ft.internalFormat,Zt,tt,ft.colorSpace,b.isXRRenderTarget===!0),bt=Ht(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,bt,pt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,O.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),it(O.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Rt(s.TEXTURE_CUBE_MAP,y);for(let at=0;at<6;at++)if(y.mipmaps&&y.mipmaps.length>0)for(let ft=0;ft<y.mipmaps.length;ft++)_t(O.__webglFramebuffer[at][ft],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,ft);else _t(O.__webglFramebuffer[at],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(y)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let at=0,ft=J.length;at<ft;at++){const Zt=J[at],tt=n.get(Zt);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),Rt(s.TEXTURE_2D,Zt),_t(O.__webglFramebuffer,b,Zt,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,0),m(Zt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(at=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,Z.__webglTexture),Rt(at,y),y.mipmaps&&y.mipmaps.length>0)for(let ft=0;ft<y.mipmaps.length;ft++)_t(O.__webglFramebuffer[ft],b,y,s.COLOR_ATTACHMENT0,at,ft);else _t(O.__webglFramebuffer,b,y,s.COLOR_ATTACHMENT0,at,0);m(y)&&f(at),e.unbindTexture()}b.depthBuffer&&It(b)}function jt(b){const y=b.textures;for(let O=0,Z=y.length;O<Z;O++){const J=y[O];if(m(J)){const j=v(b),Mt=n.get(J).__webglTexture;e.bindTexture(j,Mt),f(j),e.unbindTexture()}}}const ge=[],I=[];function Xe(b){if(b.samples>0){if(Vt(b)===!1){const y=b.textures,O=b.width,Z=b.height;let J=s.COLOR_BUFFER_BIT;const j=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=n.get(b),at=y.length>1;if(at)for(let ft=0;ft<y.length;ft++)e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let ft=0;ft<y.length;ft++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[ft]);const Zt=n.get(y[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Zt,0)}s.blitFramebuffer(0,0,O,Z,0,0,O,Z,J,s.NEAREST),l===!0&&(ge.length=0,I.length=0,ge.push(s.COLOR_ATTACHMENT0+ft),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ge.push(j),I.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ge))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let ft=0;ft<y.length;ft++){e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[ft]);const Zt=n.get(y[ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,Zt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const y=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Ht(b){return Math.min(i.maxSamples,b.samples)}function Vt(b){const y=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function St(b){const y=o.render.frame;h.get(b)!==y&&(h.set(b,y),b.update())}function le(b,y){const O=b.colorSpace,Z=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==bi&&O!==sn&&(Jt.getTransfer(O)===ie?(Z!==en||J!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function yt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=W,this.setTexture3D=K,this.setTextureCube=G,this.rebindTextures=Ot,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Vt}function $p(s,t){function e(n,i=sn){let r;const o=Jt.getTransfer(i);if(n===vn)return s.UNSIGNED_BYTE;if(n===ao)return s.UNSIGNED_SHORT_4_4_4_4;if(n===lo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Za)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ya)return s.BYTE;if(n===ja)return s.SHORT;if(n===Yi)return s.UNSIGNED_SHORT;if(n===oo)return s.INT;if(n===jn)return s.UNSIGNED_INT;if(n===an)return s.FLOAT;if(n===$i)return s.HALF_FLOAT;if(n===$a)return s.ALPHA;if(n===Ka)return s.RGB;if(n===en)return s.RGBA;if(n===Ja)return s.LUMINANCE;if(n===Qa)return s.LUMINANCE_ALPHA;if(n===xi)return s.DEPTH_COMPONENT;if(n===wi)return s.DEPTH_STENCIL;if(n===co)return s.RED;if(n===ho)return s.RED_INTEGER;if(n===tl)return s.RG;if(n===uo)return s.RG_INTEGER;if(n===fo)return s.RGBA_INTEGER;if(n===ws||n===bs||n===Ts||n===As)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ws)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===As)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ws)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ts)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===As)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cr||n===Rr||n===Pr||n===Lr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Cr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Lr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ir||n===Dr||n===Ur)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ir||n===Dr)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ur)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fr||n===Nr||n===Br||n===Or||n===zr||n===kr||n===Gr||n===Hr||n===Vr||n===Wr||n===Xr||n===qr||n===Yr||n===jr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Br)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Or)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jr)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cs||n===Zr||n===$r)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Cs)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$r)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===el||n===Kr||n===Jr||n===Qr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Cs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Kr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ei?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Kp={type:"move"};class dr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kp)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Jp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ce,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ze({vertexShader:Jp,fragmentShader:Qp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ut(new _e(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class em extends Ai{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const _=new tm,m=e.getContextAttributes();let f=null,v=null;const S=[],x=[],R=new Ct;let A=null;const T=new Ve;T.viewport=new se;const C=new Ve;C.viewport=new se;const E=[T,C],M=new Mh;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=S[X];return et===void 0&&(et=new dr,S[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=S[X];return et===void 0&&(et=new dr,S[X]=et),et.getGripSpace()},this.getHand=function(X){let et=S[X];return et===void 0&&(et=new dr,S[X]=et),et.getHandSpace()};function B(X){const et=x.indexOf(X.inputSource);if(et===-1)return;const _t=S[et];_t!==void 0&&(_t.update(X.inputSource,X.frame,c||o),_t.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",q);for(let X=0;X<S.length;X++){const et=x[X];et!==null&&(x[X]=null,S[X].disconnect(et))}P=null,N=null,_.reset(),t.setRenderTarget(f),p=null,u=null,d=null,i=null,v=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",V),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let _t=null,it=null,Tt=null;m.depth&&(Tt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=m.stencil?wi:xi,it=m.stencil?Ei:jn);const It={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(It),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Zn(u.textureWidth,u.textureHeight,{format:en,type:vn,depthTexture:new gl(u.textureWidth,u.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}else{const _t={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,_t),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Zn(p.framebufferWidth,p.framebufferHeight,{format:en,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Gt.setContext(i),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(X){for(let et=0;et<X.removed.length;et++){const _t=X.removed[et],it=x.indexOf(_t);it>=0&&(x[it]=null,S[it].disconnect(_t))}for(let et=0;et<X.added.length;et++){const _t=X.added[et];let it=x.indexOf(_t);if(it===-1){for(let It=0;It<S.length;It++)if(It>=x.length){x.push(_t),it=It;break}else if(x[It]===null){x[It]=_t,it=It;break}if(it===-1)break}const Tt=S[it];Tt&&Tt.connect(_t)}}const W=new L,K=new L;function G(X,et,_t){W.setFromMatrixPosition(et.matrixWorld),K.setFromMatrixPosition(_t.matrixWorld);const it=W.distanceTo(K),Tt=et.projectionMatrix.elements,It=_t.projectionMatrix.elements,Ot=Tt[14]/(Tt[10]-1),ue=Tt[14]/(Tt[10]+1),jt=(Tt[9]+1)/Tt[5],ge=(Tt[9]-1)/Tt[5],I=(Tt[8]-1)/Tt[0],Xe=(It[8]+1)/It[0],Ht=Ot*I,Vt=Ot*Xe,St=it/(-I+Xe),le=St*-I;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(le),X.translateZ(St),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Tt[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const yt=Ot+St,b=ue+St,y=Ht-le,O=Vt+(it-le),Z=jt*ue/b*yt,J=ge*ue/b*yt;X.projectionMatrix.makePerspective(y,O,Z,J,yt,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Y(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let et=X.near,_t=X.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),M.near=C.near=T.near=et,M.far=C.far=T.far=_t,(P!==M.near||N!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,N=M.far),T.layers.mask=X.layers.mask|2,C.layers.mask=X.layers.mask|4,M.layers.mask=T.layers.mask|C.layers.mask;const it=X.parent,Tt=M.cameras;Y(M,it);for(let It=0;It<Tt.length;It++)Y(Tt[It],it);Tt.length===2?G(M,T,C):M.projectionMatrix.copy(T.projectionMatrix),ot(X,M,it)};function ot(X,et,_t){_t===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(_t.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ji*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let vt=null;function Rt(X,et){if(h=et.getViewerPose(c||o),g=et,h!==null){const _t=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let it=!1;_t.length!==M.cameras.length&&(M.cameras.length=0,it=!0);for(let It=0;It<_t.length;It++){const Ot=_t[It];let ue=null;if(p!==null)ue=p.getViewport(Ot);else{const ge=d.getViewSubImage(u,Ot);ue=ge.viewport,It===0&&(t.setRenderTargetTextures(v,ge.colorTexture,u.ignoreDepthValues?void 0:ge.depthStencilTexture),t.setRenderTarget(v))}let jt=E[It];jt===void 0&&(jt=new Ve,jt.layers.enable(It),jt.viewport=new se,E[It]=jt),jt.matrix.fromArray(Ot.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Ot.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(ue.x,ue.y,ue.width,ue.height),It===0&&(M.matrix.copy(jt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),it===!0&&M.cameras.push(jt)}const Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const It=d.getDepthInformation(_t[0]);It&&It.isValid&&It.texture&&_.init(t,It,i.renderState)}}for(let _t=0;_t<S.length;_t++){const it=x[_t],Tt=S[_t];it!==null&&Tt!==void 0&&Tt.update(it,et,c||o)}vt&&vt(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Gt=new yl;Gt.setAnimationLoop(Rt),this.setAnimationLoop=function(X){vt=X},this.dispose=function(){}}}const Nn=new Oe,nm=new Yt;function im(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,dl(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,v,S,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ae&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ae&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=t.get(f),S=v.envMap,x=v.envMapRotation;S&&(m.envMap.value=S,Nn.copy(x),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),m.envMapRotation.value.setFromMatrix4(nm.makeRotationFromEuler(Nn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=S*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ae&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function sm(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){const x=S.program;n.uniformBlockBinding(v,x)}function c(v,S){let x=i[v.id];x===void 0&&(g(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",m));const R=S.program;n.updateUBOMapping(v,R);const A=t.render.frame;r[v.id]!==A&&(u(v),r[v.id]=A)}function h(v){const S=d();v.__bindingPointIndex=S;const x=s.createBuffer(),R=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,R,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,x),x}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const S=i[v.id],x=v.uniforms,R=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let A=0,T=x.length;A<T;A++){const C=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,M=C.length;E<M;E++){const P=C[E];if(p(P,A,E,R)===!0){const N=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let q=0;q<B.length;q++){const W=B[q],K=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,N+V,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,V),V+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(v,S,x,R){const A=v.value,T=S+"_"+x;if(R[T]===void 0)return typeof A=="number"||typeof A=="boolean"?R[T]=A:R[T]=A.clone(),!0;{const C=R[T];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return R[T]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(v){const S=v.uniforms;let x=0;const R=16;for(let T=0,C=S.length;T<C;T++){const E=Array.isArray(S[T])?S[T]:[S[T]];for(let M=0,P=E.length;M<P;M++){const N=E[M],B=Array.isArray(N.value)?N.value:[N.value];for(let V=0,q=B.length;V<q;V++){const W=B[V],K=_(W),G=x%R,Y=G%K.boundary,ot=G+Y;x+=Y,ot!==0&&R-ot<K.storage&&(x+=R-ot),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=K.storage}}}const A=x%R;return A>0&&(x+=R-A),v.__size=x,v.__cache={},this}function _(v){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),S}function m(v){const S=v.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function f(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:f}}class rm{constructor(t={}){const{canvas:e=Dc(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const v=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=An,this.toneMappingExposure=1;const x=this;let R=!1,A=0,T=0,C=null,E=-1,M=null;const P=new se,N=new se;let B=null;const V=new ct(0);let q=0,W=e.width,K=e.height,G=1,Y=null,ot=null;const vt=new se(0,0,W,K),Rt=new se(0,0,W,K);let Gt=!1;const X=new go;let et=!1,_t=!1;this.transmissionResolutionScale=1;const it=new Yt,Tt=new Yt,It=new L,Ot=new se,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function ge(){return C===null?G:1}let I=n;function Xe(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${so}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",lt,!1),I===null){const U="webgl2";if(I=Xe(U,w),I===null)throw Xe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ht,Vt,St,le,yt,b,y,O,Z,J,j,Mt,at,ft,Zt,tt,pt,bt,Pt,mt,Wt,Nt,oe,D;function st(){Ht=new pf(I),Ht.init(),Nt=new $p(I,Ht),Vt=new lf(I,Ht,t,Nt),St=new jp(I,Ht),Vt.reverseDepthBuffer&&u&&St.buffers.depth.setReversed(!0),le=new _f(I),yt=new Fp,b=new Zp(I,Ht,St,yt,Vt,Nt,le),y=new hf(x),O=new ff(x),Z=new Eh(I),oe=new of(I,Z),J=new mf(I,Z,le,oe),j=new vf(I,J,Z,le),Pt=new xf(I,Vt,b),tt=new cf(yt),Mt=new Up(x,y,O,Ht,Vt,oe,tt),at=new im(x,yt),ft=new Bp,Zt=new Vp(Ht),bt=new rf(x,y,O,St,j,p,l),pt=new qp(x,j,Vt),D=new sm(I,le,Vt,St),mt=new af(I,Ht,le),Wt=new gf(I,Ht,le),le.programs=Mt.programs,x.capabilities=Vt,x.extensions=Ht,x.properties=yt,x.renderLists=ft,x.shadowMap=pt,x.state=St,x.info=le}st();const H=new em(x,I);this.xr=H,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=Ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(W,K,!1))},this.getSize=function(w){return w.set(W,K)},this.setSize=function(w,U,z=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,K=U,e.width=Math.floor(w*G),e.height=Math.floor(U*G),z===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(W*G,K*G).floor()},this.setDrawingBufferSize=function(w,U,z){W=w,K=U,G=z,e.width=Math.floor(w*z),e.height=Math.floor(U*z),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(vt)},this.setViewport=function(w,U,z,k){w.isVector4?vt.set(w.x,w.y,w.z,w.w):vt.set(w,U,z,k),St.viewport(P.copy(vt).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(Rt)},this.setScissor=function(w,U,z,k){w.isVector4?Rt.set(w.x,w.y,w.z,w.w):Rt.set(w,U,z,k),St.scissor(N.copy(Rt).multiplyScalar(G).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(w){St.setScissorTest(Gt=w)},this.setOpaqueSort=function(w){Y=w},this.setTransparentSort=function(w){ot=w},this.getClearColor=function(w){return w.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(w=!0,U=!0,z=!0){let k=0;if(w){let F=!1;if(C!==null){const Q=C.texture.format;F=Q===fo||Q===uo||Q===ho}if(F){const Q=C.texture.type,rt=Q===vn||Q===jn||Q===Yi||Q===Ei||Q===ao||Q===lo,dt=bt.getClearColor(),gt=bt.getClearAlpha(),Lt=dt.r,Dt=dt.g,Et=dt.b;rt?(g[0]=Lt,g[1]=Dt,g[2]=Et,g[3]=gt,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Lt,_[1]=Dt,_[2]=Et,_[3]=gt,I.clearBufferiv(I.COLOR,0,_))}else k|=I.COLOR_BUFFER_BIT}U&&(k|=I.DEPTH_BUFFER_BIT),z&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),bt.dispose(),ft.dispose(),Zt.dispose(),yt.dispose(),y.dispose(),O.dispose(),j.dispose(),oe.dispose(),D.dispose(),Mt.dispose(),H.dispose(),H.removeEventListener("sessionstart",bo),H.removeEventListener("sessionend",To),Rn.stop()};function $(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const w=le.autoReset,U=pt.enabled,z=pt.autoUpdate,k=pt.needsUpdate,F=pt.type;st(),le.autoReset=w,pt.enabled=U,pt.autoUpdate=z,pt.needsUpdate=k,pt.type=F}function lt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ut(w){const U=w.target;U.removeEventListener("dispose",Ut),de(U)}function de(w){Re(w),yt.remove(w)}function Re(w){const U=yt.get(w).programs;U!==void 0&&(U.forEach(function(z){Mt.releaseProgram(z)}),w.isShaderMaterial&&Mt.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,z,k,F,Q){U===null&&(U=ue);const rt=F.isMesh&&F.matrixWorld.determinant()<0,dt=Tl(w,U,z,k,F);St.setMaterial(k,rt);let gt=z.index,Lt=1;if(k.wireframe===!0){if(gt=J.getWireframeAttribute(z),gt===void 0)return;Lt=2}const Dt=z.drawRange,Et=z.attributes.position;let $t=Dt.start*Lt,te=(Dt.start+Dt.count)*Lt;Q!==null&&($t=Math.max($t,Q.start*Lt),te=Math.min(te,(Q.start+Q.count)*Lt)),gt!==null?($t=Math.max($t,0),te=Math.min(te,gt.count)):Et!=null&&($t=Math.max($t,0),te=Math.min(te,Et.count));const ve=te-$t;if(ve<0||ve===1/0)return;oe.setup(F,k,dt,z,gt);let fe,Kt=mt;if(gt!==null&&(fe=Z.get(gt),Kt=Wt,Kt.setIndex(fe)),F.isMesh)k.wireframe===!0?(St.setLineWidth(k.wireframeLinewidth*ge()),Kt.setMode(I.LINES)):Kt.setMode(I.TRIANGLES);else if(F.isLine){let wt=k.linewidth;wt===void 0&&(wt=1),St.setLineWidth(wt*ge()),F.isLineSegments?Kt.setMode(I.LINES):F.isLineLoop?Kt.setMode(I.LINE_LOOP):Kt.setMode(I.LINE_STRIP)}else F.isPoints?Kt.setMode(I.POINTS):F.isSprite&&Kt.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Kt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))Kt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const wt=F._multiDrawStarts,be=F._multiDrawCounts,ee=F._multiDrawCount,$e=gt?Z.get(gt).bytesPerElement:1,Kn=yt.get(k).currentProgram.getUniforms();for(let ke=0;ke<ee;ke++)Kn.setValue(I,"_gl_DrawID",ke),Kt.render(wt[ke]/$e,be[ke])}else if(F.isInstancedMesh)Kt.renderInstances($t,ve,F.count);else if(z.isInstancedBufferGeometry){const wt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,be=Math.min(z.instanceCount,wt);Kt.renderInstances($t,ve,be)}else Kt.render($t,ve)};function ne(w,U,z){w.transparent===!0&&w.side===ye&&w.forceSinglePass===!1?(w.side=Ae,w.needsUpdate=!0,Ji(w,U,z),w.side=xn,w.needsUpdate=!0,Ji(w,U,z),w.side=ye):Ji(w,U,z)}this.compile=function(w,U,z=null){z===null&&(z=w),f=Zt.get(z),f.init(U),S.push(f),z.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),w!==z&&w.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const k=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const Q=F.material;if(Q)if(Array.isArray(Q))for(let rt=0;rt<Q.length;rt++){const dt=Q[rt];ne(dt,z,F),k.add(dt)}else ne(Q,z,F),k.add(Q)}),S.pop(),f=null,k},this.compileAsync=function(w,U,z=null){const k=this.compile(w,U,z);return new Promise(F=>{function Q(){if(k.forEach(function(rt){yt.get(rt).currentProgram.isReady()&&k.delete(rt)}),k.size===0){F(w);return}setTimeout(Q,10)}Ht.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ze=null;function ln(w){Ze&&Ze(w)}function bo(){Rn.stop()}function To(){Rn.start()}const Rn=new yl;Rn.setAnimationLoop(ln),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(w){Ze=w,H.setAnimationLoop(w),w===null?Rn.stop():Rn.start()},H.addEventListener("sessionstart",bo),H.addEventListener("sessionend",To),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(U),U=H.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,U,C),f=Zt.get(w,S.length),f.init(U),S.push(f),Tt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(Tt),_t=this.localClippingEnabled,et=tt.init(this.clippingPlanes,_t),m=ft.get(w,v.length),m.init(),v.push(m),H.enabled===!0&&H.isPresenting===!0){const Q=x.xr.getDepthSensingMesh();Q!==null&&Fs(Q,U,-1/0,x.sortObjects)}Fs(w,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Y,ot),jt=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,jt&&bt.addToRenderList(m,w),this.info.render.frame++,et===!0&&tt.beginShadows();const z=f.state.shadowsArray;pt.render(z,w,U),et===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,F=m.transmissive;if(f.setupLights(),U.isArrayCamera){const Q=U.cameras;if(F.length>0)for(let rt=0,dt=Q.length;rt<dt;rt++){const gt=Q[rt];Co(k,F,w,gt)}jt&&bt.render(w);for(let rt=0,dt=Q.length;rt<dt;rt++){const gt=Q[rt];Ao(m,w,gt,gt.viewport)}}else F.length>0&&Co(k,F,w,U),jt&&bt.render(w),Ao(m,w,U);C!==null&&T===0&&(b.updateMultisampleRenderTarget(C),b.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(x,w,U),oe.resetDefaultState(),E=-1,M=null,S.pop(),S.length>0?(f=S[S.length-1],et===!0&&tt.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Fs(w,U,z,k){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){k&&Ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Tt);const rt=j.update(w),dt=w.material;dt.visible&&m.push(w,rt,dt,z,Ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){const rt=j.update(w),dt=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ot.copy(w.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),Ot.copy(rt.boundingSphere.center)),Ot.applyMatrix4(w.matrixWorld).applyMatrix4(Tt)),Array.isArray(dt)){const gt=rt.groups;for(let Lt=0,Dt=gt.length;Lt<Dt;Lt++){const Et=gt[Lt],$t=dt[Et.materialIndex];$t&&$t.visible&&m.push(w,rt,$t,z,Ot.z,Et)}}else dt.visible&&m.push(w,rt,dt,z,Ot.z,null)}}const Q=w.children;for(let rt=0,dt=Q.length;rt<dt;rt++)Fs(Q[rt],U,z,k)}function Ao(w,U,z,k){const F=w.opaque,Q=w.transmissive,rt=w.transparent;f.setupLightsView(z),et===!0&&tt.setGlobalState(x.clippingPlanes,z),k&&St.viewport(P.copy(k)),F.length>0&&Ki(F,U,z),Q.length>0&&Ki(Q,U,z),rt.length>0&&Ki(rt,U,z),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Co(w,U,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new Zn(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?$i:vn,minFilter:Vn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const Q=f.state.transmissionRenderTarget[k.id],rt=k.viewport||P;Q.setSize(rt.z*x.transmissionResolutionScale,rt.w*x.transmissionResolutionScale);const dt=x.getRenderTarget();x.setRenderTarget(Q),x.getClearColor(V),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),jt&&bt.render(z);const gt=x.toneMapping;x.toneMapping=An;const Lt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),et===!0&&tt.setGlobalState(x.clippingPlanes,k),Ki(w,z,k),b.updateMultisampleRenderTarget(Q),b.updateRenderTargetMipmap(Q),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let Et=0,$t=U.length;Et<$t;Et++){const te=U[Et],ve=te.object,fe=te.geometry,Kt=te.material,wt=te.group;if(Kt.side===ye&&ve.layers.test(k.layers)){const be=Kt.side;Kt.side=Ae,Kt.needsUpdate=!0,Ro(ve,z,k,fe,Kt,wt),Kt.side=be,Kt.needsUpdate=!0,Dt=!0}}Dt===!0&&(b.updateMultisampleRenderTarget(Q),b.updateRenderTargetMipmap(Q))}x.setRenderTarget(dt),x.setClearColor(V,q),Lt!==void 0&&(k.viewport=Lt),x.toneMapping=gt}function Ki(w,U,z){const k=U.isScene===!0?U.overrideMaterial:null;for(let F=0,Q=w.length;F<Q;F++){const rt=w[F],dt=rt.object,gt=rt.geometry,Lt=k===null?rt.material:k,Dt=rt.group;dt.layers.test(z.layers)&&Ro(dt,U,z,gt,Lt,Dt)}}function Ro(w,U,z,k,F,Q){w.onBeforeRender(x,U,z,k,F,Q),w.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(x,U,z,k,w,Q),F.transparent===!0&&F.side===ye&&F.forceSinglePass===!1?(F.side=Ae,F.needsUpdate=!0,x.renderBufferDirect(z,U,k,F,w,Q),F.side=xn,F.needsUpdate=!0,x.renderBufferDirect(z,U,k,F,w,Q),F.side=ye):x.renderBufferDirect(z,U,k,F,w,Q),w.onAfterRender(x,U,z,k,F,Q)}function Ji(w,U,z){U.isScene!==!0&&(U=ue);const k=yt.get(w),F=f.state.lights,Q=f.state.shadowsArray,rt=F.state.version,dt=Mt.getParameters(w,F.state,Q,U,z),gt=Mt.getProgramCacheKey(dt);let Lt=k.programs;k.environment=w.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(w.isMeshStandardMaterial?O:y).get(w.envMap||k.environment),k.envMapRotation=k.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Lt===void 0&&(w.addEventListener("dispose",Ut),Lt=new Map,k.programs=Lt);let Dt=Lt.get(gt);if(Dt!==void 0){if(k.currentProgram===Dt&&k.lightsStateVersion===rt)return Lo(w,dt),Dt}else dt.uniforms=Mt.getUniforms(w),w.onBeforeCompile(dt,x),Dt=Mt.acquireProgram(dt,gt),Lt.set(gt,Dt),k.uniforms=dt.uniforms;const Et=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Et.clippingPlanes=tt.uniform),Lo(w,dt),k.needsLights=Cl(w),k.lightsStateVersion=rt,k.needsLights&&(Et.ambientLightColor.value=F.state.ambient,Et.lightProbe.value=F.state.probe,Et.directionalLights.value=F.state.directional,Et.directionalLightShadows.value=F.state.directionalShadow,Et.spotLights.value=F.state.spot,Et.spotLightShadows.value=F.state.spotShadow,Et.rectAreaLights.value=F.state.rectArea,Et.ltc_1.value=F.state.rectAreaLTC1,Et.ltc_2.value=F.state.rectAreaLTC2,Et.pointLights.value=F.state.point,Et.pointLightShadows.value=F.state.pointShadow,Et.hemisphereLights.value=F.state.hemi,Et.directionalShadowMap.value=F.state.directionalShadowMap,Et.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Et.spotShadowMap.value=F.state.spotShadowMap,Et.spotLightMatrix.value=F.state.spotLightMatrix,Et.spotLightMap.value=F.state.spotLightMap,Et.pointShadowMap.value=F.state.pointShadowMap,Et.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Dt,k.uniformsList=null,Dt}function Po(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Rs.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Lo(w,U){const z=yt.get(w);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Tl(w,U,z,k,F){U.isScene!==!0&&(U=ue),b.resetTextureUnits();const Q=U.fog,rt=k.isMeshStandardMaterial?U.environment:null,dt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:bi,gt=(k.isMeshStandardMaterial?O:y).get(k.envMap||rt),Lt=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Dt=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Et=!!z.morphAttributes.position,$t=!!z.morphAttributes.normal,te=!!z.morphAttributes.color;let ve=An;k.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ve=x.toneMapping);const fe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Kt=fe!==void 0?fe.length:0,wt=yt.get(k),be=f.state.lights;if(et===!0&&(_t===!0||w!==M)){const De=w===M&&k.id===E;tt.setState(k,w,De)}let ee=!1;k.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==be.state.version||wt.outputColorSpace!==dt||F.isBatchedMesh&&wt.batching===!1||!F.isBatchedMesh&&wt.batching===!0||F.isBatchedMesh&&wt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&wt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&wt.instancing===!1||!F.isInstancedMesh&&wt.instancing===!0||F.isSkinnedMesh&&wt.skinning===!1||!F.isSkinnedMesh&&wt.skinning===!0||F.isInstancedMesh&&wt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&wt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&wt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&wt.instancingMorph===!1&&F.morphTexture!==null||wt.envMap!==gt||k.fog===!0&&wt.fog!==Q||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==tt.numPlanes||wt.numIntersection!==tt.numIntersection)||wt.vertexAlphas!==Lt||wt.vertexTangents!==Dt||wt.morphTargets!==Et||wt.morphNormals!==$t||wt.morphColors!==te||wt.toneMapping!==ve||wt.morphTargetsCount!==Kt)&&(ee=!0):(ee=!0,wt.__version=k.version);let $e=wt.currentProgram;ee===!0&&($e=Ji(k,U,F));let Kn=!1,ke=!1,Ii=!1;const he=$e.getUniforms(),qe=wt.uniforms;if(St.useProgram($e.program)&&(Kn=!0,ke=!0,Ii=!0),k.id!==E&&(E=k.id,ke=!0),Kn||M!==w){St.buffers.depth.getReversed()?(it.copy(w.projectionMatrix),Fc(it),Nc(it),he.setValue(I,"projectionMatrix",it)):he.setValue(I,"projectionMatrix",w.projectionMatrix),he.setValue(I,"viewMatrix",w.matrixWorldInverse);const Ne=he.map.cameraPosition;Ne!==void 0&&Ne.setValue(I,It.setFromMatrixPosition(w.matrixWorld)),Vt.logarithmicDepthBuffer&&he.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&he.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,ke=!0,Ii=!0)}if(F.isSkinnedMesh){he.setOptional(I,F,"bindMatrix"),he.setOptional(I,F,"bindMatrixInverse");const De=F.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),he.setValue(I,"boneTexture",De.boneTexture,b))}F.isBatchedMesh&&(he.setOptional(I,F,"batchingTexture"),he.setValue(I,"batchingTexture",F._matricesTexture,b),he.setOptional(I,F,"batchingIdTexture"),he.setValue(I,"batchingIdTexture",F._indirectTexture,b),he.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&he.setValue(I,"batchingColorTexture",F._colorsTexture,b));const Ye=z.morphAttributes;if((Ye.position!==void 0||Ye.normal!==void 0||Ye.color!==void 0)&&Pt.update(F,z,$e),(ke||wt.receiveShadow!==F.receiveShadow)&&(wt.receiveShadow=F.receiveShadow,he.setValue(I,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(qe.envMap.value=gt,qe.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(qe.envMapIntensity.value=U.environmentIntensity),ke&&(he.setValue(I,"toneMappingExposure",x.toneMappingExposure),wt.needsLights&&Al(qe,Ii),Q&&k.fog===!0&&at.refreshFogUniforms(qe,Q),at.refreshMaterialUniforms(qe,k,G,K,f.state.transmissionRenderTarget[w.id]),Rs.upload(I,Po(wt),qe,b)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Rs.upload(I,Po(wt),qe,b),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&he.setValue(I,"center",F.center),he.setValue(I,"modelViewMatrix",F.modelViewMatrix),he.setValue(I,"normalMatrix",F.normalMatrix),he.setValue(I,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const De=k.uniformsGroups;for(let Ne=0,Ns=De.length;Ne<Ns;Ne++){const Pn=De[Ne];D.update(Pn,$e),D.bind(Pn,$e)}}return $e}function Al(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Cl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,U,z){yt.get(w.texture).__webglTexture=U,yt.get(w.depthTexture).__webglTexture=z;const k=yt.get(w);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const z=yt.get(w);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const Rl=I.createFramebuffer();this.setRenderTarget=function(w,U=0,z=0){C=w,A=U,T=z;let k=!0,F=null,Q=!1,rt=!1;if(w){const gt=yt.get(w);if(gt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(I.FRAMEBUFFER,null),k=!1;else if(gt.__webglFramebuffer===void 0)b.setupRenderTarget(w);else if(gt.__hasExternalTextures)b.rebindTextures(w,yt.get(w.texture).__webglTexture,yt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Et=w.depthTexture;if(gt.__boundDepthTexture!==Et){if(Et!==null&&yt.has(Et)&&(w.width!==Et.image.width||w.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(w)}}const Lt=w.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(rt=!0);const Dt=yt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Dt[U])?F=Dt[U][z]:F=Dt[U],Q=!0):w.samples>0&&b.useMultisampledRTT(w)===!1?F=yt.get(w).__webglMultisampledFramebuffer:Array.isArray(Dt)?F=Dt[z]:F=Dt,P.copy(w.viewport),N.copy(w.scissor),B=w.scissorTest}else P.copy(vt).multiplyScalar(G).floor(),N.copy(Rt).multiplyScalar(G).floor(),B=Gt;if(z!==0&&(F=Rl),St.bindFramebuffer(I.FRAMEBUFFER,F)&&k&&St.drawBuffers(w,F),St.viewport(P),St.scissor(N),St.setScissorTest(B),Q){const gt=yt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,gt.__webglTexture,z)}else if(rt){const gt=yt.get(w.texture),Lt=U;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,gt.__webglTexture,z,Lt)}else if(w!==null&&z!==0){const gt=yt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,gt.__webglTexture,z)}E=-1},this.readRenderTargetPixels=function(w,U,z,k,F,Q,rt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=yt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&rt!==void 0&&(dt=dt[rt]),dt){St.bindFramebuffer(I.FRAMEBUFFER,dt);try{const gt=w.texture,Lt=gt.format,Dt=gt.type;if(!Vt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-k&&z>=0&&z<=w.height-F&&I.readPixels(U,z,k,F,Nt.convert(Lt),Nt.convert(Dt),Q)}finally{const gt=C!==null?yt.get(C).__webglFramebuffer:null;St.bindFramebuffer(I.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(w,U,z,k,F,Q,rt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=yt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&rt!==void 0&&(dt=dt[rt]),dt){const gt=w.texture,Lt=gt.format,Dt=gt.type;if(!Vt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-k&&z>=0&&z<=w.height-F){St.bindFramebuffer(I.FRAMEBUFFER,dt);const Et=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Et),I.bufferData(I.PIXEL_PACK_BUFFER,Q.byteLength,I.STREAM_READ),I.readPixels(U,z,k,F,Nt.convert(Lt),Nt.convert(Dt),0);const $t=C!==null?yt.get(C).__webglFramebuffer:null;St.bindFramebuffer(I.FRAMEBUFFER,$t);const te=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Uc(I,te,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Et),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Q),I.deleteBuffer(Et),I.deleteSync(te),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,z=0){w.isTexture!==!0&&(pi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const k=Math.pow(2,-z),F=Math.floor(w.image.width*k),Q=Math.floor(w.image.height*k),rt=U!==null?U.x:0,dt=U!==null?U.y:0;b.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,rt,dt,F,Q),St.unbindTexture()};const Pl=I.createFramebuffer(),Ll=I.createFramebuffer();this.copyTextureToTexture=function(w,U,z=null,k=null,F=0,Q=null){w.isTexture!==!0&&(pi("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1],U=arguments[2],Q=arguments[3]||0,z=null),Q===null&&(F!==0?(pi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=F,F=0):Q=0);let rt,dt,gt,Lt,Dt,Et,$t,te,ve;const fe=w.isCompressedTexture?w.mipmaps[Q]:w.image;if(z!==null)rt=z.max.x-z.min.x,dt=z.max.y-z.min.y,gt=z.isBox3?z.max.z-z.min.z:1,Lt=z.min.x,Dt=z.min.y,Et=z.isBox3?z.min.z:0;else{const Ye=Math.pow(2,-F);rt=Math.floor(fe.width*Ye),dt=Math.floor(fe.height*Ye),w.isDataArrayTexture?gt=fe.depth:w.isData3DTexture?gt=Math.floor(fe.depth*Ye):gt=1,Lt=0,Dt=0,Et=0}k!==null?($t=k.x,te=k.y,ve=k.z):($t=0,te=0,ve=0);const Kt=Nt.convert(U.format),wt=Nt.convert(U.type);let be;U.isData3DTexture?(b.setTexture3D(U,0),be=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(b.setTexture2DArray(U,0),be=I.TEXTURE_2D_ARRAY):(b.setTexture2D(U,0),be=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const ee=I.getParameter(I.UNPACK_ROW_LENGTH),$e=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Kn=I.getParameter(I.UNPACK_SKIP_PIXELS),ke=I.getParameter(I.UNPACK_SKIP_ROWS),Ii=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,fe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Lt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Dt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Et);const he=w.isDataArrayTexture||w.isData3DTexture,qe=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){const Ye=yt.get(w),De=yt.get(U),Ne=yt.get(Ye.__renderTarget),Ns=yt.get(De.__renderTarget);St.bindFramebuffer(I.READ_FRAMEBUFFER,Ne.__webglFramebuffer),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ns.__webglFramebuffer);for(let Pn=0;Pn<gt;Pn++)he&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.get(w).__webglTexture,F,Et+Pn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.get(U).__webglTexture,Q,ve+Pn)),I.blitFramebuffer(Lt,Dt,rt,dt,$t,te,rt,dt,I.DEPTH_BUFFER_BIT,I.NEAREST);St.bindFramebuffer(I.READ_FRAMEBUFFER,null),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(F!==0||w.isRenderTargetTexture||yt.has(w)){const Ye=yt.get(w),De=yt.get(U);St.bindFramebuffer(I.READ_FRAMEBUFFER,Pl),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ll);for(let Ne=0;Ne<gt;Ne++)he?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ye.__webglTexture,F,Et+Ne):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ye.__webglTexture,F),qe?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,De.__webglTexture,Q,ve+Ne):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,De.__webglTexture,Q),F!==0?I.blitFramebuffer(Lt,Dt,rt,dt,$t,te,rt,dt,I.COLOR_BUFFER_BIT,I.NEAREST):qe?I.copyTexSubImage3D(be,Q,$t,te,ve+Ne,Lt,Dt,rt,dt):I.copyTexSubImage2D(be,Q,$t,te,Lt,Dt,rt,dt);St.bindFramebuffer(I.READ_FRAMEBUFFER,null),St.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else qe?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(be,Q,$t,te,ve,rt,dt,gt,Kt,wt,fe.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(be,Q,$t,te,ve,rt,dt,gt,Kt,fe.data):I.texSubImage3D(be,Q,$t,te,ve,rt,dt,gt,Kt,wt,fe):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Q,$t,te,rt,dt,Kt,wt,fe.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Q,$t,te,fe.width,fe.height,Kt,fe.data):I.texSubImage2D(I.TEXTURE_2D,Q,$t,te,rt,dt,Kt,wt,fe);I.pixelStorei(I.UNPACK_ROW_LENGTH,ee),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,$e),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Kn),I.pixelStorei(I.UNPACK_SKIP_ROWS,ke),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ii),Q===0&&U.generateMipmaps&&I.generateMipmap(be),St.unbindTexture()},this.copyTextureToTexture3D=function(w,U,z=null,k=null,F=0){return w.isTexture!==!0&&(pi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,w=arguments[2],U=arguments[3],F=arguments[4]||0),pi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,z,k,F)},this.initRenderTarget=function(w){yt.get(w).__webglFramebuffer===void 0&&b.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),St.unbindTexture()},this.resetState=function(){A=0,T=0,C=null,St.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}const Na="sarab_settings_v4",qn=typeof window<"u"&&(/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||"ontouchstart"in window&&Math.min(window.innerWidth,window.innerHeight)<900),fr={low:{label:"منخفض",dprCap:.8,shadowMapSize:512,shadows:!1,dustCount:90,stormStreaks:120,cloudOctaves:2,anisotropy:1,sunFlare:!0,resolutionScale:.78,sandSparkle:!1},medium:{label:"متوسط",dprCap:1.05,shadowMapSize:1024,shadows:!0,dustCount:160,stormStreaks:200,cloudOctaves:3,anisotropy:2,sunFlare:!0,resolutionScale:.9,sandSparkle:!1},high:{label:"عالي",dprCap:1.35,shadowMapSize:2048,shadows:!0,dustCount:240,stormStreaks:280,cloudOctaves:4,anisotropy:4,sunFlare:!0,resolutionScale:1,sandSparkle:!0},ultra:{label:"فائق",dprCap:1.7,shadowMapSize:2048,shadows:!0,dustCount:320,stormStreaks:300,cloudOctaves:5,anisotropy:8,sunFlare:!0,resolutionScale:1.1,sandSparkle:!0}},Ba={quality:qn?"medium":"high",sensitivity:2.2,resolutionScale:qn?.9:1,fov:72,volume:.85,shadows:!0,sunFlare:!0,dustStorm:!0,showFps:!1};class om{constructor(){this.data={...Ba},this.listeners=new Set,this.load()}load(){try{const t=localStorage.getItem(Na);if(t){const e=JSON.parse(t);this.data={...Ba,...e}}}catch{}}save(){try{localStorage.setItem(Na,JSON.stringify(this.data))}catch{}}getPreset(){return fr[this.data.quality]||fr.medium}applyQualityPreset(t){const e=fr[t];e&&(this.data.quality=t,this.data.shadows=e.shadows,this.data.sunFlare=e.sunFlare,this.data.resolutionScale=e.resolutionScale,this.save(),this.emit())}set(t,e){this.data[t]=e,this.save(),this.emit()}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}emit(){for(const t of this.listeners)t(this.data,this.getPreset())}}const Oa=typeof window<"u"&&(/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||"")||"ontouchstart"in window&&Math.min(window.innerWidth,window.innerHeight)<920);class am{constructor(t){this.renderer=t,this.loader=new _l,this.sets=new Map,this.anisotropy=Math.min(Oa?4:8,t.capabilities.getMaxAnisotropy())}setAnisotropy(t){this.anisotropy=Math.min(t,this.renderer.capabilities.getMaxAnisotropy());for(const e of this.sets.values())for(const n of Object.values(e))n&&n.isTexture&&(n.anisotropy=this.anisotropy,n.needsUpdate=!0)}loadPBRSet(t,e=1,n=1){const i=`${t}_${e}_${n}`;if(this.sets.has(i))return this.sets.get(i);const r=(u,p)=>(u.wrapS=Yn,u.wrapT=Yn,u.repeat.set(e,n),u.anisotropy=this.anisotropy,u.colorSpace=p?Ie:sn,u),o=Oa?"_512.webp":".webp",a=`./textures/${t}`,l=r(this.loader.load(`${a}_albedo${o}`),!0),c=r(this.loader.load(`${a}_normal${o}`),!1),h=r(this.loader.load(`${a}_roughness${o}`),!1),d={map:l,normalMap:c,roughnessMap:h};return this.sets.set(i,d),d}createContactShadowTexture(){if(this._shadowTex)return this._shadowTex;const t=128,e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d"),i=n.createRadialGradient(t/2,t/2,4,t/2,t/2,t/2);i.addColorStop(0,"rgba(32, 20, 10, 0.42)"),i.addColorStop(.38,"rgba(38, 24, 12, 0.24)"),i.addColorStop(.72,"rgba(42, 28, 14, 0.06)"),i.addColorStop(1,"rgba(42, 28, 14, 0.0)"),n.fillStyle=i,n.fillRect(0,0,t,t);const r=new Ms(e);return this._shadowTex=r,r}createTwigClusterTexture(){if(this._twigTex)return this._twigTex;const t=256,e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d");n.clearRect(0,0,t,t);const i=t*.5,r=t*.5;let o=31337;const a=()=>(o=o*16807%2147483647,(o-1)/2147483646);for(let c=0;c<210;c++){const h=a()*Math.PI*2,d=Math.pow(a(),.75)*.44*t,u=h+(a()-.5)*2.8+(d<t*.14?Math.PI:0),p=(.04+Math.pow(a(),.65)*.42)*t,g=i+Math.cos(h)*d,_=r+Math.sin(h)*d,m=i+Math.cos(u)*p,f=r+Math.sin(u)*p,v=(g+m)*.5+(a()-.5)*28,S=(_+f)*.5+(a()-.5)*28,x=Math.round(132+a()*68);if(n.strokeStyle=`rgb(${x}, ${Math.round(x*.84)}, ${Math.round(x*.58)})`,n.lineWidth=1.4+a()*2,n.lineCap="round",n.beginPath(),n.moveTo(g,_),n.quadraticCurveTo(v,S,m,f),n.stroke(),a()>.4){const R=v+(a()-.5)*16,A=S+(a()-.5)*16;n.lineWidth=1,n.beginPath(),n.moveTo(v,S),n.lineTo(R,A),n.stroke()}}const l=new Ms(e);return l.colorSpace=Ie,this._twigTex=l,l}createDustParticleTexture(){if(this._dustTex)return this._dustTex;const t=64,e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d"),i=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);i.addColorStop(0,"rgba(255, 244, 222, 0.85)"),i.addColorStop(.35,"rgba(245, 212, 162, 0.45)"),i.addColorStop(.7,"rgba(232, 185, 124, 0.12)"),i.addColorStop(1,"rgba(232, 185, 124, 0.0)"),n.fillStyle=i,n.fillRect(0,0,t,t);const r=new Ms(e);return this._dustTex=r,r}createFootprintTexture(){if(this._footTex)return this._footTex;const t=64,e=128,n=document.createElement("canvas");n.width=t,n.height=e;const i=n.getContext("2d");i.clearRect(0,0,t,e);const r=(a,l,c,h,d)=>{i.save(),i.translate(a,l),i.scale(c,h);const u=i.createRadialGradient(0,0,.1,0,0,1);u.addColorStop(0,`rgba(74, 46, 20, ${d})`),u.addColorStop(.7,`rgba(92, 58, 26, ${d*.65})`),u.addColorStop(1,"rgba(92, 58, 26, 0)"),i.fillStyle=u,i.beginPath(),i.arc(0,0,1,0,Math.PI*2),i.fill(),i.restore()};r(32,42,19,32,.48),r(32,92,15,22,.45);const o=new Ms(n);return this._footTex=o,o}}class lm{constructor(){this.manifest={},this.geometries=new Map,this.materials=new Map,this.loader=new _l}async preloadAll(){try{const t=await fetch("./models/manifest.json");if(!t.ok)return;this.manifest=await t.json();const e=Object.keys(this.manifest);await Promise.all(e.map(n=>this._loadModel(n,this.manifest[n])))}catch(t){console.warn("ModelManager preload warning:",t)}}async _loadModel(t,e){const[n,i,r]=await Promise.all([fetch(`./models/${t}.bin`).then(m=>m.arrayBuffer()),e.hasDiff?this._loadTex(`./models/${t}_diff.webp`,!0):Promise.resolve(null),e.hasNor?this._loadTex(`./models/${t}_nor.webp`,!1):Promise.resolve(null)]),o=new Uint32Array(n,0,2),a=o[0],l=o[1],c=new Float32Array(n,8,a*8),h=new Uint16Array(n,8+a*32,l),d=new Float32Array(a*3),u=new Float32Array(a*3),p=new Float32Array(a*2);for(let m=0;m<a;m++){const f=m*8;d[m*3]=c[f],d[m*3+1]=c[f+1],d[m*3+2]=c[f+2],u[m*3]=c[f+3],u[m*3+1]=c[f+4],u[m*3+2]=c[f+5],p[m*2]=c[f+6],p[m*2+1]=1-c[f+7]}const g=new me;g.setAttribute("position",new Qt(d,3)),g.setAttribute("normal",new Qt(u,3)),g.setAttribute("uv",new Qt(p,2)),g.setIndex(new Qt(h.slice(),1)),g.computeBoundingBox(),g.computeBoundingSphere();const _=new re({map:i||null,normalMap:r||null,normalScale:new Ct(t.startsWith("rock")?.78:.72,t.startsWith("rock")?.78:.72),roughness:t==="compass"||t==="lantern"?.58:.88,metalness:t==="compass"||t==="lantern"?.42:.04,side:t.startsWith("rock")?ye:xn});_.name=`scan_${t}`,t==="table"||t==="chair"?(_.onBeforeCompile=m=>{m.fragmentShader=m.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
           float _woodLuma = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
           float _grain = clamp(_woodLuma * 1.15, 0.16, 0.96);
           vec3 _desertCedar = vec3(0.32, 0.21, 0.11);
           vec3 _bleachedHighlight = vec3(0.54, 0.40, 0.25);
           diffuseColor.rgb = mix(_desertCedar, _bleachedHighlight, smoothstep(0.25, 0.88, _grain)) * (0.68 + _grain * 0.52);`)},_.customProgramCacheKey=()=>`scan_wood_retint_${t}`):t.startsWith("rock")&&_.color.set("#d8c4a6"),this.geometries.set(t,g),this.materials.set(t,_)}_loadTex(t,e){return new Promise(n=>{this.loader.load(t,i=>{i.colorSpace=e?Ie:sn,i.wrapS=Yn,i.wrapT=Yn,n(i)},void 0,()=>n(null))})}getGeometry(t){return this.geometries.get(t)||null}getMaterial(t){return this.materials.get(t)||null}getMeta(t){return this.manifest[t]||null}createMesh(t,e=1){const n=this.getGeometry(t),i=this.getMaterial(t);if(!n||!i)return null;const r=new ut(n,i);return r.scale.setScalar(e),r}}class cm{constructor(){this.ctx=null,this.masterGain=null,this.volume=.85,this.unlocked=!1,this.windGain=null,this.windFilterLow=null,this.windFilterHigh=null,this.indoorFactor=0,this.timeOfDay=0,this.radioActive=!1,this.radioGain=null,this._noiseBuffer=null,this._blipCounter=0}unlock(){if(this.unlocked&&this.ctx){this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.volume,this.masterGain.connect(this.ctx.destination),this._noiseBuffer=this._createNoiseBuffer(4),this._setupDesertWind(),this.unlocked=!0,this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}))}setVolume(t){this.volume=Math.max(0,Math.min(1,t)),this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(this.volume,this.ctx.currentTime,.05)}_createNoiseBuffer(t){const e=this.ctx.sampleRate,n=Math.floor(e*t),i=this.ctx.createBuffer(1,n,e),r=i.getChannelData(0);let o=0,a=0,l=0,c=0,h=0,d=0,u=0;for(let p=0;p<n;p++){const g=Math.random()*2-1;o=.99886*o+g*.0555179,a=.99332*a+g*.0750759,l=.969*l+g*.153852,c=.8665*c+g*.3104856,h=.55*h+g*.5329522,d=-.7616*d-g*.016898,r[p]=(o+a+l+c+h+d+u+g*.5362)*.055,u=g*.115926}return i}_setupDesertWind(){const t=this.ctx.currentTime;this.windGain=this.ctx.createGain(),this.windGain.gain.value=.24,this.windGain.connect(this.masterGain);const e=this.ctx.createBufferSource();e.buffer=this._noiseBuffer,e.loop=!0,this.windFilterLow=this.ctx.createBiquadFilter(),this.windFilterLow.type="bandpass",this.windFilterLow.frequency.value=260,this.windFilterLow.Q.value=1.4;const n=this.ctx.createGain();n.gain.value=.72,e.connect(this.windFilterLow),this.windFilterLow.connect(n),n.connect(this.windGain),e.start(t);const i=this.ctx.createBufferSource();i.buffer=this._noiseBuffer,i.loop=!0,this.windFilterHigh=this.ctx.createBiquadFilter(),this.windFilterHigh.type="bandpass",this.windFilterHigh.frequency.value=1450,this.windFilterHigh.Q.value=2.6;const r=this.ctx.createGain();r.gain.value=.22,i.connect(this.windFilterHigh),this.windFilterHigh.connect(r),r.connect(this.windGain),i.start(t+1.1);const o=this.ctx.createOscillator();o.type="sine",o.frequency.value=.11;const a=this.ctx.createGain();a.gain.value=110,o.connect(a),a.connect(this.windFilterLow.frequency),o.start(t);const l=this.ctx.createOscillator();l.type="sine",l.frequency.value=.07;const c=this.ctx.createGain();c.gain.value=420,l.connect(c),c.connect(this.windFilterHigh.frequency),l.start(t),this.stormWhistleGain=this.ctx.createGain(),this.stormWhistleGain.gain.value=0;const h=this.ctx.createOscillator();h.type="sine",h.frequency.value=185;const d=this.ctx.createOscillator();d.type="sine",d.frequency.value=.23;const u=this.ctx.createGain();u.gain.value=38,d.connect(u),u.connect(h.frequency),h.connect(this.stormWhistleGain),this.stormWhistleGain.connect(this.masterGain),h.start(t),d.start(t),this.stormIntensity=0}setStormIntensity(t){this.stormIntensity=Math.max(0,Math.min(1,t))}updateAmbience(t,e,n,i){if(!this.unlocked||!this.ctx||!this.windGain)return;this.indoorFactor+=(e-this.indoorFactor)*Math.min(1,t*4.5),this.timeOfDay=n;const r=this.ctx.currentTime,o=this.stormIntensity||0,a=.85+.22*Math.sin(i*(.37+o*.8))+.14*Math.sin(i*(.91+o*1.4)),c=(.24+n*.09+o*.52)*a*(1-this.indoorFactor*(.56-o*.12));this.windGain.gain.setTargetAtTime(c,r,.12);const h=(250+n*65+o*210)*(1-this.indoorFactor*.42),d=(1520+o*680)*(1-this.indoorFactor*.65);if(this.windFilterLow.frequency.setTargetAtTime(h,r,.18),this.windFilterHigh.frequency.setTargetAtTime(d,r,.18),this.stormWhistleGain){const u=o*o*.055*(1-this.indoorFactor*.6);this.stormWhistleGain.gain.setTargetAtTime(u,r,.15)}}playTextBlip(t="thought",e=""){if(!this.unlocked||!this.ctx||!e||/[\s،.؟!…—\-:]/.test(e))return;this._blipCounter++;const n=this.ctx.currentTime,i=this.ctx.createOscillator(),r=this.ctx.createBiquadFilter(),o=this.ctx.createGain(),a=[262,277,311,330,294,277],l=[349,370,415,392,349],c=[520,610,480,680,560];if(t==="radio"){i.type="sawtooth";const h=c[this._blipCounter%c.length];i.frequency.setValueAtTime(h+(Math.random()-.5)*35,n),r.type="bandpass",r.frequency.value=1450,r.Q.value=3.2,o.gain.setValueAtTime(.001,n),o.gain.linearRampToValueAtTime(.055,n+.006),o.gain.exponentialRampToValueAtTime(8e-4,n+.048)}else if(t==="journal"){i.type="triangle";const h=l[this._blipCounter%l.length];i.frequency.setValueAtTime(h+(Math.random()-.5)*14,n),r.type="lowpass",r.frequency.value=1350,o.gain.setValueAtTime(.001,n),o.gain.linearRampToValueAtTime(.07,n+.005),o.gain.exponentialRampToValueAtTime(8e-4,n+.046)}else{i.type="triangle";const h=a[this._blipCounter%a.length],d=(Math.random()-.5)*18;i.frequency.setValueAtTime(h+d,n),i.frequency.exponentialRampToValueAtTime((h+d)*.88,n+.042),r.type="bandpass",r.frequency.value=920,r.Q.value=1.1,o.gain.setValueAtTime(.001,n),o.gain.linearRampToValueAtTime(.088,n+.004),o.gain.exponentialRampToValueAtTime(8e-4,n+.048)}i.connect(r),r.connect(o),o.connect(this.masterGain),i.start(n),i.stop(n+.055)}playFootstep(t="sand",e=!1){if(!this.unlocked||!this.ctx||!this._noiseBuffer)return;const n=this.ctx.currentTime,i=this.ctx.createBufferSource();i.buffer=this._noiseBuffer;const r=Math.random()*2.4,o=this.ctx.createBiquadFilter(),a=this.ctx.createGain(),l=e?.24:.16;if(t==="stone"){o.type="bandpass",o.frequency.value=680+Math.random()*190,o.Q.value=2,a.gain.setValueAtTime(.001,n),a.gain.linearRampToValueAtTime(l*1.15,n+.008),a.gain.exponentialRampToValueAtTime(.001,n+.09);const c=this.ctx.createOscillator(),h=this.ctx.createGain();c.frequency.setValueAtTime(115,n),c.frequency.exponentialRampToValueAtTime(48,n+.06),h.gain.setValueAtTime(l*.5,n),h.gain.exponentialRampToValueAtTime(.001,n+.065),c.connect(h),h.connect(this.masterGain),c.start(n),c.stop(n+.07)}else o.type="bandpass",o.frequency.value=950+Math.random()*340,o.Q.value=.85,a.gain.setValueAtTime(.001,n),a.gain.linearRampToValueAtTime(l,n+.032),a.gain.exponentialRampToValueAtTime(.001,n+.18);i.connect(o),o.connect(a),a.connect(this.masterGain),i.start(n,r,.22)}playWakeUpTinnitus(){if(!this.unlocked||!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(3400,t),e.frequency.exponentialRampToValueAtTime(2600,t+3.2),n.gain.setValueAtTime(1e-4,t),n.gain.linearRampToValueAtTime(.032,t+.5),n.gain.exponentialRampToValueAtTime(1e-4,t+3.8),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+4)}playSunGlareSwell(){if(!this.unlocked||!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(160,t),e.frequency.exponentialRampToValueAtTime(420,t+.7),e.frequency.exponentialRampToValueAtTime(140,t+1.8),n.gain.setValueAtTime(.001,t),n.gain.linearRampToValueAtTime(.09,t+.55),n.gain.exponentialRampToValueAtTime(.001,t+1.9),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+2)}playPaperRustle(){if(!this.unlocked||!this.ctx||!this._noiseBuffer)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this._noiseBuffer;const n=this.ctx.createBiquadFilter();n.type="highpass",n.frequency.value=1800;const i=this.ctx.createGain();i.gain.setValueAtTime(.001,t),i.gain.linearRampToValueAtTime(.16,t+.04),i.gain.exponentialRampToValueAtTime(.001,t+.24),e.connect(n),n.connect(i),i.connect(this.masterGain),e.start(t,.5,.28)}playMetalSwitch(){if(!this.unlocked||!this.ctx)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="square",e.frequency.setValueAtTime(220,t),e.frequency.exponentialRampToValueAtTime(65,t+.14),n.gain.setValueAtTime(.14,t),n.gain.exponentialRampToValueAtTime(.001,t+.18),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.2);const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(60,t+.12),r.gain.setValueAtTime(.001,t+.12),r.gain.linearRampToValueAtTime(.05,t+.35),r.gain.exponentialRampToValueAtTime(.001,t+1.2),i.connect(r),r.connect(this.masterGain),i.start(t+.12),i.stop(t+1.25)}playRadioBurst(){if(!this.unlocked||!this.ctx||!this._noiseBuffer)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this._noiseBuffer;const n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.setValueAtTime(1600,t),n.frequency.linearRampToValueAtTime(2600,t+.8),n.frequency.linearRampToValueAtTime(1200,t+1.8),n.Q.value=3.5;const i=this.ctx.createGain();i.gain.setValueAtTime(.001,t),i.gain.linearRampToValueAtTime(.18,t+.12),i.gain.setValueAtTime(.15,t+1.6),i.gain.exponentialRampToValueAtTime(.001,t+2.4),e.connect(n),n.connect(i),i.connect(this.masterGain),e.start(t,.2,2.5),[.25,.45,.65,1.05,1.45].forEach((o,a)=>{const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type="sine",l.frequency.value=780;const h=a>=3?.24:.11;c.gain.setValueAtTime(.001,t+o),c.gain.linearRampToValueAtTime(.06,t+o+.01),c.gain.exponentialRampToValueAtTime(.001,t+o+h),l.connect(c),c.connect(this.masterGain),l.start(t+o),l.stop(t+o+h+.02)})}playDesertSting(t=!1){if(!this.unlocked||!this.ctx)return;const e=this.ctx.currentTime,n=t?[110,164.8,220,233.1]:[146.8,220,293.7],i=t?4.4:2.6;n.forEach((r,o)=>{const a=this.ctx.createOscillator(),l=this.ctx.createBiquadFilter(),c=this.ctx.createGain();a.type=o===0?"sawtooth":"triangle",a.frequency.setValueAtTime(r,e),l.type="lowpass",l.frequency.setValueAtTime(o===0?320:780,e),c.gain.setValueAtTime(1e-4,e),c.gain.linearRampToValueAtTime(.055/(o*.35+1),e+.6),c.gain.exponentialRampToValueAtTime(1e-4,e+i),a.connect(l),l.connect(c),c.connect(this.masterGain),a.start(e),a.stop(e+i+.1)})}}class hm{constructor(t){this.getTerrainHeight=t,this.aabbs=[],this.obbs=[],this.cylinders=[],this.ellipses=[],this.mesas=[],this.floorZones=[],this.interiorZones=[],this.worldRadius=176}addBoxCollider(t,e,n,i,r=-10,o=14,a=null){const l=a!==null?a:o<=2.35;this.aabbs.push({minX:t,maxX:e,minZ:n,maxZ:i,minY:r,maxY:o,climbable:l})}addOBBCollider(t,e,n,i,r=0,o=-5,a=2,l=null,c=!0){this.obbs.push({x:t,z:e,hx:n,hz:i,cos:Math.cos(-r),sin:Math.sin(-r),minY:o,maxY:a,hoodY:l!==null?l:a,climbable:c})}addCylinderCollider(t,e,n,i=12){this.cylinders.push({x:t,z:e,r:n*.96,maxY:i,climbable:i<2.2})}addEllipseCollider(t,e,n,i,r=0,o=1.5,a=!0){this.ellipses.push({x:t,z:e,rx:Math.max(.28,n*.98),rz:Math.max(.28,i*.98),cos:Math.cos(-r),sin:Math.sin(-r),topY:o,climbable:a})}addMesaCollider(t,e,n,i,r=0,o=0,a=25){this.mesas.push({x:t,z:e,rx:n*.96,rz:i*.96,cos:Math.cos(-r),sin:Math.sin(-r),baseY:o,height:a})}addFloorZone(t,e,n,i,r,o="stone"){this.floorZones.push({minX:t,maxX:e,minZ:n,maxZ:i,y:r,surface:o})}addInteriorZone(t,e,n,i,r=-1,o=7){this.interiorZones.push({minX:t,maxX:e,minZ:n,maxZ:i,minY:r,maxY:o})}getGroundInfo(t,e,n=0){let i=this.getTerrainHeight(t,e),r="sand";const o=n+.58;for(let a=0;a<this.floorZones.length;a++){const l=this.floorZones[a];t>=l.minX&&t<=l.maxX&&e>=l.minZ&&e<=l.maxZ&&l.y>=i-.22&&(i=Math.max(i,l.y),r=l.surface)}for(let a=0;a<this.ellipses.length;a++){const l=this.ellipses[a];if(!l.climbable)continue;const c=t-l.x,h=e-l.z,d=Math.max(l.rx,l.rz)+.28;if(c*c+h*h>d*d)continue;const u=c*l.cos-h*l.sin,p=c*l.sin+h*l.cos,g=u/(l.rx+.12),_=p/(l.rz+.12),m=g*g+_*_;if(m<=1){const f=i+(l.topY-i)*Math.sqrt(Math.max(0,1-m*.55));f<=o&&f>i&&(i=f,r="stone")}}for(let a=0;a<this.obbs.length;a++){const l=this.obbs[a];if(!l.climbable)continue;const c=t-l.x,h=e-l.z,d=c*l.cos-h*l.sin,u=c*l.sin+h*l.cos;if(Math.abs(d)<=l.hx+.16&&Math.abs(u)<=l.hz+.16){const p=u>.25?l.hoodY:l.maxY;p<=o&&p>i&&(i=p,r="stone")}}for(let a=0;a<this.aabbs.length;a++){const l=this.aabbs[a];l.climbable&&t>=l.minX-.15&&t<=l.maxX+.15&&e>=l.minZ-.15&&e<=l.maxZ+.15&&l.maxY<=o&&l.maxY>i&&(i=l.maxY,r="stone")}for(let a=0;a<this.mesas.length;a++){const l=this.mesas[a],c=t-l.x,h=e-l.z,d=Math.max(l.rx,l.rz)+.5;if(c*c+h*h>d*d)continue;const u=c*l.cos-h*l.sin,p=c*l.sin+h*l.cos,g=Math.hypot(u/l.rx,p/l.rz);if(g<1&&g>.82){const _=(1-g)/.18,m=l.baseY+_*2.1;m<=o&&m>i&&(i=m,r="stone")}}return{groundY:i,surface:r}}isInsideBuilding(t){for(let e=0;e<this.interiorZones.length;e++){const n=this.interiorZones[e];if(t.x>=n.minX&&t.x<=n.maxX&&t.z>=n.minZ&&t.z<=n.maxZ&&t.y>=n.minY&&t.y<=n.maxY)return!0}return!1}resolveHorizontal(t,e=.36){const n=t.y+.48;for(let h=0;h<3;h++){for(let d=0;d<this.aabbs.length;d++){const u=this.aabbs[d],p=u.climbable?n:t.y+.18;if(u.maxY<=p||t.y+1.68<u.minY)continue;const g=Math.max(u.minX,Math.min(t.x,u.maxX)),_=Math.max(u.minZ,Math.min(t.z,u.maxZ)),m=t.x-g,f=t.z-_,v=m*m+f*f;if(v<e*e)if(v>1e-6){const S=Math.sqrt(v),x=e-S;t.x+=m/S*x,t.z+=f/S*x}else{const S=Math.abs(t.x-u.minX),x=Math.abs(u.maxX-t.x),R=Math.abs(t.z-u.minZ),A=Math.abs(u.maxZ-t.z),T=Math.min(S,x,R,A);T===S?t.x=u.minX-e:T===x?t.x=u.maxX+e:T===R?t.z=u.minZ-e:t.z=u.maxZ+e}}for(let d=0;d<this.obbs.length;d++){const u=this.obbs[d],p=t.x-u.x,g=t.z-u.z,_=p*u.cos-g*u.sin,m=p*u.sin+g*u.cos,f=m>.25?u.hoodY:u.maxY;if(u.climbable&&f<=n)continue;const v=Math.max(-u.hx,Math.min(_,u.hx)),S=Math.max(-u.hz,Math.min(m,u.hz)),x=_-v,R=m-S,A=x*x+R*R;if(A<e*e){let T=_,C=m;if(A>1e-6){const P=Math.sqrt(A),N=e-P;T+=x/P*N,C+=R/P*N}else{const P=Math.abs(_+u.hx),N=Math.abs(u.hx-_),B=Math.abs(m+u.hz),V=Math.abs(u.hz-m),q=Math.min(P,N,B,V);q===P?T=-u.hx-e:q===N?T=u.hx+e:q===B?C=-u.hz-e:C=u.hz+e}const E=u.cos,M=-u.sin;t.x=u.x+(T*E-C*M),t.z=u.z+(T*M+C*E)}}for(let d=0;d<this.cylinders.length;d++){const u=this.cylinders[d];if(u.maxY<=n)continue;const p=t.x-u.x,g=t.z-u.z,_=e+u.r,m=p*p+g*g;if(m<_*_&&m>1e-6){const f=Math.sqrt(m),v=_-f;t.x+=p/f*v,t.z+=g/f*v}}for(let d=0;d<this.ellipses.length;d++){const u=this.ellipses[d];if(u.climbable&&u.topY<=n)continue;const p=t.x-u.x,g=t.z-u.z,_=Math.max(u.rx,u.rz)+e;if(p*p+g*g>_*_)continue;const m=p*u.cos-g*u.sin,f=p*u.sin+g*u.cos,v=u.rx+e,S=u.rz+e,x=m/v,R=f/S,A=x*x+R*R;if(A<1&&A>1e-8){const T=1/Math.sqrt(A),C=m*T,E=f*T,M=u.cos,P=-u.sin;t.x=u.x+(C*M-E*P),t.z=u.z+(C*P+E*M)}}for(let d=0;d<this.mesas.length;d++){const u=this.mesas[d],p=t.x-u.x,g=t.z-u.z,_=Math.max(u.rx,u.rz)+e;if(p*p+g*g>_*_)continue;const m=p*u.cos-g*u.sin,f=p*u.sin+g*u.cos,v=u.rx*.85+e,S=u.rz*.85+e,x=m/v,R=f/S,A=x*x+R*R;if(A<1&&A>1e-8){const T=1/Math.sqrt(A),C=m*T,E=f*T,M=u.cos,P=-u.sin;t.x=u.x+(C*M-E*P),t.z=u.z+(C*P+E*M)}}}const i=.4,r=(this.getTerrainHeight(t.x+i,t.z)-this.getTerrainHeight(t.x-i,t.z))/(2*i),o=(this.getTerrainHeight(t.x,t.z+i)-this.getTerrainHeight(t.x,t.z-i))/(2*i),a=Math.hypot(r,o);if(a>.92){const h=(a-.92)*.35;t.x-=r/a*h,t.z-=o/a*h}const l=Math.hypot(t.x,t.z);let c=!1;if(l>this.worldRadius){const h=this.worldRadius/l;t.x*=h,t.z*=h,c=!0}return c}}const qt={sandTintNoon:new ct("#f4e7ce"),sandTintAsr:new ct("#f0cfa4"),mesaBase:new ct("#c7a47c"),mesaStrataDark:new ct("#9e7c58"),adobeWall:new ct("#d2c0a4"),ceilingPlaster:new ct("#ddd2be"),weatheredWood:new ct("#8e7050"),jeepBody:new ct("#9c7b5c"),jeepGlass:new ct("#5b6b68"),horizonNoon:new ct("#e2d2b5"),horizonAsr:new ct("#e3a668"),horizonStorm:new ct("#c89258"),sunNoon:new ct("#fff6e3"),sunAsr:new ct("#ffae5c"),sunStorm:new ct("#d9a368"),hemiSkyNoon:new ct("#8cbde8"),hemiSkyAsr:new ct("#df9f64"),hemiSkyStorm:new ct("#c9955e"),hemiGroundNoon:new ct("#c9a374"),hemiGroundAsr:new ct("#966338"),hemiGroundStorm:new ct("#9d7042"),exposureNoon:.96,exposureAsr:1.08,exposureInteriorNoon:1.22,exposureInteriorAsr:1.26,exposureStorm:.92},Xn={uTimeOfDay:{value:0},uStorm:{value:0},uHorizonColor:{value:qt.horizonNoon.clone()},uShadowFadeCenter:{value:new L(0,0,0)}};function Gn(s,t={}){const e=t.saturation??.94,n=t.contrast??1.03,i=t.aerialStrength??0,r=t.aerialStart??45,o=t.aerialEnd??210,a=s.onBeforeCompile;return s.onBeforeCompile=(l,c)=>{a&&a(l,c),l.uniforms.uGradeHorizon=Xn.uHorizonColor,l.uniforms.uGradeStorm=Xn.uStorm,i>.001&&(l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying float vAerialDist;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
           vec4 _apWp = vec4(transformed, 1.0);
           #ifdef USE_INSTANCING
             _apWp = instanceMatrix * _apWp;
           #endif
           _apWp = modelMatrix * _apWp;
           vAerialDist = length(cameraPosition - _apWp.xyz);`));const h=i>.001?`uniform vec3 uGradeHorizon;
uniform float uGradeStorm;
varying float vAerialDist;`:`uniform vec3 uGradeHorizon;
uniform float uGradeStorm;`,d=i>.001?`
          float _apF = smoothstep(${r.toFixed(1)}, ${o.toFixed(1)}, vAerialDist);
          float _apMix = clamp(_apF * (${i.toFixed(3)} + uGradeStorm * 0.42), 0.0, 0.85);
          // Desaturate distant rock slightly before mixing toward desert horizon haze
          float _apLuma = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
          vec3 _apDesat = mix(gl_FragColor.rgb, vec3(_apLuma), _apF * 0.35);
          gl_FragColor.rgb = mix(_apDesat, uGradeHorizon, _apMix);
        `:"";l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
${h}`).replace("#include <tonemapping_fragment>",`
        {
          // Unified subtle desert color grading (balanced saturation + soft warm shadows)
          float _luma = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
          gl_FragColor.rgb = mix(vec3(_luma), gl_FragColor.rgb, ${e.toFixed(3)});
          gl_FragColor.rgb = (gl_FragColor.rgb - 0.5) * ${n.toFixed(3)} + 0.5;
          gl_FragColor.rgb = max(gl_FragColor.rgb, vec3(0.0));
          ${d}
        }
        #include <tonemapping_fragment>
        `)},s.customProgramCacheKey=()=>`desert_grade_${e}_${n}_${i}_${s.name||""}`,s}const za=`
  varying vec3 vWorldDir;
  void main() {
    vWorldDir = position;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
  }
`,ka=`
  uniform vec3 uSunDir;
  uniform float uTimeOfDay;
  uniform float uTime;
  uniform float uStorm;
  uniform float uCloudOctaves;
  uniform vec3 uHorizonColor;

  varying vec3 vWorldDir;

  // Fast texture-free 2D value noise (zero UV seams anywhere on the dome)
  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float vnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    float a = hash21(i);
    float b = hash21(i + vec2(1.0, 0.0));
    float c = hash21(i + vec2(0.0, 1.0));
    float d = hash21(i + vec2(1.0, 1.0));
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  float fbmClouds(vec2 p, int octaves) {
    float val = 0.0;
    float amp = 0.52;
    mat2 rot = mat2(0.80, 0.60, -0.60, 0.80);
    for (int i = 0; i < 5; i++) {
      if (i >= octaves) break;
      val += amp * vnoise(p);
      p = rot * p * 2.07 + vec2(1.7, 9.2);
      amp *= 0.5;
    }
    return val;
  }

  // Henyey-Greenstein phase function for atmospheric Mie aerosol scattering
  float hgPhase(float cosTheta, float g) {
    float g2 = g * g;
    float denom = max(0.001, 1.0 + g2 - 2.0 * g * cosTheta);
    return (1.0 - g2) / (4.0 * 3.14159265 * pow(denom, 1.5));
  }

  void main() {
    vec3 dir = normalize(vWorldDir);
    vec3 sunDir = normalize(uSunDir);
    float y = dir.y;
    float sunCos = dot(dir, sunDir);
    float sunElev = clamp(sunDir.y, 0.04, 1.0);
    float warm = pow(clamp(uTimeOfDay, 0.0, 1.0), 1.15);

    // 1. Physically inspired Rayleigh + Desert Aerosol optical depth
    float airMass = 1.0 / (max(y, 0.015) + 0.14 * pow(max(y, 0.0) + 0.12, -0.65) * 0.0 + 0.11);
    float zenithFactor = clamp(pow(max(y, 0.0), 0.58), 0.0, 1.0);

    // Rich clear Arabian noon azure -> deep golden-hour cobalt/slate at Asr (linear space)
    vec3 zenithNoon = vec3(0.032, 0.145, 0.46);
    vec3 zenithAsr  = vec3(0.042, 0.088, 0.22);
    vec3 zenithCol  = mix(zenithNoon, zenithAsr, warm);

    // Mid-sky Rayleigh scattering band (linear space)
    vec3 midNoon = vec3(0.17, 0.37, 0.68);
    vec3 midAsr  = vec3(0.28, 0.23, 0.25);
    vec3 midCol  = mix(midNoon, midAsr, warm);

    // Warm desert aerosol belt just above horizon (linear space)
    vec3 beltNoon = vec3(0.68, 0.59, 0.44);
    vec3 beltAsr  = vec3(0.84, 0.34, 0.09);
    vec3 beltCol  = mix(beltNoon, beltAsr, warm);

    // Vertical sky gradient with natural optical thickness curve
    vec3 skyCol = mix(beltCol, midCol, smoothstep(0.0, 0.30, max(y, 0.0)));
    skyCol = mix(skyCol, zenithCol, smoothstep(0.16, 0.85, max(y, 0.0)));

    // Azimuthal warm sunset glow concentrated in the sun's hemisphere at Asr
    float azimGlow = pow(max(0.0, sunCos), 3.0) * smoothstep(0.55, -0.05, y);
    vec3 sunsetTint = mix(vec3(0.95, 0.72, 0.38), vec3(1.15, 0.36, 0.06), warm);
    skyCol += sunsetTint * azimGlow * mix(0.12, 0.72, warm) * (1.0 - uStorm * 0.75);

    // 2. Atmospheric Mie forward-scattering (desert dust halo around sun)
    float mieTight = hgPhase(sunCos, 0.82);
    float mieWide  = hgPhase(sunCos, 0.38);
    vec3 sunColor  = mix(vec3(1.0, 0.92, 0.74), vec3(1.05, 0.45, 0.12), warm);
    float mieScale = (1.0 - uStorm * 0.82) * smoothstep(-0.08, 0.06, y);
    skyCol += sunColor * (mieTight * 0.22 + mieWide * 0.36) * mieScale;

    // 3. Limb-darkened Solar Disc (realistic angular diameter, softens in dust storm)
    float sunRadius = mix(0.99962, 0.99940, warm);
    float disc = smoothstep(sunRadius - 0.00018, sunRadius + 0.00012, sunCos);
    float limb = pow(clamp((sunCos - sunRadius) / (1.0 - sunRadius + 0.0001), 0.0, 1.0), 0.45);
    vec3 discCol = mix(vec3(1.0, 0.96, 0.86), vec3(1.0, 0.62, 0.20), warm) * (2.6 + limb * 3.4);
    float sunVis = (1.0 - smoothstep(0.12, 0.80, uStorm)) * smoothstep(-0.02, 0.02, y);
    skyCol += discCol * disc * sunVis;

    // 4. Procedural Desert Cirrus & High Altocumulus Clouds (curved sky plane, drifts gently)
    int oct = int(uCloudOctaves + 0.5);
    if (y > 0.02 && oct >= 1) {
      // Curved projection prevents harsh stretching near horizon
      vec2 cloudUV = dir.xz / (y + 0.22);
      vec2 windDrift = vec2(uTime * 0.0045, uTime * 0.0018);

      // High delicate wispy cirrus streaks (warped along desert trade wind)
      vec2 warp = vec2(
        vnoise(cloudUV * 0.65 + windDrift * 0.7),
        vnoise(cloudUV * 0.65 + vec2(4.2, 1.9) + windDrift * 0.5)
      );
      vec2 cirrusUV = cloudUV * vec2(0.55, 1.15) + warp * 0.55 + windDrift;
      float nCirrus = fbmClouds(cirrusUV, oct);

      // Secondary sparse altocumulus puffs (kept light: ~18-24% desert coverage)
      float nPuff = fbmClouds(cloudUV * 1.15 - windDrift * 0.8 + warp * 0.25, max(2, oct - 1));
      float cloudDensity = smoothstep(0.55, 0.82, nCirrus) * 0.64
                         + smoothstep(0.63, 0.85, nPuff) * 0.34;

      // Fade clouds smoothly near the horizon so they vanish into desert dust haze
      float horizonFade = smoothstep(0.03, 0.26, y);
      cloudDensity = clamp(cloudDensity * horizonFade * (1.0 - uStorm * 0.85), 0.0, 0.78);

      // Sun-side silver/gold lining + shadow underside (linear space)
      float sunHighlight = pow(max(0.0, sunCos), 6.0);
      float selfShade = smoothstep(0.15, 0.75, nPuff);
      vec3 cloudLitNoon = vec3(0.92, 0.90, 0.84);
      vec3 cloudLitAsr  = vec3(1.05, 0.56, 0.19);
      vec3 cloudShdNoon = vec3(0.38, 0.48, 0.62);
      vec3 cloudShdAsr  = vec3(0.24, 0.16, 0.18);

      vec3 cLit = mix(cloudLitNoon, cloudLitAsr, warm);
      vec3 cShd = mix(cloudShdNoon, cloudShdAsr, warm);
      vec3 cloudCol = mix(cShd, cLit, 0.55 + 0.45 * (1.0 - selfShade));
      cloudCol += sunColor * sunHighlight * mix(0.26, 0.72, warm);

      skyCol = mix(skyCol, cloudCol, cloudDensity);
    }

    // 5. Dust Storm Atmospheric Extinction (dust rises from horizon to engulf sky)
    if (uStorm > 0.001) {
      float stormHeight = smoothstep(0.85, -0.05, y);
      float stormMix = clamp(uStorm * (0.58 + 0.42 * stormHeight), 0.0, 0.96);
      vec3 stormZenith = uHorizonColor * vec3(0.84, 0.81, 0.76);
      vec3 stormSky = mix(uHorizonColor, stormZenith, clamp(y, 0.0, 1.0));
      skyCol = mix(skyCol, stormSky, stormMix);
    }

    // 6. Seamless Horizon-to-Fog Melt (matches scene.fog.color identically!)
    float horizonBlend = smoothstep(0.14 + uStorm * 0.14, -0.015, y);
    skyCol = mix(skyCol, uHorizonColor, horizonBlend);

    // Subtle ground hemisphere darkening below horizon (helps PMREM IBL ground bounce)
    if (y < 0.0) {
      vec3 groundBounce = uHorizonColor * mix(vec3(0.66, 0.58, 0.46), vec3(0.56, 0.40, 0.25), warm);
      skyCol = mix(uHorizonColor, groundBounce, smoothstep(0.0, -0.35, y));
    }

    gl_FragColor = vec4(skyCol, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;class um{constructor(t,e){this.scene=t,this.renderer=e,this.uniforms={uSunDir:{value:new L(.2,.9,-.35).normalize()},uTimeOfDay:{value:0},uTime:{value:0},uStorm:{value:0},uCloudOctaves:{value:4},uHorizonColor:{value:qt.horizonNoon.clone()}};const n=new Is(940,32,20),i=new ze({side:Ae,depthWrite:!1,fog:!1,uniforms:this.uniforms,vertexShader:za,fragmentShader:ka});this.mesh=new ut(n,i),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-10,this.scene.add(this.mesh),this._pmrem=new no(this.renderer),this._pmrem.compileCubemapShader(),this._envScene=new ml,this._envUniforms={uSunDir:this.uniforms.uSunDir,uTimeOfDay:this.uniforms.uTimeOfDay,uTime:{value:0},uStorm:this.uniforms.uStorm,uCloudOctaves:{value:2},uHorizonColor:this.uniforms.uHorizonColor};const r=new ut(new Is(20,16,12),new ze({side:Ae,depthWrite:!1,fog:!1,uniforms:this._envUniforms,vertexShader:za,fragmentShader:ka}));this._envScene.add(r),this._envRT=null,this._lastBakeTime=-999,this._lastBakeStorm=-999,this._bakeCooldown=0}setCloudOctaves(t){this.uniforms.uCloudOctaves.value=t}computeHorizonColor(t,e,n){const i=Math.pow(xt.clamp(t,0,1),1.15);return n.lerpColors(qt.horizonNoon,qt.horizonAsr,i),e>.001&&n.lerp(qt.horizonStorm,xt.clamp(e*.92,0,.95)),n}update(t,e,n,i,r,o){this.mesh.position.copy(n),this.uniforms.uSunDir.value.copy(i),this.uniforms.uTimeOfDay.value=r,this.uniforms.uTime.value=e,this.uniforms.uStorm.value=o,this.computeHorizonColor(r,o,this.uniforms.uHorizonColor.value),this._bakeCooldown=Math.max(0,this._bakeCooldown-t);const a=Math.abs(r-this._lastBakeTime),l=Math.abs(o-this._lastBakeStorm);this._bakeCooldown<=0&&(a>.025||l>.06||!this._envRT)&&(this.bakeIBL(r,o),this._bakeCooldown=.45)}bakeIBL(t,e){this._lastBakeTime=t,this._lastBakeStorm=e;const n=this._envRT;this._envRT=this._pmrem.fromScene(this._envScene,.04,.1,100),this.scene.environment=this._envRT.texture,n&&n.dispose()}}class dm{constructor(t,e,n){this.scene=t,this.renderer=e,this.settings=n,this.timeOfDay=0,this.targetTimeOfDay=0,this.stormIntensity=0,this.sunDirection=new L(.2,.9,-.35).normalize(),this.glareAmount=0,this.targetExposure=qt.exposureNoon,this.currentExposure=qt.exposureNoon,this.cutsceneGlareBoost=0,this._tmpVec=new L,this._camDir=new L,this._tmpCol=new ct,this._lastShadowFocus=new L(9999,9999,9999),this._lastShadowSun=new L,this._shadowFrameCounter=0,this._shadowFrustumHalf=22,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0,this.proceduralSky=new um(this.scene,this.renderer),this._createLights(),this._createFog(),this.glareEl=document.getElementById("sun-glare-layer"),this.heatHazeEl=document.getElementById("heat-haze-layer"),this.setTimeOfDay(0,!0),this.proceduralSky.bakeIBL(0,0)}_createLights(){this.sunLight=new ha(qt.sunNoon,3.1),this.sunLight.castShadow=!0;const t=qn?1024:2048;this.sunLight.shadow.mapSize.set(t,t),this.sunLight.shadow.camera.near=2,this.sunLight.shadow.camera.far=125;const e=this._shadowFrustumHalf;this.sunLight.shadow.camera.left=-e,this.sunLight.shadow.camera.right=e,this.sunLight.shadow.camera.top=e,this.sunLight.shadow.camera.bottom=-e,this.sunLight.shadow.bias=-45e-5,this.sunLight.shadow.normalBias=.022,this.sunLight.shadow.radius=qn?1.5:2.6,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target),this.hemiLight=new gh(qt.hemiSkyNoon,qt.hemiGroundNoon,1.05),this.scene.add(this.hemiLight),this.interiorBounceLight=new vl(15912864,1.85,22,1.45),this.interiorBounceLight.position.set(0,3.1,-18),this.scene.add(this.interiorBounceLight),this.sandBounceLight=new ha(15122058,.48),this.sandBounceLight.position.set(-25,10,30),this.scene.add(this.sandBounceLight)}_createFog(){this.fog=new mo(qt.horizonNoon.getHex(),.0028),this.scene.fog=this.fog}applySettings(t,e){const n=!!t.shadows;this.sunLight.castShadow=n,this.renderer.shadowMap.enabled=n,n&&this.sunLight.shadow.mapSize.x!==e.shadowMapSize&&(this.sunLight.shadow.mapSize.set(e.shadowMapSize,e.shadowMapSize),this.sunLight.shadow.map&&(this.sunLight.shadow.map.dispose(),this.sunLight.shadow.map=null)),this.proceduralSky.setCloudOctaves(e.cloudOctaves??4),this.renderer.shadowMap.needsUpdate=!0}setTimeOfDay(t,e=!1){const n=Math.max(0,Math.min(1,t));this.targetTimeOfDay=n,e&&(this.timeOfDay=n,this._applyAtmosphere(n,this.stormIntensity),this.proceduralSky.bakeIBL(n,this.stormIntensity))}setStormIntensity(t,e=!1){const n=Math.max(0,Math.min(1,t)),i=Math.abs(n-this.stormIntensity)>5e-4;this.stormIntensity=n,(i||e)&&this._applyAtmosphere(this.timeOfDay,this.stormIntensity),e&&this.proceduralSky.bakeIBL(this.timeOfDay,this.stormIntensity)}_applyAtmosphere(t,e){this.timeOfDay=t;const n=Math.pow(t,1.15),i=xt.lerp(48,11.5,t),r=xt.lerp(-138,-118,t),o=xt.degToRad(i),a=xt.degToRad(r);this.sunDirection.set(Math.cos(o)*Math.sin(a),Math.sin(o),Math.cos(o)*Math.cos(a)).normalize(),this.proceduralSky.computeHorizonColor(t,e,this.fog.color);const l=xt.lerp(.0026,.0038,n);this.fog.density=xt.lerp(l,.036,Math.pow(e,1.25)),Xn.uTimeOfDay.value=t,Xn.uStorm.value=e,Xn.uHorizonColor.value.copy(this.fog.color),this._tmpCol.lerpColors(qt.sunNoon,qt.sunAsr,n),e>.001&&this._tmpCol.lerp(qt.sunStorm,e*.85),this.sunLight.color.copy(this._tmpCol);const c=xt.lerp(3.15,2.85,t);if(this.sunLight.intensity=c*(1-e*.72),this.hemiLight.color.lerpColors(qt.hemiSkyNoon,qt.hemiSkyAsr,n),e>.001&&this.hemiLight.color.lerp(qt.hemiSkyStorm,e*.9),this.hemiLight.groundColor.lerpColors(qt.hemiGroundNoon,qt.hemiGroundAsr,n),e>.001&&this.hemiLight.groundColor.lerp(qt.hemiGroundStorm,e*.85),this.hemiLight.intensity=xt.lerp(1.06,.92,t)+e*.65,this.scene.environmentIntensity=xt.lerp(.55,.68,n)*(1-e*.2),this.sandBounceLight.color.lerpColors(new ct("#e6bd88"),new ct("#d88848"),n),this.sandBounceLight.intensity=xt.lerp(.46,.36,t)*(1-e*.55),this.sandBounceLight.position.set(-this.sunDirection.x*40,12,-this.sunDirection.z*40),this.interiorBounceLight.color.lerpColors(new ct("#f4d4a8"),new ct("#f6aa5c"),n),this.interiorBounceLight.intensity=xt.lerp(2.4,2.75,n)*(1-e*.25),this.glareEl){const h=Math.round(xt.lerp(240,174,n)),d=Math.round(xt.lerp(202,98,n));this.glareEl.style.setProperty("--sun-r","255"),this.glareEl.style.setProperty("--sun-g",String(h)),this.glareEl.style.setProperty("--sun-b",String(d))}if(this.heatHazeEl){const h=xt.lerp(.42,.25,t)*(1-e*.6);this.heatHazeEl.style.opacity=h.toFixed(2)}this.renderer.shadowMap.needsUpdate=!0}update(t,e,n,i,r){const o=this.targetTimeOfDay-this.timeOfDay;Math.abs(o)>2e-4&&this._applyAtmosphere(this.timeOfDay+o*Math.min(1,t*1.15),this.stormIntensity),this.proceduralSky.update(t,e,n.position,this.sunDirection,this.timeOfDay,this.stormIntensity);const a=xt.clamp(i.x,-55,55),l=xt.clamp(i.z,-55,55);Xn.uShadowFadeCenter.value.set(a,i.y,l),this._shadowFrameCounter++;const c=(a-this._lastShadowFocus.x)*(a-this._lastShadowFocus.x)+(l-this._lastShadowFocus.z)*(l-this._lastShadowFocus.z),h=this._lastShadowSun.distanceToSquared(this.sunDirection);(c>.2||h>1e-4||this._shadowFrameCounter>=12)&&(this._shadowFrameCounter=0,this._lastShadowFocus.set(a,0,l),this._lastShadowSun.copy(this.sunDirection),this.sunLight.target.position.set(a,0,l),this.sunLight.position.set(a+this.sunDirection.x*58,this.sunDirection.y*58,l+this.sunDirection.z*58),this.renderer.shadowMap.needsUpdate=!0),n.getWorldDirection(this._camDir);const d=this._camDir.dot(this.sunDirection),u=this.settings.data.sunFlare;let p=0;if(u&&!r&&d>.42&&this.stormIntensity<.75){p=Math.pow((d-.42)/.58,2.3)*(1-this.stormIntensity),this._tmpVec.copy(n.position).addScaledVector(this.sunDirection,400).project(n);const v=(this._tmpVec.x*.5+.5)*100,S=(-this._tmpVec.y*.5+.5)*100;this.glareEl&&(this.glareEl.style.setProperty("--sun-x",`${v.toFixed(1)}%`),this.glareEl.style.setProperty("--sun-y",`${S.toFixed(1)}%`))}const g=Math.min(1,p*.85+this.cutsceneGlareBoost);this.glareAmount+=(g-this.glareAmount)*Math.min(1,t*6.5),this.glareEl&&(this.glareEl.style.opacity=this.glareAmount>.008?this.glareAmount.toFixed(3):"0");const _=xt.lerp(xt.lerp(qt.exposureNoon,qt.exposureAsr,this.timeOfDay),qt.exposureStorm,this.stormIntensity),m=xt.lerp(qt.exposureInteriorNoon,qt.exposureInteriorAsr,this.timeOfDay),f=r?m:_;this.targetExposure=f+this.cutsceneGlareBoost*.6-p*.12,this.currentExposure+=(this.targetExposure-this.currentExposure)*Math.min(1,t*2.8),this.renderer.toneMappingExposure=this.currentExposure}}const Xt=0,zt=-18,mn=0,Wi=380,mi=96;function ki(s,t,e){const n=Math.max(0,Math.min(1,(e-s)/(t-s)));return n*n*(3-2*n)}function Gi(s,t){const e=s-Xt,n=t-zt,i=Math.sin(s*.09+t*.07)*2.8+Math.cos(s*.05-t*.08)*2.1,r=Math.hypot(e*.92,(n-1.5)*1.08)+i,o=Math.hypot(s+11,t-15),a=Math.sin(s*.022+t*.016+Math.sin(t*.011)*1.45),l=Math.pow(1-Math.abs(a),1.15)*4.7,c=Math.sin(s*.044-t*.032+1.7+Math.cos(s*.019)*.9),h=(1-Math.abs(c))*2,d=Math.sin(s*.01-t*.008)*4.3+Math.cos(s*.008+t*.014)*3.7,u=Math.sin(s*.13+t*.1)*.09,p=Math.exp(-((s+68)*(s+68)/620+(t-16)*(t-16)/880))*13.5,g=Math.exp(-((s-38)*(s-38)/960+(t+88)*(t+88)/560))*14.5,_=Math.exp(-((s-64)*(s-64)/680+(t+8)*(t+8)/840))*14.5,m=Math.exp(-((s+28)*(s+28)/760+(t-64)*(t-64)/640))*13.5,f=Math.hypot(s,t),v=ki(62,165,f)*8.5*(.5+.5*Math.sin(s*.018+t*.013));let S=d*.45+l+h+u+p+g+_+m+v-2.65;const x=ki(13.2,28.5,r);S*=x;const R=ki(4,14.5,o);S=S*(.38+.62*R);const A=ki(10.6,12.6,Math.max(Math.abs(e),Math.abs(n)*1.15)),T=Math.exp(-((s-11.2)*(s-11.2)/14+(t+17.5)*(t+17.5)/26))*1.15*A,C=Math.exp(-((s+11.5)*(s+11.5)/14+(t+24.8)*(t+24.8)/16))*.75*A,E=Math.exp(-((s-9.5)*(s-9.5)/14+(t+28.5)*(t+28.5)/16))*.85*A,M=Math.exp(-((e-0)*(e-0)/85+(n+11)*(n+11)/70)),P=Math.exp(-((e+12.5)*(e+12.5)/48+n*n/36));S*=(1-M*.92)*(1-P*.82);const N=Math.max(Math.abs(e)-9.8,Math.abs(n)-8.6),B=1-ki(0,2.8,N);return(mn+S+T+C+E)*(1-B)+-.14*B}function ae(s,t){const e=Wi*.5;if(s<=-e||s>=e||t<=-e||t>=e)return Gi(s,t);const n=(s+e)/Wi*mi,i=(t+e)/Wi*mi,r=Math.min(mi-1,Math.max(0,Math.floor(n))),o=Math.min(mi-1,Math.max(0,Math.floor(i))),a=n-r,l=i-o,c=Wi/mi,h=-e+r*c,d=-e+o*c,u=h+c,p=d+c,g=Gi(h,d),_=Gi(u,d),m=Gi(h,p),f=Gi(u,p);return a+l<=1?g+a*(_-g)+l*(m-g):f+(1-a)*(m-f)+(1-l)*(_-f)}function fm(s,t,e={x:0,y:1,z:0}){const i=ae(s-.45,t),r=ae(s+.45,t),o=ae(s,t-.45),a=ae(s,t+.45),l=i-r,c=2*.45,h=o-a,d=Math.hypot(l,c,h)||1;return e.x=l/d,e.y=c/d,e.z=h/d,e}class pm{constructor(t,e,n,i,r){this.scene=t,this.tex=e,this.models=n,this.physics=i,this.settings=r,this.group=new Te,this.scene.add(this.group),this.hawks=[],this.tumbleweeds=[],this.lizards=[],this.palmCrownData=[],this.jeepWorldPos=new L(-5.8,0,2.2),this.tentBarrelWorldPos=new L,this.stormIntensity=0,this._dummy=new xe,this._tmpCol=new ct,this._createTerrain(),this._createHorizonSkirt(),this._createDistantMesas(),this._createRocks(),this._createDesertShrubs(),this._createDesertPalms(),this._createBuriedJeep(),this._createTatteredCampTent(),this._createSoaringHawks(),this._createRollingTumbleweeds(),this._createDesertLizards(),this._createFootprintTrail(),this._createGPUDustParticles()}_createSandMaterial(t,e,n=!1){const i=this.tex.loadPBRSet("sand",t,e),r=new re({map:i.map,normalMap:n?null:i.normalMap,normalScale:new Ct(1.05,1.05),roughnessMap:null,roughness:.91,metalness:.02,vertexColors:!0,color:qt.sandTintNoon});return r.name=n?"sand_far":"sand_near",n?Gn(r,{saturation:.88,contrast:1,aerialStrength:.45,aerialStart:140,aerialEnd:520}):(r.onBeforeCompile=o=>{o.uniforms.uShadowFadeCenter=Xn.uShadowFadeCenter,o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vDesertWorldPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vDesertWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uShadowFadeCenter;
varying vec3 vDesertWorldPos;`).replace("#include <color_fragment>",`#include <color_fragment>
             float macroWave = sin(vDesertWorldPos.x * 0.045 + vDesertWorldPos.z * 0.035) * 0.5 + 0.5;
             vec3 warmTint = mix(vec3(0.94, 0.89, 0.81), vec3(1.04, 0.98, 0.90), macroWave);
             diffuseColor.rgb *= warmTint;`).replace("#include <lights_fragment_maps>","#include <lights_fragment_maps>")},Gn(r,{saturation:.92,contrast:1.03})),r}_createTerrain(){const t=Wi,e=mi,n=new _e(t,t,e,e);n.rotateX(-Math.PI/2);const i=n.attributes.position,r=new Float32Array(i.count*3);for(let o=0;o<i.count;o++){const a=i.getX(o),l=i.getZ(o),c=ae(a,l);i.setY(o,c);const h=ae(a+2,l),d=ae(a,l+2),u=Math.hypot(h-c,d-c)*.5,p=a-Xt,g=l-zt,_=Math.max(Math.abs(p)-7.8,Math.abs(g)-6.6),m=_<2.4&&_>-7?xt.clamp(.78+Math.max(0,_)*.09,.78,1):1,f=xt.clamp(.92+c*.011-u*.07,.83,1.06),v=m*f;r[o*3]=v,r[o*3+1]=v*.985,r[o*3+2]=v*.965}n.setAttribute("color",new Qt(r,3)),n.computeVertexNormals(),this.terrainMat=this._createSandMaterial(62,62,!1),this.terrainMesh=new ut(n,this.terrainMat),this.terrainMesh.receiveShadow=!0,this.group.add(this.terrainMesh)}_createHorizonSkirt(){const n=new _e(1480,1480,32,32);n.rotateX(-Math.PI/2);const i=n.attributes.position,r=new Float32Array(i.count*3);for(let a=0;a<i.count;a++){const l=i.getX(a),c=i.getZ(a),h=Math.max(Math.abs(l),Math.abs(c));let d=ae(l,c);if(h<185)d-=3.2;else{const p=Math.min(1,(h-185)/250);d+=(Math.sin(l*.008+c*.006)*18+Math.cos(l*.005-c*.009)*14)*p}i.setY(a,d);const u=xt.clamp(.94+d*.004,.84,1.05);r[a*3]=u,r[a*3+1]=u*.97,r[a*3+2]=u*.93}n.setAttribute("color",new Qt(r,3)),n.computeVertexNormals();const o=new ut(n,this._createSandMaterial(78,78,!0));this.group.add(o)}_createDistantMesas(){const t=new pe(.54,1.08,1,16,7,!1);t.translate(0,.5,0);const e=t.attributes.position;for(let l=0;l<e.count;l++){const c=e.getX(l),h=e.getY(l),d=e.getZ(l),u=Math.atan2(d,c),p=h<.35?1+(.35-h)*.42:1,g=1+.055*Math.sin(h*22)+.03*Math.cos(h*37),_=1+.14*Math.sin(u*3+.7)+.09*Math.cos(u*5-.4),m=h>.96?_:_*p*g;e.setXYZ(l,c*m,h,d*m)}t.computeVertexNormals();const n=this.tex.loadPBRSet("sandstone_rock",4,2),i=new re({map:n.map,normalMap:n.normalMap,normalScale:new Ct(.85,.85),roughness:.96,metalness:.01,color:qt.mesaBase});i.name="mesa_sandstone",i.onBeforeCompile=l=>{l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vMesaWorldPos;
varying float vMesaLocalY;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
           vMesaLocalY = position.y;
           vec4 _mw = vec4(transformed, 1.0);
           #ifdef USE_INSTANCING
             _mw = instanceMatrix * _mw;
           #endif
           vMesaWorldPos = (modelMatrix * _mw).xyz;`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vMesaWorldPos;
varying float vMesaLocalY;`).replace("#include <color_fragment>",`#include <color_fragment>
           // Desaturate raw texture heavily so mesas never look cartoon-orange
           float _ml = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
           diffuseColor.rgb = mix(vec3(_ml), diffuseColor.rgb, 0.62);
           // Stratified sedimentary bands along world Y with gentle geological dip
           float bandCoord = vMesaWorldPos.y * 0.42 + sin(vMesaWorldPos.x * 0.03 + vMesaWorldPos.z * 0.025) * 0.8;
           float strata1 = sin(bandCoord * 3.1) * 0.5 + 0.5;
           float strata2 = sin(bandCoord * 8.7 + 1.3) * 0.5 + 0.5;
           vec3 paleLimestone = vec3(0.76, 0.66, 0.52);
           vec3 erodedOchre   = vec3(0.55, 0.43, 0.31);
           vec3 strataTint = mix(erodedOchre, paleLimestone, strata1 * 0.65 + strata2 * 0.35);
           diffuseColor.rgb *= mix(vec3(0.85), strataTint * 1.35, 0.68);
           // Windblown sand talus skirt at the base of the mesa blends directly into dune sand!
           float baseDust = smoothstep(0.32, 0.02, vMesaLocalY);
           diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.74, 0.63, 0.47), baseDust * 0.62);`)},Gn(i,{saturation:.78,contrast:1.03,aerialStrength:.48,aerialStart:65,aerialEnd:205});const r=[{x:-125,z:-108,sx:46,sy:26,sz:34,ry:.4},{x:-34,z:-138,sx:54,sy:30,sz:36,ry:1.1},{x:92,z:-124,sx:48,sy:28,sz:36,ry:2},{x:134,z:-30,sx:44,sy:24,sz:34,ry:.8},{x:-136,z:32,sx:46,sy:24,sz:34,ry:2.5},{x:104,z:108,sx:48,sy:25,sz:36,ry:1.6},{x:-76,z:118,sx:42,sy:23,sz:32,ry:.2}],o=new Be(t,i,r.length),a=this._dummy;r.forEach((l,c)=>{const h=ae(l.x,l.z);a.position.set(l.x,h-4.5,l.z),a.rotation.set(0,l.ry,0),a.scale.set(l.sx,l.sy,l.sz),a.updateMatrix(),o.setMatrixAt(c,a.matrix),this.physics.addMesaCollider(l.x,l.z,l.sx,l.sz,l.ry,h,l.sy)}),o.instanceMatrix.needsUpdate=!0,this.group.add(o)}_createLowPolyRockLODGeo(){const t=new vo(.5,1),e=t.attributes.position;for(let n=0;n<e.count;n++){let i=e.getX(n),r=e.getY(n),o=e.getZ(n);const a=.86+.22*Math.sin(i*7.1+o*5.3)*Math.cos(r*6.4);i*=.54*a,r=(r+.5)*.44*a,o*=.96*a,e.setXYZ(n,i,r,o)}return t.computeVertexNormals(),t}_createRocks(){const t=this.models?.getGeometry("rock_07"),e=this.models?.getMaterial("rock_07"),n=this.models?.getGeometry("rock_09")||t,i=this.models?.getMaterial("rock_09")||e,r=this._createLowPolyRockLODGeo(),o=this.tex.loadPBRSet("sandstone_rock",2,2),a=new re({map:o.map,normalMap:o.normalMap,normalScale:new Ct(.7,.7),roughness:.94,color:10193268});a.name="rock_lod_sandstone",a.onBeforeCompile=Y=>{Y.fragmentShader=Y.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
         float _rl = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
         // Desaturate rusty orange tint so far LOD rocks match dark sandstone rock_07/09 scans!
         diffuseColor.rgb = mix(vec3(_rl), diffuseColor.rgb, 0.48) * vec3(0.95, 0.90, 0.82);`)},Gn(a,{saturation:.78,aerialStrength:.42,aerialStart:45,aerialEnd:160});const l=t||r,c=e||a,h=n||r,d=i||a,u=[{x:-8.2,z:10.2,sx:3.6,sy:1.55,sz:2,ry:.5,type:0,hero:!0},{x:-13.5,z:-9.5,sx:5.5,sy:3.1,sz:3.6,ry:1.1,type:0,hero:!0},{x:-15.6,z:-11.2,sx:3.6,sy:2.1,sz:2.4,ry:2.3,type:1,hero:!0},{x:13.8,z:-12,sx:5.8,sy:3.3,sz:3.8,ry:.4,type:0,hero:!0},{x:15.8,z:-14.2,sx:3.8,sy:2.2,sz:2.6,ry:1.9,type:1,hero:!0},{x:-13.2,z:-27.5,sx:6.4,sy:3.8,sz:4.2,ry:2.6,type:0,hero:!0},{x:12,z:-29,sx:5.4,sy:3,sz:3.6,ry:.9,type:1,hero:!0},{x:-29,z:4,sx:9.5,sy:5.8,sz:6.4,ry:.5,type:0,hero:!1},{x:-34,z:-28,sx:10.5,sy:6.5,sz:7,ry:1.4,type:0,hero:!1},{x:31,z:-20,sx:9.2,sy:5.5,sz:6.2,ry:2.1,type:1,hero:!1},{x:22,z:16,sx:7.4,sy:4.4,sz:4.8,ry:1.1,type:0,hero:!1}];let p=4219;const g=()=>(p=p*16807%2147483647,(p-1)/2147483646);for(let Y=0;Y<34;Y++){const ot=g()*Math.PI*2,vt=20+Math.pow(g(),.78)*105,Rt=Math.cos(ot)*vt,Gt=Math.sin(ot)*vt-10;if(Math.abs(Rt-Xt)<12.5&&Math.abs(Gt-zt)<12.5||Math.hypot(Rt+11,Gt-15)<6||Math.hypot(Rt-this.jeepWorldPos.x,Gt-this.jeepWorldPos.z)<5.5)continue;const X=1.6+Math.pow(g(),1.6)*5.2,et=Math.hypot(Rt,Gt+6);u.push({x:Rt,z:Gt,sx:X*(.9+g()*.35),sy:X*(.65+g()*.35),sz:X*(.85+g()*.35),ry:g()*Math.PI*2,type:Y%2,hero:et<30})}const _=u.filter(Y=>Y.hero&&Y.type===0),m=u.filter(Y=>Y.hero&&Y.type===1),f=u.filter(Y=>!Y.hero),v=new Be(l,c,Math.max(1,_.length));v.count=_.length,v.castShadow=!0,v.receiveShadow=!0;const S=new Be(h,d,Math.max(1,m.length));S.count=m.length,S.castShadow=!0,S.receiveShadow=!0;const x=new Be(r,a,Math.max(1,f.length));x.count=f.length,x.castShadow=!1,x.receiveShadow=!0;const R=_.length+m.length,A=new _e(1,1);A.rotateX(-Math.PI/2);const T=new rn({map:this.tex.createContactShadowTexture(),transparent:!0,depthWrite:!1,opacity:.35,polygonOffset:!0,polygonOffsetFactor:-2}),C=new Be(A,T,Math.max(1,R));C.count=R;const E=this._dummy,M=new L(0,1,0),P=new L,N=new Cn,B=new Cn,V={x:0,y:1,z:0};let q=0,W=0,K=0,G=0;u.forEach(Y=>{const ot=ae(Y.x,Y.z),vt=Y.sy*.04;if(E.position.set(Y.x,ot-vt,Y.z),E.rotation.set(0,Y.ry,0),E.scale.set(Y.sx,Y.sy,Y.sz),E.updateMatrix(),Y.hero){Y.type===0?v.setMatrixAt(q++,E.matrix):S.setMatrixAt(W++,E.matrix),fm(Y.x,Y.z,V),P.set(V.x,V.y,V.z),N.setFromUnitVectors(M,P),B.setFromAxisAngle(M,Y.ry),N.multiply(B),E.position.set(Y.x,ot+.03,Y.z),E.quaternion.copy(N);const _t=Y.sx*.265,it=Y.sz*.49;E.scale.set(_t*1.92,1,it*1.92),E.updateMatrix(),C.setMatrixAt(G++,E.matrix)}else x.setMatrixAt(K++,E.matrix);const Rt=Y.sx*.265,Gt=Y.sz*.49,X=Y.type===0?.44:.23,et=ot-vt+Y.sy*X;this.physics.addEllipseCollider(Y.x,Y.z,Rt,Gt,Y.ry,et,!0)}),v.instanceMatrix.needsUpdate=!0,S.instanceMatrix.needsUpdate=!0,x.instanceMatrix.needsUpdate=!0,C.instanceMatrix.needsUpdate=!0,this.group.add(v,S,x,C)}_createDesertShrubs(){const t=[];for(let h=0;h<6;h++){const d=h/6*Math.PI*2+.3,u=.48+h%2*.24,p=.44+h%3*.14,g=new Wn(.03,p,3,1);g.translate(0,p*.5,0),g.rotateZ(u),g.rotateY(d),t.push(g)}const e=this._mergeGeometriesSimple(t);t.forEach(h=>h.dispose());const n=new re({color:7758916,roughness:.96,metalness:0}),i=46,r=new Be(e,n,i);r.castShadow=!1;let o=8821;const a=()=>(o=o*16807%2147483647,(o-1)/2147483646),l=this._dummy;let c=0;for(let h=0;h<120&&c<i;h++){const d=a()*Math.PI*2,u=12+Math.pow(a(),.85)*90,p=Math.cos(d)*u,g=Math.sin(d)*u-12;if(Math.abs(p-Xt)<10&&Math.abs(g-zt)<10)continue;const _=ae(p,g),m=.7+a()*.95;l.position.set(p,_-.03,g),l.rotation.set(0,a()*Math.PI*2,0),l.scale.set(m*1.2,m*.85,m*1.2),l.updateMatrix(),r.setMatrixAt(c,l.matrix),c++}r.count=c,r.instanceMatrix.needsUpdate=!0,this.group.add(r)}_createDesertPalms(){const t=this.tex.loadPBRSet("desert_wood",1,3),e=new re({map:t.map,roughness:.94,color:9204566}),n=new re({color:6056252,roughness:.9,side:ye}),i=[{x:Xt-10.8,z:zt-9.2,h:6.2,lean:.14,ry:.4},{x:Xt-12.6,z:zt-6.8,h:4.8,lean:-.18,ry:2.1},{x:Xt+11.4,z:zt-10.5,h:5.5,lean:.16,ry:1.2},{x:-16.5,z:7.5,h:4.6,lean:.2,ry:3.1}],r=[],o=12;for(let h=0;h<o;h++){const d=new _e(.62,2.65,2,4),u=d.attributes.position;for(let _=0;_<u.count;_++){const f=(u.getY(_)+1.325)/2.65,v=Math.sin(f*Math.PI)*1.18;u.setX(_,u.getX(_)*v),u.setZ(_,-f*f*.78)}d.translate(0,1.325,0);const p=new Yt,g=new Oe(.72+h%3*.22,h/o*Math.PI*2,0,"YXZ");p.makeRotationFromEuler(g),d.applyMatrix4(p),d.computeVertexNormals(),r.push(d)}const a=this._mergeGeometriesSimple(r);r.forEach(h=>h.dispose()),this.palmCrownInst=new Be(a,n,i.length),this.palmCrownInst.castShadow=!0;const l=[];i.forEach((h,d)=>{const u=ae(h.x,h.z),p=new pe(.14,.29,h.h,7,4),g=p.attributes.position;for(let v=0;v<g.count;v++){const S=(g.getY(v)+h.h*.5)/h.h;g.setX(v,g.getX(v)+S*S*h.h*h.lean)}p.translate(0,h.h*.5,0);const _=new Yt;_.makeRotationY(h.ry),_.setPosition(h.x,u-.1,h.z),p.applyMatrix4(_),p.computeVertexNormals(),l.push(p);const m=h.x+Math.cos(h.ry)*(h.h*h.lean),f=h.z-Math.sin(h.ry)*(h.h*h.lean);this.palmCrownData.push({x:m,y:u+h.h-.22,z:f,ry:h.ry,phase:d*1.7}),this.physics.addCylinderCollider(h.x,h.z,.34,u+h.h)});const c=new ut(this._mergeGeometriesSimple(l),e);c.castShadow=!0,c.receiveShadow=!0,l.forEach(h=>h.dispose()),this.group.add(c,this.palmCrownInst)}_createBuriedJeep(){const t=this.jeepWorldPos.x,e=this.jeepWorldPos.z,n=ae(t,e);this.jeepWorldPos.y=n+.85;const i=this.tex.loadPBRSet("rusted_metal",2,2),r=new re({map:i.map,normalMap:i.normalMap,normalScale:new Ct(.55,.55),roughness:.78,metalness:.28,vertexColors:!0});r.name="jeep_weathered",r.onBeforeCompile=x=>{x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vJeepNormalW;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vJeepNormalW = normalize(mat3(modelMatrix) * objectNormal);`),x.fragmentShader=x.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vJeepNormalW;`).replace("#include <color_fragment>",`#include <color_fragment>
           // Keep steel chassis/bullbar dark (vColor < 0.25), lift body panels to weathered desert khaki-tan with rust mottling!
           float _vLuma = dot(vColor.rgb, vec3(0.333));
           float _texLuma = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
           float _rustMask = smoothstep(0.18, 0.04, _texLuma);
           vec3 _khakiPaint = vColor.rgb * (0.72 + _texLuma * 1.45);
           vec3 _rustPatch = vec3(0.24, 0.11, 0.055);
           vec3 _panelCol = mix(_khakiPaint, _rustPatch, _rustMask * 0.45);
           diffuseColor.rgb = mix(diffuseColor.rgb * 1.35, _panelCol, smoothstep(0.12, 0.35, _vLuma));
           float topDust = smoothstep(0.35, 0.92, vJeepNormalW.y);
           diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.54, 0.43, 0.28), topDust * 0.48);`)},Gn(r,{saturation:.85,contrast:1.03});const o=new re({color:6977648,roughness:.22,metalness:.72,envMapIntensity:1.55,transparent:!0,opacity:.68,side:ye}),a=new Te;a.position.set(t,n-.15,e);const l=.72;a.rotation.set(.06,l,-.09);const c=[],h=[],d=(x,R,A,T,C,E,M,P,N)=>{const B=new Yt;if(B.compose(new L(A,T,C),new Cn().setFromEuler(new Oe(E,M,P)),new L(1,1,1)),R.applyMatrix4(B),R.computeVertexNormals(),N!==null){const V=new ct(N),q=R.attributes.position.count,W=new Float32Array(q*3);for(let K=0;K<q;K++)W[K*3]=V.r,W[K*3+1]=V.g,W[K*3+2]=V.b;R.setAttribute("color",new Qt(W,3))}x.push(R)},u=12166018,p=9403490,g=3091239;d(c,new At(1.92,.66,2.55),0,.58,-.58,0,0,0,u),d(c,new At(1.82,.54,1.48),0,.54,1.32,0,0,0,u),d(c,new At(2.14,.16,1.12),0,.68,1.25,0,0,0,p),d(c,new At(2.14,.16,1.12),0,.68,-1.22,0,0,0,p),d(c,new At(1.78,.09,2.18),0,1.62,-.55,0,0,0,u),d(c,new At(.09,.72,.09),-.84,1.25,.42,-.25,0,0,p),d(c,new At(.09,.72,.09),.84,1.25,.42,-.25,0,0,p),d(c,new At(.11,.7,.12),-.85,1.26,-.52,0,0,0,p),d(c,new At(.11,.7,.12),.85,1.26,-.52,0,0,0,p),d(c,new At(.14,.7,.18),-.85,1.26,-1.55,0,0,0,p),d(c,new At(.14,.7,.18),.85,1.26,-1.55,0,0,0,p),d(c,new At(1.74,.06,1.36),0,1.14,1.28,-.38,0,0,u),d(c,new At(2.04,.2,.24),0,.36,2.12,0,0,0,g),d(c,new At(2.02,.2,.22),0,.38,-2.02,0,0,0,g),d(c,new At(1.72,.46,.08),0,.56,2.02,0,0,0,g),d(c,new At(.75,.45,.85),0,.66,1.28,0,0,0,g),d(c,new pe(.02,.02,.58,5),-.72,1.05,1.72,0,0,0,g),d(c,new At(1.64,.08,1.85),0,1.71,-.58,0,0,0,g),d(c,new At(.55,.52,.52),-.45,.88,-.25,0,0,0,g),d(c,new At(.55,.52,.52),.45,.88,-.25,0,0,0,g),d(h,new _e(1.62,.64),0,1.26,.42,-.25,0,0,null),d(h,new _e(.84,.58),-.86,1.26,-.05,0,Math.PI/2,0,null),d(h,new _e(.84,.58),.86,1.26,-.05,0,Math.PI/2,0,null);const _=new ut(this._mergeGeometriesSimple(c),r);_.castShadow=!0,_.receiveShadow=!0,c.forEach(x=>x.dispose());const m=new ut(this._mergeGeometriesSimple(h),o);h.forEach(x=>x.dispose()),a.add(_,m);const f=this.models?.getGeometry("tyre"),v=this.models?.getMaterial("tyre")||r,S=[{x:-.98,y:.02,z:1.25,ry:Math.PI/2},{x:.98,y:.02,z:1.25,ry:-Math.PI/2},{x:-.98,y:.02,z:-1.22,ry:Math.PI/2},{x:.98,y:.02,z:-1.22,ry:-Math.PI/2},{x:0,y:.48,z:-1.96,ry:0}];if(f){const x=new Be(f,v,S.length);x.castShadow=!0,S.forEach((R,A)=>{this._dummy.position.set(R.x,R.y,R.z),this._dummy.rotation.set(0,R.ry,0),this._dummy.scale.set(.82,.82,1.05),this._dummy.updateMatrix(),x.setMatrixAt(A,this._dummy.matrix)}),x.instanceMatrix.needsUpdate=!0,a.add(x)}this.group.add(a),this.physics.addOBBCollider(t,e,1.02,2.08,l,n-.5,n+1.48,n+.96,!0)}_createTatteredCampTent(){const t=Xt+10.6,e=zt+5.8,n=ae(t,e),i=this.tex.loadPBRSet("desert_wood",1,1),r=new re({map:i.map,roughness:.92,color:12100488}),o=this.tex.loadPBRSet("tattered_fabric",2,2);this.tentTimeUniform={value:0},this.tentStormUniform={value:0};const a=new re({map:o.map,roughness:.94,side:ye,color:13942426});a.onBeforeCompile=p=>{p.uniforms.uTime=this.tentTimeUniform,p.uniforms.uStorm=this.tentStormUniform,p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;
uniform float uStorm;`).replace("#include <begin_vertex>",`#include <begin_vertex>
           float spd = 4.2 + uStorm * 7.5;
           float amp = 0.042 + uStorm * 0.11;
           transformed.y += sin(uTime * spd + position.x * 2.5 + position.z * 2.0) * amp;`)};const l=new Te;l.position.set(t,n,e),l.rotation.y=-.5;const c=[];[[-1.6,-1.2],[1.6,-1.2],[-1.6,1.2],[1.6,1.2]].forEach(([p,g])=>{const _=new pe(.05,.06,2.35,5);_.translate(p,1.15,g),c.push(_)});const h=new ut(this._mergeGeometriesSimple(c),r);h.castShadow=!1,c.forEach(p=>p.dispose()),l.add(h);const d=new _e(3.5,2.7,6,4);d.rotateX(-Math.PI/2+.14);const u=new ut(d,a);u.position.set(0,2.28,0),u.castShadow=!0,l.add(u),this.tentBarrelWorldPos.set(t-.55,n,e-.55),this.group.add(l),this.physics.addBoxCollider(t-.85,t-.15,e-.85,e-.15,n,n+1.05,!0)}_createSoaringHawks(){const t=new rn({color:2825490,side:ye}),e=new Wn(.11,.72,4);e.rotateX(Math.PI/2);const n=new me;n.setAttribute("position",new Qt(new Float32Array([0,0,.16,1.18,.06,-.05,0,0,-.22]),3)),n.computeVertexNormals();const i=new me;i.setAttribute("position",new Qt(new Float32Array([0,0,.16,-1.18,.06,-.05,0,0,-.22]),3)),i.computeVertexNormals();const r=this._mergeGeometriesSimple([e,n,i]);this.hawkInst=new Be(r,t,4),this.hawkInst.frustumCulled=!1,this.group.add(this.hawkInst);for(let o=0;o<4;o++)this.hawks.push({centerX:o%2===0?-4:10,centerZ:zt+(o-1.5)*8,radius:19+o*7.5,altitude:17+o*4.2,speed:.24+o*.04,phase:o*1.65})}_createRollingTumbleweeds(){const t=[],e=[[0,0,0],[0,Math.PI/3,0],[0,Math.PI*2/3,0],[Math.PI/2,.3,0],[Math.PI/3,.4,Math.PI/4],[-Math.PI/3,-.4,-Math.PI/4]];for(const[r,o,a]of e){const l=new _e(.76,.76),c=new Yt().makeRotationFromEuler(new Oe(r,o,a));l.applyMatrix4(c),t.push(l)}const n=this._mergeGeometriesSimple(t);t.forEach(r=>r.dispose());const i=new re({map:this.tex.createTwigClusterTexture(),alphaTest:.35,side:ye,roughness:.96,metalness:0,color:12756092});this.tumbleweedInst=new Be(n,i,4),this.tumbleweedInst.frustumCulled=!1,this.group.add(this.tumbleweedInst);for(let r=0;r<4;r++){const o=-34+r*22,a=-4+r%3*14;this.tumbleweeds.push({x:o,z:a,rotX:0,rotZ:0,speed:1.85+r%3*.6,phase:r*1.4})}}_createDesertLizards(){const t=[],e=new Wn(.06,.34,5);e.rotateX(Math.PI/2);const n=new Wn(.035,.32,4);n.rotateX(-Math.PI/2),n.translate(0,0,-.28),t.push(e,n);const i=this._mergeGeometriesSimple(t),r=new re({color:10913111,roughness:.88});this.lizardInst=new Be(i,r,3),this.lizardInst.frustumCulled=!1,this.group.add(this.lizardInst),[{x:-9.5,z:9.2,yaw:.8},{x:-4.2,z:-2.5,yaw:-1.2},{x:7.5,z:-8,yaw:2.1}].forEach(a=>{this.lizards.push({x:a.x,z:a.z,yaw:a.yaw,speed:0})})}_createFootprintTrail(){const t=new _e(.3,.58);t.rotateX(-Math.PI/2);const e=new rn({map:this.tex.createFootprintTexture(),transparent:!0,depthWrite:!1,opacity:.65}),n=28,i=new Be(t,e,n),r=this._dummy;for(let o=0;o<n;o++){const a=o/(n-1),l=xt.lerp(-10.5,0,a)+Math.sin(a*Math.PI)*-2.2,c=xt.lerp(13.8,zt+10.6,a),h=(o%2===0?1:-1)*.16,d=l+h,u=ae(d,c)+.03;r.position.set(d,u,c),r.rotation.set(0,Math.atan2(10.5,zt+10.6-13.8),0),r.scale.set(1,1,1),r.updateMatrix(),i.setMatrixAt(o,r.matrix)}i.instanceMatrix.needsUpdate=!0,this.group.add(i)}_createGPUDustParticles(){const e=new me,n=new Float32Array(320*3),i=new Float32Array(320*3);for(let o=0;o<320;o++)n[o*3]=(Math.random()-.5)*56,n[o*3+1]=.2+Math.random()*3.8,n[o*3+2]=(Math.random()-.5)*56,i[o*3]=Math.random()*6.28,i[o*3+1]=.7+Math.random()*1.3,i[o*3+2]=Math.random();e.setAttribute("position",new Qt(n,3)),e.setAttribute("aSeed",new Qt(i,3)),this.dustMaxCount=320,this.baseDustCount=240,this.dustUniforms={uTime:{value:0},uStorm:{value:0},uPlayerPos:{value:new L},uColor:{value:new ct("#efd3a8")},uMap:{value:this.tex.createDustParticleTexture()}};const r=new ze({transparent:!0,depthWrite:!1,uniforms:this.dustUniforms,vertexShader:`
        attribute vec3 aSeed;
        uniform float uTime;
        uniform float uStorm;
        uniform vec3 uPlayerPos;
        void main() {
          vec3 p = position;
          float speed = (2.6 + uStorm * 10.5) * aSeed.y;
          p.x = mod(p.x + uTime * speed - uPlayerPos.x + 28.0, 56.0) - 28.0 + uPlayerPos.x;
          p.z = mod(p.z + uTime * speed * 0.42 - uPlayerPos.z + 28.0, 56.0) - 28.0 + uPlayerPos.z;
          p.y += sin(uTime * (1.3 + uStorm * 2.4) + aSeed.x) * (0.25 + uStorm * 0.45);
          vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
          float sizeMult = 1.0 + uStorm * 0.85;
          gl_PointSize = clamp((110.0 * sizeMult) / max(1.0, -mvPosition.z), 2.0, 15.0);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        uniform float uStorm;
        uniform sampler2D uMap;
        void main() {
          vec4 tex = texture2D(uMap, gl_PointCoord);
          if (tex.a < 0.05) discard;
          float op = mix(0.28, 0.62, uStorm);
          gl_FragColor = vec4(uColor * tex.rgb, tex.a * op);
        }
      `});this.dustPoints=new hh(e,r),this.dustPoints.frustumCulled=!1,this.group.add(this.dustPoints)}applySettings(t){this.baseDustCount=Math.min(this.dustMaxCount,t.dustCount),this.dustPoints&&this.dustPoints.geometry.setDrawRange(0,this.baseDustCount)}setStormIntensity(t){if(this.stormIntensity=Math.max(0,Math.min(1,t)),this.dustPoints){const e=Math.round(xt.lerp(this.baseDustCount,this.dustMaxCount,this.stormIntensity));this.dustPoints.geometry.setDrawRange(0,e)}}update(t,e,n,i){const r=this._dummy,o=this.stormIntensity;for(let l=0;l<this.hawks.length;l++){const c=this.hawks[l],h=e*c.speed+c.phase,d=c.centerX+Math.cos(h)*c.radius,u=c.centerZ+Math.sin(h)*c.radius,p=c.altitude+o*14+Math.sin(e*.7+c.phase)*1.4;r.position.set(d,p,u),r.rotation.set(0,-h,.24),r.scale.set(1,1+Math.sin(e*5+c.phase)*.15,1),r.updateMatrix(),this.hawkInst.setMatrixAt(l,r.matrix)}this.hawkInst.instanceMatrix.needsUpdate=!0;const a=1+o*2.2;for(let l=0;l<this.tumbleweeds.length;l++){const c=this.tumbleweeds[l],h=c.speed*a*t;c.x+=h,c.z+=h*.34,c.x-n.x>46&&(c.x-=92),c.z-n.z>46&&(c.z-=92);const d=Math.abs(Math.sin(e*(3.8+o*3)+c.phase))*(.16+o*.22),u=ae(c.x,c.z)+.34+d;c.rotZ-=h*2.2,c.rotX+=h*.85,r.position.set(c.x,u,c.z),r.rotation.set(c.rotX,0,c.rotZ),r.scale.set(1,1,1),r.updateMatrix(),this.tumbleweedInst.setMatrixAt(l,r.matrix)}this.tumbleweedInst.instanceMatrix.needsUpdate=!0;for(let l=0;l<this.lizards.length;l++){const c=this.lizards[l],h=c.x-n.x,d=c.z-n.z;Math.hypot(h,d)<5.8?(c.yaw=Math.atan2(h,d),c.speed=4.8):c.speed*=Math.max(0,1-t*3.5),c.speed>.05&&(c.x+=Math.sin(c.yaw)*c.speed*t,c.z+=Math.cos(c.yaw)*c.speed*t);const p=ae(c.x,c.z)+.04;r.position.set(c.x,p,c.z),r.rotation.set(0,c.yaw,Math.sin(e*18)*(c.speed*.03)),r.scale.set(1,1,1),r.updateMatrix(),this.lizardInst.setMatrixAt(l,r.matrix)}this.lizardInst.instanceMatrix.needsUpdate=!0;for(let l=0;l<this.palmCrownData.length;l++){const c=this.palmCrownData[l],h=.045+i*.025+o*.16,d=1.4+o*3.2;r.position.set(c.x,c.y,c.z),r.rotation.set(Math.cos(e*(d*.8)+c.phase)*h*.7,c.ry,-o*.14+Math.sin(e*d+c.phase)*h),r.scale.set(1,1,1),r.updateMatrix(),this.palmCrownInst.setMatrixAt(l,r.matrix)}this.palmCrownInst.instanceMatrix.needsUpdate=!0,this.tentTimeUniform&&(this.tentTimeUniform.value=e),this.tentStormUniform&&(this.tentStormUniform.value=o),this.dustUniforms.uTime.value=e,this.dustUniforms.uStorm.value=o,this.dustUniforms.uPlayerPos.value.copy(n),this._tmpCol.lerpColors(new ct("#ecd6b0"),new ct("#f0b672"),Math.pow(i,1.2)),o>.001&&this._tmpCol.lerp(qt.horizonStorm,o*.75),this.dustUniforms.uColor.value.copy(this._tmpCol)}_mergeGeometriesSimple(t){let e=0,n=0,i=!0,r=!0;for(const g of t)e+=g.attributes.position.count,n+=g.index?g.index.count:g.attributes.position.count,g.attributes.uv||(i=!1),g.attributes.color||(r=!1);const o=new Float32Array(e*3),a=new Float32Array(e*3),l=i?new Float32Array(e*2):null,c=r?new Float32Array(e*3):null,h=new Uint32Array(n);let d=0,u=0;for(const g of t){const _=g.attributes.position,m=g.attributes.normal;if(o.set(_.array,d*3),a.set(m.array,d*3),i&&g.attributes.uv&&l.set(g.attributes.uv.array,d*2),r&&g.attributes.color&&c.set(g.attributes.color.array,d*3),g.index){const f=g.index.array;for(let v=0;v<f.length;v++)h[u+v]=f[v]+d;u+=f.length}else{for(let f=0;f<_.count;f++)h[u+f]=d+f;u+=_.count}d+=_.count}const p=new me;return p.setAttribute("position",new Qt(o,3)),p.setAttribute("normal",new Qt(a,3)),l&&p.setAttribute("uv",new Qt(l,2)),c&&p.setAttribute("color",new Qt(c,3)),p.setIndex(new Qt(h,1)),p}}function Hi(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new me;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p])}if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const d=[];for(let u=0;u<s.length;++u){const p=s[u].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(const h in r){const d=Ga(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const p=[];for(let _=0;_<o[h].length;++_)p.push(o[h][_][u]);const g=Ga(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Ga(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Qt(o,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let u=0,p=h.count;u<p;u++)for(let g=0;g<e;g++){const _=h.getComponent(u,g);a.setComponent(u+d,g,_)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}class mm{constructor(t,e,n,i,r,o=null){this.scene=t,this.tex=e,this.models=n,this.physics=i,this.jeepWorldPos=r,this.tentBarrelWorldPos=o,this.group=new Te,this.group.position.set(Xt,mn,zt),this.scene.add(this.group),this.interactables=[],this.activeMissionId=null,this.windTurbine=null,this.windVane=null,this.awningTimeUniform={value:0},this.awningStormUniform={value:0},this.stormIntensity=0,this.radioGlowMat=null,this.radioLight=null,this.hatchMesh=null,this.hatchTargetAngle=0,this.switchLever=null,this.switchTargetAngle=.6,this.compassNeedle=null,this.godRayMat=null,this._createMaterials(),this._buildMainEstate(),this._buildCourtyardWalls(),this._buildGrandAwning(),this._buildWindVaneTower(),this._buildInteriorRooms(),this._buildBackCourtyardAndWell(),this._buildStoryClues(),this._optimizeStaticBatches()}_createMaterials(){const t=this.tex.loadPBRSet("adobe_wall",1,1);this.adobeMat=new re({map:t.map,normalMap:t.normalMap,normalScale:new Ct(.45,.45),roughness:.94,metalness:.01,vertexColors:!0,color:15917768}),this.adobeMat.name="adobe_wall_v4",this.adobeMat.onBeforeCompile=l=>{l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vAdobeWorldPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vAdobeWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vAdobeWorldPos;`).replace("#include <color_fragment>",`#include <color_fragment>
           // Sun-bleached Najdi mudbrick (brightened & calmed so walls never read muddy dark brown)
           float _al = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
           diffuseColor.rgb = mix(vec3(_al), diffuseColor.rgb, 0.62) * 1.38 + vec3(0.035, 0.028, 0.018);
           float patch1 = sin(vAdobeWorldPos.x * 0.55 + vAdobeWorldPos.y * 0.8) * cos(vAdobeWorldPos.z * 0.55 - vAdobeWorldPos.y * 0.6);
           float groundDust = smoothstep(0.95, 0.02, vAdobeWorldPos.y);
           vec3 plasterVariation = mix(vec3(0.92, 0.89, 0.84), vec3(1.04, 1.01, 0.96), patch1 * 0.5 + 0.5);
           diffuseColor.rgb *= plasterVariation;
           // Linear-space warm desert sand dust (NOT bright sRGB 0.84 which rendered white!)
           diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.42, 0.32, 0.19), groundDust * 0.34);`)},Gn(this.adobeMat,{saturation:.86,contrast:1.02}),this.ceilingMat=new re({color:qt.ceilingPlaster,roughness:.96,metalness:0}),this.ceilingMat.name="interior_plaster_ceiling",this.ceilingMat.onBeforeCompile=l=>{l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCeilPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vCeilPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vCeilPos;`).replace("#include <color_fragment>",`#include <color_fragment>
           float mottle = sin(vCeilPos.x * 0.9 + vCeilPos.z * 0.7) * cos(vCeilPos.x * 0.4 - vCeilPos.z * 1.1);
           diffuseColor.rgb *= mix(0.91, 1.03, mottle * 0.5 + 0.5);`)};const e=this.tex.loadPBRSet("desert_wood",1.6,1);this.woodMat=new re({map:e.map,normalMap:e.normalMap,normalScale:new Ct(.85,.85),roughness:.88,metalness:.03,color:12757902});const n=this.tex.loadPBRSet("rusted_metal",1.5,1.5);this.metalMat=new re({map:n.map,normalMap:n.normalMap,normalScale:new Ct(.9,.9),roughness:.76,metalness:.45,color:10916992});const i=this.tex.loadPBRSet("floor_tiles",4.8,4);this.floorMat=new re({map:i.map,normalMap:i.normalMap,normalScale:new Ct(.85,.85),roughness:.9,metalness:.02,vertexColors:!0,color:13219996}),Gn(this.floorMat,{saturation:.88,contrast:1.03}),this.hatchFrameMat=new re({map:i.map,normalMap:i.normalMap,normalScale:new Ct(.75,.75),roughness:.93,metalness:.03,color:8088406});const r=this.tex.loadPBRSet("tattered_fabric",2.4,2);this.fabricMat=new re({map:r.map,roughness:.95,metalness:0,side:ye,color:13811876}),this.fabricMat.onBeforeCompile=l=>{l.uniforms.uTime=this.awningTimeUniform,l.uniforms.uStorm=this.awningStormUniform,l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;
uniform float uStorm;`).replace("#include <begin_vertex>",`#include <begin_vertex>
           float spd = 3.5 + uStorm * 7.5;
           float amp = 0.042 + uStorm * 0.12;
           transformed.y += sin(uTime * spd + position.x * 1.8 + position.z * 1.5) * amp;`)},this.rugMat=new re({roughness:.96,metalness:0,color:16777215}),this.rugMat.name="bedouin_sadu_rug",this.rugMat.onBeforeCompile=l=>{l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vRugUv;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vRugUv = uv;`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vRugUv;`).replace("#include <color_fragment>",`#include <color_fragment>
           vec2 p = vRugUv;
           vec2 c = abs(p - 0.5) * 2.0; // [0..1] from center to border
           // Woven textile warp/weft grain
           float weave = 0.92 + 0.08 * sin(p.x * 240.0) * sin(p.y * 160.0);

           // Traditional Sadu palette (linear space): deep terracotta, desert cream, warm ochre, dark charcoal-indigo
           vec3 colCrimson = vec3(0.28, 0.055, 0.032);
           vec3 colCream   = vec3(0.56, 0.47, 0.34);
           vec3 colOchre   = vec3(0.44, 0.25, 0.075);
           vec3 colCharcoal= vec3(0.055, 0.048, 0.044);

           // Geometric stripes along rug length
           vec3 col = colCrimson;
           float outerBorder = step(0.84, max(c.x, c.y));
           float innerBorder = step(0.74, max(c.x, c.y)) * (1.0 - outerBorder);
           col = mix(col, colCharcoal, outerBorder * 0.85);
           col = mix(col, colCream, innerBorder);

           // Repeating central Bedouin Sadu diamond medallions
           vec2 tile = fract(vec2(p.x * 5.0, p.y * 3.0)) - 0.5;
           float diamond = abs(tile.x) + abs(tile.y);
           float innerMedallion = (1.0 - step(0.74, max(c.x, c.y)));
           if (innerMedallion > 0.5) {
             float dOuter = smoothstep(0.42, 0.38, diamond);
             float dMid   = smoothstep(0.29, 0.25, diamond);
             float dCore  = smoothstep(0.14, 0.10, diamond);
             col = mix(col, colCream, dOuter);
             col = mix(col, colOchre, dMid);
             col = mix(col, colCharcoal, dCore);
           }

           // Border chevron ticks
           float chev = step(0.5, fract((p.x + p.y) * 18.0));
           col = mix(col, colOchre, innerBorder * chev * 0.55);

           // Dust & sun fading across the abandoned rug
           float dustWear = sin(p.x * 7.0 + p.y * 5.0) * 0.5 + 0.5;
           col = mix(col, vec3(0.38, 0.30, 0.19), dustWear * 0.28);
           diffuseColor.rgb = col * weave;`)};const o=this.tex.loadPBRSet("sandstone_rock",2,2);this.stoneMat=new re({map:o.map,normalMap:o.normalMap,normalScale:new Ct(.75,.75),roughness:.94,metalness:.02,color:12297350});const a=this.tex.loadPBRSet("sand",2,2);this.sandDriftMat=new re({map:a.map,normalMap:a.normalMap,roughness:.92,color:qt.sandTintNoon}),this.darkMetalMat=new re({color:3879209,roughness:.68,metalness:.65}),this.brassMat=new re({color:12950344,roughness:.38,metalness:.8}),this.paperMat=new re({color:14864552,roughness:.9,side:ye})}_createBakedBox(t,e,n,i=.74,r=.99){const o=new At(t,e,n,1,1,1),a=o.attributes.position,l=o.attributes.normal,c=o.attributes.uv,h=new Float32Array(a.count*3),d=1.45;for(let u=0;u<a.count;u++){const p=a.getX(u),g=a.getY(u),_=a.getZ(u),m=Math.abs(l.getX(u));Math.abs(l.getY(u))>.5?c.setXY(u,(p+t*.5)/d,(_+n*.5)/d):m>.5?c.setXY(u,(_+n*.5)/d,(g+e*.5)/d):c.setXY(u,(p+t*.5)/d,(g+e*.5)/d);const v=xt.clamp((g+e*.5)/Math.max(.001,e),0,1),S=xt.lerp(i,r,Math.pow(v,.55));h[u*3]=S,h[u*3+1]=S*.985,h[u*3+2]=S*.965}return c.needsUpdate=!0,o.setAttribute("color",new Qt(h,3)),o}_addBox(t,e,n,i,r,o,a=!0,l=this.adobeMat,c=!0,h=null){const d=l===this.adobeMat?this._createBakedBox(i,r,o):new At(i,r,o),u=new ut(d,l);if(u.position.set(t,e,n),u.castShadow=c,u.receiveShadow=!0,this.group.add(u),a){const p=Xt+t,g=zt+n;this.physics.addBoxCollider(p-i*.5,p+i*.5,g-o*.5,g+o*.5,e-r*.5,e+r*.5,h)}return u}_buildMainEstate(){const n=new At(14.8,.24,12.2,4,1,4),i=n.attributes.position,r=new Float32Array(i.count*3);for(let f=0;f<i.count;f++){const S=1-Math.max(Math.abs(i.getX(f))/7.4,Math.abs(i.getZ(f))/6.1)*.26;r[f*3]=S,r[f*3+1]=S*.98,r[f*3+2]=S*.95}n.setAttribute("color",new Qt(r,3));const o=new ut(n,this.floorMat);o.position.set(0,.04,0),o.receiveShadow=!0,this.group.add(o),this.physics.addFloorZone(Xt-7.3,Xt+7.3,zt-6,zt+6.4,.16,"stone"),this.physics.addInteriorZone(Xt-7.1,Xt+7.1,zt-5.9,zt+5.9,-.5,4.6);const a=new ut(new At(3.4,.18,1.6),this.stoneMat);a.position.set(0,.05,6.85),a.receiveShadow=!0,this.group.add(a),this._addBox(-6.5,4.35/2,6.1,2.2,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(-2.3,4.35/2,6.1,2.2,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(-4.4,.65,6.1,2,1.3,.56,!0,this.adobeMat,!0,!1),this._addBox(-4.4,3.55,6.1,2,1.6,.56,!1),this._addBox(-4.4,1.32,6.1,2.1,.11,.64,!1,this.woodMat),this._addBox(-4.4,2.74,6.1,2.1,.11,.64,!1,this.woodMat),this._addBox(2.3,4.35/2,6.1,2.2,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(6.5,4.35/2,6.1,2.2,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(4.4,.65,6.1,2,1.3,.56,!0,this.adobeMat,!0,!1),this._addBox(4.4,3.55,6.1,2,1.6,.56,!1),this._addBox(4.4,1.32,6.1,2.1,.11,.64,!1,this.woodMat),this._addBox(4.4,2.74,6.1,2.1,.11,.64,!1,this.woodMat),this._addBox(0,3.68,6.1,2.5,1.35,.56,!1),this._addBox(0,2.98,6.1,2.75,.18,.66,!1,this.woodMat),this._addBox(-1.22,1.48,6.1,.14,2.96,.6,!1,this.woodMat),this._addBox(1.22,1.48,6.1,.14,2.96,.6,!1,this.woodMat);const l=new ut(new At(1.05,2.75,.08),this.woodMat);l.position.set(-1.12,1.52,5.45),l.rotation.y=1.18,this.group.add(l),this._addBox(-7.45,4.35*.48,6.15,.78,4.35*.96,.78,!1),this._addBox(7.45,4.35*.48,6.15,.78,4.35*.96,.78,!1),this._addBox(-7.45,4.35*.48,-6.15,.78,4.35*.96,.78,!1),this._addBox(7.45,4.35*.48,-6.15,.78,4.35*.96,.78,!1),this._addBox(-4.35,4.35/2,-6.1,6.5,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(4.35,4.35/2,-6.1,6.5,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(0,3.65,-6.1,2.3,1.4,.56,!1),this._addBox(0,2.92,-6.1,2.5,.16,.64,!1,this.woodMat),this._addBox(-7.35,4.35/2,3.85,.56,4.35,4.9,!0,this.adobeMat,!0,!1),this._addBox(-7.35,4.35/2,-3.85,.56,4.35,4.9,!0,this.adobeMat,!0,!1),this._addBox(-7.35,.65,0,.56,1.3,2.8,!0,this.adobeMat,!0,!1),this._addBox(-7.35,3.55,0,.56,1.6,2.8,!1),this._addBox(-7.35,1.32,0,.66,.12,2.9,!1,this.woodMat),this._addBox(-7.35,2.75,0,.66,.12,2.9,!1,this.woodMat),this._addBox(7.35,4.35/2,3.6,.56,4.35,5.4,!0,this.adobeMat,!0,!1),this._addBox(7.35,4.35/2,-3.6,.56,4.35,5.4,!0,this.adobeMat,!0,!1),this._addBox(7.35,.9,0,.56,1.8,1.8,!0,this.adobeMat,!0,!1),this._addBox(7.35,3.65,0,.56,1.4,1.8,!1),this._addBox(-2.3,4.35/2,-2.5,.42,4.35,7,!0,this.adobeMat,!0,!1),this._addBox(-2.3,4.35/2,4.75,.42,4.35,2.6,!0,this.adobeMat,!0,!1),this._addBox(-2.3,3.65,2.2,.42,1.4,2.6,!1),this._addBox(-2.3,2.92,2.2,.5,.14,2.5,!1,this.woodMat),this._addBox(2.6,4.35/2,-2.5,.42,4.35,7,!0,this.adobeMat,!0,!1),this._addBox(2.6,4.35/2,4.75,.42,4.35,2.6,!0,this.adobeMat,!0,!1),this._addBox(2.6,3.65,2.2,.42,1.4,2.6,!1),this._addBox(2.6,2.92,2.2,.5,.14,2.5,!1,this.woodMat),this._addBox(0,4.46,0,15.2,.3,12.6,!1);const c=new ut(new _e(14.6,12),this.ceilingMat);c.rotation.x=Math.PI/2,c.position.set(0,4.29,0),c.receiveShadow=!0,this.group.add(c),this._addBox(-4.2,4.88,6.1,6.4,.56,.38,!1),this._addBox(4.4,4.82,6.1,6,.46,.38,!1),this._addBox(-7.4,4.88,0,.38,.56,12.6,!1),this._addBox(7.4,4.82,-1.2,.38,.44,10,!1),this._addBox(0,4.92,-6.1,15.2,.62,.38,!1);const h=new pe(.11,.12,16.4,5);h.rotateZ(Math.PI/2);for(let f=-4.8;f<=4.8;f+=1.9){const v=new ut(h,this.woodMat);v.position.set(0,4.16,f),v.castShadow=!1,this.group.add(v)}this._addBox(-2.4,5.9,-2,5.6,2.6,4.8,!1),this._addBox(-2.4,7.35,-4.25,5.6,.36,.32,!1),this._addBox(-2.4,5.65,.45,1.25,1.8,.16,!1,this.darkMetalMat,!1);const d=new Te;d.position.set(7.72,0,2.6),d.rotation.z=.14;const u=new ut(new pe(.035,.04,4.6,5),this.woodMat);u.position.set(0,2.3,-.28);const p=new ut(new pe(.035,.04,4.6,5),this.woodMat);p.position.set(0,2.3,.28),d.add(u,p);for(let f=.45;f<=4.2;f+=.45){const v=new ut(new pe(.024,.024,.58,5),this.woodMat);v.rotation.x=Math.PI/2,v.position.set(0,f,0),d.add(v)}this.group.add(d),[{x:-.2,y:.1,z:5.1,sx:2.2,sy:.32,sz:2.6},{x:-6.4,y:.12,z:-5.1,sx:1.8,sy:.38,sz:1.8},{x:6.3,y:.12,z:5,sx:1.6,sy:.34,sz:1.7},{x:-1.6,y:.12,z:-5.3,sx:1.5,sy:.28,sz:1.4}].forEach(f=>{const v=new Wn(1,1,8);v.scale(f.sx,f.sy,f.sz);const S=new ut(v,this.sandDriftMat);S.position.set(f.x,f.y,f.z),S.receiveShadow=!0,this.group.add(S)});const _=new _e(19.5,16.8);_.rotateX(-Math.PI/2);const m=new ut(_,new rn({map:this.tex.createContactShadowTexture(),transparent:!0,depthWrite:!1,opacity:.38}));m.position.set(0,.03,.4),this.group.add(m)}_buildCourtyardWalls(){this._addBox(-5.6,.95,10.2,6.8,1.9,.48,!0,this.adobeMat,!0,!0),this._addBox(5.6,.85,10.2,6.8,1.7,.48,!0,this.adobeMat,!0,!0),this._addBox(-2.25,1.45,10.2,.72,2.9,.72,!0,this.adobeMat,!0,!1),this._addBox(2.25,1.35,10.2,.72,2.7,.72,!0,this.adobeMat,!0,!1),this._addBox(0,2.85,10.2,5.2,.22,.42,!1,this.woodMat),this._addBox(-8.9,.85,8.2,.46,1.7,4.2,!0,this.adobeMat,!0,!0),this._addBox(8.9,.75,8.2,.46,1.5,4.2,!0,this.adobeMat,!0,!0)}_buildGrandAwning(){[[-6.6,9],[-3.8,9],[-1.5,9],[1.6,9]].forEach(([i,r])=>{const o=new ut(new pe(.1,.12,2.85,5),this.woodMat);o.position.set(i,1.42,r),o.castShadow=!0,this.group.add(o),this.physics.addCylinderCollider(Xt+i,zt+r,.22,3)}),this._addBox(-2.5,2.82,9,8.5,.16,.16,!1,this.woodMat);for(let i=-6.4;i<=1.6;i+=1.3){const r=new ut(new At(.1,.11,3.1),this.woodMat);r.position.set(i,3.08,7.6),r.rotation.x=.18,this.group.add(r)}const e=new _e(8.2,3,8,4);e.rotateX(-Math.PI/2+.18);const n=e.attributes.position;for(let i=0;i<n.count;i++){const r=Math.abs(Math.sin(n.getX(i)*1.1))*-.16;n.setY(i,n.getY(i)+r)}e.computeVertexNormals(),this.awningCloth=new ut(e,this.fabricMat),this.awningCloth.position.set(-2.5,3.12,7.55),this.awningCloth.castShadow=!0,this.group.add(this.awningCloth)}_buildWindVaneTower(){const t=new Te;t.position.set(3.8,4.6,-2.4);const e=7.4;[[-.75,-.75],[.75,-.75],[-.75,.75],[.75,.75]].forEach(([c,h])=>{const d=new ut(new pe(.045,.07,e,5),this.metalMat);d.position.set(c*.5,e*.5,h*.5),d.rotation.z=c>0?.095:-.095,d.rotation.x=h>0?-.095:.095,d.castShadow=!0,t.add(d)});for(let c=1.2;c<e-.8;c+=1.6){const h=1.48*(1-c/e*.72),d=new ut(new At(h,.05,.05),this.darkMetalMat);d.position.set(0,c,h*.5);const u=d.clone();u.position.set(0,c,-h*.5);const p=new ut(new At(.05,.05,h),this.darkMetalMat);p.position.set(h*.5,c,0);const g=p.clone();g.position.set(-h*.5,c,0),t.add(d,u,p,g)}this.windVane=new Te,this.windVane.position.set(0,e+.2,0);const i=new At(2.1,.06,.06);i.translate(.45,0,0);const r=new At(1.05,.72,.04);r.translate(1.42,.05,0);const o=new ut(Hi([i,r],!1),this.metalMat);i.dispose(),r.dispose(),this.windVane.add(o);const a=[];for(let c=0;c<8;c++){const h=c/8*Math.PI*2,d=new At(.03,1,.2),u=new Yt;u.makeRotationFromEuler(new Oe(h,.32,0)),u.setPosition(0,Math.cos(h)*.62,Math.sin(h)*.62),d.applyMatrix4(u),a.push(d)}const l=Hi(a,!1);a.forEach(c=>c.dispose()),this.windTurbine=new ut(l,this.metalMat),this.windTurbine.position.set(-.58,0,0),this.windVane.add(this.windTurbine),t.add(this.windVane),this.group.add(t)}_buildInteriorRooms(){const t=new ut(new _e(3.6,2.4),this.rugMat);t.rotation.x=-Math.PI/2,t.position.set(.1,.175,2.1),t.receiveShadow=!0,this.group.add(t);const e=new ut(new At(1.68,.12,1.68),new rn({color:722692}));e.position.set(0,.13,-1.6),this.group.add(e),this._addBox(-.94,.2,-1.6,.18,.09,2.06,!1,this.hatchFrameMat,!1),this._addBox(.94,.2,-1.6,.18,.09,2.06,!1,this.hatchFrameMat,!1),this._addBox(0,.2,-2.54,1.7,.09,.18,!1,this.hatchFrameMat,!1),this._addBox(0,.2,-.66,1.7,.09,.18,!1,this.hatchFrameMat,!1),this.hatchMesh=new Te,this.hatchMesh.position.set(0,.24,-2.45);const n=new ut(new At(1.72,.08,1.72),this.woodMat);n.position.set(0,0,.85),n.receiveShadow=!0;const i=new At(1.76,.1,.14);i.translate(0,.01,.35);const r=new At(1.76,.1,.14);r.translate(0,.01,1.35);const o=new At(.14,.1,1.76);o.translate(0,.01,.85);const a=new ut(Hi([i,r,o],!1),this.metalMat);i.dispose(),r.dispose(),o.dispose();const l=new ut(new yo(.14,.028,6,12),this.brassMat);l.rotation.x=Math.PI/2,l.position.set(0,.07,1.48),this.hatchMesh.add(n,a,l),this.group.add(this.hatchMesh);const c=this.models?.getGeometry("crate"),h=this.models?.getMaterial("crate");if(c&&h){const T=new Be(c,h,2);T.receiveShadow=!0;const C=new xe;C.position.set(1.45,.16,-4.85),C.rotation.set(0,.28,0),C.scale.setScalar(1.35),C.updateMatrix(),T.setMatrixAt(0,C.matrix),C.position.set(-3.2,.02,7.6),C.rotation.set(0,0,0),C.scale.setScalar(1.15),C.updateMatrix(),T.setMatrixAt(1,C.matrix),T.instanceMatrix.needsUpdate=!0,this.group.add(T)}else this._addBox(1.45,.52,-4.85,1.1,.75,.75,!1,this.woodMat),this._addBox(-3.2,.26,7.6,.85,.5,.72,!1,this.woodMat);this.physics.addBoxCollider(Xt+.8,Xt+2.1,zt-5.3,zt-4.4,.16,.88,!0);const d=this.models?.createMesh("jug",.55);d&&(d.position.set(1.35,.73,-4.82),d.castShadow=!1,this.group.add(d));const u=this.models?.createMesh("table",2.25);u?(u.position.set(-5.35,.16,-.4),u.castShadow=!1,u.receiveShadow=!0,this.group.add(u)):this._addBox(-5.35,.96,-.4,2.1,.1,1.05,!1,this.woodMat),this.physics.addBoxCollider(Xt-6.45,Xt-4.25,zt-.98,zt+.18,.16,1.08,!0);const p=this.models?.createMesh("chair",.58);p&&(p.position.set(-4.65,.16,.78),p.rotation.y=-2.4,p.castShadow=!1,this.group.add(p));const g=this.models?.createMesh("lantern",.13);g&&(g.position.set(-6.05,1.06,-.62),g.castShadow=!1,this.group.add(g)),this._addBox(-4.8,2.25,-5.75,2.4,1.45,.08,!1,this.woodMat,!1),[{x:-4.9,y:2.3,z:-5.69,rx:0,ry:0,rz:.06,w:.52,h:.38},{x:-4.2,y:2.18,z:-5.69,rx:0,ry:0,rz:-.08,w:.42,h:.46},{x:-5.55,y:2.22,z:-5.69,rx:0,ry:0,rz:.03,w:.45,h:.34},{x:-4.85,y:1.07,z:-.45,rx:-Math.PI/2,ry:0,rz:.4,w:.32,h:.24},{x:-5.1,y:.175,z:.45,rx:-Math.PI/2,ry:0,rz:1.1,w:.34,h:.25}].forEach(T=>{const C=new ut(new _e(T.w,T.h),this.paperMat);C.position.set(T.x,T.y,T.z),C.rotation.set(T.rx,T.ry,T.rz),this.group.add(C)}),this._addBox(-2.85,1.35,-3.4,.62,2.4,2.2,!0,this.metalMat,!1,!1),this.godRayUniforms={uColor:{value:new ct("#ffdfa0")},uOpacity:{value:.15}},this.godRayMat=new ze({transparent:!0,depthWrite:!1,side:ye,blending:mr,uniforms:this.godRayUniforms,vertexShader:`
        varying vec2 vUv;
        varying vec3 vNormalV;
        varying vec3 vViewDir;
        void main() {
          vUv = uv;
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          vNormalV = normalize(normalMatrix * normal);
          vViewDir = normalize(-mvPos.xyz);
          gl_Position = projectionMatrix * mvPos;
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        uniform float uOpacity;
        varying vec2 vUv;
        varying vec3 vNormalV;
        varying vec3 vViewDir;
        void main() {
          float fresnel = pow(abs(dot(normalize(vNormalV), normalize(vViewDir))), 1.75);
          float lengthFade = smoothstep(0.0, 0.35, vUv.y) * smoothstep(1.0, 0.72, vUv.y);
          float alpha = fresnel * lengthFade * uOpacity;
          gl_FragColor = vec4(uColor, alpha);
        }
      `});const m=new pe(.72,1.35,3.8,12,1,!0);m.rotateZ(-.86),m.translate(-5.65,1.65,0);const f=new pe(.72,1.35,3.8,12,1,!0);f.scale(.68,.78,.68),f.rotateX(-.82),f.translate(-4.4,1.55,4.4);const v=new ut(Hi([m,f],!1),this.godRayMat);m.dispose(),f.dispose(),this.group.add(v),this._addBox(5.2,.6,-4.4,2.4,.92,1.05,!0,this.woodMat,!1,!0),this._addBox(6.4,1.3,1.8,.85,2.25,1.9,!0,this.metalMat,!1,!1);const S=new Te;S.position.set(5.15,1.32,-4.35),S.rotation.y=-.15;const x=new ut(new At(.84,.48,.44),this.darkMetalMat);S.add(x),this.radioGlowMat=new re({color:3877914,emissive:new ct("#ff8c2b"),emissiveIntensity:.04,roughness:.3});const R=new ut(new _e(.48,.14),this.radioGlowMat);R.position.set(-.1,.06,.225),S.add(R);for(let T=0;T<2;T++){const C=new ut(new pe(.045,.045,.05,8),this.brassMat);C.rotation.x=Math.PI/2,C.position.set(.24,-.05+T*.14,.23),S.add(C)}const A=new ut(new pe(.008,.012,1.3,4),this.darkMetalMat);A.position.set(.32,.82,-.05),S.add(A),this.group.add(S),this.radioLight=new vl(16748086,0,7.5,2),this.radioLight.position.set(Xt+5.15,mn+1.5,zt-3.9),this.scene.add(this.radioLight)}_buildBackCourtyardAndWell(){const t=this.models?.getGeometry("barrel"),e=this.models?.getMaterial("barrel")||this.metalMat,n=[[8.3,2.2,.72],[8.6,1.15,.72],[-8.3,4.4,.72],[5.8,-7.8,.72]];if(this.tentBarrelWorldPos&&n.push([this.tentBarrelWorldPos.x-Xt,this.tentBarrelWorldPos.z-zt,.65]),t){const _=new Be(t,e,n.length);_.castShadow=!0;const m=new xe;n.forEach(([f,v,S],x)=>{const R=ae(Xt+f,zt+v)-mn;m.position.set(f,R,v),m.rotation.set(0,x*1.1,0),m.scale.setScalar(S),m.updateMatrix(),_.setMatrixAt(x,m.matrix),x<4&&this.physics.addCylinderCollider(Xt+f,zt+v,.42,R+1.15)}),_.instanceMatrix.needsUpdate=!0,this.group.add(_)}const i=-6.8,r=-10.4,o=ae(Xt+i,zt+r)-mn,a=new Te;a.position.set(i,o,r);const l=new ut(new pe(1.3,1.42,1.05,10,1,!0),this.stoneMat);l.position.y=.5,l.castShadow=!0;const c=new ut(new _o(1.22,10),new rn({color:591364}));c.rotation.x=-Math.PI/2,c.position.y=.42;const h=new ut(new At(.14,2.3,.14),this.woodMat);h.position.set(-1.26,1.15,0);const d=new ut(new At(.14,1.85,.14),this.woodMat);d.position.set(1.26,.92,0),d.rotation.z=-.15;const u=new ut(new pe(.06,.06,2.7,5),this.woodMat);u.rotation.z=Math.PI/2-.12,u.position.set(0,2.02,0),a.add(l,c,h,d,u),this.group.add(a),this.physics.addCylinderCollider(Xt+i,zt+r,1.5,o+1.8);const p=new Te;p.position.set(4.1,1.48,-6.58);const g=new ut(new At(.56,.72,.32),this.metalMat);g.castShadow=!0,this.switchLever=new ut(new At(.08,.34,.18),this.brassMat),this.switchLever.position.set(.1,.04,-.2),this.switchLever.rotation.x=.6,p.add(g,this.switchLever),this.group.add(p)}_buildStoryClues(){const t=(c,h,d,u=3.8,p=.36)=>{const g=new ut(new Mo(.1,.145,20),new rn({color:16767362,transparent:!0,opacity:.85,side:ye,depthTest:!1}));g.position.copy(d).add(new L(0,p,0)),g.renderOrder=12,g.visible=!1,this.scene.add(g),this.interactables.push({id:c,label:h,worldPos:d.clone(),radius:u,ringMesh:g})},e=ae(-8.2,10.2)+.56,n=new Te;n.position.set(-8.2,e,10.2);const i=this.models?.createMesh("compass",.38);i?n.add(i):n.add(new ut(new pe(.16,.16,.06,12),this.brassMat));const r=new ut(new At(.022,.022,.18),new rn({color:12724252}));r.position.y=.065,this.compassNeedle=r,n.add(r),this.scene.add(n),t("compass","فحص البوصلة المحطمة",new L(-8.2,e+.04,10.2),4,.36),t("jeep","تفتيش حطام سيارة البعثة",this.jeepWorldPos.clone(),4.8,.48),this.physics.addBoxCollider(Xt-3.75,Xt-2.65,zt+7.2,zt+8,0,.56,!0);const o=new ut(new pe(.14,.15,.3,10),this.metalMat);o.rotation.z=.5,o.position.set(-3.08,.59,7.62);const a=new ut(new At(.42,.14,.32),this.woodMat);a.position.set(-3.38,.55,7.52),this.group.add(o,a),t("canteen","فحص حقيبة البعثة والزمزمية",new L(Xt-3.2,mn+.62,zt+7.6),3.8,.38);const l=new ut(new At(.38,.05,.48),this.paperMat);l.position.set(-5.3,1.07,-.32),l.rotation.y=.25,this.group.add(l),t("journal","قراءة دفتر ملاحظات نادر",new L(Xt-5.3,mn+1.1,zt-.32),3.8,.36),t("antenna_box","تشغيل قاطع برج الهوائي",new L(Xt+4.1,mn+1.5,zt-6.75),3.8,.42),t("radio","تشغيل المذياع التناظري (تردد ٤٤)",new L(Xt+5.15,mn+1.38,zt-4.35),4,.42)}setActiveMissionId(t){this.activeMissionId=t;for(let e=0;e<this.interactables.length;e++){const n=this.interactables[e];n.ringMesh&&(n.ringMesh.visible=n.id===t)}}getActiveInteractable(){return this.activeMissionId&&this.interactables.find(t=>t.id===this.activeMissionId)||null}setAntennaPowered(t){this.switchTargetAngle=t?-.65:.6,this.radioGlowMat&&(this.radioGlowMat.emissiveIntensity=t?2.2:.04),this.radioLight&&(this.radioLight.intensity=t?2.3:0)}setStormIntensity(t){this.stormIntensity=Math.max(0,Math.min(1,t)),this.awningStormUniform.value=this.stormIntensity}unlockHatch(){this.hatchTargetAngle=-.82}_optimizeStaticBatches(){const t=new Set([this.adobeMat,this.woodMat,this.metalMat,this.darkMetalMat,this.stoneMat,this.hatchFrameMat,this.brassMat,this.paperMat,this.sandDriftMat]),e=new Set([this.awningCloth,this.hatchMesh,this.switchLever,this.windVane,this.windTurbine]),n=l=>{let c=l;for(;c&&c!==this.group;){if(e.has(c))return!0;c=c.parent}return!1};this.group.updateMatrixWorld(!0);const i=new Yt().copy(this.group.matrixWorld).invert(),r=new Map,o=[];this.group.traverse(l=>{if(!l.isMesh||l.isInstancedMesh||!t.has(l.material)||n(l))return;const c=l.geometry.index?l.geometry.toNonIndexed():l.geometry.clone(),h=new Yt().multiplyMatrices(i,l.matrixWorld);c.applyMatrix4(h);const d=new me;if(d.setAttribute("position",c.attributes.position.clone()),c.attributes.normal&&d.setAttribute("normal",c.attributes.normal.clone()),c.attributes.uv&&d.setAttribute("uv",c.attributes.uv.clone()),l.material.vertexColors)if(c.attributes.color)d.setAttribute("color",c.attributes.color.clone());else{const u=new Float32Array(c.attributes.position.count*3).fill(1);d.setAttribute("color",new Qt(u,3))}c.dispose(),r.has(l.material)||r.set(l.material,[]),r.get(l.material).push(d),o.push(l)});const a=new Set([this.paperMat,this.hatchFrameMat,this.brassMat,this.sandDriftMat]);for(const[l,c]of r.entries()){if(c.length<2){c.forEach(d=>d.dispose());continue}const h=Hi(c,!1);if(c.forEach(d=>d.dispose()),h){const d=new ut(h,l);d.castShadow=!a.has(l),d.receiveShadow=!0,this.group.add(d)}}for(const l of o){const c=r.get(l.material);c&&c.length>=2&&l.parent&&(l.parent.remove(l),l.geometry.dispose())}}update(t,e,n,i){const r=this.stormIntensity;if(this.windTurbine&&(this.windTurbine.rotation.x+=t*(2.6+i*2.5+r*9.5+Math.sin(e*.7)*.8)),this.windVane&&(this.windVane.rotation.y=.35+Math.sin(e*(.42+r*1.4))*(.25+r*.18)),this.awningTimeUniform.value=e,this.switchLever&&(this.switchLever.rotation.x+=(this.switchTargetAngle-this.switchLever.rotation.x)*Math.min(1,t*10)),this.hatchMesh&&(this.hatchMesh.rotation.x+=(this.hatchTargetAngle-this.hatchMesh.rotation.x)*Math.min(1,t*4.5)),this.godRayUniforms){const a=1-r*.85;this.godRayUniforms.uOpacity.value=xt.lerp(.13,.25,i)*a,this.godRayUniforms.uColor.value.lerpColors(new ct("#fff0c4"),new ct("#ffae52"),i)}this.compassNeedle&&(this.compassNeedle.rotation.y=.4+Math.sin(e*5.2)*.25+Math.cos(e*13)*.08);const o=this.getActiveInteractable();if(o&&o.ringMesh){const a=n.position.distanceTo(o.worldPos);if(a<2.2)o.ringMesh.visible=!1;else{o.ringMesh.visible=!0,o.ringMesh.lookAt(n.position);const l=xt.clamp((a-2.2)/2.8,0,1);o.ringMesh.material.opacity=.78*l;const c=.88+Math.sin(e*4)*.14;o.ringMesh.scale.setScalar(c)}}}}class gm{constructor(t,e){this.scene=t,this.settings=e,this.intensity=0,this.targetIntensity=0,this.enabled=e.data.dustStorm!==!1,this.maxStreaks=300,this.group=new Te,this.scene.add(this.group),this.overlayEl=document.getElementById("dust-storm-layer"),this._colorTmp=new ct,this._createSandWall(),this._createWindStreaks(),this._setVisible(!1)}_createSandWall(){const t=new pe(18.5,18.5,24,20,1,!0);this.wallUniforms={uTime:{value:0},uIntensity:{value:0},uIndoor:{value:0},uColor:{value:qt.horizonStorm.clone()},uSimple:{value:0}};const e=new ze({transparent:!0,depthWrite:!1,side:Ae,fog:!1,uniforms:this.wallUniforms,vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform float uIntensity;
        uniform float uIndoor;
        uniform vec3 uColor;
        uniform float uSimple;
        varying vec2 vUv;

        float hash21(vec2 p) {
          p = fract(p * vec2(127.1, 311.7));
          p += dot(p, p + 34.5);
          return fract(p.x * p.y);
        }

        float vnoise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x),
            mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x),
            u.y
          );
        }

        void main() {
          // Seamless periodic U around cylinder circumference (scale = integer 6.0)
          float angU = vUv.x * 6.0;
          float yV = vUv.y;

          vec2 uv1 = vec2(angU - uTime * 0.85, yV * 2.4 + sin(angU * 1.05 + uTime * 0.6) * 0.14);
          float n1 = vnoise(uv1);
          float n2 = uSimple > 0.5 ? n1 : vnoise(vec2(angU * 2.0 - uTime * 1.55, yV * 4.5 - uTime * 0.25));
          float gust = n1 * 0.62 + n2 * 0.38;

          // Denser sand wall near the ground, thinning gently overhead
          float verticalMask = smoothstep(0.0, 0.18, yV) * smoothstep(1.0, 0.22, yV);
          float dustBand = smoothstep(0.28, 0.82, gust) * verticalMask;
          float indoorAtten = 1.0 - uIndoor * 0.82;
          float alpha = dustBand * uIntensity * 0.48 * indoorAtten;
          if (alpha < 0.004) discard;

          vec3 col = uColor * (0.86 + gust * 0.34);
          gl_FragColor = vec4(col, alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `});this.sandWall=new ut(t,e),this.sandWall.frustumCulled=!1,this.sandWall.renderOrder=4,this.group.add(this.sandWall)}_createWindStreaks(){const t=new _e(1.65,.055),e=new vh;e.index=t.index,e.attributes.position=t.attributes.position,e.attributes.uv=t.attributes.uv;const n=new Float32Array(this.maxStreaks*4);let i=9187;const r=()=>(i=i*16807%2147483647,(i-1)/2147483646);for(let a=0;a<this.maxStreaks;a++)n[a*4]=(r()-.5)*34,n[a*4+1]=.25+r()*5.2,n[a*4+2]=(r()-.5)*34,n[a*4+3]=.75+r()*.9;e.setAttribute("aSeed",new to(n,4)),e.instanceCount=this.maxStreaks,this.streakUniforms={uTime:{value:0},uIntensity:{value:0},uIndoor:{value:0},uPlayerPos:{value:new L},uColor:{value:qt.horizonStorm.clone()}};const o=new ze({transparent:!0,depthWrite:!1,side:ye,uniforms:this.streakUniforms,vertexShader:`
        attribute vec4 aSeed;
        uniform float uTime;
        uniform float uIntensity;
        uniform vec3 uPlayerPos;
        varying vec2 vUv;
        varying float vFade;

        void main() {
          vUv = uv;
          float spd = (12.0 + uIntensity * 14.0) * aSeed.w;
          vec3 windDir = normalize(vec3(1.0, -0.05, 0.34));

          // Wrap particle smoothly inside 34m box around player purely on GPU
          vec3 center;
          center.x = mod(aSeed.x + uTime * spd - uPlayerPos.x + 17.0, 34.0) - 17.0 + uPlayerPos.x;
          center.z = mod(aSeed.z + uTime * spd * 0.34 - uPlayerPos.z + 17.0, 34.0) - 17.0 + uPlayerPos.z;
          center.y = uPlayerPos.y - 0.6 + aSeed.y + sin(uTime * 2.6 + aSeed.x) * 0.25;

          // Orient quad lengthwise along wind direction and face camera vertically
          vec3 toCam = normalize(cameraPosition - center);
          vec3 side = normalize(cross(windDir, toCam));
          float lenScale = (0.75 + uIntensity * 0.95) * aSeed.w;
          vec3 worldPos = center + windDir * (position.x * lenScale) + side * position.y;

          float dist = length(cameraPosition - center);
          vFade = smoothstep(1.2, 4.0, dist) * smoothstep(17.5, 11.0, dist);

          gl_Position = projectionMatrix * viewMatrix * vec4(worldPos, 1.0);
        }
      `,fragmentShader:`
        uniform float uIntensity;
        uniform float uIndoor;
        uniform vec3 uColor;
        varying vec2 vUv;
        varying float vFade;

        void main() {
          float along = sin(vUv.x * 3.14159265);
          float across = sin(vUv.y * 3.14159265);
          float alpha = along * across * across * vFade * uIntensity * 0.52 * (1.0 - uIndoor * 0.85);
          if (alpha < 0.01) discard;
          vec3 col = uColor * 1.18;
          gl_FragColor = vec4(col, alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `});this.streakMesh=new ut(e,o),this.streakMesh.frustumCulled=!1,this.streakMesh.renderOrder=5,this.group.add(this.streakMesh)}_setVisible(t){this.sandWall.visible=t,this.streakMesh.visible=t}applySettings(t,e){this.enabled=t.dustStorm!==!1;const n=e.stormStreaks??240;this.streakMesh.geometry.instanceCount=Math.min(this.maxStreaks,n),this.wallUniforms.uSimple.value=t.quality==="low"?1:0,this.enabled||(this.intensity=0,this.targetIntensity=0,this._setVisible(!1),this.overlayEl&&(this.overlayEl.style.opacity="0"))}setTargetIntensity(t,e=!1){const n=this.enabled?xt.clamp(t,0,1):0;this.targetIntensity=n,e&&(this.intensity=n,this._setVisible(this.intensity>.01))}update(t,e,n,i,r,o){if(!this.enabled)return this.intensity=0,this._setVisible(!1),this.overlayEl&&(this.overlayEl.style.opacity="0"),0;const a=this.targetIntensity>this.intensity?.45:.55;this.intensity+=(this.targetIntensity-this.intensity)*Math.min(1,t*a),Math.abs(this.targetIntensity-this.intensity)<.002&&(this.intensity=this.targetIntensity);const l=this.intensity>.01;this._setVisible(l);const c=r?1:0;if(l){if(this.sandWall.position.set(n.position.x,n.position.y+1.5,n.position.z),this._colorTmp.copy(qt.horizonStorm).lerp(qt.horizonAsr,xt.clamp(o*.35,0,.35)),this.wallUniforms.uTime.value=e,this.wallUniforms.uIntensity.value=this.intensity,this.wallUniforms.uIndoor.value+=(c-this.wallUniforms.uIndoor.value)*Math.min(1,t*5),this.wallUniforms.uColor.value.copy(this._colorTmp),this.streakUniforms.uTime.value=e,this.streakUniforms.uIntensity.value=this.intensity,this.streakUniforms.uIndoor.value=this.wallUniforms.uIndoor.value,this.streakUniforms.uPlayerPos.value.copy(i),this.streakUniforms.uColor.value.copy(this._colorTmp),this.overlayEl){const h=.88+.12*Math.sin(e*2.3)*Math.cos(e*1.1),d=this.intensity*h*(r?.16:.55);this.overlayEl.style.opacity=d.toFixed(3)}}else this.overlayEl&&(this.overlayEl.style.opacity="0");return this.intensity}}class _m{constructor(t,e,n,i){this.camera=t,this.physics=e,this.audio=n,this.settings=i,this.enabled=!1,this.position=new L(-11,0,15),this.yaw=-.34,this.pitch=-.02,this.eyeHeight=1.72,this.walkSpeed=4.55,this.sprintSpeed=8.95,this.vy=0,this.gravity=-19.5,this.jumpVelocity=7.5,this.onGround=!0,this.isJumping=!1,this.isActuallySprinting=!1,this.currentFovBoost=0,this.isSprintingKey=!1,this.autoSprintLocked=!1,this.isInsideHouse=!1,this.currentSurface="sand",this.bobTimer=0,this.lastStepSign=0,this.boundaryWarnCooldown=0,this.onBoundaryHit=null,this.keys={},this.joyVec={x:0,y:0},this.joyBeyondRing=!1,this.joyLockHover=!1,this.joyActive=!1,this.joyTouchId=null,this.joyOrigin={x:0,y:0},this.lookTouchId=null,this.lookLast={x:0,y:0},this.mouseDragging=!1,this.pointerLocked=!1,this._targetYaw=this.yaw,this._targetPitch=this.pitch,this.focusedInteractable=null,this._forward=new L,this._right=new L,this._moveDir=new L,this._toObj=new L,this.sprintBannerEl=document.getElementById("auto-sprint-banner"),this._bindInputs()}_haptic(t=12){try{navigator.vibrate&&navigator.vibrate(t)}catch{}}setAutoSprintLock(t){this.autoSprintLocked=!!t,this.sprintBannerEl&&this.sprintBannerEl.classList.toggle("hidden",!this.autoSprintLocked)}setPose(t,e,n,i=0){const r=this.physics.getGroundInfo(t,e,0);this.position.set(t,r.groundY,e),this.vy=0,this.onGround=!0,this.isJumping=!1,this.setAutoSprintLock(!1),this.yaw=n,this.pitch=i,this._targetYaw=n,this._targetPitch=i,this._applyCameraTransform(0,0)}triggerJump(){!this.enabled||!this.onGround||(this.audio.unlock(),this._haptic(14),this.vy=this.jumpVelocity,this.onGround=!1,this.isJumping=!0,this.audio.playFootstep(this.currentSurface,!0))}_bindInputs(){if(window.addEventListener("keydown",u=>{this.keys[u.code]=!0,(u.code==="ShiftLeft"||u.code==="ShiftRight")&&(this.isSprintingKey=!0),(u.code==="KeyS"||u.code==="ArrowDown")&&this.setAutoSprintLock(!1),u.code==="Space"&&(u.preventDefault(),this.triggerJump())}),window.addEventListener("keyup",u=>{this.keys[u.code]=!1,(u.code==="ShiftLeft"||u.code==="ShiftRight")&&(this.isSprintingKey=!1)}),this.sprintBannerEl){const u=p=>{p.preventDefault(),p.stopPropagation(),this.setAutoSprintLock(!1),this._haptic(10)};this.sprintBannerEl.addEventListener("touchstart",u,{passive:!1}),this.sprintBannerEl.addEventListener("click",u)}const t=document.getElementById("btn-mobile-jump");t&&(t.addEventListener("touchstart",u=>{u.preventDefault(),u.stopPropagation(),this.triggerJump()},{passive:!1}),t.addEventListener("click",u=>{u.stopPropagation(),this.triggerJump()}));const e=document.getElementById("look-zone"),n=document.getElementById("game-canvas");if(document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===n}),window.addEventListener("mousemove",u=>{if(this.enabled&&(this.pointerLocked||this.mouseDragging)){const p=this.settings.data.sensitivity*.0022;this._targetYaw-=u.movementX*p,this._targetPitch-=u.movementY*p,this._clampPitch()}}),window.addEventListener("pointerdown",u=>{if(!(!this.enabled||u.pointerType==="touch"||u.button!==0)&&(this.audio.unlock(),this.mouseDragging=!0,u.target===n||u.target===e))try{n.requestPointerLock&&!("ontouchstart"in window)&&n.requestPointerLock()}catch{}}),window.addEventListener("pointerup",()=>{this.mouseDragging=!1}),e){e.addEventListener("touchstart",p=>{if(this.enabled){this.audio.unlock();for(const g of p.changedTouches)if(this.lookTouchId===null){this.lookTouchId=g.identifier,this.lookLast.x=g.clientX,this.lookLast.y=g.clientY;break}}},{passive:!0}),e.addEventListener("touchmove",p=>{if(!(!this.enabled||this.lookTouchId===null)){for(const g of p.changedTouches)if(g.identifier===this.lookTouchId){const _=g.clientX-this.lookLast.x,m=g.clientY-this.lookLast.y;this.lookLast.x=g.clientX,this.lookLast.y=g.clientY;const f=Math.hypot(_,m),v=1+Math.min(.85,f*.02),S=this.settings.data.sensitivity*.0058*v;this._targetYaw-=_*S,this._targetPitch-=m*S*.88,this._clampPitch(),p.preventDefault();break}}},{passive:!1});const u=p=>{for(const g of p.changedTouches)if(g.identifier===this.lookTouchId){this.lookTouchId=null;break}};e.addEventListener("touchend",u,{passive:!0}),e.addEventListener("touchcancel",u,{passive:!0})}const i=document.getElementById("joystick-zone"),r=document.getElementById("joystick-float-wrap"),o=document.getElementById("joystick-base"),a=document.getElementById("joystick-knob"),l=document.getElementById("joystick-sprint-lock"),c=46,h=52,d=(u,p,g,_)=>{a&&(a.style.transform=`translate(${u.toFixed(1)}px, ${p.toFixed(1)}px)`),o&&o.classList.toggle("sprinting",g),l&&l.classList.toggle("engaged",_)};if(i&&r){i.addEventListener("touchstart",p=>{if(this.enabled){this.audio.unlock();for(const g of p.changedTouches)if(this.joyTouchId===null){this.joyTouchId=g.identifier,this.joyActive=!0,this.joyBeyondRing=!1,this.joyLockHover=!1,this.setAutoSprintLock(!1),this.joyOrigin.x=g.clientX,this.joyOrigin.y=g.clientY,r.style.left=`${g.clientX}px`,r.style.top=`${g.clientY}px`,r.classList.remove("hidden"),d(0,0,!1,!1);break}}},{passive:!0}),i.addEventListener("touchmove",p=>{if(!(!this.enabled||this.joyTouchId===null)){for(const g of p.changedTouches)if(g.identifier===this.joyTouchId){const _=g.clientX-this.joyOrigin.x,m=g.clientY-this.joyOrigin.y,f=Math.hypot(_,m),v=m<-36&&Math.abs(_)<Math.abs(m)*.85;this.joyBeyondRing=f>h&&v;const S=this.joyLockHover;this.joyLockHover=m<-92&&Math.abs(_)<56,this.joyLockHover&&!S&&this._haptic(16);const x=this.joyBeyondRing?56:c;let R=_,A=m;f>x&&(R=_/f*x,A=m/f*x);const T=Math.min(1,f/c),C=f>1e-4?_/f:0,E=f>1e-4?m/f:0,M=C*T,P=E*T;this.joyVec.x=Math.abs(M)<.08?0:M,this.joyVec.y=Math.abs(P)<.08?0:P,d(R,A,this.joyBeyondRing||this.joyLockHover,this.joyLockHover),p.preventDefault();break}}},{passive:!1});const u=p=>{for(const g of p.changedTouches)if(g.identifier===this.joyTouchId){this.joyLockHover&&(this.setAutoSprintLock(!0),this._haptic(22)),this.joyTouchId=null,this.joyActive=!1,this.joyBeyondRing=!1,this.joyLockHover=!1,this.joyVec.x=0,this.joyVec.y=0,r.classList.add("hidden"),d(0,0,!1,!1);break}};i.addEventListener("touchend",u,{passive:!0}),i.addEventListener("touchcancel",u,{passive:!0})}}_clampPitch(){this._targetPitch=xt.clamp(this._targetPitch,-1.32,1.32)}update(t,e,n){if(!this.enabled)return;this.boundaryWarnCooldown>0&&(this.boundaryWarnCooldown-=t);const i=Math.min(1,t*28);this.yaw+=(this._targetYaw-this.yaw)*i,this.pitch+=(this._targetPitch-this.pitch)*i;let r=0,o=0;(this.keys.KeyW||this.keys.ArrowUp)&&(r+=1),(this.keys.KeyS||this.keys.ArrowDown)&&(r-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(o+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(o-=1);let a=!1;this.joyActive?(r-=this.joyVec.y,o+=this.joyVec.x,(this.joyBeyondRing||this.joyLockHover)&&(a=!0)):this.autoSprintLocked&&(r=1,a=!0);const l=Math.min(1,Math.hypot(r,o));this.isActuallySprinting=(this.isSprintingKey||a)&&l>.3&&r>.15;const c=this.isActuallySprinting?8:0;this.currentFovBoost+=(c-this.currentFovBoost)*Math.min(1,t*7.5);const h=this.settings.data.fov+this.currentFovBoost;Math.abs(this.camera.fov-h)>.05&&(this.camera.fov=h,this.camera.updateProjectionMatrix());let d=0;if(l>.01){const m=(this.isActuallySprinting?this.sprintSpeed:this.walkSpeed)*l;d=m,this._forward.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),this._right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),this._moveDir.set(0,0,0).addScaledVector(this._forward,r).addScaledVector(this._right,o).normalize(),this.position.x+=this._moveDir.x*m*t,this.position.z+=this._moveDir.z*m*t,this.physics.resolveHorizontal(this.position,.36)&&this.boundaryWarnCooldown<=0&&this.onBoundaryHit&&(this.boundaryWarnCooldown=8,this.setAutoSprintLock(!1),this.onBoundaryHit())}const u=this.physics.getGroundInfo(this.position.x,this.position.z,this.position.y);this.currentSurface=u.surface;const p=this.position.y-u.groundY;this.isJumping||!this.onGround||p>.38?(this.onGround=!1,this.vy+=this.gravity*t,this.position.y+=this.vy*t,this.position.y<=u.groundY&&(this.position.y=u.groundY,this.vy<-3.2&&this.audio.playFootstep(this.currentSurface,!0),this.vy=0,this.onGround=!0,this.isJumping=!1)):(this.position.y+=(u.groundY-this.position.y)*Math.min(1,t*24),this.vy=0,this.onGround=!0),this.isInsideHouse=this.physics.isInsideBuilding(this.position);let g=0,_=0;if(this.onGround&&d>.35){const m=this.isActuallySprinting?12.8:7.6,f=this.isActuallySprinting?.082:.042,v=this.isActuallySprinting?.04:.02;this.bobTimer+=t*m;const S=Math.sin(this.bobTimer);g=S*f,_=Math.cos(this.bobTimer*.5)*v,S<-.82&&this.lastStepSign>=-.82&&this.audio.playFootstep(this.currentSurface,this.isActuallySprinting),this.lastStepSign=S}else this.onGround&&(g=Math.sin(e*1.45)*.011,this.lastStepSign=0);this._applyCameraTransform(_,g),this._updateActiveInteractable(n)}_applyCameraTransform(t,e){this.camera.position.set(this.position.x+Math.cos(this.yaw)*t,this.position.y+this.eyeHeight+e,this.position.z-Math.sin(this.yaw)*t),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=t*(this.isActuallySprinting?-.28:-.14)}_updateActiveInteractable(t){if(!t){this.focusedInteractable=null;return}const e=this.camera.position.distanceTo(t.worldPos);if(e>t.radius){this.focusedInteractable=null;return}this.camera.getWorldDirection(this._forward),this._toObj.subVectors(t.worldPos,this.camera.position).normalize();const n=this._forward.dot(this._toObj);this.focusedInteractable=n>.52||e<2.2?t:null}}class xm{constructor(t,e,n,i){this.camera=t,this.sky=e,this.audio=n,this.player=i,this.mode="title",this.timer=0,this.onWakeupComplete=null,this.onWakeupSubtitle=null,this._spokeStep1=!1,this._spokeStep2=!1,this._spokeStep3=!1,this._playedSunSwell=!1,this.eyelidEl=document.getElementById("eyelid-layer"),this.blurEl=document.getElementById("vision-blur-layer"),this.containerEl=document.getElementById("game-container"),this.skipBtn=document.getElementById("btn-skip-cutscene"),this.whisperEl=document.getElementById("time-whisper-banner"),this.whisperClockEl=document.getElementById("whisper-clock"),this.whisperLabelEl=document.getElementById("whisper-label"),this._whisperTimeout=null,this.skipBtn&&this.skipBtn.addEventListener("click",()=>{this.mode==="wakeup"&&this.finishWakeup()})}startTitleCamera(){this.mode="title",this.timer=0,this._setEyelids(1),this._setBlur(0,0),this.sky.cutsceneGlareBoost=0,this.containerEl?.classList.remove("cinematic-bars-active"),this.skipBtn?.classList.add("hidden")}startWakeupCutscene(t,e){this.mode="wakeup",this.timer=0,this.onWakeupSubtitle=t,this.onWakeupComplete=e,this._spokeStep1=!1,this._spokeStep2=!1,this._spokeStep3=!1,this._playedSunSwell=!1,this.player.enabled=!1,this.containerEl?.classList.add("cinematic-bars-active"),this.skipBtn?.classList.remove("hidden"),this._wakeBaseY=ae(-11,15),this._setEyelids(0),this._setBlur(14,.22),this.audio.playWakeUpTinnitus()}finishWakeup(){this.mode==="wakeup"&&(this.mode="gameplay",this._setEyelids(1),this._setBlur(0,0),this.sky.cutsceneGlareBoost=0,this.containerEl?.classList.remove("cinematic-bars-active"),this.skipBtn?.classList.add("hidden"),this.player.setPose(-11,15,-.34,-.02),this.player.enabled=!0,this.onWakeupComplete&&this.onWakeupComplete())}startEndingVista(){this.mode="ending",this.timer=0,this.player.enabled=!1,this.containerEl?.classList.add("cinematic-bars-active")}smoothAdvanceTime(t,e,n){this.sky.setTimeOfDay(n,!1),this.audio.playDesertSting(n>=.85),this.whisperEl&&this.whisperClockEl&&this.whisperLabelEl&&(this.whisperClockEl.textContent=t,this.whisperLabelEl.textContent=e,this.whisperEl.classList.add("visible"),this._whisperTimeout&&clearTimeout(this._whisperTimeout),this._whisperTimeout=setTimeout(()=>{this.whisperEl.classList.remove("visible")},3400))}_setEyelids(t){this.eyelidEl&&this.eyelidEl.style.setProperty("--eyelid-open",xt.clamp(t,0,1).toFixed(3))}_setBlur(t,e){this.blurEl&&(this.blurEl.style.backdropFilter=t>.3?`blur(${t.toFixed(1)}px)`:"none",this.blurEl.style.webkitBackdropFilter=t>.3?`blur(${t.toFixed(1)}px)`:"none",this.blurEl.style.background=e>.01?`rgba(255, 246, 224, ${e.toFixed(3)})`:"rgba(255, 246, 224, 0)")}update(t,e){if(this.timer+=t,this.mode==="title"){const n=.54+Math.sin(e*.1)*.18,i=28+Math.sin(e*.16)*1.4,r=Xt+4.5+Math.sin(n)*i,o=zt+2+Math.cos(n)*i,a=ae(r,o);this.camera.position.set(r,a+5.2+Math.sin(e*.2)*.35,o),this.camera.lookAt(Xt-2.2,3.2,zt);return}if(this.mode==="ending"){const i=-18.5+Math.sin(e*.14)*2.5,r=4,o=ae(i,r);this.camera.position.set(i,o+4,r),this.camera.lookAt(Xt+1,4.2,zt);return}if(this.mode==="wakeup"){const n=this.timer,i=-11,r=15,o=this._wakeBaseY,a=this.sky.sunDirection,l=Math.atan2(-a.x,-a.z),c=Math.asin(xt.clamp(a.y,-.95,.95));let h=o+.42,d=l+.28,u=.26,p=.14,g=0,_=14,m=0,f=0;if(n<2.8){const v=n/2.8;n<1?g=xt.smoothstep(n,.15,1)*.54:n<1.45?g=xt.lerp(.54,.12,(n-1)/.45):g=xt.lerp(.12,.95,xt.smoothstep(n,1.45,2.7)),_=xt.lerp(14,2,v),m=xt.lerp(.16,.05,v),p=xt.lerp(.15,.03,v),u=xt.lerp(.24,.42,v),n>1.2&&!this._spokeStep1&&(this._spokeStep1=!0,this.onWakeupSubtitle?.("حرارة خانقة... رمل جاف يملأ فمي... أين أنا؟"))}else if(n<5.6){const v=xt.smoothstep(n,2.8,4.9);g=n<4.7?.96:xt.lerp(.96,.46,(n-4.7)/.9),d=xt.lerp(l+.28,l,v),u=xt.lerp(.42,Math.min(1.18,c-.03),v),p=xt.lerp(.03,0,v),h=o+xt.lerp(.42,.68,v);const S=xt.smoothstep(n,3.4,4.85);f=S*.94,m=S*.3,_=2*(1-v)+S*2.2,n>3.6&&!this._playedSunSwell&&(this._playedSunSwell=!0,this.audio.playSunGlareSwell()),n>4.1&&!this._spokeStep2&&(this._spokeStep2=!0,this.onWakeupSubtitle?.("آه... شمس الظهيرة حارقة! سطوعها يكاد يعمي عيني..."))}else if(n<8){const v=xt.smoothstep(n,5.6,7.6);g=xt.lerp(.46,1,xt.smoothstep(n,6.1,7.5)),d=xt.lerp(l,-.52,v),u=xt.lerp(Math.min(1.18,c-.03),-.56,v),p=Math.sin(v*Math.PI)*-.07,h=o+xt.lerp(.68,1.18,v),f=Math.max(0,.94*(1-v*1.45)),m=Math.max(0,.3*(1-v*1.5)),_=Math.max(0,2.2*(1-v*1.35))}else if(n<10.8){const v=xt.smoothstep(n,8,10.5);g=1,_=0,m=0,f=0,d=xt.lerp(-.52,-.34,v),u=xt.lerp(-.56,-.02,v),p=0,h=o+xt.lerp(1.18,this.player.eyeHeight,v),n>8.4&&!this._spokeStep3&&(this._spokeStep3=!0,this.onWakeupSubtitle?.("بيت مهجور وسط هذه الكثبان... وهناك بوصلة تلمع على الصخرة أمامي."))}else{this.finishWakeup();return}this.camera.position.set(i,h,r),this.camera.rotation.order="YXZ",this.camera.rotation.y=d,this.camera.rotation.x=u,this.camera.rotation.z=p,this._setEyelids(g),this._setBlur(_,m),this.sky.cutsceneGlareBoost=f}}}const vm=["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];function pr(s){return String(s).replace(/\d/g,t=>vm[Number(t)])}const Ha=[{id:"compass",objective:"تفحّص البوصلة الملقاة على الصخرة القريبة لمعرفة اتجاهك",tag:"المهمة ١ من ٦ — الصحراء المفتوحة",title:"بوصلة نحاسية محطمة",sfx:"paper",inspectText:`الزجاج مشقوق بفعل الشمس، لكن الإبرة لم تتوقف... إنها ترتجف بعناد وتشير مباشرةً نحو برج الهوائي فوق البيت المهجور بدلاً من الشمال.

نُقش على ظهرها: «محطة الرصد — القطاع ٧».`,lines:[{text:"إبرة البوصلة لا تشير للشمال... شيء ما داخل ذلك البيت المهجور يجذبها بقوة.",style:"thought"},{text:"هناك آثار أقدام تقود نحو حطام سيارة مدفونة في الرمل... سأتفقدها أولاً.",style:"thought"}],timeTarget:.16,whisperClock:null},{id:"jeep",objective:"اتبع آثار الأقدام وتفتّش حطام سيارة البعثة المدفونة في الرمل",tag:"المهمة ٢ من ٦ — طريق البعثة",title:"حطام سيارة الدفع الرباعي وبطاقة هوية",sfx:"metal",inspectText:`السيارة غارقة في الرمال منذ أيام، ومحرّكها محترق كأن موجة كهرومغناطيسية ضربتها فجأة.

على المقعد الأمامي وجدتَ بطاقة تعريفية تحمل صورتك أنت:
«المهندس نادر العتيبي — قائد بعثة وادي الصمت الجيولوجية».`,lines:[{text:"هذه صورتي... اسمي نادر! لماذا لا أذكر شيئاً عن هذه الحادثة؟",style:"thought"},{text:"المعدات مفقودة من السيارة... لا بد أن الفريق نقلها إلى ساحة البيت المهجور.",style:"thought"}],timeTarget:.34,whisperClock:"١:٢٥ ظهراً",whisperPhase:"بعد الظهيرة — وهج الرمال يشتد"},{id:"canteen",objective:"ادخل ساحة البيت المهجور وتفقّد حقيبة البعثة تحت المظلة",tag:"المهمة ٣ من ٦ — فناء البيت المهجور",title:"حقيبة البعثة وتحذير مكتوب بعجلة",sfx:"paper",inspectText:`الزمزمية جافة تماماً. لكن داخل جيب الحقيبة ورقة مطوية بيدٍ مرتجفة:

«نادر... النبضة الصوتية القادمة من أسفل البيت تمحو الذاكرة القريبة! إذا استيقظتَ تائهاً في الكثبان، ادخل غرفة مكتبك بالداخل واقرأ دفترك فوراً قبل حلول العصر.»`,lines:[{text:"النبضة تحت البيت هي سبب فقدان ذاكرتي! وأنا من كتب التحذير لنفسي...",style:"thought"},{text:"يجب أن أدخل البيت الآن وأجد دفتري في غرفة المكتب اليسرى.",style:"thought"}],timeTarget:.52,whisperClock:"٢:٣٥ بعد الظهر",whisperPhase:"الشمس تبدأ بالميل غرباً"},{id:"journal",objective:"ادخل غرفة المكتب (الجهة اليسرى داخل البيت) واقرأ دفتر ملاحظاتك",tag:"المهمة ٤ من ٦ — مكتب البحث الداخلي",title:"دفتر ملاحظات نادر — اليوم السادس",sfx:"paper",inspectText:`«عثرنا على ممرٍّ خرسانيٍّ قديم أسفل هذا البيت، يعلوه باب قبوٍ حديديٍّ وسط الردهة.

نزل زملائي الثلاثة بالأمس لتتبع مصدر الإشارة ثم أُغلق القفل المغناطيسي عليهم!
لا يُفتح القبو إلا بتشغيل المذياع على التردد ٤٤ — لكن برج الهوائي مفصول. اخرج للباحة الخلفية قرب النخيل وارفع قاطع البرج أولاً.»`,lines:[{text:"زملائي محاصرون في القبو تحت قدميّ الآن... منذ الأمس!",style:"journal"},{text:"سأخرج من الباب الخلفي نحو النخيل وأرفع قاطع برج الهوائي فوراً.",style:"thought"}],timeTarget:.74,whisperClock:"٣:٤٠ قبيل العصر",whisperPhase:"الرمال تكتسي بلون ذهبي دافئ"},{id:"antenna_box",objective:"اخرج من الباب الخلفي نحو النخيل وشغّل قاطع برج الهوائي",tag:"المهمة ٥ من ٦ — الباحة الخلفية",title:"إعادة التيار الاحتياطي من توربينة الرياح",sfx:"metal",inspectText:`دفعتَ الذراع المعدنية الثقيلة للأعلى بقوة!

دارت توربينة الرياح فوق السطح بأزيزٍ كهربائي واضح، وعاد التيار الاحتياطي يتدفق نحو غرفة الاتصالات داخل البيت.`,lines:[{text:"نجحت! الكابلات تنبض بالكهرباء الآن... والشمس تقترب سريعاً من العصر.",style:"thought"},{text:"عليّ الركض إلى غرفة الاتصالات بالجهة اليمنى داخل البيت وتشغيل المذياع!",style:"thought"}],timeTarget:.9,whisperClock:"٤:١٨ عصراً",whisperPhase:"وقت العصر — ظلال طويلة فوق الكثبان"},{id:"radio",objective:"عُد إلى غرفة الاتصالات (الجهة اليمنى داخل البيت) وشغّل المذياع",tag:"المهمة ٦ من ٦ — لحظة الحقيقة (العصر)",title:"التردد ٤٤ — النداء من تحت الرمال",sfx:"radio",inspectText:`توهّج مؤشر المذياع بضوء كهرماني ساطع وسط غبار العصر الذهبي، واخترق صوت مألوف موجات التشويش!

وفي اللحظة نفسها، دوّى صوت انفتاح القفل المغناطيسي لباب القبو الحديدي في الردهة الرئيسية خلفك...`,lines:[{text:"«... نادر! هل تسمعني؟ نحن بخير أسفل القبو... لكن لا تبقَ في الخارج بعد الغروب...»",style:"radio"},{text:"«... الشيء الذي أيقظناه في الرمال يستفيق كل مساء... انزل إلينا الآن!»",style:"radio"},{text:"انفتح باب القبو أخيراً... لقد حلّ العصر، والرحلة الحقيقية تبدأ الآن.",style:"thought"}],timeTarget:1,whisperClock:"٤:٤٥ عصراً",whisperPhase:"العصر الذهبي — ختام الفصل الأول"}];class Mm{constructor(t,e,n,i,r,o=null){this.audio=t,this.sky=e,this.house=n,this.cutscenes=i,this.ui=r,this.dustStorm=o,this.missionIndex=0,this.chapterComplete=!1,this._pendingEnding=!1,this.freeRoam=!1,this.queue=[],this.activeLine=null,this.charIndex=0,this.charTimer=0,this.holdTimer=0,this.charInterval=.042,this.subContainer=document.getElementById("subtitle-container"),this.subSpeaker=document.getElementById("subtitle-speaker"),this.subText=document.getElementById("subtitle-text")}reset(){this.missionIndex=0,this.chapterComplete=!1,this._pendingEnding=!1,this.freeRoam=!1,this.queue=[],this.activeLine=null,this.house.setAntennaPowered(!1),this.sky.setTimeOfDay(0,!0),this.dustStorm?.setTargetIntensity(0,!0),this.hideSubtitle(),this._activateCurrentMission()}getCurrentMission(){return this.missionIndex>=Ha.length?null:Ha[this.missionIndex]}_activateCurrentMission(){const t=this.getCurrentMission();if(!t){this.house.setActiveMissionId(null),this.ui.updateMission("اكتمل الفصل الأول — تجوّل بحرية في وقت العصر",null,null);return}this.house.setActiveMissionId(t.id),this.ui.updateMission(t.objective,null,0)}enqueueLine(t,e="thought",n=""){this.queue.push({text:t,style:e,speaker:n}),this.activeLine||this._startNextLine()}sayImmediate(t,e="thought",n=""){this.queue=[],this.activeLine=null,this.enqueueLine(t,e,n)}_startNextLine(){if(this.queue.length===0){this.activeLine=null,this.hideSubtitle(),this._pendingEnding&&!this.freeRoam&&(this._pendingEnding=!1,this.cutscenes.startEndingVista(),this.ui.showEndingScreen());return}this.activeLine=this.queue.shift(),this.charIndex=0,this.charTimer=0,this.holdTimer=0,this.subContainer&&this.subText&&(this.subContainer.classList.remove("hidden"),this.subText.textContent="",this.subText.classList.add("typing"),this.subSpeaker&&(this.activeLine.speaker?(this.subSpeaker.textContent=this.activeLine.speaker,this.subSpeaker.classList.remove("hidden")):this.activeLine.style==="radio"?(this.subSpeaker.textContent="المذياع — التردد ٤٤",this.subSpeaker.classList.remove("hidden")):this.subSpeaker.classList.add("hidden")))}hideSubtitle(){this.subContainer&&this.subContainer.classList.add("hidden"),this.subText&&this.subText.classList.remove("typing")}handleInteract(t){const e=this.getCurrentMission();!t||!e||t.id!==e.id||(e.sfx==="metal"?this.audio.playMetalSwitch():e.sfx==="radio"?this.audio.playRadioBurst():this.audio.playPaperRustle(),e.id==="antenna_box"?this.house.setAntennaPowered(!0):e.id==="radio"&&this.house.unlockHatch(),this.ui.openInspectModal(e.tag,e.title,e.inspectText,()=>{e.whisperClock?this.cutscenes.smoothAdvanceTime(e.whisperClock,e.whisperPhase,e.timeTarget):this.sky.setTimeOfDay(Math.max(this.sky.targetTimeOfDay,e.timeTarget),!1),e.id==="journal"&&this.dustStorm?(this.dustStorm.setTargetIntensity(.88,!1),this.enqueueLine("الريح تشتد وعاصفة ترابية تهبّ في الخارج... اتبع سهم البوصلة نحو قاطع الهوائي!","thought")):e.id==="antenna_box"&&this.dustStorm&&this.dustStorm.setTargetIntensity(0,!1);for(const n of e.lines)this.enqueueLine(n.text,n.style);this.missionIndex++,this._activateCurrentMission(),e.id==="radio"&&!this.chapterComplete&&(this.chapterComplete=!0,this._pendingEnding=!0)}))}getClockDisplay(t=this.sky.timeOfDay){const e=Math.round(735+t*270),n=Math.floor(e/60),i=e%60,r=n>12?n-12:n,o=i<10?`0${i}`:`${i}`,a=n>=15?"عصراً":"ظهراً";return`${pr(r)}:${pr(o)} ${a}`}update(t,e,n,i=0){e&&!this.freeRoam&&this.sky.targetTimeOfDay<.96&&(this.sky.targetTimeOfDay=Math.min(.96,this.sky.targetTimeOfDay+t/320));const r=this.house.getActiveInteractable(),o=this.getCurrentMission();if(e&&o&&r&&n){const a=r.worldPos.x-n.x,l=r.worldPos.z-n.z,c=Math.max(1,Math.round(Math.hypot(a,l))),h=Math.atan2(-a,-l);let d=i-h;for(;d>Math.PI;)d-=Math.PI*2;for(;d<-Math.PI;)d+=Math.PI*2;const u=d*180/Math.PI;this.ui.updateMission(o.objective,`${pr(c)}م`,u)}if(this.ui.updateClock(this.getClockDisplay(this.sky.timeOfDay),this.sky.timeOfDay),this.activeLine){const a=this.activeLine.text;if(this.charIndex<a.length)for(this.charTimer+=t;this.charTimer>=this.charInterval&&this.charIndex<a.length;){this.charTimer-=this.charInterval;const l=a[this.charIndex];this.charIndex++,this.subText&&(this.subText.textContent=a.slice(0,this.charIndex)),this.charIndex%2===1&&this.audio.playTextBlip(this.activeLine.style,l)}else{this.subText&&this.subText.classList.remove("typing"),this.holdTimer+=t;const l=Math.max(2.3,a.length*.042);this.holdTimer>=l&&this._startNextLine()}}}}class ym{constructor(t,e){this.settings=t,this.audio=e,this.fullscreenGate=document.getElementById("fullscreen-gate"),this.titleScreen=document.getElementById("title-screen"),this.hudLayer=document.getElementById("hud-layer"),this.settingsModal=document.getElementById("settings-modal"),this.controlsModal=document.getElementById("controls-modal"),this.inspectModal=document.getElementById("inspect-modal"),this.endingScreen=document.getElementById("ending-screen"),this.portraitWarning=document.getElementById("portrait-warning"),this.missionTextEl=document.getElementById("hud-mission-text"),this.missionDistEl=document.getElementById("hud-mission-dist"),this.missionArrowEl=document.getElementById("hud-mission-arrow"),this.clockEl=document.getElementById("hud-clock"),this.sunIconEl=document.getElementById("hud-sun-icon"),this.fpsEl=document.getElementById("hud-fps-counter"),this.reticleDot=document.getElementById("reticle-dot"),this.mobileInteractBtn=document.getElementById("btn-mobile-interact"),this.mobileInteractText=document.getElementById("mobile-interact-text"),this.restoreFsBtn=document.getElementById("btn-restore-fs"),this.returnTitleBtn=document.getElementById("btn-return-title"),this.onStartGame=null,this.onInteract=null,this.onPauseToggle=null,this.onReturnToTitle=null,this.onFreeRoam=null,this.onReplayChapter=null,this._inspectCloseCb=null,this._portraitDismissed=!1,this.isModalOpen=!1,this.inGameplay=!1,this._bindButtons(),this._bindFullscreenMonitor(),this._syncSettingsUI(),this._checkOrientation(),window.addEventListener("resize",()=>this._checkOrientation())}async enterMandatoryFullscreen(){this.audio.unlock();try{const t=document.documentElement;document.fullscreenElement||(t.requestFullscreen?await t.requestFullscreen():t.webkitRequestFullscreen&&t.webkitRequestFullscreen()),screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape").catch(()=>{})}catch{}this.fullscreenGate?.classList.remove("active"),setTimeout(()=>this.fullscreenGate?.classList.add("hidden"),380),this.showTitleScreen()}_bindFullscreenMonitor(){const t=()=>{const e=!!(document.fullscreenElement||document.webkitFullscreenElement);this.restoreFsBtn?.classList.toggle("hidden",e)};document.addEventListener("fullscreenchange",t),document.addEventListener("webkitfullscreenchange",t),this.restoreFsBtn?.addEventListener("click",()=>{this.enterMandatoryFullscreen()})}_bindButtons(){document.getElementById("btn-enter-fullscreen")?.addEventListener("click",()=>{this.enterMandatoryFullscreen()}),document.getElementById("btn-start-game")?.addEventListener("click",()=>{this.audio.unlock(),!document.fullscreenElement&&document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen().catch(()=>{}),this.hideTitleScreen(),this.onStartGame?.()}),document.getElementById("btn-open-settings")?.addEventListener("click",()=>{this.audio.unlock(),this.openSettings(!1)}),document.getElementById("btn-hud-pause")?.addEventListener("click",()=>{this.openSettings(!0)});const t=()=>{this.settingsModal?.classList.add("hidden"),this.isModalOpen=!1,this.onPauseToggle?.(!1)};document.getElementById("btn-close-settings")?.addEventListener("click",t),document.getElementById("btn-resume-from-settings")?.addEventListener("click",t),this.returnTitleBtn?.addEventListener("click",()=>{t(),this.onReturnToTitle?.()}),document.getElementById("btn-open-controls")?.addEventListener("click",()=>{this.controlsModal?.classList.remove("hidden"),this.isModalOpen=!0});const e=()=>{this.controlsModal?.classList.add("hidden"),this.isModalOpen=!1};document.getElementById("btn-close-controls")?.addEventListener("click",e),document.getElementById("btn-ok-controls")?.addEventListener("click",e),document.getElementById("btn-close-inspect")?.addEventListener("click",()=>{this.inspectModal?.classList.add("hidden"),this.isModalOpen=!1;const o=this._inspectCloseCb;this._inspectCloseCb=null,this.onPauseToggle?.(!1),o?.()}),this.mobileInteractBtn?.addEventListener("click",()=>this.onInteract?.()),document.getElementById("btn-free-roam")?.addEventListener("click",()=>{this.endingScreen?.classList.add("hidden"),this.endingScreen?.classList.remove("active"),this.showHUD(),this.onFreeRoam?.()}),document.getElementById("btn-replay-chapter")?.addEventListener("click",()=>{this.endingScreen?.classList.add("hidden"),this.endingScreen?.classList.remove("active"),this.onReplayChapter?.()}),document.getElementById("btn-dismiss-portrait")?.addEventListener("click",()=>{this._portraitDismissed=!0,this.portraitWarning?.classList.add("hidden")}),window.addEventListener("keydown",o=>{o.code==="KeyE"&&this.inGameplay&&!this.isModalOpen?this.onInteract?.():o.code==="Escape"&&this.inGameplay&&(this.settingsModal?.classList.contains("hidden")?this.isModalOpen||this.openSettings(!0):t())}),document.getElementById("opt-quality")?.querySelectorAll("button").forEach(o=>{o.addEventListener("click",()=>{this.settings.applyQualityPreset(o.dataset.val),this._syncSettingsUI()})});const i=(o,a,l,c)=>{const h=document.getElementById(o),d=document.getElementById(l);h?.addEventListener("input",()=>{const u=parseFloat(h.value);this.settings.set(a,u),d&&(d.textContent=c(u))})};i("opt-sensitivity","sensitivity","val-sensitivity",o=>`${o.toFixed(1)}x`),i("opt-resolution","resolutionScale","val-resolution",o=>`${Math.round(o*100)}%`),i("opt-fov","fov","val-fov",o=>`${Math.round(o)}°`),i("opt-volume","volume","val-volume",o=>`${Math.round(o*100)}%`);const r=(o,a)=>{const l=document.getElementById(o);l?.addEventListener("change",()=>{this.settings.set(a,l.checked),a==="showFps"&&this._updateFpsVisibility()})};r("opt-shadows","shadows"),r("opt-sunflare","sunFlare"),r("opt-storm","dustStorm"),r("opt-fps","showFps")}_syncSettingsUI(){const t=this.settings.data;document.querySelectorAll("#opt-quality button").forEach(i=>{i.classList.toggle("active",i.dataset.val===t.quality)});const e=(i,r,o,a)=>{const l=document.getElementById(i),c=document.getElementById(o);l&&(l.value=String(r)),c&&(c.textContent=a(r))};e("opt-sensitivity",t.sensitivity,"val-sensitivity",i=>`${i.toFixed(1)}x`),e("opt-resolution",t.resolutionScale,"val-resolution",i=>`${Math.round(i*100)}%`),e("opt-fov",t.fov,"val-fov",i=>`${Math.round(i)}°`),e("opt-volume",t.volume,"val-volume",i=>`${Math.round(i*100)}%`);const n=(i,r)=>{const o=document.getElementById(i);o&&(o.checked=!!r)};n("opt-shadows",t.shadows),n("opt-sunflare",t.sunFlare),n("opt-storm",t.dustStorm),n("opt-fps",t.showFps),this._updateFpsVisibility()}_updateFpsVisibility(){this.fpsEl?.classList.toggle("hidden",!this.settings.data.showFps)}_checkOrientation(){if(this._portraitDismissed||!this.portraitWarning)return;const t=window.innerHeight>window.innerWidth&&window.innerWidth<680;this.portraitWarning.classList.toggle("hidden",!t)}dismissGateForDebug(){this.fullscreenGate?.classList.remove("active"),this.fullscreenGate?.classList.add("hidden")}showTitleScreen(){this.inGameplay=!1,this.hudLayer?.classList.add("hidden"),this.endingScreen?.classList.add("hidden"),this.endingScreen?.classList.remove("active"),this.titleScreen?.classList.remove("hidden"),requestAnimationFrame(()=>this.titleScreen?.classList.add("active"))}hideTitleScreen(){this.titleScreen?.classList.remove("active"),setTimeout(()=>this.titleScreen?.classList.add("hidden"),450)}showHUD(){this.inGameplay=!0,this.hudLayer?.classList.remove("hidden"),this._updateFpsVisibility()}hideHUD(){this.hudLayer?.classList.add("hidden")}openSettings(t){document.pointerLockElement&&document.exitPointerLock?.(),this._syncSettingsUI(),this.returnTitleBtn?.classList.toggle("hidden",!t),this.settingsModal?.classList.remove("hidden"),this.isModalOpen=!0,t&&this.onPauseToggle?.(!0)}openInspectModal(t,e,n,i){document.pointerLockElement&&document.exitPointerLock?.(),document.getElementById("inspect-tag").textContent=t,document.getElementById("inspect-title").textContent=e,document.getElementById("inspect-body").textContent=n,this._inspectCloseCb=i,this.inspectModal?.classList.remove("hidden"),this.isModalOpen=!0,this.onPauseToggle?.(!0)}showEndingScreen(){this.inGameplay=!1,this.hideHUD(),this.endingScreen?.classList.remove("hidden"),requestAnimationFrame(()=>this.endingScreen?.classList.add("active"))}updateMission(t,e,n=null){this.missionTextEl&&this.missionTextEl.textContent!==t&&(this.missionTextEl.textContent=t),this.missionArrowEl&&(n!==null&&Number.isFinite(n)?(this.missionArrowEl.style.transform=`rotate(${n.toFixed(1)}deg)`,this.missionArrowEl.classList.remove("hidden")):this.missionArrowEl.classList.add("hidden")),this.missionDistEl&&(e?(this.missionDistEl.textContent=e,this.missionDistEl.classList.remove("hidden")):this.missionDistEl.classList.add("hidden"))}updateClock(t,e){this.clockEl&&(this.clockEl.textContent=t),this.sunIconEl&&(this.sunIconEl.style.color=e>.65?"#ff9d42":"#ffe08a")}updateInteractPrompt(t){if(!t){this.reticleDot?.classList.remove("interactive"),this.mobileInteractBtn?.classList.add("hidden");return}this.reticleDot?.classList.add("interactive"),this.mobileInteractText&&(this.mobileInteractText.textContent=t.label),this.mobileInteractBtn?.classList.remove("hidden")}updateFPS(t){this.fpsEl&&this.settings.data.showFps&&(this.fpsEl.textContent=`${Math.round(t)} FPS`)}}class Sm{constructor(){this.canvas=document.getElementById("game-canvas"),this.settings=new om,this.audio=new cm,this.modelManager=new lm,this.paused=!1,this.clock=new yh,this.elapsed=0,this.fpsFrames=0,this.fpsAccum=0,this.dynamicDprMult=1,this._initRenderer(),this._bootAsync()}async _bootAsync(){await this.modelManager.preloadAll(),this._initWorld(),this._initGameplay(),this._bindSettings(),this._exposeDebugAPI(),window.addEventListener("resize",()=>this._onResize()),this._onResize(),this.cutscenes.startTitleCamera(),this._animate()}_initRenderer(){this.renderer=new rm({canvas:this.canvas,antialias:!0,powerPreference:"high-performance",stencil:!1}),this.renderer.outputColorSpace=Ie,this.renderer.toneMapping=Xa,this.renderer.toneMappingExposure=.96,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=qn?ro:Va,this.scene=new ml,this.camera=new Ve(this.settings.data.fov,window.innerWidth/window.innerHeight,.14,1150)}_initWorld(){this.texManager=new am(this.renderer),this.physics=new hm(ae),this.sky=new dm(this.scene,this.renderer,this.settings),this.desert=new pm(this.scene,this.texManager,this.modelManager,this.physics,this.settings),this.house=new mm(this.scene,this.texManager,this.modelManager,this.physics,this.desert.jeepWorldPos,this.desert.tentBarrelWorldPos),this.dustStorm=new gm(this.scene,this.settings)}_initGameplay(){this.player=new _m(this.camera,this.physics,this.audio,this.settings),this.cutscenes=new xm(this.camera,this.sky,this.audio,this.player),this.ui=new ym(this.settings,this.audio),this.story=new Mm(this.audio,this.sky,this.house,this.cutscenes,this.ui,this.dustStorm),this.player.onBoundaryHit=()=>{this.story.sayImmediate("الصحراء هنا بلا نهاية... لن أبتعد كثيراً قبل إنهاء مهمتي.")},this.ui.onStartGame=()=>{this.story.reset(),this.cutscenes.startWakeupCutscene(t=>this.story.sayImmediate(t,"thought"),()=>this.ui.showHUD())},this.ui.onInteract=()=>{if(this.player.enabled&&this.player.focusedInteractable){try{navigator.vibrate&&navigator.vibrate(15)}catch{}this.story.handleInteract(this.player.focusedInteractable)}},this.ui.onPauseToggle=t=>{this.paused=t,this.cutscenes.mode==="gameplay"&&(this.player.enabled=!t)},this.ui.onReturnToTitle=()=>{this.paused=!1,this.player.enabled=!1,this.story.reset(),this.cutscenes.startTitleCamera(),this.ui.showTitleScreen()},this.ui.onFreeRoam=()=>{this.story.freeRoam=!0,this.dustStorm.setTargetIntensity(0,!0),this.sky.setTimeOfDay(.96,!0),this.cutscenes.mode="gameplay",this.cutscenes.containerEl?.classList.remove("cinematic-bars-active"),this.player.setPose(-5,-4,-.4,-.02),this.player.enabled=!0,this.story.sayImmediate("وقت العصر الذهبي... تجوّل بحرية في الصحراء وتأمل الأجواء.")},this.ui.onReplayChapter=()=>this.ui.onStartGame()}_applyPixelRatio(){const t=this.settings.data,e=this.settings.getPreset(),n=Math.min(window.devicePixelRatio||1,e.dprCap)*t.resolutionScale,i=Math.max(.55,Math.min(1.85,n*this.dynamicDprMult));this.renderer.setPixelRatio(i)}_bindSettings(){const t=(e,n)=>{this.dynamicDprMult=1,this._applyPixelRatio(),this.camera.fov=e.fov,this.camera.updateProjectionMatrix(),this.audio.setVolume(e.volume),this.texManager.setAnisotropy(n.anisotropy),this.sky.applySettings(e,n),this.desert.applySettings(n),this.dustStorm.applySettings(e,n)};t(this.settings.data,this.settings.getPreset()),this.settings.onChange(t)}_onResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1)}_animate(){requestAnimationFrame(()=>this._animate());const t=this.clock.getDelta(),e=Math.min(t,.05);if(!this.paused){if(this.elapsed+=e,this.cutscenes.mode==="gameplay"){const o=this.house.getActiveInteractable();this.player.update(e,this.elapsed,o),this.ui.updateInteractPrompt(this.player.focusedInteractable)}else this.cutscenes.update(e,this.elapsed);const n=this.cutscenes.mode==="gameplay"?this.player.position:this.camera.position,i=this.cutscenes.mode==="gameplay"?this.player.isInsideHouse:!1,r=this.dustStorm.update(e,this.elapsed,this.camera,n,i,this.sky.timeOfDay);this.sky.setStormIntensity(r),this.desert.setStormIntensity(r),this.house.setStormIntensity(r),this.audio.setStormIntensity(r),this.sky.update(e,this.elapsed,this.camera,n,i),this.desert.update(e,this.elapsed,n,this.sky.timeOfDay),this.house.update(e,this.elapsed,this.camera,this.sky.timeOfDay),this.audio.updateAmbience(e,i?1:0,this.sky.timeOfDay,this.elapsed),this.story.update(e,this.cutscenes.mode==="gameplay",n,this.player.yaw)}if(this.renderer.render(this.scene,this.camera),this.fpsFrames++,this.fpsAccum+=t,this.fpsAccum>=.75){const n=this.fpsFrames/this.fpsAccum;this.ui.updateFPS(n),qn&&n>14&&n<48&&this.dynamicDprMult>.72?(this.dynamicDprMult=Math.max(.72,this.dynamicDprMult-.05),this._applyPixelRatio()):qn&&n>57&&this.dynamicDprMult<1&&(this.dynamicDprMult=Math.min(1,this.dynamicDprMult+.03),this._applyPixelRatio()),this.fpsFrames=0,this.fpsAccum=0}}_exposeDebugAPI(){window.__SARAB__={showTitle:()=>{this.ui.dismissGateForDebug(),this.ui.showTitleScreen()},setTimeOfDay:t=>this.sky.setTimeOfDay(t,!0),setStorm:t=>{this.dustStorm.setTargetIntensity(t,!0),this.sky.setStormIntensity(t,!0),this.desert.setStormIntensity(t),this.house.setStormIntensity(t),this.audio.setStormIntensity(t)},teleport:(t,e,n,i=0,r=!0)=>{const o=this.sky.timeOfDay,a=this.dustStorm.targetIntensity;this.ui.dismissGateForDebug(),this.ui.hideTitleScreen(),this.cutscenes.mode="gameplay",this.cutscenes.containerEl?.classList.remove("cinematic-bars-active"),this.story.reset(),r&&(this.sky.setTimeOfDay(o,!0),this.dustStorm.setTargetIntensity(a,!0),this.sky.setStormIntensity(a,!0)),this.ui.showHUD(),this.player.enabled=!0,this.player.setPose(t,e,n,i)},setMission:t=>{this.story.missionIndex=t,this.story._activateCurrentMission()},triggerSubtitle:(t,e="thought")=>this.story.sayImmediate(t,e),testRockCollision:()=>{const n=ae(-13.5,-9.5);let i=0;const r=.36,o=1.42+r;for(let a=0;a<16;a++){const l=a/16*Math.PI*2,c=new L(-13.5+Math.cos(l)*.5,n,-9.5+Math.sin(l)*.5);this.physics.resolveHorizontal(c,r);const h=Math.hypot(c.x- -13.5,c.z- -9.5);h<o&&(i=Math.max(i,o-h))}return{rockBlockedCleanly:i<.02,maxPenetration:Number(i.toFixed(4))}},testJeepClimb:()=>{const t=this.desert.jeepWorldPos.x,e=this.desert.jeepWorldPos.z,n=ae(t,e),i=this.physics.getGroundInfo(t,e,n+1.2);return{groundY:Number(n.toFixed(2)),roofStandY:Number(i.groundY.toFixed(2)),canClimbJeep:i.groundY>n+.8}},getStats:()=>({drawCalls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,timeOfDay:this.sky.timeOfDay,storm:Number(this.dustStorm.intensity.toFixed(2)),pos:this.player.position.toArray(),indoor:this.player.isInsideHouse,modelsLoaded:this.modelManager.geometries.size})}}}window.addEventListener("DOMContentLoaded",()=>{new Sm});
