(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Aa="172",oc=0,io=1,lc=2,Ca=1,gl=2,_n=3,hn=0,Se=1,Ee=2,Nn=0,Pi=1,as=2,so=3,ro=4,cc=5,$n=100,hc=101,uc=102,dc=103,fc=104,pc=200,mc=201,gc=202,_c=203,Nr=204,Br=205,vc=206,xc=207,yc=208,Mc=209,Sc=210,bc=211,Ec=212,wc=213,Tc=214,Or=0,zr=1,kr=2,Di=3,Gr=4,Hr=5,Vr=6,Wr=7,Ra=0,Ac=1,Cc=2,yn=0,Rc=1,Pc=2,Lc=3,_l=4,Ic=5,Dc=6,Uc=7,vl=300,Ui=301,Fi=302,Xr=303,qr=304,Js=306,Bn=1e3,Fn=1001,Yr=1002,He=1003,Fc=1004,fs=1005,$e=1006,ir=1007,ei=1008,En=1009,xl=1010,yl=1011,os=1012,Pa=1013,ii=1014,cn=1015,hs=1016,La=1017,Ia=1018,Ni=1020,Ml=35902,Sl=1021,bl=1022,rn=1023,El=1024,wl=1025,Li=1026,Bi=1027,Da=1028,Ua=1029,Tl=1030,Fa=1031,Na=1033,ks=33776,Gs=33777,Hs=33778,Vs=33779,Zr=35840,jr=35841,$r=35842,Kr=35843,Jr=36196,Qr=37492,ta=37496,ea=37808,na=37809,ia=37810,sa=37811,ra=37812,aa=37813,oa=37814,la=37815,ca=37816,ha=37817,ua=37818,da=37819,fa=37820,pa=37821,Ws=36492,ma=36494,ga=36495,Al=36283,_a=36284,va=36285,xa=36286,Nc=3200,Bc=3201,Ba=0,Oc=1,ln="",Me="srgb",Oi="srgb-linear",Zs="linear",te="srgb",ai=7680,ao=519,zc=512,kc=513,Gc=514,Cl=515,Hc=516,Vc=517,Wc=518,Xc=519,ya=35044,oo="300 es",vn=2e3,js=2001;class Hi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let lo=1234567;const is=Math.PI/180,zi=180/Math.PI;function Mn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[s&255]+Ae[s>>8&255]+Ae[s>>16&255]+Ae[s>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function Bt(s,t,e){return Math.max(t,Math.min(e,s))}function Oa(s,t){return(s%t+t)%t}function qc(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Yc(s,t,e){return s!==t?(e-s)/(t-s):0}function ss(s,t,e){return(1-e)*s+e*t}function Zc(s,t,e,n){return ss(s,t,1-Math.exp(-e*n))}function jc(s,t=1){return t-Math.abs(Oa(s,t*2)-t)}function $c(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Kc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Jc(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Qc(s,t){return s+Math.random()*(t-s)}function th(s){return s*(.5-Math.random())}function eh(s){s!==void 0&&(lo=s);let t=lo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nh(s){return s*is}function ih(s){return s*zi}function sh(s){return(s&s-1)===0&&s!==0}function rh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ah(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function oh(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*d,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*p,a*c);break;case"YXY":s.set(l*p,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function sn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Jt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ne={DEG2RAD:is,RAD2DEG:zi,generateUUID:Mn,clamp:Bt,euclideanModulo:Oa,mapLinear:qc,inverseLerp:Yc,lerp:ss,damp:Zc,pingpong:jc,smoothstep:$c,smootherstep:Kc,randInt:Jc,randFloat:Qc,randFloatSpread:th,seededRandom:eh,degToRad:nh,radToDeg:ih,isPowerOfTwo:sh,ceilPowerOfTwo:rh,floorPowerOfTwo:ah,setQuaternionFromProperEuler:oh,normalize:Jt,denormalize:sn};class vt{constructor(t=0,e=0){vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Bt(this.x,t.x,e.x),this.y=Bt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Bt(this.x,t,e),this.y=Bt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Bt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dt{constructor(t,e,n,i,r,o,a,l,c){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],x=i[1],y=i[4],v=i[7],C=i[2],w=i[5],T=i[8];return r[0]=o*_+a*x+l*C,r[3]=o*m+a*y+l*w,r[6]=o*f+a*v+l*T,r[1]=c*_+h*x+d*C,r[4]=c*m+h*y+d*w,r[7]=c*f+h*v+d*T,r[2]=u*_+p*x+g*C,r[5]=u*m+p*y+g*w,r[8]=u*f+p*v+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,p=c*r-o*l,g=e*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(sr.makeScale(t,e)),this}rotate(t){return this.premultiply(sr.makeRotation(-t)),this}translate(t,e){return this.premultiply(sr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sr=new Dt;function Rl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ls(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lh(){const s=ls("canvas");return s.style.display="block",s}const co={};function wi(s){s in co||(co[s]=!0,console.warn(s))}function ch(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function hh(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function uh(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ho=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uo=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dh(){const s={enabled:!0,workingColorSpace:Oi,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===te&&(i.r=Sn(i.r),i.g=Sn(i.g),i.b=Sn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===te&&(i.r=Ii(i.r),i.g=Ii(i.g),i.b=Ii(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ln?Zs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Oi]:{primaries:t,whitePoint:n,transfer:Zs,toXYZ:ho,fromXYZ:uo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:t,whitePoint:n,transfer:te,toXYZ:ho,fromXYZ:uo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}}),s}const Zt=dh();function Sn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ii(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let oi;class fh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{oi===void 0&&(oi=ls("canvas")),oi.width=t.width,oi.height=t.height;const n=oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ls("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Sn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Sn(e[n]/255)*255):e[n]=Sn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ph=0;class Pl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=Mn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(rr(i[o].image)):r.push(rr(i[o]))}else r=rr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function rr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mh=0;class we extends Hi{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,n=Fn,i=Fn,r=$e,o=ei,a=rn,l=En,c=we.DEFAULT_ANISOTROPY,h=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=Mn(),this.name="",this.source=new Pl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bn:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case Yr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bn:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case Yr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=vl;we.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,n=0,i=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(p+1)/2,C=(f+1)/2,w=(h+u)/4,T=(d+_)/4,R=(g+m)/4;return y>v&&y>C?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=T/n):v>C?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=R/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=T/r,i=R/r),this.set(n,i,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-_)/x,this.z=(u-h)/x,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Bt(this.x,t.x,e.x),this.y=Bt(this.y,t.y,e.y),this.z=Bt(this.z,t.z,e.z),this.w=Bt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Bt(this.x,t,e),this.y=Bt(this.y,t,e),this.z=Bt(this.z,t,e),this.w=Bt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gh extends Hi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new we(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new Pl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends gh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ll extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _h extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==u||c!==p||h!==g){let m=1-a;const f=l*u+c*p+h*g+d*_,x=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const C=Math.sqrt(y),w=Math.atan2(C,f*x);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const v=a*x;if(l=l*m+u*v,c=c*m+p*v,h=h*m+g*v,d=d*m+_*v,m===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-a*p,t[e+2]=c*g+h*p+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),p=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Bt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Bt(this.x,t.x,e.x),this.y=Bt(this.y,t.y,e.y),this.z=Bt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Bt(this.x,t,e),this.y=Bt(this.y,t,e),this.z=Bt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Bt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ar.copy(this).projectOnVector(t),this.sub(ar)}reflect(t){return this.sub(ar.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Bt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ar=new L,fo=new wn;class si{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qe):Qe.fromBufferAttribute(r,o),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ps.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ps.copy(n.boundingBox)),ps.applyMatrix4(t.matrixWorld),this.union(ps)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qi),ms.subVectors(this.max,qi),li.subVectors(t.a,qi),ci.subVectors(t.b,qi),hi.subVectors(t.c,qi),Tn.subVectors(ci,li),An.subVectors(hi,ci),Hn.subVectors(li,hi);let e=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-Hn.z,Hn.y,Tn.z,0,-Tn.x,An.z,0,-An.x,Hn.z,0,-Hn.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-Hn.y,Hn.x,0];return!or(e,li,ci,hi,ms)||(e=[1,0,0,0,1,0,0,0,1],!or(e,li,ci,hi,ms))?!1:(gs.crossVectors(Tn,An),e=[gs.x,gs.y,gs.z],or(e,li,ci,hi,ms))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const dn=[new L,new L,new L,new L,new L,new L,new L,new L],Qe=new L,ps=new si,li=new L,ci=new L,hi=new L,Tn=new L,An=new L,Hn=new L,qi=new L,ms=new L,gs=new L,Vn=new L;function or(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Vn.fromArray(s,r);const a=i.x*Math.abs(Vn.x)+i.y*Math.abs(Vn.y)+i.z*Math.abs(Vn.z),l=t.dot(Vn),c=e.dot(Vn),h=n.dot(Vn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const vh=new si,Yi=new L,lr=new L;class Vi{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):vh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yi.subVectors(t,this.center);const e=Yi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Yi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yi.copy(t.center).add(lr)),this.expandByPoint(Yi.copy(t.center).sub(lr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new L,cr=new L,_s=new L,Cn=new L,hr=new L,vs=new L,ur=new L;class Il{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fn.copy(this.origin).addScaledVector(this.direction,e),fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){cr.copy(t).add(e).multiplyScalar(.5),_s.copy(e).sub(t).normalize(),Cn.copy(this.origin).sub(cr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(_s),a=Cn.dot(this.direction),l=-Cn.dot(_s),c=Cn.lengthSq(),h=Math.abs(1-o*o);let d,u,p,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(cr).addScaledVector(_s,u),p}intersectSphere(t,e){fn.subVectors(t.center,this.origin);const n=fn.dot(this.direction),i=fn.dot(fn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,fn)!==null}intersectTriangle(t,e,n,i,r){hr.subVectors(e,t),vs.subVectors(n,t),ur.crossVectors(hr,vs);let o=this.direction.dot(ur),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Cn.subVectors(this.origin,t);const l=a*this.direction.dot(vs.crossVectors(Cn,vs));if(l<0)return null;const c=a*this.direction.dot(hr.cross(Cn));if(c<0||l+c>o)return null;const h=-a*Cn.dot(ur);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(t,e,n,i,r,o,a,l,c,h,d,u,p,g,_,m){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,p,g,_,m)}set(t,e,n,i,r,o,a,l,c,h,d,u,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ui.setFromMatrixColumn(t,0).length(),r=1/ui.setFromMatrixColumn(t,1).length(),o=1/ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,p=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,p=l*d,g=c*h,_=c*d;e[0]=u+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,p=l*d,g=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,p=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xh,t,yh)}lookAt(t,e,n){const i=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),Rn.crossVectors(n,ke),Rn.lengthSq()===0&&(Math.abs(n.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),Rn.crossVectors(n,ke)),Rn.normalize(),xs.crossVectors(ke,Rn),i[0]=Rn.x,i[4]=xs.x,i[8]=ke.x,i[1]=Rn.y,i[5]=xs.y,i[9]=ke.y,i[2]=Rn.z,i[6]=xs.z,i[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],x=n[3],y=n[7],v=n[11],C=n[15],w=i[0],T=i[4],R=i[8],b=i[12],M=i[1],P=i[5],N=i[9],B=i[13],G=i[2],X=i[6],H=i[10],$=i[14],V=i[3],st=i[7],ut=i[11],lt=i[15];return r[0]=o*w+a*M+l*G+c*V,r[4]=o*T+a*P+l*X+c*st,r[8]=o*R+a*N+l*H+c*ut,r[12]=o*b+a*B+l*$+c*lt,r[1]=h*w+d*M+u*G+p*V,r[5]=h*T+d*P+u*X+p*st,r[9]=h*R+d*N+u*H+p*ut,r[13]=h*b+d*B+u*$+p*lt,r[2]=g*w+_*M+m*G+f*V,r[6]=g*T+_*P+m*X+f*st,r[10]=g*R+_*N+m*H+f*ut,r[14]=g*b+_*B+m*$+f*lt,r[3]=x*w+y*M+v*G+C*V,r[7]=x*T+y*P+v*X+C*st,r[11]=x*R+y*N+v*H+C*ut,r[15]=x*b+y*B+v*$+C*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*d-i*c*d-r*a*u+n*c*u+i*a*p-n*l*p)+_*(+e*l*p-e*c*u+r*o*u-i*o*p+i*c*h-r*l*h)+m*(+e*c*d-e*a*p-r*o*d+n*o*p+r*a*h-n*c*h)+f*(-i*a*h-e*l*d+e*a*u+i*o*d-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],x=d*m*c-_*u*c+_*l*p-a*m*p-d*l*f+a*u*f,y=g*u*c-h*m*c-g*l*p+o*m*p+h*l*f-o*u*f,v=h*_*c-g*d*c+g*a*p-o*_*p-h*a*f+o*d*f,C=g*d*l-h*_*l-g*a*u+o*_*u+h*a*m-o*d*m,w=e*x+n*y+i*v+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=x*T,t[1]=(_*u*r-d*m*r-_*i*p+n*m*p+d*i*f-n*u*f)*T,t[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*f+n*l*f)*T,t[3]=(d*l*r-a*u*r-d*i*c+n*u*c+a*i*p-n*l*p)*T,t[4]=y*T,t[5]=(h*m*r-g*u*r+g*i*p-e*m*p-h*i*f+e*u*f)*T,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*f-e*l*f)*T,t[7]=(o*u*r-h*l*r+h*i*c-e*u*c-o*i*p+e*l*p)*T,t[8]=v*T,t[9]=(g*d*r-h*_*r-g*n*p+e*_*p+h*n*f-e*d*f)*T,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*f+e*a*f)*T,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*p-e*a*p)*T,t[12]=C*T,t[13]=(h*_*i-g*d*i+g*n*u-e*_*u-h*n*m+e*d*m)*T,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*T,t[15]=(o*d*i-h*a*i+h*n*l-e*d*l-o*n*u+e*a*u)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,p=r*h,g=r*d,_=o*h,m=o*d,f=a*d,x=l*c,y=l*h,v=l*d,C=n.x,w=n.y,T=n.z;return i[0]=(1-(_+f))*C,i[1]=(p+v)*C,i[2]=(g-y)*C,i[3]=0,i[4]=(p-v)*w,i[5]=(1-(u+f))*w,i[6]=(m+x)*w,i[7]=0,i[8]=(g+y)*T,i[9]=(m-x)*T,i[10]=(1-(u+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ui.set(i[0],i[1],i[2]).length();const o=ui.set(i[4],i[5],i[6]).length(),a=ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],tn.copy(this);const c=1/r,h=1/o,d=1/a;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=d,tn.elements[9]*=d,tn.elements[10]*=d,e.setFromRotationMatrix(tn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=vn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let p,g;if(a===vn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===js)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=vn){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(o-r),u=(e+t)*c,p=(n+i)*h;let g,_;if(a===vn)g=(o+r)*d,_=-2*d;else if(a===js)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ui=new L,tn=new Ot,xh=new L(0,0,0),yh=new L(1,1,1),Rn=new L,xs=new L,ke=new L,po=new Ot,mo=new wn;class Ue{constructor(t=0,e=0,n=0,i=Ue.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return po.makeRotationFromQuaternion(t),this.setFromRotationMatrix(po,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mo.setFromEuler(this),this.setFromQuaternion(mo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ue.DEFAULT_ORDER="XYZ";class Dl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Mh=0;const go=new L,di=new wn,pn=new Ot,ys=new L,Zi=new L,Sh=new L,bh=new wn,_o=new L(1,0,0),vo=new L(0,1,0),xo=new L(0,0,1),yo={type:"added"},Eh={type:"removed"},fi={type:"childadded",child:null},dr={type:"childremoved",child:null};class re extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=re.DEFAULT_UP.clone();const t=new L,e=new Ue,n=new wn,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ot},normalMatrix:{value:new Dt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.multiply(di),this}rotateOnWorldAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.premultiply(di),this}rotateX(t){return this.rotateOnAxis(_o,t)}rotateY(t){return this.rotateOnAxis(vo,t)}rotateZ(t){return this.rotateOnAxis(xo,t)}translateOnAxis(t,e){return go.copy(t).applyQuaternion(this.quaternion),this.position.add(go.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_o,t)}translateY(t){return this.translateOnAxis(vo,t)}translateZ(t){return this.translateOnAxis(xo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ys.copy(t):ys.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Zi,ys,this.up):pn.lookAt(ys,Zi,this.up),this.quaternion.setFromRotationMatrix(pn),i&&(pn.extractRotation(i.matrixWorld),di.setFromRotationMatrix(pn),this.quaternion.premultiply(di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yo),fi.child=t,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Eh),dr.child=t,this.dispatchEvent(dr),dr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yo),fi.child=t,this.dispatchEvent(fi),fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,t,Sh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,bh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}re.DEFAULT_UP=new L(0,1,0);re.DEFAULT_MATRIX_AUTO_UPDATE=!0;re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new L,mn=new L,fr=new L,gn=new L,pi=new L,mi=new L,Mo=new L,pr=new L,mr=new L,gr=new L,_r=new ee,vr=new ee,xr=new ee;class Ye{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),en.subVectors(t,e),i.cross(en);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){en.subVectors(i,e),mn.subVectors(n,e),fr.subVectors(t,e);const o=en.dot(en),a=en.dot(mn),l=en.dot(fr),c=mn.dot(mn),h=mn.dot(fr),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gn.x),l.addScaledVector(o,gn.y),l.addScaledVector(a,gn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return _r.setScalar(0),vr.setScalar(0),xr.setScalar(0),_r.fromBufferAttribute(t,e),vr.fromBufferAttribute(t,n),xr.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(_r,r.x),o.addScaledVector(vr,r.y),o.addScaledVector(xr,r.z),o}static isFrontFacing(t,e,n,i){return en.subVectors(n,e),mn.subVectors(t,e),en.cross(mn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),en.cross(mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ye.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ye.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Ye.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ye.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ye.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;pi.subVectors(i,n),mi.subVectors(r,n),pr.subVectors(t,n);const l=pi.dot(pr),c=mi.dot(pr);if(l<=0&&c<=0)return e.copy(n);mr.subVectors(t,i);const h=pi.dot(mr),d=mi.dot(mr);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(pi,o);gr.subVectors(t,r);const p=pi.dot(gr),g=mi.dot(gr);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(mi,a);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Mo.subVectors(r,i),a=(d-h)/(d-h+(p-g)),e.copy(i).addScaledVector(Mo,a);const f=1/(m+_+u);return o=_*f,a=u*f,e.copy(n).addScaledVector(pi,o).addScaledVector(mi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ul={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function yr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Q{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=Oa(t,1),e=Bt(e,0,1),n=Bt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=yr(o,r,t+1/3),this.g=yr(o,r,t),this.b=yr(o,r,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=Me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){const n=Ul[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sn(t.r),this.g=Sn(t.g),this.b=Sn(t.b),this}copyLinearToSRGB(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return Zt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Bt(Ce.r*255,0,255))*65536+Math.round(Bt(Ce.g*255,0,255))*256+Math.round(Bt(Ce.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,i=Ce.g,r=Ce.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Me){Zt.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,i=Ce.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Pn),this.setHSL(Pn.h+t,Pn.s+e,Pn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pn),t.getHSL(Ms);const n=ss(Pn.h,Ms.h,e),i=ss(Pn.s,Ms.s,e),r=ss(Pn.l,Ms.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new Q;Q.NAMES=Ul;let wh=0;class zn extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Mn(),this.name="",this.type="Material",this.blending=Pi,this.side=hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nr,this.blendDst=Br,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Q(0,0,0),this.blendAlpha=0,this.depthFunc=Di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ao,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(n.blending=this.blending),this.side!==hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nr&&(n.blendSrc=this.blendSrc),this.blendDst!==Br&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ao&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class bn extends zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ue,this.combine=Ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new L,Ss=new vt;class Qt{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ya,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ss.fromBufferAttribute(this,e),Ss.applyMatrix3(t),this.setXY(e,Ss.x,Ss.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ya&&(t.usage=this.usage),t}}class Fl extends Qt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Nl extends Qt{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends Qt{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Th=0;const qe=new Ot,Mr=new re,gi=new L,Ge=new si,ji=new si,ye=new L;class pe extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rl(t)?Nl:Fl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return Mr.lookAt(t),Mr.updateMatrix(),this.applyMatrix4(Mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ji.setFromBufferAttribute(a),this.morphTargetsRelative?(ye.addVectors(Ge.min,ji.min),Ge.expandByPoint(ye),ye.addVectors(Ge.max,ji.max),Ge.expandByPoint(ye)):(Ge.expandByPoint(ji.min),Ge.expandByPoint(ji.max))}Ge.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)ye.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ye));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ye.fromBufferAttribute(a,c),l&&(gi.fromBufferAttribute(t,c),ye.add(gi)),i=Math.max(i,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new L,l[R]=new L;const c=new L,h=new L,d=new L,u=new vt,p=new vt,g=new vt,_=new L,m=new L;function f(R,b,M){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,M),u.fromBufferAttribute(r,R),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(c),d.sub(c),p.sub(u),g.sub(u);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[R].add(_),a[b].add(_),a[M].add(_),l[R].add(m),l[b].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let R=0,b=x.length;R<b;++R){const M=x[R],P=M.start,N=M.count;for(let B=P,G=P+N;B<G;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const y=new L,v=new L,C=new L,w=new L;function T(R){C.fromBufferAttribute(i,R),w.copy(C);const b=a[R];y.copy(b),y.sub(C.multiplyScalar(C.dot(b))).normalize(),v.crossVectors(w,b);const P=v.dot(l[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,P)}for(let R=0,b=x.length;R<b;++R){const M=x[R],P=M.start,N=M.count;for(let B=P,G=P+N;B<G;B+=3)T(t.getX(B+0)),T(t.getX(B+1)),T(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Qt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,d=new L;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new Qt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const So=new Ot,Wn=new Il,bs=new Vi,bo=new L,Es=new L,ws=new L,Ts=new L,Sr=new L,As=new L,Eo=new L,Cs=new L;class Et extends re{constructor(t=new pe,e=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){As.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Sr.fromBufferAttribute(d,t),o?As.addScaledVector(Sr,h):As.addScaledVector(Sr.sub(e),h))}e.add(As)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(r),Wn.copy(t.ray).recast(t.near),!(bs.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(bs,bo)===null||Wn.origin.distanceToSquared(bo)>(t.far-t.near)**2))&&(So.copy(r).invert(),Wn.copy(t.ray).applyMatrix4(So),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,C=y;v<C;v+=3){const w=a.getX(v),T=a.getX(v+1),R=a.getX(v+2);i=Rs(this,f,t,n,c,h,d,w,T,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);i=Rs(this,o,t,n,c,h,d,x,y,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,C=y;v<C;v+=3){const w=v,T=v+1,R=v+2;i=Rs(this,f,t,n,c,h,d,w,T,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=m,y=m+1,v=m+2;i=Rs(this,o,t,n,c,h,d,x,y,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Ah(s,t,e,n,i,r,o,a){let l;if(t.side===Se?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===hn,a),l===null)return null;Cs.copy(a),Cs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Cs);return c<e.near||c>e.far?null:{distance:c,point:Cs.clone(),object:s}}function Rs(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Es),s.getVertexPosition(l,ws),s.getVertexPosition(c,Ts);const h=Ah(s,t,e,n,Es,ws,Ts,Eo);if(h){const d=new L;Ye.getBarycoord(Eo,Es,ws,Ts,d),i&&(h.uv=Ye.getInterpolatedAttribute(i,a,l,c,d,new vt)),r&&(h.uv1=Ye.getInterpolatedAttribute(r,a,l,c,d,new vt)),o&&(h.normal=Ye.getInterpolatedAttribute(o,a,l,c,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new L,materialIndex:0};Ye.getNormal(Es,ws,Ts,u.normal),h.face=u,h.barycoord=d}return h}class fe extends pe{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(d,2));function g(_,m,f,x,y,v,C,w,T,R,b){const M=v/T,P=C/R,N=v/2,B=C/2,G=w/2,X=T+1,H=R+1;let $=0,V=0;const st=new L;for(let ut=0;ut<H;ut++){const lt=ut*P-B;for(let Lt=0;Lt<X;Lt++){const qt=Lt*M-N;st[_]=qt*x,st[m]=lt*y,st[f]=G,c.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[f]=w>0?1:-1,h.push(st.x,st.y,st.z),d.push(Lt/T),d.push(1-ut/R),$+=1}}for(let ut=0;ut<R;ut++)for(let lt=0;lt<T;lt++){const Lt=u+lt+X*ut,qt=u+lt+X*(ut+1),q=u+(lt+1)+X*(ut+1),et=u+(lt+1)+X*ut;l.push(Lt,qt,et),l.push(qt,q,et),V+=6}a.addGroup(p,V,b),p+=V,u+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ki(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ie(s){const t={};for(let e=0;e<s.length;e++){const n=ki(s[e]);for(const i in n)t[i]=n[i]}return t}function Ch(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Bl(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Rh={clone:ki,merge:Ie};var Ph=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Re extends zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ph,this.fragmentShader=Lh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ki(t.uniforms),this.uniformsGroups=Ch(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ol extends re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ln=new L,wo=new vt,To=new vt;class Be extends Ol{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zi*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-t/Ln.z)}getViewSize(t,e){return this.getViewBounds(t,wo,To),e.subVectors(To,wo)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(is*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const _i=-90,vi=1;class Ih extends re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Be(_i,vi,t,e);i.layers=this.layers,this.add(i);const r=new Be(_i,vi,t,e);r.layers=this.layers,this.add(r);const o=new Be(_i,vi,t,e);o.layers=this.layers,this.add(o);const a=new Be(_i,vi,t,e);a.layers=this.layers,this.add(a);const l=new Be(_i,vi,t,e);l.layers=this.layers,this.add(l);const c=new Be(_i,vi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===js)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class zl extends we{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ui,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dh extends On{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new zl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new fe(5,5,5),r=new Re({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Se,blending:Nn});r.uniforms.tEquirect.value=e;const o=new Et(i,r),a=e.minFilter;return e.minFilter===ei&&(e.minFilter=$e),new Ih(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class za{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Q(t),this.density=e}clone(){return new za(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ma extends re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ue,this.environmentIntensity=1,this.environmentRotation=new Ue,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Uh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ya,this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Le=new L;class $s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=sn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=sn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=sn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=sn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=sn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Qt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new $s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ka extends zn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Q(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let xi;const $i=new L,yi=new L,Mi=new L,Si=new vt,Ki=new vt,kl=new Ot,Ps=new L,Ji=new L,Ls=new L,Ao=new vt,br=new vt,Co=new vt;class Gl extends re{constructor(t=new ka){if(super(),this.isSprite=!0,this.type="Sprite",xi===void 0){xi=new pe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Uh(e,5);xi.setIndex([0,1,2,0,2,3]),xi.setAttribute("position",new $s(n,3,0,!1)),xi.setAttribute("uv",new $s(n,2,3,!1))}this.geometry=xi,this.material=t,this.center=new vt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yi.setFromMatrixScale(this.matrixWorld),kl.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Mi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yi.multiplyScalar(-Mi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Is(Ps.set(-.5,-.5,0),Mi,o,yi,i,r),Is(Ji.set(.5,-.5,0),Mi,o,yi,i,r),Is(Ls.set(.5,.5,0),Mi,o,yi,i,r),Ao.set(0,0),br.set(1,0),Co.set(1,1);let a=t.ray.intersectTriangle(Ps,Ji,Ls,!1,$i);if(a===null&&(Is(Ji.set(-.5,.5,0),Mi,o,yi,i,r),br.set(0,1),a=t.ray.intersectTriangle(Ps,Ls,Ji,!1,$i),a===null))return;const l=t.ray.origin.distanceTo($i);l<t.near||l>t.far||e.push({distance:l,point:$i.clone(),uv:Ye.getInterpolation($i,Ps,Ji,Ls,Ao,br,Co,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Is(s,t,e,n,i,r){Si.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ki.x=r*Si.x-i*Si.y,Ki.y=i*Si.x+r*Si.y):Ki.copy(Si),s.copy(t),s.x+=Ki.x,s.y+=Ki.y,s.applyMatrix4(kl)}class Fh extends we{constructor(t=null,e=1,n=1,i,r,o,a,l,c=He,h=He,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sa extends Qt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const bi=new Ot,Ro=new Ot,Ds=[],Po=new si,Nh=new Ot,Qi=new Et,ts=new Vi;class nn extends Et{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Sa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Nh)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new si),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),Po.copy(t.boundingBox).applyMatrix4(bi),this.boundingBox.union(Po)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),ts.copy(t.boundingSphere).applyMatrix4(bi),this.boundingSphere.union(ts)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Qi.geometry=this.geometry,Qi.material=this.material,Qi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ts.copy(this.boundingSphere),ts.applyMatrix4(n),t.ray.intersectsSphere(ts)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,bi),Ro.multiplyMatrices(n,bi),Qi.matrixWorld=Ro,Qi.raycast(t,Ds);for(let o=0,a=Ds.length;o<a;o++){const l=Ds[o];l.instanceId=r,l.object=this,e.push(l)}Ds.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Sa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fh(new Float32Array(i*this.count),i,this.count,Da,cn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Er=new L,Bh=new L,Oh=new Dt;class Zn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Er.subVectors(n,e).cross(Bh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Er),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Oh.getNormalMatrix(t),i=this.coplanarPoint(Er).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new Vi,Us=new L;class Ga{constructor(t=new Zn,e=new Zn,n=new Zn,i=new Zn,r=new Zn,o=new Zn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],x=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-r,u-c,m-p,v-f).normalize(),n[1].setComponents(l+r,u+c,m+p,v+f).normalize(),n[2].setComponents(l+o,u+h,m+g,v+x).normalize(),n[3].setComponents(l-o,u-h,m-g,v-x).normalize(),n[4].setComponents(l-a,u-d,m-_,v-y).normalize(),e===vn)n[5].setComponents(l+a,u+d,m+_,v+y).normalize();else if(e===js)n[5].setComponents(a,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(t){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Us.x=i.normal.x>0?t.max.x:t.min.x,Us.y=i.normal.y>0?t.max.y:t.min.y,Us.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Us)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zh extends zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Q(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Lo=new Ot,ba=new Il,Fs=new Vi,Ns=new L;class kh extends re{constructor(t=new pe,e=new zh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(i),Fs.radius+=r,t.ray.intersectsSphere(Fs)===!1)return;Lo.copy(i).invert(),ba.copy(t.ray).applyMatrix4(Lo);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,_=p;g<_;g++){const m=c.getX(g);Ns.fromBufferAttribute(d,m),Io(Ns,m,l,i,t,e,this)}}else{const u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=u,_=p;g<_;g++)Ns.fromBufferAttribute(d,g),Io(Ns,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Io(s,t,e,n,i,r,o){const a=ba.distanceSqToPoint(s);if(a<e){const l=new L;ba.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Ze extends re{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Ti extends we{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Hl extends we{constructor(t,e,n,i,r,o,a,l,c,h=Li){if(h!==Li&&h!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Li&&(n=ii),n===void 0&&h===Bi&&(n=Ni),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:He,this.minFilter=l!==void 0?l:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ha extends pe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new L,h=new vt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const p=n+d/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(a,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ha(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class je extends pe{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],p=[];let g=0;const _=[],m=n/2;let f=0;x(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ue(d,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(p,2));function x(){const v=new L,C=new L;let w=0;const T=(e-t)/n;for(let R=0;R<=r;R++){const b=[],M=R/r,P=M*(e-t)+t;for(let N=0;N<=i;N++){const B=N/i,G=B*l+a,X=Math.sin(G),H=Math.cos(G);C.x=P*X,C.y=-M*n+m,C.z=P*H,d.push(C.x,C.y,C.z),v.set(X,T,H).normalize(),u.push(v.x,v.y,v.z),p.push(B,1-M),b.push(g++)}_.push(b)}for(let R=0;R<i;R++)for(let b=0;b<r;b++){const M=_[b][R],P=_[b+1][R],N=_[b+1][R+1],B=_[b][R+1];(t>0||b!==0)&&(h.push(M,P,B),w+=3),(e>0||b!==r-1)&&(h.push(P,N,B),w+=3)}c.addGroup(f,w,0),f+=w}function y(v){const C=g,w=new vt,T=new L;let R=0;const b=v===!0?t:e,M=v===!0?1:-1;for(let N=1;N<=i;N++)d.push(0,m*M,0),u.push(0,M,0),p.push(.5,.5),g++;const P=g;for(let N=0;N<=i;N++){const G=N/i*l+a,X=Math.cos(G),H=Math.sin(G);T.x=b*H,T.y=m*M,T.z=b*X,d.push(T.x,T.y,T.z),u.push(0,M,0),w.x=X*.5+.5,w.y=H*.5*M+.5,p.push(w.x,w.y),g++}for(let N=0;N<i;N++){const B=C+N,G=P+N;v===!0?h.push(G,G+1,B):h.push(G+1,G,B),R+=3}c.addGroup(f,R,v===!0?1:2),f+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class cs extends je{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new cs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Va extends pe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new ue(r,3)),this.setAttribute("normal",new ue(r.slice(),3)),this.setAttribute("uv",new ue(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new L,v=new L,C=new L;for(let w=0;w<e.length;w+=3)p(e[w+0],y),p(e[w+1],v),p(e[w+2],C),l(y,v,C,x)}function l(x,y,v,C){const w=C+1,T=[];for(let R=0;R<=w;R++){T[R]=[];const b=x.clone().lerp(v,R/w),M=y.clone().lerp(v,R/w),P=w-R;for(let N=0;N<=P;N++)N===0&&R===w?T[R][N]=b:T[R][N]=b.clone().lerp(M,N/P)}for(let R=0;R<w;R++)for(let b=0;b<2*(w-R)-1;b++){const M=Math.floor(b/2);b%2===0?(u(T[R][M+1]),u(T[R+1][M]),u(T[R][M])):(u(T[R][M+1]),u(T[R+1][M+1]),u(T[R+1][M]))}}function c(x){const y=new L;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(x),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){const x=new L;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const v=m(x)/2/Math.PI+.5,C=f(x)/Math.PI+.5;o.push(v,1-C)}g(),d()}function d(){for(let x=0;x<o.length;x+=6){const y=o[x+0],v=o[x+2],C=o[x+4],w=Math.max(y,v,C),T=Math.min(y,v,C);w>.9&&T<.1&&(y<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),C<.2&&(o[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function p(x,y){const v=x*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){const x=new L,y=new L,v=new L,C=new L,w=new vt,T=new vt,R=new vt;for(let b=0,M=0;b<r.length;b+=9,M+=6){x.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),w.set(o[M+0],o[M+1]),T.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),C.copy(x).add(y).add(v).divideScalar(3);const P=m(C);_(w,M+0,x,P),_(T,M+2,y,P),_(R,M+4,v,P)}}function _(x,y,v,C){C<0&&x.x===1&&(o[y]=x.x-1),v.x===0&&v.z===0&&(o[y]=C/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Va(t.vertices,t.indices,t.radius,t.details)}}class Wa extends Va{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Wa(t.radius,t.detail)}}class Oe extends pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const x=f*u-o;for(let y=0;y<c;y++){const v=y*d-r;g.push(v,-x,0),_.push(0,0,1),m.push(y/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<a;x++){const y=x+c*f,v=x+c*(f+1),C=x+1+c*(f+1),w=x+1+c*f;p.push(y,v,w),p.push(v,C,w)}this.setIndex(p),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oe(t.width,t.height,t.widthSegments,t.heightSegments)}}class Xa extends pe{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let d=t;const u=(e-t)/i,p=new L,g=new vt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<i;_++){const m=_*(n+1);for(let f=0;f<n;f++){const x=f+m,y=x,v=x+n+1,C=x+n+2,w=x+1;a.push(y,v,w),a.push(v,C,w)}}this.setIndex(a),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Gi extends pe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new L,u=new L,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const x=[],y=f/n;let v=0;f===0&&o===0?v=.5/e:f===n&&l===Math.PI&&(v=-.5/e);for(let C=0;C<=e;C++){const w=C/e;d.x=-t*Math.cos(i+w*r)*Math.sin(o+y*a),d.y=t*Math.cos(o+y*a),d.z=t*Math.sin(i+w*r)*Math.sin(o+y*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(w+v,1-y),x.push(c++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<e;x++){const y=h[f][x+1],v=h[f][x],C=h[f+1][x],w=h[f+1][x+1];(f!==0||o>0)&&p.push(y,v,w),(f!==n-1||l<Math.PI)&&p.push(v,C,w)}this.setIndex(p),this.setAttribute("position",new ue(g,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class In extends zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Q(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ue,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _e extends zn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ue,this.combine=Ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gh extends zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hh extends zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Do={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Vh{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Wh=new Vh;class qa{constructor(t){this.manager=t!==void 0?t:Wh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}qa.DEFAULT_MATERIAL_NAME="__DEFAULT";class Xh extends qa{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Do.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=ls("img");function l(){h(),Do.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(d){h(),i&&i(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Vl extends qa{constructor(t){super(t)}load(t,e,n,i){const r=new we,o=new Xh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Qs extends re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Q(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class qh extends Qs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Q(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const wr=new Ot,Uo=new L,Fo=new L;class Ya{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ga,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Uo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uo),Fo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fo),e.updateMatrixWorld(),wr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Yh extends Ya{constructor(){super(new Be(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=zi*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Zh extends Qs{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(re.DEFAULT_UP),this.updateMatrix(),this.target=new re,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Yh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const No=new Ot,es=new L,Tr=new L;class jh extends Ya{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),es.setFromMatrixPosition(t.matrixWorld),n.position.copy(es),Tr.copy(n.position),Tr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Tr),n.updateMatrixWorld(),i.makeTranslation(-es.x,-es.y,-es.z),No.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(No)}}class Wl extends Qs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Za extends Ol{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class $h extends Ya{constructor(){super(new Za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bo extends Qs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(re.DEFAULT_UP),this.updateMatrix(),this.target=new re,this.shadow=new $h}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Kh extends pe{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Jh extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}function Oo(s,t,e,n){const i=Qh(n);switch(e){case Sl:return s*t;case El:return s*t;case wl:return s*t*2;case Da:return s*t/i.components*i.byteLength;case Ua:return s*t/i.components*i.byteLength;case Tl:return s*t*2/i.components*i.byteLength;case Fa:return s*t*2/i.components*i.byteLength;case bl:return s*t*3/i.components*i.byteLength;case rn:return s*t*4/i.components*i.byteLength;case Na:return s*t*4/i.components*i.byteLength;case ks:case Gs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Hs:case Vs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case jr:case Kr:return Math.max(s,16)*Math.max(t,8)/4;case Zr:case $r:return Math.max(s,8)*Math.max(t,8)/2;case Jr:case Qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ta:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ea:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case na:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case ia:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case sa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ra:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case aa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case oa:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case la:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ca:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case ha:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ua:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case da:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case fa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case pa:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ws:case ma:case ga:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Al:case _a:return Math.ceil(s/4)*Math.ceil(t/4)*8;case va:case xa:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qh(s){switch(s){case En:case xl:return{byteLength:1,components:1};case os:case yl:case hs:return{byteLength:2,components:1};case La:case Ia:return{byteLength:2,components:4};case ii:case Pa:case cn:return{byteLength:4,components:1};case Ml:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Aa);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xl(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function tu(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var eu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nu=`#ifdef USE_ALPHAHASH
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
#endif`,iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,su=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ru=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,au=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ou=`#ifdef USE_AOMAP
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
#endif`,lu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cu=`#ifdef USE_BATCHING
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
#endif`,hu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,du=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pu=`#ifdef USE_IRIDESCENCE
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
#endif`,mu=`#ifdef USE_BUMPMAP
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
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Eu=`#define PI 3.141592653589793
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
} // validated`,wu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tu=`vec3 transformedNormal = objectNormal;
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
#endif`,Au=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ru=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Du=`#ifdef USE_ENVMAP
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
#endif`,Uu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fu=`#ifdef USE_ENVMAP
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
#endif`,Nu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bu=`#ifdef USE_ENVMAP
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
#endif`,Ou=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ku=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hu=`#ifdef USE_GRADIENTMAP
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
}`,Vu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qu=`uniform bool receiveShadow;
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
#endif`,Yu=`#ifdef USE_ENVMAP
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
#endif`,Zu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ju=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$u=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ku=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ju=`PhysicalMaterial material;
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
#endif`,Qu=`struct PhysicalMaterial {
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
}`,td=`
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
#endif`,ed=`#if defined( RE_IndirectDiffuse )
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
#endif`,nd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,id=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ad=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,od=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ld=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hd=`#if defined( USE_POINTS_UV )
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
#endif`,ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,md=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gd=`#ifdef USE_MORPHTARGETS
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
#endif`,_d=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bd=`#ifdef USE_NORMALMAP
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
#endif`,Ed=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Td=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ad=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ld=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Id=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ud=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Od=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zd=`float getShadowMask() {
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
}`,kd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gd=`#ifdef USE_SKINNING
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
#endif`,Hd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vd=`#ifdef USE_SKINNING
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
#endif`,Wd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zd=`#ifdef USE_TRANSMISSION
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
#endif`,jd=`#ifdef USE_TRANSMISSION
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
#endif`,$d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ef=`uniform sampler2D t2D;
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
}`,nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,af=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,of=`#include <common>
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
}`,lf=`#if DEPTH_PACKING == 3200
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
}`,cf=`#define DISTANCE
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
}`,hf=`#define DISTANCE
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
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,df=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ff=`uniform float scale;
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
}`,pf=`uniform vec3 diffuse;
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
}`,mf=`#include <common>
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
}`,gf=`uniform vec3 diffuse;
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
}`,_f=`#define LAMBERT
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
}`,vf=`#define LAMBERT
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
}`,xf=`#define MATCAP
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
}`,yf=`#define MATCAP
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
}`,Mf=`#define NORMAL
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
}`,Sf=`#define NORMAL
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
}`,bf=`#define PHONG
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
}`,Ef=`#define PHONG
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
}`,wf=`#define STANDARD
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
}`,Tf=`#define STANDARD
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
}`,Af=`#define TOON
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
}`,Cf=`#define TOON
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
}`,Rf=`uniform float size;
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
}`,Pf=`uniform vec3 diffuse;
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
}`,Lf=`#include <common>
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
}`,If=`uniform vec3 color;
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
}`,Df=`uniform float rotation;
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
}`,Uf=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:eu,alphahash_pars_fragment:nu,alphamap_fragment:iu,alphamap_pars_fragment:su,alphatest_fragment:ru,alphatest_pars_fragment:au,aomap_fragment:ou,aomap_pars_fragment:lu,batching_pars_vertex:cu,batching_vertex:hu,begin_vertex:uu,beginnormal_vertex:du,bsdfs:fu,iridescence_fragment:pu,bumpmap_pars_fragment:mu,clipping_planes_fragment:gu,clipping_planes_pars_fragment:_u,clipping_planes_pars_vertex:vu,clipping_planes_vertex:xu,color_fragment:yu,color_pars_fragment:Mu,color_pars_vertex:Su,color_vertex:bu,common:Eu,cube_uv_reflection_fragment:wu,defaultnormal_vertex:Tu,displacementmap_pars_vertex:Au,displacementmap_vertex:Cu,emissivemap_fragment:Ru,emissivemap_pars_fragment:Pu,colorspace_fragment:Lu,colorspace_pars_fragment:Iu,envmap_fragment:Du,envmap_common_pars_fragment:Uu,envmap_pars_fragment:Fu,envmap_pars_vertex:Nu,envmap_physical_pars_fragment:Yu,envmap_vertex:Bu,fog_vertex:Ou,fog_pars_vertex:zu,fog_fragment:ku,fog_pars_fragment:Gu,gradientmap_pars_fragment:Hu,lightmap_pars_fragment:Vu,lights_lambert_fragment:Wu,lights_lambert_pars_fragment:Xu,lights_pars_begin:qu,lights_toon_fragment:Zu,lights_toon_pars_fragment:ju,lights_phong_fragment:$u,lights_phong_pars_fragment:Ku,lights_physical_fragment:Ju,lights_physical_pars_fragment:Qu,lights_fragment_begin:td,lights_fragment_maps:ed,lights_fragment_end:nd,logdepthbuf_fragment:id,logdepthbuf_pars_fragment:sd,logdepthbuf_pars_vertex:rd,logdepthbuf_vertex:ad,map_fragment:od,map_pars_fragment:ld,map_particle_fragment:cd,map_particle_pars_fragment:hd,metalnessmap_fragment:ud,metalnessmap_pars_fragment:dd,morphinstance_vertex:fd,morphcolor_vertex:pd,morphnormal_vertex:md,morphtarget_pars_vertex:gd,morphtarget_vertex:_d,normal_fragment_begin:vd,normal_fragment_maps:xd,normal_pars_fragment:yd,normal_pars_vertex:Md,normal_vertex:Sd,normalmap_pars_fragment:bd,clearcoat_normal_fragment_begin:Ed,clearcoat_normal_fragment_maps:wd,clearcoat_pars_fragment:Td,iridescence_pars_fragment:Ad,opaque_fragment:Cd,packing:Rd,premultiplied_alpha_fragment:Pd,project_vertex:Ld,dithering_fragment:Id,dithering_pars_fragment:Dd,roughnessmap_fragment:Ud,roughnessmap_pars_fragment:Fd,shadowmap_pars_fragment:Nd,shadowmap_pars_vertex:Bd,shadowmap_vertex:Od,shadowmask_pars_fragment:zd,skinbase_vertex:kd,skinning_pars_vertex:Gd,skinning_vertex:Hd,skinnormal_vertex:Vd,specularmap_fragment:Wd,specularmap_pars_fragment:Xd,tonemapping_fragment:qd,tonemapping_pars_fragment:Yd,transmission_fragment:Zd,transmission_pars_fragment:jd,uv_pars_fragment:$d,uv_pars_vertex:Kd,uv_vertex:Jd,worldpos_vertex:Qd,background_vert:tf,background_frag:ef,backgroundCube_vert:nf,backgroundCube_frag:sf,cube_vert:rf,cube_frag:af,depth_vert:of,depth_frag:lf,distanceRGBA_vert:cf,distanceRGBA_frag:hf,equirect_vert:uf,equirect_frag:df,linedashed_vert:ff,linedashed_frag:pf,meshbasic_vert:mf,meshbasic_frag:gf,meshlambert_vert:_f,meshlambert_frag:vf,meshmatcap_vert:xf,meshmatcap_frag:yf,meshnormal_vert:Mf,meshnormal_frag:Sf,meshphong_vert:bf,meshphong_frag:Ef,meshphysical_vert:wf,meshphysical_frag:Tf,meshtoon_vert:Af,meshtoon_frag:Cf,points_vert:Rf,points_frag:Pf,shadow_vert:Lf,shadow_frag:If,sprite_vert:Df,sprite_frag:Uf},it={common:{diffuse:{value:new Q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Q(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},on={basic:{uniforms:Ie([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ie([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Q(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ie([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Q(0)},specular:{value:new Q(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ie([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ie([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Q(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ie([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ie([it.points,it.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ie([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ie([it.common,it.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ie([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ie([it.sprite,it.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Ie([it.common,it.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Ie([it.lights,it.fog,{color:{value:new Q(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};on.physical={uniforms:Ie([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Q(0)},specularColor:{value:new Q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Bs={r:0,b:0,g:0},qn=new Ue,Ff=new Ot;function Nf(s,t,e,n,i,r,o){const a=new Q(0);let l=r===!0?0:1,c,h,d=null,u=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1;const C=g(y);C===null?f(a,l):C&&C.isColor&&(f(C,1),v=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,v){const C=g(v);C&&(C.isCubeTexture||C.mapping===Js)?(h===void 0&&(h=new Et(new fe(1,1,1),new Re({name:"BackgroundCubeMaterial",uniforms:ki(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Se,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),qn.copy(v.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ff.makeRotationFromEuler(qn)),h.material.toneMapped=Zt.getTransfer(C.colorSpace)!==te,(d!==C||u!==C.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=C,u=C.version,p=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Et(new Oe(2,2),new Re({name:"BackgroundMaterial",uniforms:ki(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(C.colorSpace)!==te,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||u!==C.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=C,u=C.version,p=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,v){y.getRGB(Bs,Bl(s)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,v,o)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(a,l)},render:_,addToRenderList:m,dispose:x}}function Bf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(M,P,N,B,G){let X=!1;const H=d(B,N,P);r!==H&&(r=H,c(r.object)),X=p(M,B,N,G),X&&g(M,B,N,G),G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(M,P,N,B),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function d(M,P,N){const B=N.wireframe===!0;let G=n[M.id];G===void 0&&(G={},n[M.id]=G);let X=G[P.id];X===void 0&&(X={},G[P.id]=X);let H=X[B];return H===void 0&&(H=u(l()),X[B]=H),H}function u(M){const P=[],N=[],B=[];for(let G=0;G<e;G++)P[G]=0,N[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,P,N,B){const G=r.attributes,X=P.attributes;let H=0;const $=N.getAttributes();for(const V in $)if($[V].location>=0){const ut=G[V];let lt=X[V];if(lt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor)),ut===void 0||ut.attribute!==lt||lt&&ut.data!==lt.data)return!0;H++}return r.attributesNum!==H||r.index!==B}function g(M,P,N,B){const G={},X=P.attributes;let H=0;const $=N.getAttributes();for(const V in $)if($[V].location>=0){let ut=X[V];ut===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ut=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ut=M.instanceColor));const lt={};lt.attribute=ut,ut&&ut.data&&(lt.data=ut.data),G[V]=lt,H++}r.attributes=G,r.attributesNum=H,r.index=B}function _(){const M=r.newAttributes;for(let P=0,N=M.length;P<N;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){const N=r.newAttributes,B=r.enabledAttributes,G=r.attributeDivisors;N[M]=1,B[M]===0&&(s.enableVertexAttribArray(M),B[M]=1),G[M]!==P&&(s.vertexAttribDivisor(M,P),G[M]=P)}function x(){const M=r.newAttributes,P=r.enabledAttributes;for(let N=0,B=P.length;N<B;N++)P[N]!==M[N]&&(s.disableVertexAttribArray(N),P[N]=0)}function y(M,P,N,B,G,X,H){H===!0?s.vertexAttribIPointer(M,P,N,G,X):s.vertexAttribPointer(M,P,N,B,G,X)}function v(M,P,N,B){_();const G=B.attributes,X=N.getAttributes(),H=P.defaultAttributeValues;for(const $ in X){const V=X[$];if(V.location>=0){let st=G[$];if(st===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){const ut=st.normalized,lt=st.itemSize,Lt=t.get(st);if(Lt===void 0)continue;const qt=Lt.buffer,q=Lt.type,et=Lt.bytesPerElement,dt=q===s.INT||q===s.UNSIGNED_INT||st.gpuType===Pa;if(st.isInterleavedBufferAttribute){const nt=st.data,wt=nt.stride,At=st.offset;if(nt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<V.locationSize;Nt++)f(V.location+Nt,nt.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Nt=0;Nt<V.locationSize;Nt++)m(V.location+Nt);s.bindBuffer(s.ARRAY_BUFFER,qt);for(let Nt=0;Nt<V.locationSize;Nt++)y(V.location+Nt,lt/V.locationSize,q,ut,wt*et,(At+lt/V.locationSize*Nt)*et,dt)}else{if(st.isInstancedBufferAttribute){for(let nt=0;nt<V.locationSize;nt++)f(V.location+nt,st.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let nt=0;nt<V.locationSize;nt++)m(V.location+nt);s.bindBuffer(s.ARRAY_BUFFER,qt);for(let nt=0;nt<V.locationSize;nt++)y(V.location+nt,lt/V.locationSize,q,ut,lt*et,lt/V.locationSize*nt*et,dt)}}else if(H!==void 0){const ut=H[$];if(ut!==void 0)switch(ut.length){case 2:s.vertexAttrib2fv(V.location,ut);break;case 3:s.vertexAttrib3fv(V.location,ut);break;case 4:s.vertexAttrib4fv(V.location,ut);break;default:s.vertexAttrib1fv(V.location,ut)}}}}x()}function C(){R();for(const M in n){const P=n[M];for(const N in P){const B=P[N];for(const G in B)h(B[G].object),delete B[G];delete P[N]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const N in P){const B=P[N];for(const G in B)h(B[G].object),delete B[G];delete P[N]}delete n[M.id]}function T(M){for(const P in n){const N=n[P];if(N[M.id]===void 0)continue;const B=N[M.id];for(const G in B)h(B[G].object),delete B[G];delete N[M.id]}}function R(){b(),o=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function Of(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function l(c,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zf(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==rn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===hs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==En&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==cn&&!R)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:C,maxSamples:w}}function kf(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Zn,a=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,y=x*4;let v=f.clippingState||null;l.value=v,v=h(g,u,y,p);for(let C=0;C!==y;++C)v[C]=e[C];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,v=p;y!==_;++y,v+=4)o.copy(d[y]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Gf(s){let t=new WeakMap;function e(o,a){return a===Xr?o.mapping=Ui:a===qr&&(o.mapping=Fi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xr||a===qr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Dh(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ai=4,zo=[.125,.215,.35,.446,.526,.582],Kn=20,Ar=new Za,ko=new Q;let Cr=null,Rr=0,Pr=0,Lr=!1;const jn=(1+Math.sqrt(5))/2,Ei=1/jn,Go=[new L(-jn,Ei,0),new L(jn,Ei,0),new L(-Ei,0,jn),new L(Ei,0,jn),new L(0,jn,-Ei),new L(0,jn,Ei),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Ea{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Cr=this._renderer.getRenderTarget(),Rr=this._renderer.getActiveCubeFace(),Pr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Cr,Rr,Pr),this._renderer.xr.enabled=Lr,t.scissorTest=!1,Os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ui||t.mapping===Fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cr=this._renderer.getRenderTarget(),Rr=this._renderer.getActiveCubeFace(),Pr=this._renderer.getActiveMipmapLevel(),Lr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:hs,format:rn,colorSpace:Oi,depthBuffer:!1},i=Ho(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ho(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hf(r)),this._blurMaterial=Vf(r,t,e)}return i}_compileMaterial(t){const e=new Et(this._lodPlanes[0],t);this._renderer.compile(e,Ar)}_sceneToCubeUV(t,e,n,i){const a=new Be(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(ko),h.toneMapping=yn,h.autoClear=!1;const p=new bn({name:"PMREM.Background",side:Se,depthWrite:!1,depthTest:!1}),g=new Et(new fe,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(ko),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):x===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const y=this._cubeSize;Os(i,x*y,f>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ui||t.mapping===Fi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vo());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Et(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Os(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ar)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Go[(i-r-1)%Go.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Et(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Kn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Kn;m>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kn}`);const f=[];let x=0;for(let T=0;T<Kn;++T){const R=T/_,b=Math.exp(-R*R/2);f.push(b),T===0?x+=b:T<m&&(x+=2*b)}for(let T=0;T<f.length;T++)f[T]=f[T]/x;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const v=this._sizeLods[i],C=3*v*(i>y-Ai?i-y+Ai:0),w=4*(this._cubeSize-v);Os(e,C,w,3*v,2*v),l.setRenderTarget(e),l.render(d,Ar)}}function Hf(s){const t=[],e=[],n=[];let i=s;const r=s-Ai+1+zo.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Ai?l=zo[o-s+Ai-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,x=new Float32Array(_*g*p),y=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let w=0;w<p;w++){const T=w%3*2/3-1,R=w>2?0:-1,b=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];x.set(b,_*g*w),y.set(u,m*g*w);const M=[w,w,w,w,w,w];v.set(M,f*g*w)}const C=new pe;C.setAttribute("position",new Qt(x,_)),C.setAttribute("uv",new Qt(y,m)),C.setAttribute("faceIndex",new Qt(v,f)),t.push(C),i>Ai&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ho(s,t,e){const n=new On(s,t,e);return n.texture.mapping=Js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Os(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Vf(s,t,e){const n=new Float32Array(Kn),i=new L(0,1,0);return new Re({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ja(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Vo(){return new Re({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ja(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Wo(){return new Re({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function ja(){return`

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
	`}function Wf(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Xr||l===qr,h=l===Ui||l===Fi;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Ea(s)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Ea(s)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Xf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&wi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qf(s,t,e,n){const i={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)t.update(u[p],s.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let y=0,v=x.length;y<v;y+=3){const C=x[y+0],w=x[y+1],T=x[y+2];u.push(C,w,w,T,T,C)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const C=y+0,w=y+1,T=y+2;u.push(C,w,w,T,T,C)}}else return;const m=new(Rl(u)?Nl:Fl)(u,1);m.version=_;const f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Yf(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){s.drawElements(n,p,r,u*o),e.update(p,n,1)}function c(u,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,u*o,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function d(u,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,_,0,g);let f=0;for(let x=0;x<g;x++)f+=p[x]*_[x];e.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Zf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function jf(s,t,e){const n=new WeakMap,i=new ee;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let M=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let C=a.attributes.position.count*v,w=1;C>t.maxTextureSize&&(w=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const T=new Float32Array(C*w*4*d),R=new Ll(T,C,w,d);R.type=cn,R.needsUpdate=!0;const b=v*4;for(let P=0;P<d;P++){const N=f[P],B=x[P],G=y[P],X=C*w*4*P;for(let H=0;H<N.count;H++){const $=H*b;g===!0&&(i.fromBufferAttribute(N,H),T[X+$+0]=i.x,T[X+$+1]=i.y,T[X+$+2]=i.z,T[X+$+3]=0),_===!0&&(i.fromBufferAttribute(B,H),T[X+$+4]=i.x,T[X+$+5]=i.y,T[X+$+6]=i.z,T[X+$+7]=0),m===!0&&(i.fromBufferAttribute(G,H),T[X+$+8]=i.x,T[X+$+9]=i.y,T[X+$+10]=i.z,T[X+$+11]=G.itemSize===4?i.w:1)}}u={count:d,texture:R,size:new vt(C,w)},n.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function $f(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const ql=new we,Xo=new Hl(1,1),Yl=new Ll,Zl=new _h,jl=new zl,qo=[],Yo=[],Zo=new Float32Array(16),jo=new Float32Array(9),$o=new Float32Array(4);function Wi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=qo[i];if(r===void 0&&(r=new Float32Array(i),qo[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ve(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function xe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function tr(s,t){let e=Yo[t];e===void 0&&(e=new Int32Array(t),Yo[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Kf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Jf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2fv(this.addr,t),xe(e,t)}}function Qf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;s.uniform3fv(this.addr,t),xe(e,t)}}function tp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4fv(this.addr,t),xe(e,t)}}function ep(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;$o.set(n),s.uniformMatrix2fv(this.addr,!1,$o),xe(e,n)}}function np(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;jo.set(n),s.uniformMatrix3fv(this.addr,!1,jo),xe(e,n)}}function ip(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,n))return;Zo.set(n),s.uniformMatrix4fv(this.addr,!1,Zo),xe(e,n)}}function sp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function rp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2iv(this.addr,t),xe(e,t)}}function ap(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3iv(this.addr,t),xe(e,t)}}function op(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4iv(this.addr,t),xe(e,t)}}function lp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function cp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2uiv(this.addr,t),xe(e,t)}}function hp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3uiv(this.addr,t),xe(e,t)}}function up(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4uiv(this.addr,t),xe(e,t)}}function dp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Xo.compareFunction=Cl,r=Xo):r=ql,e.setTexture2D(t||r,i)}function fp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Zl,i)}function pp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||jl,i)}function mp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Yl,i)}function gp(s){switch(s){case 5126:return Kf;case 35664:return Jf;case 35665:return Qf;case 35666:return tp;case 35674:return ep;case 35675:return np;case 35676:return ip;case 5124:case 35670:return sp;case 35667:case 35671:return rp;case 35668:case 35672:return ap;case 35669:case 35673:return op;case 5125:return lp;case 36294:return cp;case 36295:return hp;case 36296:return up;case 35678:case 36198:case 36298:case 36306:case 35682:return dp;case 35679:case 36299:case 36307:return fp;case 35680:case 36300:case 36308:case 36293:return pp;case 36289:case 36303:case 36311:case 36292:return mp}}function _p(s,t){s.uniform1fv(this.addr,t)}function vp(s,t){const e=Wi(t,this.size,2);s.uniform2fv(this.addr,e)}function xp(s,t){const e=Wi(t,this.size,3);s.uniform3fv(this.addr,e)}function yp(s,t){const e=Wi(t,this.size,4);s.uniform4fv(this.addr,e)}function Mp(s,t){const e=Wi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Sp(s,t){const e=Wi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function bp(s,t){const e=Wi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ep(s,t){s.uniform1iv(this.addr,t)}function wp(s,t){s.uniform2iv(this.addr,t)}function Tp(s,t){s.uniform3iv(this.addr,t)}function Ap(s,t){s.uniform4iv(this.addr,t)}function Cp(s,t){s.uniform1uiv(this.addr,t)}function Rp(s,t){s.uniform2uiv(this.addr,t)}function Pp(s,t){s.uniform3uiv(this.addr,t)}function Lp(s,t){s.uniform4uiv(this.addr,t)}function Ip(s,t,e){const n=this.cache,i=t.length,r=tr(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||ql,r[o])}function Dp(s,t,e){const n=this.cache,i=t.length,r=tr(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Zl,r[o])}function Up(s,t,e){const n=this.cache,i=t.length,r=tr(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||jl,r[o])}function Fp(s,t,e){const n=this.cache,i=t.length,r=tr(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Yl,r[o])}function Np(s){switch(s){case 5126:return _p;case 35664:return vp;case 35665:return xp;case 35666:return yp;case 35674:return Mp;case 35675:return Sp;case 35676:return bp;case 5124:case 35670:return Ep;case 35667:case 35671:return wp;case 35668:case 35672:return Tp;case 35669:case 35673:return Ap;case 5125:return Cp;case 36294:return Rp;case 36295:return Pp;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ip;case 35679:case 36299:case 36307:return Dp;case 35680:case 36300:case 36308:case 36293:return Up;case 36289:case 36303:case 36311:case 36292:return Fp}}class Bp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gp(e.type)}}class Op{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Np(e.type)}}class zp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Ir=/(\w+)(\])?(\[|\.)?/g;function Ko(s,t){s.seq.push(t),s.map[t.id]=t}function kp(s,t,e){const n=s.name,i=n.length;for(Ir.lastIndex=0;;){const r=Ir.exec(n),o=Ir.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ko(e,c===void 0?new Bp(a,s,t):new Op(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new zp(a),Ko(e,d)),e=d}}}class Xs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);kp(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Jo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Gp=37297;let Hp=0;function Vp(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Qo=new Dt;function Wp(s){Zt._getMatrix(Qo,Zt.workingColorSpace,s);const t=`mat3( ${Qo.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(s)){case Zs:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function tl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Vp(s.getShaderSource(t),o)}else return i}function Xp(s,t){const e=Wp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function qp(s,t){let e;switch(t){case Rc:e="Linear";break;case Pc:e="Reinhard";break;case Lc:e="Cineon";break;case _l:e="ACESFilmic";break;case Dc:e="AgX";break;case Uc:e="Neutral";break;case Ic:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zs=new L;function Yp(){Zt.getLuminanceCoefficients(zs);const s=zs.x.toFixed(4),t=zs.y.toFixed(4),e=zs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function jp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $p(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ns(s){return s!==""}function el(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Kp=/^[ \t]*#include +<([\w\d./]+)>/gm;function wa(s){return s.replace(Kp,Qp)}const Jp=new Map;function Qp(s,t){let e=Ft[t];if(e===void 0){const n=Jp.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wa(e)}const tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function il(s){return s.replace(tm,em)}function em(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function sl(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function nm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ca?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===gl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===_n&&(t="SHADOWMAP_TYPE_VSM"),t}function im(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ui:case Fi:t="ENVMAP_TYPE_CUBE";break;case Js:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Fi:t="ENVMAP_MODE_REFRACTION";break}return t}function rm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ra:t="ENVMAP_BLENDING_MULTIPLY";break;case Ac:t="ENVMAP_BLENDING_MIX";break;case Cc:t="ENVMAP_BLENDING_ADD";break}return t}function am(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function om(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=nm(e),c=im(e),h=sm(e),d=rm(e),u=am(e),p=Zp(e),g=jp(r),_=i.createProgram();let m,f,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ns).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ns).join(`
`),f.length>0&&(f+=`
`)):(m=[sl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),f=[sl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==yn?qp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,Xp("linearToOutputTexel",e.outputColorSpace),Yp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ns).join(`
`)),o=wa(o),o=el(o,e),o=nl(o,e),a=wa(a),a=el(a,e),a=nl(a,e),o=il(o),a=il(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===oo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===oo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=x+m+o,v=x+f+a,C=Jo(i,i.VERTEX_SHADER,y),w=Jo(i,i.FRAGMENT_SHADER,v);i.attachShader(_,C),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(P){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(C).trim(),G=i.getShaderInfoLog(w).trim();let X=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,C,w);else{const $=tl(i,C,"vertex"),V=tl(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+$+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||G==="")&&(H=!1);H&&(P.diagnostics={runnable:X,programLog:N,vertexShader:{log:B,prefix:m},fragmentShader:{log:G,prefix:f}})}i.deleteShader(C),i.deleteShader(w),R=new Xs(i,_),b=$p(i,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Gp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}let lm=0;class cm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new hm(t),e.set(t,n)),n}}class hm{constructor(t){this.id=lm++,this.code=t,this.usedTimes=0}}function um(s,t,e,n,i,r,o){const a=new Dl,l=new cm,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,P,N,B){const G=N.fog,X=B.geometry,H=b.isMeshStandardMaterial?N.environment:null,$=(b.isMeshStandardMaterial?e:t).get(b.envMap||H),V=$&&$.mapping===Js?$.image.height:null,st=g[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const ut=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,lt=ut!==void 0?ut.length:0;let Lt=0;X.morphAttributes.position!==void 0&&(Lt=1),X.morphAttributes.normal!==void 0&&(Lt=2),X.morphAttributes.color!==void 0&&(Lt=3);let qt,q,et,dt;if(st){const Kt=on[st];qt=Kt.vertexShader,q=Kt.fragmentShader}else qt=b.vertexShader,q=b.fragmentShader,l.update(b),et=l.getVertexShaderID(b),dt=l.getFragmentShaderID(b);const nt=s.getRenderTarget(),wt=s.state.buffers.depth.getReversed(),At=B.isInstancedMesh===!0,Nt=B.isBatchedMesh===!0,le=!!b.map,Vt=!!b.matcap,de=!!$,I=!!b.aoMap,Ve=!!b.lightMap,zt=!!b.bumpMap,kt=!!b.normalMap,Mt=!!b.displacementMap,se=!!b.emissiveMap,yt=!!b.metalnessMap,A=!!b.roughnessMap,S=b.anisotropy>0,O=b.clearcoat>0,Z=b.dispersion>0,K=b.iridescence>0,Y=b.sheen>0,xt=b.transmission>0,ot=S&&!!b.anisotropyMap,pt=O&&!!b.clearcoatMap,Wt=O&&!!b.clearcoatNormalMap,tt=O&&!!b.clearcoatRoughnessMap,mt=K&&!!b.iridescenceMap,Tt=K&&!!b.iridescenceThicknessMap,Ct=Y&&!!b.sheenColorMap,gt=Y&&!!b.sheenRoughnessMap,Gt=!!b.specularMap,Ut=!!b.specularColorMap,ie=!!b.specularIntensityMap,D=xt&&!!b.transmissionMap,rt=xt&&!!b.thicknessMap,W=!!b.gradientMap,j=!!b.alphaMap,ht=b.alphaTest>0,ct=!!b.alphaHash,It=!!b.extensions;let ce=yn;b.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ce=s.toneMapping);const Te={shaderID:st,shaderType:b.type,shaderName:b.name,vertexShader:qt,fragmentShader:q,defines:b.defines,customVertexShaderID:et,customFragmentShaderID:dt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Nt,batchingColor:Nt&&B._colorsTexture!==null,instancing:At,instancingColor:At&&B.instanceColor!==null,instancingMorph:At&&B.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:nt===null?s.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Oi,alphaToCoverage:!!b.alphaToCoverage,map:le,matcap:Vt,envMap:de,envMapMode:de&&$.mapping,envMapCubeUVHeight:V,aoMap:I,lightMap:Ve,bumpMap:zt,normalMap:kt,displacementMap:u&&Mt,emissiveMap:se,normalMapObjectSpace:kt&&b.normalMapType===Oc,normalMapTangentSpace:kt&&b.normalMapType===Ba,metalnessMap:yt,roughnessMap:A,anisotropy:S,anisotropyMap:ot,clearcoat:O,clearcoatMap:pt,clearcoatNormalMap:Wt,clearcoatRoughnessMap:tt,dispersion:Z,iridescence:K,iridescenceMap:mt,iridescenceThicknessMap:Tt,sheen:Y,sheenColorMap:Ct,sheenRoughnessMap:gt,specularMap:Gt,specularColorMap:Ut,specularIntensityMap:ie,transmission:xt,transmissionMap:D,thicknessMap:rt,gradientMap:W,opaque:b.transparent===!1&&b.blending===Pi&&b.alphaToCoverage===!1,alphaMap:j,alphaTest:ht,alphaHash:ct,combine:b.combine,mapUv:le&&_(b.map.channel),aoMapUv:I&&_(b.aoMap.channel),lightMapUv:Ve&&_(b.lightMap.channel),bumpMapUv:zt&&_(b.bumpMap.channel),normalMapUv:kt&&_(b.normalMap.channel),displacementMapUv:Mt&&_(b.displacementMap.channel),emissiveMapUv:se&&_(b.emissiveMap.channel),metalnessMapUv:yt&&_(b.metalnessMap.channel),roughnessMapUv:A&&_(b.roughnessMap.channel),anisotropyMapUv:ot&&_(b.anisotropyMap.channel),clearcoatMapUv:pt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:gt&&_(b.sheenRoughnessMap.channel),specularMapUv:Gt&&_(b.specularMap.channel),specularColorMapUv:Ut&&_(b.specularColorMap.channel),specularIntensityMapUv:ie&&_(b.specularIntensityMap.channel),transmissionMapUv:D&&_(b.transmissionMap.channel),thicknessMapUv:rt&&_(b.thicknessMap.channel),alphaMapUv:j&&_(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(kt||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(le||j),fog:!!G,useFog:b.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:wt,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:Lt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:ce,decodeVideoTexture:le&&b.map.isVideoTexture===!0&&Zt.getTransfer(b.map.colorSpace)===te,decodeVideoTextureEmissive:se&&b.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(b.emissiveMap.colorSpace)===te,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ee,flipSided:b.side===Se,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:It&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&b.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Te.vertexUv1s=c.has(1),Te.vertexUv2s=c.has(2),Te.vertexUv3s=c.has(3),c.clear(),Te}function f(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)M.push(P),M.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(x(M,b),y(M,b),M.push(s.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function x(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const M=g[b.type];let P;if(M){const N=on[M];P=Rh.clone(N.uniforms)}else P=b.uniforms;return P}function C(b,M){let P;for(let N=0,B=h.length;N<B;N++){const G=h[N];if(G.cacheKey===M){P=G,++P.usedTimes;break}}return P===void 0&&(P=new om(s,M,b,r),h.push(P)),P}function w(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function T(b){l.remove(b)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:C,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:R}}function dm(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function fm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function rl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function al(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,p,g,_,m){let f=s[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),t++,f}function a(d,u,p,g,_,m){const f=o(d,u,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(d,u,p,g,_,m){const f=o(d,u,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||fm),n.length>1&&n.sort(u||rl),i.length>1&&i.sort(u||rl)}function h(){for(let d=t,u=s.length;d<u;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function pm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new al,s.set(n,[o])):i>=r.length?(o=new al,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function mm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Q};break;case"SpotLight":e={position:new L,direction:new L,color:new Q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Q,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Q,groundColor:new Q};break;case"RectAreaLight":e={color:new Q,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function gm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let _m=0;function vm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function xm(s){const t=new mm,e=gm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new Ot,o=new Ot;function a(c){let h=0,d=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,x=0,y=0,v=0,C=0,w=0,T=0;c.sort(vm);for(let b=0,M=c.length;b<M;b++){const P=c[b],N=P.color,B=P.intensity,G=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*B,d+=N.g*B,u+=N.b*B;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],B);T++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,V=e.get(P);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=P.shadow.matrix,x++}n.directional[p]=H,p++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(N).multiplyScalar(B),H.distance=G,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[_]=H;const $=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,$.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=$.matrix,P.castShadow){const V=e.get(P);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=X,v++}_++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(N).multiplyScalar(B),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=H,m++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const $=P.shadow,V=e.get(P);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=H,g++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(B),H.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[f]=H,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==x||R.numPointShadows!==y||R.numSpotShadows!==v||R.numSpotMaps!==C||R.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=x,R.numPointShadows=y,R.numSpotShadows=v,R.numSpotMaps=C,R.numLightProbes=T,n.version=_m++)}function l(c,h){let d=0,u=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const y=c[f];if(y.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(y.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function ol(s){const t=new xm(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ym(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new ol(s),t.set(i,[a])):r>=o.length?(a=new ol(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Mm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sm=`uniform sampler2D shadow_pass;
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
}`;function bm(s,t,e){let n=new Ga;const i=new vt,r=new vt,o=new ee,a=new Gh({depthPacking:Bc}),l=new Hh,c={},h=e.maxTextureSize,d={[hn]:Se,[Se]:hn,[Ee]:Ee},u=new Re({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:Mm,fragmentShader:Sm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new pe;g.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Et(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ca;let f=this.type;this.render=function(w,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const b=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Nn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const B=f!==_n&&this.type===_n,G=f===_n&&this.type!==_n;for(let X=0,H=w.length;X<H;X++){const $=w[X],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const st=V.getFrameExtents();if(i.multiply(st),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,V.mapSize.y=r.y)),V.map===null||B===!0||G===!0){const lt=this.type!==_n?{minFilter:He,magFilter:He}:{};V.map!==null&&V.map.dispose(),V.map=new On(i.x,i.y,lt),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const ut=V.getViewportCount();for(let lt=0;lt<ut;lt++){const Lt=V.getViewport(lt);o.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),N.viewport(o),V.updateMatrices($,lt),n=V.getFrustum(),v(T,R,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===_n&&x(V,R),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(b,M,P)};function x(w,T){const R=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new On(i.x,i.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(T,null,R,u,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(T,null,R,p,_,null)}function y(w,T,R,b){let M=null;const P=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const N=M.uuid,B=T.uuid;let G=c[N];G===void 0&&(G={},c[N]=G);let X=G[B];X===void 0&&(X=M.clone(),G[B]=X,T.addEventListener("dispose",C)),M=X}if(M.visible=T.visible,M.wireframe=T.wireframe,b===_n?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:d[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const N=s.properties.get(M);N.light=R}return M}function v(w,T,R,b,M){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===_n)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const B=t.update(w),G=w.material;if(Array.isArray(G)){const X=B.groups;for(let H=0,$=X.length;H<$;H++){const V=X[H],st=G[V.materialIndex];if(st&&st.visible){const ut=y(w,st,b,M);w.onBeforeShadow(s,w,T,R,B,ut,V),s.renderBufferDirect(R,null,B,ut,w,V),w.onAfterShadow(s,w,T,R,B,ut,V)}}}else if(G.visible){const X=y(w,G,b,M);w.onBeforeShadow(s,w,T,R,B,X,null),s.renderBufferDirect(R,null,B,X,w,null),w.onAfterShadow(s,w,T,R,B,X,null)}}const N=w.children;for(let B=0,G=N.length;B<G;B++)v(N[B],T,R,b,M)}function C(w){w.target.removeEventListener("dispose",C);for(const R in c){const b=c[R],M=w.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const Em={[Or]:zr,[kr]:Vr,[Gr]:Wr,[Di]:Hr,[zr]:Or,[Vr]:kr,[Wr]:Gr,[Hr]:Di};function wm(s,t){function e(){let D=!1;const rt=new ee;let W=null;const j=new ee(0,0,0,0);return{setMask:function(ht){W!==ht&&!D&&(s.colorMask(ht,ht,ht,ht),W=ht)},setLocked:function(ht){D=ht},setClear:function(ht,ct,It,ce,Te){Te===!0&&(ht*=ce,ct*=ce,It*=ce),rt.set(ht,ct,It,ce),j.equals(rt)===!1&&(s.clearColor(ht,ct,It,ce),j.copy(rt))},reset:function(){D=!1,W=null,j.set(-1,0,0,0)}}}function n(){let D=!1,rt=!1,W=null,j=null,ht=null;return{setReversed:function(ct){if(rt!==ct){const It=t.get("EXT_clip_control");rt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const ce=ht;ht=null,this.setClear(ce)}rt=ct},getReversed:function(){return rt},setTest:function(ct){ct?nt(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(ct){W!==ct&&!D&&(s.depthMask(ct),W=ct)},setFunc:function(ct){if(rt&&(ct=Em[ct]),j!==ct){switch(ct){case Or:s.depthFunc(s.NEVER);break;case zr:s.depthFunc(s.ALWAYS);break;case kr:s.depthFunc(s.LESS);break;case Di:s.depthFunc(s.LEQUAL);break;case Gr:s.depthFunc(s.EQUAL);break;case Hr:s.depthFunc(s.GEQUAL);break;case Vr:s.depthFunc(s.GREATER);break;case Wr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=ct}},setLocked:function(ct){D=ct},setClear:function(ct){ht!==ct&&(rt&&(ct=1-ct),s.clearDepth(ct),ht=ct)},reset:function(){D=!1,W=null,j=null,ht=null,rt=!1}}}function i(){let D=!1,rt=null,W=null,j=null,ht=null,ct=null,It=null,ce=null,Te=null;return{setTest:function(Kt){D||(Kt?nt(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(Kt){rt!==Kt&&!D&&(s.stencilMask(Kt),rt=Kt)},setFunc:function(Kt,Ke,un){(W!==Kt||j!==Ke||ht!==un)&&(s.stencilFunc(Kt,Ke,un),W=Kt,j=Ke,ht=un)},setOp:function(Kt,Ke,un){(ct!==Kt||It!==Ke||ce!==un)&&(s.stencilOp(Kt,Ke,un),ct=Kt,It=Ke,ce=un)},setLocked:function(Kt){D=Kt},setClear:function(Kt){Te!==Kt&&(s.clearStencil(Kt),Te=Kt)},reset:function(){D=!1,rt=null,W=null,j=null,ht=null,ct=null,It=null,ce=null,Te=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,x=null,y=null,v=null,C=null,w=null,T=new Q(0,0,0),R=0,b=!1,M=null,P=null,N=null,B=null,G=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=$>=2);let st=null,ut={};const lt=s.getParameter(s.SCISSOR_BOX),Lt=s.getParameter(s.VIEWPORT),qt=new ee().fromArray(lt),q=new ee().fromArray(Lt);function et(D,rt,W,j){const ht=new Uint8Array(4),ct=s.createTexture();s.bindTexture(D,ct),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let It=0;It<W;It++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(rt,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,ht):s.texImage2D(rt+It,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ht);return ct}const dt={};dt[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),dt[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),dt[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(s.DEPTH_TEST),o.setFunc(Di),zt(!1),kt(io),nt(s.CULL_FACE),I(Nn);function nt(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function wt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function At(D,rt){return d[D]!==rt?(s.bindFramebuffer(D,rt),d[D]=rt,D===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=rt),D===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=rt),!0):!1}function Nt(D,rt){let W=p,j=!1;if(D){W=u.get(rt),W===void 0&&(W=[],u.set(rt,W));const ht=D.textures;if(W.length!==ht.length||W[0]!==s.COLOR_ATTACHMENT0){for(let ct=0,It=ht.length;ct<It;ct++)W[ct]=s.COLOR_ATTACHMENT0+ct;W.length=ht.length,j=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,j=!0);j&&s.drawBuffers(W)}function le(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Vt={[$n]:s.FUNC_ADD,[hc]:s.FUNC_SUBTRACT,[uc]:s.FUNC_REVERSE_SUBTRACT};Vt[dc]=s.MIN,Vt[fc]=s.MAX;const de={[pc]:s.ZERO,[mc]:s.ONE,[gc]:s.SRC_COLOR,[Nr]:s.SRC_ALPHA,[Sc]:s.SRC_ALPHA_SATURATE,[yc]:s.DST_COLOR,[vc]:s.DST_ALPHA,[_c]:s.ONE_MINUS_SRC_COLOR,[Br]:s.ONE_MINUS_SRC_ALPHA,[Mc]:s.ONE_MINUS_DST_COLOR,[xc]:s.ONE_MINUS_DST_ALPHA,[bc]:s.CONSTANT_COLOR,[Ec]:s.ONE_MINUS_CONSTANT_COLOR,[wc]:s.CONSTANT_ALPHA,[Tc]:s.ONE_MINUS_CONSTANT_ALPHA};function I(D,rt,W,j,ht,ct,It,ce,Te,Kt){if(D===Nn){_===!0&&(wt(s.BLEND),_=!1);return}if(_===!1&&(nt(s.BLEND),_=!0),D!==cc){if(D!==m||Kt!==b){if((f!==$n||v!==$n)&&(s.blendEquation(s.FUNC_ADD),f=$n,v=$n),Kt)switch(D){case Pi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case as:s.blendFunc(s.ONE,s.ONE);break;case so:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ro:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Pi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case as:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case so:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ro:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,y=null,C=null,w=null,T.set(0,0,0),R=0,m=D,b=Kt}return}ht=ht||rt,ct=ct||W,It=It||j,(rt!==f||ht!==v)&&(s.blendEquationSeparate(Vt[rt],Vt[ht]),f=rt,v=ht),(W!==x||j!==y||ct!==C||It!==w)&&(s.blendFuncSeparate(de[W],de[j],de[ct],de[It]),x=W,y=j,C=ct,w=It),(ce.equals(T)===!1||Te!==R)&&(s.blendColor(ce.r,ce.g,ce.b,Te),T.copy(ce),R=Te),m=D,b=!1}function Ve(D,rt){D.side===Ee?wt(s.CULL_FACE):nt(s.CULL_FACE);let W=D.side===Se;rt&&(W=!W),zt(W),D.blending===Pi&&D.transparent===!1?I(Nn):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const j=D.stencilWrite;a.setTest(j),j&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?nt(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function zt(D){M!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),M=D)}function kt(D){D!==oc?(nt(s.CULL_FACE),D!==P&&(D===io?s.cullFace(s.BACK):D===lc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),P=D}function Mt(D){D!==N&&(H&&s.lineWidth(D),N=D)}function se(D,rt,W){D?(nt(s.POLYGON_OFFSET_FILL),(B!==rt||G!==W)&&(s.polygonOffset(rt,W),B=rt,G=W)):wt(s.POLYGON_OFFSET_FILL)}function yt(D){D?nt(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function A(D){D===void 0&&(D=s.TEXTURE0+X-1),st!==D&&(s.activeTexture(D),st=D)}function S(D,rt,W){W===void 0&&(st===null?W=s.TEXTURE0+X-1:W=st);let j=ut[W];j===void 0&&(j={type:void 0,texture:void 0},ut[W]=j),(j.type!==D||j.texture!==rt)&&(st!==W&&(s.activeTexture(W),st=W),s.bindTexture(D,rt||dt[D]),j.type=D,j.texture=rt)}function O(){const D=ut[st];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Wt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(D){qt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),qt.copy(D))}function gt(D){q.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Gt(D,rt){let W=c.get(rt);W===void 0&&(W=new WeakMap,c.set(rt,W));let j=W.get(D);j===void 0&&(j=s.getUniformBlockIndex(rt,D.name),W.set(D,j))}function Ut(D,rt){const j=c.get(rt).get(D);l.get(rt)!==j&&(s.uniformBlockBinding(rt,j,D.__bindingPointIndex),l.set(rt,j))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},st=null,ut={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,x=null,y=null,v=null,C=null,w=null,T=new Q(0,0,0),R=0,b=!1,M=null,P=null,N=null,B=null,G=null,qt.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:wt,bindFramebuffer:At,drawBuffers:Nt,useProgram:le,setBlending:I,setMaterial:Ve,setFlipSided:zt,setCullFace:kt,setLineWidth:Mt,setPolygonOffset:se,setScissorTest:yt,activeTexture:A,bindTexture:S,unbindTexture:O,compressedTexImage2D:Z,compressedTexImage3D:K,texImage2D:mt,texImage3D:Tt,updateUBOMapping:Gt,uniformBlockBinding:Ut,texStorage2D:Wt,texStorage3D:tt,texSubImage2D:Y,texSubImage3D:xt,compressedTexSubImage2D:ot,compressedTexSubImage3D:pt,scissor:Ct,viewport:gt,reset:ie}}function Tm(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return p?new OffscreenCanvas(A,S):ls("canvas")}function _(A,S,O){let Z=1;const K=yt(A);if((K.width>O||K.height>O)&&(Z=O/Math.max(K.width,K.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(Z*K.width),xt=Math.floor(Z*K.height);d===void 0&&(d=g(Y,xt));const ot=S?g(Y,xt):d;return ot.width=Y,ot.height=xt,ot.getContext("2d").drawImage(A,0,0,Y,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Y+"x"+xt+")."),ot}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){s.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(A,S,O,Z,K=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=S;if(S===s.RED&&(O===s.FLOAT&&(Y=s.R32F),O===s.HALF_FLOAT&&(Y=s.R16F),O===s.UNSIGNED_BYTE&&(Y=s.R8)),S===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.R8UI),O===s.UNSIGNED_SHORT&&(Y=s.R16UI),O===s.UNSIGNED_INT&&(Y=s.R32UI),O===s.BYTE&&(Y=s.R8I),O===s.SHORT&&(Y=s.R16I),O===s.INT&&(Y=s.R32I)),S===s.RG&&(O===s.FLOAT&&(Y=s.RG32F),O===s.HALF_FLOAT&&(Y=s.RG16F),O===s.UNSIGNED_BYTE&&(Y=s.RG8)),S===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RG8UI),O===s.UNSIGNED_SHORT&&(Y=s.RG16UI),O===s.UNSIGNED_INT&&(Y=s.RG32UI),O===s.BYTE&&(Y=s.RG8I),O===s.SHORT&&(Y=s.RG16I),O===s.INT&&(Y=s.RG32I)),S===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),O===s.UNSIGNED_INT&&(Y=s.RGB32UI),O===s.BYTE&&(Y=s.RGB8I),O===s.SHORT&&(Y=s.RGB16I),O===s.INT&&(Y=s.RGB32I)),S===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),O===s.UNSIGNED_INT&&(Y=s.RGBA32UI),O===s.BYTE&&(Y=s.RGBA8I),O===s.SHORT&&(Y=s.RGBA16I),O===s.INT&&(Y=s.RGBA32I)),S===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),S===s.RGBA){const xt=K?Zs:Zt.getTransfer(Z);O===s.FLOAT&&(Y=s.RGBA32F),O===s.HALF_FLOAT&&(Y=s.RGBA16F),O===s.UNSIGNED_BYTE&&(Y=xt===te?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(A,S){let O;return A?S===null||S===ii||S===Ni?O=s.DEPTH24_STENCIL8:S===cn?O=s.DEPTH32F_STENCIL8:S===os&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ii||S===Ni?O=s.DEPTH_COMPONENT24:S===cn?O=s.DEPTH_COMPONENT32F:S===os&&(O=s.DEPTH_COMPONENT16),O}function C(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==He&&A.minFilter!==$e?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){const S=A.target;S.removeEventListener("dispose",w),R(S),S.isVideoTexture&&h.delete(S)}function T(A){const S=A.target;S.removeEventListener("dispose",T),M(S)}function R(A){const S=n.get(A);if(S.__webglInit===void 0)return;const O=A.source,Z=u.get(O);if(Z){const K=Z[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(A),Object.keys(Z).length===0&&u.delete(O)}n.remove(A)}function b(A){const S=n.get(A);s.deleteTexture(S.__webglTexture);const O=A.source,Z=u.get(O);delete Z[S.__cacheKey],o.memory.textures--}function M(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let K=0;K<S.__webglFramebuffer[Z].length;K++)s.deleteFramebuffer(S.__webglFramebuffer[Z][K]);else s.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)s.deleteFramebuffer(S.__webglFramebuffer[Z]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=A.textures;for(let Z=0,K=O.length;Z<K;Z++){const Y=n.get(O[Z]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(O[Z])}n.remove(A)}let P=0;function N(){P=0}function B(){const A=P;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),P+=1,A}function G(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function X(A,S){const O=n.get(A);if(A.isVideoTexture&&Mt(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,A,S);return}}e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+S)}function H(A,S){const O=n.get(A);if(A.version>0&&O.__version!==A.version){q(O,A,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+S)}function $(A,S){const O=n.get(A);if(A.version>0&&O.__version!==A.version){q(O,A,S);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+S)}function V(A,S){const O=n.get(A);if(A.version>0&&O.__version!==A.version){et(O,A,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+S)}const st={[Bn]:s.REPEAT,[Fn]:s.CLAMP_TO_EDGE,[Yr]:s.MIRRORED_REPEAT},ut={[He]:s.NEAREST,[Fc]:s.NEAREST_MIPMAP_NEAREST,[fs]:s.NEAREST_MIPMAP_LINEAR,[$e]:s.LINEAR,[ir]:s.LINEAR_MIPMAP_NEAREST,[ei]:s.LINEAR_MIPMAP_LINEAR},lt={[zc]:s.NEVER,[Xc]:s.ALWAYS,[kc]:s.LESS,[Cl]:s.LEQUAL,[Gc]:s.EQUAL,[Wc]:s.GEQUAL,[Hc]:s.GREATER,[Vc]:s.NOTEQUAL};function Lt(A,S){if(S.type===cn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===$e||S.magFilter===ir||S.magFilter===fs||S.magFilter===ei||S.minFilter===$e||S.minFilter===ir||S.minFilter===fs||S.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,st[S.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,st[S.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,st[S.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ut[S.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ut[S.minFilter]),S.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,lt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===He||S.minFilter!==fs&&S.minFilter!==ei||S.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function qt(A,S){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",w));const Z=S.source;let K=u.get(Z);K===void 0&&(K={},u.set(Z,K));const Y=G(S);if(Y!==A.__cacheKey){K[Y]===void 0&&(K[Y]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),K[Y].usedTimes++;const xt=K[A.__cacheKey];xt!==void 0&&(K[A.__cacheKey].usedTimes--,xt.usedTimes===0&&b(S)),A.__cacheKey=Y,A.__webglTexture=K[Y].texture}return O}function q(A,S,O){let Z=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=s.TEXTURE_3D);const K=qt(A,S),Y=S.source;e.bindTexture(Z,A.__webglTexture,s.TEXTURE0+O);const xt=n.get(Y);if(Y.version!==xt.__version||K===!0){e.activeTexture(s.TEXTURE0+O);const ot=Zt.getPrimaries(Zt.workingColorSpace),pt=S.colorSpace===ln?null:Zt.getPrimaries(S.colorSpace),Wt=S.colorSpace===ln||ot===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let tt=_(S.image,!1,i.maxTextureSize);tt=se(S,tt);const mt=r.convert(S.format,S.colorSpace),Tt=r.convert(S.type);let Ct=y(S.internalFormat,mt,Tt,S.colorSpace,S.isVideoTexture);Lt(Z,S);let gt;const Gt=S.mipmaps,Ut=S.isVideoTexture!==!0,ie=xt.__version===void 0||K===!0,D=Y.dataReady,rt=C(S,tt);if(S.isDepthTexture)Ct=v(S.format===Bi,S.type),ie&&(Ut?e.texStorage2D(s.TEXTURE_2D,1,Ct,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,Ct,tt.width,tt.height,0,mt,Tt,null));else if(S.isDataTexture)if(Gt.length>0){Ut&&ie&&e.texStorage2D(s.TEXTURE_2D,rt,Ct,Gt[0].width,Gt[0].height);for(let W=0,j=Gt.length;W<j;W++)gt=Gt[W],Ut?D&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,gt.width,gt.height,mt,Tt,gt.data):e.texImage2D(s.TEXTURE_2D,W,Ct,gt.width,gt.height,0,mt,Tt,gt.data);S.generateMipmaps=!1}else Ut?(ie&&e.texStorage2D(s.TEXTURE_2D,rt,Ct,tt.width,tt.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,mt,Tt,tt.data)):e.texImage2D(s.TEXTURE_2D,0,Ct,tt.width,tt.height,0,mt,Tt,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ut&&ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,rt,Ct,Gt[0].width,Gt[0].height,tt.depth);for(let W=0,j=Gt.length;W<j;W++)if(gt=Gt[W],S.format!==rn)if(mt!==null)if(Ut){if(D)if(S.layerUpdates.size>0){const ht=Oo(gt.width,gt.height,S.format,S.type);for(const ct of S.layerUpdates){const It=gt.data.subarray(ct*ht/gt.data.BYTES_PER_ELEMENT,(ct+1)*ht/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,ct,gt.width,gt.height,1,mt,It)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,gt.width,gt.height,tt.depth,mt,gt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,W,Ct,gt.width,gt.height,tt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,gt.width,gt.height,tt.depth,mt,Tt,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,W,Ct,gt.width,gt.height,tt.depth,0,mt,Tt,gt.data)}else{Ut&&ie&&e.texStorage2D(s.TEXTURE_2D,rt,Ct,Gt[0].width,Gt[0].height);for(let W=0,j=Gt.length;W<j;W++)gt=Gt[W],S.format!==rn?mt!==null?Ut?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,W,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,W,Ct,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?D&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,gt.width,gt.height,mt,Tt,gt.data):e.texImage2D(s.TEXTURE_2D,W,Ct,gt.width,gt.height,0,mt,Tt,gt.data)}else if(S.isDataArrayTexture)if(Ut){if(ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,rt,Ct,tt.width,tt.height,tt.depth),D)if(S.layerUpdates.size>0){const W=Oo(tt.width,tt.height,S.format,S.type);for(const j of S.layerUpdates){const ht=tt.data.subarray(j*W/tt.data.BYTES_PER_ELEMENT,(j+1)*W/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,tt.width,tt.height,1,mt,Tt,ht)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,mt,Tt,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ct,tt.width,tt.height,tt.depth,0,mt,Tt,tt.data);else if(S.isData3DTexture)Ut?(ie&&e.texStorage3D(s.TEXTURE_3D,rt,Ct,tt.width,tt.height,tt.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,mt,Tt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,Ct,tt.width,tt.height,tt.depth,0,mt,Tt,tt.data);else if(S.isFramebufferTexture){if(ie)if(Ut)e.texStorage2D(s.TEXTURE_2D,rt,Ct,tt.width,tt.height);else{let W=tt.width,j=tt.height;for(let ht=0;ht<rt;ht++)e.texImage2D(s.TEXTURE_2D,ht,Ct,W,j,0,mt,Tt,null),W>>=1,j>>=1}}else if(Gt.length>0){if(Ut&&ie){const W=yt(Gt[0]);e.texStorage2D(s.TEXTURE_2D,rt,Ct,W.width,W.height)}for(let W=0,j=Gt.length;W<j;W++)gt=Gt[W],Ut?D&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,mt,Tt,gt):e.texImage2D(s.TEXTURE_2D,W,Ct,mt,Tt,gt);S.generateMipmaps=!1}else if(Ut){if(ie){const W=yt(tt);e.texStorage2D(s.TEXTURE_2D,rt,Ct,W.width,W.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,mt,Tt,tt)}else e.texImage2D(s.TEXTURE_2D,0,Ct,mt,Tt,tt);m(S)&&f(Z),xt.__version=Y.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function et(A,S,O){if(S.image.length!==6)return;const Z=qt(A,S),K=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+O);const Y=n.get(K);if(K.version!==Y.__version||Z===!0){e.activeTexture(s.TEXTURE0+O);const xt=Zt.getPrimaries(Zt.workingColorSpace),ot=S.colorSpace===ln?null:Zt.getPrimaries(S.colorSpace),pt=S.colorSpace===ln||xt===ot?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Wt=S.isCompressedTexture||S.image[0].isCompressedTexture,tt=S.image[0]&&S.image[0].isDataTexture,mt=[];for(let j=0;j<6;j++)!Wt&&!tt?mt[j]=_(S.image[j],!0,i.maxCubemapSize):mt[j]=tt?S.image[j].image:S.image[j],mt[j]=se(S,mt[j]);const Tt=mt[0],Ct=r.convert(S.format,S.colorSpace),gt=r.convert(S.type),Gt=y(S.internalFormat,Ct,gt,S.colorSpace),Ut=S.isVideoTexture!==!0,ie=Y.__version===void 0||Z===!0,D=K.dataReady;let rt=C(S,Tt);Lt(s.TEXTURE_CUBE_MAP,S);let W;if(Wt){Ut&&ie&&e.texStorage2D(s.TEXTURE_CUBE_MAP,rt,Gt,Tt.width,Tt.height);for(let j=0;j<6;j++){W=mt[j].mipmaps;for(let ht=0;ht<W.length;ht++){const ct=W[ht];S.format!==rn?Ct!==null?Ut?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,0,0,ct.width,ct.height,Ct,ct.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,Gt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,0,0,ct.width,ct.height,Ct,gt,ct.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,Gt,ct.width,ct.height,0,Ct,gt,ct.data)}}}else{if(W=S.mipmaps,Ut&&ie){W.length>0&&rt++;const j=yt(mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,rt,Gt,j.width,j.height)}for(let j=0;j<6;j++)if(tt){Ut?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,mt[j].width,mt[j].height,Ct,gt,mt[j].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Gt,mt[j].width,mt[j].height,0,Ct,gt,mt[j].data);for(let ht=0;ht<W.length;ht++){const It=W[ht].image[j].image;Ut?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,0,0,It.width,It.height,Ct,gt,It.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,Gt,It.width,It.height,0,Ct,gt,It.data)}}else{Ut?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ct,gt,mt[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Gt,Ct,gt,mt[j]);for(let ht=0;ht<W.length;ht++){const ct=W[ht];Ut?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,0,0,Ct,gt,ct.image[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,Gt,Ct,gt,ct.image[j])}}}m(S)&&f(s.TEXTURE_CUBE_MAP),Y.__version=K.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function dt(A,S,O,Z,K,Y){const xt=r.convert(O.format,O.colorSpace),ot=r.convert(O.type),pt=y(O.internalFormat,xt,ot,O.colorSpace),Wt=n.get(S),tt=n.get(O);if(tt.__renderTarget=S,!Wt.__hasExternalTextures){const mt=Math.max(1,S.width>>Y),Tt=Math.max(1,S.height>>Y);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?e.texImage3D(K,Y,pt,mt,Tt,S.depth,0,xt,ot,null):e.texImage2D(K,Y,pt,mt,Tt,0,xt,ot,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),kt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,K,tt.__webglTexture,0,zt(S)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,K,tt.__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(A,S,O){if(s.bindRenderbuffer(s.RENDERBUFFER,A),S.depthBuffer){const Z=S.depthTexture,K=Z&&Z.isDepthTexture?Z.type:null,Y=v(S.stencilBuffer,K),xt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=zt(S);kt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ot,Y,S.width,S.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ot,Y,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Y,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,A)}else{const Z=S.textures;for(let K=0;K<Z.length;K++){const Y=Z[K],xt=r.convert(Y.format,Y.colorSpace),ot=r.convert(Y.type),pt=y(Y.internalFormat,xt,ot,Y.colorSpace),Wt=zt(S);O&&kt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,pt,S.width,S.height):kt(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt,pt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,pt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function wt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(S.depthTexture);Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);const K=Z.__webglTexture,Y=zt(S);if(S.depthTexture.format===Li)kt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(S.depthTexture.format===Bi)kt(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function At(A){const S=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",K)};Z.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=Z}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");wt(S.__webglFramebuffer,A)}else if(O){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=s.createRenderbuffer(),nt(S.__webglDepthbuffer[Z],A,!1);else{const K=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),nt(S.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,K)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(A,S,O){const Z=n.get(A);S!==void 0&&dt(Z.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&At(A)}function le(A){const S=A.texture,O=n.get(A),Z=n.get(S);A.addEventListener("dispose",T);const K=A.textures,Y=A.isWebGLCubeRenderTarget===!0,xt=K.length>1;if(xt||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=S.version,o.memory.textures++),Y){O.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[ot]=[];for(let pt=0;pt<S.mipmaps.length;pt++)O.__webglFramebuffer[ot][pt]=s.createFramebuffer()}else O.__webglFramebuffer[ot]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)O.__webglFramebuffer[ot]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(xt)for(let ot=0,pt=K.length;ot<pt;ot++){const Wt=n.get(K[ot]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&kt(A)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ot=0;ot<K.length;ot++){const pt=K[ot];O.__webglColorRenderbuffer[ot]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ot]);const Wt=r.convert(pt.format,pt.colorSpace),tt=r.convert(pt.type),mt=y(pt.internalFormat,Wt,tt,pt.colorSpace,A.isXRRenderTarget===!0),Tt=zt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,mt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ot,s.RENDERBUFFER,O.__webglColorRenderbuffer[ot])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),nt(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Lt(s.TEXTURE_CUBE_MAP,S);for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)dt(O.__webglFramebuffer[ot][pt],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,pt);else dt(O.__webglFramebuffer[ot],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(S)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ot=0,pt=K.length;ot<pt;ot++){const Wt=K[ot],tt=n.get(Wt);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),Lt(s.TEXTURE_2D,Wt),dt(O.__webglFramebuffer,A,Wt,s.COLOR_ATTACHMENT0+ot,s.TEXTURE_2D,0),m(Wt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let ot=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ot=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ot,Z.__webglTexture),Lt(ot,S),S.mipmaps&&S.mipmaps.length>0)for(let pt=0;pt<S.mipmaps.length;pt++)dt(O.__webglFramebuffer[pt],A,S,s.COLOR_ATTACHMENT0,ot,pt);else dt(O.__webglFramebuffer,A,S,s.COLOR_ATTACHMENT0,ot,0);m(S)&&f(ot),e.unbindTexture()}A.depthBuffer&&At(A)}function Vt(A){const S=A.textures;for(let O=0,Z=S.length;O<Z;O++){const K=S[O];if(m(K)){const Y=x(A),xt=n.get(K).__webglTexture;e.bindTexture(Y,xt),f(Y),e.unbindTexture()}}}const de=[],I=[];function Ve(A){if(A.samples>0){if(kt(A)===!1){const S=A.textures,O=A.width,Z=A.height;let K=s.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=n.get(A),ot=S.length>1;if(ot)for(let pt=0;pt<S.length;pt++)e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let pt=0;pt<S.length;pt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),ot){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xt.__webglColorRenderbuffer[pt]);const Wt=n.get(S[pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Wt,0)}s.blitFramebuffer(0,0,O,Z,0,0,O,Z,K,s.NEAREST),l===!0&&(de.length=0,I.length=0,de.push(s.COLOR_ATTACHMENT0+pt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(de.push(Y),I.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ot)for(let pt=0;pt<S.length;pt++){e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,xt.__webglColorRenderbuffer[pt]);const Wt=n.get(S[pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,xt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,Wt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function zt(A){return Math.min(i.maxSamples,A.samples)}function kt(A){const S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Mt(A){const S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function se(A,S){const O=A.colorSpace,Z=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Oi&&O!==ln&&(Zt.getTransfer(O)===te?(Z!==rn||K!==En)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function yt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=V,this.rebindTextures=Nt,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=kt}function Am(s,t){function e(n,i=ln){let r;const o=Zt.getTransfer(i);if(n===En)return s.UNSIGNED_BYTE;if(n===La)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ia)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ml)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===xl)return s.BYTE;if(n===yl)return s.SHORT;if(n===os)return s.UNSIGNED_SHORT;if(n===Pa)return s.INT;if(n===ii)return s.UNSIGNED_INT;if(n===cn)return s.FLOAT;if(n===hs)return s.HALF_FLOAT;if(n===Sl)return s.ALPHA;if(n===bl)return s.RGB;if(n===rn)return s.RGBA;if(n===El)return s.LUMINANCE;if(n===wl)return s.LUMINANCE_ALPHA;if(n===Li)return s.DEPTH_COMPONENT;if(n===Bi)return s.DEPTH_STENCIL;if(n===Da)return s.RED;if(n===Ua)return s.RED_INTEGER;if(n===Tl)return s.RG;if(n===Fa)return s.RG_INTEGER;if(n===Na)return s.RGBA_INTEGER;if(n===ks||n===Gs||n===Hs||n===Vs)if(o===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zr||n===jr||n===$r||n===Kr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Zr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$r)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Kr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jr||n===Qr||n===ta)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jr||n===Qr)return o===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ta)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ea||n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ea)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===na)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ia)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ra)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===aa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===la)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ca)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ha)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ua)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===da)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pa)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ws||n===ma||n===ga)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ws)return o===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ma)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Al||n===_a||n===va||n===xa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ws)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ni?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Cm={type:"move"};class Dr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Rm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Pm=`
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

}`;class Lm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new we,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Re({vertexShader:Rm,fragmentShader:Pm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Et(new Oe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Im extends Hi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const _=new Lm,m=e.getContextAttributes();let f=null,x=null;const y=[],v=[],C=new vt;let w=null;const T=new Be;T.viewport=new ee;const R=new Be;R.viewport=new ee;const b=[T,R],M=new Jh;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=y[q];return et===void 0&&(et=new Dr,y[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=y[q];return et===void 0&&(et=new Dr,y[q]=et),et.getGripSpace()},this.getHand=function(q){let et=y[q];return et===void 0&&(et=new Dr,y[q]=et),et.getHandSpace()};function B(q){const et=v.indexOf(q.inputSource);if(et===-1)return;const dt=y[et];dt!==void 0&&(dt.update(q.inputSource,q.frame,c||o),dt.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",X);for(let q=0;q<y.length;q++){const et=v[q];et!==null&&(v[q]=null,y[q].disconnect(et))}P=null,N=null,_.reset(),t.setRenderTarget(f),p=null,u=null,d=null,i=null,x=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",G),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(C),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let dt=null,nt=null,wt=null;m.depth&&(wt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=m.stencil?Bi:Li,nt=m.stencil?Ni:ii);const At={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(At),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new On(u.textureWidth,u.textureHeight,{format:rn,type:En,depthTexture:new Hl(u.textureWidth,u.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}else{const dt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,dt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new On(p.framebufferWidth,p.framebufferHeight,{format:rn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),qt.setContext(i),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(q){for(let et=0;et<q.removed.length;et++){const dt=q.removed[et],nt=v.indexOf(dt);nt>=0&&(v[nt]=null,y[nt].disconnect(dt))}for(let et=0;et<q.added.length;et++){const dt=q.added[et];let nt=v.indexOf(dt);if(nt===-1){for(let At=0;At<y.length;At++)if(At>=v.length){v.push(dt),nt=At;break}else if(v[At]===null){v[At]=dt,nt=At;break}if(nt===-1)break}const wt=y[nt];wt&&wt.connect(dt)}}const H=new L,$=new L;function V(q,et,dt){H.setFromMatrixPosition(et.matrixWorld),$.setFromMatrixPosition(dt.matrixWorld);const nt=H.distanceTo($),wt=et.projectionMatrix.elements,At=dt.projectionMatrix.elements,Nt=wt[14]/(wt[10]-1),le=wt[14]/(wt[10]+1),Vt=(wt[9]+1)/wt[5],de=(wt[9]-1)/wt[5],I=(wt[8]-1)/wt[0],Ve=(At[8]+1)/At[0],zt=Nt*I,kt=Nt*Ve,Mt=nt/(-I+Ve),se=Mt*-I;if(et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(se),q.translateZ(Mt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),wt[10]===-1)q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const yt=Nt+Mt,A=le+Mt,S=zt-se,O=kt+(nt-se),Z=Vt*le/A*yt,K=de*le/A*yt;q.projectionMatrix.makePerspective(S,O,Z,K,yt,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function st(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let et=q.near,dt=q.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(dt=_.depthFar)),M.near=R.near=T.near=et,M.far=R.far=T.far=dt,(P!==M.near||N!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,N=M.far),T.layers.mask=q.layers.mask|2,R.layers.mask=q.layers.mask|4,M.layers.mask=T.layers.mask|R.layers.mask;const nt=q.parent,wt=M.cameras;st(M,nt);for(let At=0;At<wt.length;At++)st(wt[At],nt);wt.length===2?V(M,T,R):M.projectionMatrix.copy(T.projectionMatrix),ut(q,M,nt)};function ut(q,et,dt){dt===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(dt.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=zi*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let lt=null;function Lt(q,et){if(h=et.getViewerPose(c||o),g=et,h!==null){const dt=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let nt=!1;dt.length!==M.cameras.length&&(M.cameras.length=0,nt=!0);for(let At=0;At<dt.length;At++){const Nt=dt[At];let le=null;if(p!==null)le=p.getViewport(Nt);else{const de=d.getViewSubImage(u,Nt);le=de.viewport,At===0&&(t.setRenderTargetTextures(x,de.colorTexture,u.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(x))}let Vt=b[At];Vt===void 0&&(Vt=new Be,Vt.layers.enable(At),Vt.viewport=new ee,b[At]=Vt),Vt.matrix.fromArray(Nt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Nt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(le.x,le.y,le.width,le.height),At===0&&(M.matrix.copy(Vt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),nt===!0&&M.cameras.push(Vt)}const wt=i.enabledFeatures;if(wt&&wt.includes("depth-sensing")){const At=d.getDepthInformation(dt[0]);At&&At.isValid&&At.texture&&_.init(t,At,i.renderState)}}for(let dt=0;dt<y.length;dt++){const nt=v[dt],wt=y[dt];nt!==null&&wt!==void 0&&wt.update(nt,et,c||o)}lt&&lt(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const qt=new Xl;qt.setAnimationLoop(Lt),this.setAnimationLoop=function(q){lt=q},this.dispose=function(){}}}const Yn=new Ue,Dm=new Ot;function Um(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Bl(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,x,y,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,x,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Se&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Se&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=t.get(f),y=x.envMap,v=x.envMapRotation;y&&(m.envMap.value=y,Yn.copy(v),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),m.envMapRotation.value.setFromMatrix4(Dm.makeRotationFromEuler(Yn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,x,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Se&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const x=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Fm(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=i[x.id];v===void 0&&(g(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",m));const C=y.program;n.updateUBOMapping(x,C);const w=t.render.frame;r[x.id]!==w&&(u(x),r[x.id]=w)}function h(x){const y=d();x.__bindingPointIndex=y;const v=s.createBuffer(),C=x.__size,w=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,C,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const y=i[x.id],v=x.uniforms,C=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,T=v.length;w<T;w++){const R=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,M=R.length;b<M;b++){const P=R[b];if(p(P,w,b,C)===!0){const N=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let X=0;X<B.length;X++){const H=B[X],$=_(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,N+G,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,G),G+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(x,y,v,C){const w=x.value,T=y+"_"+v;if(C[T]===void 0)return typeof w=="number"||typeof w=="boolean"?C[T]=w:C[T]=w.clone(),!0;{const R=C[T];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return C[T]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(x){const y=x.uniforms;let v=0;const C=16;for(let T=0,R=y.length;T<R;T++){const b=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,P=b.length;M<P;M++){const N=b[M],B=Array.isArray(N.value)?N.value:[N.value];for(let G=0,X=B.length;G<X;G++){const H=B[G],$=_(H),V=v%C,st=V%$.boundary,ut=V+st;v+=st,ut!==0&&C-ut<$.storage&&(v+=C-ut),N.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=$.storage}}}const w=v%C;return w>0&&(v+=C-w),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function f(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:f}}class Nm{constructor(t={}){const{canvas:e=lh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Me,this.toneMapping=yn,this.toneMappingExposure=1;const v=this;let C=!1,w=0,T=0,R=null,b=-1,M=null;const P=new ee,N=new ee;let B=null;const G=new Q(0);let X=0,H=e.width,$=e.height,V=1,st=null,ut=null;const lt=new ee(0,0,H,$),Lt=new ee(0,0,H,$);let qt=!1;const q=new Ga;let et=!1,dt=!1;this.transmissionResolutionScale=1;const nt=new Ot,wt=new Ot,At=new L,Nt=new ee,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function de(){return R===null?V:1}let I=n;function Ve(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Aa}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",ct,!1),I===null){const U="webgl2";if(I=Ve(U,E),I===null)throw Ve(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let zt,kt,Mt,se,yt,A,S,O,Z,K,Y,xt,ot,pt,Wt,tt,mt,Tt,Ct,gt,Gt,Ut,ie,D;function rt(){zt=new Xf(I),zt.init(),Ut=new Am(I,zt),kt=new zf(I,zt,t,Ut),Mt=new wm(I,zt),kt.reverseDepthBuffer&&u&&Mt.buffers.depth.setReversed(!0),se=new Zf(I),yt=new dm,A=new Tm(I,zt,Mt,yt,kt,Ut,se),S=new Gf(v),O=new Wf(v),Z=new tu(I),ie=new Bf(I,Z),K=new qf(I,Z,se,ie),Y=new $f(I,K,Z,se),Ct=new jf(I,kt,A),tt=new kf(yt),xt=new um(v,S,O,zt,kt,ie,tt),ot=new Um(v,yt),pt=new pm,Wt=new ym(zt),Tt=new Nf(v,S,O,Mt,Y,p,l),mt=new bm(v,Y,kt),D=new Fm(I,se,kt,Mt),gt=new Of(I,zt,se),Gt=new Yf(I,zt,se),se.programs=xt.programs,v.capabilities=kt,v.extensions=zt,v.properties=yt,v.renderLists=pt,v.shadowMap=mt,v.state=Mt,v.info=se}rt();const W=new Im(v,I);this.xr=W,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=zt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=zt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(H,$,!1))},this.getSize=function(E){return E.set(H,$)},this.setSize=function(E,U,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,$=U,e.width=Math.floor(E*V),e.height=Math.floor(U*V),z===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(H*V,$*V).floor()},this.setDrawingBufferSize=function(E,U,z){H=E,$=U,V=z,e.width=Math.floor(E*z),e.height=Math.floor(U*z),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(lt)},this.setViewport=function(E,U,z,k){E.isVector4?lt.set(E.x,E.y,E.z,E.w):lt.set(E,U,z,k),Mt.viewport(P.copy(lt).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(Lt)},this.setScissor=function(E,U,z,k){E.isVector4?Lt.set(E.x,E.y,E.z,E.w):Lt.set(E,U,z,k),Mt.scissor(N.copy(Lt).multiplyScalar(V).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(E){Mt.setScissorTest(qt=E)},this.setOpaqueSort=function(E){st=E},this.setTransparentSort=function(E){ut=E},this.getClearColor=function(E){return E.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(E=!0,U=!0,z=!0){let k=0;if(E){let F=!1;if(R!==null){const J=R.texture.format;F=J===Na||J===Fa||J===Ua}if(F){const J=R.texture.type,at=J===En||J===ii||J===os||J===Ni||J===La||J===Ia,ft=Tt.getClearColor(),_t=Tt.getClearAlpha(),Rt=ft.r,Pt=ft.g,St=ft.b;at?(g[0]=Rt,g[1]=Pt,g[2]=St,g[3]=_t,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Rt,_[1]=Pt,_[2]=St,_[3]=_t,I.clearBufferiv(I.COLOR,0,_))}else k|=I.COLOR_BUFFER_BIT}U&&(k|=I.DEPTH_BUFFER_BIT),z&&(k|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),Tt.dispose(),pt.dispose(),Wt.dispose(),yt.dispose(),S.dispose(),O.dispose(),Y.dispose(),ie.dispose(),D.dispose(),xt.dispose(),W.dispose(),W.removeEventListener("sessionstart",$a),W.removeEventListener("sessionend",Ka),kn.stop()};function j(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const E=se.autoReset,U=mt.enabled,z=mt.autoUpdate,k=mt.needsUpdate,F=mt.type;rt(),se.autoReset=E,mt.enabled=U,mt.autoUpdate=z,mt.needsUpdate=k,mt.type=F}function ct(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function It(E){const U=E.target;U.removeEventListener("dispose",It),ce(U)}function ce(E){Te(E),yt.remove(E)}function Te(E){const U=yt.get(E).programs;U!==void 0&&(U.forEach(function(z){xt.releaseProgram(z)}),E.isShaderMaterial&&xt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,z,k,F,J){U===null&&(U=le);const at=F.isMesh&&F.matrixWorld.determinant()<0,ft=ec(E,U,z,k,F);Mt.setMaterial(k,at);let _t=z.index,Rt=1;if(k.wireframe===!0){if(_t=K.getWireframeAttribute(z),_t===void 0)return;Rt=2}const Pt=z.drawRange,St=z.attributes.position;let Xt=Pt.start*Rt,jt=(Pt.start+Pt.count)*Rt;J!==null&&(Xt=Math.max(Xt,J.start*Rt),jt=Math.min(jt,(J.start+J.count)*Rt)),_t!==null?(Xt=Math.max(Xt,0),jt=Math.min(jt,_t.count)):St!=null&&(Xt=Math.max(Xt,0),jt=Math.min(jt,St.count));const me=jt-Xt;if(me<0||me===1/0)return;ie.setup(F,k,ft,z,_t);let he,Yt=gt;if(_t!==null&&(he=Z.get(_t),Yt=Gt,Yt.setIndex(he)),F.isMesh)k.wireframe===!0?(Mt.setLineWidth(k.wireframeLinewidth*de()),Yt.setMode(I.LINES)):Yt.setMode(I.TRIANGLES);else if(F.isLine){let bt=k.linewidth;bt===void 0&&(bt=1),Mt.setLineWidth(bt*de()),F.isLineSegments?Yt.setMode(I.LINES):F.isLineLoop?Yt.setMode(I.LINE_LOOP):Yt.setMode(I.LINE_STRIP)}else F.isPoints?Yt.setMode(I.POINTS):F.isSprite&&Yt.setMode(I.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Yt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const bt=F._multiDrawStarts,be=F._multiDrawCounts,$t=F._multiDrawCount,Je=_t?Z.get(_t).bytesPerElement:1,ri=yt.get(k).currentProgram.getUniforms();for(let ze=0;ze<$t;ze++)ri.setValue(I,"_gl_DrawID",ze),Yt.render(bt[ze]/Je,be[ze])}else if(F.isInstancedMesh)Yt.renderInstances(Xt,me,F.count);else if(z.isInstancedBufferGeometry){const bt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,be=Math.min(z.instanceCount,bt);Yt.renderInstances(Xt,me,be)}else Yt.render(Xt,me)};function Kt(E,U,z){E.transparent===!0&&E.side===Ee&&E.forceSinglePass===!1?(E.side=Se,E.needsUpdate=!0,ds(E,U,z),E.side=hn,E.needsUpdate=!0,ds(E,U,z),E.side=Ee):ds(E,U,z)}this.compile=function(E,U,z=null){z===null&&(z=E),f=Wt.get(z),f.init(U),y.push(f),z.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),E!==z&&E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const k=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const J=F.material;if(J)if(Array.isArray(J))for(let at=0;at<J.length;at++){const ft=J[at];Kt(ft,z,F),k.add(ft)}else Kt(J,z,F),k.add(J)}),y.pop(),f=null,k},this.compileAsync=function(E,U,z=null){const k=this.compile(E,U,z);return new Promise(F=>{function J(){if(k.forEach(function(at){yt.get(at).currentProgram.isReady()&&k.delete(at)}),k.size===0){F(E);return}setTimeout(J,10)}zt.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Ke=null;function un(E){Ke&&Ke(E)}function $a(){kn.stop()}function Ka(){kn.start()}const kn=new Xl;kn.setAnimationLoop(un),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(E){Ke=E,W.setAnimationLoop(E),E===null?kn.stop():kn.start()},W.addEventListener("sessionstart",$a),W.addEventListener("sessionend",Ka),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,U,R),f=Wt.get(E,y.length),f.init(U),y.push(f),wt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(wt),dt=this.localClippingEnabled,et=tt.init(this.clippingPlanes,dt),m=pt.get(E,x.length),m.init(),x.push(m),W.enabled===!0&&W.isPresenting===!0){const J=v.xr.getDepthSensingMesh();J!==null&&er(J,U,-1/0,v.sortObjects)}er(E,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(st,ut),Vt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Vt&&Tt.addToRenderList(m,E),this.info.render.frame++,et===!0&&tt.beginShadows();const z=f.state.shadowsArray;mt.render(z,E,U),et===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,F=m.transmissive;if(f.setupLights(),U.isArrayCamera){const J=U.cameras;if(F.length>0)for(let at=0,ft=J.length;at<ft;at++){const _t=J[at];Qa(k,F,E,_t)}Vt&&Tt.render(E);for(let at=0,ft=J.length;at<ft;at++){const _t=J[at];Ja(m,E,_t,_t.viewport)}}else F.length>0&&Qa(k,F,E,U),Vt&&Tt.render(E),Ja(m,E,U);R!==null&&T===0&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(v,E,U),ie.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(f=y[y.length-1],et===!0&&tt.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function er(E,U,z,k){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){k&&Nt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(wt);const at=Y.update(E),ft=E.material;ft.visible&&m.push(E,at,ft,z,Nt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const at=Y.update(E),ft=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Nt.copy(E.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),Nt.copy(at.boundingSphere.center)),Nt.applyMatrix4(E.matrixWorld).applyMatrix4(wt)),Array.isArray(ft)){const _t=at.groups;for(let Rt=0,Pt=_t.length;Rt<Pt;Rt++){const St=_t[Rt],Xt=ft[St.materialIndex];Xt&&Xt.visible&&m.push(E,at,Xt,z,Nt.z,St)}}else ft.visible&&m.push(E,at,ft,z,Nt.z,null)}}const J=E.children;for(let at=0,ft=J.length;at<ft;at++)er(J[at],U,z,k)}function Ja(E,U,z,k){const F=E.opaque,J=E.transmissive,at=E.transparent;f.setupLightsView(z),et===!0&&tt.setGlobalState(v.clippingPlanes,z),k&&Mt.viewport(P.copy(k)),F.length>0&&us(F,U,z),J.length>0&&us(J,U,z),at.length>0&&us(at,U,z),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Qa(E,U,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[k.id]===void 0&&(f.state.transmissionRenderTarget[k.id]=new On(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?hs:En,minFilter:ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const J=f.state.transmissionRenderTarget[k.id],at=k.viewport||P;J.setSize(at.z*v.transmissionResolutionScale,at.w*v.transmissionResolutionScale);const ft=v.getRenderTarget();v.setRenderTarget(J),v.getClearColor(G),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Vt&&Tt.render(z);const _t=v.toneMapping;v.toneMapping=yn;const Rt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),f.setupLightsView(k),et===!0&&tt.setGlobalState(v.clippingPlanes,k),us(E,z,k),A.updateMultisampleRenderTarget(J),A.updateRenderTargetMipmap(J),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let St=0,Xt=U.length;St<Xt;St++){const jt=U[St],me=jt.object,he=jt.geometry,Yt=jt.material,bt=jt.group;if(Yt.side===Ee&&me.layers.test(k.layers)){const be=Yt.side;Yt.side=Se,Yt.needsUpdate=!0,to(me,z,k,he,Yt,bt),Yt.side=be,Yt.needsUpdate=!0,Pt=!0}}Pt===!0&&(A.updateMultisampleRenderTarget(J),A.updateRenderTargetMipmap(J))}v.setRenderTarget(ft),v.setClearColor(G,X),Rt!==void 0&&(k.viewport=Rt),v.toneMapping=_t}function us(E,U,z){const k=U.isScene===!0?U.overrideMaterial:null;for(let F=0,J=E.length;F<J;F++){const at=E[F],ft=at.object,_t=at.geometry,Rt=k===null?at.material:k,Pt=at.group;ft.layers.test(z.layers)&&to(ft,U,z,_t,Rt,Pt)}}function to(E,U,z,k,F,J){E.onBeforeRender(v,U,z,k,F,J),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(v,U,z,k,E,J),F.transparent===!0&&F.side===Ee&&F.forceSinglePass===!1?(F.side=Se,F.needsUpdate=!0,v.renderBufferDirect(z,U,k,F,E,J),F.side=hn,F.needsUpdate=!0,v.renderBufferDirect(z,U,k,F,E,J),F.side=Ee):v.renderBufferDirect(z,U,k,F,E,J),E.onAfterRender(v,U,z,k,F,J)}function ds(E,U,z){U.isScene!==!0&&(U=le);const k=yt.get(E),F=f.state.lights,J=f.state.shadowsArray,at=F.state.version,ft=xt.getParameters(E,F.state,J,U,z),_t=xt.getProgramCacheKey(ft);let Rt=k.programs;k.environment=E.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(E.isMeshStandardMaterial?O:S).get(E.envMap||k.environment),k.envMapRotation=k.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Rt===void 0&&(E.addEventListener("dispose",It),Rt=new Map,k.programs=Rt);let Pt=Rt.get(_t);if(Pt!==void 0){if(k.currentProgram===Pt&&k.lightsStateVersion===at)return no(E,ft),Pt}else ft.uniforms=xt.getUniforms(E),E.onBeforeCompile(ft,v),Pt=xt.acquireProgram(ft,_t),Rt.set(_t,Pt),k.uniforms=ft.uniforms;const St=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(St.clippingPlanes=tt.uniform),no(E,ft),k.needsLights=ic(E),k.lightsStateVersion=at,k.needsLights&&(St.ambientLightColor.value=F.state.ambient,St.lightProbe.value=F.state.probe,St.directionalLights.value=F.state.directional,St.directionalLightShadows.value=F.state.directionalShadow,St.spotLights.value=F.state.spot,St.spotLightShadows.value=F.state.spotShadow,St.rectAreaLights.value=F.state.rectArea,St.ltc_1.value=F.state.rectAreaLTC1,St.ltc_2.value=F.state.rectAreaLTC2,St.pointLights.value=F.state.point,St.pointLightShadows.value=F.state.pointShadow,St.hemisphereLights.value=F.state.hemi,St.directionalShadowMap.value=F.state.directionalShadowMap,St.directionalShadowMatrix.value=F.state.directionalShadowMatrix,St.spotShadowMap.value=F.state.spotShadowMap,St.spotLightMatrix.value=F.state.spotLightMatrix,St.spotLightMap.value=F.state.spotLightMap,St.pointShadowMap.value=F.state.pointShadowMap,St.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Pt,k.uniformsList=null,Pt}function eo(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Xs.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function no(E,U){const z=yt.get(E);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function ec(E,U,z,k,F){U.isScene!==!0&&(U=le),A.resetTextureUnits();const J=U.fog,at=k.isMeshStandardMaterial?U.environment:null,ft=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Oi,_t=(k.isMeshStandardMaterial?O:S).get(k.envMap||at),Rt=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Pt=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),St=!!z.morphAttributes.position,Xt=!!z.morphAttributes.normal,jt=!!z.morphAttributes.color;let me=yn;k.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(me=v.toneMapping);const he=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Yt=he!==void 0?he.length:0,bt=yt.get(k),be=f.state.lights;if(et===!0&&(dt===!0||E!==M)){const Pe=E===M&&k.id===b;tt.setState(k,E,Pe)}let $t=!1;k.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==be.state.version||bt.outputColorSpace!==ft||F.isBatchedMesh&&bt.batching===!1||!F.isBatchedMesh&&bt.batching===!0||F.isBatchedMesh&&bt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&bt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&bt.instancing===!1||!F.isInstancedMesh&&bt.instancing===!0||F.isSkinnedMesh&&bt.skinning===!1||!F.isSkinnedMesh&&bt.skinning===!0||F.isInstancedMesh&&bt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&bt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&bt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&bt.instancingMorph===!1&&F.morphTexture!==null||bt.envMap!==_t||k.fog===!0&&bt.fog!==J||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==tt.numPlanes||bt.numIntersection!==tt.numIntersection)||bt.vertexAlphas!==Rt||bt.vertexTangents!==Pt||bt.morphTargets!==St||bt.morphNormals!==Xt||bt.morphColors!==jt||bt.toneMapping!==me||bt.morphTargetsCount!==Yt)&&($t=!0):($t=!0,bt.__version=k.version);let Je=bt.currentProgram;$t===!0&&(Je=ds(k,U,F));let ri=!1,ze=!1,Xi=!1;const ae=Je.getUniforms(),We=bt.uniforms;if(Mt.useProgram(Je.program)&&(ri=!0,ze=!0,Xi=!0),k.id!==b&&(b=k.id,ze=!0),ri||M!==E){Mt.buffers.depth.getReversed()?(nt.copy(E.projectionMatrix),hh(nt),uh(nt),ae.setValue(I,"projectionMatrix",nt)):ae.setValue(I,"projectionMatrix",E.projectionMatrix),ae.setValue(I,"viewMatrix",E.matrixWorldInverse);const Fe=ae.map.cameraPosition;Fe!==void 0&&Fe.setValue(I,At.setFromMatrixPosition(E.matrixWorld)),kt.logarithmicDepthBuffer&&ae.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ae.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,ze=!0,Xi=!0)}if(F.isSkinnedMesh){ae.setOptional(I,F,"bindMatrix"),ae.setOptional(I,F,"bindMatrixInverse");const Pe=F.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),ae.setValue(I,"boneTexture",Pe.boneTexture,A))}F.isBatchedMesh&&(ae.setOptional(I,F,"batchingTexture"),ae.setValue(I,"batchingTexture",F._matricesTexture,A),ae.setOptional(I,F,"batchingIdTexture"),ae.setValue(I,"batchingIdTexture",F._indirectTexture,A),ae.setOptional(I,F,"batchingColorTexture"),F._colorsTexture!==null&&ae.setValue(I,"batchingColorTexture",F._colorsTexture,A));const Xe=z.morphAttributes;if((Xe.position!==void 0||Xe.normal!==void 0||Xe.color!==void 0)&&Ct.update(F,z,Je),(ze||bt.receiveShadow!==F.receiveShadow)&&(bt.receiveShadow=F.receiveShadow,ae.setValue(I,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(We.envMap.value=_t,We.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(We.envMapIntensity.value=U.environmentIntensity),ze&&(ae.setValue(I,"toneMappingExposure",v.toneMappingExposure),bt.needsLights&&nc(We,Xi),J&&k.fog===!0&&ot.refreshFogUniforms(We,J),ot.refreshMaterialUniforms(We,k,V,$,f.state.transmissionRenderTarget[E.id]),Xs.upload(I,eo(bt),We,A)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Xs.upload(I,eo(bt),We,A),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ae.setValue(I,"center",F.center),ae.setValue(I,"modelViewMatrix",F.modelViewMatrix),ae.setValue(I,"normalMatrix",F.normalMatrix),ae.setValue(I,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Pe=k.uniformsGroups;for(let Fe=0,nr=Pe.length;Fe<nr;Fe++){const Gn=Pe[Fe];D.update(Gn,Je),D.bind(Gn,Je)}}return Je}function nc(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function ic(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,U,z){yt.get(E.texture).__webglTexture=U,yt.get(E.depthTexture).__webglTexture=z;const k=yt.get(E);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const z=yt.get(E);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const sc=I.createFramebuffer();this.setRenderTarget=function(E,U=0,z=0){R=E,w=U,T=z;let k=!0,F=null,J=!1,at=!1;if(E){const _t=yt.get(E);if(_t.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(I.FRAMEBUFFER,null),k=!1;else if(_t.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(_t.__hasExternalTextures)A.rebindTextures(E,yt.get(E.texture).__webglTexture,yt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const St=E.depthTexture;if(_t.__boundDepthTexture!==St){if(St!==null&&yt.has(St)&&(E.width!==St.image.width||E.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Rt=E.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(at=!0);const Pt=yt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pt[U])?F=Pt[U][z]:F=Pt[U],J=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?F=yt.get(E).__webglMultisampledFramebuffer:Array.isArray(Pt)?F=Pt[z]:F=Pt,P.copy(E.viewport),N.copy(E.scissor),B=E.scissorTest}else P.copy(lt).multiplyScalar(V).floor(),N.copy(Lt).multiplyScalar(V).floor(),B=qt;if(z!==0&&(F=sc),Mt.bindFramebuffer(I.FRAMEBUFFER,F)&&k&&Mt.drawBuffers(E,F),Mt.viewport(P),Mt.scissor(N),Mt.setScissorTest(B),J){const _t=yt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,_t.__webglTexture,z)}else if(at){const _t=yt.get(E.texture),Rt=U;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,_t.__webglTexture,z,Rt)}else if(E!==null&&z!==0){const _t=yt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,_t.__webglTexture,z)}b=-1},this.readRenderTargetPixels=function(E,U,z,k,F,J,at){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&at!==void 0&&(ft=ft[at]),ft){Mt.bindFramebuffer(I.FRAMEBUFFER,ft);try{const _t=E.texture,Rt=_t.format,Pt=_t.type;if(!kt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-k&&z>=0&&z<=E.height-F&&I.readPixels(U,z,k,F,Ut.convert(Rt),Ut.convert(Pt),J)}finally{const _t=R!==null?yt.get(R).__webglFramebuffer:null;Mt.bindFramebuffer(I.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(E,U,z,k,F,J,at){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&at!==void 0&&(ft=ft[at]),ft){const _t=E.texture,Rt=_t.format,Pt=_t.type;if(!kt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-k&&z>=0&&z<=E.height-F){Mt.bindFramebuffer(I.FRAMEBUFFER,ft);const St=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,St),I.bufferData(I.PIXEL_PACK_BUFFER,J.byteLength,I.STREAM_READ),I.readPixels(U,z,k,F,Ut.convert(Rt),Ut.convert(Pt),0);const Xt=R!==null?yt.get(R).__webglFramebuffer:null;Mt.bindFramebuffer(I.FRAMEBUFFER,Xt);const jt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ch(I,jt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,St),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,J),I.deleteBuffer(St),I.deleteSync(jt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,z=0){E.isTexture!==!0&&(wi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const k=Math.pow(2,-z),F=Math.floor(E.image.width*k),J=Math.floor(E.image.height*k),at=U!==null?U.x:0,ft=U!==null?U.y:0;A.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,at,ft,F,J),Mt.unbindTexture()};const rc=I.createFramebuffer(),ac=I.createFramebuffer();this.copyTextureToTexture=function(E,U,z=null,k=null,F=0,J=null){E.isTexture!==!0&&(wi("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1],U=arguments[2],J=arguments[3]||0,z=null),J===null&&(F!==0?(wi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=F,F=0):J=0);let at,ft,_t,Rt,Pt,St,Xt,jt,me;const he=E.isCompressedTexture?E.mipmaps[J]:E.image;if(z!==null)at=z.max.x-z.min.x,ft=z.max.y-z.min.y,_t=z.isBox3?z.max.z-z.min.z:1,Rt=z.min.x,Pt=z.min.y,St=z.isBox3?z.min.z:0;else{const Xe=Math.pow(2,-F);at=Math.floor(he.width*Xe),ft=Math.floor(he.height*Xe),E.isDataArrayTexture?_t=he.depth:E.isData3DTexture?_t=Math.floor(he.depth*Xe):_t=1,Rt=0,Pt=0,St=0}k!==null?(Xt=k.x,jt=k.y,me=k.z):(Xt=0,jt=0,me=0);const Yt=Ut.convert(U.format),bt=Ut.convert(U.type);let be;U.isData3DTexture?(A.setTexture3D(U,0),be=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),be=I.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),be=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const $t=I.getParameter(I.UNPACK_ROW_LENGTH),Je=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ri=I.getParameter(I.UNPACK_SKIP_PIXELS),ze=I.getParameter(I.UNPACK_SKIP_ROWS),Xi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,he.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,he.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Rt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,St);const ae=E.isDataArrayTexture||E.isData3DTexture,We=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const Xe=yt.get(E),Pe=yt.get(U),Fe=yt.get(Xe.__renderTarget),nr=yt.get(Pe.__renderTarget);Mt.bindFramebuffer(I.READ_FRAMEBUFFER,Fe.__webglFramebuffer),Mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,nr.__webglFramebuffer);for(let Gn=0;Gn<_t;Gn++)ae&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.get(E).__webglTexture,F,St+Gn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.get(U).__webglTexture,J,me+Gn)),I.blitFramebuffer(Rt,Pt,at,ft,Xt,jt,at,ft,I.DEPTH_BUFFER_BIT,I.NEAREST);Mt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(F!==0||E.isRenderTargetTexture||yt.has(E)){const Xe=yt.get(E),Pe=yt.get(U);Mt.bindFramebuffer(I.READ_FRAMEBUFFER,rc),Mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,ac);for(let Fe=0;Fe<_t;Fe++)ae?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xe.__webglTexture,F,St+Fe):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Xe.__webglTexture,F),We?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pe.__webglTexture,J,me+Fe):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pe.__webglTexture,J),F!==0?I.blitFramebuffer(Rt,Pt,at,ft,Xt,jt,at,ft,I.COLOR_BUFFER_BIT,I.NEAREST):We?I.copyTexSubImage3D(be,J,Xt,jt,me+Fe,Rt,Pt,at,ft):I.copyTexSubImage2D(be,J,Xt,jt,Rt,Pt,at,ft);Mt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else We?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(be,J,Xt,jt,me,at,ft,_t,Yt,bt,he.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(be,J,Xt,jt,me,at,ft,_t,Yt,he.data):I.texSubImage3D(be,J,Xt,jt,me,at,ft,_t,Yt,bt,he):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,J,Xt,jt,at,ft,Yt,bt,he.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,J,Xt,jt,he.width,he.height,Yt,he.data):I.texSubImage2D(I.TEXTURE_2D,J,Xt,jt,at,ft,Yt,bt,he);I.pixelStorei(I.UNPACK_ROW_LENGTH,$t),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Je),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ri),I.pixelStorei(I.UNPACK_SKIP_ROWS,ze),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Xi),J===0&&U.generateMipmaps&&I.generateMipmap(be),Mt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,z=null,k=null,F=0){return E.isTexture!==!0&&(wi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,E=arguments[2],U=arguments[3],F=arguments[4]||0),wi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,z,k,F)},this.initRenderTarget=function(E){yt.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Mt.unbindTexture()},this.resetState=function(){w=0,T=0,R=null,Mt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}const ll="sarab_settings_v50",Ht=typeof window<"u"&&(/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||"ontouchstart"in window&&Math.min(window.innerWidth,window.innerHeight)<900),Ur={low:{label:"منخفض",dprCap:.95,shadowMapSize:512,shadows:!1,dustCount:70,stormStreaks:90,cloudOctaves:2,useSkyCache:!0,useIBL:!1,anisotropy:2,sunFlare:!1,resolutionScale:.9},medium:{label:"متوسط",dprCap:1.15,shadowMapSize:512,shadows:!Ht,dustCount:120,stormStreaks:150,cloudOctaves:3,useSkyCache:Ht,useIBL:!Ht,anisotropy:2,sunFlare:!0,resolutionScale:1},high:{label:"عالي",dprCap:1.4,shadowMapSize:Ht?1024:2048,shadows:!0,dustCount:220,stormStreaks:240,cloudOctaves:4,useSkyCache:Ht,useIBL:!0,anisotropy:4,sunFlare:!0,resolutionScale:1},ultra:{label:"فائق",dprCap:1.75,shadowMapSize:2048,shadows:!0,dustCount:300,stormStreaks:300,cloudOctaves:5,useSkyCache:!1,useIBL:!0,anisotropy:8,sunFlare:!0,resolutionScale:1.1}},cl={quality:Ht?"medium":"high",fpsCap:Ht?45:60,batterySaver:!1,sensitivity:2.2,resolutionScale:1,fov:72,volume:.85,shadows:!Ht,sunFlare:!0,dustStorm:!0,showFps:!1};class Bm{constructor(){this.data={...cl},this.listeners=new Set,this.load()}load(){try{const t=localStorage.getItem(ll);if(t){const e=JSON.parse(t);this.data={...cl,...e}}}catch{}}save(){try{localStorage.setItem(ll,JSON.stringify(this.data))}catch{}}getPreset(){const t=Ur[this.data.quality]||Ur.medium;return this.data.batterySaver?{...t,shadows:!1,shadowMapSize:512,useSkyCache:!0,useIBL:!1,cloudOctaves:2,dustCount:Math.min(t.dustCount,60),stormStreaks:Math.min(t.stormStreaks,85),anisotropy:2}:t}getEffectiveFpsCap(){return this.data.batterySaver?Math.min(30,this.data.fpsCap||30):this.data.fpsCap||(Ht?45:60)}applyQualityPreset(t){const e=Ur[t];e&&(this.data.quality=t,this.data.shadows=e.shadows,this.data.sunFlare=e.sunFlare,this.data.resolutionScale=e.resolutionScale,this.save(),this.emit())}set(t,e){this.data[t]=e,this.save(),this.emit()}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}emit(){for(const t of this.listeners)t(this.data,this.getPreset())}}const hl=typeof window<"u"&&(/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent||"")||"ontouchstart"in window&&Math.min(window.innerWidth,window.innerHeight)<920);class Om{constructor(t){this.renderer=t,this.loader=new Vl,this.sets=new Map,this.anisotropy=Math.min(hl?4:8,t.capabilities.getMaxAnisotropy())}setAnisotropy(t){this.anisotropy=Math.min(t,this.renderer.capabilities.getMaxAnisotropy());for(const e of this.sets.values())for(const n of Object.values(e))n&&n.isTexture&&(n.anisotropy=this.anisotropy,n.needsUpdate=!0)}loadPBRSet(t,e=1,n=1){const i=`${t}_${e}_${n}`;if(this.sets.has(i))return this.sets.get(i);const r=(u,p)=>(u.wrapS=Bn,u.wrapT=Bn,u.repeat.set(e,n),u.anisotropy=this.anisotropy,u.colorSpace=p?Me:ln,u),o=hl?"_512.webp":".webp",a=`./textures/${t}`,l=r(this.loader.load(`${a}_albedo${o}`),!0),c=r(this.loader.load(`${a}_normal${o}`),!1),h=r(this.loader.load(`${a}_roughness${o}`),!1),d={map:l,normalMap:c,roughnessMap:h};return this.sets.set(i,d),d}createContactShadowTexture(){if(this._shadowTex)return this._shadowTex;const t=128,e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d"),i=n.createRadialGradient(t/2,t/2,4,t/2,t/2,t/2);i.addColorStop(0,"rgba(32, 20, 10, 0.42)"),i.addColorStop(.38,"rgba(38, 24, 12, 0.24)"),i.addColorStop(.72,"rgba(42, 28, 14, 0.06)"),i.addColorStop(1,"rgba(42, 28, 14, 0.0)"),n.fillStyle=i,n.fillRect(0,0,t,t);const r=new Ti(e);return this._shadowTex=r,r}createTwigClusterTexture(){if(this._twigTex)return this._twigTex;const t=256,e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d");n.clearRect(0,0,t,t);const i=t*.5,r=t*.5;let o=31337;const a=()=>(o=o*16807%2147483647,(o-1)/2147483646);for(let c=0;c<210;c++){const h=a()*Math.PI*2,d=Math.pow(a(),.75)*.44*t,u=h+(a()-.5)*2.8+(d<t*.14?Math.PI:0),p=(.04+Math.pow(a(),.65)*.42)*t,g=i+Math.cos(h)*d,_=r+Math.sin(h)*d,m=i+Math.cos(u)*p,f=r+Math.sin(u)*p,x=(g+m)*.5+(a()-.5)*28,y=(_+f)*.5+(a()-.5)*28,v=Math.round(132+a()*68);if(n.strokeStyle=`rgb(${v}, ${Math.round(v*.84)}, ${Math.round(v*.58)})`,n.lineWidth=1.4+a()*2,n.lineCap="round",n.beginPath(),n.moveTo(g,_),n.quadraticCurveTo(x,y,m,f),n.stroke(),a()>.4){const C=x+(a()-.5)*16,w=y+(a()-.5)*16;n.lineWidth=1,n.beginPath(),n.moveTo(x,y),n.lineTo(C,w),n.stroke()}}const l=new Ti(e);return l.colorSpace=Me,this._twigTex=l,l}createDustParticleTexture(){if(this._dustTex)return this._dustTex;const t=64,e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d"),i=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);i.addColorStop(0,"rgba(255, 244, 222, 0.85)"),i.addColorStop(.35,"rgba(245, 212, 162, 0.45)"),i.addColorStop(.7,"rgba(232, 185, 124, 0.12)"),i.addColorStop(1,"rgba(232, 185, 124, 0.0)"),n.fillStyle=i,n.fillRect(0,0,t,t);const r=new Ti(e);return this._dustTex=r,r}createFootprintTexture(){if(this._footTex)return this._footTex;const t=64,e=128,n=document.createElement("canvas");n.width=t,n.height=e;const i=n.getContext("2d");i.clearRect(0,0,t,e);const r=(a,l,c,h,d)=>{i.save(),i.translate(a,l),i.scale(c,h);const u=i.createRadialGradient(0,0,.1,0,0,1);u.addColorStop(0,`rgba(74, 46, 20, ${d})`),u.addColorStop(.7,`rgba(92, 58, 26, ${d*.65})`),u.addColorStop(1,"rgba(92, 58, 26, 0)"),i.fillStyle=u,i.beginPath(),i.arc(0,0,1,0,Math.PI*2),i.fill(),i.restore()};r(32,42,19,32,.48),r(32,92,15,22,.45);const o=new Ti(n);return this._footTex=o,o}}function zm(s,t,e,n={}){const i=s.attributes.position,r=s.attributes.normal,o=i.count,a=new Float32Array(o*3),l=n.occluders||[],c=n.sunStrength??.16,h=n.cavityStrength??.22,d=n.warmBounce??[1,.985,.96],u=n.shadowTint??[.84,.8,.78],p=e.x,g=e.y,_=e.z;for(let m=0;m<o;m++){const f=i.getX(m),x=i.getY(m),y=i.getZ(m),v=r?r.getX(m):0,C=r?r.getY(m):1,w=r?r.getZ(m):0,T=3.6,R=.25*(t(f+T,y)+t(f-T,y)+t(f,y+T)+t(f,y-T)),b=ne.clamp((R-x)*.22,-.35,1),M=ne.clamp(1-Math.max(0,b)*h,.66,1.05),P=Math.max(0,v*p+C*g+w*_),B=(.74+.26*Math.max(0,C))*(1-c*.55+P*c);let G=1;for(let ut=0;ut<l.length;ut++){const lt=l[ut];if(lt.type==="box"){const Lt=Math.max(0,Math.abs(f-lt.x)-lt.hx),qt=Math.max(0,Math.abs(y-lt.z)-lt.hz),q=Math.hypot(Lt,qt),et=lt.pad??2.6;if(q<et){const dt=1-q/et,nt=1-dt*dt*(lt.strength??.38);nt<G&&(G=nt)}}else{const Lt=f-lt.x,qt=y-lt.z,q=(lt.rx??lt.r??2)+(lt.pad??1.8),et=(lt.rz??lt.r??2)+(lt.pad??1.8);if(Math.abs(Lt)>q||Math.abs(qt)>et)continue;const dt=Math.hypot(Lt/q,qt/et);if(dt<1){const nt=1-dt,At=1-nt*nt*(3-2*nt)*(lt.strength??.34);At<G&&(G=At)}}}const X=ne.clamp(M*B*G,.42,1.08),H=ne.clamp((1-X)*1.45,0,1),$=ne.lerp(d[0],u[0],H),V=ne.lerp(d[1],u[1],H),st=ne.lerp(d[2],u[2],H);a[m*3]=X*$,a[m*3+1]=X*V,a[m*3+2]=X*st}return s.setAttribute("color",new Qt(a,3)),s}function qs(s,t={}){const e=t.bottomAO??.56,n=t.topLift??1.04,i=t.undersideAO??.22;s.boundingBox||s.computeBoundingBox();const r=s.boundingBox.min.y,o=Math.max(.001,s.boundingBox.max.y-r),a=s.attributes.position,l=s.attributes.normal,c=new Float32Array(a.count*3);for(let h=0;h<a.count;h++){const d=ne.clamp((a.getY(h)-r)/o,0,1),u=l?l.getY(h):.4,p=ne.lerp(e,n,Math.pow(d,.52)),g=u<0?1-Math.min(1,-u)*i:1+u*.04,_=ne.clamp(p*g,.44,1.06);c[h*3]=_,c[h*3+1]=_*.985,c[h*3+2]=_*.965}return s.setAttribute("color",new Qt(c,3)),s}function $l(s,t,e,n={}){const i=n.bottomAO??.58,r=n.topAO??.96,o=n.cornerAO??.16,a=n.tileScale??1.45,l=s>1.8?3:2,c=t>1.6?3:2,h=e>1.8?3:2,d=new fe(s,t,e,l,c,h),u=d.attributes.position,p=d.attributes.normal,g=d.attributes.uv,_=new Float32Array(u.count*3),m=Math.max(.001,s*.5),f=Math.max(.001,t*.5),x=Math.max(.001,e*.5);for(let y=0;y<u.count;y++){const v=u.getX(y),C=u.getY(y),w=u.getZ(y),T=Math.abs(p.getX(y)),R=Math.abs(p.getY(y));R>.5?g.setXY(y,(v+m)/a,(w+x)/a):T>.5?g.setXY(y,(w+x)/a,(C+f)/a):g.setXY(y,(v+m)/a,(C+f)/a);const b=ne.clamp((C+f)/Math.max(.001,t),0,1),M=ne.lerp(i,1,Math.pow(b,.45)),P=b>.85?ne.lerp(1,r,(b-.85)/.15):1,N=Math.abs(v)/m,B=Math.abs(w)/x,G=R>.5?Math.max(N,B):T>.5?B:N,X=1-Math.pow(Math.max(0,G-.55)/.45,2)*o,H=ne.clamp(M*P*X,.46,1.02);_[y*3]=H,_[y*3+1]=H*.985,_[y*3+2]=H*.965}return g.needsUpdate=!0,d.setAttribute("color",new Qt(_,3)),d}function km(s,t,e,n,i=.46){if(!t.length)return null;const r=new Oe(1,1);r.rotateX(-Math.PI/2);const o=new bn({map:s.createContactShadowTexture(),transparent:!0,depthWrite:!1,opacity:i,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),a=new nn(r,o,t.length),l=new re,c=new L(0,1,0),h=new L,d=new wn,u=new wn,p={x:0,y:1,z:0};for(let g=0;g<t.length;g++){const _=t[g],m=_.y!==void 0?_.y:e(_.x,_.z);n(_.x,_.z,p),h.set(p.x,p.y,p.z),d.setFromUnitVectors(c,h),u.setFromAxisAngle(c,_.ry||0),d.multiply(u),l.position.set(_.x,m+.035,_.z),l.quaternion.copy(d),l.scale.set(_.sx,1,_.sz),l.updateMatrix(),a.setMatrixAt(g,l.matrix)}return a.instanceMatrix.needsUpdate=!0,a}function Kl(s,t=new Set,e=new Set){if(s)for(s.traverse(n=>{if(n.geometry&&!t.has(n.geometry)&&n.geometry.dispose(),n.material){const i=Array.isArray(n.material)?n.material:[n.material];for(const r of i)r&&!e.has(r)&&r.dispose()}});s.children.length>0;)s.remove(s.children[0])}class Gm{constructor(){this.manifest={},this.geometries=new Map,this.materials=new Map,this.loader=new Vl}async preloadAll(){try{const t=await fetch("./models/manifest.json");if(!t.ok)return;this.manifest=await t.json();const e=Object.keys(this.manifest);await Promise.all(e.map(n=>this._loadModel(n,this.manifest[n])))}catch(t){console.warn("ModelManager preload warning:",t)}}async _loadModel(t,e){const[n,i,r]=await Promise.all([fetch(`./models/${t}.bin`).then(x=>x.arrayBuffer()),e.hasDiff?this._loadTex(`./models/${t}_diff.webp`,!0):Promise.resolve(null),e.hasNor?this._loadTex(`./models/${t}_nor.webp`,!1):Promise.resolve(null)]),o=new Uint32Array(n,0,2),a=o[0],l=o[1],c=new Float32Array(n,8,a*8),h=new Uint16Array(n,8+a*32,l),d=new Float32Array(a*3),u=new Float32Array(a*3),p=new Float32Array(a*2);for(let x=0;x<a;x++){const y=x*8;d[x*3]=c[y],d[x*3+1]=c[y+1],d[x*3+2]=c[y+2],u[x*3]=c[y+3],u[x*3+1]=c[y+4],u[x*3+2]=c[y+5],p[x*2]=c[y+6],p[x*2+1]=1-c[y+7]}const g=new pe;g.setAttribute("position",new Qt(d,3)),g.setAttribute("normal",new Qt(u,3)),g.setAttribute("uv",new Qt(p,2)),g.setIndex(new Qt(h.slice(),1)),g.computeBoundingBox(),g.computeBoundingSphere();const _=t.startsWith("rock");qs(g,{bottomAO:_?.56:.7,topLift:_?1.04:1.01,undersideAO:_?.24:.16});const m=t==="lantern",f=Ht&&!m?new _e({map:i||null,normalMap:r||null,normalScale:new vt(_?.82:.72,_?.82:.72),vertexColors:!0,side:_?Ee:hn}):new In({map:i||null,normalMap:r||null,normalScale:new vt(_?.82:.72,_?.82:.72),roughness:m?.52:.88,metalness:m?.45:.04,vertexColors:!0,side:_?Ee:hn});f.name=`scan_${t}`,t==="table"||t==="chair"?(f.onBeforeCompile=x=>{x.fragmentShader=x.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
           float _woodLuma = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
           float _grain = clamp(_woodLuma * 1.15, 0.16, 0.96);
           vec3 _desertCedar = vec3(0.32, 0.21, 0.11);
           vec3 _bleachedHighlight = vec3(0.54, 0.40, 0.25);
           diffuseColor.rgb = mix(_desertCedar, _bleachedHighlight, smoothstep(0.25, 0.88, _grain)) * (0.68 + _grain * 0.52);`)},f.customProgramCacheKey=()=>`scan_wood_retint_${t}`):_&&f.color.set("#e8d8be"),this.geometries.set(t,g),this.materials.set(t,f)}_loadTex(t,e){return new Promise(n=>{this.loader.load(t,i=>{i.colorSpace=e?Me:ln,i.wrapS=Bn,i.wrapT=Bn,n(i)},void 0,()=>n(null))})}getGeometry(t){return this.geometries.get(t)||null}getMaterial(t){return this.materials.get(t)||null}getSharedSets(){return{geometries:new Set(this.geometries.values()),materials:new Set(this.materials.values())}}createMesh(t,e=1){const n=this.getGeometry(t),i=this.getMaterial(t);if(!n||!i)return null;const r=new Et(n,i);return r.scale.setScalar(e),r}}class Hm{constructor(){this.ctx=null,this.masterGain=null,this.volume=.85,this.unlocked=!1,this.stageId=1,this.indoorFactor=0,this.stormIntensity=0,this.windGain=null,this.windFilterLow=null,this.windFilterHigh=null,this.canyonResGain=null,this.canyonResFilter=null,this.summitRushGain=null,this.nightBreezeGain=null,this.cricketBusGain=null,this._noiseBuffer=null,this._blipCounter=0,this._ambAccum=.2,this._cricketTimer=.35}unlock(){if(this.unlocked&&this.ctx){this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.volume,this.masterGain.connect(this.ctx.destination),this._noiseBuffer=this._createNoiseBuffer(4),this._setupStageAmbienceGraph(),this.unlocked=!0,this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}))}setVolume(t){this.volume=Math.max(0,Math.min(1,t)),this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(this.volume,this.ctx.currentTime,.05)}setStage(t){this.stageId=t,this._ambAccum=1}setStormIntensity(t){this.stormIntensity=Math.max(0,Math.min(1,t))}setSuspended(t){this.ctx&&(t&&this.ctx.state==="running"?this.ctx.suspend().catch(()=>{}):!t&&this.unlocked&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}))}_createNoiseBuffer(t){const e=this.ctx.sampleRate,n=Math.floor(e*t),i=this.ctx.createBuffer(1,n,e),r=i.getChannelData(0);let o=0,a=0,l=0,c=0,h=0,d=0,u=0;for(let p=0;p<n;p++){const g=Math.random()*2-1;o=.99886*o+g*.0555179,a=.99332*a+g*.0750759,l=.969*l+g*.153852,c=.8665*c+g*.3104856,h=.55*h+g*.5329522,d=-.7616*d-g*.016898,r[p]=(o+a+l+c+h+d+u+g*.5362)*.055,u=g*.115926}return i}_setupStageAmbienceGraph(){const t=this.ctx.currentTime;this.windGain=this.ctx.createGain(),this.windGain.gain.value=.22,this.windGain.connect(this.masterGain);const e=this.ctx.createBufferSource();e.buffer=this._noiseBuffer,e.loop=!0,this.windFilterLow=this.ctx.createBiquadFilter(),this.windFilterLow.type="bandpass",this.windFilterLow.frequency.value=250,this.windFilterLow.Q.value=1.3;const n=this.ctx.createGain();n.gain.value=.72,e.connect(this.windFilterLow),this.windFilterLow.connect(n),n.connect(this.windGain),e.start(t);const i=this.ctx.createBufferSource();i.buffer=this._noiseBuffer,i.loop=!0,this.windFilterHigh=this.ctx.createBiquadFilter(),this.windFilterHigh.type="bandpass",this.windFilterHigh.frequency.value=1550,this.windFilterHigh.Q.value=2.4;const r=this.ctx.createGain();r.gain.value=.24,i.connect(this.windFilterHigh),this.windFilterHigh.connect(r),r.connect(this.windGain),i.start(t+.9);const o=this.ctx.createOscillator();o.frequency.value=.11;const a=this.ctx.createGain();a.gain.value=95,o.connect(a),a.connect(this.windFilterLow.frequency),o.start(t);const l=this.ctx.createBufferSource();l.buffer=this._noiseBuffer,l.loop=!0,this.canyonResFilter=this.ctx.createBiquadFilter(),this.canyonResFilter.type="bandpass",this.canyonResFilter.frequency.value=370,this.canyonResFilter.Q.value=6.2,this.canyonResGain=this.ctx.createGain(),this.canyonResGain.gain.value=0,l.connect(this.canyonResFilter),this.canyonResFilter.connect(this.canyonResGain),this.canyonResGain.connect(this.masterGain),l.start(t+1.7);const c=this.ctx.createBufferSource();c.buffer=this._noiseBuffer,c.loop=!0;const h=this.ctx.createBiquadFilter();h.type="bandpass",h.frequency.value=640,h.Q.value=1.65,this.summitRushGain=this.ctx.createGain(),this.summitRushGain.gain.value=0,c.connect(h),h.connect(this.summitRushGain),this.summitRushGain.connect(this.masterGain),c.start(t+2.3);const d=this.ctx.createOscillator();d.frequency.value=.19;const u=this.ctx.createGain();u.gain.value=260,d.connect(u),u.connect(h.frequency),d.start(t);const p=this.ctx.createBufferSource();p.buffer=this._noiseBuffer,p.loop=!0;const g=this.ctx.createBiquadFilter();g.type="lowpass",g.frequency.value=390,this.nightBreezeGain=this.ctx.createGain(),this.nightBreezeGain.gain.value=0,p.connect(g),g.connect(this.nightBreezeGain),this.nightBreezeGain.connect(this.masterGain),p.start(t+.4),this.cricketBusGain=this.ctx.createGain(),this.cricketBusGain.gain.value=0,this.cricketBusGain.connect(this.masterGain)}_triggerNightCricket(){if(!this.unlocked||!this.ctx||!this.cricketBusGain)return;const t=this.ctx.currentTime,e=4150+Math.random()*680,n=3+Math.floor(Math.random()*2),i=.028,r=.044,o=.016+Math.random()*.018,a=this.ctx.createOscillator(),l=this.ctx.createOscillator(),c=this.ctx.createBiquadFilter(),h=this.ctx.createGain();a.type="sine",a.frequency.value=e,l.type="triangle",l.frequency.value=e*1.995,c.type="bandpass",c.frequency.value=e,c.Q.value=5,h.gain.setValueAtTime(1e-4,t);for(let u=0;u<n;u++){const p=t+u*r;h.gain.setValueAtTime(1e-4,p),h.gain.linearRampToValueAtTime(o,p+.006),h.gain.exponentialRampToValueAtTime(1e-4,p+i)}const d=n*r+.04;a.connect(c),l.connect(c),c.connect(h),h.connect(this.cricketBusGain),a.start(t),l.start(t),a.stop(t+d),l.stop(t+d)}updateAmbience(t,e,n){if(!this.unlocked||!this.ctx||!this.windGain||this.ctx.state!=="running"||(this.indoorFactor+=(e-this.indoorFactor)*Math.min(1,t*4.5),this.stageId===4&&(this._cricketTimer-=t,this._cricketTimer<=0&&(this._triggerNightCricket(),this._cricketTimer=.42+Math.random()*1.15)),this._ambAccum+=t,this._ambAccum<.125))return;this._ambAccum=0;const i=this.ctx.currentTime,r=this.stormIntensity||0,o=1-this.indoorFactor*.62,a=.85+.2*Math.sin(n*.42)+.12*Math.sin(n*1.05);let l=0,c=250,h=1520,d=0,u=0,p=0,g=0;this.stageId===1?(l=.23*a,c=240,h=1650):this.stageId===2?(l=(.2+r*.36)*a,c=290+r*140,h=1480+r*520,d=(.19+r*.18)*(.78+.22*Math.sin(n*.58)),this.canyonResFilter.frequency.setTargetAtTime(340+Math.sin(n*.33)*85,i,.2)):this.stageId===3?(l=.18*a,c=310,h=1850,u=.34*(.8+.25*Math.sin(n*.65))):(l=.025,p=.16*(.85+.15*Math.sin(n*.28))*o,g=.95*(1-this.indoorFactor*.72)),this.windGain.gain.setTargetAtTime(l*o,i,.22),this.windFilterLow.frequency.setTargetAtTime(c*o,i,.22),this.windFilterHigh.frequency.setTargetAtTime(h*(1-this.indoorFactor*.55),i,.22),this.canyonResGain.gain.setTargetAtTime(d*o,i,.25),this.summitRushGain.gain.setTargetAtTime(u*o,i,.25),this.nightBreezeGain.gain.setTargetAtTime(p,i,.25),this.cricketBusGain.gain.setTargetAtTime(g,i,.25)}playFootstep(t="sand",e=!1){if(!this.unlocked||!this.ctx||!this._noiseBuffer)return;const n=this.ctx.currentTime,i=this.ctx.createBufferSource();i.buffer=this._noiseBuffer;const r=Math.random()*2.4,o=this.ctx.createBiquadFilter(),a=this.ctx.createGain(),l=e?.22:.15;if(t==="stone"){o.type="bandpass",o.frequency.value=720+Math.random()*190,o.Q.value=2.1,a.gain.setValueAtTime(.001,n),a.gain.linearRampToValueAtTime(l*1.15,n+.007),a.gain.exponentialRampToValueAtTime(.001,n+.088);const c=this.ctx.createOscillator(),h=this.ctx.createGain();c.frequency.setValueAtTime(118,n),c.frequency.exponentialRampToValueAtTime(48,n+.055),h.gain.setValueAtTime(l*.48,n),h.gain.exponentialRampToValueAtTime(.001,n+.06),c.connect(h),h.connect(this.masterGain),c.start(n),c.stop(n+.065)}else if(t==="sabkha"){o.type="highpass",o.frequency.value=1850+Math.random()*480,a.gain.setValueAtTime(.001,n),a.gain.linearRampToValueAtTime(l*1.1,n+.012),a.gain.exponentialRampToValueAtTime(.001,n+.11);const c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type="triangle",c.frequency.setValueAtTime(210+Math.random()*40,n),c.frequency.exponentialRampToValueAtTime(75,n+.045),h.gain.setValueAtTime(l*.36,n),h.gain.exponentialRampToValueAtTime(.001,n+.052),c.connect(h),h.connect(this.masterGain),c.start(n),c.stop(n+.06)}else if(t==="rock"){o.type="bandpass",o.frequency.value=1380+Math.random()*420,o.Q.value=1.45,a.gain.setValueAtTime(.001,n),a.gain.linearRampToValueAtTime(l*1.08,n+.014),a.gain.exponentialRampToValueAtTime(.001,n+.125);const c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(145,n),c.frequency.exponentialRampToValueAtTime(58,n+.05),h.gain.setValueAtTime(l*.34,n),h.gain.exponentialRampToValueAtTime(.001,n+.055),c.connect(h),h.connect(this.masterGain),c.start(n),c.stop(n+.06)}else o.type="bandpass",o.frequency.value=920+Math.random()*320,o.Q.value=.82,a.gain.setValueAtTime(.001,n),a.gain.linearRampToValueAtTime(l*.96,n+.032),a.gain.exponentialRampToValueAtTime(.001,n+.175);i.connect(o),o.connect(a),a.connect(this.masterGain),i.start(n,r,.21)}playFlashlightClick(t=!0){if(!this.unlocked||!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="square",n.frequency.setValueAtTime(t?1450:1120,e),n.frequency.exponentialRampToValueAtTime(t?420:280,e+.022),i.gain.setValueAtTime(.14,e),i.gain.exponentialRampToValueAtTime(.001,e+.026),n.connect(i),i.connect(this.masterGain),n.start(e),n.stop(e+.03);const r=e+.018,o=this.ctx.createOscillator(),a=this.ctx.createGain();if(o.type="triangle",o.frequency.setValueAtTime(t?2350:1680,r),o.frequency.exponentialRampToValueAtTime(t?680:420,r+.03),a.gain.setValueAtTime(.16,r),a.gain.exponentialRampToValueAtTime(.001,r+.036),o.connect(a),a.connect(this.masterGain),o.start(r),o.stop(r+.04),this._noiseBuffer){const l=this.ctx.createBufferSource();l.buffer=this._noiseBuffer;const c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.value=t?3200:2400,c.Q.value=1.6;const h=this.ctx.createGain();h.gain.setValueAtTime(.18,e),h.gain.exponentialRampToValueAtTime(.001,e+.028),l.connect(c),c.connect(h),h.connect(this.masterGain),l.start(e,.3,.035)}}playTextBlip(t="thought",e=""){if(!this.unlocked||!this.ctx||!e||/[\s،.؟!…—\-:]/.test(e))return;this._blipCounter++;const n=this.ctx.currentTime,i=this.ctx.createOscillator(),r=this.ctx.createBiquadFilter(),o=this.ctx.createGain(),a=t==="night"?[220,247,262,294,262]:[262,277,311,330,294,277];i.type="triangle";const l=a[this._blipCounter%a.length],c=(Math.random()-.5)*14;i.frequency.setValueAtTime(l+c,n),i.frequency.exponentialRampToValueAtTime((l+c)*.89,n+.042),r.type="bandpass",r.frequency.value=t==="night"?760:920,r.Q.value=1.1,o.gain.setValueAtTime(.001,n),o.gain.linearRampToValueAtTime(.072,n+.004),o.gain.exponentialRampToValueAtTime(8e-4,n+.046),i.connect(r),r.connect(o),o.connect(this.masterGain),i.start(n),i.stop(n+.052)}playStageTransition(t=1){if(!this.unlocked||!this.ctx)return;const e=this.ctx.currentTime,n={1:[146.8,220,293.7],2:[130.8,196,277.2],3:[123.5,185,246.9,293.7],4:[110,164.8,220,261.6]},i=n[t]||n[1],r=3.2;i.forEach((o,a)=>{const l=this.ctx.createOscillator(),c=this.ctx.createBiquadFilter(),h=this.ctx.createGain();l.type=a===0?"sawtooth":"triangle",l.frequency.setValueAtTime(o,e),c.type="lowpass",c.frequency.setValueAtTime(a===0?280:680,e),h.gain.setValueAtTime(1e-4,e),h.gain.linearRampToValueAtTime(.05/(a*.35+1),e+.55),h.gain.exponentialRampToValueAtTime(1e-4,e+r),l.connect(c),c.connect(h),h.connect(this.masterGain),l.start(e),l.stop(e+r+.1)})}playLanternWarmChime(){if(!this.unlocked||!this.ctx)return;const t=this.ctx.currentTime;[293.7,370,440,587.3].forEach((e,n)=>{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(e,t+n*.14),r.gain.setValueAtTime(1e-4,t+n*.14),r.gain.linearRampToValueAtTime(.065,t+n*.14+.08),r.gain.exponentialRampToValueAtTime(1e-4,t+n*.14+2.4),i.connect(r),r.connect(this.masterGain),i.start(t+n*.14),i.stop(t+n*.14+2.5)})}}function Ne(s,t,e){const n=Math.max(0,Math.min(1,(e-s)/(t-s)));return n*n*(3-2*n)}const Ks={1:{size:420,segments:112},2:{size:420,segments:120},3:{size:480,segments:124},4:{size:420,segments:112}},Jn=0,Dn=-68,Jl=0;function oe(s){return Math.sin(s*.021)*24+Math.cos(s*.011)*7.5}function Ci(s){const t=Math.exp(-((s-42)*(s-42))/580)*7.5,e=Math.exp(-((s+12)*(s+12))/680)*9.5,n=Math.exp(-((s+64)*(s+64))/520)*7;return 15.5+t+e+n}function ni(s){return Math.sin((s+18)*.021)*16.5}function Ta(s){const t=Math.exp(-((s+106)*(s+106))/360)*11,e=Math.exp(-((s-108)*(s-108))/380)*7;return 11.5+t+e}function rs(s,t){const e=Math.sin(s*.06+t*.05)*6.5+Math.cos(s*.04-t*.07)*5.2,n=(s-4)/38,i=(t+8)/50,r=Math.hypot(n,i)+e*.012;return 1-Ne(.68,1.04,r)}function Ql(s,t){const e=oe(t),n=Ci(t),i=Math.abs(s-e),r=1-Ne(n*.55,n*1.15,i),o=Math.sin(s*.08+t*.065)*.5+.5;return Math.max(0,Math.min(1,r*(.62+.38*o)))}function Vm(s,t,e){const n=Ne(22,44,e),i=.85+.15*Math.sin(s*.09-t*.08);return Math.max(0,Math.min(1,n*i))}function Qn(s,t,e){if(s===1){const y=rs(t,e),v=Math.sin(t*.022+e*.016+Math.sin(e*.012)*1.4),C=Math.pow(1-Math.abs(v),1.18)*5.6,w=Math.sin(t*.041-e*.031+1.4),T=(1-Math.abs(w))*2.1,R=Math.sin(t*.011-e*.009)*4.5+Math.cos(t*.008+e*.013)*3.8,b=Math.sin(t*.12+e*.11)*.08,M=Math.hypot(t*.85,e*.72),P=Ne(95,195,M)*9.5*(.55+.45*Math.sin(t*.017+e*.014)),N=R*.42+C+T+b+P-1.5,B=Math.exp(-(t*t/340+(e-114)*(e-114)/340)),G=Math.exp(-((t-6)*(t-6)/420+(e+118)*(e+118)/420)),X=N*(1-B*.45)*(1-G*.55),H=-1.65+Math.sin(t*.14)*Math.cos(e*.13)*.035;return X*(1-y)+H*y}if(s===2){const y=oe(e),v=Ci(e),C=Math.abs(t-y),w=Ne(130,-135,e)*5.2,T=Math.sin(t*.075+e*.055)*.42+Math.cos(t*.13-e*.09)*.18+w,R=Ne(v*.92,v+28,C),b=R*(26+9*Math.sin(e*.038+t*.024)),M=Math.sin(b*.72)*1.15*R,P=(Math.sin(t*.045+e*.036)*3.4+Math.cos(t*.028-e*.051)*2.8)*R,N=Math.exp(-(C*C/26))*Math.exp(-((e+12)*(e+12))/950)*-.75;return T+N+b+M+P}if(s===3){const y=ni(e),v=Ta(e),C=Math.abs(t-y),w=Math.sin(t*.022+e*.017+Math.sin(e*.011)*1.45),T=Math.pow(1-Math.abs(w),1.15)*10.5+Math.sin(t*.012-e*.01)*5.2+Math.cos(t*.032+e*.024)*2.4+6.5,b=36+Ne(125,-94,e)*56+Math.sin(e*.06)*1.1,M=1-Ne(-100,-132,e),P=1-Ne(v*.68,v+46,C),N=(Math.sin(e*.065+t*.04)*.14+Math.cos(e*.032-t*.05)*.1)*Ne(v*.88,v+20,C),B=Math.max(0,Math.min(1,(P+N)*M)),G=T+(b-T)*Math.pow(B,1.22),X=(Math.sin(t*.14+e*.12)*.22+Math.cos(t*.08-e*.16)*.18)*B,H=1-Ne(4.2,v*.92,C),$=b+Math.sin(t*.11+e*.09)*.12;if(e>-102&&H>.01){const V=H*(1-Ne(-96,-103,e));return G*(1-V)+$*V}return G+X}const n=t-Jn,i=e-Dn,r=Math.sin(t*.08+e*.06)*2.5+Math.cos(t*.05-e*.08)*2,o=Math.hypot(n*.92,(i-1.5)*1.08)+r,a=Math.sin(t*.023+e*.017+Math.sin(e*.011)*1.4),l=Math.pow(1-Math.abs(a),1.16)*5.2,c=Math.sin(t*.044-e*.031+1.5),h=(1-Math.abs(c))*1.9,d=Math.sin(t*.011-e*.008)*3.8+Math.cos(t*.009+e*.014)*3.2,u=Math.exp(-((t+6)*(t+6)/480+(e-126)*(e-126)/420))*5.8,p=e>Dn+12&&e<116?Math.exp(-(t*t/380))*.52:0;let g=(d*.42+l+h-2.1)*(1-p)+u;const _=Ne(13.5,30,o);g*=_;const m=Math.max(Math.abs(n)-9.8,Math.abs(i)-8.6),f=1-Ne(0,2.8,m);return(Jl+g)*(1-f)+-.14*f}function ul(s){const t=Ks[s]||Ks[1],e=t.size,n=t.segments,i=e*.5,r=e/n;return function(a,l){if(a<=-i||a>=i||l<=-i||l>=i)return Qn(s,a,l);const c=(a+i)/e*n,h=(l+i)/e*n,d=Math.min(n-1,Math.max(0,Math.floor(c))),u=Math.min(n-1,Math.max(0,Math.floor(h))),p=c-d,g=h-u,_=-i+d*r,m=-i+u*r,f=_+r,x=m+r,y=Qn(s,_,m),v=Qn(s,f,m),C=Qn(s,_,x),w=Qn(s,f,x);return p+g<=1?y+p*(v-y)+g*(C-y):w+(1-p)*(C-w)+(1-g)*(v-w)}}function dl(s){return function(e,n,i={x:0,y:1,z:0}){const o=s(e-.5,n),a=s(e+.5,n),l=s(e,n-.5),c=s(e,n+.5),h=o-a,d=2*.5,u=l-c,p=Math.hypot(h,d,u)||1;return i.x=h/p,i.y=d/p,i.z=u/p,i}}function Wm(s,t){return s===1?(e,n)=>rs(e,n)>.45?"sabkha":"sand":s===2?(e,n)=>Ql(e,n)>.35?"rock":"sand":s===3?(e,n)=>t(e,n)>34?"rock":"sand":()=>"sand"}function Ys(s,t){const e=Math.max(0,Math.min(1,t)),n=1.08+(.54-1.08)*e,i=e<.35?1+(.35-e)*.42:1,r=1+.055*Math.sin(e*22)+.03*Math.cos(e*37),o=1+.14*Math.sin(s*3+.7)+.09*Math.cos(s*5-.4),a=e>.96?o:o*i*r;return n*a}class Xm{constructor(t,e=null){this.getTerrainHeight=t,this.getTerrainSurface=e||(()=>"sand"),this.aabbs=[],this.obbs=[],this.cylinders=[],this.ellipses=[],this.mesas=[],this.floorZones=[],this.interiorZones=[],this.bounds={type:"circle",radius:176},this.maxSlope=.94}clear(){this.aabbs.length=0,this.obbs.length=0,this.cylinders.length=0,this.ellipses.length=0,this.mesas.length=0,this.floorZones.length=0,this.interiorZones.length=0}configureStage({heightSampler:t,surfaceSampler:e,bounds:n,maxSlope:i=.94}){this.clear(),t&&(this.getTerrainHeight=t),this.getTerrainSurface=e||(()=>"sand"),this.bounds=n||{type:"circle",radius:176},this.maxSlope=i}addBoxCollider(t,e,n,i,r=-20,o=120,a=null){const l=a!==null?a:o<=2.2;this.aabbs.push({minX:t,maxX:e,minZ:n,maxZ:i,minY:r,maxY:o,climbable:l})}addOBBCollider(t,e,n,i,r=0,o=-20,a=120,l=!1){this.obbs.push({x:t,z:e,hx:n,hz:i,cos:Math.cos(r),sin:Math.sin(r),minY:o,maxY:a,climbable:l})}addCylinderCollider(t,e,n,i=120,r=!1){this.cylinders.push({x:t,z:e,r:Math.max(.2,n*.96),maxY:i,climbable:r})}addEllipseCollider(t,e,n,i,r=0,o=1.5,a=!0){this.ellipses.push({x:t,z:e,rx:Math.max(.26,n*.98),rz:Math.max(.26,i*.98),cos:Math.cos(r),sin:Math.sin(r),topY:o,climbable:a})}addMesaCollider(t,e,n,i,r=0,o=0,a=25){this.mesas.push({x:t,z:e,sx:n,sz:i,cos:Math.cos(r),sin:Math.sin(r),baseY:o,meshBottomY:o-4.5,height:a,broadR:Math.max(n,i)*1.62})}addFloorZone(t,e,n,i,r,o="stone"){this.floorZones.push({minX:t,maxX:e,minZ:n,maxZ:i,y:r,surface:o})}addInteriorZone(t,e,n,i,r=-5,o=12){this.interiorZones.push({minX:t,maxX:e,minZ:n,maxZ:i,minY:r,maxY:o})}_getMesaBlockingRadiusU(t,e,n){const i=Math.max(0,Math.min(.95,(n-t.meshBottomY)/t.height)),r=Math.max(0,Math.min(.95,(n+1.5-t.meshBottomY)/t.height)),o=Ys(e,i),a=Ys(e,(i+r)*.5),l=Ys(e,r);return Math.max(o,a,l)+.035}getGroundInfo(t,e,n=0){let i=this.getTerrainHeight(t,e),r=this.getTerrainSurface(t,e);const o=n+.56;for(let a=0;a<this.floorZones.length;a++){const l=this.floorZones[a];t>=l.minX&&t<=l.maxX&&e>=l.minZ&&e<=l.maxZ&&l.y>=i-.25&&(i=Math.max(i,l.y),r=l.surface)}for(let a=0;a<this.ellipses.length;a++){const l=this.ellipses[a];if(!l.climbable)continue;const c=t-l.x,h=e-l.z,d=Math.max(l.rx,l.rz)+.26;if(c*c+h*h>d*d)continue;const u=c*l.cos-h*l.sin,p=c*l.sin+h*l.cos,g=u/(l.rx+.12),_=p/(l.rz+.12),m=g*g+_*_;if(m<=1){const f=i+(l.topY-i)*Math.sqrt(Math.max(0,1-m*.55));f<=o&&f>i&&(i=f,r="rock")}}for(let a=0;a<this.obbs.length;a++){const l=this.obbs[a];if(!l.climbable)continue;const c=t-l.x,h=e-l.z,d=c*l.cos-h*l.sin,u=c*l.sin+h*l.cos;Math.abs(d)<=l.hx+.14&&Math.abs(u)<=l.hz+.14&&l.maxY<=o&&l.maxY>i&&(i=l.maxY,r="stone")}for(let a=0;a<this.aabbs.length;a++){const l=this.aabbs[a];l.climbable&&t>=l.minX-.14&&t<=l.maxX+.14&&e>=l.minZ-.14&&e<=l.maxZ+.14&&l.maxY<=o&&l.maxY>i&&(i=l.maxY,r="stone")}return{groundY:i,surface:r}}isInsideBuilding(t){for(let e=0;e<this.interiorZones.length;e++){const n=this.interiorZones[e];if(t.x>=n.minX&&t.x<=n.maxX&&t.z>=n.minZ&&t.z<=n.maxZ&&t.y>=n.minY&&t.y<=n.maxY)return!0}return!1}resolveHorizontal(t,e=.36){const n=t.y+.48;let i=!1;for(let c=0;c<3;c++){const h=this.bounds;if(h.type==="box")t.x<h.minX?(t.x=h.minX,i=!0):t.x>h.maxX&&(t.x=h.maxX,i=!0),t.z<h.minZ?(t.z=h.minZ,i=!0):t.z>h.maxZ&&(t.z=h.maxZ,i=!0);else if(h.type==="corridor"){t.z<h.minZ?(t.z=h.minZ,i=!0):t.z>h.maxZ&&(t.z=h.maxZ,i=!0);const d=h.centerXFn(t.z),u=h.halfWidthFn(t.z);t.x<d-u?(t.x=d-u,i=!0):t.x>d+u&&(t.x=d+u,i=!0)}else{const d=Math.hypot(t.x,t.z),u=h.radius||176;if(d>u){const p=u/d;t.x*=p,t.z*=p,i=!0}}for(let d=0;d<this.aabbs.length;d++){const u=this.aabbs[d],p=u.climbable?n:t.y+.18;if(u.maxY<=p||t.y+1.68<u.minY)continue;const g=Math.max(u.minX,Math.min(t.x,u.maxX)),_=Math.max(u.minZ,Math.min(t.z,u.maxZ)),m=t.x-g,f=t.z-_,x=m*m+f*f;if(x<e*e)if(x>1e-6){const y=Math.sqrt(x),v=e-y;t.x+=m/y*v,t.z+=f/y*v}else{const y=Math.abs(t.x-u.minX),v=Math.abs(u.maxX-t.x),C=Math.abs(t.z-u.minZ),w=Math.abs(u.maxZ-t.z),T=Math.min(y,v,C,w);T===y?t.x=u.minX-e:T===v?t.x=u.maxX+e:T===C?t.z=u.minZ-e:t.z=u.maxZ+e}}for(let d=0;d<this.obbs.length;d++){const u=this.obbs[d];if(u.climbable&&u.maxY<=n||t.y+1.68<u.minY)continue;const p=t.x-u.x,g=t.z-u.z,_=p*u.cos-g*u.sin,m=p*u.sin+g*u.cos,f=Math.max(-u.hx,Math.min(_,u.hx)),x=Math.max(-u.hz,Math.min(m,u.hz)),y=_-f,v=m-x,C=y*y+v*v;if(C<e*e){let w=_,T=m;if(C>1e-6){const R=Math.sqrt(C),b=e-R;w+=y/R*b,T+=v/R*b}else{const R=Math.abs(_+u.hx),b=Math.abs(u.hx-_),M=Math.abs(m+u.hz),P=Math.abs(u.hz-m),N=Math.min(R,b,M,P);N===R?w=-u.hx-e:N===b?w=u.hx+e:N===M?T=-u.hz-e:T=u.hz+e}t.x=u.x+(w*u.cos+T*u.sin),t.z=u.z+(-w*u.sin+T*u.cos)}}for(let d=0;d<this.cylinders.length;d++){const u=this.cylinders[d];if(u.climbable&&u.maxY<=n||u.maxY<=t.y+.15)continue;const p=t.x-u.x,g=t.z-u.z,_=e+u.r,m=p*p+g*g;if(m<_*_&&m>1e-6){const f=Math.sqrt(m),x=_-f;t.x+=p/f*x,t.z+=g/f*x}}for(let d=0;d<this.ellipses.length;d++){const u=this.ellipses[d];if(u.climbable&&u.topY<=n)continue;const p=t.x-u.x,g=t.z-u.z,_=Math.max(u.rx,u.rz)+e;if(p*p+g*g>_*_)continue;const m=p*u.cos-g*u.sin,f=p*u.sin+g*u.cos,x=u.rx+e,y=u.rz+e,v=m/x,C=f/y,w=v*v+C*C;if(w<1&&w>1e-8){const T=1/Math.sqrt(w),R=m*T,b=f*T;t.x=u.x+(R*u.cos+b*u.sin),t.z=u.z+(-R*u.sin+b*u.cos)}}for(let d=0;d<this.mesas.length;d++){const u=this.mesas[d],p=t.x-u.x,g=t.z-u.z,_=u.broadR+e;if(p*p+g*g>_*_)continue;const m=p*u.cos-g*u.sin,f=p*u.sin+g*u.cos,x=m/u.sx,y=f/u.sz,v=Math.hypot(x,y),C=Math.atan2(y,x),w=this._getMesaBlockingRadiusU(u,C,t.y),T=e/Math.min(u.sx,u.sz),R=w+T;if(v<R){const b=v>1e-6?x/v:1,M=v>1e-6?y/v:0,P=b*R*u.sx,N=M*R*u.sz;t.x=u.x+(P*u.cos+N*u.sin),t.z=u.z+(-P*u.sin+N*u.cos)}}}const r=.45,o=(this.getTerrainHeight(t.x+r,t.z)-this.getTerrainHeight(t.x-r,t.z))/(2*r),a=(this.getTerrainHeight(t.x,t.z+r)-this.getTerrainHeight(t.x,t.z-r))/(2*r),l=Math.hypot(o,a);if(l>this.maxSlope){const c=(l-this.maxSlope)*.38;t.x-=o/l*c,t.z-=a/l*c}return i}}const De={1:{id:1,key:"noon",name:"المرحلة ١ • سهول السراب",timeLabel:"١٢:٣٠ ظهراً",sunIcon:"☀",sunElevDeg:54,sunAzimDeg:-142,skyMode:0,sunColor:new Q("#fff7e6"),sunIntensity:3.05,hemiSky:new Q("#8ec0eb"),hemiGround:new Q("#cfa879"),hemiIntensity:1.05,bounceColor:new Q("#ebd0a2"),bounceIntensity:.42,horizonColor:new Q("#e6d7bc"),fogDensity:.0021,exposure:.96,interiorExposure:1.15,dustColor:new Q("#f0dab6"),dustOpacity:.24,stormBase:0,heatHaze:.46,sandTint:new Q("#f4e8d2"),bakedAmbient:new Q("#c8b69b"),bakedSunTint:new Q("#fff5e0")},2:{id:2,key:"asr",name:"المرحلة ٢ • وادي الصخور",timeLabel:"٣:٥٠ عصراً",sunIcon:"☀",sunElevDeg:22.5,sunAzimDeg:-116,skyMode:1,sunColor:new Q("#ffc17a"),sunIntensity:2.75,hemiSky:new Q("#d9a574"),hemiGround:new Q("#9c6e44"),hemiIntensity:.96,bounceColor:new Q("#dd9b5c"),bounceIntensity:.36,horizonColor:new Q("#dfa770"),fogDensity:.0032,exposure:1.04,interiorExposure:1.18,dustColor:new Q("#e6b47a"),dustOpacity:.34,stormBase:.24,heatHaze:.26,sandTint:new Q("#eccba2"),bakedAmbient:new Q("#a88764"),bakedSunTint:new Q("#ffcb8c")},3:{id:3,key:"sunset",name:"المرحلة ٣ • قمة جبل السراب",timeLabel:"٦:١٢ مغرباً",sunIcon:"◐",sunElevDeg:5.2,sunAzimDeg:-168,skyMode:2,sunColor:new Q("#ff9a5c"),sunIntensity:2.35,hemiSky:new Q("#9a7ea6"),hemiGround:new Q("#7a5b48"),hemiIntensity:1.02,bounceColor:new Q("#d88c5e"),bounceIntensity:.34,horizonColor:new Q("#d67f58"),fogDensity:.0017,exposure:1.06,interiorExposure:1.18,dustColor:new Q("#df9974"),dustOpacity:.18,stormBase:0,heatHaze:.1,sandTint:new Q("#e4c6ae"),bakedAmbient:new Q("#866e7e"),bakedSunTint:new Q("#ffa870")},4:{id:4,key:"night",name:"المرحلة ٤ • البيت المهجور ليلاً",timeLabel:"١٠:٤٠ ليلاً",sunIcon:"☽",sunElevDeg:34,sunAzimDeg:-152,skyMode:3,sunColor:new Q("#9cc2f2"),sunIntensity:.62,hemiSky:new Q("#283f68"),hemiGround:new Q("#1c1b24"),hemiIntensity:.64,bounceColor:new Q("#344e78"),bounceIntensity:.18,horizonColor:new Q("#0f1a2e"),fogDensity:.0031,exposure:1.06,interiorExposure:1.18,dustColor:new Q("#7a92b8"),dustOpacity:.13,stormBase:0,heatHaze:0,sandTint:new Q("#a4b6ce"),bakedAmbient:new Q("#425475"),bakedSunTint:new Q("#a8c8f2")}},xn={sandTintNoon:new Q("#f4e8d2"),sandTintAsr:new Q("#eccba2"),mesaBase:new Q("#c4a17b"),mesaStrataDark:new Q("#94724f"),adobeWall:new Q("#d0be9f"),ceilingPlaster:new Q("#d9ceb9"),weatheredWood:new Q("#8b6d4e"),horizonNoon:new Q("#e6d7bc"),horizonAsr:new Q("#dfa770"),horizonSunset:new Q("#c96a48"),horizonNight:new Q("#0c1424"),horizonStorm:new Q("#c89258")},Ri={uSkyMode:{value:0},uStorm:{value:0},uHorizonColor:{value:xn.horizonNoon.clone()},uShadowFadeCenter:{value:new L(0,0,0)}};function ti(s,t={}){const e=t.saturation??.94,n=t.contrast??1.03,i=t.aerialStrength??0,r=t.aerialStart??55,o=t.aerialEnd??240,a=s.onBeforeCompile;return s.onBeforeCompile=(l,c)=>{a&&a(l,c),l.uniforms.uGradeHorizon=Ri.uHorizonColor,l.uniforms.uGradeStorm=Ri.uStorm,i>.001&&(l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
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
          float _apMix = clamp(_apF * (${i.toFixed(3)} + uGradeStorm * 0.36), 0.0, 0.86);
          float _apLuma = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
          vec3 _apDesat = mix(gl_FragColor.rgb, vec3(_apLuma), _apF * 0.32);
          gl_FragColor.rgb = mix(_apDesat, uGradeHorizon, _apMix);
        `:"";l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
${h}`).replace("#include <tonemapping_fragment>",`
        {
          float _luma = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
          gl_FragColor.rgb = mix(vec3(_luma), gl_FragColor.rgb, ${e.toFixed(3)});
          gl_FragColor.rgb = (gl_FragColor.rgb - 0.5) * ${n.toFixed(3)} + 0.5;
          gl_FragColor.rgb = max(gl_FragColor.rgb, vec3(0.0));
          ${d}
        }
        #include <tonemapping_fragment>
        `)},s.customProgramCacheKey=()=>`desert_grade_v5_${e}_${n}_${i}_${s.name||""}`,s}const Fr=`
  varying vec3 vWorldDir;
  void main() {
    vWorldDir = position;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
  }
`,tc=`
  uniform vec3 uSunDir;
  uniform float uSkyMode; // 0=Noon, 1=Afternoon, 2=Sunset/Dusk, 3=Night
  uniform float uTime;
  uniform float uStorm;
  uniform float uCloudOctaves;
  uniform vec3 uHorizonColor;

  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  vec3 hash33(vec3 p) {
    p = fract(p * vec3(0.1031, 0.1030, 0.0973));
    p += dot(p, p.yxz + 33.33);
    return fract((p.xxy + p.yxx) * p.zyx);
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

  float hgPhase(float cosTheta, float g) {
    float g2 = g * g;
    float denom = max(0.001, 1.0 + g2 - 2.0 * g * cosTheta);
    return (1.0 - g2) / (4.0 * 3.14159265 * pow(denom, 1.5));
  }

  // Analytical crisp twinkling star layer on unit sphere cube-grid
  vec3 evalStarLayer(vec3 dir, float scale, float threshold, float brightness, float timeVal) {
    vec3 p = dir * scale;
    vec3 cell = floor(p);
    vec3 f = fract(p) - 0.5;
    vec3 rnd = hash33(cell);
    if (rnd.x < threshold) return vec3(0.0);
    vec3 offset = (rnd - 0.5) * 0.58;
    float d = length(f - offset);
    float core = smoothstep(0.16, 0.015, d);
    float twinkle = 0.72 + 0.28 * sin(timeVal * (1.8 + rnd.y * 3.8) + rnd.z * 62.8);
    // Natural star temperatures (warm gold -> pure white -> pale blue-white)
    vec3 starCol = mix(vec3(1.0, 0.86, 0.68), vec3(0.76, 0.88, 1.0), rnd.y);
    return starCol * core * brightness * twinkle;
  }

  // Luminous Milky Way galaxy band + dust lanes arching over the Arabian desert
  vec3 evalMilkyWay(vec3 dir, float nightWeight) {
    if (nightWeight < 0.01 || dir.y < -0.05) return vec3(0.0);
    // Arch diagonally right across the northern desert sky above the Abandoned House!
    vec3 galNormal = normalize(vec3(0.76, -0.58, -0.29));
    vec3 galRight  = normalize(cross(vec3(0.0, 1.0, 0.0), galNormal));
    vec3 galUp     = normalize(cross(galNormal, galRight));

    float lat = dot(dir, galNormal);
    float lon = atan(dot(dir, galUp), dot(dir, galRight));

    float band = exp(-lat * lat * 15.0);
    float coreMask = exp(-lat * lat * 42.0) * (0.58 + 0.42 * cos(lon * 1.0 + 0.3));

    vec2 gUV = vec2(lon * 2.4, lat * 6.2);
    float neb1 = fbmClouds(gUV + vec2(1.4, 3.1), 4);
    float neb2 = fbmClouds(gUV * 2.3 - vec2(4.2, 0.8), 3);
    float dustLane = smoothstep(0.36, 0.68, fbmClouds(gUV * 1.9 + vec2(7.3, 2.2), 3));

    float glow = band * smoothstep(0.26, 0.84, neb1) * (1.0 - dustLane * 0.52);
    float fineCloud = coreMask * smoothstep(0.34, 0.84, neb2) * (1.0 - dustLane * 0.40);

    vec3 outerCol = vec3(0.14, 0.22, 0.42);
    vec3 coreCol  = vec3(0.50, 0.44, 0.58);
    vec3 mw = outerCol * glow * 0.85 + coreCol * fineCloud * 1.05;

    float horizonFade = smoothstep(0.02, 0.28, dir.y);
    return mw * horizonFade * nightWeight;
  }

  // Razor-sharp Crescent Moon + subtle lunar halo
  vec3 evalCrescentMoon(vec3 dir, vec3 moonDir, float nightWeight) {
    if (nightWeight < 0.01) return vec3(0.0);
    vec3 mDir = normalize(moonDir);
    vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), mDir));
    vec3 up = normalize(cross(mDir, right));

    float cosA = dot(dir, mDir);
    // Soft atmospheric lunar halo
    float halo = pow(max(0.0, cosA), 28.0) * 0.16 + pow(max(0.0, cosA), 240.0) * 0.35;
    vec3 res = vec3(0.45, 0.62, 0.92) * halo;

    if (cosA > 0.994) {
      // Local tangent plane coordinates around moon center
      vec3 delta = dir - mDir * cosA;
      vec2 mp = vec2(dot(delta, right), dot(delta, up));
      float moonR = 0.0245;
      float dMain = length(mp);
      float outerDisc = smoothstep(moonR + 0.0014, moonR - 0.0014, dMain);

      // Offset shadow sphere carves a sharp Arabian crescent (هلال)!
      vec2 shadowOffset = vec2(0.0125, 0.0085);
      float dShadow = length(mp - shadowOffset);
      float shadowCut = smoothstep(moonR * 0.90 - 0.0014, moonR * 0.90 + 0.0014, dShadow);

      float crescent = outerDisc * shadowCut;
      // Subtle earthshine on dark side of moon disc
      float earthshine = outerDisc * (1.0 - shadowCut) * 0.045;
      vec3 moonCol = vec3(1.55, 1.50, 1.38) * crescent + vec3(0.24, 0.32, 0.48) * earthshine;
      res += moonCol * smoothstep(-0.02, 0.05, dir.y);
    }

    return res * nightWeight;
  }

  vec3 evalProceduralSky(vec3 dir, bool includeCelestial) {
    vec3 sunDir = normalize(uSunDir);
    float y = dir.y;
    float sunCos = dot(dir, sunDir);

    // Compute smooth blend weights across the 4 stages: 0=Noon, 1=Asr, 2=Sunset, 3=Night
    float m = clamp(uSkyMode, 0.0, 3.0);
    float wNoon   = max(0.0, 1.0 - m);
    float wAsr    = max(0.0, 1.0 - abs(m - 1.0));
    float wSunset = max(0.0, 1.0 - abs(m - 2.0));
    float wNight  = max(0.0, m - 2.0);
    float dayWeight = 1.0 - wNight;

    // Zenith, Mid, and Horizon Belt colors per diurnal phase (linear HDR)
    vec3 zenithCol =
      vec3(0.028, 0.135, 0.44) * wNoon +
      vec3(0.045, 0.095, 0.24) * wAsr +
      vec3(0.024, 0.026, 0.095) * wSunset +
      vec3(0.004, 0.008, 0.024) * wNight;

    vec3 midCol =
      vec3(0.16, 0.36, 0.66) * wNoon +
      vec3(0.29, 0.24, 0.27) * wAsr +
      vec3(0.22, 0.095, 0.16) * wSunset +
      vec3(0.009, 0.016, 0.042) * wNight;

    vec3 beltCol =
      vec3(0.68, 0.60, 0.45) * wNoon +
      vec3(0.82, 0.39, 0.13) * wAsr +
      vec3(0.95, 0.24, 0.06) * wSunset +
      vec3(0.016, 0.028, 0.056) * wNight;

    vec3 skyCol = mix(beltCol, midCol, smoothstep(0.0, 0.28, max(y, 0.0)));
    skyCol = mix(skyCol, zenithCol, smoothstep(0.14, 0.82, max(y, 0.0)));

    // Daytime & Sunset solar scattering
    if (dayWeight > 0.01) {
      float azimGlow = pow(max(0.0, sunCos), mix(3.2, 2.2, wSunset)) * smoothstep(0.58, -0.05, y);
      vec3 warmTint =
        vec3(0.96, 0.74, 0.40) * wNoon +
        vec3(1.12, 0.42, 0.08) * wAsr +
        vec3(1.38, 0.28, 0.04) * wSunset;
      float azimStrength = 0.12 * wNoon + 0.58 * wAsr + 0.95 * wSunset;
      skyCol += warmTint * azimGlow * azimStrength * (1.0 - uStorm * 0.75) * dayWeight;

      float mieTight = hgPhase(sunCos, 0.84);
      float mieWide  = hgPhase(sunCos, 0.40);
      vec3 sunCol =
        vec3(1.0, 0.92, 0.76) * wNoon +
        vec3(1.05, 0.48, 0.14) * wAsr +
        vec3(1.22, 0.32, 0.06) * wSunset;
      float mieScale = (1.0 - uStorm * 0.80) * smoothstep(-0.08, 0.05, y) * dayWeight;
      skyCol += sunCol * (mieTight * 0.20 + mieWide * 0.34) * mieScale;

      if (includeCelestial) {
        float sunRadius = mix(0.99962, 0.99920, wSunset);
        float disc = smoothstep(sunRadius - 0.00022, sunRadius + 0.00014, sunCos);
        float limb = pow(clamp((sunCos - sunRadius) / (1.0 - sunRadius + 0.0001), 0.0, 1.0), 0.45);
        vec3 discCol = mix(vec3(1.0, 0.96, 0.86), vec3(1.25, 0.42, 0.09), clamp(wAsr * 0.65 + wSunset, 0.0, 1.0)) * (2.6 + limb * 3.4);
        float sunVis = (1.0 - smoothstep(0.15, 0.82, uStorm)) * smoothstep(-0.02, 0.015, y) * dayWeight;
        skyCol += discCol * disc * sunVis;
      }
    }

    // Starry Night + Milky Way + Crescent Moon (also faint twilight stars in Sunset Stage 3!)
    float starVis = clamp(wNight + wSunset * 0.22 * smoothstep(0.28, 0.72, y), 0.0, 1.0);
    if (starVis > 0.01 && y > 0.01) {
      skyCol += evalMilkyWay(dir, wNight);
      if (includeCelestial) {
        float horizonMask = smoothstep(0.03, 0.25, y);
        vec3 stars = vec3(0.0);
        stars += evalStarLayer(dir, 58.0, 0.91, 1.65, uTime);
        stars += evalStarLayer(dir, 115.0, 0.86, 0.95, uTime * 0.8 + 1.7);
        stars += evalStarLayer(dir, 195.0, 0.82, 0.48, uTime * 0.5 + 3.1);
        skyCol += stars * horizonMask * starVis;
      }
    }

    if (includeCelestial && wNight > 0.01) {
      skyCol += evalCrescentMoon(dir, sunDir, wNight);
    }

    // Procedural Desert Clouds (Day/Asr/Sunset; faint moonlit wisps at Night)
    int oct = int(uCloudOctaves + 0.5);
    if (y > 0.02 && oct >= 1 && wNight < 0.92) {
      vec2 cloudUV = dir.xz / (y + 0.22);
      vec2 windDrift = vec2(uTime * 0.0042, uTime * 0.0016);

      vec2 warp = vec2(
        vnoise(cloudUV * 0.65 + windDrift * 0.7),
        vnoise(cloudUV * 0.65 + vec2(4.2, 1.9) + windDrift * 0.5)
      );
      vec2 cirrusUV = cloudUV * vec2(0.55, 1.15) + warp * 0.55 + windDrift;
      float nCirrus = fbmClouds(cirrusUV, oct);
      float nPuff = fbmClouds(cloudUV * 1.15 - windDrift * 0.8 + warp * 0.25, max(2, oct - 1));
      float cloudDensity = smoothstep(0.56, 0.83, nCirrus) * 0.62
                         + smoothstep(0.64, 0.86, nPuff) * 0.32;

      float horizonFade = smoothstep(0.04, 0.26, y);
      cloudDensity = clamp(cloudDensity * horizonFade * (1.0 - uStorm * 0.85) * dayWeight, 0.0, 0.74);

      float sunHighlight = pow(max(0.0, sunCos), 5.0);
      float selfShade = smoothstep(0.15, 0.75, nPuff);

      vec3 cLit =
        vec3(0.92, 0.90, 0.84) * wNoon +
        vec3(1.04, 0.58, 0.22) * wAsr +
        vec3(1.18, 0.34, 0.14) * wSunset;
      vec3 cShd =
        vec3(0.38, 0.48, 0.62) * wNoon +
        vec3(0.25, 0.17, 0.20) * wAsr +
        vec3(0.12, 0.075, 0.15) * wSunset;

      vec3 cloudCol = mix(cShd, cLit, 0.52 + 0.48 * (1.0 - selfShade));
      cloudCol += cLit * sunHighlight * (0.24 * wNoon + 0.55 * wAsr + 0.85 * wSunset);
      skyCol = mix(skyCol, cloudCol, cloudDensity);
    }

    // Light Canyon Dust Gust Haze
    if (uStorm > 0.001) {
      float stormHeight = smoothstep(0.85, -0.05, y);
      float stormMix = clamp(uStorm * (0.52 + 0.42 * stormHeight), 0.0, 0.92);
      vec3 stormZenith = uHorizonColor * vec3(0.86, 0.82, 0.77);
      vec3 stormSky = mix(uHorizonColor, stormZenith, clamp(y, 0.0, 1.0));
      skyCol = mix(skyCol, stormSky, stormMix);
    }

    // Seamless Horizon Melt into FogExp2
    float horizonBlend = smoothstep(0.13 + uStorm * 0.14, -0.015, y);
    skyCol = mix(skyCol, uHorizonColor, horizonBlend);

    if (y < 0.0) {
      vec3 groundBounce = uHorizonColor * mix(vec3(0.62, 0.54, 0.44), vec3(0.38, 0.42, 0.52), wNight);
      skyCol = mix(uHorizonColor, groundBounce, smoothstep(0.0, -0.35, y));
    }

    return skyCol;
  }
`,fl=`
  ${tc}
  varying vec3 vWorldDir;
  void main() {
    vec3 skyCol = evalProceduralSky(normalize(vWorldDir), true);
    gl_FragColor = vec4(skyCol, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,qm=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,Ym=`
  ${tc}
  varying vec2 vUv;
  const float PI = 3.14159265359;
  void main() {
    float lon = (vUv.x - 0.5) * (2.0 * PI);
    float lat = (vUv.y - 0.5) * PI;
    float clat = cos(lat);
    vec3 dir = vec3(clat * cos(lon), sin(lat), clat * sin(lon));
    vec3 col = evalProceduralSky(dir, false);
    gl_FragColor = vec4(clamp(col * 0.5, 0.0, 1.0), 1.0);
  }
`,Zm=`
  uniform sampler2D uSkyCache;
  uniform vec3 uSunDir;
  uniform float uSkyMode;
  uniform float uTime;
  uniform float uStorm;
  varying vec3 vWorldDir;

  const float INV_TWO_PI = 0.15915494309189535;
  const float INV_PI = 0.3183098861837907;

  vec3 hash33(vec3 p) {
    p = fract(p * vec3(0.1031, 0.1030, 0.0973));
    p += dot(p, p.yxz + 33.33);
    return fract((p.xxy + p.yxx) * p.zyx);
  }

  vec3 evalStarMobile(vec3 dir, float scale, float threshold, float brightness) {
    vec3 p = dir * scale;
    vec3 cell = floor(p);
    vec3 f = fract(p) - 0.5;
    vec3 rnd = hash33(cell);
    if (rnd.x < threshold) return vec3(0.0);
    float d = length(f - (rnd - 0.5) * 0.55);
    float core = smoothstep(0.17, 0.02, d);
    vec3 starCol = mix(vec3(1.0, 0.88, 0.70), vec3(0.76, 0.88, 1.0), rnd.y);
    return starCol * core * brightness;
  }

  void main() {
    vec3 dir = normalize(vWorldDir);
    float u = atan(dir.z, dir.x) * INV_TWO_PI + 0.5;
    float v = clamp(asin(clamp(dir.y, -1.0, 1.0)) * INV_PI + 0.5, 0.002, 0.998);

    vec3 skyCol = texture2D(uSkyCache, vec2(u, v)).rgb * 2.0;

    float m = clamp(uSkyMode, 0.0, 3.0);
    float wNight = max(0.0, m - 2.0);
    float wSunset = max(0.0, 1.0 - abs(m - 2.0));
    float dayWeight = 1.0 - wNight;
    vec3 sDir = normalize(uSunDir);
    float sunCos = dot(dir, sDir);

    if (dayWeight > 0.01) {
      float sunRadius = mix(0.99962, 0.99920, wSunset);
      float disc = smoothstep(sunRadius - 0.00022, sunRadius + 0.00014, sunCos);
      float limb = pow(clamp((sunCos - sunRadius) / (1.0 - sunRadius + 0.0001), 0.0, 1.0), 0.45);
      vec3 discCol = mix(vec3(1.0, 0.96, 0.86), vec3(1.25, 0.42, 0.09), clamp(m * 0.5, 0.0, 1.0)) * (2.6 + limb * 3.4);
      float sunVis = (1.0 - smoothstep(0.15, 0.82, uStorm)) * smoothstep(-0.02, 0.015, dir.y) * dayWeight;
      skyCol += discCol * disc * sunVis;
    }

    if (wNight > 0.01 && dir.y > 0.01) {
      float hm = smoothstep(0.03, 0.25, dir.y);
      skyCol += evalStarMobile(dir, 62.0, 0.91, 1.55) * hm * wNight;
      skyCol += evalStarMobile(dir, 125.0, 0.87, 0.85) * hm * wNight;

      // Crisp Crescent Moon
      vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), sDir));
      vec3 up = normalize(cross(sDir, right));
      skyCol += vec3(0.45, 0.62, 0.92) * (pow(max(0.0, sunCos), 30.0) * 0.16 + pow(max(0.0, sunCos), 240.0) * 0.34) * wNight;
      if (sunCos > 0.994) {
        vec3 delta = dir - sDir * sunCos;
        vec2 mp = vec2(dot(delta, right), dot(delta, up));
        float moonR = 0.0245;
        float outerDisc = smoothstep(moonR + 0.0014, moonR - 0.0014, length(mp));
        float shadowCut = smoothstep(moonR * 0.90 - 0.0014, moonR * 0.90 + 0.0014, length(mp - vec2(0.0125, 0.0085)));
        skyCol += vec3(1.55, 1.50, 1.38) * (outerDisc * shadowCut) * wNight;
      }
    }

    gl_FragColor = vec4(skyCol, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;class jm{constructor(t,e){this.scene=t,this.renderer=e,this.useCache=!1,this.useIBL=!0,this.uniforms={uSunDir:{value:new L(.2,.9,-.35).normalize()},uSkyMode:{value:0},uTime:{value:0},uStorm:{value:0},uCloudOctaves:{value:4},uHorizonColor:{value:xn.horizonNoon.clone()}};const n=new Gi(960,28,18);this._realtimeMat=new Re({side:Se,depthWrite:!1,fog:!1,uniforms:this.uniforms,vertexShader:Fr,fragmentShader:fl}),this._skyCacheRT=new On(512,256,{minFilter:$e,magFilter:$e,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1}),this._skyCacheRT.texture.wrapS=Bn,this._skyCacheRT.texture.wrapT=Fn,this._cacheScene=new Ma,this._cacheCam=new Za(-1,1,1,-1,0,1),this._cacheQuad=new Et(new Oe(2,2),new Re({depthTest:!1,depthWrite:!1,uniforms:this.uniforms,vertexShader:qm,fragmentShader:Ym})),this._cacheScene.add(this._cacheQuad),this._cachedMat=new Re({side:Se,depthWrite:!1,fog:!1,uniforms:{uSkyCache:{value:this._skyCacheRT.texture},uSunDir:this.uniforms.uSunDir,uSkyMode:this.uniforms.uSkyMode,uTime:this.uniforms.uTime,uStorm:this.uniforms.uStorm},vertexShader:Fr,fragmentShader:Zm}),this.mesh=new Et(n,this._realtimeMat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-10,this.scene.add(this.mesh),this._cacheTimer=999,this._lastCacheMode=-999,this._lastCacheStorm=-999,this._pmrem=null,this._envScene=null,this._envRT=null,this._lastBakeMode=-999,this._lastBakeStorm=-999,this._bakeCooldown=0}_ensureIBLScene(){if(this._pmrem)return;this._pmrem=new Ea(this.renderer),this._pmrem.compileCubemapShader(),this._envScene=new Ma;const t={uSunDir:this.uniforms.uSunDir,uSkyMode:this.uniforms.uSkyMode,uTime:{value:0},uStorm:this.uniforms.uStorm,uCloudOctaves:{value:2},uHorizonColor:this.uniforms.uHorizonColor},e=new Et(new Gi(20,14,10),new Re({side:Se,depthWrite:!1,fog:!1,uniforms:t,vertexShader:Fr,fragmentShader:fl}));this._envScene.add(e)}setQualityOptions({cloudOctaves:t=4,useSkyCache:e=!1,useIBL:n=!0}){this.uniforms.uCloudOctaves.value=t,this.useCache=!!e,this.mesh.material=this.useCache?this._cachedMat:this._realtimeMat,this.useCache&&(this._cacheTimer=999,this.bakeSkyCache()),this.useIBL=!!n,this.useIBL?this._envRT||this.bakeIBL(this.uniforms.uSkyMode.value,this.uniforms.uStorm.value):(this.scene.environment=null,this._envRT&&(this._envRT.dispose(),this._envRT=null))}bakeSkyCache(){const t=this.renderer.getRenderTarget(),e=this.renderer.toneMapping;this.renderer.toneMapping=yn,this.renderer.setRenderTarget(this._skyCacheRT),this.renderer.render(this._cacheScene,this._cacheCam),this.renderer.setRenderTarget(t),this.renderer.toneMapping=e,this._cacheTimer=0,this._lastCacheMode=this.uniforms.uSkyMode.value,this._lastCacheStorm=this.uniforms.uStorm.value}computeHorizonColor(t,e,n){const i=De[t]||De[1];return n.copy(i.horizonColor),e>.001&&n.lerp(xn.horizonStorm,ne.clamp(e*.72,0,.85)),n}update(t,e,n,i,r,o,a){if(this.mesh.position.copy(n),this.uniforms.uSunDir.value.copy(i),this.uniforms.uSkyMode.value=r,this.uniforms.uTime.value=e,this.uniforms.uStorm.value=a,this.computeHorizonColor(o,a,this.uniforms.uHorizonColor.value),this.useCache){this._cacheTimer+=t;const l=Math.abs(r-this._lastCacheMode),c=Math.abs(a-this._lastCacheStorm);(this._cacheTimer>=1.2||l>.02||c>.03)&&this.bakeSkyCache()}if(this.useIBL){this._bakeCooldown=Math.max(0,this._bakeCooldown-t);const l=Math.abs(r-this._lastBakeMode),c=Math.abs(a-this._lastBakeStorm);this._bakeCooldown<=0&&(l>.05||c>.08||!this._envRT)&&(this.bakeIBL(r,a),this._bakeCooldown=.65)}}bakeIBL(t,e){if(!this.useIBL)return;this._ensureIBLScene(),this._lastBakeMode=t,this._lastBakeStorm=e;const n=this._envRT;this._envRT=this._pmrem.fromScene(this._envScene,.04,.1,100),this.scene.environment=this._envRT.texture,n&&n.dispose()}}class $m{constructor(t,e,n){this.scene=t,this.renderer=e,this.settings=n,this.stageId=1,this.skyMode=0,this.stormIntensity=0,this.sunDirection=new L(.2,.9,-.35).normalize(),this.glareAmount=0,this.targetExposure=.96,this.currentExposure=.96,this.cutsceneGlareBoost=0,this._tmpVec=new L,this._camDir=new L,this._lastShadowFocus=new L(9999,9999,9999),this._lastShadowSun=new L,this._shadowCooldown=0,this._forceShadowUpdate=!0,this._shadowFrustumHalf=28,this.shadowUpdatesCount=0,this._lastGlareVisible=!1,this._lastGlareOp="",this._lastGlareX=-999,this._lastGlareY=-999,this._lastHazeOp="",this._iblCompensation=0,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0,this.proceduralSky=new jm(this.scene,this.renderer),this._createLights(),this._createFog(),this.glareEl=document.getElementById("sun-glare-layer"),this.heatHazeEl=document.getElementById("heat-haze-layer"),this.glareEl&&this.glareEl.classList.add("hidden"),this.applyStage(1,!0)}_createLights(){this.sunLight=new Bo("#fff7e6",3),this.sunLight.castShadow=!Ht;const t=Ht?512:2048;this.sunLight.shadow.mapSize.set(t,t),this.sunLight.shadow.camera.near=2,this.sunLight.shadow.camera.far=165;const e=this._shadowFrustumHalf;this.sunLight.shadow.camera.left=-e,this.sunLight.shadow.camera.right=e,this.sunLight.shadow.camera.top=e,this.sunLight.shadow.camera.bottom=-e,this.sunLight.shadow.bias=-45e-5,this.sunLight.shadow.normalBias=.025,this.sunLight.shadow.radius=Ht?1.4:2.6,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target),this.hemiLight=new qh("#8ec0eb","#cfa879",1.05),this.scene.add(this.hemiLight),this.sandBounceLight=new Bo("#ebd0a2",.42),this.sandBounceLight.position.set(-25,12,30),this.scene.add(this.sandBounceLight)}_createFog(){this.fog=new za(De[1].horizonColor.getHex(),.0021),this.scene.fog=this.fog}applySettings(t,e){const n=!!t.shadows&&e.shadows!==!1&&!t.batterySaver;this.sunLight.castShadow=n,this.renderer.shadowMap.enabled=n,n&&this.sunLight.shadow.mapSize.x!==e.shadowMapSize&&(this.sunLight.shadow.mapSize.set(e.shadowMapSize,e.shadowMapSize),this.sunLight.shadow.map&&(this.sunLight.shadow.map.dispose(),this.sunLight.shadow.map=null)),this.proceduralSky.setQualityOptions({cloudOctaves:e.cloudOctaves??3,useSkyCache:!!e.useSkyCache,useIBL:!!e.useIBL}),this._iblCompensation=e.useIBL?0:.18,this._applyAtmosphere(this.stageId,this.stormIntensity),this._forceShadowUpdate=!0}applyStage(t,e=!0){const n=De[t]?t:1;this.stageId=n;const i=De[n];this.skyMode=i.skyMode,this.stormIntensity=i.stormBase||0,this._applyAtmosphere(n,this.stormIntensity),e&&(this.currentExposure=i.exposure,this.targetExposure=i.exposure,this.renderer.toneMappingExposure=i.exposure,this.proceduralSky.uniforms.uSunDir.value.copy(this.sunDirection),this.proceduralSky.uniforms.uSkyMode.value=this.skyMode,this.proceduralSky.uniforms.uStorm.value=this.stormIntensity,this.proceduralSky.computeHorizonColor(n,this.stormIntensity,this.proceduralSky.uniforms.uHorizonColor.value),this.proceduralSky.useCache&&this.proceduralSky.bakeSkyCache(),this.proceduralSky.bakeIBL(this.skyMode,this.stormIntensity),this._forceShadowUpdate=!0)}setStormIntensity(t,e=!1){const n=Math.max(0,Math.min(1,t)),i=Math.abs(n-this.stormIntensity)>.004;this.stormIntensity=n,(i||e)&&this._applyAtmosphere(this.stageId,this.stormIntensity),e&&(this.proceduralSky.uniforms.uStorm.value=n,this.proceduralSky.useCache&&this.proceduralSky.bakeSkyCache(),this.proceduralSky.bakeIBL(this.skyMode,this.stormIntensity))}_applyAtmosphere(t,e){const n=De[t]||De[1];this.skyMode=n.skyMode;const i=ne.degToRad(n.sunElevDeg),r=ne.degToRad(n.sunAzimDeg);this.sunDirection.set(Math.cos(i)*Math.sin(r),Math.sin(i),Math.cos(i)*Math.cos(r)).normalize(),this.proceduralSky.computeHorizonColor(t,e,this.fog.color),this.fog.density=ne.lerp(n.fogDensity,.022,Math.pow(e,1.35)),Ri.uSkyMode.value=this.skyMode,Ri.uStorm.value=e,Ri.uHorizonColor.value.copy(this.fog.color),this.sunLight.color.copy(n.sunColor),this.sunLight.intensity=n.sunIntensity*(1-e*.45),this.hemiLight.color.copy(n.hemiSky),this.hemiLight.groundColor.copy(n.hemiGround);const o=t===4?0:this._iblCompensation;if(this.hemiLight.intensity=n.hemiIntensity+o+e*.28,this.scene.environmentIntensity=t===4?.22:.52*(1-e*.18),this.sandBounceLight.color.copy(n.bounceColor),this.sandBounceLight.intensity=n.bounceIntensity*(1-e*.4),this.sandBounceLight.position.set(-this.sunDirection.x*50,18,-this.sunDirection.z*50),this.glareEl&&(t===3?(this.glareEl.style.setProperty("--sun-r","255"),this.glareEl.style.setProperty("--sun-g","128"),this.glareEl.style.setProperty("--sun-b","64")):t===2?(this.glareEl.style.setProperty("--sun-r","255"),this.glareEl.style.setProperty("--sun-g","194"),this.glareEl.style.setProperty("--sun-b","122")):(this.glareEl.style.setProperty("--sun-r","255"),this.glareEl.style.setProperty("--sun-g","240"),this.glareEl.style.setProperty("--sun-b","204"))),this.heatHazeEl){const a=(n.heatHaze*(1-e*.65)).toFixed(2);a!==this._lastHazeOp&&(this._lastHazeOp=a,this.heatHazeEl.style.opacity=a)}}getAtmosphere(){return De[this.stageId]||De[1]}update(t,e,n,i,r){const o=this.getAtmosphere();this.proceduralSky.update(t,e,n.position,this.sunDirection,this.skyMode,this.stageId,this.stormIntensity);const a=i.x,l=i.y,c=i.z;if(Ri.uShadowFadeCenter.value.set(a,l,c),this.sunLight.castShadow&&this.renderer.shadowMap.enabled){this._shadowCooldown=Math.max(0,this._shadowCooldown-t);const _=(a-this._lastShadowFocus.x)*(a-this._lastShadowFocus.x)+(c-this._lastShadowFocus.z)*(c-this._lastShadowFocus.z),m=this._lastShadowSun.distanceToSquared(this.sunDirection),f=Ht?2.25:.64;(this._forceShadowUpdate||this._shadowCooldown<=0&&(_>f||m>1e-4))&&(this._forceShadowUpdate=!1,this._shadowCooldown=Ht?.35:.1,this._lastShadowFocus.set(a,l,c),this._lastShadowSun.copy(this.sunDirection),this.sunLight.target.position.set(a,l,c),this.sunLight.position.set(a+this.sunDirection.x*65,l+Math.max(12,this.sunDirection.y*65),c+this.sunDirection.z*65),this.renderer.shadowMap.needsUpdate=!0,this.shadowUpdatesCount++)}n.getWorldDirection(this._camDir);const h=this._camDir.dot(this.sunDirection),d=this.settings.data.sunFlare&&!this.settings.data.batterySaver&&this.stageId<4;let u=0;if(d&&!r&&h>.44&&this.stormIntensity<.72){const _=this.stageId===3?.75:.85;u=Math.pow((h-.44)/.56,2.3)*(1-this.stormIntensity)*_,this._tmpVec.copy(n.position).addScaledVector(this.sunDirection,400).project(n);const m=Math.round((this._tmpVec.x*.5+.5)*200)*.5,f=Math.round((-this._tmpVec.y*.5+.5)*200)*.5;this.glareEl&&(m!==this._lastGlareX||f!==this._lastGlareY)&&(this._lastGlareX=m,this._lastGlareY=f,this.glareEl.style.setProperty("--sun-x",`${m}%`),this.glareEl.style.setProperty("--sun-y",`${f}%`))}const p=Math.min(1,u+this.cutsceneGlareBoost);if(this.glareAmount+=(p-this.glareAmount)*Math.min(1,t*6.5),this.glareEl){const _=this.glareAmount>.012;if(_!==this._lastGlareVisible&&(this._lastGlareVisible=_,this.glareEl.classList.toggle("hidden",!_)),_){const m=this.glareAmount.toFixed(2);m!==this._lastGlareOp&&(this._lastGlareOp=m,this.glareEl.style.opacity=m)}}const g=r?o.interiorExposure:o.exposure;this.targetExposure=g+this.cutsceneGlareBoost*.55-u*.1,this.currentExposure+=(this.targetExposure-this.currentExposure)*Math.min(1,t*3),this.renderer.toneMappingExposure=this.currentExposure}}function an(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new pe;let c=0;for(let h=0;h<s.length;++h){const d=s[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p])}if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const d=[];for(let u=0;u<s.length;++u){const p=s[u].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(const h in r){const d=pl(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const p=[];for(let _=0;_<o[h].length;++_)p.push(o[h][_][u]);const g=pl(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function pl(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Qt(o,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let u=0,p=h.count;u<p;u++)for(let g=0;g<e;g++){const _=h.getComponent(u,g);a.setComponent(u+d,g,_)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}class Km{constructor(t,e,n,i,r,o=0,a=-68,l=0){this.parentGroup=t,this.tex=e,this.models=n,this.physics=i,this.getHeight=r,this.centerX=o,this.centerZ=a,this.baseY=l,this.group=new Ze,this.group.position.set(o,l,a),this.parentGroup.add(this.group),this.awningTimeUniform={value:0},this.windTurbine=null,this.windVane=null,this.lanternLights=[],this.beaconSprite=null,this.sanctuaryInteractable=null,this._createMaterials(),this._buildMainEstate(),this._buildCourtyardWalls(),this._buildGrandAwning(),this._buildWindVaneTower(),this._buildInteriorSanctuary(),this._buildBackCourtyardAndWell(),this._optimizeStaticBatches()}_createMaterials(){const t=this.tex.loadPBRSet("adobe_wall",1,1);this.adobeMat=Ht?new _e({map:t.map,normalMap:t.normalMap,normalScale:new vt(.5,.5),vertexColors:!0,color:15128252}):new In({map:t.map,normalMap:t.normalMap,normalScale:new vt(.5,.5),roughness:.93,metalness:.02,vertexColors:!0,color:15128252}),this.adobeMat.name="adobe_wall_v5",this.adobeMat.onBeforeCompile=l=>{l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vAdobeWorldPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vAdobeWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vAdobeWorldPos;`).replace("#include <color_fragment>",`#include <color_fragment>
           float _al = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
           diffuseColor.rgb = mix(vec3(_al), diffuseColor.rgb, 0.62) * 1.28 + vec3(0.025, 0.02, 0.015);
           float groundDust = smoothstep(0.95, 0.02, vAdobeWorldPos.y);
           diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.32, 0.25, 0.17), groundDust * 0.36);`)},ti(this.adobeMat,{saturation:.88,contrast:1.03}),this.ceilingMat=new _e({color:xn.ceilingPlaster,vertexColors:!0});const e=this.tex.loadPBRSet("desert_wood",1.6,1);this.woodMat=Ht?new _e({map:e.map,color:12099456}):new In({map:e.map,normalMap:e.normalMap,normalScale:new vt(.85,.85),roughness:.88,metalness:.03,color:12099456});const n=this.tex.loadPBRSet("rusted_metal",1.5,1.5);this.metalMat=new In({map:n.map,normalMap:Ht?null:n.normalMap,roughness:.76,metalness:.42,color:10259576});const i=this.tex.loadPBRSet("floor_tiles",4.8,4);this.floorMat=Ht?new _e({map:i.map,normalMap:i.normalMap,normalScale:new vt(.82,.82),vertexColors:!0,color:12759702}):new In({map:i.map,normalMap:i.normalMap,normalScale:new vt(.85,.85),roughness:.9,metalness:.02,vertexColors:!0,color:12759702}),ti(this.floorMat,{saturation:.88,contrast:1.03});const r=this.tex.loadPBRSet("tattered_fabric",2.4,2);this.fabricMat=new _e({map:r.map,side:Ee,color:13153432}),this.fabricMat.onBeforeCompile=l=>{l.uniforms.uTime=this.awningTimeUniform,l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
           transformed.y += sin(uTime * 2.2 + position.x * 1.7 + position.z * 1.4) * 0.032;`)},this.rugMat=new _e({color:16777215}),this.rugMat.onBeforeCompile=l=>{l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vRugUv;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vRugUv = uv;`),l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vRugUv;`).replace("#include <color_fragment>",`#include <color_fragment>
           vec2 p = vRugUv;
           vec2 c = abs(p - 0.5) * 2.0;
           float weave = 0.92 + 0.08 * sin(p.x * 240.0) * sin(p.y * 160.0);
           vec3 colCrimson = vec3(0.30, 0.06, 0.035);
           vec3 colCream   = vec3(0.56, 0.47, 0.34);
           vec3 colOchre   = vec3(0.45, 0.26, 0.08);
           vec3 colCharcoal= vec3(0.06, 0.052, 0.048);
           vec3 col = colCrimson;
           float outerBorder = step(0.84, max(c.x, c.y));
           float innerBorder = step(0.74, max(c.x, c.y)) * (1.0 - outerBorder);
           col = mix(col, colCharcoal, outerBorder * 0.85);
           col = mix(col, colCream, innerBorder);
           vec2 tile = fract(vec2(p.x * 5.0, p.y * 3.0)) - 0.5;
           float diamond = abs(tile.x) + abs(tile.y);
           if (max(c.x, c.y) < 0.74) {
             col = mix(col, colCream, smoothstep(0.42, 0.38, diamond));
             col = mix(col, colOchre, smoothstep(0.29, 0.25, diamond));
             col = mix(col, colCharcoal, smoothstep(0.14, 0.10, diamond));
           }
           diffuseColor.rgb = col * weave;`)};const o=this.tex.loadPBRSet("sandstone_rock",2,2);this.stoneMat=new _e({map:o.map,color:11968644});const a=this.tex.loadPBRSet("sand",2,2);this.sandDriftMat=new _e({map:a.map,color:14469800}),this.darkMetalMat=new In({color:3879209,roughness:.68,metalness:.65}),this.lanternGlowMat=new bn({color:16762990})}_addBox(t,e,n,i,r,o,a=!0,l=this.adobeMat,c=!0,h=null){const d=l===this.adobeMat?$l(i,r,o,{bottomAO:.54,topAO:.92,cornerAO:.2,tileScale:1.45}):new fe(i,r,o),u=new Et(d,l);if(u.position.set(t,e,n),u.castShadow=c,u.receiveShadow=!0,this.group.add(u),a){const p=this.centerX+t,g=this.centerZ+n;this.physics.addBoxCollider(p-i*.5,p+i*.5,g-o*.5,g+o*.5,this.baseY+e-r*.5,this.baseY+e+r*.5,h)}return u}_buildMainEstate(){const n=new fe(14.8,.24,12.2,8,1,8),i=n.attributes.position,r=new Float32Array(i.count*3);for(let m=0;m<i.count;m++){const f=i.getX(m),x=i.getZ(m),y=Math.max(Math.abs(f)/7.4,Math.abs(x)/6.1),v=Math.max(0,1-Math.abs(f+2.3)/1.35)*(x<1.2||x>3.2?.24:.06),C=Math.max(0,1-Math.abs(f-2.6)/1.35)*(x<1.2||x>3.2?.24:.06),w=Math.pow(Math.max(0,y-.62)/.38,1.6)*.42,T=ne.clamp(1-w-v-C,.48,1);r[m*3]=T,r[m*3+1]=T*.985,r[m*3+2]=T*.96}n.setAttribute("color",new Qt(r,3));const o=new Et(n,this.floorMat);o.position.set(0,.04,0),o.receiveShadow=!0,this.group.add(o),this.physics.addFloorZone(this.centerX-7.3,this.centerX+7.3,this.centerZ-6,this.centerZ+6.4,this.baseY+.16,"stone"),this.physics.addInteriorZone(this.centerX-7.1,this.centerX+7.1,this.centerZ-5.9,this.centerZ+5.9,this.baseY-.5,this.baseY+4.6);const a=new Et(new fe(3.4,.18,1.6),this.stoneMat);a.position.set(0,.05,6.85),a.receiveShadow=!0,this.group.add(a),this._addBox(-6.5,4.35/2,6.1,2.2,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(-2.3,4.35/2,6.1,2.2,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(-4.4,.65,6.1,2,1.3,.56,!0,this.adobeMat,!0,!1),this._addBox(-4.4,3.55,6.1,2,1.6,.56,!1),this._addBox(-4.4,1.32,6.1,2.1,.11,.64,!1,this.woodMat),this._addBox(-4.4,2.74,6.1,2.1,.11,.64,!1,this.woodMat),this._addBox(2.3,4.35/2,6.1,2.2,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(6.5,4.35/2,6.1,2.2,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(4.4,.65,6.1,2,1.3,.56,!0,this.adobeMat,!0,!1),this._addBox(4.4,3.55,6.1,2,1.6,.56,!1),this._addBox(4.4,1.32,6.1,2.1,.11,.64,!1,this.woodMat),this._addBox(4.4,2.74,6.1,2.1,.11,.64,!1,this.woodMat),this._addBox(0,3.68,6.1,2.5,1.35,.56,!1),this._addBox(0,2.98,6.1,2.75,.18,.66,!1,this.woodMat),this._addBox(-1.22,1.48,6.1,.14,2.96,.6,!1,this.woodMat),this._addBox(1.22,1.48,6.1,.14,2.96,.6,!1,this.woodMat);const l=new Et(new fe(1.05,2.75,.08),this.woodMat);l.position.set(-1.12,1.52,5.45),l.rotation.y=1.18,this.group.add(l),this._addBox(-7.45,4.35*.48,6.15,.78,4.35*.96,.78,!1),this._addBox(7.45,4.35*.48,6.15,.78,4.35*.96,.78,!1),this._addBox(-7.45,4.35*.48,-6.15,.78,4.35*.96,.78,!1),this._addBox(7.45,4.35*.48,-6.15,.78,4.35*.96,.78,!1),this._addBox(-4.35,4.35/2,-6.1,6.5,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(4.35,4.35/2,-6.1,6.5,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(0,3.65,-6.1,2.3,1.4,.56,!1),this._addBox(0,2.92,-6.1,2.5,.16,.64,!1,this.woodMat),this._addBox(-7.35,4.35/2,3.85,.56,4.35,4.9,!0,this.adobeMat,!0,!1),this._addBox(-7.35,4.35/2,-3.85,.56,4.35,4.9,!0,this.adobeMat,!0,!1),this._addBox(-7.35,.65,0,.56,1.3,2.8,!0,this.adobeMat,!0,!1),this._addBox(-7.35,3.55,0,.56,1.6,2.8,!1),this._addBox(-7.35,1.32,0,.66,.12,2.9,!1,this.woodMat),this._addBox(-7.35,2.75,0,.66,.12,2.9,!1,this.woodMat),this._addBox(7.35,4.35/2,3.6,.56,4.35,5.4,!0,this.adobeMat,!0,!1),this._addBox(7.35,4.35/2,-3.6,.56,4.35,5.4,!0,this.adobeMat,!0,!1),this._addBox(7.35,.9,0,.56,1.8,1.8,!0,this.adobeMat,!0,!1),this._addBox(7.35,3.65,0,.56,1.4,1.8,!1),this._addBox(-2.3,4.35/2,-2.5,.42,4.35,7,!0,this.adobeMat,!0,!1),this._addBox(-2.3,4.35/2,4.75,.42,4.35,2.6,!0,this.adobeMat,!0,!1),this._addBox(-2.3,3.65,2.2,.42,1.4,2.6,!1),this._addBox(-2.3,2.92,2.2,.5,.14,2.5,!1,this.woodMat),this._addBox(2.6,4.35/2,-2.5,.42,4.35,7,!0,this.adobeMat,!0,!1),this._addBox(2.6,4.35/2,4.75,.42,4.35,2.6,!0,this.adobeMat,!0,!1),this._addBox(2.6,3.65,2.2,.42,1.4,2.6,!1),this._addBox(2.6,2.92,2.2,.5,.14,2.5,!1,this.woodMat),this._addBox(0,4.46,0,15.2,.3,12.6,!1);const c=new Oe(14.6,12,6,6),h=c.attributes.position,d=new Float32Array(h.count*3);for(let m=0;m<h.count;m++){const f=Math.max(Math.abs(h.getX(m))/7.3,Math.abs(h.getY(m))/6),x=ne.clamp(1-Math.pow(Math.max(0,f-.55)/.45,1.5)*.38,.58,1);d[m*3]=x,d[m*3+1]=x*.98,d[m*3+2]=x*.95}c.setAttribute("color",new Qt(d,3));const u=new Et(c,this.ceilingMat);u.rotation.x=Math.PI/2,u.position.set(0,4.29,0),this.group.add(u),this._addBox(-4.2,4.88,6.1,6.4,.56,.38,!1),this._addBox(4.4,4.82,6.1,6,.46,.38,!1),this._addBox(-7.4,4.88,0,.38,.56,12.6,!1),this._addBox(7.4,4.82,-1.2,.38,.44,10,!1),this._addBox(0,4.92,-6.1,15.2,.62,.38,!1);const p=new je(.11,.12,16.4,5);p.rotateZ(Math.PI/2);for(let m=-4.8;m<=4.8;m+=1.9){const f=new Et(p,this.woodMat);f.position.set(0,4.16,m),this.group.add(f)}this._addBox(-2.4,5.9,-2,5.6,2.6,4.8,!1),this._addBox(-2.4,7.35,-4.25,5.6,.36,.32,!1),[{x:-.2,y:.1,z:5.1,sx:2,sy:.28,sz:2.3},{x:-6.4,y:.12,z:-5.1,sx:1.7,sy:.34,sz:1.7},{x:6.3,y:.12,z:5,sx:1.5,sy:.3,sz:1.6}].forEach(m=>{const f=new cs(1,1,8);f.scale(m.sx,m.sy,m.sz);const x=new Et(f,this.sandDriftMat);x.position.set(m.x,m.y,m.z),this.group.add(x)});const g=new Oe(21,18);g.rotateX(-Math.PI/2);const _=new Et(g,new bn({map:this.tex.createContactShadowTexture(),transparent:!0,depthWrite:!1,opacity:.56,polygonOffset:!0,polygonOffsetFactor:-2}));_.position.set(0,.03,.4),this.group.add(_)}_buildCourtyardWalls(){this._addBox(-5.6,.95,10.2,6.8,1.9,.48,!0,this.adobeMat,!0,!0),this._addBox(5.6,.85,10.2,6.8,1.7,.48,!0,this.adobeMat,!0,!0),this._addBox(-2.25,1.45,10.2,.72,2.9,.72,!0,this.adobeMat,!0,!1),this._addBox(2.25,1.35,10.2,.72,2.7,.72,!0,this.adobeMat,!0,!1),this._addBox(0,2.85,10.2,5.2,.22,.42,!1,this.woodMat),this._addBox(-8.9,.85,8.2,.46,1.7,4.2,!0,this.adobeMat,!0,!0),this._addBox(8.9,.75,8.2,.46,1.5,4.2,!0,this.adobeMat,!0,!0)}_buildGrandAwning(){[[-6.6,9],[-3.8,9],[-1.5,9],[1.6,9]].forEach(([n,i])=>{const r=new Et(new je(.1,.12,2.85,5),this.woodMat);r.position.set(n,1.42,i),this.group.add(r),this.physics.addCylinderCollider(this.centerX+n,this.centerZ+i,.22,this.baseY+3)}),this._addBox(-2.5,2.82,9,8.5,.16,.16,!1,this.woodMat);for(let n=-6.4;n<=1.6;n+=1.3){const i=new Et(new fe(.1,.11,3.1),this.woodMat);i.position.set(n,3.08,7.6),i.rotation.x=.18,this.group.add(i)}const t=new Oe(8.2,3,8,4);t.rotateX(-Math.PI/2+.18);const e=t.attributes.position;for(let n=0;n<e.count;n++)e.setY(n,e.getY(n)+Math.abs(Math.sin(e.getX(n)*1.1))*-.16);t.computeVertexNormals(),this.awningCloth=new Et(t,this.fabricMat),this.awningCloth.position.set(-2.5,3.12,7.55),this.group.add(this.awningCloth)}_buildWindVaneTower(){const t=new Ze;t.position.set(3.8,4.6,-2.4);const e=7.4;[[-.75,-.75],[.75,-.75],[-.75,.75],[.75,.75]].forEach(([o,a])=>{const l=new Et(new je(.045,.07,e,5),this.metalMat);l.position.set(o*.5,e*.5,a*.5),l.rotation.z=o>0?.095:-.095,l.rotation.x=a>0?-.095:.095,t.add(l)}),this.windVane=new Ze,this.windVane.position.set(0,e+.2,0);const n=new fe(2.1,.06,.06);n.translate(.45,0,0);const i=new fe(1.05,.72,.04);i.translate(1.42,.05,0),this.windVane.add(new Et(an([n,i],!1),this.metalMat)),n.dispose(),i.dispose();const r=[];for(let o=0;o<8;o++){const a=o/8*Math.PI*2,l=new fe(.03,1,.2),c=new Ot;c.makeRotationFromEuler(new Ue(a,.32,0)),c.setPosition(0,Math.cos(a)*.62,Math.sin(a)*.62),l.applyMatrix4(c),r.push(l)}this.windTurbine=new Et(an(r,!1),this.metalMat),r.forEach(o=>o.dispose()),this.windTurbine.position.set(-.58,0,0),this.windVane.add(this.windTurbine),t.add(this.windVane),this.group.add(t)}_createGlowingLantern(t,e,n,i=5.5,r=16){const o=new Ze;o.position.set(t,e,n);const a=this.models?.createMesh("lantern",.16);a&&o.add(a);const l=new Et(new Gi(.07,8,8),this.lanternGlowMat);l.position.y=.24,o.add(l);const c=new Wl(16754504,i,r,1.55);return c.position.set(0,.34,0),o.add(c),this.lanternLights.push({light:c,baseIntensity:i,phase:Math.random()*6.28}),this.group.add(o),o}_buildInteriorSanctuary(){const t=new Et(new Oe(3.8,2.6),this.rugMat);t.rotation.x=-Math.PI/2,t.position.set(.1,.175,1.4),t.receiveShadow=!0,this.group.add(t);const e=this.models?.getGeometry("crate"),n=this.models?.getMaterial("crate");if(e&&n){const c=new nn(e,n,2),h=new re;h.position.set(1.35,.16,-4.65),h.rotation.set(0,.28,0),h.scale.setScalar(1.32),h.updateMatrix(),c.setMatrixAt(0,h.matrix),h.position.set(-3.2,.02,7.6),h.rotation.set(0,.1,0),h.scale.setScalar(1.12),h.updateMatrix(),c.setMatrixAt(1,h.matrix),c.instanceMatrix.needsUpdate=!0,this.group.add(c)}this.physics.addBoxCollider(this.centerX+.7,this.centerX+2,this.centerZ-5.1,this.centerZ-4.2,this.baseY+.16,this.baseY+.88,!0);const i=this.models?.createMesh("table",1.85);i?(i.position.set(.1,.16,-2),this.group.add(i)):this._addBox(.1,.56,-2,1.6,.8,.9,!1,this.woodMat),this.physics.addBoxCollider(this.centerX-.85,this.centerX+1.05,this.centerZ-2.5,this.centerZ-1.5,this.baseY+.16,this.baseY+.96,!0),this._createGlowingLantern(.1,.9,-2,8.5,19),this.sanctuaryInteractable={id:"sanctuary_lantern",label:"تأمل المصباح المضيء",worldPos:new L(this.centerX+.1,this.baseY+1.18,this.centerZ-2),radius:4},this._createGlowingLantern(1.75,2.38,6.55,10.5,24);const r=this._createGlowSpriteTexture(),o=new ka({map:r,color:16757586,transparent:!0,opacity:.88,blending:as,depthWrite:!1,fog:!1});this.beaconSprite=new Gl(o),this.beaconSprite.position.set(1.75,2.65,6.65),this.beaconSprite.scale.set(2.8,2.8,1),this.group.add(this.beaconSprite);const a=this.models?.createMesh("table",2.2);a&&(a.position.set(-5.35,.16,-.4),this.group.add(a)),this.physics.addBoxCollider(this.centerX-6.45,this.centerX-4.25,this.centerZ-.98,this.centerZ+.18,this.baseY+.16,this.baseY+1.06,!0);const l=this.models?.createMesh("chair",.58);l&&(l.position.set(-4.65,.16,.78),l.rotation.y=-2.4,this.group.add(l)),this._createGlowingLantern(-5.65,1.04,-.45,4.2,12),this._addBox(5.2,.6,-4.4,2.4,.92,1.05,!0,this.woodMat,!1,!0),this._addBox(6.4,1.3,1.8,.85,2.25,1.9,!0,this.metalMat,!1,!1)}_buildBackCourtyardAndWell(){const t=this.models?.getGeometry("barrel"),e=this.models?.getMaterial("barrel")||this.metalMat,n=[[8.3,2.2,.72],[8.6,1.15,.72],[-8.3,4.4,.72],[5.8,-7.8,.72]];if(t){const p=new nn(t,e,n.length),g=new re;n.forEach(([_,m,f],x)=>{const y=this.getHeight(this.centerX+_,this.centerZ+m)-this.baseY;g.position.set(_,y,m),g.rotation.set(0,x*1.1,0),g.scale.setScalar(f),g.updateMatrix(),p.setMatrixAt(x,g.matrix),this.physics.addCylinderCollider(this.centerX+_,this.centerZ+m,.42,this.baseY+y+1.15)}),p.instanceMatrix.needsUpdate=!0,this.group.add(p)}const i=-6.8,r=-10.4,o=this.getHeight(this.centerX+i,this.centerZ+r)-this.baseY,a=new Ze;a.position.set(i,o,r);const l=new Et(new je(1.3,1.42,1.05,10,1,!0),this.stoneMat);l.position.y=.5;const c=new Et(new Ha(1.22,10),new bn({color:328710}));c.rotation.x=-Math.PI/2,c.position.y=.42;const h=new Et(new fe(.14,2.3,.14),this.woodMat);h.position.set(-1.26,1.15,0);const d=new Et(new fe(.14,1.85,.14),this.woodMat);d.position.set(1.26,.92,0),d.rotation.z=-.15;const u=new Et(new je(.06,.06,2.7,5),this.woodMat);u.rotation.z=Math.PI/2-.12,u.position.set(0,2.02,0),a.add(l,c,h,d,u),this.group.add(a),this.physics.addCylinderCollider(this.centerX+i,this.centerZ+r,1.5,this.baseY+o+1.8)}_createGlowSpriteTexture(){const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d"),i=n.createRadialGradient(64/2,64/2,1,64/2,64/2,64/2);i.addColorStop(0,"rgba(255, 246, 215, 1.0)"),i.addColorStop(.22,"rgba(255, 186, 86, 0.72)"),i.addColorStop(.58,"rgba(235, 128, 38, 0.22)"),i.addColorStop(1,"rgba(200, 90, 20, 0.0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const r=new Ti(e);return r.colorSpace=Me,r}_optimizeStaticBatches(){const t=new Set([this.adobeMat,this.woodMat,this.metalMat,this.stoneMat,this.sandDriftMat]),e=new Set([this.awningCloth,this.windVane,this.windTurbine]),n=a=>{let l=a;for(;l&&l!==this.group;){if(e.has(l))return!0;l=l.parent}return!1};this.group.updateMatrixWorld(!0);const i=new Ot().copy(this.group.matrixWorld).invert(),r=new Map,o=[];this.group.traverse(a=>{if(!a.isMesh||a.isInstancedMesh||!t.has(a.material)||n(a))return;const l=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone(),c=new Ot().multiplyMatrices(i,a.matrixWorld);l.applyMatrix4(c);const h=new pe;h.setAttribute("position",l.attributes.position.clone()),l.attributes.normal&&h.setAttribute("normal",l.attributes.normal.clone()),l.attributes.uv&&h.setAttribute("uv",l.attributes.uv.clone()),a.material.vertexColors&&(l.attributes.color?h.setAttribute("color",l.attributes.color.clone()):h.setAttribute("color",new Qt(new Float32Array(l.attributes.position.count*3).fill(1),3))),l.dispose(),r.has(a.material)||r.set(a.material,[]),r.get(a.material).push(h),o.push(a)});for(const[a,l]of r.entries()){if(l.length<2){l.forEach(h=>h.dispose());continue}const c=an(l,!1);if(l.forEach(h=>h.dispose()),c){const h=new Et(c,a);h.castShadow=a===this.adobeMat||a===this.woodMat,h.receiveShadow=!0,this.group.add(h)}}for(const a of o){const l=r.get(a.material);l&&l.length>=2&&a.parent&&(a.parent.remove(a),a.geometry.dispose())}}getSanctuaryInteractable(){return this.sanctuaryInteractable}update(t,e,n){this.awningTimeUniform.value=e,this.windTurbine&&(this.windTurbine.rotation.x+=t*(1.2+Math.sin(e*.5)*.35)),this.windVane&&(this.windVane.rotation.y=.35+Math.sin(e*.32)*.18);for(let i=0;i<this.lanternLights.length;i++){const r=this.lanternLights[i],o=.9+.08*Math.sin(e*6.8+r.phase)+.04*Math.sin(e*15.2+r.phase*2.1);r.light.intensity=r.baseIntensity*o}if(this.beaconSprite&&n){const i=Math.hypot(n.x-(this.centerX+1.75),n.z-(this.centerZ+6.65)),r=ne.clamp(.9+i*.042,.9,8.5),o=.92+.08*Math.sin(e*5.2);this.beaconSprite.scale.set(r*o,r*o,1)}}dispose(t,e){this.beaconSprite?.material?.map&&this.beaconSprite.material.map.dispose(),Kl(this.group,t,e),this.parentGroup.remove(this.group),this.lanternLights.length=0}}const Un={1:{id:1,title:"سهول السراب المفتوحة",subtitle:"الظهر • رُجُم حجرية وسبخة متشققة",timeLabel:"١٢:٣٠ ظهراً",objective:"اتبع الرُّجُم الحجرية عبر السبخة نحو مدخل الوادي",startPos:{x:0,z:114,yaw:0,pitch:-.02},goalPos:{x:6,z:-116},goalRadius:9.5,whispers:[{distZ:108,text:"شمس الظهيرة تصهر الأفق... سأتبع هذه الرُّجُم الحجرية شمالاً."},{distZ:28,text:"أرض سبخة متشققة تحت قدميّ... كأن بحيرة قديمة جفّت هنا منذ قرون."},{distZ:-64,text:"البوابة الصخرية تلوح في الأفق... هناك وادٍ ضيق خلف هذه الكثبان."}]},2:{id:2,title:"وادي الصخور والتضاريس",subtitle:"العصر • جروف طبقية ونخيل وأطلال وهبّة غبار",timeLabel:"٣:٥٠ عصراً",objective:"اعبر وادي الصخور والأطلال نحو ممر الصعود للجبل",startPos:{x:oe(118),z:118,yaw:0,pitch:-.02},goalPos:{x:oe(-122),z:-122},goalRadius:9.5,whispers:[{distZ:112,text:"ظلال العصر تطول بين هذه الجروف الطبقية... والغبار يهبّ بهدوء."},{distZ:46,text:"أطلال قديمة نصف مدفونة في الرمل... من سكن هذا الوادي يوماً؟"},{distZ:-8,text:"نخيل يصمد وسط العطش... الطريق يضيق ويرتفع نحو الجبل."}]},3:{id:3,title:"قمة جبل السراب",subtitle:"الغروب والشفق • إطلالة على بحر الكثبان وبصيص نور بعيد",timeLabel:"٦:١٢ مغرباً",objective:"اصعد إلى قمة الجبل وتأمل بحر الكثبان والضوء البعيد",startPos:{x:ni(106),z:106,yaw:0,pitch:.04},goalPos:{x:ni(-102),z:-102},goalRadius:4.5,whispers:[{distZ:98,text:"الريح تشتد كلما ارتفعت... والشمس تغوص في الشفق."},{distZ:12,text:"بحر لا ينتهي من الكثبان يتمدد أسفل الجبل... المنظر يخطف الأنفاس."},{distZ:-62,text:"أرى بصيص نور دافئ يلمع بعيداً وسط الكثبان في الأسفل... هناك بيت مهجور!"}]},4:{id:4,title:"البيت المهجور تحت النجوم",subtitle:"الليل • سماء النجوم والمجرة والهلال — اضغط F أو زر الكشاف",timeLabel:"١٠:٤٠ ليلاً",objective:"اقترب من البيت المهجور تحت النجوم واستكشفه بالكشاف",startPos:{x:-4,z:122,yaw:.02,pitch:-.02},goalPos:{x:Jn+.1,z:Dn-2},goalRadius:4,whispers:[{distZ:116,text:"حلّ الليل وتلألأت المجرة والهلال... سأشعل الكشاف وأسير نحو ذلك الضوء."},{distZ:34,text:"أصوات صراصير الليل والنسيم البارد... نور البيت يقترب."},{distZ:-44,text:"وصلت أخيراً إلى البيت المهجور... مصباح مشتعل ينتظرني في الداخل."}]}};class Jm{constructor(t,e,n,i,r,o){this.scene=t,this.tex=e,this.models=n,this.physics=i,this.sky=r,this.settings=o,this.currentStageId=0,this.stageGroup=null,this.getHeight=ul(1),this.getNormal=dl(this.getHeight),this.abandonedHouse=null,this.palmTimeUniform={value:0},this.palmStormUniform={value:0},this.dustUniforms=null,this.dustPoints=null,this.hawks=[],this.hawkInst=null,this.beaconSprite=null,this.goalRingMesh=null,this.stormIntensity=0,this._dummy=new re,this._faunaAccum=0,this._baseDustCount=200,this._dustMaxCount=300}getStageMeta(t=this.currentStageId){return Un[t]||Un[1]}disposeCurrentStage(){const{geometries:t,materials:e}=this.models.getSharedSets();this.abandonedHouse&&(this.abandonedHouse.dispose(t,e),this.abandonedHouse=null),this.beaconSprite?.material?.map&&this.beaconSprite.material.map.dispose(),this.beaconSprite=null,this.goalRingMesh=null,this.dustPoints=null,this.dustUniforms=null,this.hawkInst=null,this.hawks.length=0,this.stageGroup&&(Kl(this.stageGroup,t,e),this.scene.remove(this.stageGroup),this.stageGroup=null),this.physics.clear()}loadStage(t){this.disposeCurrentStage();const e=Un[t]?t:1;this.currentStageId=e,this.stageGroup=new Ze,this.stageGroup.name=`stage_${e}`,this.scene.add(this.stageGroup),this.sky.applyStage(e,!0),this.stormIntensity=De[e].stormBase||0,this.getHeight=ul(e),this.getNormal=dl(this.getHeight);const n=Wm(e,this.getHeight);let i={type:"box",minX:-145,maxX:145,minZ:-145,maxZ:145},r=.94;e===2?(i={type:"corridor",minZ:-132,maxZ:132,centerXFn:oe,halfWidthFn:l=>Ci(l)+2.5},r=.88):e===3?(i={type:"corridor",minZ:-112,maxZ:118,centerXFn:ni,halfWidthFn:l=>Ta(l)-.5},r=.85):e===4&&(i={type:"box",minX:-115,maxX:115,minZ:-115,maxZ:142}),this.physics.configureStage({heightSampler:this.getHeight,surfaceSampler:n,bounds:i,maxSlope:r});const o=[],a=[];if(e===1?this._buildStage1Plains(o,a):e===2?this._buildStage2Canyon(o,a):e===3?this._buildStage3Summit(o,a):e===4&&this._buildStage4Night(o,a),this._buildStageTerrain(e,o),this._buildHorizonSkirt(e),a.length>0){const l=e===4?.52:.44,c=km(this.tex,a,this.getHeight,this.getNormal,l);c&&this.stageGroup.add(c)}if(this._createGPUDustParticles(e),e<4){const l=Un[e],c=this.getHeight(l.goalPos.x,l.goalPos.z);this._createGoalBeaconMarker(l.goalPos.x,c+2.4,l.goalPos.z,e)}return this.applySettings(this.settings.getPreset()),Un[e]}_buildStageTerrain(t,e){const n=Ks[t],i=new Oe(n.size,n.size,n.segments,n.segments);i.rotateX(-Math.PI/2);const r=i.attributes.position,o=new Float32Array(r.count);for(let d=0;d<r.count;d++){const u=r.getX(d),p=r.getZ(d),g=Qn(t,u,p);r.setY(d,g),t===1?o[d]=rs(u,p):t===2?o[d]=Ql(u,p):t===3?o[d]=Vm(u,p,g):o[d]=0}i.setAttribute("aBlend",new Qt(o,1)),i.computeVertexNormals();const a=t===4,l=t===3;zm(i,this.getHeight,this.sky.sunDirection,{occluders:e,sunStrength:a?.14:l?.24:.18,cavityStrength:t===2?.3:.22,warmBounce:a?[.95,.98,1.05]:l?[1.05,.94,.88]:[1.02,.99,.95],shadowTint:a?[.68,.74,.88]:l?[.66,.56,.72]:[.8,.74,.68]});const c=this._createStageTerrainMaterial(t),h=new Et(i,c);h.receiveShadow=!0,this.stageGroup.add(h)}_createStageTerrainMaterial(t){const e=De[t],n=t===3?72:64,i=this.tex.loadPBRSet("sand",n,n);let r=null,o=52;t===1?(r=this.tex.loadPBRSet("sabkha",56,56),o=56):t===2?(r=this.tex.loadPBRSet("canyon_floor",54,54),o=54):t===3&&(r=this.tex.loadPBRSet("canyon_floor",62,62),o=62);const l=Ht?new _e({map:i.map,normalMap:i.normalMap,normalScale:new vt(1.05,1.05),vertexColors:!0,color:e.sandTint}):new In({map:i.map,normalMap:i.normalMap,normalScale:new vt(1.08,1.08),roughness:.92,metalness:.02,vertexColors:!0,color:e.sandTint});return l.name=`terrain_stage_${t}`,l.onBeforeCompile=c=>{r&&(c.uniforms.uSecondMap={value:r.map},c.uniforms.uSecondNormal={value:r.normalMap},c.uniforms.uSecondRepeat={value:o}),c.uniforms.uStageId={value:t},c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
           attribute float aBlend;
           varying float vBlend;
           varying vec3 vTerrainWorldPos;
           varying vec2 vTerrainRawUv;`).replace("#include <uv_vertex>",`#include <uv_vertex>
           vBlend = aBlend;
           vTerrainRawUv = uv;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
           vTerrainWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`);const h=r?`uniform sampler2D uSecondMap;
           uniform sampler2D uSecondNormal;
           uniform float uSecondRepeat;`:"",d=r?`
          vec2 _uv2 = vTerrainRawUv * uSecondRepeat;
          vec3 _secCol = texture2D(uSecondMap, _uv2).rgb;
          // Stage 2 steep canyon walls get sedimentary horizontal strata bands!
          if (uStageId > 1.5 && uStageId < 2.5) {
            float wallGrad = smoothstep(5.5, 18.0, vTerrainWorldPos.y);
            float strata = sin(vTerrainWorldPos.y * 1.35 + sin(vTerrainWorldPos.x * 0.05 + vTerrainWorldPos.z * 0.05) * 1.4) * 0.5 + 0.5;
            vec3 strataCol = mix(vec3(0.42, 0.30, 0.21), vec3(0.68, 0.54, 0.39), strata);
            _secCol = mix(_secCol, strataCol, wallGrad * 0.72);
          }
          diffuseColor.rgb = mix(diffuseColor.rgb, _secCol, clamp(vBlend, 0.0, 1.0));
        `:"";c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
           ${h}
           uniform float uStageId;
           varying float vBlend;
           varying vec3 vTerrainWorldPos;
           varying vec2 vTerrainRawUv;`).replace("#include <map_fragment>",`#include <map_fragment>
           ${d}
           float _macro = sin(vTerrainWorldPos.x * 0.042 + vTerrainWorldPos.z * 0.036) * 0.5 + 0.5;
           diffuseColor.rgb *= mix(vec3(0.95, 0.91, 0.85), vec3(1.04, 1.0, 0.94), _macro);`),r&&(c.fragmentShader=c.fragmentShader.replace("#include <normal_fragment_maps>",`#ifdef USE_NORMALMAP_TANGENTSPACE
             vec3 _n1 = texture2D(normalMap, vNormalMapUv).xyz * 2.0 - 1.0;
             vec3 _n2 = texture2D(uSecondNormal, vTerrainRawUv * uSecondRepeat).xyz * 2.0 - 1.0;
             vec3 mapN = normalize(mix(_n1, _n2, clamp(vBlend, 0.0, 1.0)));
             mapN.xy *= normalScale;
             normal = normalize(tbn * mapN);
           #endif`))},ti(l,{saturation:t===4?.86:.93,contrast:1.03,aerialStrength:t===3?.38:0,aerialStart:95,aerialEnd:380}),l}_buildHorizonSkirt(t){const e=De[t],n=t===3?1850:1520,i=t===3?48:32,r=new Oe(n,n,i,i);r.rotateX(-Math.PI/2);const o=Ks[t].size*.48,a=r.attributes.position,l=new Float32Array(a.count*3);for(let u=0;u<a.count;u++){const p=a.getX(u),g=a.getZ(u),_=Math.max(Math.abs(p),Math.abs(g));let m;if(t===3){const x=Math.sin(p*.022+g*.017+Math.sin(g*.01)*1.4),y=Math.pow(1-Math.abs(x),1.15)*9.5+Math.sin(p*.009-g*.008)*6.5+Math.cos(p*.014+g*.012)*4.5+5;m=_<o?y-4:y}else if(m=Qn(t,p,g),_<o)m-=4;else{const x=Math.min(1,(_-o)/260);m+=(Math.sin(p*.008+g*.006)*18+Math.cos(p*.005-g*.009)*14)*x}a.setY(u,m);const f=ne.clamp(.9+m*.004,.78,1.06);l[u*3]=f,l[u*3+1]=f*.96,l[u*3+2]=f*.92}r.setAttribute("color",new Qt(l,3)),r.computeVertexNormals();const c=this.tex.loadPBRSet("sand",88,88),h=new _e({map:c.map,vertexColors:!0,color:e.sandTint});ti(h,{saturation:.85,contrast:1,aerialStrength:t===3?.56:.45,aerialStart:150,aerialEnd:620});const d=new Et(r,h);this.stageGroup.add(d)}_createCairnGeometry(){const t=[],e=[{y:.24,rx:.72,ry:.26,rz:.64,ox:0,oz:0,rot:.1},{y:.64,rx:.56,ry:.22,rz:.52,ox:.05,oz:-.04,rot:.8},{y:.98,rx:.42,ry:.19,rz:.39,ox:-.04,oz:.03,rot:1.6},{y:1.28,rx:.3,ry:.16,rz:.27,ox:.02,oz:.02,rot:2.3},{y:1.54,rx:.19,ry:.14,rz:.18,ox:-.01,oz:-.01,rot:.5}];for(const i of e){const r=new Wa(1,1),o=r.attributes.position;for(let a=0;a<o.count;a++){let l=o.getX(a),c=o.getY(a),h=o.getZ(a);const d=.88+.2*Math.sin(l*5.2+h*4.7)*Math.cos(c*3.8);l*=i.rx*d,c*=i.ry*d,h*=i.rz*d,o.setXYZ(a,l,c,h)}r.rotateY(i.rot),r.translate(i.ox,i.y,i.oz),r.computeVertexNormals(),qs(r,{bottomAO:.54,topLift:1.04,undersideAO:.28}),t.push(r)}const n=an(t,!1);return t.forEach(i=>i.dispose()),n}_placeStoneCairns(t,e,n){if(!t.length)return;const i=this._createCairnGeometry(),r=this.tex.loadPBRSet("sandstone_rock",2,2),o=new _e({map:r.map,normalMap:Ht?null:r.normalMap,normalScale:new vt(.75,.75),vertexColors:!0,color:15392972});ti(o,{saturation:.68,contrast:1.02});const a=new nn(i,o,t.length);a.castShadow=!Ht,a.receiveShadow=!0;const l=this._dummy;t.forEach((c,h)=>{const d=this.getHeight(c.x,c.z),u=c.scale??1;l.position.set(c.x,d-.08*u,c.z),l.rotation.set(0,c.ry??h*1.1,0),l.scale.setScalar(u),l.updateMatrix(),a.setMatrixAt(h,l.matrix),this.physics.addCylinderCollider(c.x,c.z,.72*u,d+1.65*u,!1),e.push({type:"circle",x:c.x,z:c.z,r:.85*u,pad:1.6,strength:.34}),n.push({x:c.x,z:c.z,sx:2.3*u,sz:2.3*u,ry:c.ry??0})}),a.instanceMatrix.needsUpdate=!0,this.stageGroup.add(a)}_createStratifiedMesaGeo(){const t=new je(.54,1.08,1,16,8,!1);t.translate(0,.5,0);const e=t.attributes.position;for(let n=0;n<e.count;n++){const i=e.getX(n),r=e.getY(n),o=e.getZ(n),a=Math.hypot(i,o);if(a>1e-5){const l=Math.atan2(o,i),c=Ys(l,r),h=1.08+(.54-1.08)*r,d=a>=h*.9?c/a:c/Math.max(.01,h);e.setXYZ(n,i*d,r,o*d)}}return t.computeVertexNormals(),qs(t,{bottomAO:.52,topLift:1.03,undersideAO:.25}),t}_placeStratifiedMesas(t,e,n,i=!0){if(!t.length)return;const r=this._createStratifiedMesaGeo(),o=this.tex.loadPBRSet("sandstone_rock",4,2),a=new _e({map:o.map,normalMap:Ht?null:o.normalMap,normalScale:new vt(.85,.85),vertexColors:!0,color:xn.mesaBase});a.name=`mesa_strata_s${n}`,a.onBeforeCompile=h=>{h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vMesaWorldPos;
varying float vMesaLocalY;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
           vMesaLocalY = position.y;
           vec4 _mw = vec4(transformed, 1.0);
           #ifdef USE_INSTANCING
             _mw = instanceMatrix * _mw;
           #endif
           vMesaWorldPos = (modelMatrix * _mw).xyz;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vMesaWorldPos;
varying float vMesaLocalY;`).replace("#include <color_fragment>",`#include <color_fragment>
           float _ml = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
           diffuseColor.rgb = mix(vec3(_ml), diffuseColor.rgb, 0.62);
           float bandCoord = vMesaWorldPos.y * 0.45 + sin(vMesaWorldPos.x * 0.03 + vMesaWorldPos.z * 0.025) * 0.75;
           float strata1 = sin(bandCoord * 3.2) * 0.5 + 0.5;
           float strata2 = sin(bandCoord * 9.0 + 1.3) * 0.5 + 0.5;
           vec3 paleLimestone = vec3(0.76, 0.65, 0.50);
           vec3 erodedOchre   = vec3(0.50, 0.37, 0.25);
           vec3 strataTint = mix(erodedOchre, paleLimestone, strata1 * 0.65 + strata2 * 0.35);
           diffuseColor.rgb *= mix(vec3(0.85), strataTint * 1.38, 0.72);
           // Base sand-dust blend + contact AO darkening where cliff meets ground
           float baseDust = smoothstep(0.26, 0.01, vMesaLocalY);
           diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.58, 0.48, 0.35), baseDust * 0.48);`)},ti(a,{saturation:.8,contrast:1.04,aerialStrength:n===2?.32:.48,aerialStart:60,aerialEnd:230});const l=new nn(r,a,t.length);l.castShadow=!Ht&&n===2,l.receiveShadow=!0;const c=this._dummy;t.forEach((h,d)=>{const u=h.y!==void 0?h.y:this.getHeight(h.x,h.z);c.position.set(h.x,u-4.5,h.z),c.rotation.set(0,h.ry||0,0),c.scale.set(h.sx,h.sy,h.sz),c.updateMatrix(),l.setMatrixAt(d,c.matrix),i&&this.physics.addMesaCollider(h.x,h.z,h.sx,h.sz,h.ry||0,u,h.sy),e.push({type:"circle",x:h.x,z:h.z,rx:h.sx*1.15,rz:h.sz*1.15,pad:4.5,strength:.42})}),l.instanceMatrix.needsUpdate=!0,this.stageGroup.add(l)}_placeScannedRocks(t,e,n){if(!t.length)return;const i=this.models.getGeometry("rock_07"),r=this.models.getMaterial("rock_07"),o=this.models.getGeometry("rock_09")||i,a=this.models.getMaterial("rock_09")||r;if(!i||!r)return;const l=t.filter(u=>(u.type||0)===0),c=t.filter(u=>(u.type||0)===1),h=this._dummy,d=(u,p,g,_)=>{if(!u.length)return;const m=new nn(p,g,u.length);m.castShadow=!Ht,m.receiveShadow=!0,u.forEach((f,x)=>{const y=this.getHeight(f.x,f.z),v=f.sy*.05;h.position.set(f.x,y-v,f.z),h.rotation.set(0,f.ry||0,0),h.scale.set(f.sx,f.sy,f.sz),h.updateMatrix(),m.setMatrixAt(x,h.matrix);const C=f.sx*.265,w=f.sz*.49,T=_===0?.44:.23,R=y-v+f.sy*T;this.physics.addEllipseCollider(f.x,f.z,C,w,f.ry||0,R,f.climbable!==!1),e.push({type:"circle",x:f.x,z:f.z,rx:C*1.05,rz:w*1.05,pad:1.8,strength:.36}),n.push({x:f.x,z:f.z,sx:C*2.15,sz:w*2.15,ry:f.ry||0})}),m.instanceMatrix.needsUpdate=!0,this.stageGroup.add(m)};d(l,i,r,0),d(c,o,a,1)}_placeDesertPalms(t,e,n){if(!t.length)return;const i=this.tex.loadPBRSet("desert_wood",1,3),r=new _e({map:i.map,vertexColors:!0,color:9335895}),o=new _e({color:5661754,side:Ee});o.onBeforeCompile=g=>{g.uniforms.uTime=this.palmTimeUniform,g.uniforms.uStorm=this.palmStormUniform,g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;
uniform float uStorm;`).replace("#include <begin_vertex>",`#include <begin_vertex>
           float tipDist = length(position.xz);
           float swayAmp = (0.042 + uStorm * 0.16) * tipDist;
           float swayFreq = 1.45 + uStorm * 2.8;
           float phase = instanceMatrix[3][0] * 0.3 + instanceMatrix[3][2] * 0.2;
           transformed.x += (sin(uTime * swayFreq + phase) + uStorm * 0.5) * swayAmp;
           transformed.y += cos(uTime * swayFreq * 0.85 + phase) * swayAmp * 0.5;`)};const a=[],l=12;for(let g=0;g<l;g++){const _=new Oe(.62,2.75,2,4),m=_.attributes.position;for(let x=0;x<m.count;x++){const v=(m.getY(x)+1.375)/2.75;m.setX(x,m.getX(x)*Math.sin(v*Math.PI)*1.18),m.setZ(x,-v*v*.8)}_.translate(0,1.375,0);const f=new Ot().makeRotationFromEuler(new Ue(.72+g%3*.22,g/l*Math.PI*2,0,"YXZ"));_.applyMatrix4(f),_.computeVertexNormals(),a.push(_)}const c=an(a,!1);a.forEach(g=>g.dispose());const h=new nn(c,o,t.length);h.castShadow=!Ht;const d=[],u=this._dummy;t.forEach((g,_)=>{const m=this.getHeight(g.x,g.z),f=new je(.14,.31,g.h,7,5),x=f.attributes.position;for(let w=0;w<x.count;w++){const T=(x.getY(w)+g.h*.5)/g.h;x.setX(w,x.getX(w)+T*T*g.h*g.lean)}f.translate(0,g.h*.5,0),qs(f,{bottomAO:.5,topLift:1,undersideAO:.1});const y=new Ot().makeRotationY(g.ry);y.setPosition(g.x,m-.12,g.z),f.applyMatrix4(y),f.computeVertexNormals(),d.push(f);const v=g.x+Math.cos(g.ry)*(g.h*g.lean),C=g.z-Math.sin(g.ry)*(g.h*g.lean);u.position.set(v,m+g.h-.22,C),u.rotation.set(0,g.ry,0),u.scale.set(1,1,1),u.updateMatrix(),h.setMatrixAt(_,u.matrix),this.physics.addCylinderCollider(g.x,g.z,.34,m+g.h,!1),e.push({type:"circle",x:g.x,z:g.z,r:.85,pad:2.2,strength:.32}),n.push({x:g.x,z:g.z,sx:2.8,sz:2.8,ry:g.ry})}),h.instanceMatrix.needsUpdate=!0;const p=new Et(an(d,!1),r);p.castShadow=!Ht,p.receiveShadow=!0,d.forEach(g=>g.dispose()),this.stageGroup.add(p,h)}_placeDesertShrubs(t){if(!t.length)return;const e=[];for(let a=0;a<6;a++){const l=a/6*Math.PI*2+.3,c=.48+a%2*.24,h=.44+a%3*.14,d=new cs(.032,h,3,1);d.translate(0,h*.5,0),d.rotateZ(c),d.rotateY(l),e.push(d)}const n=an(e,!1);e.forEach(a=>a.dispose());const i=new _e({color:7496003}),r=new nn(n,i,t.length),o=this._dummy;t.forEach((a,l)=>{const c=this.getHeight(a.x,a.z),h=a.scale??1;o.position.set(a.x,c-.04,a.z),o.rotation.set(0,a.ry??l,0),o.scale.set(h*1.2,h*.88,h*1.2),o.updateMatrix(),r.setMatrixAt(l,o.matrix)}),r.instanceMatrix.needsUpdate=!0,this.stageGroup.add(r)}_createSoaringHawks(t=0,e=24){const n=new bn({color:2497040,side:Ee}),i=new cs(.11,.72,4);i.rotateX(Math.PI/2);const r=i.toNonIndexed();i.dispose(),r.deleteAttribute("uv");const o=new pe;o.setAttribute("position",new Qt(new Float32Array([0,0,.16,1.22,.06,-.05,0,0,-.22]),3)),o.computeVertexNormals();const a=new pe;a.setAttribute("position",new Qt(new Float32Array([0,0,.16,-1.22,.06,-.05,0,0,-.22]),3)),a.computeVertexNormals();const l=an([r,o,a],!1);r.dispose(),o.dispose(),a.dispose(),this.hawkInst=new nn(l,n,4),this.hawkInst.frustumCulled=!1,this.stageGroup.add(this.hawkInst);for(let c=0;c<4;c++)this.hawks.push({centerX:c%2===0?-12:14,centerZ:t+(c-1.5)*38,radius:24+c*9,altitude:e+c*5,speed:.21+c*.035,phase:c*1.65})}_createGoalBeaconMarker(t,e,n,i){const r=i===3?16757606:16769174,o=new Et(new Xa(.45,.62,24),new bn({color:r,transparent:!0,opacity:.72,side:Ee,depthWrite:!1}));o.position.set(t,e,n),o.renderOrder=8,this.goalRingMesh=o,this.stageGroup.add(o)}_createGlowSpriteTexture(){const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d"),i=n.createRadialGradient(64/2,64/2,1,64/2,64/2,64/2);i.addColorStop(0,"rgba(255, 248, 220, 1.0)"),i.addColorStop(.24,"rgba(255, 186, 86, 0.78)"),i.addColorStop(.58,"rgba(235, 128, 38, 0.26)"),i.addColorStop(1,"rgba(200, 90, 20, 0.0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const r=new Ti(e);return r.colorSpace=Me,r}_buildStage1Plains(t,e){const n=[{x:2.5,z:96,scale:1.12,ry:.4},{x:-5.2,z:72,scale:1.05,ry:1.5},{x:4.5,z:48,scale:1.18,ry:2.2},{x:9.5,z:22,scale:1.02,ry:.8},{x:-3,z:-2,scale:1.24,ry:1.9},{x:8.8,z:-26,scale:1.08,ry:3.1},{x:1.8,z:-52,scale:1.15,ry:.6},{x:-4.2,z:-78,scale:1.12,ry:2.4},{x:5,z:-100,scale:1.28,ry:1.1},{x:-24,z:12,scale:.95,ry:.2},{x:28,z:-18,scale:.98,ry:2.7}];this._placeStoneCairns(n,t,e);const i=[{x:-11.5,z:-120,sx:11.5,sy:18,sz:10.5,ry:.5},{x:23.5,z:-118,sx:12,sy:19.5,sz:11,ry:1.7},{x:-128,z:-98,sx:44,sy:26,sz:32,ry:.4},{x:122,z:-110,sx:48,sy:28,sz:36,ry:2},{x:-136,z:34,sx:46,sy:24,sz:34,ry:2.5},{x:134,z:46,sx:42,sy:23,sz:32,ry:1.1}];this._placeStratifiedMesas(i,t,1,!0);const r=[{x:-9.5,z:102,sx:4.8,sy:2.4,sz:3.4,ry:.7,type:0},{x:11,z:86,sx:5.4,sy:2.8,sz:3.8,ry:2.1,type:1},{x:-16.5,z:54,sx:6.8,sy:3.6,sz:4.6,ry:1.2,type:0},{x:19.5,z:36,sx:5.8,sy:2.9,sz:4.2,ry:.3,type:1},{x:-28,z:-14,sx:7.4,sy:4,sz:5.2,ry:2.6,type:0},{x:26.5,z:-38,sx:6.2,sy:3.2,sz:4.4,ry:1.8,type:1},{x:-14.5,z:-68,sx:6.5,sy:3.4,sz:4.4,ry:.9,type:0},{x:18.2,z:-88,sx:7,sy:3.8,sz:4.8,ry:2.4,type:0}];let o=1051;const a=()=>((o=o*16807%2147483647)-1)/2147483646;for(let c=0;c<24;c++){const h=(a()-.5)*185,d=(a()-.5)*210;if(Math.abs(h)<12&&d>-115&&d<118||rs(h,d)>.55)continue;const u=2+a()*4.5;r.push({x:h,z:d,sx:u*1.1,sy:u*.7,sz:u*.9,ry:a()*6.28,type:c%2})}this._placeScannedRocks(r,t,e);const l=[];for(let c=0;c<42;c++){const h=(a()-.5)*160,d=(a()-.5)*210;rs(h,d)>.35||l.push({x:h,z:d,scale:.75+a()*.9,ry:a()*6.28})}this._placeDesertShrubs(l),this._createSoaringHawks(0,26)}_buildStage2Canyon(t,e){const n=[];for(let h=112;h>=-124;h-=20){const d=oe(h),u=Ci(h),p=this.getHeight(d,h);n.push({x:d-u-12.5-Math.sin(h*.13)*2.5,z:h+3,y:p-2.5,sx:15.5+Math.abs(h)%5,sy:38+Math.abs(h)*7%12,sz:14.5,ry:h*.17%6.28}),n.push({x:d+u+12.5+Math.cos(h*.11)*2.5,z:h-4,y:p-2.5,sx:16+(Math.abs(h)+2)%5,sy:40+Math.abs(h)*5%10,sz:15,ry:(h*.23+1.2)%6.28})}this._placeStratifiedMesas(n,t,2,!0);const i=[{x:oe(-4)-8.8,z:-4,h:6.8,lean:.16,ry:.5},{x:oe(-9)-11.2,z:-9,h:5.4,lean:.2,ry:1.4},{x:oe(-14)-7.5,z:-14,h:7.4,lean:.14,ry:.9},{x:oe(-18)-10.6,z:-18,h:5.9,lean:-.15,ry:2.3},{x:oe(-6)+9.4,z:-6,h:6.2,lean:-.18,ry:3.1},{x:oe(-15)+11,z:-15,h:7.1,lean:-.15,ry:2.6},{x:oe(-23)+8.6,z:-23,h:5.2,lean:.18,ry:4},{x:oe(44)+10.2,z:44,h:5.6,lean:-.16,ry:1.9},{x:oe(-62)-9.8,z:-62,h:6.1,lean:.17,ry:.8}];this._placeDesertPalms(i,t,e),this._buildCanyonRuins(t,e);const r=[{x:oe(96)+3.2,z:96,scale:1.05,ry:.4},{x:oe(18)-3.6,z:18,scale:1.12,ry:1.7},{x:oe(-40)+3.5,z:-40,scale:1.1,ry:2.5},{x:oe(-98)-2.8,z:-98,scale:1.22,ry:.9}];this._placeStoneCairns(r,t,e);const o=[];let a=2207;const l=()=>((a=a*16807%2147483647)-1)/2147483646;for(let h=108;h>=-114;h-=9.5){const d=oe(h),u=Ci(h);for(const p of[-1,1]){if(l()<.35)continue;const g=(6.8+l()*(u-7.5))*p,_=2.6+l()*3.8;o.push({x:d+g,z:h+(l()-.5)*4,sx:_*1.15,sy:_*.72,sz:_*.92,ry:l()*6.28,type:Math.floor(l()*2)})}}this._placeScannedRocks(o,t,e);const c=[];for(let h=0;h<38;h++){const d=-112+l()*224,u=oe(d),p=Ci(d),g=u+(l()-.5)*p*1.65;c.push({x:g,z:d,scale:.8+l()*.85,ry:l()*6.28})}this._placeDesertShrubs(c),this._createSoaringHawks(-10,34)}_buildCanyonRuins(t,e){const n=this.tex.loadPBRSet("adobe_wall",1,1),i=Ht?new _e({map:n.map,normalMap:n.normalMap,vertexColors:!0,color:16049096}):new In({map:n.map,normalMap:n.normalMap,normalScale:new vt(.55,.55),roughness:.92,vertexColors:!0,color:16049096});i.onBeforeCompile=x=>{x.fragmentShader=x.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
         float _rl = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
         diffuseColor.rgb = mix(vec3(_rl), diffuseColor.rgb, 0.55) * 1.45 + vec3(0.04, 0.03, 0.02);`)},ti(i,{saturation:.82,contrast:1.02});const r=this.tex.loadPBRSet("desert_wood",1,1),o=new _e({map:r.map,color:12296834}),a=[],l=[],c=(x,y,v,C,w,T=0)=>{const R=this.getHeight(x,y),b=1.5,M=C+b,P=$l(v,M,w,{bottomAO:.56,topAO:.98,cornerAO:.2,tileScale:1.4}),N=new Ot().compose(new L(x,R+C*.5-b*.5,y),new wn().setFromEuler(new Ue(0,T,0)),new L(1,1,1));P.applyMatrix4(N),a.push(P),this.physics.addOBBCollider(x,y,v*.5,w*.5,T,R-b,R+C,C<=1.45),t.push({type:"box",x,z:y,hx:Math.max(v,w)*.5,hz:Math.max(v,w)*.5,pad:2.4,strength:.38}),e.push({x,z:y,sx:v*1.35,sz:w*1.45,ry:T})},h=(x,y,v=4.6,C=3.8,w=0)=>{const T=Math.cos(w),R=Math.sin(w),b=v*.5,M=x-b*T,P=y+b*R,N=x+b*T,B=y-b*R,G=Math.max(this.getHeight(M,P),this.getHeight(N,B))+C;c(M,P,.95,Math.max(2.2,G-this.getHeight(M,P)),.95,w),c(N,B,.95,Math.max(2.2,G-this.getHeight(N,B)-.12),.95,w);const X=new fe(v+1.3,.38,.76),H=new Ot().compose(new L(x,G-.22,y),new wn().setFromEuler(new Ue(0,w,-.03)),new L(1,1,1));X.applyMatrix4(H),l.push(X)},d=oe(42);h(d,42,5.4,4.1,.1),c(d-7.4,39,5.6,2.5,.68,.22),c(d+7.2,44,5.2,2.2,.66,-.28),c(d-8.6,46.2,.76,1.5,4.2,.12);const u=oe(-64);h(u+.8,-64,5,3.9,-.15),c(u+7.4,-60.5,5.4,2.7,.68,-.2),c(u-7.2,-67,4.8,2.1,.66,.28),c(u+6.4,-70,1,3.2,1,.1);const p=oe(-116);if(h(p,-116,5.8,4.4,.05),a.length){const x=new Et(an(a,!1),i);x.castShadow=!Ht,x.receiveShadow=!0,a.forEach(y=>y.dispose()),this.stageGroup.add(x)}if(l.length){const x=new Et(an(l,!1),o);x.castShadow=!Ht,l.forEach(y=>y.dispose()),this.stageGroup.add(x)}const g=this.models.getGeometry("crate"),_=this.models.getMaterial("crate");if(g&&_){const x=[[d-5.2,40.8,.4,1.25],[d+5,43.2,1.1,1.1],[u+5.4,-62,-.3,1.3]],y=new nn(g,_,x.length);x.forEach(([v,C,w,T],R)=>{const b=this.getHeight(v,C);this._dummy.position.set(v,b-.06,C),this._dummy.rotation.set(.08,w,-.06),this._dummy.scale.setScalar(T),this._dummy.updateMatrix(),y.setMatrixAt(R,this._dummy.matrix),this.physics.addBoxCollider(v-.65,v+.65,C-.5,C+.5,b,b+.72,!0)}),y.instanceMatrix.needsUpdate=!0,this.stageGroup.add(y)}const m=this.models.getGeometry("barrel"),f=this.models.getMaterial("barrel");if(m&&f){const x=[[d+5.8,42.4,.72],[u-5.6,-65.5,.74]],y=new nn(m,f,x.length);x.forEach(([v,C,w],T)=>{const R=this.getHeight(v,C);this._dummy.position.set(v,R-.08,C),this._dummy.rotation.set(.12,T*1.4,0),this._dummy.scale.setScalar(w),this._dummy.updateMatrix(),y.setMatrixAt(T,this._dummy.matrix),this.physics.addCylinderCollider(v,C,.42,R+1.1,!1)}),y.instanceMatrix.needsUpdate=!0,this.stageGroup.add(y)}}_buildStage3Summit(t,e){const n=[];for(let w=92;w>=-84;w-=26){const T=ni(w);n.push({x:T+(w%52===0?3.2:-3.2),z:w,scale:1.12,ry:w*.2})}const i=ni(-99);n.push({x:i-5.2,z:-99.5,scale:1.38,ry:.7}),this._placeStoneCairns(n,t,e);const r=[];let o=3391;const a=()=>((o=o*16807%2147483647)-1)/2147483646;for(let w=104;w>=-96;w-=11){const T=ni(w),R=Ta(w);for(const b of[-1,1]){if(w<-88&&b===1)continue;const M=(R*.72+a()*3)*b,P=2.4+a()*3.4;r.push({x:T+M,z:w+(a()-.5)*4,sx:P*1.15,sy:P*.68,sz:P*.9,ry:a()*6.28,type:Math.floor(a()*2)})}}this._placeScannedRocks(r,t,e);const l=[{x:-155,z:-220,y:8,sx:46,sy:34,sz:38,ry:.6},{x:162,z:-205,y:8,sx:50,sy:36,sz:40,ry:2.1},{x:-145,z:25,y:6,sx:42,sy:28,sz:34,ry:1.3},{x:155,z:40,y:6,sx:44,sy:30,sz:36,ry:2.8}];this._placeStratifiedMesas(l,[],3,!1);const c=i+26,h=-310,d=Math.sin(c*.022+h*.017+Math.sin(h*.01)*1.4),u=Math.pow(1-Math.abs(d),1.15)*9.5+Math.sin(c*.009-h*.008)*6.5+Math.cos(c*.014+h*.012)*4.5+5,p=new Ze;p.position.set(c,u-.8,h);const g=new _e({color:5388589}),_=new Et(new fe(17.5,9,14.5),g);_.position.y=-4.2;const m=new Et(new fe(15.5,4.8,12.2),g);m.position.y=2.4;const f=new Et(new fe(6,3,5),g);f.position.set(-2.4,5.8,-1.8);const x=new Et(new fe(18.5,2.2,.8),g);x.position.set(0,1.1,9.8),p.add(_,m,f,x);const y=this._createGlowSpriteTexture(),v=new ka({map:y,color:16762967,transparent:!0,opacity:.96,blending:as,depthWrite:!1,fog:!1});this.beaconSprite=new Gl(v),this.beaconSprite.position.set(1.8,3.6,6.5),this.beaconSprite.scale.set(16,16,1),p.add(this.beaconSprite);const C=new Et(new Gi(1.05,8,8),new bn({color:16774863,fog:!1}));C.position.set(1.8,3.5,6.5),p.add(C),this.stageGroup.add(p)}_buildStage4Night(t,e){const n=[{x:-1.5,z:102,scale:1.08,ry:.4},{x:4.5,z:74,scale:1.12,ry:1.5},{x:-3.2,z:44,scale:1.15,ry:2.2},{x:3.8,z:14,scale:1.08,ry:.9},{x:-2.4,z:-16,scale:1.16,ry:1.8},{x:2.2,z:-42,scale:1.1,ry:2.9}];this._placeStoneCairns(n,t,e),this.abandonedHouse=new Km(this.stageGroup,this.tex,this.models,this.physics,this.getHeight,Jn,Dn,Jl),t.push({type:"box",x:Jn,z:Dn,hx:8.4,hz:7.2,pad:3.8,strength:.44});const i=[{x:Jn-11.2,z:Dn-9,h:6.4,lean:.14,ry:.4},{x:Jn-13,z:Dn-6.2,h:5,lean:-.18,ry:2.1},{x:Jn+11.8,z:Dn-10.2,h:5.8,lean:.16,ry:1.2},{x:-15.5,z:32,h:5.2,lean:.18,ry:2.8},{x:16.5,z:-18,h:5.6,lean:-.15,ry:.9}];this._placeDesertPalms(i,t,e);const r=[{x:-12,z:96,sx:4.8,sy:2.4,sz:3.4,ry:.7,type:0},{x:14.5,z:62,sx:5.6,sy:2.8,sz:4,ry:2.2,type:1},{x:-16.5,z:24,sx:6.2,sy:3.2,sz:4.2,ry:1.1,type:0},{x:15.2,z:-6,sx:5.2,sy:2.6,sz:3.8,ry:.4,type:1},{x:-14.2,z:-56,sx:5.8,sy:3,sz:3.9,ry:1.5,type:0},{x:14.6,z:-58,sx:5.6,sy:2.9,sz:3.8,ry:2.5,type:1}];this._placeScannedRocks(r,t,e);const o=[{x:-132,z:-118,sx:44,sy:26,sz:34,ry:.5},{x:118,z:-126,sx:48,sy:28,sz:36,ry:1.8},{x:-126,z:42,sx:42,sy:24,sz:32,ry:2.3},{x:128,z:54,sx:44,sy:24,sz:34,ry:.9}];this._placeStratifiedMesas(o,t,4,!0)}_createGPUDustParticles(t){const e=De[t],n=this._dustMaxCount,i=new pe,r=new Float32Array(n*3),o=new Float32Array(n*3);for(let l=0;l<n;l++)r[l*3]=(Math.random()-.5)*52,r[l*3+1]=.25+Math.random()*4,r[l*3+2]=(Math.random()-.5)*52,o[l*3]=Math.random()*6.28,o[l*3+1]=.7+Math.random()*1.25,o[l*3+2]=Math.random();i.setAttribute("position",new Qt(r,3)),i.setAttribute("aSeed",new Qt(o,3)),this.dustUniforms={uTime:{value:0},uStorm:{value:this.stormIntensity},uPlayerPos:{value:new L},uColor:{value:e.dustColor.clone()},uBaseOpacity:{value:e.dustOpacity},uMap:{value:this.tex.createDustParticleTexture()}};const a=new Re({transparent:!0,depthWrite:!1,uniforms:this.dustUniforms,vertexShader:`
        attribute vec3 aSeed;
        uniform float uTime;
        uniform float uStorm;
        uniform vec3 uPlayerPos;
        void main() {
          vec3 p = position;
          float speed = (2.1 + uStorm * 8.5) * aSeed.y;
          p.x = mod(p.x + uTime * speed - uPlayerPos.x + 26.0, 52.0) - 26.0 + uPlayerPos.x;
          p.z = mod(p.z + uTime * speed * 0.42 - uPlayerPos.z + 26.0, 52.0) - 26.0 + uPlayerPos.z;
          p.y = uPlayerPos.y - 0.4 + position.y + sin(uTime * (1.2 + uStorm * 2.0) + aSeed.x) * (0.22 + uStorm * 0.35);
          vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
          float sizeMult = 1.0 + uStorm * 0.65;
          gl_PointSize = clamp((102.0 * sizeMult) / max(1.0, -mvPosition.z), 2.0, 14.0);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        uniform float uStorm;
        uniform float uBaseOpacity;
        uniform sampler2D uMap;
        void main() {
          vec4 tex = texture2D(uMap, gl_PointCoord);
          if (tex.a < 0.05) discard;
          float op = mix(uBaseOpacity, 0.54, uStorm);
          gl_FragColor = vec4(uColor * tex.rgb, tex.a * op);
        }
      `});this.dustPoints=new kh(i,a),this.dustPoints.frustumCulled=!1,this.stageGroup.add(this.dustPoints)}applySettings(t){this._baseDustCount=Math.min(this._dustMaxCount,t.dustCount||150),this.dustPoints&&this.dustPoints.geometry.setDrawRange(0,this._baseDustCount)}setStormIntensity(t){if(this.stormIntensity=Math.max(0,Math.min(1,t)),this.palmStormUniform.value=this.stormIntensity,this.dustUniforms&&(this.dustUniforms.uStorm.value=this.stormIntensity),this.dustPoints){const e=Math.round(ne.lerp(this._baseDustCount,this._dustMaxCount,this.stormIntensity));this.dustPoints.geometry.setDrawRange(0,e)}}getActiveInteractable(){return this.currentStageId===4&&this.abandonedHouse?this.abandonedHouse.getSanctuaryInteractable():null}update(t,e,n,i){if(this.palmTimeUniform.value=e,this.dustUniforms&&n&&(this.dustUniforms.uTime.value=e,this.dustUniforms.uPlayerPos.value.copy(n)),this.abandonedHouse&&this.abandonedHouse.update(t,e,n),this.beaconSprite&&this.currentStageId===3){const r=.88+.14*Math.sin(e*4.8)+.08*Math.cos(e*11.3);this.beaconSprite.scale.set(16*r,16*r,1)}if(this.goalRingMesh&&i)if(i.position.distanceTo(this.goalRingMesh.position)<14)this.goalRingMesh.visible=!1;else{this.goalRingMesh.visible=!0,this.goalRingMesh.lookAt(i.position);const o=.92+Math.sin(e*2.8)*.12;this.goalRingMesh.scale.setScalar(o)}if(this.hawkInst&&this.hawks.length>0&&(this._faunaAccum+=t,this._faunaAccum>=.033)){this._faunaAccum=0;const r=this._dummy;for(let o=0;o<this.hawks.length;o++){const a=this.hawks[o],l=e*a.speed+a.phase,c=a.centerX+Math.cos(l)*a.radius,h=a.centerZ+Math.sin(l)*a.radius,d=a.altitude+Math.sin(e*.7+a.phase)*1.5;r.position.set(c,d,h),r.rotation.set(0,-l,.24),r.scale.set(1,1+Math.sin(e*5+a.phase)*.15,1),r.updateMatrix(),this.hawkInst.setMatrixAt(o,r.matrix)}this.hawkInst.instanceMatrix.needsUpdate=!0}}}class Qm{constructor(t,e){this.scene=t,this.settings=e,this.intensity=0,this.targetIntensity=0,this.enabled=e.data.dustStorm!==!1,this.maxStreaks=300,this.group=new Ze,this.scene.add(this.group),this.overlayEl=document.getElementById("dust-storm-layer"),this._colorTmp=new Q,this._createSandWall(),this._createWindStreaks(),this._setVisible(!1),this._lastOverlayVis=!1,this._lastOverlayOp="",this.overlayEl&&this.overlayEl.classList.add("hidden")}_setOverlayOpacity(t){if(!this.overlayEl)return;const e=t>.006;if(e!==this._lastOverlayVis&&(this._lastOverlayVis=e,this.overlayEl.classList.toggle("hidden",!e)),e){const n=t.toFixed(2);n!==this._lastOverlayOp&&(this._lastOverlayOp=n,this.overlayEl.style.opacity=n)}}_createSandWall(){const t=new je(18.5,18.5,24,20,1,!0);this.wallUniforms={uTime:{value:0},uIntensity:{value:0},uIndoor:{value:0},uColor:{value:xn.horizonStorm.clone()},uSimple:{value:0}};const e=new Re({transparent:!0,depthWrite:!1,side:Se,fog:!1,uniforms:this.wallUniforms,vertexShader:`
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
      `});this.sandWall=new Et(t,e),this.sandWall.frustumCulled=!1,this.sandWall.renderOrder=4,this.group.add(this.sandWall)}_createWindStreaks(){const t=new Oe(1.65,.055),e=new Kh;e.index=t.index,e.attributes.position=t.attributes.position,e.attributes.uv=t.attributes.uv;const n=new Float32Array(this.maxStreaks*4);let i=9187;const r=()=>(i=i*16807%2147483647,(i-1)/2147483646);for(let a=0;a<this.maxStreaks;a++)n[a*4]=(r()-.5)*34,n[a*4+1]=.25+r()*5.2,n[a*4+2]=(r()-.5)*34,n[a*4+3]=.75+r()*.9;e.setAttribute("aSeed",new Sa(n,4)),e.instanceCount=this.maxStreaks,this.streakUniforms={uTime:{value:0},uIntensity:{value:0},uIndoor:{value:0},uPlayerPos:{value:new L},uColor:{value:xn.horizonStorm.clone()}};const o=new Re({transparent:!0,depthWrite:!1,side:Ee,uniforms:this.streakUniforms,vertexShader:`
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
      `});this.streakMesh=new Et(e,o),this.streakMesh.frustumCulled=!1,this.streakMesh.renderOrder=5,this.group.add(this.streakMesh)}_setVisible(t){this.sandWall.visible=t,this.streakMesh.visible=t}applySettings(t,e){this.enabled=t.dustStorm!==!1;const n=e.stormStreaks??240;this.streakMesh.geometry.instanceCount=Math.min(this.maxStreaks,n),this.wallUniforms.uSimple.value=t.quality==="low"?1:0,this.enabled||(this.intensity=0,this.targetIntensity=0,this._setVisible(!1),this._setOverlayOpacity(0))}setTargetIntensity(t,e=!1){const n=this.enabled?ne.clamp(t,0,1):0;this.targetIntensity=n,e&&(this.intensity=n,this._setVisible(this.intensity>.01),this.intensity<=.01&&this._setOverlayOpacity(0))}update(t,e,n,i,r,o){if(!this.enabled)return this.intensity=0,this._setVisible(!1),this._setOverlayOpacity(0),0;const a=this.targetIntensity>this.intensity?.45:.55;this.intensity+=(this.targetIntensity-this.intensity)*Math.min(1,t*a),Math.abs(this.targetIntensity-this.intensity)<.002&&(this.intensity=this.targetIntensity);const l=this.intensity>.01;this._setVisible(l);const c=r?1:0;if(l){this.sandWall.position.set(n.position.x,n.position.y+1.5,n.position.z),this._colorTmp.copy(xn.horizonStorm).lerp(xn.horizonAsr,ne.clamp(o*.35,0,.35)),this.wallUniforms.uTime.value=e,this.wallUniforms.uIntensity.value=this.intensity,this.wallUniforms.uIndoor.value+=(c-this.wallUniforms.uIndoor.value)*Math.min(1,t*5),this.wallUniforms.uColor.value.copy(this._colorTmp),this.streakUniforms.uTime.value=e,this.streakUniforms.uIntensity.value=this.intensity,this.streakUniforms.uIndoor.value=this.wallUniforms.uIndoor.value,this.streakUniforms.uPlayerPos.value.copy(i),this.streakUniforms.uColor.value.copy(this._colorTmp);const h=.88+.12*Math.sin(e*2.3)*Math.cos(e*1.1);this._setOverlayOpacity(this.intensity*h*(r?.16:.55))}else this._setOverlayOpacity(0);return this.intensity}}class t0{constructor(t,e,n){this.scene=t,this.camera=e,this.audio=n,this.enabled=!1,this.nightStrength=1,this.spotLight=new Zh(16773590,0,62,Math.PI*.21,.56,1.35),this.spotLight.castShadow=!1,this.spotLight.visible=!1,this.scene.add(this.spotLight),this.scene.add(this.spotLight.target),this.spillLight=new Wl(16770749,0,9.5,1.8),this.spillLight.visible=!1,this.scene.add(this.spillLight);const i=14,r=new je(.08,3.1,i,16,1,!0);r.translate(0,-i*.5,0),r.rotateX(Math.PI/2),this.coneUniforms={uColor:{value:new Q("#ffe9c2")},uOpacity:{value:0}};const o=new Re({transparent:!0,depthWrite:!1,side:Ee,blending:as,uniforms:this.coneUniforms,vertexShader:`
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
          float fresnel = pow(abs(dot(normalize(vNormalV), normalize(vViewDir))), 1.9);
          // Fade softly near handheld emitter (vUv.y -> 1) and far end (vUv.y -> 0)
          float lengthFade = smoothstep(0.0, 0.55, vUv.y) * smoothstep(1.0, 0.86, vUv.y);
          float alpha = fresnel * lengthFade * uOpacity;
          if (alpha < 0.003) discard;
          gl_FragColor = vec4(uColor, alpha);
        }
      `});this.beamMesh=new Et(r,o),this.beamMesh.frustumCulled=!1,this.beamMesh.visible=!1,this.beamMesh.renderOrder=7,this.scene.add(this.beamMesh),this._camDir=new L,this._camRight=new L,this._camUp=new L,this._smoothDir=new L(0,0,-1),this._targetPos=new L,this._onToggleCallbacks=new Set}onToggle(t){this._onToggleCallbacks.add(t)}setStageContext(t){this.nightStrength=t===4?1:t===3?.55:.25,this._syncLightPower()}setEnabled(t,e=!0){const n=!!t;if(this.enabled===n){this._syncLightPower();return}this.enabled=n,e&&(this.audio?.unlock(),this.audio?.playFlashlightClick(this.enabled)),this._syncLightPower();for(const i of this._onToggleCallbacks)i(this.enabled)}toggle(){this.setEnabled(!this.enabled,!0)}_syncLightPower(){const t=this.enabled;this.spotLight.visible=t,this.spillLight.visible=t,this.beamMesh.visible=t&&this.nightStrength>.4,t?(this.spotLight.intensity=28*this.nightStrength,this.spotLight.distance=72,this.spotLight.angle=Math.PI*.24,this.spillLight.intensity=2.1*this.nightStrength,this.coneUniforms.uOpacity.value=.11*this.nightStrength):(this.spotLight.intensity=0,this.spillLight.intensity=0,this.coneUniforms.uOpacity.value=0)}update(t,e,n=!1){if(!this.enabled)return;this.camera.getWorldDirection(this._camDir),this._camRight.set(1,0,0).applyQuaternion(this.camera.quaternion),this._camUp.set(0,1,0).applyQuaternion(this.camera.quaternion),n?this._smoothDir.copy(this._camDir):this._smoothDir.lerp(this._camDir,Math.min(1,t*15)).normalize();const i=Math.sin(e*2.1)*.014,r=Math.cos(e*1.7)*.012;this.spotLight.position.copy(this.camera.position).addScaledVector(this._camRight,.24+i).addScaledVector(this._camUp,-.22+r).addScaledVector(this._smoothDir,.14),this._targetPos.copy(this.spotLight.position).addScaledVector(this._smoothDir,12),this.spotLight.target.position.copy(this._targetPos),this.spotLight.target.updateMatrixWorld(),this.spillLight.position.copy(this.spotLight.position).addScaledVector(this._smoothDir,.9),this.beamMesh.position.copy(this.spotLight.position),this.beamMesh.lookAt(this._targetPos)}}class e0{constructor(t,e,n,i,r=null){this.camera=t,this.physics=e,this.audio=n,this.settings=i,this.flashlight=r,this.enabled=!1,this.position=new L(0,0,114),this.yaw=0,this.pitch=-.02,this.eyeHeight=1.72,this.walkSpeed=3.4,this.sprintSpeed=5.2,this.vy=0,this.gravity=-19.5,this.jumpVelocity=6.9,this.onGround=!0,this.isJumping=!1,this.isActuallySprinting=!1,this.currentFovBoost=0,this.isSprintingKey=!1,this.autoSprintLocked=!1,this.isInsideHouse=!1,this.currentSurface="sand",this.bobTimer=0,this.lastStepSign=0,this.boundaryWarnCooldown=0,this.onBoundaryHit=null,this.keys={},this.joyVec={x:0,y:0},this.joyBeyondRing=!1,this.joyLockHover=!1,this.joyActive=!1,this.joyTouchId=null,this.joyOrigin={x:0,y:0},this.lookTouchId=null,this.lookLast={x:0,y:0},this.mouseDragging=!1,this.pointerLocked=!1,this._targetYaw=this.yaw,this._targetPitch=this.pitch,this.focusedInteractable=null,this._forward=new L,this._right=new L,this._moveDir=new L,this._toObj=new L,this.sprintBannerEl=document.getElementById("auto-sprint-banner"),this._bindInputs()}_haptic(t=12){try{navigator.vibrate&&navigator.vibrate(t)}catch{}}setAutoSprintLock(t){this.autoSprintLocked=!!t,this.sprintBannerEl&&this.sprintBannerEl.classList.toggle("hidden",!this.autoSprintLocked)}setPose(t,e,n,i=0){const r=this.physics.getGroundInfo(t,e,0);this.position.set(t,r.groundY,e),this.currentSurface=r.surface,this.vy=0,this.onGround=!0,this.isJumping=!1,this.setAutoSprintLock(!1),this.yaw=n,this.pitch=i,this._targetYaw=n,this._targetPitch=i,this.isInsideHouse=this.physics.isInsideBuilding(this.position),this._applyCameraTransform(0,0)}triggerJump(){!this.enabled||!this.onGround||(this.audio.unlock(),this._haptic(14),this.vy=this.jumpVelocity,this.onGround=!1,this.isJumping=!0,this.audio.playFootstep(this.currentSurface,!0))}_bindInputs(){if(window.addEventListener("keydown",p=>{this.keys[p.code]=!0,(p.code==="ShiftLeft"||p.code==="ShiftRight")&&(this.isSprintingKey=!0),(p.code==="KeyS"||p.code==="ArrowDown")&&this.setAutoSprintLock(!1),p.code==="Space"&&(p.preventDefault(),this.triggerJump()),p.code==="KeyF"&&!p.repeat&&this.enabled&&this.flashlight&&this.flashlight.toggle()}),window.addEventListener("keyup",p=>{this.keys[p.code]=!1,(p.code==="ShiftLeft"||p.code==="ShiftRight")&&(this.isSprintingKey=!1)}),this.sprintBannerEl){const p=g=>{g.preventDefault(),g.stopPropagation(),this.setAutoSprintLock(!1),this._haptic(10)};this.sprintBannerEl.addEventListener("touchstart",p,{passive:!1}),this.sprintBannerEl.addEventListener("click",p)}const t=document.getElementById("btn-mobile-jump");t&&(t.addEventListener("touchstart",p=>{p.preventDefault(),p.stopPropagation(),this.triggerJump()},{passive:!1}),t.addEventListener("click",p=>{p.stopPropagation(),this.triggerJump()}));const e=document.getElementById("btn-flashlight");if(e){const p=g=>{g.preventDefault(),g.stopPropagation(),!(!this.enabled||!this.flashlight)&&(this._haptic(12),this.flashlight.toggle())};e.addEventListener("touchstart",p,{passive:!1}),e.addEventListener("click",p)}const n=document.getElementById("look-zone"),i=document.getElementById("game-canvas");if(document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===i}),window.addEventListener("mousemove",p=>{if(this.enabled&&(this.pointerLocked||this.mouseDragging)){const g=this.settings.data.sensitivity*.0022;this._targetYaw-=p.movementX*g,this._targetPitch-=p.movementY*g,this._clampPitch()}}),window.addEventListener("pointerdown",p=>{if(!(!this.enabled||p.pointerType==="touch"||p.button!==0)&&(this.audio.unlock(),this.mouseDragging=!0,p.target===i||p.target===n))try{i.requestPointerLock&&!("ontouchstart"in window)&&i.requestPointerLock()}catch{}}),window.addEventListener("pointerup",()=>{this.mouseDragging=!1}),n){n.addEventListener("touchstart",g=>{if(this.enabled){this.audio.unlock();for(const _ of g.changedTouches)if(this.lookTouchId===null){this.lookTouchId=_.identifier,this.lookLast.x=_.clientX,this.lookLast.y=_.clientY;break}}},{passive:!0}),n.addEventListener("touchmove",g=>{if(!(!this.enabled||this.lookTouchId===null)){for(const _ of g.changedTouches)if(_.identifier===this.lookTouchId){const m=_.clientX-this.lookLast.x,f=_.clientY-this.lookLast.y;this.lookLast.x=_.clientX,this.lookLast.y=_.clientY;const x=Math.hypot(m,f),y=1+Math.min(.85,x*.02),v=this.settings.data.sensitivity*.0058*y;this._targetYaw-=m*v,this._targetPitch-=f*v*.88,this._clampPitch(),g.preventDefault();break}}},{passive:!1});const p=g=>{for(const _ of g.changedTouches)if(_.identifier===this.lookTouchId){this.lookTouchId=null;break}};n.addEventListener("touchend",p,{passive:!0}),n.addEventListener("touchcancel",p,{passive:!0})}const r=document.getElementById("joystick-zone"),o=document.getElementById("joystick-float-wrap"),a=document.getElementById("joystick-base"),l=document.getElementById("joystick-knob"),c=document.getElementById("joystick-sprint-lock"),h=46,d=52,u=(p,g,_,m)=>{l&&(l.style.transform=`translate(${p.toFixed(1)}px, ${g.toFixed(1)}px)`),a&&a.classList.toggle("sprinting",_),c&&c.classList.toggle("engaged",m)};if(r&&o){r.addEventListener("touchstart",g=>{if(this.enabled){this.audio.unlock();for(const _ of g.changedTouches)if(this.joyTouchId===null){this.joyTouchId=_.identifier,this.joyActive=!0,this.joyBeyondRing=!1,this.joyLockHover=!1,this.setAutoSprintLock(!1),this.joyOrigin.x=_.clientX,this.joyOrigin.y=_.clientY,o.style.left=`${_.clientX}px`,o.style.top=`${_.clientY}px`,o.classList.remove("hidden"),u(0,0,!1,!1);break}}},{passive:!0}),r.addEventListener("touchmove",g=>{if(!(!this.enabled||this.joyTouchId===null)){for(const _ of g.changedTouches)if(_.identifier===this.joyTouchId){const m=_.clientX-this.joyOrigin.x,f=_.clientY-this.joyOrigin.y,x=Math.hypot(m,f),y=f<-36&&Math.abs(m)<Math.abs(f)*.85;this.joyBeyondRing=x>d&&y;const v=this.joyLockHover;this.joyLockHover=f<-92&&Math.abs(m)<56,this.joyLockHover&&!v&&this._haptic(16);const C=this.joyBeyondRing?56:h;let w=m,T=f;x>C&&(w=m/x*C,T=f/x*C);const R=Math.min(1,x/h),b=x>1e-4?m/x:0,M=x>1e-4?f/x:0,P=b*R,N=M*R;this.joyVec.x=Math.abs(P)<.08?0:P,this.joyVec.y=Math.abs(N)<.08?0:N,u(w,T,this.joyBeyondRing||this.joyLockHover,this.joyLockHover),g.preventDefault();break}}},{passive:!1});const p=g=>{for(const _ of g.changedTouches)if(_.identifier===this.joyTouchId){this.joyLockHover&&(this.setAutoSprintLock(!0),this._haptic(22)),this.joyTouchId=null,this.joyActive=!1,this.joyBeyondRing=!1,this.joyLockHover=!1,this.joyVec.x=0,this.joyVec.y=0,o.classList.add("hidden"),u(0,0,!1,!1);break}};r.addEventListener("touchend",p,{passive:!0}),r.addEventListener("touchcancel",p,{passive:!0})}}_clampPitch(){this._targetPitch=ne.clamp(this._targetPitch,-1.32,1.32)}update(t,e,n){if(!this.enabled)return;this.boundaryWarnCooldown>0&&(this.boundaryWarnCooldown-=t);const i=Math.min(1,t*28);this.yaw+=(this._targetYaw-this.yaw)*i,this.pitch+=(this._targetPitch-this.pitch)*i;let r=0,o=0;(this.keys.KeyW||this.keys.ArrowUp)&&(r+=1),(this.keys.KeyS||this.keys.ArrowDown)&&(r-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(o+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(o-=1);let a=!1;this.joyActive?(r-=this.joyVec.y,o+=this.joyVec.x,(this.joyBeyondRing||this.joyLockHover)&&(a=!0)):this.autoSprintLocked&&(r=1,a=!0);const l=Math.min(1,Math.hypot(r,o));this.isActuallySprinting=(this.isSprintingKey||a)&&l>.3&&r>.15;const c=this.isActuallySprinting?5:0;this.currentFovBoost+=(c-this.currentFovBoost)*Math.min(1,t*6.5);const h=this.settings.data.fov+this.currentFovBoost;Math.abs(this.camera.fov-h)>.05&&(this.camera.fov=h,this.camera.updateProjectionMatrix());let d=0;if(l>.01){const m=(this.isActuallySprinting?this.sprintSpeed:this.walkSpeed)*l;d=m,this._forward.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),this._right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),this._moveDir.set(0,0,0).addScaledVector(this._forward,r).addScaledVector(this._right,o).normalize(),this.position.x+=this._moveDir.x*m*t,this.position.z+=this._moveDir.z*m*t,this.physics.resolveHorizontal(this.position,.36)&&this.boundaryWarnCooldown<=0&&this.onBoundaryHit&&(this.boundaryWarnCooldown=8,this.setAutoSprintLock(!1),this.onBoundaryHit())}const u=this.physics.getGroundInfo(this.position.x,this.position.z,this.position.y);this.currentSurface=u.surface;const p=this.position.y-u.groundY;this.isJumping||!this.onGround||p>.42?(this.onGround=!1,this.vy+=this.gravity*t,this.position.y+=this.vy*t,this.position.y<=u.groundY&&(this.position.y=u.groundY,this.vy<-3.2&&this.audio.playFootstep(this.currentSurface,!0),this.vy=0,this.onGround=!0,this.isJumping=!1)):(this.position.y+=(u.groundY-this.position.y)*Math.min(1,t*22),this.vy=0,this.onGround=!0),this.isInsideHouse=this.physics.isInsideBuilding(this.position);let g=0,_=0;if(this.onGround&&d>.3){const m=this.isActuallySprinting?9.4:6.2,f=this.isActuallySprinting?.062:.036,x=this.isActuallySprinting?.03:.018;this.bobTimer+=t*m;const y=Math.sin(this.bobTimer);g=y*f,_=Math.cos(this.bobTimer*.5)*x,y<-.82&&this.lastStepSign>=-.82&&this.audio.playFootstep(this.currentSurface,this.isActuallySprinting),this.lastStepSign=y}else this.onGround&&(g=Math.sin(e*1.35)*.01,this.lastStepSign=0);this._applyCameraTransform(_,g),this._updateActiveInteractable(n)}_applyCameraTransform(t,e){this.camera.position.set(this.position.x+Math.cos(this.yaw)*t,this.position.y+this.eyeHeight+e,this.position.z-Math.sin(this.yaw)*t),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=t*(this.isActuallySprinting?-.22:-.12)}_updateActiveInteractable(t){if(!t){this.focusedInteractable=null;return}const e=this.camera.position.distanceTo(t.worldPos);if(e>t.radius){this.focusedInteractable=null;return}this.camera.getWorldDirection(this._forward),this._toObj.subVectors(t.worldPos,this.camera.position).normalize();const n=this._forward.dot(this._toObj);this.focusedInteractable=n>.45||e<2.6?t:null}}class n0{constructor(t,e,n){this.camera=t,this.stages=e,this.player=n,this.mode="title",this.timer=0,this.containerEl=document.getElementById("game-container"),this.eyelidEl=document.getElementById("eyelid-layer"),this.blurEl=document.getElementById("vision-blur-layer")}startTitleCamera(){this.mode="title",this.timer=0,this.player.enabled=!1,this._setEyelids(1),this._setBlur(0),this.containerEl?.classList.remove("cinematic-bars-active")}enterGameplay(){this.mode="gameplay",this.timer=0,this._setEyelids(1),this._setBlur(0),this.containerEl?.classList.remove("cinematic-bars-active")}_setEyelids(t){this.eyelidEl&&this.eyelidEl.style.setProperty("--eyelid-open",ne.clamp(t,0,1).toFixed(3))}_setBlur(t){this.blurEl&&(this.blurEl.style.backdropFilter=t>.3?`blur(${t.toFixed(1)}px)`:"none",this.blurEl.style.webkitBackdropFilter=t>.3?`blur(${t.toFixed(1)}px)`:"none",this.blurEl.style.background="rgba(255, 246, 224, 0)")}update(t,e){if(this.timer+=t,this.mode==="title"){const n=Math.sin(e*.11)*18,i=66+Math.cos(e*.09)*8,r=this.stages.getHeight(n,i);this.camera.position.set(n,r+7.5+Math.sin(e*.18)*.4,i),this.camera.lookAt(2,r-1.5,-18)}}}const i0=["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];function ml(s){return String(s).replace(/\d/g,t=>i0[Number(t)])}class s0{constructor(t,e,n,i,r,o){this.audio=t,this.stages=e,this.player=n,this.flashlight=i,this.dustStorm=r,this.ui=o,this.stageId=1,this.transitioning=!1,this.journeyComplete=!1,this.freeRoam=!1,this._triggeredWhispers=new Set,this.queue=[],this.activeLine=null,this.charIndex=0,this.charTimer=0,this.holdTimer=0,this.charInterval=.04,this._hudAccum=.2,this.subContainer=document.getElementById("subtitle-container"),this.subText=document.getElementById("subtitle-text"),this.transEl=document.getElementById("stage-transition-overlay"),this.transTagEl=document.getElementById("trans-stage-tag"),this.transTitleEl=document.getElementById("trans-stage-title"),this.transSubEl=document.getElementById("trans-stage-sub")}async transitionToStage(t,{immediate:e=!1,showOverlay:n=!0}={}){if(this.transitioning&&!e)return;this.transitioning=!0,this.player.enabled=!1,this.player.setAutoSprintLock(!1),this.hideSubtitle(),this.queue=[],this.activeLine=null;const i=Un[t]||Un[1],r=De[t]||De[1];n&&!e&&this.transEl&&(this.transTagEl&&(this.transTagEl.textContent=`المرحلة ${ml(i.id)} من ٤ • ${i.timeLabel}`),this.transTitleEl&&(this.transTitleEl.textContent=i.title),this.transSubEl&&(this.transSubEl.textContent=i.subtitle),this.transEl.classList.remove("hidden"),requestAnimationFrame(()=>this.transEl.classList.add("active")),await new Promise(o=>setTimeout(o,680))),this.stageId=i.id,this.journeyComplete=!1,this._triggeredWhispers.clear(),this.stages.loadStage(i.id),this.audio.setStage(i.id),e||this.audio.playStageTransition(i.id),this.dustStorm.setTargetIntensity(r.stormBase||0,!0),this.flashlight.setStageContext(i.id),this.flashlight.setEnabled(i.id===4,!1),this.ui.setFlashlightUI(i.id===4,i.id===4),this.player.setPose(i.startPos.x,i.startPos.z,i.startPos.yaw,i.startPos.pitch),this.flashlight.update(.016,0,!0),this.ui.updateMission(i.objective,"",0),this.ui.updateClock(i.timeLabel,i.id,r.sunIcon),n&&!e&&this.transEl?(await new Promise(o=>setTimeout(o,1150)),this.transEl.classList.remove("active"),await new Promise(o=>setTimeout(o,620)),this.transEl.classList.add("hidden")):this.transEl&&(this.transEl.classList.remove("active"),this.transEl.classList.add("hidden")),this.transitioning=!1,this.player.enabled=!0}sayImmediate(t,e="thought"){this.queue=[],this.activeLine=null,this.enqueueLine(t,e)}enqueueLine(t,e="thought"){this.queue.push({text:t,style:e}),this.activeLine||this._startNextLine()}_startNextLine(){if(this.queue.length===0){this.activeLine=null,this.hideSubtitle();return}this.activeLine=this.queue.shift(),this.charIndex=0,this.charTimer=0,this.holdTimer=0,this.subContainer&&this.subText&&(this.subContainer.classList.remove("hidden"),this.subText.textContent="",this.subText.classList.add("typing"))}hideSubtitle(){this.subContainer&&this.subContainer.classList.add("hidden"),this.subText&&this.subText.classList.remove("typing")}handleInteract(t){!t||this.stageId!==4||t.id==="sanctuary_lantern"&&!this.journeyComplete&&(this.journeyComplete=!0,this.audio.playLanternWarmChime(),this.player.enabled=!1,this.sayImmediate("دفء المصباح يبدد وحشة الصحراء... اكتملت رحلة السراب تحت سماء النجوم.","night"),setTimeout(()=>{this.stageId===4&&!this.freeRoam&&this.ui.showEndingScreen()},2800))}update(t,e,n,i,r=0){const o=Un[this.stageId];if(this.stageId===2&&!this.transitioning){const a=.24+.12*Math.sin(e*.22)+.05*Math.cos(e*.51);this.dustStorm.setTargetIntensity(Math.max(.14,Math.min(.4,a)),!1)}if(n&&!this.transitioning&&o&&i){for(let a=0;a<o.whispers.length;a++){const l=o.whispers[a],c=`${this.stageId}_${a}`;!this._triggeredWhispers.has(c)&&i.z<=l.distZ&&(this._triggeredWhispers.add(c),this.enqueueLine(l.text,this.stageId===4?"night":"thought"))}if(this.stageId<4&&Math.hypot(i.x-o.goalPos.x,i.z-o.goalPos.z)<=o.goalRadius){this.transitionToStage(this.stageId+1,{immediate:!1,showOverlay:!0});return}}if(this._hudAccum+=t,this._hudAccum>=.1&&(this._hudAccum=0,n&&o&&i)){const a=o.goalPos.x-i.x,l=o.goalPos.z-i.z,c=Math.max(1,Math.round(Math.hypot(a,l))),h=Math.atan2(-a,-l);let d=r-h;for(;d>Math.PI;)d-=Math.PI*2;for(;d<-Math.PI;)d+=Math.PI*2;const u=Math.round(d*180/Math.PI),p=this.stageId===4&&this.journeyComplete?"تجول بحرية تحت سماء النجوم والبيت المهجور":o.objective;this.ui.updateMission(p,this.journeyComplete?"":`${ml(c)}م`,this.journeyComplete?null:u)}if(this.activeLine){const a=this.activeLine.text;if(this.charIndex<a.length)for(this.charTimer+=t;this.charTimer>=this.charInterval&&this.charIndex<a.length;){this.charTimer-=this.charInterval;const l=a[this.charIndex];this.charIndex++,this.subText&&(this.subText.textContent=a.slice(0,this.charIndex)),this.charIndex%2===1&&this.audio.playTextBlip(this.activeLine.style,l)}else{this.subText&&this.subText.classList.remove("typing"),this.holdTimer+=t;const l=Math.max(2.6,a.length*.045);this.holdTimer>=l&&this._startNextLine()}}}}class r0{constructor(t,e){this.settings=t,this.audio=e,this.fullscreenGate=document.getElementById("fullscreen-gate"),this.titleScreen=document.getElementById("title-screen"),this.hudLayer=document.getElementById("hud-layer"),this.settingsModal=document.getElementById("settings-modal"),this.controlsModal=document.getElementById("controls-modal"),this.endingScreen=document.getElementById("ending-screen"),this.portraitWarning=document.getElementById("portrait-warning"),this.missionTextEl=document.getElementById("hud-mission-text"),this.missionDistEl=document.getElementById("hud-mission-dist"),this.missionArrowEl=document.getElementById("hud-mission-arrow"),this.clockEl=document.getElementById("hud-clock"),this.sunIconEl=document.getElementById("hud-sun-icon"),this.fpsEl=document.getElementById("hud-fps-counter"),this.reticleDot=document.getElementById("reticle-dot"),this.mobileInteractBtn=document.getElementById("btn-mobile-interact"),this.mobileInteractText=document.getElementById("mobile-interact-text"),this.flashlightBtn=document.getElementById("btn-flashlight"),this.restoreFsBtn=document.getElementById("btn-restore-fs"),this.returnTitleBtn=document.getElementById("btn-return-title"),this.onStartGame=null,this.onInteract=null,this.onPauseToggle=null,this.onReturnToTitle=null,this.onFreeRoam=null,this.onReplayJourney=null,this.onSelectStage=null,this._portraitDismissed=!1,this.isModalOpen=!1,this.inGameplay=!1,this._bindButtons(),this._bindFullscreenMonitor(),this._syncSettingsUI(),this._checkOrientation(),window.addEventListener("resize",()=>this._checkOrientation())}async enterMandatoryFullscreen(){this.audio.unlock();try{const t=document.documentElement;document.fullscreenElement||(t.requestFullscreen?await t.requestFullscreen():t.webkitRequestFullscreen&&t.webkitRequestFullscreen()),screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape").catch(()=>{})}catch{}this.fullscreenGate?.classList.remove("active"),setTimeout(()=>this.fullscreenGate?.classList.add("hidden"),380),this.showTitleScreen()}_bindFullscreenMonitor(){const t=()=>{const e=!!(document.fullscreenElement||document.webkitFullscreenElement);this.restoreFsBtn?.classList.toggle("hidden",e)};document.addEventListener("fullscreenchange",t),document.addEventListener("webkitfullscreenchange",t),this.restoreFsBtn?.addEventListener("click",()=>this.enterMandatoryFullscreen())}_bindButtons(){document.getElementById("btn-enter-fullscreen")?.addEventListener("click",()=>{this.enterMandatoryFullscreen()}),document.getElementById("btn-start-game")?.addEventListener("click",()=>{this.audio.unlock(),!document.fullscreenElement&&document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen().catch(()=>{}),this.hideTitleScreen(),this.onStartGame?.()}),document.getElementById("btn-open-settings")?.addEventListener("click",()=>{this.audio.unlock(),this.openSettings(!1)}),document.getElementById("btn-hud-pause")?.addEventListener("click",()=>{this.openSettings(!0)});const t=()=>{this.settingsModal?.classList.add("hidden"),this.isModalOpen=!1,this.onPauseToggle?.(!1)};document.getElementById("btn-close-settings")?.addEventListener("click",t),document.getElementById("btn-resume-from-settings")?.addEventListener("click",t),this.returnTitleBtn?.addEventListener("click",()=>{t(),this.onReturnToTitle?.()}),document.querySelectorAll("[data-jump-stage]").forEach(a=>{a.addEventListener("click",()=>{const l=Number(a.dataset.jumpStage);t(),this.endingScreen?.classList.add("hidden"),this.endingScreen?.classList.remove("active"),this.hideTitleScreen(),this.showHUD(),this.onSelectStage?.(l)})}),document.getElementById("btn-open-controls")?.addEventListener("click",()=>{this.controlsModal?.classList.remove("hidden"),this.isModalOpen=!0});const e=()=>{this.controlsModal?.classList.add("hidden"),this.isModalOpen=!1};document.getElementById("btn-close-controls")?.addEventListener("click",e),document.getElementById("btn-ok-controls")?.addEventListener("click",e),this.mobileInteractBtn?.addEventListener("click",()=>this.onInteract?.()),document.getElementById("btn-free-roam")?.addEventListener("click",()=>{this.endingScreen?.classList.add("hidden"),this.endingScreen?.classList.remove("active"),this.showHUD(),this.onFreeRoam?.()}),document.getElementById("btn-replay-chapter")?.addEventListener("click",()=>{this.endingScreen?.classList.add("hidden"),this.endingScreen?.classList.remove("active"),this.onReplayJourney?.()}),document.getElementById("btn-dismiss-portrait")?.addEventListener("click",()=>{this._portraitDismissed=!0,this.portraitWarning?.classList.add("hidden")}),window.addEventListener("keydown",a=>{a.code==="KeyE"&&this.inGameplay&&!this.isModalOpen?this.onInteract?.():a.code==="Escape"&&this.inGameplay&&(this.settingsModal?.classList.contains("hidden")?this.isModalOpen||this.openSettings(!0):t())}),document.getElementById("opt-quality")?.querySelectorAll("button").forEach(a=>{a.addEventListener("click",()=>{this.settings.applyQualityPreset(a.dataset.val),this._syncSettingsUI()})}),document.getElementById("opt-fpscap")?.querySelectorAll("button").forEach(a=>{a.addEventListener("click",()=>{this.settings.set("fpsCap",Number(a.dataset.val)),this._syncSettingsUI()})});const r=(a,l,c,h)=>{const d=document.getElementById(a),u=document.getElementById(c);d?.addEventListener("input",()=>{const p=parseFloat(d.value);this.settings.set(l,p),u&&(u.textContent=h(p))})};r("opt-sensitivity","sensitivity","val-sensitivity",a=>`${a.toFixed(1)}x`),r("opt-resolution","resolutionScale","val-resolution",a=>`${Math.round(a*100)}%`),r("opt-fov","fov","val-fov",a=>`${Math.round(a)}°`),r("opt-volume","volume","val-volume",a=>`${Math.round(a*100)}%`);const o=(a,l)=>{const c=document.getElementById(a);c?.addEventListener("change",()=>{this.settings.set(l,c.checked),l==="showFps"&&this._updateFpsVisibility(),l==="batterySaver"&&this._syncSettingsUI()})};o("opt-battery","batterySaver"),o("opt-shadows","shadows"),o("opt-sunflare","sunFlare"),o("opt-storm","dustStorm"),o("opt-fps","showFps")}_syncSettingsUI(){const t=this.settings.data;document.querySelectorAll("#opt-quality button").forEach(i=>{i.classList.toggle("active",i.dataset.val===t.quality)}),document.querySelectorAll("#opt-fpscap button").forEach(i=>{i.classList.toggle("active",Number(i.dataset.val)===Number(t.fpsCap))});const e=(i,r,o,a)=>{const l=document.getElementById(i),c=document.getElementById(o);l&&(l.value=String(r)),c&&(c.textContent=a(r))};e("opt-sensitivity",t.sensitivity,"val-sensitivity",i=>`${i.toFixed(1)}x`),e("opt-resolution",t.resolutionScale,"val-resolution",i=>`${Math.round(i*100)}%`),e("opt-fov",t.fov,"val-fov",i=>`${Math.round(i)}°`),e("opt-volume",t.volume,"val-volume",i=>`${Math.round(i*100)}%`);const n=(i,r)=>{const o=document.getElementById(i);o&&(o.checked=!!r)};n("opt-battery",t.batterySaver),n("opt-shadows",t.shadows),n("opt-sunflare",t.sunFlare),n("opt-storm",t.dustStorm),n("opt-fps",t.showFps),this._updateFpsVisibility()}_updateFpsVisibility(){this.fpsEl?.classList.toggle("hidden",!this.settings.data.showFps)}_checkOrientation(){if(this._portraitDismissed||!this.portraitWarning)return;const t=window.innerHeight>window.innerWidth&&window.innerWidth<680;this.portraitWarning.classList.toggle("hidden",!t)}isGateActive(){return!!(this.fullscreenGate&&!this.fullscreenGate.classList.contains("hidden"))}dismissGateForDebug(){this.fullscreenGate?.classList.remove("active"),this.fullscreenGate?.classList.add("hidden")}showTitleScreen(){this.inGameplay=!1,this.hudLayer?.classList.add("hidden"),this.endingScreen?.classList.add("hidden"),this.endingScreen?.classList.remove("active"),this.titleScreen?.classList.remove("hidden"),requestAnimationFrame(()=>this.titleScreen?.classList.add("active"))}hideTitleScreen(){this.titleScreen?.classList.remove("active"),setTimeout(()=>this.titleScreen?.classList.add("hidden"),420)}showHUD(){this.inGameplay=!0,this.hudLayer?.classList.remove("hidden"),this._updateFpsVisibility()}hideHUD(){this.hudLayer?.classList.add("hidden")}openSettings(t){document.pointerLockElement&&document.exitPointerLock?.(),this._syncSettingsUI(),this.returnTitleBtn?.classList.toggle("hidden",!t),this.settingsModal?.classList.remove("hidden"),this.isModalOpen=!0,t&&this.onPauseToggle?.(!0)}showEndingScreen(){this.inGameplay=!1,this.hideHUD(),this.endingScreen?.classList.remove("hidden"),requestAnimationFrame(()=>this.endingScreen?.classList.add("active"))}setFlashlightUI(t,e){this.flashlightBtn&&(this.flashlightBtn.classList.toggle("active",!!t),this.flashlightBtn.classList.toggle("night-emphasis",!!e),this.flashlightBtn.setAttribute("aria-pressed",String(!!t)))}updateMission(t,e,n=null){if(this.missionTextEl&&this.missionTextEl.textContent!==t&&(this.missionTextEl.textContent=t),this.missionArrowEl)if(n!==null&&Number.isFinite(n)){const i=Math.round(n);i!==this._lastArrowDeg&&(this._lastArrowDeg=i,this.missionArrowEl.style.transform=`rotate(${i}deg)`),this._arrowHidden!==!1&&(this._arrowHidden=!1,this.missionArrowEl.classList.remove("hidden"))}else this._arrowHidden!==!0&&(this._arrowHidden=!0,this.missionArrowEl.classList.add("hidden"));this.missionDistEl&&(e?(this._lastDistText!==e&&(this._lastDistText=e,this.missionDistEl.textContent=e),this._distHidden!==!1&&(this._distHidden=!1,this.missionDistEl.classList.remove("hidden"))):this._distHidden!==!0&&(this._distHidden=!0,this.missionDistEl.classList.add("hidden")))}updateClock(t,e,n="☀"){if(this.clockEl&&this._lastClockText!==t&&(this._lastClockText=t,this.clockEl.textContent=t),this.sunIconEl){this.sunIconEl.textContent=n;const i=e===4?"#a6c8ff":e===3?"#ff7d47":e===2?"#ffb85c":"#ffe28a";this.sunIconEl.style.color=i}}updateInteractPrompt(t){const e=t?t.id:null;if(e!==this._lastInteractId){if(this._lastInteractId=e,!t){this.reticleDot?.classList.remove("interactive"),this.mobileInteractBtn?.classList.add("hidden");return}this.reticleDot?.classList.add("interactive"),this.mobileInteractText&&(this.mobileInteractText.textContent=t.label),this.mobileInteractBtn?.classList.remove("hidden")}}updateFPS(t){this.fpsEl&&this.settings.data.showFps&&(this.fpsEl.textContent=`${Math.round(t)} FPS`)}}class a0{constructor(){this.canvas=document.getElementById("game-canvas"),this.settings=new Bm,this.audio=new Hm,this.modelManager=new Gm,this.paused=!1,this.tabHidden=!1,this.elapsed=0,this.fpsFrames=0,this.fpsAccum=0,this._lastRenderMs=0,this._renderedInitialFrame=!1,this._initRenderer(),this._bootAsync()}async _bootAsync(){await this.modelManager.preloadAll(),this._initWorld(),this._initGameplay(),this._bindSettings(),this._bindVisibilityGuard(),this._exposeDebugAPI(),window.addEventListener("resize",()=>this._onResize()),this._onResize(),this.stages.loadStage(1),this.cutscenes.startTitleCamera(),requestAnimationFrame(t=>this._animate(t))}_initRenderer(){this.renderer=new Nm({canvas:this.canvas,antialias:!Ht,powerPreference:Ht?"default":"high-performance",stencil:!1}),this.renderer.outputColorSpace=Me,this.renderer.toneMapping=_l,this.renderer.toneMappingExposure=.96,this.renderer.shadowMap.enabled=!Ht,this.renderer.shadowMap.type=Ht?Ca:gl,this.scene=new Ma,this.camera=new Be(this.settings.data.fov,window.innerWidth/window.innerHeight,.14,1450)}_initWorld(){this.texManager=new Om(this.renderer),this.physics=new Xm(()=>0),this.sky=new $m(this.scene,this.renderer,this.settings),this.stages=new Jm(this.scene,this.texManager,this.modelManager,this.physics,this.sky,this.settings),this.dustStorm=new Qm(this.scene,this.settings),this.flashlight=new t0(this.scene,this.camera,this.audio)}_initGameplay(){this.player=new e0(this.camera,this.physics,this.audio,this.settings,this.flashlight),this.cutscenes=new n0(this.camera,this.stages,this.player),this.ui=new r0(this.settings,this.audio),this.journey=new s0(this.audio,this.stages,this.player,this.flashlight,this.dustStorm,this.ui),this.flashlight.onToggle(t=>{this.ui.setFlashlightUI(t,this.journey.stageId===4)}),this.player.onBoundaryHit=()=>{this.journey.sayImmediate("التضاريس هنا وعرة... سأبقى على المسار الصحراوي.",this.journey.stageId===4?"night":"thought")},this.ui.onStartGame=async()=>{this.cutscenes.enterGameplay(),this.ui.showHUD(),await this.journey.transitionToStage(1,{immediate:!1,showOverlay:!0})},this.ui.onSelectStage=async t=>{this.cutscenes.enterGameplay(),this.ui.showHUD(),await this.journey.transitionToStage(t,{immediate:!1,showOverlay:!0})},this.ui.onInteract=()=>{if(this.player.enabled&&this.player.focusedInteractable){try{navigator.vibrate&&navigator.vibrate(15)}catch{}this.journey.handleInteract(this.player.focusedInteractable)}},this.ui.onPauseToggle=t=>{this.paused=t,this.audio.setSuspended(t||this.tabHidden),this.cutscenes.mode==="gameplay"&&!this.journey.transitioning&&(this.player.enabled=!t)},this.ui.onReturnToTitle=()=>{this.paused=!1,this.audio.setSuspended(!1),this.player.enabled=!1,this.flashlight.setEnabled(!1,!1),this.stages.loadStage(1),this.cutscenes.startTitleCamera(),this.ui.showTitleScreen()},this.ui.onFreeRoam=()=>{this.journey.freeRoam=!0,this.cutscenes.enterGameplay(),this.player.enabled=!0,this.journey.sayImmediate("تجول بحرية تحت النجوم والمجرة حول البيت المهجور.","night")},this.ui.onReplayJourney=()=>this.ui.onStartGame()}_bindVisibilityGuard(){document.addEventListener("visibilitychange",()=>{this.tabHidden=document.hidden,this.audio.setSuspended(this.tabHidden||this.paused),this.tabHidden||(this._lastRenderMs=performance.now())})}_applyPixelRatio(){const t=this.settings.data,e=this.settings.getPreset(),n=Math.max(.7,Math.min(1.85,Math.min(window.devicePixelRatio||1,e.dprCap)*t.resolutionScale));this.renderer.setPixelRatio(n)}_bindSettings(){const t=(e,n)=>{this._applyPixelRatio(),this.camera.fov=e.fov,this.camera.updateProjectionMatrix(),this.audio.setVolume(e.volume),this.texManager.setAnisotropy(n.anisotropy),this.sky.applySettings(e,n),this.stages.applySettings(n),this.dustStorm.applySettings(e,n)};t(this.settings.data,this.settings.getPreset()),this.settings.onChange(t)}_onResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1)}_animate(t){if(requestAnimationFrame(d=>this._animate(d)),this.tabHidden)return;if(this._renderedInitialFrame&&(this.paused||this.ui.isModalOpen||this.ui.isGateActive())){this._lastRenderMs=t;return}const i=1e3/(this.cutscenes.mode==="title"?24:this.settings.getEffectiveFpsCap());this._lastRenderMs===0&&(this._lastRenderMs=t-i);const r=t-this._lastRenderMs;if(this._renderedInitialFrame&&r<i-1.5)return;const o=Math.max(.001,r/1e3),a=Math.min(o,.055);if(this._lastRenderMs=t,this._renderedInitialFrame=!0,this.elapsed+=a,this.cutscenes.mode==="gameplay"){const d=this.stages.getActiveInteractable();this.player.update(a,this.elapsed,d),this.ui.updateInteractPrompt(this.player.focusedInteractable)}else this.cutscenes.update(a,this.elapsed);this.flashlight.update(a,this.elapsed,!1);const l=this.cutscenes.mode==="gameplay"?this.player.position:this.camera.position,c=this.cutscenes.mode==="gameplay"?this.player.isInsideHouse:!1,h=this.dustStorm.update(a,this.elapsed,this.camera,l,c,this.journey.stageId===2?.65:0);if(this.sky.setStormIntensity(h),this.stages.setStormIntensity(h),this.audio.setStormIntensity(h),this.sky.update(a,this.elapsed,this.camera,l,c),this.stages.update(a,this.elapsed,l,this.camera),this.audio.updateAmbience(a,c?1:0,this.elapsed),this.journey.update(a,this.elapsed,this.cutscenes.mode==="gameplay",l,this.player.yaw),this.renderer.render(this.scene,this.camera),this.fpsFrames++,this.fpsAccum+=o,this.fpsAccum>=.85){const d=this.fpsFrames/this.fpsAccum;this.ui.updateFPS(d),this.fpsFrames=0,this.fpsAccum=0}}_exposeDebugAPI(){window.__SARAB__={loadStage:async t=>{this.ui.dismissGateForDebug(),this.ui.hideTitleScreen(),this.cutscenes.enterGameplay(),this.ui.showHUD(),await this.journey.transitionToStage(t,{immediate:!0,showOverlay:!1})},teleport:(t,e,n,i=0)=>{this.ui.dismissGateForDebug(),this.ui.hideTitleScreen(),this.cutscenes.enterGameplay(),this.ui.showHUD(),this.player.enabled=!0,this.player.setPose(t,e,n,i),this.flashlight.update(.016,this.elapsed,!0)},setFlashlight:t=>{this.flashlight.setEnabled(!!t,!1),this.flashlight.update(.016,this.elapsed,!0),this.ui.setFlashlightUI(this.flashlight.enabled,this.journey.stageId===4)},setStorm:t=>{this.dustStorm.setTargetIntensity(t,!0),this.sky.setStormIntensity(t,!0),this.stages.setStormIntensity(t)},triggerSubtitle:(t,e="thought")=>this.journey.sayImmediate(t,e),testCollision:()=>{let e=0,n=0;for(const i of this.physics.cylinders)for(let r=0;r<8;r++){const o=r/8*Math.PI*2,a=this.stages.getHeight(i.x,i.z),l=new L(i.x+Math.cos(o)*(i.r*.4),a,i.z+Math.sin(o)*(i.r*.4));this.physics.resolveHorizontal(l,.36);const c=Math.hypot(l.x-i.x,l.z-i.z);c<i.r+.36-.02&&(e=Math.max(e,i.r+.36-c)),n++}return{stageId:this.journey.stageId,checks:n,collidersCount:this.physics.cylinders.length+this.physics.ellipses.length+this.physics.aabbs.length+this.physics.obbs.length+this.physics.mesas.length,solid:e<.03,maxPen:Number(e.toFixed(4))}},getStats:()=>({stageId:this.journey.stageId,walkSpeed:this.player.walkSpeed,surface:this.player.currentSurface,flashlightOn:this.flashlight.enabled,drawCalls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,geometriesInMemory:this.renderer.info.memory.geometries,texturesInMemory:this.renderer.info.memory.textures,shadowUpdates:this.sky.shadowUpdatesCount,skyCacheActive:this.sky.proceduralSky.useCache,pos:this.player.position.toArray().map(t=>Number(t.toFixed(2))),indoor:this.player.isInsideHouse,modelsLoaded:Array.from(this.modelManager.geometries.keys())})}}}window.addEventListener("DOMContentLoaded",()=>{new a0});
