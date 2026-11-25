(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pa="172",cl=0,oo=1,ll=2,La=1,vc=2,Mn=3,pn=0,we=1,fe=2,Bn=0,Li=1,os=2,co=3,lo=4,hl=5,$n=100,ul=101,dl=102,fl=103,pl=104,ml=200,gl=201,_l=202,xl=203,zr=204,kr=205,vl=206,yl=207,Ml=208,Sl=209,bl=210,El=211,wl=212,Tl=213,Al=214,Gr=0,Hr=1,Vr=2,Ui=3,Wr=4,Xr=5,qr=6,Yr=7,Ia=0,Cl=1,Rl=2,bn=0,Pl=1,Ll=2,Il=3,yc=4,Dl=5,Ul=6,Fl=7,Mc=300,Fi=301,Ni=302,jr=303,Zr=304,er=306,dn=1e3,Nn=1001,$r=1002,Xe=1003,Nl=1004,ps=1005,Ke=1006,ar=1007,ti=1008,Tn=1009,Sc=1010,bc=1011,cs=1012,Da=1013,ni=1014,fn=1015,us=1016,Ua=1017,Fa=1018,Bi=1020,Ec=35902,wc=1021,Tc=1022,on=1023,Ac=1024,Cc=1025,Ii=1026,Oi=1027,Na=1028,Ba=1029,Rc=1030,Oa=1031,za=1033,Hs=33776,Vs=33777,Ws=33778,Xs=33779,Kr=35840,Jr=35841,Qr=35842,ta=35843,ea=36196,na=37492,ia=37496,sa=37808,ra=37809,aa=37810,oa=37811,ca=37812,la=37813,ha=37814,ua=37815,da=37816,fa=37817,pa=37818,ma=37819,ga=37820,_a=37821,qs=36492,xa=36494,va=36495,Pc=36283,ya=36284,Ma=36285,Sa=36286,Bl=3200,Ol=3201,ka=0,zl=1,un="",xe="srgb",zi="srgb-linear",Zs="linear",Qt="srgb",ai=7680,ho=519,kl=512,Gl=513,Hl=514,Lc=515,Vl=516,Wl=517,Xl=518,ql=519,ba=35044,uo="300 es",Sn=2e3,$s=2001;class Hi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fo=1234567;const is=Math.PI/180,ki=180/Math.PI;function En(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[s&255]+Ce[s>>8&255]+Ce[s>>16&255]+Ce[s>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Ot(s,t,e){return Math.max(t,Math.min(e,s))}function Ga(s,t){return(s%t+t)%t}function Yl(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function jl(s,t,e){return s!==t?(e-s)/(t-s):0}function ss(s,t,e){return(1-e)*s+e*t}function Zl(s,t,e,n){return ss(s,t,1-Math.exp(-e*n))}function $l(s,t=1){return t-Math.abs(Ga(s,t*2)-t)}function Kl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Jl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Ql(s,t){return s+Math.floor(Math.random()*(t-s+1))}function th(s,t){return s+Math.random()*(t-s)}function eh(s){return s*(.5-Math.random())}function nh(s){s!==void 0&&(fo=s);let t=fo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ih(s){return s*is}function sh(s){return s*ki}function rh(s){return(s&s-1)===0&&s!==0}function ah(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function oh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ch(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*d,c*u,a*l);break;case"YZY":s.set(c*u,a*h,c*d,a*l);break;case"ZXZ":s.set(c*d,c*u,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*p,a*l);break;case"YXY":s.set(c*p,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function rn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Kt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const te={DEG2RAD:is,RAD2DEG:ki,generateUUID:En,clamp:Ot,euclideanModulo:Ga,mapLinear:Yl,inverseLerp:jl,lerp:ss,damp:Zl,pingpong:$l,smoothstep:Kl,smootherstep:Jl,randInt:Ql,randFloat:th,randFloatSpread:eh,seededRandom:nh,degToRad:ih,radToDeg:sh,isPowerOfTwo:rh,ceilPowerOfTwo:ah,floorPowerOfTwo:oh,setQuaternionFromProperEuler:ch,normalize:Kt,denormalize:rn};class yt{constructor(t=0,e=0){yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ot(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ot(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(t,e,n,i,r,o,a,c,l){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],x=i[1],y=i[4],v=i[7],A=i[2],w=i[5],T=i[8];return r[0]=o*_+a*x+c*A,r[3]=o*m+a*y+c*w,r[6]=o*f+a*v+c*T,r[1]=l*_+h*x+d*A,r[4]=l*m+h*y+d*w,r[7]=l*f+h*v+d*T,r[2]=u*_+p*x+g*A,r[5]=u*m+p*y+g*w,r[8]=u*f+p*v+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,p=l*r-o*c,g=e*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*l-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-a*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(or.makeScale(t,e)),this}rotate(t){return this.premultiply(or.makeRotation(-t)),this}translate(t,e){return this.premultiply(or.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const or=new Ut;function Ic(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ls(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lh(){const s=ls("canvas");return s.style.display="block",s}const po={};function wi(s){s in po||(po[s]=!0,console.warn(s))}function hh(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function uh(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function dh(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const mo=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),go=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fh(){const s={enabled:!0,workingColorSpace:zi,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Qt&&(i.r=wn(i.r),i.g=wn(i.g),i.b=wn(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Qt&&(i.r=Di(i.r),i.g=Di(i.g),i.b=Di(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===un?Zs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[zi]:{primaries:t,whitePoint:n,transfer:Zs,toXYZ:mo,fromXYZ:go,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:xe},outputColorSpaceConfig:{drawingBufferColorSpace:xe}},[xe]:{primaries:t,whitePoint:n,transfer:Qt,toXYZ:mo,fromXYZ:go,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:xe}}}),s}const Yt=fh();function wn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Di(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let oi;class ph{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{oi===void 0&&(oi=ls("canvas")),oi.width=t.width,oi.height=t.height;const n=oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ls("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=wn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wn(e[n]/255)*255):e[n]=wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mh=0;class Dc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=En(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(cr(i[o].image)):r.push(cr(i[o]))}else r=cr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function cr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ph.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gh=0;class Te extends Hi{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=Nn,i=Nn,r=Ke,o=ti,a=on,c=Tn,l=Te.DEFAULT_ANISOTROPY,h=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=En(),this.name="",this.source=new Dc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dn:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case $r:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dn:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case $r:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=Mc;Te.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,n=0,i=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,v=(p+1)/2,A=(f+1)/2,w=(h+u)/4,T=(d+_)/4,R=(g+m)/4;return y>v&&y>A?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=w/n,r=T/n):v>A?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=w/i,r=R/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=T/r,i=R/r),this.set(n,i,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-_)/x,this.z=(u-h)/x,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this.z=Ot(this.z,t.z,e.z),this.w=Ot(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this.z=Ot(this.z,t,e),this.w=Ot(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ot(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _h extends Hi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Te(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new Dc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends _h{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Uc extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xh extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class An{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==u||l!==p||h!==g){let m=1-a;const f=c*u+l*p+h*g+d*_,x=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const A=Math.sqrt(y),w=Math.atan2(A,f*x);m=Math.sin(m*w)/A,a=Math.sin(a*w)/A}const v=a*x;if(c=c*m+u*v,l=l*m+p*v,h=h*m+g*v,d=d*m+_*v,m===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=A,l*=A,h*=A,d*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*d+c*p-l*u,t[e+1]=c*g+h*u+l*d-a*p,t[e+2]=l*g+h*p+a*u-c*d,t[e+3]=h*g-a*d-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),d=a(r/2),u=c(n/2),p=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ot(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_o.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_o.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=i+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this.z=Ot(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this.z=Ot(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ot(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return lr.copy(this).projectOnVector(t),this.sub(lr)}reflect(t){return this.sub(lr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ot(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lr=new L,_o=new An;class si{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,tn):tn.fromBufferAttribute(r,o),tn.applyMatrix4(t.matrixWorld),this.expandByPoint(tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ms.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ms.copy(n.boundingBox)),ms.applyMatrix4(t.matrixWorld),this.union(ms)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qi),gs.subVectors(this.max,qi),ci.subVectors(t.a,qi),li.subVectors(t.b,qi),hi.subVectors(t.c,qi),Cn.subVectors(li,ci),Rn.subVectors(hi,li),Hn.subVectors(ci,hi);let e=[0,-Cn.z,Cn.y,0,-Rn.z,Rn.y,0,-Hn.z,Hn.y,Cn.z,0,-Cn.x,Rn.z,0,-Rn.x,Hn.z,0,-Hn.x,-Cn.y,Cn.x,0,-Rn.y,Rn.x,0,-Hn.y,Hn.x,0];return!hr(e,ci,li,hi,gs)||(e=[1,0,0,0,1,0,0,0,1],!hr(e,ci,li,hi,gs))?!1:(_s.crossVectors(Cn,Rn),e=[_s.x,_s.y,_s.z],hr(e,ci,li,hi,gs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gn=[new L,new L,new L,new L,new L,new L,new L,new L],tn=new L,ms=new si,ci=new L,li=new L,hi=new L,Cn=new L,Rn=new L,Hn=new L,qi=new L,gs=new L,_s=new L,Vn=new L;function hr(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Vn.fromArray(s,r);const a=i.x*Math.abs(Vn.x)+i.y*Math.abs(Vn.y)+i.z*Math.abs(Vn.z),c=t.dot(Vn),l=e.dot(Vn),h=n.dot(Vn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const vh=new si,Yi=new L,ur=new L;class Vi{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):vh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yi.subVectors(t,this.center);const e=Yi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Yi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ur.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yi.copy(t.center).add(ur)),this.expandByPoint(Yi.copy(t.center).sub(ur))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new L,dr=new L,xs=new L,Pn=new L,fr=new L,vs=new L,pr=new L;class Fc{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.origin).addScaledVector(this.direction,e),_n.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){dr.copy(t).add(e).multiplyScalar(.5),xs.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(dr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(xs),a=Pn.dot(this.direction),c=-Pn.dot(xs),l=Pn.lengthSq(),h=Math.abs(1-o*o);let d,u,p,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,p=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(dr).addScaledVector(xs,u),p}intersectSphere(t,e){_n.subVectors(t.center,this.origin);const n=_n.dot(this.direction),i=_n.dot(_n)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,n,i,r){fr.subVectors(e,t),vs.subVectors(n,t),pr.crossVectors(fr,vs);let o=this.direction.dot(pr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pn.subVectors(this.origin,t);const c=a*this.direction.dot(vs.crossVectors(Pn,vs));if(c<0)return null;const l=a*this.direction.dot(fr.cross(Pn));if(l<0||c+l>o)return null;const h=-a*Pn.dot(pr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(t,e,n,i,r,o,a,c,l,h,d,u,p,g,_,m){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,d,u,p,g,_,m)}set(t,e,n,i,r,o,a,c,l,h,d,u,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ui.setFromMatrixColumn(t,0).length(),r=1/ui.setFromMatrixColumn(t,1).length(),o=1/ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,p=o*d,g=a*h,_=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=u-_*l,e[9]=-a*c,e[2]=_-u*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,p=c*d,g=l*h,_=l*d;e[0]=u+_*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,p=c*d,g=l*h,_=l*d;e[0]=u-_*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,p=o*d,g=a*h,_=a*d;e[0]=c*h,e[4]=g*l-p,e[8]=u*l+_,e[1]=c*d,e[5]=_*l+u,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-u*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+_,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yh,t,Mh)}lookAt(t,e,n){const i=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Ln.crossVectors(n,Ve),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Ln.crossVectors(n,Ve)),Ln.normalize(),ys.crossVectors(Ve,Ln),i[0]=Ln.x,i[4]=ys.x,i[8]=Ve.x,i[1]=Ln.y,i[5]=ys.y,i[9]=Ve.y,i[2]=Ln.z,i[6]=ys.z,i[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],x=n[3],y=n[7],v=n[11],A=n[15],w=i[0],T=i[4],R=i[8],S=i[12],M=i[1],P=i[5],F=i[9],B=i[13],V=i[2],q=i[6],G=i[10],W=i[14],O=i[3],K=i[7],Q=i[11],J=i[15];return r[0]=o*w+a*M+c*V+l*O,r[4]=o*T+a*P+c*q+l*K,r[8]=o*R+a*F+c*G+l*Q,r[12]=o*S+a*B+c*W+l*J,r[1]=h*w+d*M+u*V+p*O,r[5]=h*T+d*P+u*q+p*K,r[9]=h*R+d*F+u*G+p*Q,r[13]=h*S+d*B+u*W+p*J,r[2]=g*w+_*M+m*V+f*O,r[6]=g*T+_*P+m*q+f*K,r[10]=g*R+_*F+m*G+f*Q,r[14]=g*S+_*B+m*W+f*J,r[3]=x*w+y*M+v*V+A*O,r[7]=x*T+y*P+v*q+A*K,r[11]=x*R+y*F+v*G+A*Q,r[15]=x*S+y*B+v*W+A*J,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*c*d-i*l*d-r*a*u+n*l*u+i*a*p-n*c*p)+_*(+e*c*p-e*l*u+r*o*u-i*o*p+i*l*h-r*c*h)+m*(+e*l*d-e*a*p-r*o*d+n*o*p+r*a*h-n*l*h)+f*(-i*a*h-e*c*d+e*a*u+i*o*d-n*o*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],x=d*m*l-_*u*l+_*c*p-a*m*p-d*c*f+a*u*f,y=g*u*l-h*m*l-g*c*p+o*m*p+h*c*f-o*u*f,v=h*_*l-g*d*l+g*a*p-o*_*p-h*a*f+o*d*f,A=g*d*c-h*_*c-g*a*u+o*_*u+h*a*m-o*d*m,w=e*x+n*y+i*v+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=x*T,t[1]=(_*u*r-d*m*r-_*i*p+n*m*p+d*i*f-n*u*f)*T,t[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*f+n*c*f)*T,t[3]=(d*c*r-a*u*r-d*i*l+n*u*l+a*i*p-n*c*p)*T,t[4]=y*T,t[5]=(h*m*r-g*u*r+g*i*p-e*m*p-h*i*f+e*u*f)*T,t[6]=(g*c*r-o*m*r-g*i*l+e*m*l+o*i*f-e*c*f)*T,t[7]=(o*u*r-h*c*r+h*i*l-e*u*l-o*i*p+e*c*p)*T,t[8]=v*T,t[9]=(g*d*r-h*_*r-g*n*p+e*_*p+h*n*f-e*d*f)*T,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*f+e*a*f)*T,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*p-e*a*p)*T,t[12]=A*T,t[13]=(h*_*i-g*d*i+g*n*u-e*_*u-h*n*m+e*d*m)*T,t[14]=(g*a*i-o*_*i-g*n*c+e*_*c+o*n*m-e*a*m)*T,t[15]=(o*d*i-h*a*i+h*n*c-e*d*c-o*n*u+e*a*u)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,p=r*h,g=r*d,_=o*h,m=o*d,f=a*d,x=c*l,y=c*h,v=c*d,A=n.x,w=n.y,T=n.z;return i[0]=(1-(_+f))*A,i[1]=(p+v)*A,i[2]=(g-y)*A,i[3]=0,i[4]=(p-v)*w,i[5]=(1-(u+f))*w,i[6]=(m+x)*w,i[7]=0,i[8]=(g+y)*T,i[9]=(m-x)*T,i[10]=(1-(u+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ui.set(i[0],i[1],i[2]).length();const o=ui.set(i[4],i[5],i[6]).length(),a=ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],en.copy(this);const l=1/r,h=1/o,d=1/a;return en.elements[0]*=l,en.elements[1]*=l,en.elements[2]*=l,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=d,en.elements[9]*=d,en.elements[10]*=d,e.setFromRotationMatrix(en),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Sn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let p,g;if(a===Sn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===$s)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Sn){const c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(o-r),u=(e+t)*l,p=(n+i)*h;let g,_;if(a===Sn)g=(o+r)*d,_=-2*d;else if(a===$s)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ui=new L,en=new zt,yh=new L(0,0,0),Mh=new L(1,1,1),Ln=new L,ys=new L,Ve=new L,xo=new zt,vo=new An;class Be{constructor(t=0,e=0,n=0,i=Be.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vo.setFromEuler(this),this.setFromQuaternion(vo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Be.DEFAULT_ORDER="XYZ";class Nc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sh=0;const yo=new L,di=new An,xn=new zt,Ms=new L,ji=new L,bh=new L,Eh=new An,Mo=new L(1,0,0),So=new L(0,1,0),bo=new L(0,0,1),Eo={type:"added"},wh={type:"removed"},fi={type:"childadded",child:null},mr={type:"childremoved",child:null};class re extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=re.DEFAULT_UP.clone();const t=new L,e=new Be,n=new An,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new zt},normalMatrix:{value:new Ut}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.multiply(di),this}rotateOnWorldAxis(t,e){return di.setFromAxisAngle(t,e),this.quaternion.premultiply(di),this}rotateX(t){return this.rotateOnAxis(Mo,t)}rotateY(t){return this.rotateOnAxis(So,t)}rotateZ(t){return this.rotateOnAxis(bo,t)}translateOnAxis(t,e){return yo.copy(t).applyQuaternion(this.quaternion),this.position.add(yo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mo,t)}translateY(t){return this.translateOnAxis(So,t)}translateZ(t){return this.translateOnAxis(bo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ms.copy(t):Ms.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(ji,Ms,this.up):xn.lookAt(Ms,ji,this.up),this.quaternion.setFromRotationMatrix(xn),i&&(xn.extractRotation(i.matrixWorld),di.setFromRotationMatrix(xn),this.quaternion.premultiply(di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Eo),fi.child=t,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wh),mr.child=t,this.dispatchEvent(mr),mr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Eo),fi.child=t,this.dispatchEvent(fi),fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,t,bh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,Eh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}re.DEFAULT_UP=new L(0,1,0);re.DEFAULT_MATRIX_AUTO_UPDATE=!0;re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new L,vn=new L,gr=new L,yn=new L,pi=new L,mi=new L,wo=new L,_r=new L,xr=new L,vr=new L,yr=new ee,Mr=new ee,Sr=new ee;class $e{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),nn.subVectors(t,e),i.cross(nn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){nn.subVectors(i,e),vn.subVectors(n,e),gr.subVectors(t,e);const o=nn.dot(nn),a=nn.dot(vn),c=nn.dot(gr),l=vn.dot(vn),h=vn.dot(gr),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,yn.x),c.addScaledVector(o,yn.y),c.addScaledVector(a,yn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return yr.setScalar(0),Mr.setScalar(0),Sr.setScalar(0),yr.fromBufferAttribute(t,e),Mr.fromBufferAttribute(t,n),Sr.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(yr,r.x),o.addScaledVector(Mr,r.y),o.addScaledVector(Sr,r.z),o}static isFrontFacing(t,e,n,i){return nn.subVectors(n,e),vn.subVectors(t,e),nn.cross(vn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),nn.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return $e.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;pi.subVectors(i,n),mi.subVectors(r,n),_r.subVectors(t,n);const c=pi.dot(_r),l=mi.dot(_r);if(c<=0&&l<=0)return e.copy(n);xr.subVectors(t,i);const h=pi.dot(xr),d=mi.dot(xr);if(h>=0&&d<=h)return e.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(pi,o);vr.subVectors(t,r);const p=pi.dot(vr),g=mi.dot(vr);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(mi,a);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return wo.subVectors(r,i),a=(d-h)/(d-h+(p-g)),e.copy(i).addScaledVector(wo,a);const f=1/(m+_+u);return o=_*f,a=u*f,e.copy(n).addScaledVector(pi,o).addScaledVector(mi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},Ss={h:0,s:0,l:0};function br(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Yt.workingColorSpace){if(t=Ga(t,1),e=Ot(e,0,1),n=Ot(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=br(o,r,t+1/3),this.g=br(o,r,t),this.b=br(o,r,t-1/3)}return Yt.toWorkingColorSpace(this,i),this}setStyle(t,e=xe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){const n=Bc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wn(t.r),this.g=wn(t.g),this.b=wn(t.b),this}copyLinearToSRGB(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return Yt.fromWorkingColorSpace(Re.copy(this),t),Math.round(Ot(Re.r*255,0,255))*65536+Math.round(Ot(Re.g*255,0,255))*256+Math.round(Ot(Re.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,i=Re.g,r=Re.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=xe){Yt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,i=Re.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(In),this.setHSL(In.h+t,In.s+e,In.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(In),t.getHSL(Ss);const n=ss(In.h,Ss.h,e),i=ss(In.s,Ss.s,e),r=ss(In.l,Ss.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new rt;rt.NAMES=Bc;let Th=0;class zn extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=En(),this.name="",this.type="Material",this.blending=Li,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zr,this.blendDst=kr,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ho,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zr&&(n.blendSrc=this.blendSrc),this.blendDst!==kr&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ho&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class an extends zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.combine=Ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new L,bs=new yt;class Jt{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ba,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)bs.fromBufferAttribute(this,e),bs.applyMatrix3(t),this.setXY(e,bs.x,bs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ba&&(t.usage=this.usage),t}}class Oc extends Jt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zc extends Jt{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ae extends Jt{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ah=0;const Ze=new zt,Er=new re,gi=new L,We=new si,Zi=new si,Me=new L;class me extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ic(t)?zc:Oc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ze.makeRotationFromQuaternion(t),this.applyMatrix4(Ze),this}rotateX(t){return Ze.makeRotationX(t),this.applyMatrix4(Ze),this}rotateY(t){return Ze.makeRotationY(t),this.applyMatrix4(Ze),this}rotateZ(t){return Ze.makeRotationZ(t),this.applyMatrix4(Ze),this}translate(t,e,n){return Ze.makeTranslation(t,e,n),this.applyMatrix4(Ze),this}scale(t,e,n){return Ze.makeScale(t,e,n),this.applyMatrix4(Ze),this}lookAt(t){return Er.lookAt(t),Er.updateMatrix(),this.applyMatrix4(Er.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ae(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Zi.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(We.min,Zi.min),We.expandByPoint(Me),Me.addVectors(We.max,Zi.max),We.expandByPoint(Me)):(We.expandByPoint(Zi.min),We.expandByPoint(Zi.max))}We.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Me.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Me));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Me.fromBufferAttribute(a,l),c&&(gi.fromBufferAttribute(t,l),Me.add(gi)),i=Math.max(i,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new L,c[R]=new L;const l=new L,h=new L,d=new L,u=new yt,p=new yt,g=new yt,_=new L,m=new L;function f(R,S,M){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,M),u.fromBufferAttribute(r,R),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(l),d.sub(l),p.sub(u),g.sub(u);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),a[R].add(_),a[S].add(_),a[M].add(_),c[R].add(m),c[S].add(m),c[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let R=0,S=x.length;R<S;++R){const M=x[R],P=M.start,F=M.count;for(let B=P,V=P+F;B<V;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const y=new L,v=new L,A=new L,w=new L;function T(R){A.fromBufferAttribute(i,R),w.copy(A);const S=a[R];y.copy(S),y.sub(A.multiplyScalar(A.dot(S))).normalize(),v.crossVectors(w,S);const P=v.dot(c[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,P)}for(let R=0,S=x.length;R<S;++R){const M=x[R],P=M.start,F=M.count;for(let B=P,V=P+F;B<V;B+=3)T(t.getX(B+0)),T(t.getX(B+1)),T(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,d=new L;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let f=0;f<h;f++)u[g++]=l[p++]}return new Jt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new me,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=t(u,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const To=new zt,Wn=new Fc,Es=new Vi,Ao=new L,ws=new L,Ts=new L,As=new L,wr=new L,Cs=new L,Co=new L,Rs=new L;class ft extends re{constructor(t=new me,e=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Cs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(wr.fromBufferAttribute(d,t),o?Cs.addScaledVector(wr,h):Cs.addScaledVector(wr.sub(e),h))}e.add(Cs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(r),Wn.copy(t.ray).recast(t.near),!(Es.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Es,Ao)===null||Wn.origin.distanceToSquared(Ao)>(t.far-t.near)**2))&&(To.copy(r).invert(),Wn.copy(t.ray).applyMatrix4(To),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,A=y;v<A;v+=3){const w=a.getX(v),T=a.getX(v+1),R=a.getX(v+2);i=Ps(this,f,t,n,l,h,d,w,T,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);i=Ps(this,o,t,n,l,h,d,x,y,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=x,A=y;v<A;v+=3){const w=v,T=v+1,R=v+2;i=Ps(this,f,t,n,l,h,d,w,T,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const x=m,y=m+1,v=m+2;i=Ps(this,o,t,n,l,h,d,x,y,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Ch(s,t,e,n,i,r,o,a){let c;if(t.side===we?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===pn,a),c===null)return null;Rs.copy(a),Rs.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Rs);return l<e.near||l>e.far?null:{distance:l,point:Rs.clone(),object:s}}function Ps(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,ws),s.getVertexPosition(c,Ts),s.getVertexPosition(l,As);const h=Ch(s,t,e,n,ws,Ts,As,Co);if(h){const d=new L;$e.getBarycoord(Co,ws,Ts,As,d),i&&(h.uv=$e.getInterpolatedAttribute(i,a,c,l,d,new yt)),r&&(h.uv1=$e.getInterpolatedAttribute(r,a,c,l,d,new yt)),o&&(h.normal=$e.getInterpolatedAttribute(o,a,c,l,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new L,materialIndex:0};$e.getNormal(ws,Ts,As,u.normal),h.face=u,h.barycoord=d}return h}class le extends me{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2));function g(_,m,f,x,y,v,A,w,T,R,S){const M=v/T,P=A/R,F=v/2,B=A/2,V=w/2,q=T+1,G=R+1;let W=0,O=0;const K=new L;for(let Q=0;Q<G;Q++){const J=Q*P-B;for(let vt=0;vt<q;vt++){const Rt=vt*M-F;K[_]=Rt*x,K[m]=J*y,K[f]=V,l.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[f]=w>0?1:-1,h.push(K.x,K.y,K.z),d.push(vt/T),d.push(1-Q/R),W+=1}}for(let Q=0;Q<R;Q++)for(let J=0;J<T;J++){const vt=u+J+q*Q,Rt=u+J+q*(Q+1),X=u+(J+1)+q*(Q+1),et=u+(J+1)+q*Q;c.push(vt,Rt,et),c.push(Rt,X,et),O+=6}a.addGroup(p,O,S),p+=O,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new le(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ue(s){const t={};for(let e=0;e<s.length;e++){const n=Gi(s[e]);for(const i in n)t[i]=n[i]}return t}function Rh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function kc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const Ph={clone:Gi,merge:Ue};var Lh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ih=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ge extends zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lh,this.fragmentShader=Ih,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=Rh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Gc extends re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Sn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dn=new L,Ro=new yt,Po=new yt;class ke extends Gc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ki*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ki*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z),Dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Dn.x,Dn.y).multiplyScalar(-t/Dn.z)}getViewSize(t,e){return this.getViewBounds(t,Ro,Po),e.subVectors(Po,Ro)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(is*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const _i=-90,xi=1;class Dh extends re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ke(_i,xi,t,e);i.layers=this.layers,this.add(i);const r=new ke(_i,xi,t,e);r.layers=this.layers,this.add(r);const o=new ke(_i,xi,t,e);o.layers=this.layers,this.add(o);const a=new ke(_i,xi,t,e);a.layers=this.layers,this.add(a);const c=new ke(_i,xi,t,e);c.layers=this.layers,this.add(c);const l=new ke(_i,xi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===$s)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Hc extends Te{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Fi,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Uh extends On{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Hc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new le(5,5,5),r=new Ge({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:we,blending:Bn});r.uniforms.tEquirect.value=e;const o=new ft(i,r),a=e.minFilter;return e.minFilter===ti&&(e.minFilter=Ke),new Dh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class Ha{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new rt(t),this.density=e}clone(){return new Ha(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ea extends re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Be,this.environmentIntensity=1,this.environmentRotation=new Be,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Fh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ba,this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const De=new L;class Ks{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Kt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Kt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=rn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Kt(e,this.array),n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Jt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ks(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Va extends zn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let vi;const $i=new L,yi=new L,Mi=new L,Si=new yt,Ki=new yt,Vc=new zt,Ls=new L,Ji=new L,Is=new L,Lo=new yt,Tr=new yt,Io=new yt;class Wc extends re{constructor(t=new Va){if(super(),this.isSprite=!0,this.type="Sprite",vi===void 0){vi=new me;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Fh(e,5);vi.setIndex([0,1,2,0,2,3]),vi.setAttribute("position",new Ks(n,3,0,!1)),vi.setAttribute("uv",new Ks(n,2,3,!1))}this.geometry=vi,this.material=t,this.center=new yt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yi.setFromMatrixScale(this.matrixWorld),Vc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Mi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yi.multiplyScalar(-Mi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Ds(Ls.set(-.5,-.5,0),Mi,o,yi,i,r),Ds(Ji.set(.5,-.5,0),Mi,o,yi,i,r),Ds(Is.set(.5,.5,0),Mi,o,yi,i,r),Lo.set(0,0),Tr.set(1,0),Io.set(1,1);let a=t.ray.intersectTriangle(Ls,Ji,Is,!1,$i);if(a===null&&(Ds(Ji.set(-.5,.5,0),Mi,o,yi,i,r),Tr.set(0,1),a=t.ray.intersectTriangle(Ls,Is,Ji,!1,$i),a===null))return;const c=t.ray.origin.distanceTo($i);c<t.near||c>t.far||e.push({distance:c,point:$i.clone(),uv:$e.getInterpolation($i,Ls,Ji,Is,Lo,Tr,Io,new yt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ds(s,t,e,n,i,r){Si.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ki.x=r*Si.x-i*Si.y,Ki.y=i*Si.x+r*Si.y):Ki.copy(Si),s.copy(t),s.x+=Ki.x,s.y+=Ki.y,s.applyMatrix4(Vc)}class Nh extends Te{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Xe,h=Xe,d,u){super(null,o,a,c,l,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Do extends Jt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const bi=new zt,Uo=new zt,Us=[],Fo=new si,Bh=new zt,Qi=new ft,ts=new Vi;class cn extends ft{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Do(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Bh)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new si),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),Fo.copy(t.boundingBox).applyMatrix4(bi),this.boundingBox.union(Fo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),ts.copy(t.boundingSphere).applyMatrix4(bi),this.boundingSphere.union(ts)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Qi.geometry=this.geometry,Qi.material=this.material,Qi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ts.copy(this.boundingSphere),ts.applyMatrix4(n),t.ray.intersectsSphere(ts)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,bi),Uo.multiplyMatrices(n,bi),Qi.matrixWorld=Uo,Qi.raycast(t,Us);for(let o=0,a=Us.length;o<a;o++){const c=Us[o];c.instanceId=r,c.object=this,e.push(c)}Us.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Do(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Nh(new Float32Array(i*this.count),i,this.count,Na,fn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Ar=new L,Oh=new L,zh=new Ut;class jn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ar.subVectors(n,e).cross(Oh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ar),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zh.getNormalMatrix(t),i=this.coplanarPoint(Ar).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new Vi,Fs=new L;class Wa{constructor(t=new jn,e=new jn,n=new jn,i=new jn,r=new jn,o=new jn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],x=i[13],y=i[14],v=i[15];if(n[0].setComponents(c-r,u-l,m-p,v-f).normalize(),n[1].setComponents(c+r,u+l,m+p,v+f).normalize(),n[2].setComponents(c+o,u+h,m+g,v+x).normalize(),n[3].setComponents(c-o,u-h,m-g,v-x).normalize(),n[4].setComponents(c-a,u-d,m-_,v-y).normalize(),e===Sn)n[5].setComponents(c+a,u+d,m+_,v+y).normalize();else if(e===$s)n[5].setComponents(a,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(t){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Fs.x=i.normal.x>0?t.max.x:t.min.x,Fs.y=i.normal.y>0?t.max.y:t.min.y,Fs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kh extends zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const No=new zt,wa=new Fc,Ns=new Vi,Bs=new L;class Gh extends re{constructor(t=new me,e=new kh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(i),Ns.radius+=r,t.ray.intersectsSphere(Ns)===!1)return;No.copy(i).invert(),wa.copy(t.ray).applyMatrix4(No);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=u,_=p;g<_;g++){const m=l.getX(g);Bs.fromBufferAttribute(d,m),Bo(Bs,m,c,i,t,e,this)}}else{const u=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=u,_=p;g<_;g++)Bs.fromBufferAttribute(d,g),Bo(Bs,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Bo(s,t,e,n,i,r,o){const a=wa.distanceSqToPoint(s);if(a<e){const c=new L;wa.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Pe extends re{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Ai extends Te{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xc extends Te{constructor(t,e,n,i,r,o,a,c,l,h=Ii){if(h!==Ii&&h!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ii&&(n=ni),n===void 0&&h===Oi&&(n=Bi),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Xe,this.minFilter=c!==void 0?c:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class hs extends me{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new L,h=new yt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const p=n+d/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(a,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Le extends me{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],p=[];let g=0;const _=[],m=n/2;let f=0;x(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(p,2));function x(){const v=new L,A=new L;let w=0;const T=(e-t)/n;for(let R=0;R<=r;R++){const S=[],M=R/r,P=M*(e-t)+t;for(let F=0;F<=i;F++){const B=F/i,V=B*c+a,q=Math.sin(V),G=Math.cos(V);A.x=P*q,A.y=-M*n+m,A.z=P*G,d.push(A.x,A.y,A.z),v.set(q,T,G).normalize(),u.push(v.x,v.y,v.z),p.push(B,1-M),S.push(g++)}_.push(S)}for(let R=0;R<i;R++)for(let S=0;S<r;S++){const M=_[S][R],P=_[S+1][R],F=_[S+1][R+1],B=_[S][R+1];(t>0||S!==0)&&(h.push(M,P,B),w+=3),(e>0||S!==r-1)&&(h.push(P,F,B),w+=3)}l.addGroup(f,w,0),f+=w}function y(v){const A=g,w=new yt,T=new L;let R=0;const S=v===!0?t:e,M=v===!0?1:-1;for(let F=1;F<=i;F++)d.push(0,m*M,0),u.push(0,M,0),p.push(.5,.5),g++;const P=g;for(let F=0;F<=i;F++){const V=F/i*c+a,q=Math.cos(V),G=Math.sin(V);T.x=S*G,T.y=m*M,T.z=S*q,d.push(T.x,T.y,T.z),u.push(0,M,0),w.x=q*.5+.5,w.y=G*.5*M+.5,p.push(w.x,w.y),g++}for(let F=0;F<i;F++){const B=A+F,V=P+F;v===!0?h.push(V,V+1,B):h.push(V+1,V,B),R+=3}l.addGroup(f,R,v===!0?1:2),f+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Le(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xa extends Le{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Xa(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qa extends me{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new L,v=new L,A=new L;for(let w=0;w<e.length;w+=3)p(e[w+0],y),p(e[w+1],v),p(e[w+2],A),c(y,v,A,x)}function c(x,y,v,A){const w=A+1,T=[];for(let R=0;R<=w;R++){T[R]=[];const S=x.clone().lerp(v,R/w),M=y.clone().lerp(v,R/w),P=w-R;for(let F=0;F<=P;F++)F===0&&R===w?T[R][F]=S:T[R][F]=S.clone().lerp(M,F/P)}for(let R=0;R<w;R++)for(let S=0;S<2*(w-R)-1;S++){const M=Math.floor(S/2);S%2===0?(u(T[R][M+1]),u(T[R+1][M]),u(T[R][M])):(u(T[R][M+1]),u(T[R+1][M+1]),u(T[R+1][M]))}}function l(x){const y=new L;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(x),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){const x=new L;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const v=m(x)/2/Math.PI+.5,A=f(x)/Math.PI+.5;o.push(v,1-A)}g(),d()}function d(){for(let x=0;x<o.length;x+=6){const y=o[x+0],v=o[x+2],A=o[x+4],w=Math.max(y,v,A),T=Math.min(y,v,A);w>.9&&T<.1&&(y<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),A<.2&&(o[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function p(x,y){const v=x*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){const x=new L,y=new L,v=new L,A=new L,w=new yt,T=new yt,R=new yt;for(let S=0,M=0;S<r.length;S+=9,M+=6){x.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),w.set(o[M+0],o[M+1]),T.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),A.copy(x).add(y).add(v).divideScalar(3);const P=m(A);_(w,M+0,x,P),_(T,M+2,y,P),_(R,M+4,v,P)}}function _(x,y,v,A){A<0&&x.x===1&&(o[y]=x.x-1),v.x===0&&v.z===0&&(o[y]=A/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.vertices,t.indices,t.radius,t.details)}}class Js extends qa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Js(t.radius,t.detail)}}class Ee extends me{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,d=t/a,u=e/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const x=f*u-o;for(let y=0;y<l;y++){const v=y*d-r;g.push(v,-x,0),_.push(0,0,1),m.push(y/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<a;x++){const y=x+l*f,v=x+l*(f+1),A=x+1+l*(f+1),w=x+1+l*f;p.push(y,v,w),p.push(v,A,w)}this.setIndex(p),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ee(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ya extends me{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],h=[];let d=t;const u=(e-t)/i,p=new L,g=new yt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=d*Math.cos(f),p.y=d*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<i;_++){const m=_*(n+1);for(let f=0;f<n;f++){const x=f+m,y=x,v=x+n+1,A=x+n+2,w=x+1;a.push(y,v,w),a.push(v,A,w)}}this.setIndex(a),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ya(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ii extends me{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new L,u=new L,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const x=[],y=f/n;let v=0;f===0&&o===0?v=.5/e:f===n&&c===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const w=A/e;d.x=-t*Math.cos(i+w*r)*Math.sin(o+y*a),d.y=t*Math.cos(o+y*a),d.z=t*Math.sin(i+w*r)*Math.sin(o+y*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(w+v,1-y),x.push(l++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<e;x++){const y=h[f][x+1],v=h[f][x],A=h[f+1][x],w=h[f+1][x+1];(f!==0||o>0)&&p.push(y,v,w),(f!==n-1||c<Math.PI)&&p.push(v,A,w)}this.setIndex(p),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ja extends me{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new L,d=new L,u=new L;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,x=(i+1)*p+g;o.push(_,m,x),o.push(m,f,x)}this.setIndex(o),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ja(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ne extends zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ce extends zn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Be,this.combine=Ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Hh extends zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vh extends zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Oo={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Wh{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Xh=new Wh;class Za{constructor(t){this.manager=t!==void 0?t:Xh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Za.DEFAULT_MATERIAL_NAME="__DEFAULT";class qh extends Za{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Oo.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=ls("img");function c(){h(),Oo.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(d){h(),i&&i(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class qc extends Za{constructor(t){super(t)}load(t,e,n,i){const r=new Te,o=new qh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class nr extends re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Yh extends nr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Cr=new zt,zo=new L,ko=new L;class $a{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wa,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;zo.setFromMatrixPosition(t.matrixWorld),e.position.copy(zo),ko.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ko),e.updateMatrixWorld(),Cr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class jh extends $a{constructor(){super(new ke(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ki*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Zh extends nr{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(re.DEFAULT_UP),this.updateMatrix(),this.target=new re,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new jh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Go=new zt,es=new L,Rr=new L;class $h extends $a{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new yt(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),es.setFromMatrixPosition(t.matrixWorld),n.position.copy(es),Rr.copy(n.position),Rr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Rr),n.updateMatrixWorld(),i.makeTranslation(-es.x,-es.y,-es.z),Go.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Go)}}class Ka extends nr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new $h}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ja extends Gc{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Kh extends $a{constructor(){super(new Ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ho extends nr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(re.DEFAULT_UP),this.updateMatrix(),this.target=new re,this.shadow=new Kh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Jh extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}function Vo(s,t,e,n){const i=Qh(n);switch(e){case wc:return s*t;case Ac:return s*t;case Cc:return s*t*2;case Na:return s*t/i.components*i.byteLength;case Ba:return s*t/i.components*i.byteLength;case Rc:return s*t*2/i.components*i.byteLength;case Oa:return s*t*2/i.components*i.byteLength;case Tc:return s*t*3/i.components*i.byteLength;case on:return s*t*4/i.components*i.byteLength;case za:return s*t*4/i.components*i.byteLength;case Hs:case Vs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ws:case Xs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Jr:case ta:return Math.max(s,16)*Math.max(t,8)/4;case Kr:case Qr:return Math.max(s,8)*Math.max(t,8)/2;case ea:case na:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ia:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ra:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case aa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case oa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ca:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case la:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ha:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ua:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case da:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case fa:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case pa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ma:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ga:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case _a:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case qs:case xa:case va:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Pc:case ya:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ma:case Sa:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qh(s){switch(s){case Tn:case Sc:return{byteLength:1,components:1};case cs:case bc:case us:return{byteLength:2,components:1};case Ua:case Fa:return{byteLength:2,components:4};case ni:case Da:case fn:return{byteLength:4,components:1};case Ec:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pa);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yc(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function tu(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(s.bindBuffer(l,a),d.length===0)s.bufferSubData(l,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var eu=`#ifdef USE_ALPHAHASH
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
#endif`,cu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lu=`#ifdef USE_BATCHING
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
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ju=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zu=`varying vec3 vViewPosition;
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
#endif`,cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jd=`#ifdef USE_TRANSMISSION
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
#endif`,Zd=`#ifdef USE_TRANSMISSION
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
}`,cf=`#if DEPTH_PACKING == 3200
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
}`,lf=`#define DISTANCE
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
}`,xf=`#define LAMBERT
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
}`,vf=`#define MATCAP
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
}`,Bt={alphahash_fragment:eu,alphahash_pars_fragment:nu,alphamap_fragment:iu,alphamap_pars_fragment:su,alphatest_fragment:ru,alphatest_pars_fragment:au,aomap_fragment:ou,aomap_pars_fragment:cu,batching_pars_vertex:lu,batching_vertex:hu,begin_vertex:uu,beginnormal_vertex:du,bsdfs:fu,iridescence_fragment:pu,bumpmap_pars_fragment:mu,clipping_planes_fragment:gu,clipping_planes_pars_fragment:_u,clipping_planes_pars_vertex:xu,clipping_planes_vertex:vu,color_fragment:yu,color_pars_fragment:Mu,color_pars_vertex:Su,color_vertex:bu,common:Eu,cube_uv_reflection_fragment:wu,defaultnormal_vertex:Tu,displacementmap_pars_vertex:Au,displacementmap_vertex:Cu,emissivemap_fragment:Ru,emissivemap_pars_fragment:Pu,colorspace_fragment:Lu,colorspace_pars_fragment:Iu,envmap_fragment:Du,envmap_common_pars_fragment:Uu,envmap_pars_fragment:Fu,envmap_pars_vertex:Nu,envmap_physical_pars_fragment:Yu,envmap_vertex:Bu,fog_vertex:Ou,fog_pars_vertex:zu,fog_fragment:ku,fog_pars_fragment:Gu,gradientmap_pars_fragment:Hu,lightmap_pars_fragment:Vu,lights_lambert_fragment:Wu,lights_lambert_pars_fragment:Xu,lights_pars_begin:qu,lights_toon_fragment:ju,lights_toon_pars_fragment:Zu,lights_phong_fragment:$u,lights_phong_pars_fragment:Ku,lights_physical_fragment:Ju,lights_physical_pars_fragment:Qu,lights_fragment_begin:td,lights_fragment_maps:ed,lights_fragment_end:nd,logdepthbuf_fragment:id,logdepthbuf_pars_fragment:sd,logdepthbuf_pars_vertex:rd,logdepthbuf_vertex:ad,map_fragment:od,map_pars_fragment:cd,map_particle_fragment:ld,map_particle_pars_fragment:hd,metalnessmap_fragment:ud,metalnessmap_pars_fragment:dd,morphinstance_vertex:fd,morphcolor_vertex:pd,morphnormal_vertex:md,morphtarget_pars_vertex:gd,morphtarget_vertex:_d,normal_fragment_begin:xd,normal_fragment_maps:vd,normal_pars_fragment:yd,normal_pars_vertex:Md,normal_vertex:Sd,normalmap_pars_fragment:bd,clearcoat_normal_fragment_begin:Ed,clearcoat_normal_fragment_maps:wd,clearcoat_pars_fragment:Td,iridescence_pars_fragment:Ad,opaque_fragment:Cd,packing:Rd,premultiplied_alpha_fragment:Pd,project_vertex:Ld,dithering_fragment:Id,dithering_pars_fragment:Dd,roughnessmap_fragment:Ud,roughnessmap_pars_fragment:Fd,shadowmap_pars_fragment:Nd,shadowmap_pars_vertex:Bd,shadowmap_vertex:Od,shadowmask_pars_fragment:zd,skinbase_vertex:kd,skinning_pars_vertex:Gd,skinning_vertex:Hd,skinnormal_vertex:Vd,specularmap_fragment:Wd,specularmap_pars_fragment:Xd,tonemapping_fragment:qd,tonemapping_pars_fragment:Yd,transmission_fragment:jd,transmission_pars_fragment:Zd,uv_pars_fragment:$d,uv_pars_vertex:Kd,uv_vertex:Jd,worldpos_vertex:Qd,background_vert:tf,background_frag:ef,backgroundCube_vert:nf,backgroundCube_frag:sf,cube_vert:rf,cube_frag:af,depth_vert:of,depth_frag:cf,distanceRGBA_vert:lf,distanceRGBA_frag:hf,equirect_vert:uf,equirect_frag:df,linedashed_vert:ff,linedashed_frag:pf,meshbasic_vert:mf,meshbasic_frag:gf,meshlambert_vert:_f,meshlambert_frag:xf,meshmatcap_vert:vf,meshmatcap_frag:yf,meshnormal_vert:Mf,meshnormal_frag:Sf,meshphong_vert:bf,meshphong_frag:Ef,meshphysical_vert:wf,meshphysical_frag:Tf,meshtoon_vert:Af,meshtoon_frag:Cf,points_vert:Rf,points_frag:Pf,shadow_vert:Lf,shadow_frag:If,sprite_vert:Df,sprite_frag:Uf},ot={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},hn={basic:{uniforms:Ue([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ue([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new rt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ue([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ue([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ue([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new rt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ue([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ue([ot.points,ot.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ue([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ue([ot.common,ot.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ue([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ue([ot.sprite,ot.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ue([ot.common,ot.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ue([ot.lights,ot.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};hn.physical={uniforms:Ue([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Os={r:0,b:0,g:0},qn=new Be,Ff=new zt;function Nf(s,t,e,n,i,r,o){const a=new rt(0);let c=r===!0?0:1,l,h,d=null,u=0,p=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1;const A=g(y);A===null?f(a,c):A&&A.isColor&&(f(A,1),v=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,v){const A=g(v);A&&(A.isCubeTexture||A.mapping===er)?(h===void 0&&(h=new ft(new le(1,1,1),new Ge({name:"BackgroundCubeMaterial",uniforms:Gi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:we,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),qn.copy(v.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ff.makeRotationFromEuler(qn)),h.material.toneMapped=Yt.getTransfer(A.colorSpace)!==Qt,(d!==A||u!==A.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=A,u=A.version,p=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new ft(new Ee(2,2),new Ge({name:"BackgroundMaterial",uniforms:Gi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(A.colorSpace)!==Qt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||u!==A.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,d=A,u=A.version,p=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function f(y,v){y.getRGB(Os,kc(s)),n.buffers.color.setClear(Os.r,Os.g,Os.b,v,o)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),l!==void 0&&(l.geometry.dispose(),l.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),c=v,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,f(a,c)},render:_,addToRenderList:m,dispose:x}}function Bf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(M,P,F,B,V){let q=!1;const G=d(B,F,P);r!==G&&(r=G,l(r.object)),q=p(M,B,F,V),q&&g(M,B,F,V),V!==null&&t.update(V,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(M,P,F,B),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function d(M,P,F){const B=F.wireframe===!0;let V=n[M.id];V===void 0&&(V={},n[M.id]=V);let q=V[P.id];q===void 0&&(q={},V[P.id]=q);let G=q[B];return G===void 0&&(G=u(c()),q[B]=G),G}function u(M){const P=[],F=[],B=[];for(let V=0;V<e;V++)P[V]=0,F[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:B,object:M,attributes:{},index:null}}function p(M,P,F,B){const V=r.attributes,q=P.attributes;let G=0;const W=F.getAttributes();for(const O in W)if(W[O].location>=0){const Q=V[O];let J=q[O];if(J===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),Q===void 0||Q.attribute!==J||J&&Q.data!==J.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function g(M,P,F,B){const V={},q=P.attributes;let G=0;const W=F.getAttributes();for(const O in W)if(W[O].location>=0){let Q=q[O];Q===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor));const J={};J.attribute=Q,Q&&Q.data&&(J.data=Q.data),V[O]=J,G++}r.attributes=V,r.attributesNum=G,r.index=B}function _(){const M=r.newAttributes;for(let P=0,F=M.length;P<F;P++)M[P]=0}function m(M){f(M,0)}function f(M,P){const F=r.newAttributes,B=r.enabledAttributes,V=r.attributeDivisors;F[M]=1,B[M]===0&&(s.enableVertexAttribArray(M),B[M]=1),V[M]!==P&&(s.vertexAttribDivisor(M,P),V[M]=P)}function x(){const M=r.newAttributes,P=r.enabledAttributes;for(let F=0,B=P.length;F<B;F++)P[F]!==M[F]&&(s.disableVertexAttribArray(F),P[F]=0)}function y(M,P,F,B,V,q,G){G===!0?s.vertexAttribIPointer(M,P,F,V,q):s.vertexAttribPointer(M,P,F,B,V,q)}function v(M,P,F,B){_();const V=B.attributes,q=F.getAttributes(),G=P.defaultAttributeValues;for(const W in q){const O=q[W];if(O.location>=0){let K=V[W];if(K===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(K=M.instanceColor)),K!==void 0){const Q=K.normalized,J=K.itemSize,vt=t.get(K);if(vt===void 0)continue;const Rt=vt.buffer,X=vt.type,et=vt.bytesPerElement,at=X===s.INT||X===s.UNSIGNED_INT||K.gpuType===Da;if(K.isInterleavedBufferAttribute){const st=K.data,bt=st.stride,Tt=K.offset;if(st.isInstancedInterleavedBuffer){for(let Ft=0;Ft<O.locationSize;Ft++)f(O.location+Ft,st.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ft=0;Ft<O.locationSize;Ft++)m(O.location+Ft);s.bindBuffer(s.ARRAY_BUFFER,Rt);for(let Ft=0;Ft<O.locationSize;Ft++)y(O.location+Ft,J/O.locationSize,X,Q,bt*et,(Tt+J/O.locationSize*Ft)*et,at)}else{if(K.isInstancedBufferAttribute){for(let st=0;st<O.locationSize;st++)f(O.location+st,K.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let st=0;st<O.locationSize;st++)m(O.location+st);s.bindBuffer(s.ARRAY_BUFFER,Rt);for(let st=0;st<O.locationSize;st++)y(O.location+st,J/O.locationSize,X,Q,J*et,J/O.locationSize*st*et,at)}}else if(G!==void 0){const Q=G[W];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(O.location,Q);break;case 3:s.vertexAttrib3fv(O.location,Q);break;case 4:s.vertexAttrib4fv(O.location,Q);break;default:s.vertexAttrib1fv(O.location,Q)}}}}x()}function A(){R();for(const M in n){const P=n[M];for(const F in P){const B=P[F];for(const V in B)h(B[V].object),delete B[V];delete P[F]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const F in P){const B=P[F];for(const V in B)h(B[V].object),delete B[V];delete P[F]}delete n[M.id]}function T(M){for(const P in n){const F=n[P];if(F[M.id]===void 0)continue;const B=F[M.id];for(const V in B)h(B[V].object),delete B[V];delete F[M.id]}}function R(){S(),o=!0,r!==i&&(r=i,l(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function Of(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(s.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function c(l,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function zf(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==on&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===us&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Tn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==fn&&!R)}function c(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:A,maxSamples:w}}function kf(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new jn,a=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const x=r?0:n,y=x*4;let v=f.clippingState||null;c.value=v,v=h(g,u,y,p);for(let A=0;A!==y;++A)v[A]=e[A];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,v=p;y!==_;++y,v+=4)o.copy(d[y]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Gf(s){let t=new WeakMap;function e(o,a){return a===jr?o.mapping=Fi:a===Zr&&(o.mapping=Ni),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===jr||a===Zr)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Uh(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ci=4,Wo=[.125,.215,.35,.446,.526,.582],Kn=20,Pr=new Ja,Xo=new rt;let Lr=null,Ir=0,Dr=0,Ur=!1;const Zn=(1+Math.sqrt(5))/2,Ei=1/Zn,qo=[new L(-Zn,Ei,0),new L(Zn,Ei,0),new L(-Ei,0,Zn),new L(Ei,0,Zn),new L(0,Zn,-Ei),new L(0,Zn,Ei),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Ta{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Lr=this._renderer.getRenderTarget(),Ir=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Lr,Ir,Dr),this._renderer.xr.enabled=Ur,t.scissorTest=!1,zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fi||t.mapping===Ni?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lr=this._renderer.getRenderTarget(),Ir=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Ur=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:us,format:on,colorSpace:zi,depthBuffer:!1},i=Yo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hf(r)),this._blurMaterial=Vf(r,t,e)}return i}_compileMaterial(t){const e=new ft(this._lodPlanes[0],t);this._renderer.compile(e,Pr)}_sceneToCubeUV(t,e,n,i){const a=new ke(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Xo),h.toneMapping=bn,h.autoClear=!1;const p=new an({name:"PMREM.Background",side:we,depthWrite:!1,depthTest:!1}),g=new ft(new le,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Xo),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):x===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const y=this._cubeSize;zs(i,x*y,f>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Fi||t.mapping===Ni;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jo());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ft(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;zs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Pr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=qo[(i-r-1)%qo.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ft(this._lodPlanes[i],l),u=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Kn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Kn;m>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kn}`);const f=[];let x=0;for(let T=0;T<Kn;++T){const R=T/_,S=Math.exp(-R*R/2);f.push(S),T===0?x+=S:T<m&&(x+=2*S)}for(let T=0;T<f.length;T++)f[T]=f[T]/x;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const v=this._sizeLods[i],A=3*v*(i>y-Ci?i-y+Ci:0),w=4*(this._cubeSize-v);zs(e,A,w,3*v,2*v),c.setRenderTarget(e),c.render(d,Pr)}}function Hf(s){const t=[],e=[],n=[];let i=s;const r=s-Ci+1+Wo.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Ci?c=Wo[o-s+Ci-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,x=new Float32Array(_*g*p),y=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let w=0;w<p;w++){const T=w%3*2/3-1,R=w>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];x.set(S,_*g*w),y.set(u,m*g*w);const M=[w,w,w,w,w,w];v.set(M,f*g*w)}const A=new me;A.setAttribute("position",new Jt(x,_)),A.setAttribute("uv",new Jt(y,m)),A.setAttribute("faceIndex",new Jt(v,f)),t.push(A),i>Ci&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Yo(s,t,e){const n=new On(s,t,e);return n.texture.mapping=er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Vf(s,t,e){const n=new Float32Array(Kn),i=new L(0,1,0);return new Ge({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function jo(){return new Ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Zo(){return new Ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Qa(){return`

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
	`}function Wf(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===jr||c===Zr,h=c===Fi||c===Ni;if(l||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Ta(s)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Ta(s)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Xf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&wi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qf(s,t,e,n){const i={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete i[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const p in u)t.update(u[p],s.ARRAY_BUFFER)}function l(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let y=0,v=x.length;y<v;y+=3){const A=x[y+0],w=x[y+1],T=x[y+2];u.push(A,w,w,T,T,A)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const A=y+0,w=y+1,T=y+2;u.push(A,w,w,T,T,A)}}else return;const m=new(Ic(u)?zc:Oc)(u,1);m.version=_;const f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Yf(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,p){s.drawElements(n,p,r,u*o),e.update(p,n,1)}function l(u,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,u*o,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function d(u,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)l(u[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,_,0,g);let f=0;for(let x=0;x<g;x++)f+=p[x]*_[x];e.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function jf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Zf(s,t,e){const n=new WeakMap,i=new ee;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let M=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var p=M;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let A=a.attributes.position.count*v,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const T=new Float32Array(A*w*4*d),R=new Uc(T,A,w,d);R.type=fn,R.needsUpdate=!0;const S=v*4;for(let P=0;P<d;P++){const F=f[P],B=x[P],V=y[P],q=A*w*4*P;for(let G=0;G<F.count;G++){const W=G*S;g===!0&&(i.fromBufferAttribute(F,G),T[q+W+0]=i.x,T[q+W+1]=i.y,T[q+W+2]=i.z,T[q+W+3]=0),_===!0&&(i.fromBufferAttribute(B,G),T[q+W+4]=i.x,T[q+W+5]=i.y,T[q+W+6]=i.z,T[q+W+7]=0),m===!0&&(i.fromBufferAttribute(V,G),T[q+W+8]=i.x,T[q+W+9]=i.y,T[q+W+10]=i.z,T[q+W+11]=V.itemSize===4?i.w:1)}}u={count:d,texture:R,size:new yt(A,w)},n.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function $f(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const jc=new Te,$o=new Xc(1,1),Zc=new Uc,$c=new xh,Kc=new Hc,Ko=[],Jo=[],Qo=new Float32Array(16),tc=new Float32Array(9),ec=new Float32Array(4);function Wi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Ko[i];if(r===void 0&&(r=new Float32Array(i),Ko[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ve(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ye(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ir(s,t){let e=Jo[t];e===void 0&&(e=new Int32Array(t),Jo[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Kf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Jf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2fv(this.addr,t),ye(e,t)}}function Qf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;s.uniform3fv(this.addr,t),ye(e,t)}}function tp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4fv(this.addr,t),ye(e,t)}}function ep(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;ec.set(n),s.uniformMatrix2fv(this.addr,!1,ec),ye(e,n)}}function np(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;tc.set(n),s.uniformMatrix3fv(this.addr,!1,tc),ye(e,n)}}function ip(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;Qo.set(n),s.uniformMatrix4fv(this.addr,!1,Qo),ye(e,n)}}function sp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function rp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2iv(this.addr,t),ye(e,t)}}function ap(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3iv(this.addr,t),ye(e,t)}}function op(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4iv(this.addr,t),ye(e,t)}}function cp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function lp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2uiv(this.addr,t),ye(e,t)}}function hp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3uiv(this.addr,t),ye(e,t)}}function up(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4uiv(this.addr,t),ye(e,t)}}function dp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?($o.compareFunction=Lc,r=$o):r=jc,e.setTexture2D(t||r,i)}function fp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||$c,i)}function pp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Kc,i)}function mp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Zc,i)}function gp(s){switch(s){case 5126:return Kf;case 35664:return Jf;case 35665:return Qf;case 35666:return tp;case 35674:return ep;case 35675:return np;case 35676:return ip;case 5124:case 35670:return sp;case 35667:case 35671:return rp;case 35668:case 35672:return ap;case 35669:case 35673:return op;case 5125:return cp;case 36294:return lp;case 36295:return hp;case 36296:return up;case 35678:case 36198:case 36298:case 36306:case 35682:return dp;case 35679:case 36299:case 36307:return fp;case 35680:case 36300:case 36308:case 36293:return pp;case 36289:case 36303:case 36311:case 36292:return mp}}function _p(s,t){s.uniform1fv(this.addr,t)}function xp(s,t){const e=Wi(t,this.size,2);s.uniform2fv(this.addr,e)}function vp(s,t){const e=Wi(t,this.size,3);s.uniform3fv(this.addr,e)}function yp(s,t){const e=Wi(t,this.size,4);s.uniform4fv(this.addr,e)}function Mp(s,t){const e=Wi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Sp(s,t){const e=Wi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function bp(s,t){const e=Wi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Ep(s,t){s.uniform1iv(this.addr,t)}function wp(s,t){s.uniform2iv(this.addr,t)}function Tp(s,t){s.uniform3iv(this.addr,t)}function Ap(s,t){s.uniform4iv(this.addr,t)}function Cp(s,t){s.uniform1uiv(this.addr,t)}function Rp(s,t){s.uniform2uiv(this.addr,t)}function Pp(s,t){s.uniform3uiv(this.addr,t)}function Lp(s,t){s.uniform4uiv(this.addr,t)}function Ip(s,t,e){const n=this.cache,i=t.length,r=ir(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||jc,r[o])}function Dp(s,t,e){const n=this.cache,i=t.length,r=ir(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||$c,r[o])}function Up(s,t,e){const n=this.cache,i=t.length,r=ir(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Kc,r[o])}function Fp(s,t,e){const n=this.cache,i=t.length,r=ir(e,i);ve(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Zc,r[o])}function Np(s){switch(s){case 5126:return _p;case 35664:return xp;case 35665:return vp;case 35666:return yp;case 35674:return Mp;case 35675:return Sp;case 35676:return bp;case 5124:case 35670:return Ep;case 35667:case 35671:return wp;case 35668:case 35672:return Tp;case 35669:case 35673:return Ap;case 5125:return Cp;case 36294:return Rp;case 36295:return Pp;case 36296:return Lp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ip;case 35679:case 36299:case 36307:return Dp;case 35680:case 36300:case 36308:case 36293:return Up;case 36289:case 36303:case 36311:case 36292:return Fp}}class Bp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gp(e.type)}}class Op{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Np(e.type)}}class zp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Fr=/(\w+)(\])?(\[|\.)?/g;function nc(s,t){s.seq.push(t),s.map[t.id]=t}function kp(s,t,e){const n=s.name,i=n.length;for(Fr.lastIndex=0;;){const r=Fr.exec(n),o=Fr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){nc(e,l===void 0?new Bp(a,s,t):new Op(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new zp(a),nc(e,d)),e=d}}}class Ys{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);kp(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function ic(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Gp=37297;let Hp=0;function Vp(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const sc=new Ut;function Wp(s){Yt._getMatrix(sc,Yt.workingColorSpace,s);const t=`mat3( ${sc.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(s)){case Zs:return[t,"LinearTransferOETF"];case Qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function rc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Vp(s.getShaderSource(t),o)}else return i}function Xp(s,t){const e=Wp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function qp(s,t){let e;switch(t){case Pl:e="Linear";break;case Ll:e="Reinhard";break;case Il:e="Cineon";break;case yc:e="ACESFilmic";break;case Ul:e="AgX";break;case Fl:e="Neutral";break;case Dl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ks=new L;function Yp(){Yt.getLuminanceCoefficients(ks);const s=ks.x.toFixed(4),t=ks.y.toFixed(4),e=ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function Zp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $p(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ns(s){return s!==""}function ac(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function oc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Kp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Aa(s){return s.replace(Kp,Qp)}const Jp=new Map;function Qp(s,t){let e=Bt[t];if(e===void 0){const n=Jp.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Aa(e)}const tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cc(s){return s.replace(tm,em)}function em(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function lc(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function nm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===La?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===vc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function im(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Fi:case Ni:t="ENVMAP_TYPE_CUBE";break;case er:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ni:t="ENVMAP_MODE_REFRACTION";break}return t}function rm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ia:t="ENVMAP_BLENDING_MULTIPLY";break;case Cl:t="ENVMAP_BLENDING_MIX";break;case Rl:t="ENVMAP_BLENDING_ADD";break}return t}function am(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function om(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=nm(e),l=im(e),h=sm(e),d=rm(e),u=am(e),p=jp(e),g=Zp(r),_=i.createProgram();let m,f,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ns).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ns).join(`
`),f.length>0&&(f+=`
`)):(m=[lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),f=[lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bn?"#define TONE_MAPPING":"",e.toneMapping!==bn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==bn?qp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Xp("linearToOutputTexel",e.outputColorSpace),Yp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ns).join(`
`)),o=Aa(o),o=ac(o,e),o=oc(o,e),a=Aa(a),a=ac(a,e),a=oc(a,e),o=cc(o),a=cc(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===uo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=x+m+o,v=x+f+a,A=ic(i,i.VERTEX_SHADER,y),w=ic(i,i.FRAGMENT_SHADER,v);i.attachShader(_,A),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(P){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(A).trim(),V=i.getShaderInfoLog(w).trim();let q=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,w);else{const W=rc(i,A,"vertex"),O=rc(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+W+`
`+O)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||V==="")&&(G=!1);G&&(P.diagnostics={runnable:q,programLog:F,vertexShader:{log:B,prefix:m},fragmentShader:{log:V,prefix:f}})}i.deleteShader(A),i.deleteShader(w),R=new Ys(i,_),S=$p(i,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Gp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let cm=0;class lm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new hm(t),e.set(t,n)),n}}class hm{constructor(t){this.id=cm++,this.code=t,this.usedTimes=0}}function um(s,t,e,n,i,r,o){const a=new Nc,c=new lm,l=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,P,F,B){const V=F.fog,q=B.geometry,G=S.isMeshStandardMaterial?F.environment:null,W=(S.isMeshStandardMaterial?e:t).get(S.envMap||G),O=W&&W.mapping===er?W.image.height:null,K=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const Q=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,J=Q!==void 0?Q.length:0;let vt=0;q.morphAttributes.position!==void 0&&(vt=1),q.morphAttributes.normal!==void 0&&(vt=2),q.morphAttributes.color!==void 0&&(vt=3);let Rt,X,et,at;if(K){const $t=hn[K];Rt=$t.vertexShader,X=$t.fragmentShader}else Rt=S.vertexShader,X=S.fragmentShader,c.update(S),et=c.getVertexShaderID(S),at=c.getFragmentShaderID(S);const st=s.getRenderTarget(),bt=s.state.buffers.depth.getReversed(),Tt=B.isInstancedMesh===!0,Ft=B.isBatchedMesh===!0,ie=!!S.map,Vt=!!S.matcap,pe=!!W,I=!!S.aoMap,qe=!!S.lightMap,kt=!!S.bumpMap,Gt=!!S.normalMap,Et=!!S.displacementMap,se=!!S.emissiveMap,St=!!S.metalnessMap,C=!!S.roughnessMap,b=S.anisotropy>0,z=S.clearcoat>0,Z=S.dispersion>0,tt=S.iridescence>0,j=S.sheen>0,Mt=S.transmission>0,ht=b&&!!S.anisotropyMap,mt=z&&!!S.clearcoatMap,Wt=z&&!!S.clearcoatNormalMap,it=z&&!!S.clearcoatRoughnessMap,gt=tt&&!!S.iridescenceMap,Ct=tt&&!!S.iridescenceThicknessMap,Pt=j&&!!S.sheenColorMap,_t=j&&!!S.sheenRoughnessMap,Ht=!!S.specularMap,Nt=!!S.specularColorMap,ne=!!S.specularIntensityMap,D=Mt&&!!S.transmissionMap,ct=Mt&&!!S.thicknessMap,Y=!!S.gradientMap,$=!!S.alphaMap,dt=S.alphaTest>0,ut=!!S.alphaHash,Dt=!!S.extensions;let ue=bn;S.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ue=s.toneMapping);const Ae={shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:Rt,fragmentShader:X,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:at,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ft,batchingColor:Ft&&B._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&B.instanceColor!==null,instancingMorph:Tt&&B.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:st===null?s.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:zi,alphaToCoverage:!!S.alphaToCoverage,map:ie,matcap:Vt,envMap:pe,envMapMode:pe&&W.mapping,envMapCubeUVHeight:O,aoMap:I,lightMap:qe,bumpMap:kt,normalMap:Gt,displacementMap:u&&Et,emissiveMap:se,normalMapObjectSpace:Gt&&S.normalMapType===zl,normalMapTangentSpace:Gt&&S.normalMapType===ka,metalnessMap:St,roughnessMap:C,anisotropy:b,anisotropyMap:ht,clearcoat:z,clearcoatMap:mt,clearcoatNormalMap:Wt,clearcoatRoughnessMap:it,dispersion:Z,iridescence:tt,iridescenceMap:gt,iridescenceThicknessMap:Ct,sheen:j,sheenColorMap:Pt,sheenRoughnessMap:_t,specularMap:Ht,specularColorMap:Nt,specularIntensityMap:ne,transmission:Mt,transmissionMap:D,thicknessMap:ct,gradientMap:Y,opaque:S.transparent===!1&&S.blending===Li&&S.alphaToCoverage===!1,alphaMap:$,alphaTest:dt,alphaHash:ut,combine:S.combine,mapUv:ie&&_(S.map.channel),aoMapUv:I&&_(S.aoMap.channel),lightMapUv:qe&&_(S.lightMap.channel),bumpMapUv:kt&&_(S.bumpMap.channel),normalMapUv:Gt&&_(S.normalMap.channel),displacementMapUv:Et&&_(S.displacementMap.channel),emissiveMapUv:se&&_(S.emissiveMap.channel),metalnessMapUv:St&&_(S.metalnessMap.channel),roughnessMapUv:C&&_(S.roughnessMap.channel),anisotropyMapUv:ht&&_(S.anisotropyMap.channel),clearcoatMapUv:mt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:_t&&_(S.sheenRoughnessMap.channel),specularMapUv:Ht&&_(S.specularMap.channel),specularColorMapUv:Nt&&_(S.specularColorMap.channel),specularIntensityMapUv:ne&&_(S.specularIntensityMap.channel),transmissionMapUv:D&&_(S.transmissionMap.channel),thicknessMapUv:ct&&_(S.thicknessMap.channel),alphaMapUv:$&&_(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Gt||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(ie||$),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:bt,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:vt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,decodeVideoTexture:ie&&S.map.isVideoTexture===!0&&Yt.getTransfer(S.map.colorSpace)===Qt,decodeVideoTextureEmissive:se&&S.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(S.emissiveMap.colorSpace)===Qt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===fe,flipSided:S.side===we,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Dt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&S.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function f(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(x(M,S),y(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const M=g[S.type];let P;if(M){const F=hn[M];P=Ph.clone(F.uniforms)}else P=S.uniforms;return P}function A(S,M){let P;for(let F=0,B=h.length;F<B;F++){const V=h[F];if(V.cacheKey===M){P=V,++P.usedTimes;break}}return P===void 0&&(P=new om(s,M,S,r),h.push(P)),P}function w(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function T(S){c.remove(S)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:A,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:R}}function dm(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function fm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function hc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function uc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,p,g,_,m){let f=s[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),t++,f}function a(d,u,p,g,_,m){const f=o(d,u,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function c(d,u,p,g,_,m){const f=o(d,u,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function l(d,u){e.length>1&&e.sort(d||fm),n.length>1&&n.sort(u||hc),i.length>1&&i.sort(u||hc)}function h(){for(let d=t,u=s.length;d<u;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function pm(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new uc,s.set(n,[o])):i>=r.length?(o=new uc,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function mm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new rt};break;case"SpotLight":e={position:new L,direction:new L,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":e={color:new rt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function gm(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let _m=0;function xm(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function vm(s){const t=new mm,e=gm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const i=new L,r=new zt,o=new zt;function a(l){let h=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,x=0,y=0,v=0,A=0,w=0,T=0;l.sort(xm);for(let S=0,M=l.length;S<M;S++){const P=l[S],F=P.color,B=P.intensity,V=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*B,d+=F.g*B,u+=F.b*B;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],B);T++}else if(P.isDirectionalLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const W=P.shadow,O=e.get(P);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,n.directionalShadow[p]=O,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=P.shadow.matrix,x++}n.directional[p]=G,p++}else if(P.isSpotLight){const G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(F).multiplyScalar(B),G.distance=V,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[_]=G;const W=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,W.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=W.matrix,P.castShadow){const O=e.get(P);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,n.spotShadow[_]=O,n.spotShadowMap[_]=q,v++}_++}else if(P.isRectAreaLight){const G=t.get(P);G.color.copy(F).multiplyScalar(B),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const W=P.shadow,O=e.get(P);O.shadowIntensity=W.intensity,O.shadowBias=W.bias,O.shadowNormalBias=W.normalBias,O.shadowRadius=W.radius,O.shadowMapSize=W.mapSize,O.shadowCameraNear=W.camera.near,O.shadowCameraFar=W.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=G,g++}else if(P.isHemisphereLight){const G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(B),G.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[f]=G,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==x||R.numPointShadows!==y||R.numSpotShadows!==v||R.numSpotMaps!==A||R.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=x,R.numPointShadows=y,R.numSpotShadows=v,R.numSpotMaps=A,R.numLightProbes=T,n.version=_m++)}function c(l,h){let d=0,u=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,x=l.length;f<x;f++){const y=l[f];if(y.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(y.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function dc(s){const t=new vm(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function ym(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new dc(s),t.set(i,[a])):r>=o.length?(a=new dc(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Mm=`void main() {
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
}`;function bm(s,t,e){let n=new Wa;const i=new yt,r=new yt,o=new ee,a=new Hh({depthPacking:Ol}),c=new Vh,l={},h=e.maxTextureSize,d={[pn]:we,[we]:pn,[fe]:fe},u=new Ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:Mm,fragmentShader:Sm}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new me;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ft(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=La;let f=this.type;this.render=function(w,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const S=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Bn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=f!==Mn&&this.type===Mn,V=f===Mn&&this.type!==Mn;for(let q=0,G=w.length;q<G;q++){const W=w[q],O=W.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const K=O.getFrameExtents();if(i.multiply(K),r.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/K.x),i.x=r.x*K.x,O.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/K.y),i.y=r.y*K.y,O.mapSize.y=r.y)),O.map===null||B===!0||V===!0){const J=this.type!==Mn?{minFilter:Xe,magFilter:Xe}:{};O.map!==null&&O.map.dispose(),O.map=new On(i.x,i.y,J),O.map.texture.name=W.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();const Q=O.getViewportCount();for(let J=0;J<Q;J++){const vt=O.getViewport(J);o.set(r.x*vt.x,r.y*vt.y,r.x*vt.z,r.y*vt.w),F.viewport(o),O.updateMatrices(W,J),n=O.getFrustum(),v(T,R,O.camera,W,this.type)}O.isPointLightShadow!==!0&&this.type===Mn&&x(O,R),O.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(S,M,P)};function x(w,T){const R=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new On(i.x,i.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(T,null,R,u,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(T,null,R,p,_,null)}function y(w,T,R,S){let M=null;const P=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)M=P;else if(M=R.isPointLight===!0?c:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=M.uuid,B=T.uuid;let V=l[F];V===void 0&&(V={},l[F]=V);let q=V[B];q===void 0&&(q=M.clone(),V[B]=q,T.addEventListener("dispose",A)),M=q}if(M.visible=T.visible,M.wireframe=T.wireframe,S===Mn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:d[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=s.properties.get(M);F.light=R}return M}function v(w,T,R,S,M){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Mn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const B=t.update(w),V=w.material;if(Array.isArray(V)){const q=B.groups;for(let G=0,W=q.length;G<W;G++){const O=q[G],K=V[O.materialIndex];if(K&&K.visible){const Q=y(w,K,S,M);w.onBeforeShadow(s,w,T,R,B,Q,O),s.renderBufferDirect(R,null,B,Q,w,O),w.onAfterShadow(s,w,T,R,B,Q,O)}}}else if(V.visible){const q=y(w,V,S,M);w.onBeforeShadow(s,w,T,R,B,q,null),s.renderBufferDirect(R,null,B,q,w,null),w.onAfterShadow(s,w,T,R,B,q,null)}}const F=w.children;for(let B=0,V=F.length;B<V;B++)v(F[B],T,R,S,M)}function A(w){w.target.removeEventListener("dispose",A);for(const R in l){const S=l[R],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Em={[Gr]:Hr,[Vr]:qr,[Wr]:Yr,[Ui]:Xr,[Hr]:Gr,[qr]:Vr,[Yr]:Wr,[Xr]:Ui};function wm(s,t){function e(){let D=!1;const ct=new ee;let Y=null;const $=new ee(0,0,0,0);return{setMask:function(dt){Y!==dt&&!D&&(s.colorMask(dt,dt,dt,dt),Y=dt)},setLocked:function(dt){D=dt},setClear:function(dt,ut,Dt,ue,Ae){Ae===!0&&(dt*=ue,ut*=ue,Dt*=ue),ct.set(dt,ut,Dt,ue),$.equals(ct)===!1&&(s.clearColor(dt,ut,Dt,ue),$.copy(ct))},reset:function(){D=!1,Y=null,$.set(-1,0,0,0)}}}function n(){let D=!1,ct=!1,Y=null,$=null,dt=null;return{setReversed:function(ut){if(ct!==ut){const Dt=t.get("EXT_clip_control");ct?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);const ue=dt;dt=null,this.setClear(ue)}ct=ut},getReversed:function(){return ct},setTest:function(ut){ut?st(s.DEPTH_TEST):bt(s.DEPTH_TEST)},setMask:function(ut){Y!==ut&&!D&&(s.depthMask(ut),Y=ut)},setFunc:function(ut){if(ct&&(ut=Em[ut]),$!==ut){switch(ut){case Gr:s.depthFunc(s.NEVER);break;case Hr:s.depthFunc(s.ALWAYS);break;case Vr:s.depthFunc(s.LESS);break;case Ui:s.depthFunc(s.LEQUAL);break;case Wr:s.depthFunc(s.EQUAL);break;case Xr:s.depthFunc(s.GEQUAL);break;case qr:s.depthFunc(s.GREATER);break;case Yr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=ut}},setLocked:function(ut){D=ut},setClear:function(ut){dt!==ut&&(ct&&(ut=1-ut),s.clearDepth(ut),dt=ut)},reset:function(){D=!1,Y=null,$=null,dt=null,ct=!1}}}function i(){let D=!1,ct=null,Y=null,$=null,dt=null,ut=null,Dt=null,ue=null,Ae=null;return{setTest:function($t){D||($t?st(s.STENCIL_TEST):bt(s.STENCIL_TEST))},setMask:function($t){ct!==$t&&!D&&(s.stencilMask($t),ct=$t)},setFunc:function($t,Je,mn){(Y!==$t||$!==Je||dt!==mn)&&(s.stencilFunc($t,Je,mn),Y=$t,$=Je,dt=mn)},setOp:function($t,Je,mn){(ut!==$t||Dt!==Je||ue!==mn)&&(s.stencilOp($t,Je,mn),ut=$t,Dt=Je,ue=mn)},setLocked:function($t){D=$t},setClear:function($t){Ae!==$t&&(s.clearStencil($t),Ae=$t)},reset:function(){D=!1,ct=null,Y=null,$=null,dt=null,ut=null,Dt=null,ue=null,Ae=null}}}const r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,x=null,y=null,v=null,A=null,w=null,T=new rt(0,0,0),R=0,S=!1,M=null,P=null,F=null,B=null,V=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,W=0;const O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(O)[1]),G=W>=1):O.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),G=W>=2);let K=null,Q={};const J=s.getParameter(s.SCISSOR_BOX),vt=s.getParameter(s.VIEWPORT),Rt=new ee().fromArray(J),X=new ee().fromArray(vt);function et(D,ct,Y,$){const dt=new Uint8Array(4),ut=s.createTexture();s.bindTexture(D,ut),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Dt=0;Dt<Y;Dt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ct,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,dt):s.texImage2D(ct+Dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,dt);return ut}const at={};at[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),at[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),at[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(s.DEPTH_TEST),o.setFunc(Ui),kt(!1),Gt(oo),st(s.CULL_FACE),I(Bn);function st(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function bt(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Tt(D,ct){return d[D]!==ct?(s.bindFramebuffer(D,ct),d[D]=ct,D===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ct),D===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ct),!0):!1}function Ft(D,ct){let Y=p,$=!1;if(D){Y=u.get(ct),Y===void 0&&(Y=[],u.set(ct,Y));const dt=D.textures;if(Y.length!==dt.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let ut=0,Dt=dt.length;ut<Dt;ut++)Y[ut]=s.COLOR_ATTACHMENT0+ut;Y.length=dt.length,$=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,$=!0);$&&s.drawBuffers(Y)}function ie(D){return g!==D?(s.useProgram(D),g=D,!0):!1}const Vt={[$n]:s.FUNC_ADD,[ul]:s.FUNC_SUBTRACT,[dl]:s.FUNC_REVERSE_SUBTRACT};Vt[fl]=s.MIN,Vt[pl]=s.MAX;const pe={[ml]:s.ZERO,[gl]:s.ONE,[_l]:s.SRC_COLOR,[zr]:s.SRC_ALPHA,[bl]:s.SRC_ALPHA_SATURATE,[Ml]:s.DST_COLOR,[vl]:s.DST_ALPHA,[xl]:s.ONE_MINUS_SRC_COLOR,[kr]:s.ONE_MINUS_SRC_ALPHA,[Sl]:s.ONE_MINUS_DST_COLOR,[yl]:s.ONE_MINUS_DST_ALPHA,[El]:s.CONSTANT_COLOR,[wl]:s.ONE_MINUS_CONSTANT_COLOR,[Tl]:s.CONSTANT_ALPHA,[Al]:s.ONE_MINUS_CONSTANT_ALPHA};function I(D,ct,Y,$,dt,ut,Dt,ue,Ae,$t){if(D===Bn){_===!0&&(bt(s.BLEND),_=!1);return}if(_===!1&&(st(s.BLEND),_=!0),D!==hl){if(D!==m||$t!==S){if((f!==$n||v!==$n)&&(s.blendEquation(s.FUNC_ADD),f=$n,v=$n),$t)switch(D){case Li:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case os:s.blendFunc(s.ONE,s.ONE);break;case co:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Li:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case os:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case co:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,y=null,A=null,w=null,T.set(0,0,0),R=0,m=D,S=$t}return}dt=dt||ct,ut=ut||Y,Dt=Dt||$,(ct!==f||dt!==v)&&(s.blendEquationSeparate(Vt[ct],Vt[dt]),f=ct,v=dt),(Y!==x||$!==y||ut!==A||Dt!==w)&&(s.blendFuncSeparate(pe[Y],pe[$],pe[ut],pe[Dt]),x=Y,y=$,A=ut,w=Dt),(ue.equals(T)===!1||Ae!==R)&&(s.blendColor(ue.r,ue.g,ue.b,Ae),T.copy(ue),R=Ae),m=D,S=!1}function qe(D,ct){D.side===fe?bt(s.CULL_FACE):st(s.CULL_FACE);let Y=D.side===we;ct&&(Y=!Y),kt(Y),D.blending===Li&&D.transparent===!1?I(Bn):I(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const $=D.stencilWrite;a.setTest($),$&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?st(s.SAMPLE_ALPHA_TO_COVERAGE):bt(s.SAMPLE_ALPHA_TO_COVERAGE)}function kt(D){M!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),M=D)}function Gt(D){D!==cl?(st(s.CULL_FACE),D!==P&&(D===oo?s.cullFace(s.BACK):D===ll?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):bt(s.CULL_FACE),P=D}function Et(D){D!==F&&(G&&s.lineWidth(D),F=D)}function se(D,ct,Y){D?(st(s.POLYGON_OFFSET_FILL),(B!==ct||V!==Y)&&(s.polygonOffset(ct,Y),B=ct,V=Y)):bt(s.POLYGON_OFFSET_FILL)}function St(D){D?st(s.SCISSOR_TEST):bt(s.SCISSOR_TEST)}function C(D){D===void 0&&(D=s.TEXTURE0+q-1),K!==D&&(s.activeTexture(D),K=D)}function b(D,ct,Y){Y===void 0&&(K===null?Y=s.TEXTURE0+q-1:Y=K);let $=Q[Y];$===void 0&&($={type:void 0,texture:void 0},Q[Y]=$),($.type!==D||$.texture!==ct)&&(K!==Y&&(s.activeTexture(Y),K=Y),s.bindTexture(D,ct||at[D]),$.type=D,$.texture=ct)}function z(){const D=Q[K];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Wt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pt(D){Rt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Rt.copy(D))}function _t(D){X.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function Ht(D,ct){let Y=l.get(ct);Y===void 0&&(Y=new WeakMap,l.set(ct,Y));let $=Y.get(D);$===void 0&&($=s.getUniformBlockIndex(ct,D.name),Y.set(D,$))}function Nt(D,ct){const $=l.get(ct).get(D);c.get(ct)!==$&&(s.uniformBlockBinding(ct,$,D.__bindingPointIndex),c.set(ct,$))}function ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},K=null,Q={},d={},u=new WeakMap,p=[],g=null,_=!1,m=null,f=null,x=null,y=null,v=null,A=null,w=null,T=new rt(0,0,0),R=0,S=!1,M=null,P=null,F=null,B=null,V=null,Rt.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:bt,bindFramebuffer:Tt,drawBuffers:Ft,useProgram:ie,setBlending:I,setMaterial:qe,setFlipSided:kt,setCullFace:Gt,setLineWidth:Et,setPolygonOffset:se,setScissorTest:St,activeTexture:C,bindTexture:b,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:gt,texImage3D:Ct,updateUBOMapping:Ht,uniformBlockBinding:Nt,texStorage2D:Wt,texStorage3D:it,texSubImage2D:j,texSubImage3D:Mt,compressedTexSubImage2D:ht,compressedTexSubImage3D:mt,scissor:Pt,viewport:_t,reset:ne}}function Tm(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new yt,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return p?new OffscreenCanvas(C,b):ls("canvas")}function _(C,b,z){let Z=1;const tt=St(C);if((tt.width>z||tt.height>z)&&(Z=z/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const j=Math.floor(Z*tt.width),Mt=Math.floor(Z*tt.height);d===void 0&&(d=g(j,Mt));const ht=b?g(j,Mt):d;return ht.width=j,ht.height=Mt,ht.getContext("2d").drawImage(C,0,0,j,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+j+"x"+Mt+")."),ht}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){s.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(C,b,z,Z,tt=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=b;if(b===s.RED&&(z===s.FLOAT&&(j=s.R32F),z===s.HALF_FLOAT&&(j=s.R16F),z===s.UNSIGNED_BYTE&&(j=s.R8)),b===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(j=s.R8UI),z===s.UNSIGNED_SHORT&&(j=s.R16UI),z===s.UNSIGNED_INT&&(j=s.R32UI),z===s.BYTE&&(j=s.R8I),z===s.SHORT&&(j=s.R16I),z===s.INT&&(j=s.R32I)),b===s.RG&&(z===s.FLOAT&&(j=s.RG32F),z===s.HALF_FLOAT&&(j=s.RG16F),z===s.UNSIGNED_BYTE&&(j=s.RG8)),b===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(j=s.RG8UI),z===s.UNSIGNED_SHORT&&(j=s.RG16UI),z===s.UNSIGNED_INT&&(j=s.RG32UI),z===s.BYTE&&(j=s.RG8I),z===s.SHORT&&(j=s.RG16I),z===s.INT&&(j=s.RG32I)),b===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(j=s.RGB8UI),z===s.UNSIGNED_SHORT&&(j=s.RGB16UI),z===s.UNSIGNED_INT&&(j=s.RGB32UI),z===s.BYTE&&(j=s.RGB8I),z===s.SHORT&&(j=s.RGB16I),z===s.INT&&(j=s.RGB32I)),b===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),z===s.UNSIGNED_INT&&(j=s.RGBA32UI),z===s.BYTE&&(j=s.RGBA8I),z===s.SHORT&&(j=s.RGBA16I),z===s.INT&&(j=s.RGBA32I)),b===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),b===s.RGBA){const Mt=tt?Zs:Yt.getTransfer(Z);z===s.FLOAT&&(j=s.RGBA32F),z===s.HALF_FLOAT&&(j=s.RGBA16F),z===s.UNSIGNED_BYTE&&(j=Mt===Qt?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function v(C,b){let z;return C?b===null||b===ni||b===Bi?z=s.DEPTH24_STENCIL8:b===fn?z=s.DEPTH32F_STENCIL8:b===cs&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ni||b===Bi?z=s.DEPTH_COMPONENT24:b===fn?z=s.DEPTH_COMPONENT32F:b===cs&&(z=s.DEPTH_COMPONENT16),z}function A(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Xe&&C.minFilter!==Ke?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function w(C){const b=C.target;b.removeEventListener("dispose",w),R(b),b.isVideoTexture&&h.delete(b)}function T(C){const b=C.target;b.removeEventListener("dispose",T),M(b)}function R(C){const b=n.get(C);if(b.__webglInit===void 0)return;const z=C.source,Z=u.get(z);if(Z){const tt=Z[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&S(C),Object.keys(Z).length===0&&u.delete(z)}n.remove(C)}function S(C){const b=n.get(C);s.deleteTexture(b.__webglTexture);const z=C.source,Z=u.get(z);delete Z[b.__cacheKey],o.memory.textures--}function M(C){const b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let tt=0;tt<b.__webglFramebuffer[Z].length;tt++)s.deleteFramebuffer(b.__webglFramebuffer[Z][tt]);else s.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)s.deleteFramebuffer(b.__webglFramebuffer[Z]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=C.textures;for(let Z=0,tt=z.length;Z<tt;Z++){const j=n.get(z[Z]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(z[Z])}n.remove(C)}let P=0;function F(){P=0}function B(){const C=P;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function V(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function q(C,b){const z=n.get(C);if(C.isVideoTexture&&Et(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(z,C,b);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+b)}function G(C,b){const z=n.get(C);if(C.version>0&&z.__version!==C.version){X(z,C,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+b)}function W(C,b){const z=n.get(C);if(C.version>0&&z.__version!==C.version){X(z,C,b);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+b)}function O(C,b){const z=n.get(C);if(C.version>0&&z.__version!==C.version){et(z,C,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+b)}const K={[dn]:s.REPEAT,[Nn]:s.CLAMP_TO_EDGE,[$r]:s.MIRRORED_REPEAT},Q={[Xe]:s.NEAREST,[Nl]:s.NEAREST_MIPMAP_NEAREST,[ps]:s.NEAREST_MIPMAP_LINEAR,[Ke]:s.LINEAR,[ar]:s.LINEAR_MIPMAP_NEAREST,[ti]:s.LINEAR_MIPMAP_LINEAR},J={[kl]:s.NEVER,[ql]:s.ALWAYS,[Gl]:s.LESS,[Lc]:s.LEQUAL,[Hl]:s.EQUAL,[Xl]:s.GEQUAL,[Vl]:s.GREATER,[Wl]:s.NOTEQUAL};function vt(C,b){if(b.type===fn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ke||b.magFilter===ar||b.magFilter===ps||b.magFilter===ti||b.minFilter===Ke||b.minFilter===ar||b.minFilter===ps||b.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,K[b.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,K[b.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,K[b.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Q[b.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Q[b.minFilter]),b.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,J[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Xe||b.minFilter!==ps&&b.minFilter!==ti||b.type===fn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Rt(C,b){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",w));const Z=b.source;let tt=u.get(Z);tt===void 0&&(tt={},u.set(Z,tt));const j=V(b);if(j!==C.__cacheKey){tt[j]===void 0&&(tt[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),tt[j].usedTimes++;const Mt=tt[C.__cacheKey];Mt!==void 0&&(tt[C.__cacheKey].usedTimes--,Mt.usedTimes===0&&S(b)),C.__cacheKey=j,C.__webglTexture=tt[j].texture}return z}function X(C,b,z){let Z=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=s.TEXTURE_3D);const tt=Rt(C,b),j=b.source;e.bindTexture(Z,C.__webglTexture,s.TEXTURE0+z);const Mt=n.get(j);if(j.version!==Mt.__version||tt===!0){e.activeTexture(s.TEXTURE0+z);const ht=Yt.getPrimaries(Yt.workingColorSpace),mt=b.colorSpace===un?null:Yt.getPrimaries(b.colorSpace),Wt=b.colorSpace===un||ht===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let it=_(b.image,!1,i.maxTextureSize);it=se(b,it);const gt=r.convert(b.format,b.colorSpace),Ct=r.convert(b.type);let Pt=y(b.internalFormat,gt,Ct,b.colorSpace,b.isVideoTexture);vt(Z,b);let _t;const Ht=b.mipmaps,Nt=b.isVideoTexture!==!0,ne=Mt.__version===void 0||tt===!0,D=j.dataReady,ct=A(b,it);if(b.isDepthTexture)Pt=v(b.format===Oi,b.type),ne&&(Nt?e.texStorage2D(s.TEXTURE_2D,1,Pt,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,Pt,it.width,it.height,0,gt,Ct,null));else if(b.isDataTexture)if(Ht.length>0){Nt&&ne&&e.texStorage2D(s.TEXTURE_2D,ct,Pt,Ht[0].width,Ht[0].height);for(let Y=0,$=Ht.length;Y<$;Y++)_t=Ht[Y],Nt?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,_t.width,_t.height,gt,Ct,_t.data):e.texImage2D(s.TEXTURE_2D,Y,Pt,_t.width,_t.height,0,gt,Ct,_t.data);b.generateMipmaps=!1}else Nt?(ne&&e.texStorage2D(s.TEXTURE_2D,ct,Pt,it.width,it.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,it.width,it.height,gt,Ct,it.data)):e.texImage2D(s.TEXTURE_2D,0,Pt,it.width,it.height,0,gt,Ct,it.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Nt&&ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,Pt,Ht[0].width,Ht[0].height,it.depth);for(let Y=0,$=Ht.length;Y<$;Y++)if(_t=Ht[Y],b.format!==on)if(gt!==null)if(Nt){if(D)if(b.layerUpdates.size>0){const dt=Vo(_t.width,_t.height,b.format,b.type);for(const ut of b.layerUpdates){const Dt=_t.data.subarray(ut*dt/_t.data.BYTES_PER_ELEMENT,(ut+1)*dt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,ut,_t.width,_t.height,1,gt,Dt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,_t.width,_t.height,it.depth,gt,_t.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Pt,_t.width,_t.height,it.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,_t.width,_t.height,it.depth,gt,Ct,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,Pt,_t.width,_t.height,it.depth,0,gt,Ct,_t.data)}else{Nt&&ne&&e.texStorage2D(s.TEXTURE_2D,ct,Pt,Ht[0].width,Ht[0].height);for(let Y=0,$=Ht.length;Y<$;Y++)_t=Ht[Y],b.format!==on?gt!==null?Nt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,Pt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,_t.width,_t.height,gt,Ct,_t.data):e.texImage2D(s.TEXTURE_2D,Y,Pt,_t.width,_t.height,0,gt,Ct,_t.data)}else if(b.isDataArrayTexture)if(Nt){if(ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,Pt,it.width,it.height,it.depth),D)if(b.layerUpdates.size>0){const Y=Vo(it.width,it.height,b.format,b.type);for(const $ of b.layerUpdates){const dt=it.data.subarray($*Y/it.data.BYTES_PER_ELEMENT,($+1)*Y/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,it.width,it.height,1,gt,Ct,dt)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,gt,Ct,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Pt,it.width,it.height,it.depth,0,gt,Ct,it.data);else if(b.isData3DTexture)Nt?(ne&&e.texStorage3D(s.TEXTURE_3D,ct,Pt,it.width,it.height,it.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,gt,Ct,it.data)):e.texImage3D(s.TEXTURE_3D,0,Pt,it.width,it.height,it.depth,0,gt,Ct,it.data);else if(b.isFramebufferTexture){if(ne)if(Nt)e.texStorage2D(s.TEXTURE_2D,ct,Pt,it.width,it.height);else{let Y=it.width,$=it.height;for(let dt=0;dt<ct;dt++)e.texImage2D(s.TEXTURE_2D,dt,Pt,Y,$,0,gt,Ct,null),Y>>=1,$>>=1}}else if(Ht.length>0){if(Nt&&ne){const Y=St(Ht[0]);e.texStorage2D(s.TEXTURE_2D,ct,Pt,Y.width,Y.height)}for(let Y=0,$=Ht.length;Y<$;Y++)_t=Ht[Y],Nt?D&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,gt,Ct,_t):e.texImage2D(s.TEXTURE_2D,Y,Pt,gt,Ct,_t);b.generateMipmaps=!1}else if(Nt){if(ne){const Y=St(it);e.texStorage2D(s.TEXTURE_2D,ct,Pt,Y.width,Y.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,gt,Ct,it)}else e.texImage2D(s.TEXTURE_2D,0,Pt,gt,Ct,it);m(b)&&f(Z),Mt.__version=j.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function et(C,b,z){if(b.image.length!==6)return;const Z=Rt(C,b),tt=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+z);const j=n.get(tt);if(tt.version!==j.__version||Z===!0){e.activeTexture(s.TEXTURE0+z);const Mt=Yt.getPrimaries(Yt.workingColorSpace),ht=b.colorSpace===un?null:Yt.getPrimaries(b.colorSpace),mt=b.colorSpace===un||Mt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Wt=b.isCompressedTexture||b.image[0].isCompressedTexture,it=b.image[0]&&b.image[0].isDataTexture,gt=[];for(let $=0;$<6;$++)!Wt&&!it?gt[$]=_(b.image[$],!0,i.maxCubemapSize):gt[$]=it?b.image[$].image:b.image[$],gt[$]=se(b,gt[$]);const Ct=gt[0],Pt=r.convert(b.format,b.colorSpace),_t=r.convert(b.type),Ht=y(b.internalFormat,Pt,_t,b.colorSpace),Nt=b.isVideoTexture!==!0,ne=j.__version===void 0||Z===!0,D=tt.dataReady;let ct=A(b,Ct);vt(s.TEXTURE_CUBE_MAP,b);let Y;if(Wt){Nt&&ne&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,Ht,Ct.width,Ct.height);for(let $=0;$<6;$++){Y=gt[$].mipmaps;for(let dt=0;dt<Y.length;dt++){const ut=Y[dt];b.format!==on?Pt!==null?Nt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,dt,0,0,ut.width,ut.height,Pt,ut.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,dt,Ht,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,dt,0,0,ut.width,ut.height,Pt,_t,ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,dt,Ht,ut.width,ut.height,0,Pt,_t,ut.data)}}}else{if(Y=b.mipmaps,Nt&&ne){Y.length>0&&ct++;const $=St(gt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,Ht,$.width,$.height)}for(let $=0;$<6;$++)if(it){Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,gt[$].width,gt[$].height,Pt,_t,gt[$].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ht,gt[$].width,gt[$].height,0,Pt,_t,gt[$].data);for(let dt=0;dt<Y.length;dt++){const Dt=Y[dt].image[$].image;Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,dt+1,0,0,Dt.width,Dt.height,Pt,_t,Dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,dt+1,Ht,Dt.width,Dt.height,0,Pt,_t,Dt.data)}}else{Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Pt,_t,gt[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ht,Pt,_t,gt[$]);for(let dt=0;dt<Y.length;dt++){const ut=Y[dt];Nt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,dt+1,0,0,Pt,_t,ut.image[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,dt+1,Ht,Pt,_t,ut.image[$])}}}m(b)&&f(s.TEXTURE_CUBE_MAP),j.__version=tt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function at(C,b,z,Z,tt,j){const Mt=r.convert(z.format,z.colorSpace),ht=r.convert(z.type),mt=y(z.internalFormat,Mt,ht,z.colorSpace),Wt=n.get(b),it=n.get(z);if(it.__renderTarget=b,!Wt.__hasExternalTextures){const gt=Math.max(1,b.width>>j),Ct=Math.max(1,b.height>>j);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,j,mt,gt,Ct,b.depth,0,Mt,ht,null):e.texImage2D(tt,j,mt,gt,Ct,0,Mt,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Gt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,tt,it.__webglTexture,0,kt(b)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,tt,it.__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function st(C,b,z){if(s.bindRenderbuffer(s.RENDERBUFFER,C),b.depthBuffer){const Z=b.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,j=v(b.stencilBuffer,tt),Mt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=kt(b);Gt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,j,b.width,b.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,j,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,j,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,C)}else{const Z=b.textures;for(let tt=0;tt<Z.length;tt++){const j=Z[tt],Mt=r.convert(j.format,j.colorSpace),ht=r.convert(j.type),mt=y(j.internalFormat,Mt,ht,j.colorSpace),Wt=kt(b);z&&Gt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,mt,b.width,b.height):Gt(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt,mt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,mt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function bt(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(b.depthTexture);Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q(b.depthTexture,0);const tt=Z.__webglTexture,j=kt(b);if(b.depthTexture.format===Ii)Gt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(b.depthTexture.format===Oi)Gt(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Tt(C){const b=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=Z}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");bt(b.__webglFramebuffer,C)}else if(z){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=s.createRenderbuffer(),st(b.__webglDepthbuffer[Z],C,!1);else{const tt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,j)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),st(b.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,tt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(C,b,z){const Z=n.get(C);b!==void 0&&at(Z.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Tt(C)}function ie(C){const b=C.texture,z=n.get(C),Z=n.get(b);C.addEventListener("dispose",T);const tt=C.textures,j=C.isWebGLCubeRenderTarget===!0,Mt=tt.length>1;if(Mt||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=b.version,o.memory.textures++),j){z.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[ht]=[];for(let mt=0;mt<b.mipmaps.length;mt++)z.__webglFramebuffer[ht][mt]=s.createFramebuffer()}else z.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let ht=0;ht<b.mipmaps.length;ht++)z.__webglFramebuffer[ht]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(Mt)for(let ht=0,mt=tt.length;ht<mt;ht++){const Wt=n.get(tt[ht]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&Gt(C)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ht=0;ht<tt.length;ht++){const mt=tt[ht];z.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[ht]);const Wt=r.convert(mt.format,mt.colorSpace),it=r.convert(mt.type),gt=y(mt.internalFormat,Wt,it,mt.colorSpace,C.isXRRenderTarget===!0),Ct=kt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,gt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,z.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),st(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),vt(s.TEXTURE_CUBE_MAP,b);for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0)for(let mt=0;mt<b.mipmaps.length;mt++)at(z.__webglFramebuffer[ht][mt],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,mt);else at(z.__webglFramebuffer[ht],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(b)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ht=0,mt=tt.length;ht<mt;ht++){const Wt=tt[ht],it=n.get(Wt);e.bindTexture(s.TEXTURE_2D,it.__webglTexture),vt(s.TEXTURE_2D,Wt),at(z.__webglFramebuffer,C,Wt,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,0),m(Wt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ht=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,Z.__webglTexture),vt(ht,b),b.mipmaps&&b.mipmaps.length>0)for(let mt=0;mt<b.mipmaps.length;mt++)at(z.__webglFramebuffer[mt],C,b,s.COLOR_ATTACHMENT0,ht,mt);else at(z.__webglFramebuffer,C,b,s.COLOR_ATTACHMENT0,ht,0);m(b)&&f(ht),e.unbindTexture()}C.depthBuffer&&Tt(C)}function Vt(C){const b=C.textures;for(let z=0,Z=b.length;z<Z;z++){const tt=b[z];if(m(tt)){const j=x(C),Mt=n.get(tt).__webglTexture;e.bindTexture(j,Mt),f(j),e.unbindTexture()}}}const pe=[],I=[];function qe(C){if(C.samples>0){if(Gt(C)===!1){const b=C.textures,z=C.width,Z=C.height;let tt=s.COLOR_BUFFER_BIT;const j=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=n.get(C),ht=b.length>1;if(ht)for(let mt=0;mt<b.length;mt++)e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let mt=0;mt<b.length;mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),ht){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[mt]);const Wt=n.get(b[mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Wt,0)}s.blitFramebuffer(0,0,z,Z,0,0,z,Z,tt,s.NEAREST),c===!0&&(pe.length=0,I.length=0,pe.push(s.COLOR_ATTACHMENT0+mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(pe.push(j),I.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pe))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let mt=0;mt<b.length;mt++){e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[mt]);const Wt=n.get(b[mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,Wt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const b=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function kt(C){return Math.min(i.maxSamples,C.samples)}function Gt(C){const b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Et(C){const b=o.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function se(C,b){const z=C.colorSpace,Z=C.format,tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==zi&&z!==un&&(Yt.getTransfer(z)===Qt?(Z!==on||tt!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function St(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=W,this.setTextureCube=O,this.rebindTextures=Ft,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=Gt}function Am(s,t){function e(n,i=un){let r;const o=Yt.getTransfer(i);if(n===Tn)return s.UNSIGNED_BYTE;if(n===Ua)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Fa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ec)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Sc)return s.BYTE;if(n===bc)return s.SHORT;if(n===cs)return s.UNSIGNED_SHORT;if(n===Da)return s.INT;if(n===ni)return s.UNSIGNED_INT;if(n===fn)return s.FLOAT;if(n===us)return s.HALF_FLOAT;if(n===wc)return s.ALPHA;if(n===Tc)return s.RGB;if(n===on)return s.RGBA;if(n===Ac)return s.LUMINANCE;if(n===Cc)return s.LUMINANCE_ALPHA;if(n===Ii)return s.DEPTH_COMPONENT;if(n===Oi)return s.DEPTH_STENCIL;if(n===Na)return s.RED;if(n===Ba)return s.RED_INTEGER;if(n===Rc)return s.RG;if(n===Oa)return s.RG_INTEGER;if(n===za)return s.RGBA_INTEGER;if(n===Hs||n===Vs||n===Ws||n===Xs)if(o===Qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Kr||n===Jr||n===Qr||n===ta)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Kr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ea||n===na||n===ia)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ea||n===na)return o===Qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ia)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sa||n===ra||n===aa||n===oa||n===ca||n===la||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ra)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===aa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ca)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===la)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ha)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ua)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===da)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pa)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ma)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ga)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_a)return o===Qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qs||n===xa||n===va)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qs)return o===Qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===va)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pc||n===ya||n===Ma||n===Sa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Cm={type:"move"};class Nr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cm)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Rm=`
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

}`;class Lm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Te,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ge({vertexShader:Rm,fragmentShader:Pm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ft(new Ee(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Im extends Hi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,g=null;const _=new Lm,m=e.getContextAttributes();let f=null,x=null;const y=[],v=[],A=new yt;let w=null;const T=new ke;T.viewport=new ee;const R=new ke;R.viewport=new ee;const S=[T,R],M=new Jh;let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=y[X];return et===void 0&&(et=new Nr,y[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=y[X];return et===void 0&&(et=new Nr,y[X]=et),et.getGripSpace()},this.getHand=function(X){let et=y[X];return et===void 0&&(et=new Nr,y[X]=et),et.getHandSpace()};function B(X){const et=v.indexOf(X.inputSource);if(et===-1)return;const at=y[et];at!==void 0&&(at.update(X.inputSource,X.frame,l||o),at.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",q);for(let X=0;X<y.length;X++){const et=v[X];et!==null&&(v[X]=null,y[X].disconnect(et))}P=null,F=null,_.reset(),t.setRenderTarget(f),p=null,u=null,d=null,i=null,x=null,Rt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",V),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let at=null,st=null,bt=null;m.depth&&(bt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?Oi:Ii,st=m.stencil?Bi:ni);const Tt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(Tt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new On(u.textureWidth,u.textureHeight,{format:on,type:Tn,depthTexture:new Xc(u.textureWidth,u.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}else{const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,at),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new On(p.framebufferWidth,p.framebufferHeight,{format:on,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Rt.setContext(i),Rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(X){for(let et=0;et<X.removed.length;et++){const at=X.removed[et],st=v.indexOf(at);st>=0&&(v[st]=null,y[st].disconnect(at))}for(let et=0;et<X.added.length;et++){const at=X.added[et];let st=v.indexOf(at);if(st===-1){for(let Tt=0;Tt<y.length;Tt++)if(Tt>=v.length){v.push(at),st=Tt;break}else if(v[Tt]===null){v[Tt]=at,st=Tt;break}if(st===-1)break}const bt=y[st];bt&&bt.connect(at)}}const G=new L,W=new L;function O(X,et,at){G.setFromMatrixPosition(et.matrixWorld),W.setFromMatrixPosition(at.matrixWorld);const st=G.distanceTo(W),bt=et.projectionMatrix.elements,Tt=at.projectionMatrix.elements,Ft=bt[14]/(bt[10]-1),ie=bt[14]/(bt[10]+1),Vt=(bt[9]+1)/bt[5],pe=(bt[9]-1)/bt[5],I=(bt[8]-1)/bt[0],qe=(Tt[8]+1)/Tt[0],kt=Ft*I,Gt=Ft*qe,Et=st/(-I+qe),se=Et*-I;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(se),X.translateZ(Et),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),bt[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const St=Ft+Et,C=ie+Et,b=kt-se,z=Gt+(st-se),Z=Vt*ie/C*St,tt=pe*ie/C*St;X.projectionMatrix.makePerspective(b,z,Z,tt,St,C),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function K(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let et=X.near,at=X.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(at=_.depthFar)),M.near=R.near=T.near=et,M.far=R.far=T.far=at,(P!==M.near||F!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,F=M.far),T.layers.mask=X.layers.mask|2,R.layers.mask=X.layers.mask|4,M.layers.mask=T.layers.mask|R.layers.mask;const st=X.parent,bt=M.cameras;K(M,st);for(let Tt=0;Tt<bt.length;Tt++)K(bt[Tt],st);bt.length===2?O(M,T,R):M.projectionMatrix.copy(T.projectionMatrix),Q(X,M,st)};function Q(X,et,at){at===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(at.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ki*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(X){c=X,u!==null&&(u.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let J=null;function vt(X,et){if(h=et.getViewerPose(l||o),g=et,h!==null){const at=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let st=!1;at.length!==M.cameras.length&&(M.cameras.length=0,st=!0);for(let Tt=0;Tt<at.length;Tt++){const Ft=at[Tt];let ie=null;if(p!==null)ie=p.getViewport(Ft);else{const pe=d.getViewSubImage(u,Ft);ie=pe.viewport,Tt===0&&(t.setRenderTargetTextures(x,pe.colorTexture,u.ignoreDepthValues?void 0:pe.depthStencilTexture),t.setRenderTarget(x))}let Vt=S[Tt];Vt===void 0&&(Vt=new ke,Vt.layers.enable(Tt),Vt.viewport=new ee,S[Tt]=Vt),Vt.matrix.fromArray(Ft.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Ft.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(ie.x,ie.y,ie.width,ie.height),Tt===0&&(M.matrix.copy(Vt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),st===!0&&M.cameras.push(Vt)}const bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Tt=d.getDepthInformation(at[0]);Tt&&Tt.isValid&&Tt.texture&&_.init(t,Tt,i.renderState)}}for(let at=0;at<y.length;at++){const st=v[at],bt=y[at];st!==null&&bt!==void 0&&bt.update(st,et,l||o)}J&&J(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Rt=new Yc;Rt.setAnimationLoop(vt),this.setAnimationLoop=function(X){J=X},this.dispose=function(){}}}const Yn=new Be,Dm=new zt;function Um(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,kc(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,x,y,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,x,y):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===we&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===we&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=t.get(f),y=x.envMap,v=x.envMapRotation;y&&(m.envMap.value=y,Yn.copy(v),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),m.envMapRotation.value.setFromMatrix4(Dm.makeRotationFromEuler(Yn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,x,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===we&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const x=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Fm(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function l(x,y){let v=i[x.id];v===void 0&&(g(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(x,A);const w=t.render.frame;r[x.id]!==w&&(u(x),r[x.id]=w)}function h(x){const y=d();x.__bindingPointIndex=y;const v=s.createBuffer(),A=x.__size,w=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,A,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const y=i[x.id],v=x.uniforms,A=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let w=0,T=v.length;w<T;w++){const R=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,M=R.length;S<M;S++){const P=R[S];if(p(P,w,S,A)===!0){const F=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let q=0;q<B.length;q++){const G=B[q],W=_(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,F+V,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,V),V+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(x,y,v,A){const w=x.value,T=y+"_"+v;if(A[T]===void 0)return typeof w=="number"||typeof w=="boolean"?A[T]=w:A[T]=w.clone(),!0;{const R=A[T];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return A[T]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(x){const y=x.uniforms;let v=0;const A=16;for(let T=0,R=y.length;T<R;T++){const S=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,P=S.length;M<P;M++){const F=S[M],B=Array.isArray(F.value)?F.value:[F.value];for(let V=0,q=B.length;V<q;V++){const G=B[V],W=_(G),O=v%A,K=O%W.boundary,Q=O+K;v+=K,Q!==0&&A-Q<W.storage&&(v+=A-Q),F.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=W.storage}}}const w=v%A;return w>0&&(v+=A-w),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function f(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:c,update:l,dispose:f}}class Nm{constructor(t={}){const{canvas:e=lh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xe,this.toneMapping=bn,this.toneMappingExposure=1;const v=this;let A=!1,w=0,T=0,R=null,S=-1,M=null;const P=new ee,F=new ee;let B=null;const V=new rt(0);let q=0,G=e.width,W=e.height,O=1,K=null,Q=null;const J=new ee(0,0,G,W),vt=new ee(0,0,G,W);let Rt=!1;const X=new Wa;let et=!1,at=!1;this.transmissionResolutionScale=1;const st=new zt,bt=new zt,Tt=new L,Ft=new ee,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function pe(){return R===null?O:1}let I=n;function qe(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pa}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ut,!1),I===null){const U="webgl2";if(I=qe(U,E),I===null)throw qe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let kt,Gt,Et,se,St,C,b,z,Z,tt,j,Mt,ht,mt,Wt,it,gt,Ct,Pt,_t,Ht,Nt,ne,D;function ct(){kt=new Xf(I),kt.init(),Nt=new Am(I,kt),Gt=new zf(I,kt,t,Nt),Et=new wm(I,kt),Gt.reverseDepthBuffer&&u&&Et.buffers.depth.setReversed(!0),se=new jf(I),St=new dm,C=new Tm(I,kt,Et,St,Gt,Nt,se),b=new Gf(v),z=new Wf(v),Z=new tu(I),ne=new Bf(I,Z),tt=new qf(I,Z,se,ne),j=new $f(I,tt,Z,se),Pt=new Zf(I,Gt,C),it=new kf(St),Mt=new um(v,b,z,kt,Gt,ne,it),ht=new Um(v,St),mt=new pm,Wt=new ym(kt),Ct=new Nf(v,b,z,Et,j,p,c),gt=new bm(v,j,Gt),D=new Fm(I,se,Gt,Et),_t=new Of(I,kt,se),Ht=new Yf(I,kt,se),se.programs=Mt.programs,v.capabilities=Gt,v.extensions=kt,v.properties=St,v.renderLists=mt,v.shadowMap=gt,v.state=Et,v.info=se}ct();const Y=new Im(v,I);this.xr=Y,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=kt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=kt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(E){E!==void 0&&(O=E,this.setSize(G,W,!1))},this.getSize=function(E){return E.set(G,W)},this.setSize=function(E,U,k=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,W=U,e.width=Math.floor(E*O),e.height=Math.floor(U*O),k===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(G*O,W*O).floor()},this.setDrawingBufferSize=function(E,U,k){G=E,W=U,O=k,e.width=Math.floor(E*k),e.height=Math.floor(U*k),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,U,k,H){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,U,k,H),Et.viewport(P.copy(J).multiplyScalar(O).round())},this.getScissor=function(E){return E.copy(vt)},this.setScissor=function(E,U,k,H){E.isVector4?vt.set(E.x,E.y,E.z,E.w):vt.set(E,U,k,H),Et.scissor(F.copy(vt).multiplyScalar(O).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(E){Et.setScissorTest(Rt=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){Q=E},this.getClearColor=function(E){return E.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(E=!0,U=!0,k=!0){let H=0;if(E){let N=!1;if(R!==null){const nt=R.texture.format;N=nt===za||nt===Oa||nt===Ba}if(N){const nt=R.texture.type,lt=nt===Tn||nt===ni||nt===cs||nt===Bi||nt===Ua||nt===Fa,pt=Ct.getClearColor(),xt=Ct.getClearAlpha(),Lt=pt.r,It=pt.g,wt=pt.b;lt?(g[0]=Lt,g[1]=It,g[2]=wt,g[3]=xt,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Lt,_[1]=It,_[2]=wt,_[3]=xt,I.clearBufferiv(I.COLOR,0,_))}else H|=I.COLOR_BUFFER_BIT}U&&(H|=I.DEPTH_BUFFER_BIT),k&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),Ct.dispose(),mt.dispose(),Wt.dispose(),St.dispose(),b.dispose(),z.dispose(),j.dispose(),ne.dispose(),D.dispose(),Mt.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",to),Y.removeEventListener("sessionend",eo),kn.stop()};function $(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const E=se.autoReset,U=gt.enabled,k=gt.autoUpdate,H=gt.needsUpdate,N=gt.type;ct(),se.autoReset=E,gt.enabled=U,gt.autoUpdate=k,gt.needsUpdate=H,gt.type=N}function ut(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Dt(E){const U=E.target;U.removeEventListener("dispose",Dt),ue(U)}function ue(E){Ae(E),St.remove(E)}function Ae(E){const U=St.get(E).programs;U!==void 0&&(U.forEach(function(k){Mt.releaseProgram(k)}),E.isShaderMaterial&&Mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,k,H,N,nt){U===null&&(U=ie);const lt=N.isMesh&&N.matrixWorld.determinant()<0,pt=nl(E,U,k,H,N);Et.setMaterial(H,lt);let xt=k.index,Lt=1;if(H.wireframe===!0){if(xt=tt.getWireframeAttribute(k),xt===void 0)return;Lt=2}const It=k.drawRange,wt=k.attributes.position;let Xt=It.start*Lt,jt=(It.start+It.count)*Lt;nt!==null&&(Xt=Math.max(Xt,nt.start*Lt),jt=Math.min(jt,(nt.start+nt.count)*Lt)),xt!==null?(Xt=Math.max(Xt,0),jt=Math.min(jt,xt.count)):wt!=null&&(Xt=Math.max(Xt,0),jt=Math.min(jt,wt.count));const ge=jt-Xt;if(ge<0||ge===1/0)return;ne.setup(N,H,pt,k,xt);let de,qt=_t;if(xt!==null&&(de=Z.get(xt),qt=Ht,qt.setIndex(de)),N.isMesh)H.wireframe===!0?(Et.setLineWidth(H.wireframeLinewidth*pe()),qt.setMode(I.LINES)):qt.setMode(I.TRIANGLES);else if(N.isLine){let At=H.linewidth;At===void 0&&(At=1),Et.setLineWidth(At*pe()),N.isLineSegments?qt.setMode(I.LINES):N.isLineLoop?qt.setMode(I.LINE_LOOP):qt.setMode(I.LINE_STRIP)}else N.isPoints?qt.setMode(I.POINTS):N.isSprite&&qt.setMode(I.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)qt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))qt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const At=N._multiDrawStarts,be=N._multiDrawCounts,Zt=N._multiDrawCount,Qe=xt?Z.get(xt).bytesPerElement:1,ri=St.get(H).currentProgram.getUniforms();for(let He=0;He<Zt;He++)ri.setValue(I,"_gl_DrawID",He),qt.render(At[He]/Qe,be[He])}else if(N.isInstancedMesh)qt.renderInstances(Xt,ge,N.count);else if(k.isInstancedBufferGeometry){const At=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,be=Math.min(k.instanceCount,At);qt.renderInstances(Xt,ge,be)}else qt.render(Xt,ge)};function $t(E,U,k){E.transparent===!0&&E.side===fe&&E.forceSinglePass===!1?(E.side=we,E.needsUpdate=!0,fs(E,U,k),E.side=pn,E.needsUpdate=!0,fs(E,U,k),E.side=fe):fs(E,U,k)}this.compile=function(E,U,k=null){k===null&&(k=E),f=Wt.get(k),f.init(U),y.push(f),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),E!==k&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const H=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const nt=N.material;if(nt)if(Array.isArray(nt))for(let lt=0;lt<nt.length;lt++){const pt=nt[lt];$t(pt,k,N),H.add(pt)}else $t(nt,k,N),H.add(nt)}),y.pop(),f=null,H},this.compileAsync=function(E,U,k=null){const H=this.compile(E,U,k);return new Promise(N=>{function nt(){if(H.forEach(function(lt){St.get(lt).currentProgram.isReady()&&H.delete(lt)}),H.size===0){N(E);return}setTimeout(nt,10)}kt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Je=null;function mn(E){Je&&Je(E)}function to(){kn.stop()}function eo(){kn.start()}const kn=new Yc;kn.setAnimationLoop(mn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(E){Je=E,Y.setAnimationLoop(E),E===null?kn.stop():kn.start()},Y.addEventListener("sessionstart",to),Y.addEventListener("sessionend",eo),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,U,R),f=Wt.get(E,y.length),f.init(U),y.push(f),bt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(bt),at=this.localClippingEnabled,et=it.init(this.clippingPlanes,at),m=mt.get(E,x.length),m.init(),x.push(m),Y.enabled===!0&&Y.isPresenting===!0){const nt=v.xr.getDepthSensingMesh();nt!==null&&sr(nt,U,-1/0,v.sortObjects)}sr(E,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(K,Q),Vt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Vt&&Ct.addToRenderList(m,E),this.info.render.frame++,et===!0&&it.beginShadows();const k=f.state.shadowsArray;gt.render(k,E,U),et===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){const nt=U.cameras;if(N.length>0)for(let lt=0,pt=nt.length;lt<pt;lt++){const xt=nt[lt];io(H,N,E,xt)}Vt&&Ct.render(E);for(let lt=0,pt=nt.length;lt<pt;lt++){const xt=nt[lt];no(m,E,xt,xt.viewport)}}else N.length>0&&io(H,N,E,U),Vt&&Ct.render(E),no(m,E,U);R!==null&&T===0&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(v,E,U),ne.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(f=y[y.length-1],et===!0&&it.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function sr(E,U,k,H){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){H&&Ft.setFromMatrixPosition(E.matrixWorld).applyMatrix4(bt);const lt=j.update(E),pt=E.material;pt.visible&&m.push(E,lt,pt,k,Ft.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const lt=j.update(E),pt=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ft.copy(E.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ft.copy(lt.boundingSphere.center)),Ft.applyMatrix4(E.matrixWorld).applyMatrix4(bt)),Array.isArray(pt)){const xt=lt.groups;for(let Lt=0,It=xt.length;Lt<It;Lt++){const wt=xt[Lt],Xt=pt[wt.materialIndex];Xt&&Xt.visible&&m.push(E,lt,Xt,k,Ft.z,wt)}}else pt.visible&&m.push(E,lt,pt,k,Ft.z,null)}}const nt=E.children;for(let lt=0,pt=nt.length;lt<pt;lt++)sr(nt[lt],U,k,H)}function no(E,U,k,H){const N=E.opaque,nt=E.transmissive,lt=E.transparent;f.setupLightsView(k),et===!0&&it.setGlobalState(v.clippingPlanes,k),H&&Et.viewport(P.copy(H)),N.length>0&&ds(N,U,k),nt.length>0&&ds(nt,U,k),lt.length>0&&ds(lt,U,k),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function io(E,U,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new On(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?us:Tn,minFilter:ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const nt=f.state.transmissionRenderTarget[H.id],lt=H.viewport||P;nt.setSize(lt.z*v.transmissionResolutionScale,lt.w*v.transmissionResolutionScale);const pt=v.getRenderTarget();v.setRenderTarget(nt),v.getClearColor(V),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),Vt&&Ct.render(k);const xt=v.toneMapping;v.toneMapping=bn;const Lt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),et===!0&&it.setGlobalState(v.clippingPlanes,H),ds(E,k,H),C.updateMultisampleRenderTarget(nt),C.updateRenderTargetMipmap(nt),kt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let wt=0,Xt=U.length;wt<Xt;wt++){const jt=U[wt],ge=jt.object,de=jt.geometry,qt=jt.material,At=jt.group;if(qt.side===fe&&ge.layers.test(H.layers)){const be=qt.side;qt.side=we,qt.needsUpdate=!0,so(ge,k,H,de,qt,At),qt.side=be,qt.needsUpdate=!0,It=!0}}It===!0&&(C.updateMultisampleRenderTarget(nt),C.updateRenderTargetMipmap(nt))}v.setRenderTarget(pt),v.setClearColor(V,q),Lt!==void 0&&(H.viewport=Lt),v.toneMapping=xt}function ds(E,U,k){const H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,nt=E.length;N<nt;N++){const lt=E[N],pt=lt.object,xt=lt.geometry,Lt=H===null?lt.material:H,It=lt.group;pt.layers.test(k.layers)&&so(pt,U,k,xt,Lt,It)}}function so(E,U,k,H,N,nt){E.onBeforeRender(v,U,k,H,N,nt),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(v,U,k,H,E,nt),N.transparent===!0&&N.side===fe&&N.forceSinglePass===!1?(N.side=we,N.needsUpdate=!0,v.renderBufferDirect(k,U,H,N,E,nt),N.side=pn,N.needsUpdate=!0,v.renderBufferDirect(k,U,H,N,E,nt),N.side=fe):v.renderBufferDirect(k,U,H,N,E,nt),E.onAfterRender(v,U,k,H,N,nt)}function fs(E,U,k){U.isScene!==!0&&(U=ie);const H=St.get(E),N=f.state.lights,nt=f.state.shadowsArray,lt=N.state.version,pt=Mt.getParameters(E,N.state,nt,U,k),xt=Mt.getProgramCacheKey(pt);let Lt=H.programs;H.environment=E.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(E.isMeshStandardMaterial?z:b).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Lt===void 0&&(E.addEventListener("dispose",Dt),Lt=new Map,H.programs=Lt);let It=Lt.get(xt);if(It!==void 0){if(H.currentProgram===It&&H.lightsStateVersion===lt)return ao(E,pt),It}else pt.uniforms=Mt.getUniforms(E),E.onBeforeCompile(pt,v),It=Mt.acquireProgram(pt,xt),Lt.set(xt,It),H.uniforms=pt.uniforms;const wt=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(wt.clippingPlanes=it.uniform),ao(E,pt),H.needsLights=sl(E),H.lightsStateVersion=lt,H.needsLights&&(wt.ambientLightColor.value=N.state.ambient,wt.lightProbe.value=N.state.probe,wt.directionalLights.value=N.state.directional,wt.directionalLightShadows.value=N.state.directionalShadow,wt.spotLights.value=N.state.spot,wt.spotLightShadows.value=N.state.spotShadow,wt.rectAreaLights.value=N.state.rectArea,wt.ltc_1.value=N.state.rectAreaLTC1,wt.ltc_2.value=N.state.rectAreaLTC2,wt.pointLights.value=N.state.point,wt.pointLightShadows.value=N.state.pointShadow,wt.hemisphereLights.value=N.state.hemi,wt.directionalShadowMap.value=N.state.directionalShadowMap,wt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,wt.spotShadowMap.value=N.state.spotShadowMap,wt.spotLightMatrix.value=N.state.spotLightMatrix,wt.spotLightMap.value=N.state.spotLightMap,wt.pointShadowMap.value=N.state.pointShadowMap,wt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=It,H.uniformsList=null,It}function ro(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Ys.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function ao(E,U){const k=St.get(E);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function nl(E,U,k,H,N){U.isScene!==!0&&(U=ie),C.resetTextureUnits();const nt=U.fog,lt=H.isMeshStandardMaterial?U.environment:null,pt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:zi,xt=(H.isMeshStandardMaterial?z:b).get(H.envMap||lt),Lt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,It=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),wt=!!k.morphAttributes.position,Xt=!!k.morphAttributes.normal,jt=!!k.morphAttributes.color;let ge=bn;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ge=v.toneMapping);const de=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,qt=de!==void 0?de.length:0,At=St.get(H),be=f.state.lights;if(et===!0&&(at===!0||E!==M)){const Ie=E===M&&H.id===S;it.setState(H,E,Ie)}let Zt=!1;H.version===At.__version?(At.needsLights&&At.lightsStateVersion!==be.state.version||At.outputColorSpace!==pt||N.isBatchedMesh&&At.batching===!1||!N.isBatchedMesh&&At.batching===!0||N.isBatchedMesh&&At.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&At.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&At.instancing===!1||!N.isInstancedMesh&&At.instancing===!0||N.isSkinnedMesh&&At.skinning===!1||!N.isSkinnedMesh&&At.skinning===!0||N.isInstancedMesh&&At.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&At.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&At.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&At.instancingMorph===!1&&N.morphTexture!==null||At.envMap!==xt||H.fog===!0&&At.fog!==nt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==it.numPlanes||At.numIntersection!==it.numIntersection)||At.vertexAlphas!==Lt||At.vertexTangents!==It||At.morphTargets!==wt||At.morphNormals!==Xt||At.morphColors!==jt||At.toneMapping!==ge||At.morphTargetsCount!==qt)&&(Zt=!0):(Zt=!0,At.__version=H.version);let Qe=At.currentProgram;Zt===!0&&(Qe=fs(H,U,N));let ri=!1,He=!1,Xi=!1;const oe=Qe.getUniforms(),Ye=At.uniforms;if(Et.useProgram(Qe.program)&&(ri=!0,He=!0,Xi=!0),H.id!==S&&(S=H.id,He=!0),ri||M!==E){Et.buffers.depth.getReversed()?(st.copy(E.projectionMatrix),uh(st),dh(st),oe.setValue(I,"projectionMatrix",st)):oe.setValue(I,"projectionMatrix",E.projectionMatrix),oe.setValue(I,"viewMatrix",E.matrixWorldInverse);const Oe=oe.map.cameraPosition;Oe!==void 0&&Oe.setValue(I,Tt.setFromMatrixPosition(E.matrixWorld)),Gt.logarithmicDepthBuffer&&oe.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&oe.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,He=!0,Xi=!0)}if(N.isSkinnedMesh){oe.setOptional(I,N,"bindMatrix"),oe.setOptional(I,N,"bindMatrixInverse");const Ie=N.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),oe.setValue(I,"boneTexture",Ie.boneTexture,C))}N.isBatchedMesh&&(oe.setOptional(I,N,"batchingTexture"),oe.setValue(I,"batchingTexture",N._matricesTexture,C),oe.setOptional(I,N,"batchingIdTexture"),oe.setValue(I,"batchingIdTexture",N._indirectTexture,C),oe.setOptional(I,N,"batchingColorTexture"),N._colorsTexture!==null&&oe.setValue(I,"batchingColorTexture",N._colorsTexture,C));const je=k.morphAttributes;if((je.position!==void 0||je.normal!==void 0||je.color!==void 0)&&Pt.update(N,k,Qe),(He||At.receiveShadow!==N.receiveShadow)&&(At.receiveShadow=N.receiveShadow,oe.setValue(I,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ye.envMap.value=xt,Ye.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Ye.envMapIntensity.value=U.environmentIntensity),He&&(oe.setValue(I,"toneMappingExposure",v.toneMappingExposure),At.needsLights&&il(Ye,Xi),nt&&H.fog===!0&&ht.refreshFogUniforms(Ye,nt),ht.refreshMaterialUniforms(Ye,H,O,W,f.state.transmissionRenderTarget[E.id]),Ys.upload(I,ro(At),Ye,C)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ys.upload(I,ro(At),Ye,C),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&oe.setValue(I,"center",N.center),oe.setValue(I,"modelViewMatrix",N.modelViewMatrix),oe.setValue(I,"normalMatrix",N.normalMatrix),oe.setValue(I,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ie=H.uniformsGroups;for(let Oe=0,rr=Ie.length;Oe<rr;Oe++){const Gn=Ie[Oe];D.update(Gn,Qe),D.bind(Gn,Qe)}}return Qe}function il(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function sl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,U,k){St.get(E.texture).__webglTexture=U,St.get(E.depthTexture).__webglTexture=k;const H=St.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const k=St.get(E);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};const rl=I.createFramebuffer();this.setRenderTarget=function(E,U=0,k=0){R=E,w=U,T=k;let H=!0,N=null,nt=!1,lt=!1;if(E){const xt=St.get(E);if(xt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(I.FRAMEBUFFER,null),H=!1;else if(xt.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(xt.__hasExternalTextures)C.rebindTextures(E,St.get(E.texture).__webglTexture,St.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const wt=E.depthTexture;if(xt.__boundDepthTexture!==wt){if(wt!==null&&St.has(wt)&&(E.width!==wt.image.width||E.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const Lt=E.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(lt=!0);const It=St.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(It[U])?N=It[U][k]:N=It[U],nt=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?N=St.get(E).__webglMultisampledFramebuffer:Array.isArray(It)?N=It[k]:N=It,P.copy(E.viewport),F.copy(E.scissor),B=E.scissorTest}else P.copy(J).multiplyScalar(O).floor(),F.copy(vt).multiplyScalar(O).floor(),B=Rt;if(k!==0&&(N=rl),Et.bindFramebuffer(I.FRAMEBUFFER,N)&&H&&Et.drawBuffers(E,N),Et.viewport(P),Et.scissor(F),Et.setScissorTest(B),nt){const xt=St.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,xt.__webglTexture,k)}else if(lt){const xt=St.get(E.texture),Lt=U;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,xt.__webglTexture,k,Lt)}else if(E!==null&&k!==0){const xt=St.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xt.__webglTexture,k)}S=-1},this.readRenderTargetPixels=function(E,U,k,H,N,nt,lt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=St.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){Et.bindFramebuffer(I.FRAMEBUFFER,pt);try{const xt=E.texture,Lt=xt.format,It=xt.type;if(!Gt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-H&&k>=0&&k<=E.height-N&&I.readPixels(U,k,H,N,Nt.convert(Lt),Nt.convert(It),nt)}finally{const xt=R!==null?St.get(R).__webglFramebuffer:null;Et.bindFramebuffer(I.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(E,U,k,H,N,nt,lt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=St.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(pt=pt[lt]),pt){const xt=E.texture,Lt=xt.format,It=xt.type;if(!Gt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-H&&k>=0&&k<=E.height-N){Et.bindFramebuffer(I.FRAMEBUFFER,pt);const wt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,wt),I.bufferData(I.PIXEL_PACK_BUFFER,nt.byteLength,I.STREAM_READ),I.readPixels(U,k,H,N,Nt.convert(Lt),Nt.convert(It),0);const Xt=R!==null?St.get(R).__webglFramebuffer:null;Et.bindFramebuffer(I.FRAMEBUFFER,Xt);const jt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await hh(I,jt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,wt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,nt),I.deleteBuffer(wt),I.deleteSync(jt),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,k=0){E.isTexture!==!0&&(wi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const H=Math.pow(2,-k),N=Math.floor(E.image.width*H),nt=Math.floor(E.image.height*H),lt=U!==null?U.x:0,pt=U!==null?U.y:0;C.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,k,0,0,lt,pt,N,nt),Et.unbindTexture()};const al=I.createFramebuffer(),ol=I.createFramebuffer();this.copyTextureToTexture=function(E,U,k=null,H=null,N=0,nt=null){E.isTexture!==!0&&(wi("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1],U=arguments[2],nt=arguments[3]||0,k=null),nt===null&&(N!==0?(wi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=N,N=0):nt=0);let lt,pt,xt,Lt,It,wt,Xt,jt,ge;const de=E.isCompressedTexture?E.mipmaps[nt]:E.image;if(k!==null)lt=k.max.x-k.min.x,pt=k.max.y-k.min.y,xt=k.isBox3?k.max.z-k.min.z:1,Lt=k.min.x,It=k.min.y,wt=k.isBox3?k.min.z:0;else{const je=Math.pow(2,-N);lt=Math.floor(de.width*je),pt=Math.floor(de.height*je),E.isDataArrayTexture?xt=de.depth:E.isData3DTexture?xt=Math.floor(de.depth*je):xt=1,Lt=0,It=0,wt=0}H!==null?(Xt=H.x,jt=H.y,ge=H.z):(Xt=0,jt=0,ge=0);const qt=Nt.convert(U.format),At=Nt.convert(U.type);let be;U.isData3DTexture?(C.setTexture3D(U,0),be=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(C.setTexture2DArray(U,0),be=I.TEXTURE_2D_ARRAY):(C.setTexture2D(U,0),be=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Zt=I.getParameter(I.UNPACK_ROW_LENGTH),Qe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ri=I.getParameter(I.UNPACK_SKIP_PIXELS),He=I.getParameter(I.UNPACK_SKIP_ROWS),Xi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,de.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,de.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Lt),I.pixelStorei(I.UNPACK_SKIP_ROWS,It),I.pixelStorei(I.UNPACK_SKIP_IMAGES,wt);const oe=E.isDataArrayTexture||E.isData3DTexture,Ye=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const je=St.get(E),Ie=St.get(U),Oe=St.get(je.__renderTarget),rr=St.get(Ie.__renderTarget);Et.bindFramebuffer(I.READ_FRAMEBUFFER,Oe.__webglFramebuffer),Et.bindFramebuffer(I.DRAW_FRAMEBUFFER,rr.__webglFramebuffer);for(let Gn=0;Gn<xt;Gn++)oe&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,St.get(E).__webglTexture,N,wt+Gn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,St.get(U).__webglTexture,nt,ge+Gn)),I.blitFramebuffer(Lt,It,lt,pt,Xt,jt,lt,pt,I.DEPTH_BUFFER_BIT,I.NEAREST);Et.bindFramebuffer(I.READ_FRAMEBUFFER,null),Et.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(N!==0||E.isRenderTargetTexture||St.has(E)){const je=St.get(E),Ie=St.get(U);Et.bindFramebuffer(I.READ_FRAMEBUFFER,al),Et.bindFramebuffer(I.DRAW_FRAMEBUFFER,ol);for(let Oe=0;Oe<xt;Oe++)oe?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,je.__webglTexture,N,wt+Oe):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,je.__webglTexture,N),Ye?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ie.__webglTexture,nt,ge+Oe):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ie.__webglTexture,nt),N!==0?I.blitFramebuffer(Lt,It,lt,pt,Xt,jt,lt,pt,I.COLOR_BUFFER_BIT,I.NEAREST):Ye?I.copyTexSubImage3D(be,nt,Xt,jt,ge+Oe,Lt,It,lt,pt):I.copyTexSubImage2D(be,nt,Xt,jt,Lt,It,lt,pt);Et.bindFramebuffer(I.READ_FRAMEBUFFER,null),Et.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ye?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(be,nt,Xt,jt,ge,lt,pt,xt,qt,At,de.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(be,nt,Xt,jt,ge,lt,pt,xt,qt,de.data):I.texSubImage3D(be,nt,Xt,jt,ge,lt,pt,xt,qt,At,de):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,nt,Xt,jt,lt,pt,qt,At,de.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,nt,Xt,jt,de.width,de.height,qt,de.data):I.texSubImage2D(I.TEXTURE_2D,nt,Xt,jt,lt,pt,qt,At,de);I.pixelStorei(I.UNPACK_ROW_LENGTH,Zt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ri),I.pixelStorei(I.UNPACK_SKIP_ROWS,He),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Xi),nt===0&&U.generateMipmaps&&I.generateMipmap(be),Et.unbindTexture()},this.copyTextureToTexture3D=function(E,U,k=null,H=null,N=0){return E.isTexture!==!0&&(wi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,E=arguments[2],U=arguments[3],N=arguments[4]||0),wi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,k,H,N)},this.initRenderTarget=function(E){St.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Et.unbindTexture()},this.resetState=function(){w=0,T=0,R=null,Et.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}const fc="sarab_settings_v60",he=typeof window<"u"&&(/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||"ontouchstart"in window&&Math.min(window.innerWidth,window.innerHeight)<900),Br={low:{label:"منخفض",dprCap:1,shadowMapSize:512,shadows:!1,dustCount:70,cloudOctaves:2,useSkyCache:!0,useIBL:!1,anisotropy:2,sunFlare:!1,resolutionScale:.9},medium:{label:"متوسط",dprCap:1.25,shadowMapSize:1024,shadows:!he,dustCount:120,cloudOctaves:3,useSkyCache:he,useIBL:!1,anisotropy:4,sunFlare:!0,resolutionScale:1},high:{label:"عالي",dprCap:1.65,shadowMapSize:he?1024:2048,shadows:!0,dustCount:190,cloudOctaves:4,useSkyCache:!1,useIBL:!0,anisotropy:6,sunFlare:!0,resolutionScale:1.2},ultra:{label:"فائق",dprCap:2,shadowMapSize:he?1024:2048,shadows:!0,dustCount:240,cloudOctaves:5,useSkyCache:!1,useIBL:!0,anisotropy:8,sunFlare:!0,resolutionScale:1.4}},pc={quality:"ultra",fpsCap:60,batterySaver:!1,sensitivity:2.8,resolutionScale:1.4,fov:72,volume:.85,shadows:!0,sunFlare:!0,dustStorm:!0,showFps:!1};class Bm{constructor(){this.data={...pc},this.listeners=new Set,this.load()}load(){try{const t=localStorage.getItem(fc);if(t){const e=JSON.parse(t);this.data={...pc,...e}}}catch{}}save(){try{localStorage.setItem(fc,JSON.stringify(this.data))}catch{}}getPreset(){const t=Br[this.data.quality]||Br.ultra;return this.data.batterySaver?{...t,shadows:!1,shadowMapSize:512,useSkyCache:!0,useIBL:!1,cloudOctaves:2,dustCount:Math.min(t.dustCount,65),anisotropy:2}:t}getEffectiveFpsCap(){return this.data.batterySaver?Math.min(30,this.data.fpsCap||30):this.data.fpsCap||60}applyQualityPreset(t){const e=Br[t];e&&(this.data.quality=t,this.data.shadows=e.shadows,this.data.sunFlare=e.sunFlare,this.data.resolutionScale=e.resolutionScale,this.save(),this.emit())}set(t,e){this.data[t]=e,this.save(),this.emit()}onChange(t){return this.listeners.add(t),()=>this.listeners.delete(t)}emit(){for(const t of this.listeners)t(this.data,this.getPreset())}}class Om{constructor(t){this.renderer=t,this.loader=new qc,this.sets=new Map,this.anisotropy=Math.min(8,t.capabilities.getMaxAnisotropy())}setAnisotropy(t){this.anisotropy=Math.min(t,this.renderer.capabilities.getMaxAnisotropy());for(const e of this.sets.values())for(const n of Object.values(e))n&&n.isTexture&&(n.anisotropy=this.anisotropy,n.needsUpdate=!0)}loadPBRSet(t,e=1,n=1){const i=`${t}_${e}_${n}`;if(this.sets.has(i))return this.sets.get(i);const r=(u,p)=>(u.wrapS=dn,u.wrapT=dn,u.repeat.set(e,n),u.anisotropy=this.anisotropy,u.colorSpace=p?xe:un,u),o=".webp",a=`./textures/${t}`,c=r(this.loader.load(`${a}_albedo${o}`),!0),l=r(this.loader.load(`${a}_normal${o}`),!1),h=r(this.loader.load(`${a}_roughness${o}`),!1),d={map:c,normalMap:l,roughnessMap:h};return this.sets.set(i,d),d}createContactShadowTexture(){if(this._shadowTex)return this._shadowTex;const t=128,e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d"),i=n.createRadialGradient(t/2,t/2,4,t/2,t/2,t/2);i.addColorStop(0,"rgba(28, 18, 10, 0.44)"),i.addColorStop(.42,"rgba(34, 22, 12, 0.24)"),i.addColorStop(.75,"rgba(38, 26, 14, 0.06)"),i.addColorStop(1,"rgba(38, 26, 14, 0.0)"),n.fillStyle=i,n.fillRect(0,0,t,t);const r=new Ai(e);return this._shadowTex=r,r}createPalmFrondTexture(){if(this._palmFrondTex)return this._palmFrondTex;const t=256,e=512,n=document.createElement("canvas");n.width=t,n.height=e;const i=n.getContext("2d");i.clearRect(0,0,t,e);const r=t*.5;for(let h=e-6;h>=14;h-=2){const d=1-h/e,u=7.5*(1-d*.78),p=Math.round(118+d*24),g=Math.round(108+d*26),_=Math.round(64+d*14);i.fillStyle=`rgb(${p},${g},${_})`,i.fillRect(r-u*.5,h,u,3)}let o=7717;const a=()=>((o=o*16807%2147483647)-1)/2147483646,c=44;for(let h=0;h<c;h++){const d=.06+h/(c-1)*.9,u=e*(1-d),p=Math.sin(Math.pow(d,.85)*Math.PI),g=t*.47*(.28+.72*p);for(const _ of[-1,1]){const m=(a()-.5)*.16,f=g*(.86+a()*.22),x=r+_*f,y=u-f*(.34+d*.35)+m*18,v=r+_*f*.55,A=u-f*(.32+d*.22)-4,w=a(),T=Math.round(86+w*34+(d>.78?18:0)),R=Math.round(104+w*36),S=Math.round(54+w*20),M=i.createLinearGradient(r,u,x,y);M.addColorStop(0,`rgb(${Math.round(T*.84)}, ${Math.round(R*.88)}, ${Math.round(S*.82)})`),M.addColorStop(.65,`rgb(${T}, ${R}, ${S})`),M.addColorStop(1,`rgb(${Math.min(220,T+28)}, ${Math.min(210,R+16)}, ${Math.min(140,S+10)})`),i.strokeStyle=M,i.lineWidth=4.4*(.55+.45*p),i.lineCap="round",i.beginPath(),i.moveTo(r+_*2,u),i.quadraticCurveTo(v,A,x,y),i.stroke(),i.strokeStyle="rgba(175, 185, 118, 0.32)",i.lineWidth=1.1,i.beginPath(),i.moveTo(r+_*2,u),i.quadraticCurveTo(v,A-.8,x,y),i.stroke()}}const l=new Ai(n);return l.colorSpace=xe,l.anisotropy=this.anisotropy,this._palmFrondTex=l,l}createPalmBarkTexture(){if(this._palmBarkTex)return this._palmBarkTex;const t=256,e=512,n=document.createElement("canvas");n.width=t,n.height=e;const i=n.getContext("2d");i.fillStyle="#9c866b",i.fillRect(0,0,t,e);const r=26,o=e/r;for(let c=0;c<r;c++){const l=c*o,h=c%2*32;i.fillStyle="rgba(62, 48, 34, 0.58)",i.fillRect(0,l,t,3.5),i.fillStyle="rgba(186, 162, 132, 0.45)",i.fillRect(0,l+3.5,t,4.5);for(let d=-32;d<t+32;d+=64)i.strokeStyle="rgba(72, 56, 40, 0.45)",i.lineWidth=2,i.beginPath(),i.moveTo(d+h,l+o),i.lineTo(d+h+32,l+4),i.lineTo(d+h+64,l+o),i.stroke()}const a=new Ai(n);return a.colorSpace=xe,a.wrapS=dn,a.wrapT=dn,a.repeat.set(1,3),a.anisotropy=this.anisotropy,this._palmBarkTex=a,a}createDustParticleTexture(){if(this._dustTex)return this._dustTex;const t=64,e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d"),i=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);i.addColorStop(0,"rgba(255, 246, 228, 0.78)"),i.addColorStop(.38,"rgba(244, 214, 168, 0.36)"),i.addColorStop(.72,"rgba(232, 188, 130, 0.08)"),i.addColorStop(1,"rgba(232, 188, 130, 0.0)"),n.fillStyle=i,n.fillRect(0,0,t,t);const r=new Ai(e);return this._dustTex=r,r}}function zm(s,t,e,n={}){const i=s.attributes.position,r=s.attributes.normal,o=i.count,a=new Float32Array(o*3),c=n.occluders||[],l=n.sunStrength??.16,h=n.cavityStrength??.22,d=n.warmBounce??[1,.985,.96],u=n.shadowTint??[.84,.8,.78],p=e.x,g=e.y,_=e.z;for(let m=0;m<o;m++){const f=i.getX(m),x=i.getY(m),y=i.getZ(m),v=r?r.getX(m):0,A=r?r.getY(m):1,w=r?r.getZ(m):0,T=3.6,R=.25*(t(f+T,y)+t(f-T,y)+t(f,y+T)+t(f,y-T)),S=te.clamp((R-x)*.22,-.35,1),M=te.clamp(1-Math.max(0,S)*h,.66,1.05),P=Math.max(0,v*p+A*g+w*_),B=(.74+.26*Math.max(0,A))*(1-l*.55+P*l);let V=1;for(let Q=0;Q<c.length;Q++){const J=c[Q];if(J.type==="box"){const vt=Math.max(0,Math.abs(f-J.x)-J.hx),Rt=Math.max(0,Math.abs(y-J.z)-J.hz),X=Math.hypot(vt,Rt),et=J.pad??2.6;if(X<et){const at=1-X/et,st=1-at*at*(J.strength??.38);st<V&&(V=st)}}else{const vt=f-J.x,Rt=y-J.z,X=(J.rx??J.r??2)+(J.pad??1.8),et=(J.rz??J.r??2)+(J.pad??1.8);if(Math.abs(vt)>X||Math.abs(Rt)>et)continue;const at=Math.hypot(vt/X,Rt/et);if(at<1){const st=1-at,Tt=1-st*st*(3-2*st)*(J.strength??.34);Tt<V&&(V=Tt)}}}const q=te.clamp(M*B*V,.42,1.08),G=te.clamp((1-q)*1.45,0,1),W=te.lerp(d[0],u[0],G),O=te.lerp(d[1],u[1],G),K=te.lerp(d[2],u[2],G);a[m*3]=q*W,a[m*3+1]=q*O,a[m*3+2]=q*K}return s.setAttribute("color",new Jt(a,3)),s}function js(s,t={}){const e=t.bottomAO??.56,n=t.topLift??1.04,i=t.undersideAO??.22;s.boundingBox||s.computeBoundingBox();const r=s.boundingBox.min.y,o=Math.max(.001,s.boundingBox.max.y-r),a=s.attributes.position,c=s.attributes.normal,l=new Float32Array(a.count*3);for(let h=0;h<a.count;h++){const d=te.clamp((a.getY(h)-r)/o,0,1),u=c?c.getY(h):.4,p=te.lerp(e,n,Math.pow(d,.52)),g=u<0?1-Math.min(1,-u)*i:1+u*.04,_=te.clamp(p*g,.44,1.06);l[h*3]=_,l[h*3+1]=_*.985,l[h*3+2]=_*.965}return s.setAttribute("color",new Jt(l,3)),s}function Ti(s,t,e,n={}){const i=n.bottomAO??.58,r=n.topAO??.96,o=n.cornerAO??.16,a=n.tileScale??1.45,c=s>1.8?3:2,l=t>1.6?3:2,h=e>1.8?3:2,d=new le(s,t,e,c,l,h),u=d.attributes.position,p=d.attributes.normal,g=d.attributes.uv,_=new Float32Array(u.count*3),m=Math.max(.001,s*.5),f=Math.max(.001,t*.5),x=Math.max(.001,e*.5);for(let y=0;y<u.count;y++){const v=u.getX(y),A=u.getY(y),w=u.getZ(y),T=Math.abs(p.getX(y)),R=Math.abs(p.getY(y));R>.5?g.setXY(y,(v+m)/a,(w+x)/a):T>.5?g.setXY(y,(w+x)/a,(A+f)/a):g.setXY(y,(v+m)/a,(A+f)/a);const S=te.clamp((A+f)/Math.max(.001,t),0,1),M=te.lerp(i,1,Math.pow(S,.45)),P=S>.85?te.lerp(1,r,(S-.85)/.15):1,F=Math.abs(v)/m,B=Math.abs(w)/x,V=R>.5?Math.max(F,B):T>.5?B:F,q=1-Math.pow(Math.max(0,V-.55)/.45,2)*o,G=te.clamp(M*P*q,.46,1.02);_[y*3]=G,_[y*3+1]=G*.985,_[y*3+2]=G*.965}return g.needsUpdate=!0,d.setAttribute("color",new Jt(_,3)),d}function km(s,t,e,n,i=.46){if(!t.length)return null;const r=new Ee(1,1);r.rotateX(-Math.PI/2);const o=new an({map:s.createContactShadowTexture(),transparent:!0,depthWrite:!1,opacity:i,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),a=new cn(r,o,t.length),c=new re,l=new L(0,1,0),h=new L,d=new An,u=new An,p={x:0,y:1,z:0};for(let g=0;g<t.length;g++){const _=t[g],m=_.y!==void 0?_.y:e(_.x,_.z);n(_.x,_.z,p),h.set(p.x,p.y,p.z),d.setFromUnitVectors(l,h),u.setFromAxisAngle(l,_.ry||0),d.multiply(u),c.position.set(_.x,m+.035,_.z),c.quaternion.copy(d),c.scale.set(_.sx,1,_.sz),c.updateMatrix(),a.setMatrixAt(g,c.matrix)}return a.instanceMatrix.needsUpdate=!0,a}function Jc(s,t=new Set,e=new Set){if(s)for(s.traverse(n=>{if(n.geometry&&!t.has(n.geometry)&&n.geometry.dispose(),n.material){const i=Array.isArray(n.material)?n.material:[n.material];for(const r of i)r&&!e.has(r)&&r.dispose()}});s.children.length>0;)s.remove(s.children[0])}class Gm{constructor(){this.manifest={},this.geometries=new Map,this.materials=new Map,this.loader=new qc}async preloadAll(){try{const t=await fetch("./models/manifest.json");if(!t.ok)return;this.manifest=await t.json();const e=Object.keys(this.manifest);await Promise.all(e.map(n=>this._loadModel(n,this.manifest[n])))}catch(t){console.warn("ModelManager preload warning:",t)}}async _loadModel(t,e){const[n,i,r]=await Promise.all([fetch(`./models/${t}.bin`).then(x=>x.arrayBuffer()),e.hasDiff?this._loadTex(`./models/${t}_diff.webp`,!0):Promise.resolve(null),e.hasNor?this._loadTex(`./models/${t}_nor.webp`,!1):Promise.resolve(null)]),o=new Uint32Array(n,0,2),a=o[0],c=o[1],l=new Float32Array(n,8,a*8),h=new Uint16Array(n,8+a*32,c),d=new Float32Array(a*3),u=new Float32Array(a*3),p=new Float32Array(a*2);for(let x=0;x<a;x++){const y=x*8;d[x*3]=l[y],d[x*3+1]=l[y+1],d[x*3+2]=l[y+2],u[x*3]=l[y+3],u[x*3+1]=l[y+4],u[x*3+2]=l[y+5],p[x*2]=l[y+6],p[x*2+1]=1-l[y+7]}const g=new me;g.setAttribute("position",new Jt(d,3)),g.setAttribute("normal",new Jt(u,3)),g.setAttribute("uv",new Jt(p,2)),g.setIndex(new Jt(h.slice(),1)),g.computeBoundingBox(),g.computeBoundingSphere();const _=t.startsWith("rock");js(g,{bottomAO:_?.56:.7,topLift:_?1.04:1.01,undersideAO:_?.24:.16});const m=t==="lantern",f=he&&!m?new ce({map:i||null,normalMap:r||null,normalScale:new yt(_?.82:.72,_?.82:.72),vertexColors:!0,side:_?fe:pn}):new Ne({map:i||null,normalMap:r||null,normalScale:new yt(_?.82:.72,_?.82:.72),roughness:m?.52:.88,metalness:m?.45:.04,vertexColors:!0,side:_?fe:pn});f.name=`scan_${t}`,t==="table"||t==="chair"?(f.onBeforeCompile=x=>{x.fragmentShader=x.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
           float _woodLuma = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
           float _grain = clamp(_woodLuma * 1.15, 0.16, 0.96);
           vec3 _desertCedar = vec3(0.32, 0.21, 0.11);
           vec3 _bleachedHighlight = vec3(0.54, 0.40, 0.25);
           diffuseColor.rgb = mix(_desertCedar, _bleachedHighlight, smoothstep(0.25, 0.88, _grain)) * (0.68 + _grain * 0.52);`)},f.customProgramCacheKey=()=>`scan_wood_retint_${t}`):_&&f.color.set("#e8d8be"),this.geometries.set(t,g),this.materials.set(t,f)}_loadTex(t,e){return new Promise(n=>{this.loader.load(t,i=>{i.colorSpace=e?xe:un,i.wrapS=dn,i.wrapT=dn,n(i)},void 0,()=>n(null))})}getGeometry(t){return this.geometries.get(t)||null}getMaterial(t){return this.materials.get(t)||null}getSharedSets(){return{geometries:new Set(this.geometries.values()),materials:new Set(this.materials.values())}}createMesh(t,e=1){const n=this.getGeometry(t),i=this.getMaterial(t);if(!n||!i)return null;const r=new ft(n,i);return r.scale.setScalar(e),r}}class Hm{constructor(){this.ctx=null,this.masterGain=null,this.volume=.85,this.unlocked=!1,this.stageId=1,this.indoorFactor=0,this.stormIntensity=0,this.windGain=null,this.windFilterL=null,this.windFilterR=null,this.canyonResGain=null,this.canyonResFilter=null,this.summitRushGain=null,this.nightBreezeGain=null,this._spatialSpots=[],this._spatialNodes=[],this._noiseBuffer=null,this._blipCounter=0,this._ambAccum=.2,this._listenerAccum=.1,this._cricketTimer=.8,this._wildlifeTimer=6.5}unlock(){if(this.unlocked&&this.ctx){this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});return}const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.volume,this.masterGain.connect(this.ctx.destination),this._noiseBuffer=this._createNoiseBuffer(4),this._setupStereoAmbienceGraph(),this.unlocked=!0,this._spatialSpots.length>0&&this._rebuildContinuousSpatialLoops(),this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}))}setVolume(t){this.volume=Math.max(0,Math.min(1,t)),this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(this.volume,this.ctx.currentTime,.05)}setStage(t,e=[]){this.stageId=t,this._spatialSpots=e||[],this._ambAccum=1,this._cricketTimer=.7,this._wildlifeTimer=4.5+Math.random()*4,this._rebuildContinuousSpatialLoops()}setStormIntensity(t){this.stormIntensity=Math.max(0,Math.min(1,t))}setSuspended(t){this.ctx&&(t&&this.ctx.state==="running"?this.ctx.suspend().catch(()=>{}):!t&&this.unlocked&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}))}_createNoiseBuffer(t){const e=this.ctx.sampleRate,n=Math.floor(e*t),i=this.ctx.createBuffer(1,n,e),r=i.getChannelData(0);let o=0,a=0,c=0,l=0,h=0,d=0,u=0;for(let p=0;p<n;p++){const g=Math.random()*2-1;o=.99886*o+g*.0555179,a=.99332*a+g*.0750759,c=.969*c+g*.153852,l=.8665*l+g*.3104856,h=.55*h+g*.5329522,d=-.7616*d-g*.016898,r[p]=(o+a+c+l+h+d+u+g*.5362)*.055,u=g*.115926}return i}_setupStereoAmbienceGraph(){const t=this.ctx.currentTime;this.windGain=this.ctx.createGain(),this.windGain.gain.value=.18,this.windGain.connect(this.masterGain);const e=(h,d,u,p)=>{const g=this.ctx.createBufferSource();g.buffer=this._noiseBuffer,g.loop=!0;const _=this.ctx.createBiquadFilter();_.type="bandpass",_.frequency.value=u,_.Q.value=1.2;const m=this.ctx.createStereoPanner?this.ctx.createStereoPanner():null;m&&(m.pan.value=h);const f=this.ctx.createOscillator();f.frequency.value=p;const x=this.ctx.createGain();return x.gain.value=95,f.connect(x),x.connect(_.frequency),g.connect(_),m?(_.connect(m),m.connect(this.windGain)):_.connect(this.windGain),g.start(t+d),f.start(t),_};this.windFilterL=e(-.68,0,240,.11),this.windFilterR=e(.68,1.85,290,.085);const n=this.ctx.createBufferSource();n.buffer=this._noiseBuffer,n.loop=!0,this.canyonResFilter=this.ctx.createBiquadFilter(),this.canyonResFilter.type="bandpass",this.canyonResFilter.frequency.value=340,this.canyonResFilter.Q.value=5.4,this.canyonResGain=this.ctx.createGain(),this.canyonResGain.gain.value=0,n.connect(this.canyonResFilter),this.canyonResFilter.connect(this.canyonResGain),this.canyonResGain.connect(this.masterGain),n.start(t+1.2);const i=this.ctx.createBufferSource();i.buffer=this._noiseBuffer,i.loop=!0;const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.value=560,r.Q.value=1.5,this.summitRushGain=this.ctx.createGain(),this.summitRushGain.gain.value=0,i.connect(r),r.connect(this.summitRushGain),this.summitRushGain.connect(this.masterGain),i.start(t+2.1);const o=this.ctx.createOscillator();o.frequency.value=.17;const a=this.ctx.createGain();a.gain.value=220,o.connect(a),a.connect(r.frequency),o.start(t);const c=this.ctx.createBufferSource();c.buffer=this._noiseBuffer,c.loop=!0;const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=360,this.nightBreezeGain=this.ctx.createGain(),this.nightBreezeGain.gain.value=0,c.connect(l),l.connect(this.nightBreezeGain),this.nightBreezeGain.connect(this.masterGain),c.start(t+.5)}_clearContinuousSpatialLoops(){for(const t of this._spatialNodes)try{t.src?.stop(),t.src?.disconnect(),t.panner?.disconnect(),t.gain?.disconnect()}catch{}this._spatialNodes.length=0}_createPannerAt(t,e,n,i=6,r=75,o=1.45){const a=this.ctx.createPanner();return a.panningModel="HRTF",a.distanceModel="inverse",a.refDistance=i,a.maxDistance=r,a.rolloffFactor=o,a.positionX?a.positionX.setValueAtTime(t,this.ctx.currentTime):a.setPosition(t,e,n),a.positionY&&(a.positionY.setValueAtTime(e,this.ctx.currentTime),a.positionZ.setValueAtTime(n,this.ctx.currentTime)),a}_rebuildContinuousSpatialLoops(){if(this._clearContinuousSpatialLoops(),!this.unlocked||!this.ctx||!this._noiseBuffer)return;const t=this.ctx.currentTime;for(const e of this._spatialSpots)if(e.type==="palms"){const n=this.ctx.createBufferSource();n.buffer=this._noiseBuffer,n.loop=!0;const i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.value=1850,i.Q.value=1.6;const r=this.ctx.createGain();r.gain.value=.22;const o=this._createPannerAt(e.x,e.y+4.5,e.z,5,48,1.5);n.connect(i),i.connect(r),r.connect(o),o.connect(this.masterGain),n.start(t+Math.random()*2),this._spatialNodes.push({src:n,panner:o,gain:r})}else if(e.type==="lantern"||e.type==="campfire"){const n=this.ctx.createBufferSource();n.buffer=this._noiseBuffer,n.loop=!0;const i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.value=e.type==="campfire"?520:880,i.Q.value=1.9;const r=this.ctx.createGain();r.gain.value=e.type==="campfire"?.14:.08;const o=this._createPannerAt(e.x,e.y+.8,e.z,2.5,22,1.8);n.connect(i),i.connect(r),r.connect(o),o.connect(this.masterGain),n.start(t+Math.random()*2),this._spatialNodes.push({src:n,panner:o,gain:r})}}_triggerSpatialCricket(){if(!this.unlocked||!this.ctx)return;const t=this._spatialSpots.filter(p=>p.type==="cricket");if(t.length===0)return;const e=t[Math.floor(Math.random()*t.length)],n=this.ctx.currentTime,i=3750+Math.random()*580,r=3+Math.floor(Math.random()*2),o=.056,a=.048*(1-this.indoorFactor*.72);if(a<.004)return;const c=this.ctx.createOscillator();c.type="sine",c.frequency.value=i;const l=this.ctx.createBiquadFilter();l.type="bandpass",l.frequency.value=i,l.Q.value=6.5;const h=this.ctx.createGain();h.gain.setValueAtTime(1e-4,n);for(let p=0;p<r;p++){const g=n+p*o;h.gain.setValueAtTime(1e-4,g),h.gain.linearRampToValueAtTime(a,g+.012),h.gain.exponentialRampToValueAtTime(1e-4,g+.044)}const d=this._createPannerAt(e.x+(Math.random()-.5)*6,e.y+.5,e.z+(Math.random()-.5)*6,8,95,1.35);c.connect(l),l.connect(h),h.connect(d),d.connect(this.masterGain);const u=r*o+.06;c.start(n),c.stop(n+u)}_triggerSpatialWildlife(t){if(!this.unlocked||!this.ctx||!t)return;const e=this.ctx.currentTime,n=Math.random()*Math.PI*2,i=28+Math.random()*24,r=t.x+Math.cos(n)*i,o=t.z+Math.sin(n)*i;if(this.stageId===1||this.stageId===2){const a=this.ctx.createOscillator(),c=this.ctx.createBiquadFilter(),l=this.ctx.createGain();a.type="sawtooth",a.frequency.setValueAtTime(2150,e),a.frequency.exponentialRampToValueAtTime(1420,e+.75),c.type="bandpass",c.frequency.value=1800,c.Q.value=4.5,l.gain.setValueAtTime(1e-4,e),l.gain.linearRampToValueAtTime(.045,e+.08),l.gain.exponentialRampToValueAtTime(1e-4,e+.82);const h=this._createPannerAt(r,t.y+24,o,14,140,1.1);a.connect(c),c.connect(l),l.connect(h),h.connect(this.masterGain),a.start(e),a.stop(e+.88)}else if(this.stageId===3){const a=this.ctx.createOscillator(),c=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(104,e),a.frequency.linearRampToValueAtTime(110,e+1.8),a.frequency.linearRampToValueAtTime(98,e+3.6),c.gain.setValueAtTime(1e-4,e),c.gain.linearRampToValueAtTime(.042,e+1.2),c.gain.exponentialRampToValueAtTime(1e-4,e+3.7);const l=this._createPannerAt(r,t.y-25,o,18,160,1);a.connect(c),c.connect(l),l.connect(this.masterGain),a.start(e),a.stop(e+3.8)}else this.stageId===4&&this.indoorFactor<.5&&[0,.52].forEach((a,c)=>{const l=this.ctx.createOscillator(),h=this.ctx.createGain();l.type="sine",l.frequency.setValueAtTime(c===0?410:375,e+a),l.frequency.exponentialRampToValueAtTime(c===0?360:325,e+a+.36),h.gain.setValueAtTime(1e-4,e+a),h.gain.linearRampToValueAtTime(.045,e+a+.06),h.gain.exponentialRampToValueAtTime(1e-4,e+a+.42);const d=this._createPannerAt(r,t.y+8,o,12,120,1.2);l.connect(h),h.connect(d),d.connect(this.masterGain),l.start(e+a),l.stop(e+a+.46)})}updateAmbience(t,e,n,i=null,r=null){if(!this.unlocked||!this.ctx||!this.windGain||this.ctx.state!=="running")return;if(this.indoorFactor+=(e-this.indoorFactor)*Math.min(1,t*4.5),this._listenerAccum+=t,i&&this._listenerAccum>=.066){this._listenerAccum=0;const m=this.ctx.listener,f=this.ctx.currentTime,x=i.position;m.positionX?(m.positionX.setValueAtTime(x.x,f),m.positionY.setValueAtTime(x.y,f),m.positionZ.setValueAtTime(x.z,f)):m.setPosition&&m.setPosition(x.x,x.y,x.z);const y=i.matrixWorld.elements,v=-y[8],A=-y[9],w=-y[10],T=y[4],R=y[5],S=y[6];m.forwardX?(m.forwardX.setValueAtTime(v,f),m.forwardY.setValueAtTime(A,f),m.forwardZ.setValueAtTime(w,f),m.upX.setValueAtTime(T,f),m.upY.setValueAtTime(R,f),m.upZ.setValueAtTime(S,f)):m.setOrientation&&m.setOrientation(v,A,w,T,R,S)}if(this.stageId===4&&(this._cricketTimer-=t,this._cricketTimer<=0&&(this._triggerSpatialCricket(),this._cricketTimer=.65+Math.random()*1.45)),this._wildlifeTimer-=t,this._wildlifeTimer<=0&&(this._triggerSpatialWildlife(r),this._wildlifeTimer=9+Math.random()*10),this._ambAccum+=t,this._ambAccum<.125)return;this._ambAccum=0;const o=this.ctx.currentTime,a=this.stormIntensity||0,c=1-this.indoorFactor*.65,l=.85+.2*Math.sin(n*.39)+.12*Math.sin(n*.98);let h=0,d=240,u=290,p=0,g=0,_=0;this.stageId===1?(h=.19*l,d=230,u=285):this.stageId===2?(h=(.17+a*.26)*l,d=275+a*110,u=335+a*120,p=(.15+a*.14)*(.8+.2*Math.sin(n*.54)),this.canyonResFilter.frequency.setTargetAtTime(320+Math.sin(n*.3)*75,o,.25)):this.stageId===3?(h=.16*l,d=295,u=365,g=.28*(.82+.2*Math.sin(n*.62))):(h=.02,_=.14*(.86+.14*Math.sin(n*.26))*c),this.windGain.gain.setTargetAtTime(h*c,o,.22),this.windFilterL.frequency.setTargetAtTime(d*c,o,.22),this.windFilterR.frequency.setTargetAtTime(u*c,o,.22),this.canyonResGain.gain.setTargetAtTime(p*c,o,.25),this.summitRushGain.gain.setTargetAtTime(g*c,o,.25),this.nightBreezeGain.gain.setTargetAtTime(_,o,.25)}playFootstep(t="sand",e=!1){if(!this.unlocked||!this.ctx||!this._noiseBuffer)return;const n=this.ctx.currentTime,i=this.ctx.createBufferSource();i.buffer=this._noiseBuffer;const r=Math.random()*2.4,o=this.ctx.createBiquadFilter(),a=this.ctx.createGain(),c=e?.21:.14;if(t==="stone"){o.type="bandpass",o.frequency.value=720+Math.random()*190,o.Q.value=2.1,a.gain.setValueAtTime(.001,n),a.gain.linearRampToValueAtTime(c*1.15,n+.007),a.gain.exponentialRampToValueAtTime(.001,n+.088);const l=this.ctx.createOscillator(),h=this.ctx.createGain();l.frequency.setValueAtTime(118,n),l.frequency.exponentialRampToValueAtTime(48,n+.055),h.gain.setValueAtTime(c*.48,n),h.gain.exponentialRampToValueAtTime(.001,n+.06),l.connect(h),h.connect(this.masterGain),l.start(n),l.stop(n+.065)}else if(t==="sabkha"){o.type="highpass",o.frequency.value=1850+Math.random()*480,a.gain.setValueAtTime(.001,n),a.gain.linearRampToValueAtTime(c*1.08,n+.012),a.gain.exponentialRampToValueAtTime(.001,n+.11);const l=this.ctx.createOscillator(),h=this.ctx.createGain();l.type="triangle",l.frequency.setValueAtTime(210+Math.random()*40,n),l.frequency.exponentialRampToValueAtTime(75,n+.045),h.gain.setValueAtTime(c*.34,n),h.gain.exponentialRampToValueAtTime(.001,n+.052),l.connect(h),h.connect(this.masterGain),l.start(n),l.stop(n+.06)}else t==="rock"?(o.type="bandpass",o.frequency.value=1380+Math.random()*420,o.Q.value=1.45,a.gain.setValueAtTime(.001,n),a.gain.linearRampToValueAtTime(c*1.05,n+.014),a.gain.exponentialRampToValueAtTime(.001,n+.12)):(o.type="bandpass",o.frequency.value=920+Math.random()*320,o.Q.value=.82,a.gain.setValueAtTime(.001,n),a.gain.linearRampToValueAtTime(c*.94,n+.032),a.gain.exponentialRampToValueAtTime(.001,n+.175));i.connect(o),o.connect(a),a.connect(this.masterGain),i.start(n,r,.21)}playFlashlightClick(t=!0){if(!this.unlocked||!this.ctx)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="square",n.frequency.setValueAtTime(t?1450:1120,e),n.frequency.exponentialRampToValueAtTime(t?420:280,e+.022),i.gain.setValueAtTime(.13,e),i.gain.exponentialRampToValueAtTime(.001,e+.026),n.connect(i),i.connect(this.masterGain),n.start(e),n.stop(e+.03);const r=e+.018,o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(t?2350:1680,r),o.frequency.exponentialRampToValueAtTime(t?680:420,r+.03),a.gain.setValueAtTime(.15,r),a.gain.exponentialRampToValueAtTime(.001,r+.036),o.connect(a),a.connect(this.masterGain),o.start(r),o.stop(r+.04)}playDiscoverySFX(t="paper"){if(!this.unlocked||!this.ctx)return;const e=this.ctx.currentTime;if(t==="paper"&&this._noiseBuffer){const n=this.ctx.createBufferSource();n.buffer=this._noiseBuffer;const i=this.ctx.createBiquadFilter();i.type="highpass",i.frequency.value=1900;const r=this.ctx.createGain();r.gain.setValueAtTime(.001,e),r.gain.linearRampToValueAtTime(.15,e+.04),r.gain.exponentialRampToValueAtTime(.001,e+.26),n.connect(i),i.connect(r),r.connect(this.masterGain),n.start(e,.4,.3)}else if(t==="metal"){const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(1180,e),n.frequency.exponentialRampToValueAtTime(840,e+.22),i.gain.setValueAtTime(.12,e),i.gain.exponentialRampToValueAtTime(.001,e+.28),n.connect(i),i.connect(this.masterGain),n.start(e),n.stop(e+.3)}else if(t==="flame"&&this._noiseBuffer){const n=this.ctx.createBufferSource();n.buffer=this._noiseBuffer;const i=this.ctx.createBiquadFilter();i.type="bandpass",i.frequency.setValueAtTime(320,e),i.frequency.exponentialRampToValueAtTime(980,e+.45);const r=this.ctx.createGain();r.gain.setValueAtTime(.001,e),r.gain.linearRampToValueAtTime(.18,e+.14),r.gain.exponentialRampToValueAtTime(.001,e+.72),n.connect(i),i.connect(r),r.connect(this.masterGain),n.start(e,.2,.8)}[293.7,369.99,440].forEach((n,i)=>{const r=this.ctx.createOscillator(),o=this.ctx.createBiquadFilter(),a=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(n,e+i*.09),o.type="lowpass",o.frequency.setValueAtTime(1400,e+i*.09),o.frequency.exponentialRampToValueAtTime(420,e+i*.09+.9),a.gain.setValueAtTime(.001,e+i*.09),a.gain.linearRampToValueAtTime(.055,e+i*.09+.015),a.gain.exponentialRampToValueAtTime(1e-4,e+i*.09+1.15),r.connect(o),o.connect(a),a.connect(this.masterGain),r.start(e+i*.09),r.stop(e+i*.09+1.2)})}playTextBlip(t="thought",e=""){if(!this.unlocked||!this.ctx||!e||/[\s،.؟!…—\-:]/.test(e))return;this._blipCounter++;const n=this.ctx.currentTime,i=this.ctx.createOscillator(),r=this.ctx.createBiquadFilter(),o=this.ctx.createGain(),a=t==="night"?[220,247,262,294,262]:[262,277,311,330,294,277];i.type="triangle";const c=a[this._blipCounter%a.length],l=(Math.random()-.5)*14;i.frequency.setValueAtTime(c+l,n),i.frequency.exponentialRampToValueAtTime((c+l)*.89,n+.042),r.type="bandpass",r.frequency.value=t==="night"?760:920,r.Q.value=1.1,o.gain.setValueAtTime(.001,n),o.gain.linearRampToValueAtTime(.068,n+.004),o.gain.exponentialRampToValueAtTime(8e-4,n+.046),i.connect(r),r.connect(o),o.connect(this.masterGain),i.start(n),i.stop(n+.052)}playStageTransition(t=1){if(!this.unlocked||!this.ctx)return;const e=this.ctx.currentTime,n={1:[146.8,220,293.7],2:[130.8,196,277.2],3:[123.5,185,246.9,293.7],4:[110,164.8,220,261.6]};(n[t]||n[1]).forEach((r,o)=>{const a=this.ctx.createOscillator(),c=this.ctx.createBiquadFilter(),l=this.ctx.createGain();a.type=o===0?"sawtooth":"triangle",a.frequency.setValueAtTime(r,e),c.type="lowpass",c.frequency.setValueAtTime(o===0?280:680,e),l.gain.setValueAtTime(1e-4,e),l.gain.linearRampToValueAtTime(.048/(o*.35+1),e+.55),l.gain.exponentialRampToValueAtTime(1e-4,e+3.1),a.connect(c),c.connect(l),l.connect(this.masterGain),a.start(e),a.stop(e+3.2)})}}function ze(s,t,e){const n=Math.max(0,Math.min(1,(e-s)/(t-s)));return n*n*(3-2*n)}const Qs={1:{size:420,segments:112},2:{size:420,segments:120},3:{size:480,segments:128},4:{size:420,segments:112}},Jn=0,Fn=-68,Qc=0;function Fe(s){return Math.sin(s*.015)*16}function Ri(s){const t=Math.exp(-((s-42)*(s-42))/620)*9.5,e=Math.exp(-((s+14)*(s+14))/780)*11.5,n=Math.exp(-((s+64)*(s+64))/560)*8.5;return 18+t+e+n}function ei(s){return Math.sin((s+18)*.018)*14}function Ca(s){const t=Math.exp(-((s-20)*(s-20))/420)*7.5,e=Math.exp(-((s+96)*(s+96))/420)*11,n=Math.exp(-((s-106)*(s-106))/380)*7;return 11.5+t+e+n}function Ra(s,t){const e=Math.sin(s*.019+t*.014+Math.sin(t*.009)*1.45),n=Math.pow(1-Math.abs(e),1.18)*11.5,i=Math.sin(s*.0085-t*.0075)*5.8+Math.cos(s*.012+t*.011)*4.2,r=Math.cos(s*.028+t*.021)*1.6;return 6.5+n+i+r}function rs(s,t){const e=Math.sin(s*.06+t*.05)*6.5+Math.cos(s*.04-t*.07)*5.2,n=(s-4)/38,i=(t+8)/50,r=Math.hypot(n,i)+e*.012;return 1-ze(.68,1.04,r)}function tl(s,t){const e=Fe(t),n=Ri(t);return Math.abs(s-e)>n*.85?1:.72+.28*(Math.sin(s*.075+t*.06)*.5+.5)}function Vm(s,t,e){const n=ze(26,48,e),i=.88+.12*Math.sin(s*.09-t*.08);return Math.max(0,Math.min(1,n*i))}function Qn(s,t,e){if(s===1){const y=rs(t,e),v=Math.sin(t*.022+e*.016+Math.sin(e*.012)*1.4),A=Math.pow(1-Math.abs(v),1.18)*5.2,w=Math.sin(t*.041-e*.031+1.4),T=(1-Math.abs(w))*1.9,R=Math.sin(t*.011-e*.009)*4.2+Math.cos(t*.008+e*.013)*3.5,S=Math.sin(t*.12+e*.11)*.07,M=Math.hypot(t*.85,e*.72),P=ze(95,195,M)*9*(.55+.45*Math.sin(t*.017+e*.014)),F=R*.42+A+T+S+P-1.5,B=Math.exp(-(t*t/360+(e-114)*(e-114)/360)),V=Math.exp(-((t+14)*(t+14)/260+(e-72)*(e-72)/260)),q=Math.exp(-((t-4)*(t-4)/420+(e+112)*(e+112)/420)),G=F*(1-B*.5)*(1-V*.72)*(1-q*.6),W=-1.65+Math.sin(t*.14)*Math.cos(e*.13)*.03;return G*(1-y)+W*y}if(s===2){const y=Fe(e),v=Ri(e),A=Math.abs(t-y),w=ze(130,-135,e)*4.6,T=Math.sin(t*.065+e*.05)*.28+Math.cos(t*.12-e*.09)*.12+w,R=ze(v*.96,v+26,A),S=R*(28+8.5*Math.sin(e*.036+t*.022)),M=Math.sin(S*.72)*1.1*R,P=(Math.sin(t*.045+e*.036)*3.2+Math.cos(t*.028-e*.051)*2.6)*R,F=Math.exp(-(A*A/28))*Math.exp(-((e+14)*(e+14))/950)*-.55;return T+F+S+M+P}if(s===3){const y=ei(e),v=Ca(e),A=Math.abs(t-y),w=Ra(t,e),R=36+ze(125,-92,e)*56+Math.sin(e*.055)*1,S=1-ze(-98,-138,e),M=1-ze(118,165,e),P=1-ze(v*.72,v+62,A),F=(Math.sin(e*.058+t*.038)*.12+Math.cos(e*.03-t*.045)*.09)*ze(v*.9,v+24,A),B=Math.max(0,Math.min(1,(P+F)*S*M)),V=w+(R-w)*Math.pow(B,1.25),q=(Math.sin(t*.13+e*.11)*.18+Math.cos(t*.08-e*.15)*.14)*B,G=1-ze(4.5,v*.92,A),W=R+Math.sin(t*.1+e*.08)*.11;if(e>-100&&e<118&&G>.01){const O=G*(1-ze(-94,-101,e));return V*(1-O)+W*O}return V+q}const n=t-Jn,i=e-Fn,r=Math.sin(t*.08+e*.06)*2.5+Math.cos(t*.05-e*.08)*2,o=Math.hypot(n*.92,(i-1.5)*1.08)+r,a=Math.sin(t*.023+e*.017+Math.sin(e*.011)*1.4),c=Math.pow(1-Math.abs(a),1.16)*4.8,l=Math.sin(t*.044-e*.031+1.5),h=(1-Math.abs(l))*1.7,d=Math.sin(t*.011-e*.008)*3.6+Math.cos(t*.009+e*.014)*3,u=Math.exp(-((t+4)*(t+4)/460+(e-122)*(e-122)/420))*5.4,p=e>Fn+12&&e<114?Math.exp(-(t*t/420))*.5:0;let g=(d*.42+c+h-2)*(1-p)+u;const _=ze(13.5,30,o);g*=_;const m=Math.max(Math.abs(n)-9.8,Math.abs(i)-8.6),f=1-ze(0,2.8,m);return(Qc+g)*(1-f)+-.14*f}function mc(s){const t=Qs[s]||Qs[1],e=t.size,n=t.segments,i=e*.5,r=e/n;return function(a,c){if(a<=-i||a>=i||c<=-i||c>=i)return Qn(s,a,c);const l=(a+i)/e*n,h=(c+i)/e*n,d=Math.min(n-1,Math.max(0,Math.floor(l))),u=Math.min(n-1,Math.max(0,Math.floor(h))),p=l-d,g=h-u,_=-i+d*r,m=-i+u*r,f=_+r,x=m+r,y=Qn(s,_,m),v=Qn(s,f,m),A=Qn(s,_,x),w=Qn(s,f,x);return p+g<=1?y+p*(v-y)+g*(A-y):w+(1-p)*(A-w)+(1-g)*(v-w)}}function gc(s){return function(e,n,i={x:0,y:1,z:0}){const o=s(e-.5,n),a=s(e+.5,n),c=s(e,n-.5),l=s(e,n+.5),h=o-a,d=2*.5,u=c-l,p=Math.hypot(h,d,u)||1;return i.x=h/p,i.y=d/p,i.z=u/p,i}}function Wm(s,t){return s===1?(e,n)=>rs(e,n)>.45?"sabkha":"sand":s===2?(e,n)=>tl(e,n)>.35?"rock":"sand":s===3?(e,n)=>t(e,n)>34?"rock":"sand":()=>"sand"}function as(s,t){const e=Math.max(0,Math.min(1,t)),n=1.16+(.52-1.16)*e,i=e<.38?1+Math.pow((.38-e)/.38,1.5)*.46:1,r=1+.055*Math.sin(e*22)+.03*Math.cos(e*37),o=1+.14*Math.sin(s*3+.7)+.09*Math.cos(s*5-.4),a=e>.96?o:o*i*r;return n*a}class Xm{constructor(t,e=null){this.getTerrainHeight=t,this.getTerrainSurface=e||(()=>"sand"),this.aabbs=[],this.obbs=[],this.cylinders=[],this.ellipses=[],this.mesas=[],this.floorZones=[],this.interiorZones=[],this.bounds={type:"circle",radius:176},this.maxSlope=.94}clear(){this.aabbs.length=0,this.obbs.length=0,this.cylinders.length=0,this.ellipses.length=0,this.mesas.length=0,this.floorZones.length=0,this.interiorZones.length=0}configureStage({heightSampler:t,surfaceSampler:e,bounds:n,maxSlope:i=.94}){this.clear(),t&&(this.getTerrainHeight=t),this.getTerrainSurface=e||(()=>"sand"),this.bounds=n||{type:"circle",radius:176},this.maxSlope=i}addBoxCollider(t,e,n,i,r=-20,o=120,a=null){const c=a!==null?a:o<=2.2;this.aabbs.push({minX:t,maxX:e,minZ:n,maxZ:i,minY:r,maxY:o,climbable:c})}addOBBCollider(t,e,n,i,r=0,o=-20,a=120,c=!1){this.obbs.push({x:t,z:e,hx:n,hz:i,cos:Math.cos(r),sin:Math.sin(r),minY:o,maxY:a,climbable:c})}addCylinderCollider(t,e,n,i=120,r=!1){this.cylinders.push({x:t,z:e,r:Math.max(.2,n*.96),maxY:i,climbable:r})}addEllipseCollider(t,e,n,i,r=0,o=1.5,a=!0){this.ellipses.push({x:t,z:e,rx:Math.max(.26,n*.98),rz:Math.max(.26,i*.98),cos:Math.cos(r),sin:Math.sin(r),topY:o,climbable:a})}addMesaCollider(t,e,n,i,r=0,o=0,a=25){this.mesas.push({x:t,z:e,sx:n,sz:i,cos:Math.cos(r),sin:Math.sin(r),baseY:o,meshBottomY:o-4.5,height:a,broadR:Math.max(n,i)*1.62})}addFloorZone(t,e,n,i,r,o="stone"){this.floorZones.push({minX:t,maxX:e,minZ:n,maxZ:i,y:r,surface:o})}addInteriorZone(t,e,n,i,r=-5,o=12){this.interiorZones.push({minX:t,maxX:e,minZ:n,maxZ:i,minY:r,maxY:o})}_getMesaBlockingRadiusU(t,e,n){const i=Math.max(0,Math.min(.95,(n-t.meshBottomY)/t.height)),r=Math.max(0,Math.min(.95,(n+1.5-t.meshBottomY)/t.height)),o=as(e,i),a=as(e,(i+r)*.5),c=as(e,r);return Math.max(o,a,c)+.035}getGroundInfo(t,e,n=0){let i=this.getTerrainHeight(t,e),r=this.getTerrainSurface(t,e);const o=n+.56;for(let a=0;a<this.floorZones.length;a++){const c=this.floorZones[a];t>=c.minX&&t<=c.maxX&&e>=c.minZ&&e<=c.maxZ&&c.y>=i-.25&&(i=Math.max(i,c.y),r=c.surface)}for(let a=0;a<this.ellipses.length;a++){const c=this.ellipses[a];if(!c.climbable)continue;const l=t-c.x,h=e-c.z,d=Math.max(c.rx,c.rz)+.26;if(l*l+h*h>d*d)continue;const u=l*c.cos-h*c.sin,p=l*c.sin+h*c.cos,g=u/(c.rx+.12),_=p/(c.rz+.12),m=g*g+_*_;if(m<=1){const f=i+(c.topY-i)*Math.sqrt(Math.max(0,1-m*.55));f<=o&&f>i&&(i=f,r="rock")}}for(let a=0;a<this.obbs.length;a++){const c=this.obbs[a];if(!c.climbable)continue;const l=t-c.x,h=e-c.z,d=l*c.cos-h*c.sin,u=l*c.sin+h*c.cos;Math.abs(d)<=c.hx+.14&&Math.abs(u)<=c.hz+.14&&c.maxY<=o&&c.maxY>i&&(i=c.maxY,r="stone")}for(let a=0;a<this.aabbs.length;a++){const c=this.aabbs[a];c.climbable&&t>=c.minX-.14&&t<=c.maxX+.14&&e>=c.minZ-.14&&e<=c.maxZ+.14&&c.maxY<=o&&c.maxY>i&&(i=c.maxY,r="stone")}return{groundY:i,surface:r}}isInsideBuilding(t){for(let e=0;e<this.interiorZones.length;e++){const n=this.interiorZones[e];if(t.x>=n.minX&&t.x<=n.maxX&&t.z>=n.minZ&&t.z<=n.maxZ&&t.y>=n.minY&&t.y<=n.maxY)return!0}return!1}resolveHorizontal(t,e=.36){const n=t.y+.48;let i=!1;for(let l=0;l<3;l++){const h=this.bounds;if(h.type==="box")t.x<h.minX?(t.x=h.minX,i=!0):t.x>h.maxX&&(t.x=h.maxX,i=!0),t.z<h.minZ?(t.z=h.minZ,i=!0):t.z>h.maxZ&&(t.z=h.maxZ,i=!0);else if(h.type==="corridor"){t.z<h.minZ?(t.z=h.minZ,i=!0):t.z>h.maxZ&&(t.z=h.maxZ,i=!0);const d=h.centerXFn(t.z),u=h.halfWidthFn(t.z);t.x<d-u?(t.x=d-u,i=!0):t.x>d+u&&(t.x=d+u,i=!0)}else{const d=Math.hypot(t.x,t.z),u=h.radius||176;if(d>u){const p=u/d;t.x*=p,t.z*=p,i=!0}}for(let d=0;d<this.aabbs.length;d++){const u=this.aabbs[d],p=u.climbable?n:t.y+.18;if(u.maxY<=p||t.y+1.68<u.minY)continue;const g=Math.max(u.minX,Math.min(t.x,u.maxX)),_=Math.max(u.minZ,Math.min(t.z,u.maxZ)),m=t.x-g,f=t.z-_,x=m*m+f*f;if(x<e*e)if(x>1e-6){const y=Math.sqrt(x),v=e-y;t.x+=m/y*v,t.z+=f/y*v}else{const y=Math.abs(t.x-u.minX),v=Math.abs(u.maxX-t.x),A=Math.abs(t.z-u.minZ),w=Math.abs(u.maxZ-t.z),T=Math.min(y,v,A,w);T===y?t.x=u.minX-e:T===v?t.x=u.maxX+e:T===A?t.z=u.minZ-e:t.z=u.maxZ+e}}for(let d=0;d<this.obbs.length;d++){const u=this.obbs[d];if(u.climbable&&u.maxY<=n||t.y+1.68<u.minY)continue;const p=t.x-u.x,g=t.z-u.z,_=p*u.cos-g*u.sin,m=p*u.sin+g*u.cos,f=Math.max(-u.hx,Math.min(_,u.hx)),x=Math.max(-u.hz,Math.min(m,u.hz)),y=_-f,v=m-x,A=y*y+v*v;if(A<e*e){let w=_,T=m;if(A>1e-6){const R=Math.sqrt(A),S=e-R;w+=y/R*S,T+=v/R*S}else{const R=Math.abs(_+u.hx),S=Math.abs(u.hx-_),M=Math.abs(m+u.hz),P=Math.abs(u.hz-m),F=Math.min(R,S,M,P);F===R?w=-u.hx-e:F===S?w=u.hx+e:F===M?T=-u.hz-e:T=u.hz+e}t.x=u.x+(w*u.cos+T*u.sin),t.z=u.z+(-w*u.sin+T*u.cos)}}for(let d=0;d<this.cylinders.length;d++){const u=this.cylinders[d];if(u.climbable&&u.maxY<=n||u.maxY<=t.y+.15)continue;const p=t.x-u.x,g=t.z-u.z,_=e+u.r,m=p*p+g*g;if(m<_*_&&m>1e-6){const f=Math.sqrt(m),x=_-f;t.x+=p/f*x,t.z+=g/f*x}}for(let d=0;d<this.ellipses.length;d++){const u=this.ellipses[d];if(u.climbable&&u.topY<=n)continue;const p=t.x-u.x,g=t.z-u.z,_=Math.max(u.rx,u.rz)+e;if(p*p+g*g>_*_)continue;const m=p*u.cos-g*u.sin,f=p*u.sin+g*u.cos,x=u.rx+e,y=u.rz+e,v=m/x,A=f/y,w=v*v+A*A;if(w<1&&w>1e-8){const T=1/Math.sqrt(w),R=m*T,S=f*T;t.x=u.x+(R*u.cos+S*u.sin),t.z=u.z+(-R*u.sin+S*u.cos)}}for(let d=0;d<this.mesas.length;d++){const u=this.mesas[d],p=t.x-u.x,g=t.z-u.z,_=u.broadR+e;if(p*p+g*g>_*_)continue;const m=p*u.cos-g*u.sin,f=p*u.sin+g*u.cos,x=m/u.sx,y=f/u.sz,v=Math.hypot(x,y),A=Math.atan2(y,x),w=this._getMesaBlockingRadiusU(u,A,t.y),T=e/Math.min(u.sx,u.sz),R=w+T;if(v<R){const S=v>1e-6?x/v:1,M=v>1e-6?y/v:0,P=S*R*u.sx,F=M*R*u.sz;t.x=u.x+(P*u.cos+F*u.sin),t.z=u.z+(-P*u.sin+F*u.cos)}}}const r=.45,o=(this.getTerrainHeight(t.x+r,t.z)-this.getTerrainHeight(t.x-r,t.z))/(2*r),a=(this.getTerrainHeight(t.x,t.z+r)-this.getTerrainHeight(t.x,t.z-r))/(2*r),c=Math.hypot(o,a);if(c>this.maxSlope){const l=(c-this.maxSlope)*.38;t.x-=o/c*l,t.z-=a/c*l}return i}}const Se={1:{id:1,key:"noon",name:"الفصل ١ • سهول السراب",timeLabel:"١٢:٣٠ ظهراً",sunIcon:"☀",sunElevDeg:52,sunAzimDeg:-140,skyMode:0,sunColor:new rt("#fff7e8"),sunIntensity:3,hemiSky:new rt("#96c4ec"),hemiGround:new rt("#cfb088"),hemiIntensity:1.08,bounceColor:new rt("#ecd3aa"),bounceIntensity:.44,horizonColor:new rt("#e2d4bc"),fogDensity:.0018,exposure:.96,interiorExposure:1.15,dustColor:new rt("#eee0c4"),dustOpacity:.18,stormBase:0,heatHaze:.34,sandTint:new rt("#f2e6cf"),rockTint:new rt("#cfb798")},2:{id:2,key:"asr",name:"الفصل ٢ • وادي الصخور والواحة",timeLabel:"٣:٥٥ عصراً",sunIcon:"☀",sunElevDeg:26,sunAzimDeg:-112,skyMode:1,sunColor:new rt("#ffd096"),sunIntensity:2.8,hemiSky:new rt("#c8b096"),hemiGround:new rt("#a47e58"),hemiIntensity:1.06,bounceColor:new rt("#dfb07c"),bounceIntensity:.42,horizonColor:new rt("#d8b084"),fogDensity:.0024,exposure:1.02,interiorExposure:1.18,dustColor:new rt("#e2bc8e"),dustOpacity:.24,stormBase:.16,heatHaze:.18,sandTint:new rt("#ebd2b0"),rockTint:new rt("#c9a47e")},3:{id:3,key:"sunset",name:"الفصل ٣ • قمة جبل السراب",timeLabel:"٦:٠٨ مغرباً",sunIcon:"◐",sunElevDeg:6.2,sunAzimDeg:-165,skyMode:2,sunColor:new rt("#ffad72"),sunIntensity:2.35,hemiSky:new rt("#9e88ac"),hemiGround:new rt("#7f6556"),hemiIntensity:1.08,bounceColor:new rt("#d69c78"),bounceIntensity:.38,horizonColor:new rt("#cfa084"),fogDensity:.0014,exposure:1.04,interiorExposure:1.18,dustColor:new rt("#dfb092"),dustOpacity:.14,stormBase:0,heatHaze:.08,sandTint:new rt("#e5cbb4"),rockTint:new rt("#bfa18c")},4:{id:4,key:"night",name:"الفصل ٤ • البيت المهجور تحت النجوم",timeLabel:"١٠:٤٠ ليلاً",sunIcon:"☽",sunElevDeg:36,sunAzimDeg:-150,skyMode:3,sunColor:new rt("#a4caf5"),sunIntensity:1.38,hemiSky:new rt("#4668a6"),hemiGround:new rt("#2c354c"),hemiIntensity:1.18,bounceColor:new rt("#5678b2"),bounceIntensity:.42,horizonColor:new rt("#1a2742"),fogDensity:.0024,exposure:1.12,interiorExposure:1.22,dustColor:new rt("#8ea8cc"),dustOpacity:.11,stormBase:0,heatHaze:0,sandTint:new rt("#bccde4"),rockTint:new rt("#9cb0cb")}},tr={sandTintNoon:new rt("#f2e6cf"),sandTintAsr:new rt("#ebd2b0"),mesaBase:new rt("#c9ab87"),mesaStrataDark:new rt("#977858"),adobeWall:new rt("#d4c2a5"),ceilingPlaster:new rt("#dbd0bc"),weatheredWood:new rt("#8d7052"),horizonNoon:new rt("#e2d4bc"),horizonAsr:new rt("#d8b084"),horizonSunset:new rt("#cfa084"),horizonNight:new rt("#1a2742"),horizonStorm:new rt("#cfa372")},Pi={uSkyMode:{value:0},uStorm:{value:0},uHorizonColor:{value:tr.horizonNoon.clone()},uShadowFadeCenter:{value:new L(0,0,0)}};function Un(s,t={}){const e=t.saturation??.93,n=t.contrast??1.02,i=t.aerialStrength??0,r=t.aerialStart??65,o=t.aerialEnd??290,a=s.onBeforeCompile;return s.onBeforeCompile=(c,l)=>{a&&a(c,l),c.uniforms.uGradeHorizon=Pi.uHorizonColor,c.uniforms.uGradeStorm=Pi.uStorm,i>.001&&(c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
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
          float _apMix = clamp(_apF * (${i.toFixed(3)} + uGradeStorm * 0.25), 0.0, 0.82);
          float _apLuma = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
          vec3 _apDesat = mix(gl_FragColor.rgb, vec3(_apLuma), _apF * 0.28);
          gl_FragColor.rgb = mix(_apDesat, uGradeHorizon, _apMix);
        `:"";c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
${h}`).replace("#include <tonemapping_fragment>",`
        {
          float _luma = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
          gl_FragColor.rgb = mix(vec3(_luma), gl_FragColor.rgb, ${e.toFixed(3)});
          gl_FragColor.rgb = (gl_FragColor.rgb - 0.5) * ${n.toFixed(3)} + 0.5;
          gl_FragColor.rgb = max(gl_FragColor.rgb, vec3(0.0));
          ${d}
        }
        #include <tonemapping_fragment>
        `)},s.customProgramCacheKey=()=>`desert_grade_v6_${e}_${n}_${i}_${s.name||""}`,s}const Or=`
  varying vec3 vWorldDir;
  void main() {
    vWorldDir = position;
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
  }
`,el=`
  uniform vec3 uSunDir;
  uniform float uSkyMode; // 0=Noon, 1=Afternoon, 2=Sunset/Dusk, 3=Night
  uniform float uTime;
  uniform float uStorm;
  uniform float uCloudOctaves;
  uniform vec3 uHorizonColor;

  float hash21(vec2 p) {
    p = fract(p * vec2(127.1, 311.7));
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
    return mix(
      mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x),
      mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p, int octaves) {
    float val = 0.0;
    float amp = 0.5;
    mat2 rot = mat2(0.80, 0.60, -0.60, 0.80);
    for (int i = 0; i < 5; i++) {
      if (i >= octaves) break;
      val += amp * vnoise(p);
      p = rot * p * 2.04 + vec2(1.7, 9.2);
      amp *= 0.5;
    }
    return val;
  }

  float hgPhase(float cosTheta, float g) {
    float g2 = g * g;
    float denom = max(0.001, 1.0 + g2 - 2.0 * g * cosTheta);
    return (1.0 - g2) / (4.0 * 3.14159265 * pow(denom, 1.5));
  }

  // Ultra-fine realistic pinpoint stars (sub-pixel sharp cores, natural color temperatures!)
  vec3 evalPinpointStars(vec3 dir, float scale, float densityThresh, float power, float timeVal) {
    vec3 p = dir * scale;
    vec3 cell = floor(p);
    vec3 f = fract(p) - 0.5;
    vec3 rnd = hash33(cell);
    if (rnd.x < densityThresh) return vec3(0.0);
    vec3 jitter = (rnd - 0.5) * 0.62;
    float d = length(f - jitter);
    // Razor-sharp tiny pinpoint instead of blurry giant blobs
    float star = exp(-d * d * 190.0);
    float mag = pow(fract(rnd.x * 37.0), 2.4);
    float twinkle = 0.80 + 0.20 * sin(timeVal * (1.6 + rnd.y * 3.2) + rnd.z * 62.8);
    vec3 col = mix(vec3(1.0, 0.88, 0.72), vec3(0.76, 0.88, 1.0), rnd.y);
    return col * star * (0.25 + 0.75 * mag) * power * twinkle;
  }

  // Realistic delicate Milky Way stardust band with dark dust rift (NOT blotchy big fog!)
  vec3 evalMilkyWay(vec3 dir, float nightWeight) {
    if (nightWeight < 0.01 || dir.y < 0.0) return vec3(0.0);
    vec3 galNormal = normalize(vec3(0.74, -0.56, -0.37));
    vec3 galRight  = normalize(cross(vec3(0.0, 1.0, 0.0), galNormal));
    vec3 galUp     = normalize(cross(galNormal, galRight));

    float lat = dot(dir, galNormal);
    float lon = atan(dot(dir, galUp), dot(dir, galRight));

    // Wide delicate outer glow + tighter luminous stardust spine
    float outerBand = exp(-lat * lat * 18.0);
    float innerSpine = exp(-lat * lat * 55.0);

    vec2 gUV = vec2(lon * 3.8, lat * 11.0);
    float fineDust = fbm(gUV * 2.1 + vec2(2.3, 1.1), 4);
    float riftNoise = fbm(gUV * 1.4 - vec2(5.1, 2.7), 3);
    // Dark central Great Rift dust lane
    float darkRift = exp(-lat * lat * 140.0) * smoothstep(0.32, 0.72, riftNoise);

    // Fine unresolved star-cloud shimmer
    float microSpec = vnoise(gUV * 12.0) * 0.5 + 0.5;
    float cloud = outerBand * smoothstep(0.30, 0.82, fineDust) * (0.65 + 0.35 * microSpec);
    float core = innerSpine * smoothstep(0.36, 0.86, fineDust) * (1.0 - darkRift * 0.78);

    vec3 dustBlue = vec3(0.075, 0.125, 0.24);
    vec3 starWarm = vec3(0.26, 0.25, 0.33);
    vec3 mw = dustBlue * cloud * 0.55 + starWarm * core * 0.72;

    float horizonFade = smoothstep(0.03, 0.32, dir.y);
    return mw * horizonFade * nightWeight;
  }

  // Crisp natural Crescent Moon with subtle lunar maria shading & soft atmospheric corona
  vec3 evalCrescentMoon(vec3 dir, vec3 moonDir, float nightWeight) {
    if (nightWeight < 0.01) return vec3(0.0);
    vec3 mDir = normalize(moonDir);
    vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), mDir));
    vec3 up = normalize(cross(mDir, right));
    float cosA = dot(dir, mDir);

    // Delicate atmospheric lunar corona & wide silver sky scatter
    float halo = pow(max(0.0, cosA), 14.0) * 0.07 + pow(max(0.0, cosA), 180.0) * 0.24;
    vec3 res = vec3(0.42, 0.58, 0.88) * halo;

    if (cosA > 0.995) {
      vec3 delta = dir - mDir * cosA;
      vec2 mp = vec2(dot(delta, right), dot(delta, up));
      float moonR = 0.022;
      float dMain = length(mp);
      float outerDisc = smoothstep(moonR + 0.0011, moonR - 0.0011, dMain);

      vec2 shadowOffset = vec2(0.0112, 0.0076);
      float dShadow = length(mp - shadowOffset);
      float shadowCut = smoothstep(moonR * 0.91 - 0.0011, moonR * 0.91 + 0.0011, dShadow);

      float crescent = outerDisc * shadowCut;
      // Subtle lunar maria texture on the lit crescent
      float maria = 0.86 + 0.14 * vnoise(mp * 140.0 + vec2(3.1, 1.7));
      float earthshine = outerDisc * (1.0 - shadowCut) * 0.055;
      vec3 moonCol = vec3(1.52, 1.48, 1.38) * crescent * maria + vec3(0.24, 0.34, 0.52) * earthshine;
      res += moonCol * smoothstep(-0.02, 0.05, dir.y);
    }

    return res * nightWeight;
  }

  vec3 evalProceduralSky(vec3 dir, bool includeCelestial) {
    vec3 sunDir = normalize(uSunDir);
    float y = dir.y;
    float sunCos = dot(dir, sunDir);

    float m = clamp(uSkyMode, 0.0, 3.0);
    float wNoon   = max(0.0, 1.0 - m);
    float wAsr    = max(0.0, 1.0 - abs(m - 1.0));
    float wSunset = max(0.0, 1.0 - abs(m - 2.0));
    float wNight  = max(0.0, m - 2.0);
    float dayWeight = 1.0 - wNight;

    // Physically balanced natural sky dome gradients (realistic muted Arabian desert tones!)
    vec3 zenithCol =
      vec3(0.048, 0.185, 0.48) * wNoon +
      vec3(0.068, 0.138, 0.31) * wAsr +
      vec3(0.036, 0.048, 0.145) * wSunset +
      vec3(0.009, 0.016, 0.044) * wNight;

    vec3 midCol =
      vec3(0.22, 0.42, 0.68) * wNoon +
      vec3(0.30, 0.29, 0.36) * wAsr +
      vec3(0.24, 0.155, 0.23) * wSunset +
      vec3(0.018, 0.032, 0.072) * wNight;

    vec3 beltCol =
      vec3(0.68, 0.63, 0.53) * wNoon +
      vec3(0.74, 0.47, 0.26) * wAsr +
      vec3(0.84, 0.40, 0.20) * wSunset +
      vec3(0.034, 0.056, 0.108) * wNight;

    // Smooth optical airmass curve (eliminates banding!)
    float airmass = pow(max(0.0, y), 0.52);
    vec3 skyCol = mix(beltCol, midCol, smoothstep(0.0, 0.44, airmass));
    skyCol = mix(skyCol, zenithCol, smoothstep(0.28, 0.94, airmass));

    // Natural Rayleigh/Mie solar glow
    if (dayWeight > 0.01) {
      float azimGlow = pow(max(0.0, sunCos), mix(3.4, 2.4, wSunset)) * smoothstep(0.62, -0.04, y);
      vec3 glowTint =
        vec3(0.95, 0.80, 0.55) * wNoon +
        vec3(1.02, 0.56, 0.24) * wAsr +
        vec3(1.14, 0.46, 0.18) * wSunset;
      float glowStr = 0.10 * wNoon + 0.44 * wAsr + 0.72 * wSunset;
      skyCol += glowTint * azimGlow * glowStr * (1.0 - uStorm * 0.65) * dayWeight;

      float mieTight = hgPhase(sunCos, 0.86);
      float mieWide  = hgPhase(sunCos, 0.44);
      vec3 sunCol =
        vec3(1.0, 0.94, 0.82) * wNoon +
        vec3(1.05, 0.64, 0.30) * wAsr +
        vec3(1.16, 0.48, 0.18) * wSunset;
      float mieScale = (1.0 - uStorm * 0.75) * smoothstep(-0.05, 0.04, y) * dayWeight;
      skyCol += sunCol * (mieTight * 0.16 + mieWide * 0.28) * mieScale;

      if (includeCelestial) {
        float sunRadius = mix(0.99966, 0.99932, wSunset);
        float disc = smoothstep(sunRadius - 0.00018, sunRadius + 0.00012, sunCos);
        float limb = pow(clamp((sunCos - sunRadius) / (1.0 - sunRadius + 0.0001), 0.0, 1.0), 0.45);
        vec3 discCol = mix(vec3(1.0, 0.97, 0.88), vec3(1.22, 0.62, 0.26), clamp(wAsr * 0.45 + wSunset, 0.0, 1.0)) * (2.5 + limb * 3.0);
        float sunVis = (1.0 - smoothstep(0.18, 0.85, uStorm)) * smoothstep(-0.015, 0.015, y) * dayWeight;
        skyCol += discCol * disc * sunVis;
      }
    }

    // Photorealistic Multi-Layer Backlit Desert Clouds (Cumulus puffs + wispy Cirrus!)
    int oct = int(uCloudOctaves + 0.5);
    if (y > 0.025 && oct >= 1 && wNight < 0.92) {
      // Curvature-corrected sky dome projection
      vec2 cloudUV = dir.xz / (y + 0.16);
      vec2 drift = vec2(uTime * 0.0038, uTime * 0.0014);

      // High wispy cirrus layer
      vec2 warp = vec2(vnoise(cloudUV * 0.48 + drift), vnoise(cloudUV * 0.48 + vec2(3.7, 6.2) - drift * 0.6));
      float cirrus = fbm(cloudUV * vec2(0.45, 0.95) + warp * 0.65 + drift, oct);
      float cirrusMask = smoothstep(0.56, 0.84, cirrus) * 0.36;

      // Soft scattered desert cumulus clouds with sunlit directional self-shadowing!
      vec2 cumUV = cloudUV * 0.58 - drift * 1.15 + warp * 0.32;
      float cumBase = fbm(cumUV, oct);
      float cumDensity = smoothstep(0.54, 0.80, cumBase);

      // Sample cloud slightly toward sun direction for authentic 3D cloud thickness & sunlit rim!
      vec2 sunStep = sunDir.xz * 0.075;
      float cumTowardsSun = fbm(cumUV + sunStep, max(2, oct - 1));
      float lightTrans = clamp(1.0 - (cumTowardsSun - cumBase) * 3.8, 0.18, 1.0);

      float horizonFade = smoothstep(0.035, 0.24, y) * smoothstep(2.6, 0.45, length(cloudUV) * 0.35);
      float totalCloud = clamp((cirrusMask + cumDensity * 0.72) * horizonFade * (1.0 - uStorm * 0.7) * dayWeight, 0.0, 0.84);

      float silverLining = pow(max(0.0, sunCos), 7.0) * (1.0 - cumDensity * 0.45);
      vec3 litCol =
        vec3(0.96, 0.95, 0.92) * wNoon +
        vec3(1.02, 0.72, 0.44) * wAsr +
        vec3(1.12, 0.56, 0.32) * wSunset;
      vec3 shdCol =
        vec3(0.48, 0.56, 0.68) * wNoon +
        vec3(0.36, 0.30, 0.34) * wAsr +
        vec3(0.18, 0.14, 0.24) * wSunset;

      vec3 cloudCol = mix(shdCol, litCol, lightTrans * 0.78 + 0.18);
      cloudCol += litCol * silverLining * (0.24 * wNoon + 0.48 * wAsr + 0.75 * wSunset);
      skyCol = mix(skyCol, cloudCol, totalCloud);
    }

    // Night Sky: Fine Pinpoint Starfield + Delicate Milky Way + Detailed Crescent Moon
    float starVis = clamp(wNight + wSunset * 0.25 * smoothstep(0.32, 0.75, y), 0.0, 1.0);
    if (starVis > 0.01 && y > 0.005) {
      skyCol += evalMilkyWay(dir, wNight);
      if (includeCelestial) {
        float hm = smoothstep(0.02, 0.22, y);
        vec3 stars = vec3(0.0);
        stars += evalPinpointStars(dir, 88.0, 0.90, 1.65, uTime);
        stars += evalPinpointStars(dir, 165.0, 0.85, 0.95, uTime * 0.8 + 1.4);
        stars += evalPinpointStars(dir, 260.0, 0.82, 0.45, uTime * 0.5 + 2.9);
        skyCol += stars * hm * starVis;
      }
    }

    if (includeCelestial && wNight > 0.01) {
      skyCol += evalCrescentMoon(dir, sunDir, wNight);
    }

    // Seamless aerial horizon blend into FogExp2
    float horizonBlend = smoothstep(0.15 + uStorm * 0.12, -0.015, y);
    skyCol = mix(skyCol, uHorizonColor, horizonBlend);

    if (y < 0.0) {
      vec3 groundBounce = uHorizonColor * mix(vec3(0.66, 0.58, 0.48), vec3(0.45, 0.52, 0.64), wNight);
      skyCol = mix(uHorizonColor, groundBounce, smoothstep(0.0, -0.35, y));
    }

    return skyCol;
  }
`,_c=`
  ${el}
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
  ${el}
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
`,jm=`
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

  vec3 evalStarFast(vec3 dir, float scale, float thresh, float power) {
    vec3 p = dir * scale;
    vec3 cell = floor(p);
    vec3 f = fract(p) - 0.5;
    vec3 rnd = hash33(cell);
    if (rnd.x < thresh) return vec3(0.0);
    float d = length(f - (rnd - 0.5) * 0.6);
    float star = exp(-d * d * 185.0);
    vec3 col = mix(vec3(1.0, 0.88, 0.72), vec3(0.76, 0.88, 1.0), rnd.y);
    return col * star * power;
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
      float sunRadius = mix(0.99966, 0.99932, wSunset);
      float disc = smoothstep(sunRadius - 0.00018, sunRadius + 0.00012, sunCos);
      float limb = pow(clamp((sunCos - sunRadius) / (1.0 - sunRadius + 0.0001), 0.0, 1.0), 0.45);
      vec3 discCol = mix(vec3(1.0, 0.97, 0.88), vec3(1.22, 0.62, 0.26), clamp(m * 0.5, 0.0, 1.0)) * (2.5 + limb * 3.0);
      float sunVis = (1.0 - smoothstep(0.18, 0.85, uStorm)) * smoothstep(-0.015, 0.015, dir.y) * dayWeight;
      skyCol += discCol * disc * sunVis;
    }

    if (wNight > 0.01 && dir.y > 0.005) {
      float hm = smoothstep(0.02, 0.22, dir.y);
      skyCol += evalStarFast(dir, 92.0, 0.90, 1.55) * hm * wNight;
      skyCol += evalStarFast(dir, 170.0, 0.86, 0.85) * hm * wNight;

      vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), sDir));
      vec3 up = normalize(cross(sDir, right));
      skyCol += vec3(0.42, 0.58, 0.88) * (pow(max(0.0, sunCos), 14.0) * 0.07 + pow(max(0.0, sunCos), 180.0) * 0.24) * wNight;
      if (sunCos > 0.995) {
        vec3 delta = dir - sDir * sunCos;
        vec2 mp = vec2(dot(delta, right), dot(delta, up));
        float moonR = 0.022;
        float outerDisc = smoothstep(moonR + 0.0011, moonR - 0.0011, length(mp));
        float shadowCut = smoothstep(moonR * 0.91 - 0.0011, moonR * 0.91 + 0.0011, length(mp - vec2(0.0112, 0.0076)));
        skyCol += vec3(1.52, 1.48, 1.38) * (outerDisc * shadowCut) * wNight;
      }
    }

    gl_FragColor = vec4(skyCol, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;class Zm{constructor(t,e){this.scene=t,this.renderer=e,this.useCache=!1,this.useIBL=!0,this.uniforms={uSunDir:{value:new L(.2,.9,-.35).normalize()},uSkyMode:{value:0},uTime:{value:0},uStorm:{value:0},uCloudOctaves:{value:5},uHorizonColor:{value:tr.horizonNoon.clone()}};const n=new ii(980,28,18);this._realtimeMat=new Ge({side:we,depthWrite:!1,fog:!1,uniforms:this.uniforms,vertexShader:Or,fragmentShader:_c}),this._skyCacheRT=new On(512,256,{minFilter:Ke,magFilter:Ke,depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1}),this._skyCacheRT.texture.wrapS=dn,this._skyCacheRT.texture.wrapT=Nn,this._cacheScene=new Ea,this._cacheCam=new Ja(-1,1,1,-1,0,1),this._cacheQuad=new ft(new Ee(2,2),new Ge({depthTest:!1,depthWrite:!1,uniforms:this.uniforms,vertexShader:qm,fragmentShader:Ym})),this._cacheScene.add(this._cacheQuad),this._cachedMat=new Ge({side:we,depthWrite:!1,fog:!1,uniforms:{uSkyCache:{value:this._skyCacheRT.texture},uSunDir:this.uniforms.uSunDir,uSkyMode:this.uniforms.uSkyMode,uTime:this.uniforms.uTime,uStorm:this.uniforms.uStorm},vertexShader:Or,fragmentShader:jm}),this.mesh=new ft(n,this._realtimeMat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-10,this.scene.add(this.mesh),this._cacheTimer=999,this._pmrem=null,this._envScene=null,this._envRT=null}_ensureIBLScene(){if(this._pmrem)return;this._pmrem=new Ta(this.renderer),this._pmrem.compileCubemapShader(),this._envScene=new Ea;const t=new ft(new ii(20,14,10),new Ge({side:we,depthWrite:!1,fog:!1,uniforms:{uSunDir:this.uniforms.uSunDir,uSkyMode:this.uniforms.uSkyMode,uTime:{value:0},uStorm:this.uniforms.uStorm,uCloudOctaves:{value:2},uHorizonColor:this.uniforms.uHorizonColor},vertexShader:Or,fragmentShader:_c}));this._envScene.add(t)}setQualityOptions({cloudOctaves:t=5,useSkyCache:e=!1,useIBL:n=!0}){this.uniforms.uCloudOctaves.value=t,this.useCache=!!e,this.mesh.material=this.useCache?this._cachedMat:this._realtimeMat,this.useCache&&this.bakeSkyCache(),this.useIBL=!!n,this.useIBL?this._envRT||this.bakeIBL():(this.scene.environment=null,this._envRT&&(this._envRT.dispose(),this._envRT=null))}bakeSkyCache(){const t=this.renderer.getRenderTarget(),e=this.renderer.toneMapping;this.renderer.toneMapping=bn,this.renderer.setRenderTarget(this._skyCacheRT),this.renderer.render(this._cacheScene,this._cacheCam),this.renderer.setRenderTarget(t),this.renderer.toneMapping=e,this._cacheTimer=0}computeHorizonColor(t,e,n){const i=Se[t]||Se[1];return n.copy(i.horizonColor),e>.001&&n.lerp(tr.horizonStorm,te.clamp(e*.45,0,.55)),n}update(t,e,n,i,r,o,a){this.mesh.position.copy(n),this.uniforms.uSunDir.value.copy(i),this.uniforms.uSkyMode.value=r,this.uniforms.uTime.value=e,this.uniforms.uStorm.value=a,this.computeHorizonColor(o,a,this.uniforms.uHorizonColor.value),this.useCache&&(this._cacheTimer+=t,this._cacheTimer>=2&&this.bakeSkyCache())}bakeIBL(){if(!this.useIBL)return;this._ensureIBLScene();const t=this._envRT;this._envRT=this._pmrem.fromScene(this._envScene,.04,.1,100),this.scene.environment=this._envRT.texture,t&&t.dispose()}}class $m{constructor(t,e,n){this.scene=t,this.renderer=e,this.settings=n,this.stageId=1,this.skyMode=0,this.stormIntensity=0,this.sunDirection=new L(.2,.9,-.35).normalize(),this.glareAmount=0,this.sunVisibility=1,this.targetExposure=.96,this.currentExposure=.96,this.cutsceneGlareBoost=0,this._physics=null,this._occluderMeshes=[],this._getHeightFn=null,this._occAccum=.1,this._sunOccluded=!1,this._tmpVec=new L,this._camDir=new L,this._lastShadowFocus=new L(9999,9999,9999),this._lastShadowSun=new L,this._shadowCooldown=0,this._forceShadowUpdate=!0,this._shadowFrustumHalf=34,this.shadowUpdatesCount=0,this._lastGlareVisible=!1,this._lastGlareOp="",this._lastGlareX=-999,this._lastGlareY=-999,this._lastHazeOp="",this._iblCompensation=0,this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0,this.proceduralSky=new Zm(this.scene,this.renderer),this._createLights(),this._createFog(),this.glareEl=document.getElementById("sun-glare-layer"),this.heatHazeEl=document.getElementById("heat-haze-layer"),this.glareEl&&this.glareEl.classList.add("hidden"),this.applyStage(1,!0)}setSunOcclusionContext(t,e,n=null){this._occluderMeshes=t||[],this._getHeightFn=e||null,this._physics=n||null,this._occAccum=1}_createLights(){this.sunLight=new Ho("#fff7e8",3),this.sunLight.castShadow=!0;const t=he?1024:2048;this.sunLight.shadow.mapSize.set(t,t),this.sunLight.shadow.camera.near=2,this.sunLight.shadow.camera.far=185;const e=this._shadowFrustumHalf;this.sunLight.shadow.camera.left=-e,this.sunLight.shadow.camera.right=e,this.sunLight.shadow.camera.top=e,this.sunLight.shadow.camera.bottom=-e,this.sunLight.shadow.bias=-5e-4,this.sunLight.shadow.normalBias=.028,this.sunLight.shadow.radius=he?1.5:2.6,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target),this.hemiLight=new Yh("#96c4ec","#cfb088",1.08),this.scene.add(this.hemiLight),this.sandBounceLight=new Ho("#ecd3aa",.44),this.sandBounceLight.position.set(-25,12,30),this.scene.add(this.sandBounceLight)}_createFog(){this.fog=new Ha(Se[1].horizonColor.getHex(),.0018),this.scene.fog=this.fog}applySettings(t,e){const n=!!t.shadows&&e.shadows!==!1&&!t.batterySaver;this.sunLight.castShadow=n,this.renderer.shadowMap.enabled=n,n&&this.sunLight.shadow.mapSize.x!==e.shadowMapSize&&(this.sunLight.shadow.mapSize.set(e.shadowMapSize,e.shadowMapSize),this.sunLight.shadow.map&&(this.sunLight.shadow.map.dispose(),this.sunLight.shadow.map=null)),this.proceduralSky.setQualityOptions({cloudOctaves:e.cloudOctaves??5,useSkyCache:!!e.useSkyCache,useIBL:!!e.useIBL}),this._iblCompensation=e.useIBL?0:.16,this._applyAtmosphere(this.stageId,this.stormIntensity),this._forceShadowUpdate=!0}applyStage(t,e=!0){const n=Se[t]?t:1;this.stageId=n;const i=Se[n];this.skyMode=i.skyMode,this.stormIntensity=i.stormBase||0,this._applyAtmosphere(n,this.stormIntensity),e&&(this.currentExposure=i.exposure,this.targetExposure=i.exposure,this.renderer.toneMappingExposure=i.exposure,this.proceduralSky.uniforms.uSunDir.value.copy(this.sunDirection),this.proceduralSky.uniforms.uSkyMode.value=this.skyMode,this.proceduralSky.uniforms.uStorm.value=this.stormIntensity,this.proceduralSky.computeHorizonColor(n,this.stormIntensity,this.proceduralSky.uniforms.uHorizonColor.value),this.proceduralSky.useCache&&this.proceduralSky.bakeSkyCache(),this.proceduralSky.bakeIBL(),this._forceShadowUpdate=!0)}setStormIntensity(t,e=!1){const n=Math.max(0,Math.min(1,t)),i=Math.abs(n-this.stormIntensity)>.005;this.stormIntensity=n,(i||e)&&this._applyAtmosphere(this.stageId,this.stormIntensity),e&&(this.proceduralSky.uniforms.uStorm.value=n,this.proceduralSky.useCache&&this.proceduralSky.bakeSkyCache())}_applyAtmosphere(t,e){const n=Se[t]||Se[1];this.skyMode=n.skyMode;const i=te.degToRad(n.sunElevDeg),r=te.degToRad(n.sunAzimDeg);this.sunDirection.set(Math.cos(i)*Math.sin(r),Math.sin(i),Math.cos(i)*Math.cos(r)).normalize(),this.proceduralSky.computeHorizonColor(t,e,this.fog.color),this.fog.density=te.lerp(n.fogDensity,.011,Math.pow(e,1.3)),Pi.uSkyMode.value=this.skyMode,Pi.uStorm.value=e,Pi.uHorizonColor.value.copy(this.fog.color),this.sunLight.color.copy(n.sunColor),this.sunLight.intensity=n.sunIntensity*(1-e*.28),this.hemiLight.color.copy(n.hemiSky),this.hemiLight.groundColor.copy(n.hemiGround);const o=t===4?0:this._iblCompensation;if(this.hemiLight.intensity=n.hemiIntensity+o+e*.16,this.scene.environmentIntensity=t===4?.42:.54*(1-e*.15),this.sandBounceLight.color.copy(n.bounceColor),this.sandBounceLight.intensity=n.bounceIntensity*(1-e*.3),this.sandBounceLight.position.set(-this.sunDirection.x*55,22,-this.sunDirection.z*55),this.glareEl&&(t===3?(this.glareEl.style.setProperty("--sun-r","255"),this.glareEl.style.setProperty("--sun-g","165"),this.glareEl.style.setProperty("--sun-b","104")):t===2?(this.glareEl.style.setProperty("--sun-r","255"),this.glareEl.style.setProperty("--sun-g","210"),this.glareEl.style.setProperty("--sun-b","145")):(this.glareEl.style.setProperty("--sun-r","255"),this.glareEl.style.setProperty("--sun-g","242"),this.glareEl.style.setProperty("--sun-b","212"))),this.heatHazeEl){const a=(n.heatHaze*(1-e*.65)).toFixed(2);a!==this._lastHazeOp&&(this._lastHazeOp=a,this.heatHazeEl.style.opacity=a)}}_checkSunOccluded(t){const e=this.sunDirection.x,n=this.sunDirection.y,i=this.sunDirection.z,r=[2.5,5.5,9.5,14.5,21,29,39,52,68,88,114,146,185,235],o=this._physics?this._physics.mesas:null,a=this._physics?this._physics.aabbs:null,c=this._physics?this._physics.obbs:null;for(let l=0;l<r.length;l++){const h=r[l],d=t.x+e*h,u=t.y+n*h,p=t.z+i*h;if(this._getHeightFn&&this._getHeightFn(d,p)>u-.3)return!0;if(o)for(let g=0;g<o.length;g++){const _=o[g];if(u>_.meshBottomY+_.height||u<_.meshBottomY)continue;const m=d-_.x,f=p-_.z;if(m*m+f*f>_.broadR*_.broadR)continue;const x=(m*_.cos-f*_.sin)/_.sx,y=(m*_.sin+f*_.cos)/_.sz,v=x*x+y*y;if(v<2.2){const A=Math.max(0,Math.min(1,(u-_.meshBottomY)/_.height)),w=as(Math.atan2(y,x),A);if(v<=w*w)return!0}}if(a&&h<95)for(let g=0;g<a.length;g++){const _=a[g];if(d>=_.minX&&d<=_.maxX&&p>=_.minZ&&p<=_.maxZ&&u>=_.minY&&u<=_.maxY)return!0}if(c&&h<95)for(let g=0;g<c.length;g++){const _=c[g];if(u<_.minY||u>_.maxY)continue;const m=d-_.x,f=p-_.z,x=m*_.cos-f*_.sin,y=m*_.sin+f*_.cos;if(Math.abs(x)<=_.hx&&Math.abs(y)<=_.hz)return!0}}return!1}getAtmosphere(){return Se[this.stageId]||Se[1]}update(t,e,n,i,r){const o=this.getAtmosphere();this.proceduralSky.update(t,e,n.position,this.sunDirection,this.skyMode,this.stageId,this.stormIntensity);const a=i.x,c=i.y,l=i.z;if(Pi.uShadowFadeCenter.value.set(a,c,l),this.sunLight.castShadow&&this.renderer.shadowMap.enabled){this._shadowCooldown=Math.max(0,this._shadowCooldown-t);const m=a-this._lastShadowFocus.x,f=l-this._lastShadowFocus.z,x=m*m+f*f,y=this._lastShadowSun.distanceToSquared(this.sunDirection),v=he?4.8:1.6;(this._forceShadowUpdate||this._shadowCooldown<=0&&(x>v||y>2e-4))&&(this._forceShadowUpdate=!1,this._shadowCooldown=he?.45:.16,this._lastShadowFocus.set(a,c,l),this._lastShadowSun.copy(this.sunDirection),this.sunLight.target.position.set(a,c,l),this.sunLight.position.set(a+this.sunDirection.x*75,c+Math.max(14,this.sunDirection.y*75),l+this.sunDirection.z*75),this.renderer.shadowMap.needsUpdate=!0,this.shadowUpdatesCount++)}n.getWorldDirection(this._camDir);const h=this._camDir.dot(this.sunDirection),d=this.settings.data.sunFlare&&!this.settings.data.batterySaver&&this.stageId<4;d&&!r&&h>.44?(this._occAccum+=t,this._occAccum>=.065&&(this._occAccum=0,this._sunOccluded=this._checkSunOccluded(n.position))):this._sunOccluded=!0;const u=this._sunOccluded?0:1;this.sunVisibility+=(u-this.sunVisibility)*Math.min(1,t*12);let p=0;if(d&&!r&&h>.48&&this.sunVisibility>.02&&this.stormIntensity<.72){const m=this.stageId===3?.58:.68;p=Math.pow((h-.48)/.52,2.6)*(1-this.stormIntensity)*m*this.sunVisibility,this._tmpVec.copy(n.position).addScaledVector(this.sunDirection,400).project(n);const f=Math.round((this._tmpVec.x*.5+.5)*200)*.5,x=Math.round((-this._tmpVec.y*.5+.5)*200)*.5;this.glareEl&&(f!==this._lastGlareX||x!==this._lastGlareY)&&(this._lastGlareX=f,this._lastGlareY=x,this.glareEl.style.setProperty("--sun-x",`${f}%`),this.glareEl.style.setProperty("--sun-y",`${x}%`))}const g=Math.min(.85,p+this.cutsceneGlareBoost);if(this.glareAmount+=(g-this.glareAmount)*Math.min(1,t*9),this.glareEl){const m=this.glareAmount>.012;if(m!==this._lastGlareVisible&&(this._lastGlareVisible=m,this.glareEl.classList.toggle("hidden",!m)),m){const f=this.glareAmount.toFixed(2);f!==this._lastGlareOp&&(this._lastGlareOp=f,this.glareEl.style.opacity=f)}}const _=r?o.interiorExposure:o.exposure;this.targetExposure=_+this.cutsceneGlareBoost*.45-p*.08,this.currentExposure+=(this.targetExposure-this.currentExposure)*Math.min(1,t*3),this.renderer.toneMappingExposure=this.currentExposure}}function ln(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new me;let l=0;for(let h=0;h<s.length;++h){const d=s[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p])}if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0;const d=[];for(let u=0;u<s.length;++u){const p=s[u].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+h);h+=s[u].attributes.position.count}c.setIndex(d)}for(const h in r){const d=xc(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<d;++u){const p=[];for(let _=0;_<o[h].length;++_)p.push(o[h][_][u]);const g=xc(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function xc(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Jt(o,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const d=c/e;for(let u=0,p=h.count;u<p;u++)for(let g=0;g<e;g++){const _=h.getComponent(u,g);a.setComponent(u+d,g,_)}}else o.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}class Km{constructor(t,e,n,i,r,o=0,a=-68,c=0){this.parentGroup=t,this.tex=e,this.models=n,this.physics=i,this.getHeight=r,this.centerX=o,this.centerZ=a,this.baseY=c,this.group=new Pe,this.group.position.set(o,c,a),this.parentGroup.add(this.group),this.awningTimeUniform={value:0},this.windTurbine=null,this.windVane=null,this.lanternLights=[],this.lanternWorldPositions=[],this.beaconSprite=null,this.interactables=[],this._createMaterials(),this._buildMainEstate(),this._buildCourtyardWalls(),this._buildGrandAwning(),this._buildWindVaneTower(),this._buildInteriorSanctuary(),this._buildBackCourtyardAndWell(),this._optimizeStaticBatches()}_createMaterials(){const t=this.tex.loadPBRSet("adobe_wall",1,1);this.adobeMat=he?new ce({map:t.map,normalMap:t.normalMap,normalScale:new yt(.5,.5),vertexColors:!0,color:15128252}):new Ne({map:t.map,normalMap:t.normalMap,normalScale:new yt(.5,.5),roughness:.93,metalness:.02,vertexColors:!0,color:15128252}),this.adobeMat.name="adobe_wall_v6",this.adobeMat.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vAdobeWorldPos;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vAdobeWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vAdobeWorldPos;`).replace("#include <color_fragment>",`#include <color_fragment>
           float _al = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
           diffuseColor.rgb = mix(vec3(_al), diffuseColor.rgb, 0.62) * 1.28 + vec3(0.025, 0.02, 0.015);
           float groundDust = smoothstep(0.95, 0.02, vAdobeWorldPos.y);
           diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.32, 0.25, 0.17), groundDust * 0.34);`)},Un(this.adobeMat,{saturation:.88,contrast:1.02}),this.ceilingMat=new ce({color:tr.ceilingPlaster,vertexColors:!0});const e=this.tex.loadPBRSet("desert_wood",1.6,1);this.woodMat=he?new ce({map:e.map,color:12099456}):new Ne({map:e.map,normalMap:e.normalMap,normalScale:new yt(.85,.85),roughness:.88,metalness:.03,color:12099456});const n=this.tex.loadPBRSet("rusted_metal",1.5,1.5);this.metalMat=new Ne({map:n.map,normalMap:he?null:n.normalMap,roughness:.76,metalness:.42,color:10259576});const i=this.tex.loadPBRSet("floor_tiles",4.8,4);this.floorMat=he?new ce({map:i.map,normalMap:i.normalMap,normalScale:new yt(.82,.82),vertexColors:!0,color:12759702}):new Ne({map:i.map,normalMap:i.normalMap,normalScale:new yt(.85,.85),roughness:.9,metalness:.02,vertexColors:!0,color:12759702}),Un(this.floorMat,{saturation:.88,contrast:1.02});const r=this.tex.loadPBRSet("tattered_fabric",2.4,2);this.fabricMat=new ce({map:r.map,side:fe,color:13153432}),this.fabricMat.onBeforeCompile=a=>{a.uniforms.uTime=this.awningTimeUniform,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
           transformed.y += sin(uTime * 2.2 + position.x * 1.7 + position.z * 1.4) * 0.032;`)},this.rugMat=new ce({color:16777215}),this.rugMat.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vRugUv;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vRugUv = uv;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
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
           diffuseColor.rgb = col * weave;`)};const o=this.tex.loadPBRSet("sandstone_rock",2,2);this.stoneMat=new ce({map:o.map,color:11968644}),this.paperMat=new ce({color:15127726,side:fe}),this.scarfMat=new ce({color:10367526,side:fe}),this.lanternGlowMat=new an({color:16762990})}_addBox(t,e,n,i,r,o,a=!0,c=this.adobeMat,l=!0,h=null){const d=c===this.adobeMat?Ti(i,r,o,{bottomAO:.54,topAO:.92,cornerAO:.2,tileScale:1.45}):new le(i,r,o),u=new ft(d,c);if(u.position.set(t,e,n),u.castShadow=l,u.receiveShadow=!0,this.group.add(u),a){const p=this.centerX+t,g=this.centerZ+n;this.physics.addBoxCollider(p-i*.5,p+i*.5,g-o*.5,g+o*.5,this.baseY+e-r*.5,this.baseY+e+r*.5,h)}return u}_buildMainEstate(){const n=new le(14.8,.24,12.2,8,1,8),i=n.attributes.position,r=new Float32Array(i.count*3);for(let m=0;m<i.count;m++){const f=i.getX(m),x=i.getZ(m),y=Math.max(Math.abs(f)/7.4,Math.abs(x)/6.1),v=Math.max(0,1-Math.abs(f+2.3)/1.35)*(x<1.2||x>3.2?.24:.06),A=Math.max(0,1-Math.abs(f-2.6)/1.35)*(x<1.2||x>3.2?.24:.06),w=Math.pow(Math.max(0,y-.62)/.38,1.6)*.42,T=te.clamp(1-w-v-A,.48,1);r[m*3]=T,r[m*3+1]=T*.985,r[m*3+2]=T*.96}n.setAttribute("color",new Jt(r,3));const o=new ft(n,this.floorMat);o.position.set(0,.04,0),o.receiveShadow=!0,this.group.add(o),this.physics.addFloorZone(this.centerX-7.3,this.centerX+7.3,this.centerZ-6,this.centerZ+6.4,this.baseY+.16,"stone"),this.physics.addInteriorZone(this.centerX-7.1,this.centerX+7.1,this.centerZ-5.9,this.centerZ+5.9,this.baseY-.5,this.baseY+4.6);const a=new ft(new le(3.4,.18,1.6),this.stoneMat);a.position.set(0,.05,6.85),a.receiveShadow=!0,this.group.add(a),this._addBox(-6.5,4.35/2,6.1,2.2,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(-2.3,4.35/2,6.1,2.2,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(-4.4,.65,6.1,2,1.3,.56,!0,this.adobeMat,!0,!1),this._addBox(-4.4,3.55,6.1,2,1.6,.56,!1),this._addBox(-4.4,1.32,6.1,2.1,.11,.64,!1,this.woodMat),this._addBox(-4.4,2.74,6.1,2.1,.11,.64,!1,this.woodMat),this._addBox(2.3,4.35/2,6.1,2.2,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(6.5,4.35/2,6.1,2.2,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(4.4,.65,6.1,2,1.3,.56,!0,this.adobeMat,!0,!1),this._addBox(4.4,3.55,6.1,2,1.6,.56,!1),this._addBox(4.4,1.32,6.1,2.1,.11,.64,!1,this.woodMat),this._addBox(4.4,2.74,6.1,2.1,.11,.64,!1,this.woodMat),this._addBox(0,3.68,6.1,2.5,1.35,.56,!1),this._addBox(0,2.98,6.1,2.75,.18,.66,!1,this.woodMat),this._addBox(-1.22,1.48,6.1,.14,2.96,.6,!1,this.woodMat),this._addBox(1.22,1.48,6.1,.14,2.96,.6,!1,this.woodMat);const c=new ft(new le(1.05,2.75,.08),this.woodMat);c.position.set(-1.12,1.52,5.45),c.rotation.y=1.18,this.group.add(c),this._addBox(-7.45,4.35*.48,6.15,.78,4.35*.96,.78,!1),this._addBox(7.45,4.35*.48,6.15,.78,4.35*.96,.78,!1),this._addBox(-7.45,4.35*.48,-6.15,.78,4.35*.96,.78,!1),this._addBox(7.45,4.35*.48,-6.15,.78,4.35*.96,.78,!1),this._addBox(-4.35,4.35/2,-6.1,6.5,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(4.35,4.35/2,-6.1,6.5,4.35,.56,!0,this.adobeMat,!0,!1),this._addBox(0,3.65,-6.1,2.3,1.4,.56,!1),this._addBox(0,2.92,-6.1,2.5,.16,.64,!1,this.woodMat),this._addBox(-7.35,4.35/2,3.85,.56,4.35,4.9,!0,this.adobeMat,!0,!1),this._addBox(-7.35,4.35/2,-3.85,.56,4.35,4.9,!0,this.adobeMat,!0,!1),this._addBox(-7.35,.65,0,.56,1.3,2.8,!0,this.adobeMat,!0,!1),this._addBox(-7.35,3.55,0,.56,1.6,2.8,!1),this._addBox(-7.35,1.32,0,.66,.12,2.9,!1,this.woodMat),this._addBox(-7.35,2.75,0,.66,.12,2.9,!1,this.woodMat),this._addBox(7.35,4.35/2,3.6,.56,4.35,5.4,!0,this.adobeMat,!0,!1),this._addBox(7.35,4.35/2,-3.6,.56,4.35,5.4,!0,this.adobeMat,!0,!1),this._addBox(7.35,.9,0,.56,1.8,1.8,!0,this.adobeMat,!0,!1),this._addBox(7.35,3.65,0,.56,1.4,1.8,!1),this._addBox(-2.3,4.35/2,-2.5,.42,4.35,7,!0,this.adobeMat,!0,!1),this._addBox(-2.3,4.35/2,4.75,.42,4.35,2.6,!0,this.adobeMat,!0,!1),this._addBox(-2.3,3.65,2.2,.42,1.4,2.6,!1),this._addBox(-2.3,2.92,2.2,.5,.14,2.5,!1,this.woodMat),this._addBox(2.6,4.35/2,-2.5,.42,4.35,7,!0,this.adobeMat,!0,!1),this._addBox(2.6,4.35/2,4.75,.42,4.35,2.6,!0,this.adobeMat,!0,!1),this._addBox(2.6,3.65,2.2,.42,1.4,2.6,!1),this._addBox(2.6,2.92,2.2,.5,.14,2.5,!1,this.woodMat),this._addBox(0,4.46,0,15.2,.3,12.6,!1);const l=new Ee(14.6,12,6,6),h=l.attributes.position,d=new Float32Array(h.count*3);for(let m=0;m<h.count;m++){const f=Math.max(Math.abs(h.getX(m))/7.3,Math.abs(h.getY(m))/6),x=te.clamp(1-Math.pow(Math.max(0,f-.55)/.45,1.5)*.38,.58,1);d[m*3]=x,d[m*3+1]=x*.98,d[m*3+2]=x*.95}l.setAttribute("color",new Jt(d,3));const u=new ft(l,this.ceilingMat);u.rotation.x=Math.PI/2,u.position.set(0,4.29,0),this.group.add(u),this._addBox(-4.2,4.88,6.1,6.4,.56,.38,!1),this._addBox(4.4,4.82,6.1,6,.46,.38,!1),this._addBox(-7.4,4.88,0,.38,.56,12.6,!1),this._addBox(7.4,4.82,-1.2,.38,.44,10,!1),this._addBox(0,4.92,-6.1,15.2,.62,.38,!1);const p=new Le(.11,.12,16.4,5);p.rotateZ(Math.PI/2);for(let m=-4.8;m<=4.8;m+=1.9){const f=new ft(p,this.woodMat);f.position.set(0,4.16,m),this.group.add(f)}this._addBox(-2.4,5.9,-2,5.6,2.6,4.8,!1),this._addBox(-2.4,7.35,-4.25,5.6,.36,.32,!1);const g=new Ee(21,18);g.rotateX(-Math.PI/2);const _=new ft(g,new an({map:this.tex.createContactShadowTexture(),transparent:!0,depthWrite:!1,opacity:.54,polygonOffset:!0,polygonOffsetFactor:-2}));_.position.set(0,.03,.4),this.group.add(_)}_buildCourtyardWalls(){this._addBox(-5.6,.95,10.2,6.8,1.9,.48,!0,this.adobeMat,!0,!0),this._addBox(5.6,.85,10.2,6.8,1.7,.48,!0,this.adobeMat,!0,!0),this._addBox(-2.25,1.45,10.2,.72,2.9,.72,!0,this.adobeMat,!0,!1),this._addBox(2.25,1.35,10.2,.72,2.7,.72,!0,this.adobeMat,!0,!1),this._addBox(0,2.85,10.2,5.2,.22,.42,!1,this.woodMat),this._addBox(-8.9,.85,8.2,.46,1.7,4.2,!0,this.adobeMat,!0,!0),this._addBox(8.9,.75,8.2,.46,1.5,4.2,!0,this.adobeMat,!0,!0)}_buildGrandAwning(){[[-6.6,9],[-3.8,9],[-1.5,9],[1.6,9]].forEach(([n,i])=>{const r=new ft(new Le(.1,.12,2.85,5),this.woodMat);r.position.set(n,1.42,i),this.group.add(r),this.physics.addCylinderCollider(this.centerX+n,this.centerZ+i,.22,this.baseY+3)}),this._addBox(-2.5,2.82,9,8.5,.16,.16,!1,this.woodMat);for(let n=-6.4;n<=1.6;n+=1.3){const i=new ft(new le(.1,.11,3.1),this.woodMat);i.position.set(n,3.08,7.6),i.rotation.x=.18,this.group.add(i)}const t=new Ee(8.2,3,8,4);t.rotateX(-Math.PI/2+.18);const e=t.attributes.position;for(let n=0;n<e.count;n++)e.setY(n,e.getY(n)+Math.abs(Math.sin(e.getX(n)*1.1))*-.16);t.computeVertexNormals(),this.awningCloth=new ft(t,this.fabricMat),this.awningCloth.position.set(-2.5,3.12,7.55),this.group.add(this.awningCloth)}_buildWindVaneTower(){const t=new Pe;t.position.set(3.8,4.6,-2.4);const e=7.4;[[-.75,-.75],[.75,-.75],[-.75,.75],[.75,.75]].forEach(([o,a])=>{const c=new ft(new Le(.045,.07,e,5),this.metalMat);c.position.set(o*.5,e*.5,a*.5),c.rotation.z=o>0?.095:-.095,c.rotation.x=a>0?-.095:.095,t.add(c)}),this.windVane=new Pe,this.windVane.position.set(0,e+.2,0);const n=new le(2.1,.06,.06);n.translate(.45,0,0);const i=new le(1.05,.72,.04);i.translate(1.42,.05,0),this.windVane.add(new ft(ln([n,i],!1),this.metalMat)),n.dispose(),i.dispose();const r=[];for(let o=0;o<8;o++){const a=o/8*Math.PI*2,c=new le(.03,1,.2),l=new zt;l.makeRotationFromEuler(new Be(a,.32,0)),l.setPosition(0,Math.cos(a)*.62,Math.sin(a)*.62),c.applyMatrix4(l),r.push(c)}this.windTurbine=new ft(ln(r,!1),this.metalMat),r.forEach(o=>o.dispose()),this.windTurbine.position.set(-.58,0,0),this.windVane.add(this.windTurbine),t.add(this.windVane),this.group.add(t)}_createGlowingLantern(t,e,n,i=5.5,r=16){const o=new Pe;o.position.set(t,e,n);const a=this.models?.createMesh("lantern",.16);a&&o.add(a);const c=new ft(new ii(.07,8,8),this.lanternGlowMat);c.position.y=.24,o.add(c);const l=new Ka(16754504,i,r,1.55);return l.position.set(0,.34,0),o.add(l),this.lanternLights.push({light:l,baseIntensity:i,phase:Math.random()*6.28}),this.lanternWorldPositions.push({type:"lantern",x:this.centerX+t,y:this.baseY+e,z:this.centerZ+n}),this.group.add(o),o}_buildInteriorSanctuary(){const t=new ft(new Ee(3.8,2.6),this.rugMat);t.rotation.x=-Math.PI/2,t.position.set(.1,.175,1.4),t.receiveShadow=!0,this.group.add(t);const e=this.models?.getGeometry("crate"),n=this.models?.getMaterial("crate");if(e&&n){const d=new cn(e,n,2),u=new re;u.position.set(1.35,.16,-4.65),u.rotation.set(0,.28,0),u.scale.setScalar(1.32),u.updateMatrix(),d.setMatrixAt(0,u.matrix),u.position.set(-3.2,.02,7.6),u.rotation.set(0,.1,0),u.scale.setScalar(1.12),u.updateMatrix(),d.setMatrixAt(1,u.matrix),d.instanceMatrix.needsUpdate=!0,this.group.add(d)}this.physics.addBoxCollider(this.centerX+.7,this.centerX+2,this.centerZ-5.1,this.centerZ-4.2,this.baseY+.16,this.baseY+.88,!0);const i=new ft(new le(.18,.52,.08),this.scarfMat);i.position.set(1.35,1.65,6.45),i.rotation.z=.18,this.group.add(i),this.interactables.push({id:"courtyard_marker",label:"فحص شال سالم عند الباب",worldPos:new L(this.centerX+1.35,this.baseY+1.75,this.centerZ+6.45),radius:4.2}),this._createGlowingLantern(1.75,2.38,6.55,11.5,26);const r=this._createGlowSpriteTexture(),o=new Va({map:r,color:16757586,transparent:!0,opacity:.88,blending:os,depthWrite:!1,fog:!1});this.beaconSprite=new Wc(o),this.beaconSprite.position.set(1.75,2.65,6.65),this.beaconSprite.scale.set(2.8,2.8,1),this.group.add(this.beaconSprite);const a=this.models?.createMesh("table",2.2);a&&(a.position.set(-5.35,.16,-.4),this.group.add(a)),this.physics.addBoxCollider(this.centerX-6.45,this.centerX-4.25,this.centerZ-.98,this.centerZ+.18,this.baseY+.16,this.baseY+1.06,!0);const c=this.models?.createMesh("chair",.58);c&&(c.position.set(-4.65,.16,.78),c.rotation.y=-2.4,this.group.add(c));const l=new ft(new le(.42,.06,.52),this.paperMat);l.position.set(-5.15,1.06,-.35),l.rotation.y=.22,this.group.add(l),this._createGlowingLantern(-5.78,1.04,-.52,4.6,13),this.interactables.push({id:"salem_ledger",label:"قراءة دفتر رحلة سالم",worldPos:new L(this.centerX-5.15,this.baseY+1.12,this.centerZ-.35),radius:4});const h=this.models?.createMesh("table",1.85);h?(h.position.set(.1,.16,-2),this.group.add(h)):this._addBox(.1,.56,-2,1.6,.8,.9,!1,this.woodMat),this.physics.addBoxCollider(this.centerX-.85,this.centerX+1.05,this.centerZ-2.5,this.centerZ-1.5,this.baseY+.16,this.baseY+.96,!0),this._createGlowingLantern(.1,.9,-2,9,20),this.interactables.push({id:"sanctuary_lantern",label:"إشعال مصباح الإشارة للإنقاذ",worldPos:new L(this.centerX+.1,this.baseY+1.18,this.centerZ-2),radius:4}),this._addBox(5.2,.6,-4.4,2.4,.92,1.05,!0,this.woodMat,!1,!0),this._addBox(6.4,1.3,1.8,.85,2.25,1.9,!0,this.metalMat,!1,!1)}_buildBackCourtyardAndWell(){const t=this.models?.getGeometry("barrel"),e=this.models?.getMaterial("barrel")||this.metalMat,n=[[8.3,2.2,.72],[8.6,1.15,.72],[-8.3,4.4,.72],[5.8,-7.8,.72]];if(t){const p=new cn(t,e,n.length),g=new re;n.forEach(([_,m,f],x)=>{const y=this.getHeight(this.centerX+_,this.centerZ+m)-this.baseY;g.position.set(_,y,m),g.rotation.set(0,x*1.1,0),g.scale.setScalar(f),g.updateMatrix(),p.setMatrixAt(x,g.matrix),this.physics.addCylinderCollider(this.centerX+_,this.centerZ+m,.42,this.baseY+y+1.15)}),p.instanceMatrix.needsUpdate=!0,this.group.add(p)}const i=-6.8,r=-10.4,o=this.getHeight(this.centerX+i,this.centerZ+r)-this.baseY,a=new Pe;a.position.set(i,o,r);const c=new ft(new Le(1.3,1.42,1.05,10,1,!0),this.stoneMat);c.position.y=.5;const l=new ft(new hs(1.22,10),new an({color:328710}));l.rotation.x=-Math.PI/2,l.position.y=.42;const h=new ft(new le(.14,2.3,.14),this.woodMat);h.position.set(-1.26,1.15,0);const d=new ft(new le(.14,1.85,.14),this.woodMat);d.position.set(1.26,.92,0),d.rotation.z=-.15;const u=new ft(new Le(.06,.06,2.7,5),this.woodMat);u.rotation.z=Math.PI/2-.12,u.position.set(0,2.02,0),a.add(c,l,h,d,u),this.group.add(a),this.physics.addCylinderCollider(this.centerX+i,this.centerZ+r,1.5,this.baseY+o+1.8)}_createGlowSpriteTexture(){const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d"),i=n.createRadialGradient(64/2,64/2,1,64/2,64/2,64/2);i.addColorStop(0,"rgba(255, 246, 215, 1.0)"),i.addColorStop(.22,"rgba(255, 186, 86, 0.72)"),i.addColorStop(.58,"rgba(235, 128, 38, 0.22)"),i.addColorStop(1,"rgba(200, 90, 20, 0.0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const r=new Ai(e);return r.colorSpace=xe,r}_optimizeStaticBatches(){const t=new Set([this.adobeMat,this.woodMat,this.metalMat,this.stoneMat]),e=new Set([this.awningCloth,this.windVane,this.windTurbine]),n=a=>{let c=a;for(;c&&c!==this.group;){if(e.has(c))return!0;c=c.parent}return!1};this.group.updateMatrixWorld(!0);const i=new zt().copy(this.group.matrixWorld).invert(),r=new Map,o=[];this.group.traverse(a=>{if(!a.isMesh||a.isInstancedMesh||!t.has(a.material)||n(a))return;const c=a.geometry.index?a.geometry.toNonIndexed():a.geometry.clone(),l=new zt().multiplyMatrices(i,a.matrixWorld);c.applyMatrix4(l);const h=new me;h.setAttribute("position",c.attributes.position.clone()),c.attributes.normal&&h.setAttribute("normal",c.attributes.normal.clone()),c.attributes.uv&&h.setAttribute("uv",c.attributes.uv.clone()),a.material.vertexColors&&(c.attributes.color?h.setAttribute("color",c.attributes.color.clone()):h.setAttribute("color",new Jt(new Float32Array(c.attributes.position.count*3).fill(1),3))),c.dispose(),r.has(a.material)||r.set(a.material,[]),r.get(a.material).push(h),o.push(a)});for(const[a,c]of r.entries()){if(c.length<2){c.forEach(h=>h.dispose());continue}const l=ln(c,!1);if(c.forEach(h=>h.dispose()),l){const h=new ft(l,a);h.castShadow=a===this.adobeMat||a===this.woodMat,h.receiveShadow=!0,this.group.add(h)}}for(const a of o){const c=r.get(a.material);c&&c.length>=2&&a.parent&&(a.parent.remove(a),a.geometry.dispose())}}getInteractables(){return this.interactables}update(t,e,n){this.awningTimeUniform.value=e,this.windTurbine&&(this.windTurbine.rotation.x+=t*(1.2+Math.sin(e*.5)*.35)),this.windVane&&(this.windVane.rotation.y=.35+Math.sin(e*.32)*.18);for(let i=0;i<this.lanternLights.length;i++){const r=this.lanternLights[i],o=.9+.08*Math.sin(e*6.8+r.phase)+.04*Math.sin(e*15.2+r.phase*2.1);r.light.intensity=r.baseIntensity*o}if(this.beaconSprite&&n){const i=Math.hypot(n.x-(this.centerX+1.75),n.z-(this.centerZ+6.65)),r=te.clamp(.9+i*.042,.9,8.5),o=.92+.08*Math.sin(e*5.2);this.beaconSprite.scale.set(r*o,r*o,1)}}dispose(t,e){this.beaconSprite?.material?.map&&this.beaconSprite.material.map.dispose(),Jc(this.group,t,e),this.parentGroup.remove(this.group),this.lanternLights.length=0,this.lanternWorldPositions.length=0,this.interactables.length=0}}const sn={1:{id:1,chapterTag:"الفصل الأول • الظهر",title:"سهول السراب — القافلة التائهة",subtitle:"ابحث عن أثر أخيك «سالم» عبر المعسكر المهجور والسبخة المتشققة",timeLabel:"١٢:٣٠ ظهراً",startPos:{x:0,z:112,yaw:.14,pitch:-.02},goalPos:{x:4,z:-112},goalRadius:9,steps:[{id:"camp_clue",objective:"تفحّص معسكر القافلة المهجور غرب الكثبان",tag:"دليل ١ من ٢ — سهول السراب",title:"معسكر القافلة ورسالة سالم الممزقة",sfx:"paper",body:`رماد النار ما زال دافئاً منذ الفجر... تحت صندوق المؤن وجدتَ قصاصة بخط أخيك «سالم»:

«تفرّقت القافلة حين هبّت الرياح فجراً. سأترك علامتي عند الشاهد الحجري القديم وسط السبخة المتشققة قبل أن أدخل وادي الصخور.»`,whisper:"سالم مرّ من هنا هذا الصباح! عليّ التوجه إلى الشاهد الحجري وسط السبخة المتشققة."},{id:"sabkha_stele",objective:"اتجه إلى الشاهد الحجري المنقوش وسط السبخة المتشققة",tag:"دليل ٢ من ٢ — السبخة المتشققة",title:"شاهد السبخة وساعة الجيب النحاسية",sfx:"metal",body:`على قاعدة الشاهد الحجري العتيق ترك سالم ساعته النحاسية مشيرة نحو البوابة الصخرية شمالاً، وحفر سهماً على الحجر مع عبارة:

«الماء نفد... سأحتمي بواحة النخيل داخل وادي الصخور. الحق بي قبل العصر!»`,whisper:"ترك ساعته هنا ليدلّني على طريقه... مدخل وادي الصخور أمامي شمالاً، سأعبر إليه الآن."},{id:"exit_stage1",isExit:!0,objective:"اعبر البوابة الصخرية شمالاً إلى وادي الصخور"}]},2:{id:2,chapterTag:"الفصل الثاني • العصر",title:"وادي الصخور والواحة — ظلال الأطلال",subtitle:"استكشف أطلال الخان القديم وواحة النخيل للعثور على مسار الجبل",timeLabel:"٣:٥٥ عصراً",startPos:{x:Fe(116),z:116,yaw:0,pitch:-.02},goalPos:{x:Fe(-118),z:-118},goalRadius:9,steps:[{id:"ruin_note",objective:"استكشف أطلال الخان القديم وابحث عن أثر سالم",tag:"دليل ١ من ٢ — أطلال الخان القديم",title:"مذكرة القافلة داخل الخان",sfx:"paper",body:`بين جدران الخان المهدّمة علّق سالم ورقة مشدودة بحجر:

«سمعتُ همساً غريباً يتردد من جهة الجبل المرتفع... لا بد أن هناك محطة رصد قديمة خلف الكثبان. ارتويتُ عند بئر واحة النخيل وتابعتُ طريقي شمالاً.»`,whisper:"همس يتردد من الجبل؟ سأتفقد بئر واحة النخيل القريبة أولاً."},{id:"oasis_well",objective:"تفقّد بئر واحة النخيل وسط الوادي",tag:"دليل ٢ من ٢ — واحة النخيل",title:"فانوس القافلة المطفي عند البئر",sfx:"metal",body:"بجوار البئر الحجرية المظللة بسعف النخيل، وجدتَ فانوساً نحاسياً منطفئاً وإبريق ماء فارغاً. آثار خطوات واضحة تصعد الآن نحو الممر الحجري المؤدي إلى قمة الجبل.",whisper:"الوقت يميل نحو الغروب... سأعبر ممر الصعود في نهاية الوادي لألحق به على الجبل."},{id:"exit_stage2",isExit:!0,objective:"تابع نحو ممر الصعود إلى قمة الجبل في نهاية الوادي"}]},3:{id:3,chapterTag:"الفصل الثالث • الغروب والشفق",title:"قمة جبل السراب — بصيص النور",subtitle:"اصعد نحو مأوى الراصد ومرصد القمة لتكتشف مصدر الضوء البعيد",timeLabel:"٦:٠٨ مغرباً",startPos:{x:ei(104),z:104,yaw:0,pitch:.03},goalPos:{x:ei(-96),z:-96},goalRadius:6.5,steps:[{id:"ridge_shelter",objective:"تفقّد مأوى الراصد الحجري في منتصف صعود الجبل",tag:"دليل ١ من ٢ — مأوى الراصد",title:"خريطة النجوم وحقيبة سالم",sfx:"paper",body:`داخل هذا المأوى الصخري وجدتَ خريطة نجوم مرسومة بالحبر تحدد موقع بيتٍ صحراوي مهجور في قلب بحر الكثبان أسفل الجبل:

«إلى من يبحث عني... انظر من المنظار النحاسي عند قمة الجبل؛ سأشعل مصباح البيت الليلة ليكون دليلك في العتمة.»`,whisper:"سالم ينتظرني في البيت المهجور أسفل الكثبان! سأصعد إلى مرصد القمة لأرى مكانه."},{id:"summit_spyglass",objective:"اصعد إلى قمة الجبل واستخدم المنظار النحاسي نحو بحر الكثبان",tag:"دليل ٢ من ٢ — قمة جبل السراب (٩٢م)",title:"بصيص النور في بحر الكثبان",sfx:"metal",body:`من ارتفاع ٩٢ متراً فوق بحر لا متناهٍ من الكثبان الغارقة في الشفق، يلمع بصيص نورٍ ذهبي دافئ من بيتٍ مهجور وحيد في الأسفل...

لقد أوفى سالم بوعده وأشعل المصباح. الليل يوشك أن يحل؛ حان وقت النزول إليه.`,whisper:"ها هو نور البيت يلمع أسفل بحر الكثبان... سأنزل إليه الآن تحت سماء الليل.",triggersNextStage:!0}]},4:{id:4,chapterTag:"الفصل الرابع • الليل",title:"البيت المهجور تحت النجوم — المصباح الأخير",subtitle:"اقترب تحت ضوء القمر والمجرة واستخدم الكشاف (F) لاكتشاف الحقيقة",timeLabel:"١٠:٤٠ ليلاً",startPos:{x:-4,z:108,yaw:.02,pitch:-.01},goalPos:{x:Jn+.1,z:Fn-2},goalRadius:4,steps:[{id:"courtyard_marker",objective:"اقترب من البيت المهجور وتفحّص الشال الأحمر عند المدخل",tag:"دليل ١ من ٣ — فناء البيت المهجور",title:"شال سالم المعلّق تحت الفانوس",sfx:"paper",body:`شال سالم الأحمر مربوط بعناية على عمود الباب الخشبي وتحته ورقة قصيرة:

«أهلاً بوصولك سالماً... تركتُ دفتر الرحلة الكامل على مكتب الغرفة اليسرى، وأبقيتُ مصباح الإنقاذ جاهزاً في الردهة.»`,whisper:"كان هنا قبل قليل... سأدخل الغرفة اليسرى وأقرأ دفتر رحلته."},{id:"salem_ledger",objective:"ادخل غرفة المكتب (الجهة اليسرى) واقرأ دفتر رحلة سالم",tag:"دليل ٢ من ٣ — غرفة المكتب",title:"دفتر رحلة سالم — سر الرمال المغنية",sfx:"paper",body:`«لم نكن تائهين عبثاً... هذه المحطة كانت مرصداً قديماً لظاهرة الرمال المغنية في صحرائنا. حين أصلحتُ الهوائي فجراً استجاب فريق الإنقاذ وسيعبرون الوادي مع الفجر.

خرجتُ لأستقبل القافلة عند التل الشرقي، أشعل المصباح الكبير في الردهة ليروا موقع البيت من بعيد!»`,whisper:"سالم بخير وفريق الإنقاذ في طريقه! سأشعل مصباح الإشارة في الردهة الآن."},{id:"sanctuary_lantern",objective:"عد إلى الردهة الرئيسية وأشعل مصباح الإشارة للإنقاذ",tag:"ختام الرحلة — تحت سماء النجوم",title:"نور في قلب الصحراء",sfx:"flame",body:`ارتفع وهج المصباح الذهبي ليغمر الردهة وينساب عبر النوافذ نحو الكثبان المضاءة بنور الهلال...

من لهيب الظهيرة والسبخة، إلى ظلال الوادي وقمة الشفق، انتهت رحلة التيه بسلام تحت سماء النجوم والمجرة.`,whisper:"ارتفع نور المصباح عالياً في سماء الليل... اكتملت رحلة السراب.",completesJourney:!0}]}};class Jm{constructor(t,e,n,i,r,o){this.scene=t,this.tex=e,this.models=n,this.physics=i,this.sky=r,this.settings=o,this.currentStageId=0,this.stageGroup=null,this.getHeight=mc(1),this.getNormal=gc(this.getHeight),this.abandonedHouse=null,this.stageInteractables=[],this.spatialAudioSpots=[],this.sunOccluders=[],this.palmTimeUniform={value:0},this.palmStormUniform={value:0},this.dustUniforms=null,this.dustPoints=null,this.hawks=[],this.hawkInst=null,this.beaconSprite=null,this.waypointMarker=null,this.stormIntensity=0,this._dummy=new re,this._faunaAccum=0,this._baseDustCount=200,this._dustMaxCount=260}getStageMeta(t=this.currentStageId){return sn[t]||sn[1]}disposeCurrentStage(){const{geometries:t,materials:e}=this.models.getSharedSets();this.abandonedHouse&&(this.abandonedHouse.dispose(t,e),this.abandonedHouse=null),this.beaconSprite?.material?.map&&this.beaconSprite.material.map.dispose(),this.beaconSprite=null,this.waypointMarker=null,this.dustPoints=null,this.dustUniforms=null,this.hawkInst=null,this.hawks.length=0,this.stageInteractables.length=0,this.spatialAudioSpots.length=0,this.sunOccluders.length=0,this.stageGroup&&(Jc(this.stageGroup,t,e),this.scene.remove(this.stageGroup),this.stageGroup=null),this.physics.clear()}loadStage(t){this.disposeCurrentStage();const e=sn[t]?t:1;this.currentStageId=e,this.stageGroup=new Pe,this.stageGroup.name=`stage_${e}`,this.scene.add(this.stageGroup),this.sky.applyStage(e,!0),this.stormIntensity=Se[e].stormBase||0,this.getHeight=mc(e),this.getNormal=gc(this.getHeight);const n=Wm(e,this.getHeight);let i={type:"box",minX:-145,maxX:145,minZ:-145,maxZ:145},r=.94;e===2?(i={type:"corridor",minZ:-128,maxZ:128,centerXFn:Fe,halfWidthFn:c=>Ri(c)+1.5},r=.88):e===3?(i={type:"corridor",minZ:-102,maxZ:114,centerXFn:ei,halfWidthFn:c=>Ca(c)-.5},r=.85):e===4&&(i={type:"box",minX:-110,maxX:110,minZ:-110,maxZ:132}),this.physics.configureStage({heightSampler:this.getHeight,surfaceSampler:n,bounds:i,maxSlope:r});const o=[],a=[];if(e===1?this._buildStage1Plains(o,a):e===2?this._buildStage2Canyon(o,a):e===3?this._buildStage3Summit(o,a):e===4&&this._buildStage4Night(o,a),this._buildStageTerrain(e,o),this._buildHorizonSkirt(e),a.length>0){const c=e===4?.42:.44,l=km(this.tex,a,this.getHeight,this.getNormal,c);l&&this.stageGroup.add(l)}return this._createGPUDustParticles(e),this._createSubtleWaypointMarker(),this.sky.setSunOcclusionContext(this.sunOccluders,this.getHeight,this.physics),this.applySettings(this.settings.getPreset()),sn[e]}_createSubtleWaypointMarker(){const t=new ft(new Ya(.22,.3,4),new an({color:16768914,transparent:!0,opacity:.78,side:fe,depthTest:!1}));t.renderOrder=10,t.visible=!1,this.waypointMarker=t,this.stageGroup.add(t)}_buildStageTerrain(t,e){const n=Qs[t],i=new Ee(n.size,n.size,n.segments,n.segments);i.rotateX(-Math.PI/2);const r=i.attributes.position,o=new Float32Array(r.count);for(let d=0;d<r.count;d++){const u=r.getX(d),p=r.getZ(d),g=Qn(t,u,p);r.setY(d,g),t===1?o[d]=rs(u,p):t===2?o[d]=tl(u,p):t===3?o[d]=Vm(u,p,g):o[d]=0}i.setAttribute("aBlend",new Jt(o,1)),i.computeVertexNormals();const a=t===4,c=t===3;zm(i,this.getHeight,this.sky.sunDirection,{occluders:e,sunStrength:a?.16:c?.2:.17,cavityStrength:t===2?.28:.2,warmBounce:a?[.96,1,1.06]:c?[1.03,.96,.91]:[1.02,.99,.95],shadowTint:a?[.76,.82,.94]:c?[.72,.64,.74]:[.8,.74,.68]});const l=this._createStageTerrainMaterial(t),h=new ft(i,l);h.receiveShadow=!0,this.stageGroup.add(h)}_createStageTerrainMaterial(t){const e=Se[t],n=t===3?72:64,i=this.tex.loadPBRSet("sand",n,n);let r=null,o=52;t===1?(r=this.tex.loadPBRSet("sabkha",56,56),o=56):t===2?(r=this.tex.loadPBRSet("canyon_floor",54,54),o=54):t===3&&(r=this.tex.loadPBRSet("canyon_floor",62,62),o=62);const c=he&&this.settings.data.quality==="low"?new ce({map:i.map,normalMap:i.normalMap,normalScale:new yt(1.02,1.02),vertexColors:!0,color:e.sandTint}):new Ne({map:i.map,normalMap:i.normalMap,normalScale:new yt(1.05,1.05),roughness:.92,metalness:.02,vertexColors:!0,color:e.sandTint});return c.name=`terrain_stage_${t}`,c.onBeforeCompile=l=>{r&&(l.uniforms.uSecondMap={value:r.map},l.uniforms.uSecondNormal={value:r.normalMap},l.uniforms.uSecondRepeat={value:o}),l.uniforms.uStageId={value:t},l.vertexShader=l.vertexShader.replace("#include <common>",`#include <common>
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
          if (uStageId > 1.5 && uStageId < 2.5) {
            // Stratified desert sedimentary cliff walls in Stage 2!
            float wallGrad = smoothstep(3.8, 13.0, vTerrainWorldPos.y);
            float strata = sin(vTerrainWorldPos.y * 1.45 + sin(vTerrainWorldPos.x * 0.045 + vTerrainWorldPos.z * 0.045) * 1.2) * 0.5 + 0.5;
            vec3 strataCol = mix(vec3(0.46, 0.34, 0.24), vec3(0.72, 0.58, 0.43), strata);
            _secCol = mix(_secCol, strataCol, wallGrad * 0.78);
          }
          diffuseColor.rgb = mix(diffuseColor.rgb, _secCol, clamp(vBlend, 0.0, 1.0));
        `:"";l.fragmentShader=l.fragmentShader.replace("#include <common>",`#include <common>
           ${h}
           uniform float uStageId;
           varying float vBlend;
           varying vec3 vTerrainWorldPos;
           varying vec2 vTerrainRawUv;`).replace("#include <map_fragment>",`#include <map_fragment>
           ${d}
           float _macro = sin(vTerrainWorldPos.x * 0.042 + vTerrainWorldPos.z * 0.036) * 0.5 + 0.5;
           diffuseColor.rgb *= mix(vec3(0.95, 0.91, 0.86), vec3(1.04, 1.0, 0.95), _macro);`),r&&(l.fragmentShader=l.fragmentShader.replace("#include <normal_fragment_maps>",`#ifdef USE_NORMALMAP_TANGENTSPACE
             vec3 _n1 = texture2D(normalMap, vNormalMapUv).xyz * 2.0 - 1.0;
             vec3 _n2 = texture2D(uSecondNormal, vTerrainRawUv * uSecondRepeat).xyz * 2.0 - 1.0;
             vec3 mapN = normalize(mix(_n1, _n2, clamp(vBlend, 0.0, 1.0)));
             mapN.xy *= normalScale;
             normal = normalize(tbn * mapN);
           #endif`))},Un(c,{saturation:t===4?.88:.92,contrast:1.02,aerialStrength:t===3?.44:0,aerialStart:120,aerialEnd:460}),c}_buildHorizonSkirt(t){const e=Se[t],n=t===3?1900:1520,i=t===3?64:36,r=new Ee(n,n,i,i);r.rotateX(-Math.PI/2);const o=Qs[t].size*.485,a=r.attributes.position,c=new Float32Array(a.count*3);for(let u=0;u<a.count;u++){const p=a.getX(u),g=a.getZ(u),_=Math.max(Math.abs(p),Math.abs(g));let m;if(t===3){const x=Ra(p,g),y=_<o?-8*(1-_/o):0;m=x+y}else if(m=Qn(t,p,g),_<o)m-=16;else{const x=Math.min(1,(_-o)/260);m+=(Math.sin(p*.008+g*.006)*16+Math.cos(p*.005-g*.009)*12)*x}a.setY(u,m);const f=te.clamp(.92+m*.004,.8,1.05);c[u*3]=f,c[u*3+1]=f*.97,c[u*3+2]=f*.94}r.setAttribute("color",new Jt(c,3)),r.computeVertexNormals();const l=this.tex.loadPBRSet("sand",92,92),h=new Ne({map:l.map,roughness:.93,metalness:.01,vertexColors:!0,color:e.sandTint});Un(h,{saturation:t===4?.86:.9,contrast:1.01,aerialStrength:t===3?.44:.42,aerialStart:t===3?120:160,aerialEnd:t===3?460:620});const d=new ft(r,h);this.stageGroup.add(d)}_createWatertightBoulderGeo(t=0){const e=new Js(1,2),n=e.attributes.position,i=t===0?0:2.15;for(let r=0;r<n.count;r++){let o=n.getX(r),a=n.getY(r),c=n.getZ(r);const l=Math.sin(o*3.1+i)*Math.cos(c*2.8-i)*.16,h=Math.cos(a*5.2+o*4.4+i)*.09,d=Math.sin(a*9.5+c*1.8)*.045,u=1+l+h+d;o*=(t===0?1.18:1.32)*u,c*=(t===0?.96:.88)*u,a>0?a=Math.pow(a,.82)*(t===0?.78:.62)*u:a=a*.65,n.setXYZ(r,o,a,c)}return e.computeVertexNormals(),js(e,{bottomAO:.56,topLift:1.04,undersideAO:.22}),e}_placeSolidBoulders(t,e,n,i){if(!t.length)return;const r=Se[i],o=this._createWatertightBoulderGeo(0),a=this._createWatertightBoulderGeo(1),c=this.tex.loadPBRSet("sandstone_rock",2,2),l=new Ne({map:c.map,normalMap:c.normalMap,normalScale:new yt(.85,.85),roughness:.92,metalness:.02,vertexColors:!0,color:r.rockTint});l.name=`solid_boulder_s${i}`,Un(l,{saturation:.84,contrast:1.03});const h=t.filter(g=>(g.type||0)===0),d=t.filter(g=>(g.type||0)===1),u=this._dummy,p=(g,_)=>{if(!g.length)return;const m=new cn(_,l,g.length);m.castShadow=!he,m.receiveShadow=!0,g.forEach((f,x)=>{const y=this.getHeight(f.x,f.z),v=f.sy*.24;u.position.set(f.x,y-v+f.sy*.35,f.z),u.rotation.set(0,f.ry||0,0),u.scale.set(f.sx,f.sy,f.sz),u.updateMatrix(),m.setMatrixAt(x,u.matrix);const A=f.sx*1.08,w=f.sz*.92,T=y-v+f.sy*.95;this.physics.addEllipseCollider(f.x,f.z,A,w,f.ry||0,T,f.climbable!==!1),e.push({type:"circle",x:f.x,z:f.z,rx:A*1.1,rz:w*1.1,pad:2,strength:.36}),n.push({x:f.x,z:f.z,sx:A*2.45,sz:w*2.45,ry:f.ry||0})}),m.instanceMatrix.needsUpdate=!0,this.stageGroup.add(m),this.sunOccluders.push(m)};p(h,o),p(d,a)}_createStratifiedMesaGeo(){const t=new Le(.52,1.16,1,20,10,!1);t.translate(0,.5,0);const e=t.attributes.position;for(let n=0;n<e.count;n++){const i=e.getX(n),r=e.getY(n),o=e.getZ(n),a=Math.hypot(i,o);if(a>1e-5){const c=Math.atan2(o,i),l=as(c,r),h=1.16+(.52-1.16)*r,d=a>=h*.9?l/a:l/Math.max(.01,h);e.setXYZ(n,i*d,r,o*d)}}return t.computeVertexNormals(),js(t,{bottomAO:.58,topLift:1.04,undersideAO:.24}),t}_placeStratifiedMesas(t,e,n,i=!0){if(!t.length)return;const r=Se[n],o=this._createStratifiedMesaGeo(),a=this.tex.loadPBRSet("sandstone_rock",5,3),c=new Ne({map:a.map,normalMap:a.normalMap,normalScale:new yt(.95,.95),roughness:.94,metalness:.02,vertexColors:!0,color:r.rockTint});c.name=`mesa_strata_v6_s${n}`,c.onBeforeCompile=d=>{d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vMesaWorldPos;
varying float vMesaLocalY;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
           vMesaLocalY = position.y;
           vec4 _mw = vec4(transformed, 1.0);
           #ifdef USE_INSTANCING
             _mw = instanceMatrix * _mw;
           #endif
           vMesaWorldPos = (modelMatrix * _mw).xyz;`),d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vMesaWorldPos;
varying float vMesaLocalY;`).replace("#include <color_fragment>",`#include <color_fragment>
           float _ml = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
           diffuseColor.rgb = mix(vec3(_ml), diffuseColor.rgb, 0.65);
           float bandCoord = vMesaWorldPos.y * 0.52 + sin(vMesaWorldPos.x * 0.035 + vMesaWorldPos.z * 0.03) * 0.85;
           float strata1 = sin(bandCoord * 3.0) * 0.5 + 0.5;
           float strata2 = sin(bandCoord * 8.5 + 1.3) * 0.5 + 0.5;
           vec3 warmSandstone = vec3(0.84, 0.72, 0.56);
           vec3 deepOchre     = vec3(0.56, 0.42, 0.30);
           vec3 strataTint = mix(deepOchre, warmSandstone, strata1 * 0.64 + strata2 * 0.36);
           diffuseColor.rgb *= mix(vec3(0.86), strataTint * 1.32, 0.72);
           // Natural subtle ground-contact sand-crevice darkening (NEVER pale washed-out!)
           float baseCrevice = smoothstep(0.18, 0.0, vMesaLocalY);
           diffuseColor.rgb *= (1.0 - baseCrevice * 0.18);`)},Un(c,{saturation:.84,contrast:1.03,aerialStrength:n===2?.26:.42,aerialStart:68,aerialEnd:245});const l=new cn(o,c,t.length);l.castShadow=!he&&n===2,l.receiveShadow=!0;const h=this._dummy;t.forEach((d,u)=>{const p=d.y!==void 0?d.y:this.getHeight(d.x,d.z);h.position.set(d.x,p-7.5,d.z),h.rotation.set(0,d.ry||0,0),h.scale.set(d.sx,d.sy+3,d.sz),h.updateMatrix(),l.setMatrixAt(u,h.matrix),i&&this.physics.addMesaCollider(d.x,d.z,d.sx,d.sz,d.ry||0,p-3,d.sy+3),e.push({type:"circle",x:d.x,z:d.z,rx:d.sx*1.25,rz:d.sz*1.25,pad:5.5,strength:.44})}),l.instanceMatrix.needsUpdate=!0,this.stageGroup.add(l),this.sunOccluders.push(l)}_placeDesertPalms(t,e,n){if(!t.length)return;const i=this.tex.createPalmBarkTexture(),r=new Ne({map:i,roughness:.94,metalness:0,vertexColors:!0,color:14206638});Un(r,{saturation:.88,contrast:1.02});const o=this.tex.createPalmFrondTexture(),a=new ce({map:o,alphaTest:.36,side:fe,color:14869704});a.onBeforeCompile=x=>{x.uniforms.uTime=this.palmTimeUniform,x.uniforms.uStorm=this.palmStormUniform,x.vertexShader=x.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;
uniform float uStorm;`).replace("#include <begin_vertex>",`#include <begin_vertex>
           float tipDist = length(position.xz);
           float swayAmp = (0.04 + uStorm * 0.14) * tipDist;
           float swayFreq = 1.4 + uStorm * 2.2;
           float phase = instanceMatrix[3][0] * 0.25 + instanceMatrix[3][2] * 0.25;
           transformed.x += sin(uTime * swayFreq + phase) * swayAmp;
           transformed.y += cos(uTime * swayFreq * 0.8 + phase) * swayAmp * 0.45;`)};const c=[],l=(x,y,v,A,w)=>{const T=new Ee(y,x,2,7),R=T.attributes.position;for(let M=0;M<R.count;M++){const P=R.getY(M),F=te.clamp((P+x*.5)/x,0,1),B=F*x,V=Math.sin(F*Math.PI*.78)*(x*.32)-Math.pow(F,2.2)*w,q=R.getX(M),G=-Math.abs(q)*.24;R.setXYZ(M,q,V+G,B)}const S=new zt().makeRotationFromEuler(new Be(A,v,0,"YXZ"));return T.applyMatrix4(S),T.computeVertexNormals(),T};for(let x=0;x<8;x++){const y=x/8*Math.PI*2+.2;c.push(l(3.4,1.35,y,-.32,.72))}for(let x=0;x<10;x++){const y=x/10*Math.PI*2+.55;c.push(l(4,1.55,y,.05,1.48))}const h=ln(c,!1);c.forEach(x=>x.dispose());const d=new cn(h,a,t.length);d.castShadow=!he;const u=new ce({color:10252856}),p=[],g=[],_=this._dummy;t.forEach((x,y)=>{const v=this.getHeight(x.x,x.z),A=new Le(.18,.34,x.h+.8,9,8),w=A.attributes.position;for(let P=0;P<w.count;P++){const F=(w.getY(P)+(x.h+.8)*.5)/(x.h+.8),B=F<.18?1+(.18-F)*1.4:1;w.setX(P,w.getX(P)*B+F*F*x.h*x.lean),w.setZ(P,w.getZ(P)*B)}A.translate(0,(x.h+.8)*.5-.6,0),js(A,{bottomAO:.58,topLift:1.02,undersideAO:.12});const T=new zt().makeRotationY(x.ry);T.setPosition(x.x,v,x.z),A.applyMatrix4(T),A.computeVertexNormals(),g.push(A);const R=x.x+Math.cos(x.ry)*(x.h*x.lean),S=x.z-Math.sin(x.ry)*(x.h*x.lean),M=new ii(.42,8,6);M.scale(1,1.35,1),M.translate(R,v+x.h-.38,S),p.push(M),_.position.set(R,v+x.h-.12,S),_.rotation.set(0,x.ry,0),_.scale.set(1,1,1),_.updateMatrix(),d.setMatrixAt(y,_.matrix),this.physics.addCylinderCollider(x.x,x.z,.36,v+x.h,!1),e.push({type:"circle",x:x.x,z:x.z,r:.9,pad:2.2,strength:.34}),n.push({x:x.x,z:x.z,sx:3,sz:3,ry:x.ry})}),d.instanceMatrix.needsUpdate=!0;const m=new ft(ln(g,!1),r);m.castShadow=!he,m.receiveShadow=!0,g.forEach(x=>x.dispose());const f=new ft(ln(p,!1),u);p.forEach(x=>x.dispose()),this.stageGroup.add(m,f,d)}_placeDesertShrubs(t){if(!t.length)return;const e=[];for(let a=0;a<5;a++){const c=a/5*Math.PI*2+.4,l=a===0?0:.24,h=a===0?.3:.21+a%2*.05,d=new Js(h,1),u=d.attributes.position;for(let p=0;p<u.count;p++){const g=u.getX(p),_=u.getY(p),m=u.getZ(p),f=.84+.28*Math.abs(Math.sin(g*9.3+m*7.1+a));u.setXYZ(p,g*f*1.18,_*f*.68,m*f*1.18)}d.computeVertexNormals(),d.translate(Math.cos(c)*l,h*.42,Math.sin(c)*l),e.push(d)}const n=ln(e,!1);e.forEach(a=>a.dispose());const i=new ce({color:10654568}),r=new cn(n,i,t.length),o=this._dummy;t.forEach((a,c)=>{const l=this.getHeight(a.x,a.z),h=a.scale??1;o.position.set(a.x,l-.05,a.z),o.rotation.set(0,a.ry??c,0),o.scale.set(h*1.1,h*.85,h*1.1),o.updateMatrix(),r.setMatrixAt(c,o.matrix)}),r.instanceMatrix.needsUpdate=!0,this.stageGroup.add(r)}_createSoaringHawks(t=0,e=26){const n=new an({color:2497040,side:fe}),i=new Xa(.11,.72,4);i.rotateX(Math.PI/2);const r=i.toNonIndexed();i.dispose(),r.deleteAttribute("uv");const o=new me;o.setAttribute("position",new Jt(new Float32Array([0,0,.16,1.22,.06,-.05,0,0,-.22]),3)),o.computeVertexNormals();const a=new me;a.setAttribute("position",new Jt(new Float32Array([0,0,.16,-1.22,.06,-.05,0,0,-.22]),3)),a.computeVertexNormals();const c=ln([r,o,a],!1);r.dispose(),o.dispose(),a.dispose(),this.hawkInst=new cn(c,n,4),this.hawkInst.frustumCulled=!1,this.stageGroup.add(this.hawkInst);for(let l=0;l<4;l++)this.hawks.push({centerX:l%2===0?-14:16,centerZ:t+(l-1.5)*38,radius:26+l*9,altitude:e+l*5,speed:.21+l*.035,phase:l*1.65})}_createGlowSpriteTexture(){const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d"),i=n.createRadialGradient(64/2,64/2,1,64/2,64/2,64/2);i.addColorStop(0,"rgba(255, 248, 220, 1.0)"),i.addColorStop(.24,"rgba(255, 186, 86, 0.78)"),i.addColorStop(.58,"rgba(235, 128, 38, 0.26)"),i.addColorStop(1,"rgba(200, 90, 20, 0.0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const r=new Ai(e);return r.colorSpace=xe,r}_buildStage1Plains(t,e){const n=this.tex.loadPBRSet("desert_wood",1,1),i=new ce({map:n.map,color:11835768}),r=this.tex.loadPBRSet("tattered_fabric",2,2),o=new ce({map:r.map,side:fe,color:13942428}),a=this.tex.loadPBRSet("sandstone_rock",2,2),c=new Ne({map:a.map,normalMap:a.normalMap,roughness:.9,vertexColors:!0,color:15128252}),l=new ce({color:15720894,side:fe}),h=new Ne({color:13739082,roughness:.35,metalness:.8}),d=-14,u=72,p=this.getHeight(d,u),g=new Pe;g.position.set(d,p,u),g.rotation.y=.38,[[-1.8,-1.3],[1.8,-1.3],[-1.8,1.3],[1.8,1.3]].forEach(([O,K])=>{const Q=new ft(new Le(.055,.07,2.4,6),i);Q.position.set(O,1.15,K),g.add(Q)});const _=new ft(new Ee(3.9,2.9,5,4),o);_.rotation.x=-Math.PI/2+.14,_.position.set(0,2.28,0),g.add(_);const m=new an({color:16739876}),f=new ft(new hs(.55,10),m);f.rotation.x=-Math.PI/2,f.position.set(.2,.05,2.4),g.add(f);const x=new Ka(16743984,2.2,7.5,1.8);x.position.set(.2,.45,2.4),g.add(x);const y=this.models.createMesh("crate",1.25);y&&(y.position.set(-.7,0,-.3),g.add(y));const v=this.models.createMesh("barrel",.72);v&&(v.position.set(1.05,0,-.5),g.add(v));const A=new ft(new Ee(.38,.28),l);A.rotation.x=-Math.PI/2,A.position.set(-.7,.56,-.3),g.add(A),this.stageGroup.add(g),this.physics.addBoxCollider(d-1.6,d+1.6,u-1.4,u+1.4,p,p+1.1,!0),t.push({type:"box",x:d,z:u,hx:2.2,hz:1.8,pad:2.2,strength:.34}),this.spatialAudioSpots.push({type:"campfire",x:d,y:p,z:u+2.2}),this.stageInteractables.push({id:"camp_clue",label:"قراءة رسالة سالم في المعسكر",worldPos:new L(d-.5,p+.8,u-.2),radius:4.5});const w=14,T=-8,R=this.getHeight(w,T),S=new Pe;S.position.set(w,R,T);const M=new ft(Ti(1.9,.7,1.5,{bottomAO:.54}),c);M.position.y=.25;const P=new ft(Ti(.95,2.75,.55,{bottomAO:.56}),c);P.position.set(0,1.85,-.15),P.rotation.z=.04;const F=new ft(new Le(.14,.14,.06,12),h);F.position.set(.15,.63,.42),S.add(M,P,F),this.stageGroup.add(S),this.sunOccluders.push(S),this.physics.addBoxCollider(w-1,w+1,T-.85,T+.85,R,R+3.2,!1),t.push({type:"box",x:w,z:T,hx:1.2,hz:1,pad:2.4,strength:.38}),e.push({x:w,z:T,sx:3.4,sz:3,ry:0}),this.stageInteractables.push({id:"sabkha_stele",label:"فحص الشاهد الحجري وساعة سالم",worldPos:new L(w,R+1.1,T+.4),radius:4.5});const B=[{x:-13.5,z:-116,sx:12.5,sy:21,sz:11.5,ry:.5},{x:21.5,z:-114,sx:13,sy:22.5,sz:12,ry:1.7},{x:-128,z:-98,sx:44,sy:28,sz:34,ry:.4},{x:122,z:-110,sx:48,sy:30,sz:38,ry:2},{x:-136,z:34,sx:46,sy:26,sz:36,ry:2.5},{x:134,z:46,sx:42,sy:25,sz:34,ry:1.1}];this._placeStratifiedMesas(B,t,1,!0);const V=[{x:-10.5,z:98,sx:2.2,sy:1.4,sz:1.8,ry:.6,type:0},{x:12,z:84,sx:2.6,sy:1.6,sz:2,ry:2,type:1},{x:-20.5,z:52,sx:3.2,sy:2,sz:2.5,ry:1.2,type:0},{x:22,z:32,sx:2.8,sy:1.7,sz:2.2,ry:.4,type:1},{x:-26,z:-22,sx:3.5,sy:2.2,sz:2.6,ry:2.5,type:0},{x:26.5,z:-42,sx:3,sy:1.9,sz:2.3,ry:1.8,type:1},{x:-15.5,z:-74,sx:3.4,sy:2.1,sz:2.5,ry:.9,type:0},{x:17.5,z:-88,sx:3.2,sy:2,sz:2.4,ry:2.3,type:1}];let q=1097;const G=()=>((q=q*16807%2147483647)-1)/2147483646;for(let O=0;O<20;O++){const K=(G()-.5)*180,Q=(G()-.5)*200;if(Math.hypot(K-d,Q-u)<8||Math.hypot(K-w,Q-T)<8||rs(K,Q)>.5)continue;const J=1.4+G()*2.4;V.push({x:K,z:Q,sx:J*1.15,sy:J*.72,sz:J*.95,ry:G()*6.28,type:O%2})}this._placeSolidBoulders(V,t,e,1);const W=[];for(let O=0;O<38;O++){const K=(G()-.5)*160,Q=(G()-.5)*200;rs(K,Q)>.35||W.push({x:K,z:Q,scale:.75+G()*.85,ry:G()*6.28})}this._placeDesertShrubs(W),this._createSoaringHawks(0,28)}_buildStage2Canyon(t,e){const n=[];for(let h=112;h>=-122;h-=20){const d=Fe(h),u=Ri(h),p=this.getHeight(d,h);n.push({x:d-u-14.5-Math.sin(h*.13)*2,z:h+3,y:p-2,sx:16+Math.abs(h)%5,sy:40+Math.abs(h)*7%12,sz:15,ry:h*.17%6.28}),n.push({x:d+u+14.5+Math.cos(h*.11)*2,z:h-4,y:p-2,sx:16.5+(Math.abs(h)+2)%5,sy:42+Math.abs(h)*5%10,sz:15.5,ry:(h*.23+1.2)%6.28})}this._placeStratifiedMesas(n,t,2,!0);const i=Fe(-14),r=[{x:i-9.5,z:-6,h:7.2,lean:.14,ry:.4},{x:i-12.2,z:-12,h:5.8,lean:.18,ry:1.5},{x:i-8.4,z:-18,h:7.6,lean:.12,ry:.9},{x:i-11.4,z:-24,h:6.2,lean:-.14,ry:2.3},{x:i+10.2,z:-8,h:6.6,lean:-.16,ry:3.1},{x:i+12.4,z:-16,h:7.4,lean:-.14,ry:2.6},{x:i+9.2,z:-24,h:5.6,lean:.16,ry:4},{x:Fe(44)+12,z:44,h:6,lean:-.14,ry:1.9},{x:Fe(-64)-11.4,z:-64,h:6.4,lean:.15,ry:.8}];this._placeDesertPalms(r,t,e),this.spatialAudioSpots.push({type:"palms",x:i,y:this.getHeight(i,-14),z:-14}),this._buildCanyonRuinsAndLandmarks(t,e);const o=[];let a=2293;const c=()=>((a=a*16807%2147483647)-1)/2147483646;for(let h=104;h>=-108;h-=11){const d=Fe(h),u=Ri(h);for(const p of[-1,1]){if(c()<.38)continue;const g=(u*.62+c()*3.8)*p,_=1.6+c()*2.2;o.push({x:d+g,z:h+(c()-.5)*4,sx:_*1.15,sy:_*.72,sz:_*.95,ry:c()*6.28,type:Math.floor(c()*2)})}}this._placeSolidBoulders(o,t,e,2);const l=[];for(let h=0;h<34;h++){const d=-108+c()*216,u=Fe(d),p=Ri(d);l.push({x:u+(c()-.5)*p*1.45,z:d,scale:.8+c()*.8,ry:c()*6.28})}this._placeDesertShrubs(l),this._createSoaringHawks(-10,36)}_buildCanyonRuinsAndLandmarks(t,e){const n=this.tex.loadPBRSet("adobe_wall",1,1),i=new Ne({map:n.map,normalMap:n.normalMap,normalScale:new yt(.55,.55),roughness:.92,vertexColors:!0,color:16049096});i.onBeforeCompile=W=>{W.fragmentShader=W.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
         float _rl = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
         diffuseColor.rgb = mix(vec3(_rl), diffuseColor.rgb, 0.55) * 1.42 + vec3(0.035, 0.025, 0.015);`)},Un(i,{saturation:.84,contrast:1.02});const r=this.tex.loadPBRSet("desert_wood",1,1),o=new ce({map:r.map,color:14204570,emissive:2233866,emissiveIntensity:.45}),a=this.tex.loadPBRSet("sandstone_rock",2,2),c=new ce({map:a.map,color:12757902}),l=new ce({color:15720894,side:fe}),h=[],d=[],u=(W,O,K,Q,J,vt=0)=>{const Rt=this.getHeight(W,O),X=1.6,et=Ti(K,Q+X,J,{bottomAO:.58,topAO:.98,cornerAO:.2,tileScale:1.4}),at=new zt().compose(new L(W,Rt+Q*.5-X*.5,O),new An().setFromEuler(new Be(0,vt,0)),new L(1,1,1));et.applyMatrix4(at),h.push(et),this.physics.addOBBCollider(W,O,K*.5,J*.5,vt,Rt-X,Rt+Q,Q<=1.45),t.push({type:"box",x:W,z:O,hx:Math.max(K,J)*.5,hz:Math.max(K,J)*.5,pad:2.4,strength:.38}),e.push({x:W,z:O,sx:K*1.35,sz:J*1.45,ry:vt})},p=(W,O,K=5.4,Q=4.1,J=0)=>{const vt=Math.cos(J),Rt=Math.sin(J),X=K*.5,et=W-X*vt,at=O+X*Rt,st=W+X*vt,bt=O-X*Rt,Tt=Math.max(this.getHeight(et,at),this.getHeight(st,bt))+Q;u(et,at,.95,Math.max(2.2,Tt-this.getHeight(et,at)),.95,J),u(st,bt,.95,Math.max(2.2,Tt-this.getHeight(st,bt)-.1),.95,J);const Ft=new le(K+1.3,.38,.76),ie=new zt().compose(new L(W,Tt-.22,O),new An().setFromEuler(new Be(0,J,-.02)),new L(1,1,1));Ft.applyMatrix4(ie),d.push(Ft)},g=Fe(42);p(g,42,5.6,4.1,.08),u(g-7.8,39.2,5.8,2.5,.68,.2),u(g+7.6,43.8,5.2,2.2,.66,-.24),u(g-9.2,46.2,.76,1.5,4.2,.1);const _=g-5.2,m=40.8,f=this.getHeight(_,m),x=new ft(new Ee(.42,.32),l);x.rotation.x=-Math.PI/2,x.position.set(_,f+.56,m),this.stageGroup.add(x),this.stageInteractables.push({id:"ruin_note",label:"قراءة مذكرة سالم في الخان",worldPos:new L(_,f+.8,m),radius:4.4});const y=Fe(-14)-4.5,v=-14,A=this.getHeight(y,v),w=new Pe;w.position.set(y,A,v);const T=new ft(new Le(1.35,1.48,1.15,12,1,!0),c);T.position.y=.52;const R=new ft(new ja(1.38,.14,6,16),c);R.rotation.x=Math.PI/2,R.position.y=1.06;const S=new ft(new hs(1.25,12),new an({color:1451046}));S.rotation.x=-Math.PI/2,S.position.y=.35;const M=this.models.createMesh("lantern",.17);M&&(M.position.set(1.18,1.12,.65),w.add(M)),w.add(T,R,S),this.stageGroup.add(w),this.physics.addCylinderCollider(y,v,1.55,A+1.5,!1),t.push({type:"circle",x:y,z:v,r:1.6,pad:2.2,strength:.36}),e.push({x:y,z:v,sx:4.2,sz:4.2,ry:0}),this.stageInteractables.push({id:"oasis_well",label:"فحص بئر الواحة والفانوس",worldPos:new L(y+1.1,A+1.25,v+.6),radius:4.5});const P=Fe(-64);p(P+.5,-64,5.2,3.9,-.14),u(P+7.6,-60.5,5.4,2.7,.68,-.18),u(P-7.4,-67,4.8,2.1,.66,.25);const F=Fe(-114);if(p(F,-114,5.8,4.4,.04),h.length){const W=new ft(ln(h,!1),i);W.castShadow=!he,W.receiveShadow=!0,h.forEach(O=>O.dispose()),this.stageGroup.add(W),this.sunOccluders.push(W)}if(d.length){const W=new ft(ln(d,!1),o);W.castShadow=!he,d.forEach(O=>O.dispose()),this.stageGroup.add(W),this.sunOccluders.push(W)}const B=this.models.getGeometry("crate"),V=this.models.getMaterial("crate");if(B&&V){const W=[[g-5.2,40.8,.3,1.28],[g+5.2,43.2,1.1,1.1],[P+5.4,-62,-.3,1.3]],O=new cn(B,V,W.length);W.forEach(([K,Q,J,vt],Rt)=>{const X=this.getHeight(K,Q);this._dummy.position.set(K,X-.05,Q),this._dummy.rotation.set(.05,J,-.04),this._dummy.scale.setScalar(vt),this._dummy.updateMatrix(),O.setMatrixAt(Rt,this._dummy.matrix),this.physics.addBoxCollider(K-.65,K+.65,Q-.5,Q+.5,X,X+.72,!0)}),O.instanceMatrix.needsUpdate=!0,this.stageGroup.add(O)}const q=this.models.getGeometry("barrel"),G=this.models.getMaterial("barrel");if(q&&G){const W=[[g+5.8,42.4,.72],[P-5.6,-65.5,.74]],O=new cn(q,G,W.length);W.forEach(([K,Q,J],vt)=>{const Rt=this.getHeight(K,Q);this._dummy.position.set(K,Rt-.06,Q),this._dummy.rotation.set(.08,vt*1.4,0),this._dummy.scale.setScalar(J),this._dummy.updateMatrix(),O.setMatrixAt(vt,this._dummy.matrix),this.physics.addCylinderCollider(K,Q,.42,Rt+1.1,!1)}),O.instanceMatrix.needsUpdate=!0,this.stageGroup.add(O)}}_buildStage3Summit(t,e){const n=this.tex.loadPBRSet("desert_wood",1,1),i=new ce({map:n.map,color:11967614}),r=this.tex.loadPBRSet("adobe_wall",1,1),o=new Ne({map:r.map,normalMap:r.normalMap,roughness:.92,vertexColors:!0,color:14864050}),a=new Ne({color:13936202,roughness:.34,metalness:.82}),c=new ce({color:15720894,side:fe}),l=ei(20)-4.8,h=20,d=this.getHeight(l,h),u=new Pe;u.position.set(l,d,h),u.rotation.y=.25;const p=new ft(Ti(3.6,2.8,.55),o);p.position.set(0,1,-1.4);const g=new ft(Ti(.55,2.4,2.8),o);g.position.set(-1.6,.8,0);const _=this.models.createMesh("crate",1.22);_&&(_.position.set(.3,0,-.5),u.add(_));const m=new ft(new Ee(.45,.34),c);m.rotation.x=-Math.PI/2,m.position.set(.3,.55,-.5),u.add(p,g,m),this.stageGroup.add(u),this.sunOccluders.push(u),this.physics.addBoxCollider(l-2,l+1.8,h-1.8,h+1.2,d-1,d+2.8,!1),t.push({type:"box",x:l,z:h,hx:2,hz:1.6,pad:2.4,strength:.38}),this.stageInteractables.push({id:"ridge_shelter",label:"قراءة خريطة النجوم في المأوى",worldPos:new L(l+.3,d+.8,h-.4),radius:4.5});const f=ei(-96),x=-96,y=this.getHeight(f,x),v=new Pe;v.position.set(f-2.2,y,x),[0,2.1,4.2].forEach(J=>{const vt=new ft(new Le(.03,.04,1.55,5),i);vt.position.set(Math.cos(J)*.32,.72,Math.sin(J)*.32),vt.rotation.z=Math.cos(J)*.34,vt.rotation.x=-Math.sin(J)*.34,v.add(vt)});const A=new ft(new Le(.055,.08,.85,10),a);A.rotation.x=Math.PI/2+.25,A.rotation.z=-.15,A.position.set(0,1.48,-.05),v.add(A),this.stageGroup.add(v),this.physics.addCylinderCollider(f-2.2,x,.55,y+1.6,!1),this.stageInteractables.push({id:"summit_spyglass",label:"النظر عبر المنظار نحو الضوء البعيد",worldPos:new L(f-2.2,y+1.45,x),radius:4.8});const w=[];let T=3407;const R=()=>((T=T*16807%2147483647)-1)/2147483646;for(let J=98;J>=-86;J-=13){const vt=ei(J),Rt=Ca(J);for(const X of[-1,1]){if(Math.abs(J-20)<12&&X===-1)continue;const et=(Rt*.72+R()*2.4)*X,at=1.5+R()*2.1;w.push({x:vt+et,z:J+(R()-.5)*4,sx:at*1.18,sy:at*.7,sz:at*.94,ry:R()*6.28,type:Math.floor(R()*2)})}}this._placeSolidBoulders(w,t,e,3);const S=f+24,M=-305,P=Ra(S,M),F=new Pe;F.position.set(S,P-.8,M);const B=new ce({color:5388589}),V=new ft(new le(17.5,9,14.5),B);V.position.y=-4.2;const q=new ft(new le(15.5,4.8,12.2),B);q.position.y=2.4;const G=new ft(new le(6,3,5),B);G.position.set(-2.4,5.8,-1.8);const W=new ft(new le(18.5,2.2,.8),B);W.position.set(0,1.1,9.8),F.add(V,q,G,W);const O=this._createGlowSpriteTexture(),K=new Va({map:O,color:16762967,transparent:!0,opacity:.96,blending:os,depthWrite:!1,fog:!1});this.beaconSprite=new Wc(K),this.beaconSprite.position.set(1.8,3.6,6.5),this.beaconSprite.scale.set(16,16,1),F.add(this.beaconSprite);const Q=new ft(new ii(1.05,8,8),new an({color:16774863,fog:!1}));Q.position.set(1.8,3.5,6.5),F.add(Q),this.stageGroup.add(F)}_buildStage4Night(t,e){this.abandonedHouse=new Km(this.stageGroup,this.tex,this.models,this.physics,this.getHeight,Jn,Fn,Qc),this.sunOccluders.push(this.abandonedHouse.group),this.stageInteractables.push(...this.abandonedHouse.getInteractables()),this.spatialAudioSpots.push(...this.abandonedHouse.lanternWorldPositions),t.push({type:"box",x:Jn,z:Fn,hx:8.4,hz:7.2,pad:3.8,strength:.4});const n=[{x:Jn-11.4,z:Fn-9,h:6.8,lean:.14,ry:.4},{x:Jn-13.4,z:Fn-6,h:5.4,lean:-.16,ry:2.1},{x:Jn+12,z:Fn-10.2,h:6.2,lean:.15,ry:1.2},{x:-16.5,z:28,h:5.8,lean:.16,ry:2.8},{x:17.5,z:-18,h:6.2,lean:-.14,ry:.9}];this._placeDesertPalms(n,t,e);const i=[{x:-12.5,z:88,sx:2.4,sy:1.5,sz:1.9,ry:.7,type:0},{x:14.5,z:54,sx:2.8,sy:1.7,sz:2.1,ry:2.2,type:1},{x:-16.5,z:18,sx:3.1,sy:1.9,sz:2.3,ry:1.1,type:0},{x:23.5,z:-8,sx:2.7,sy:1.6,sz:2,ry:.4,type:1},{x:-14.8,z:-56,sx:2.9,sy:1.8,sz:2.2,ry:1.5,type:0},{x:14.6,z:-58,sx:2.8,sy:1.7,sz:2.1,ry:2.5,type:1}];this._placeSolidBoulders(i,t,e,4),[{x:-18,z:75},{x:20,z:42},{x:-22,z:8},{x:19,z:-26},{x:-16,z:-52},{x:18,z:-56}].forEach(a=>{this.spatialAudioSpots.push({type:"cricket",x:a.x,y:this.getHeight(a.x,a.z),z:a.z})});const o=[{x:-132,z:-118,sx:44,sy:28,sz:34,ry:.5},{x:118,z:-126,sx:48,sy:30,sz:36,ry:1.8},{x:-126,z:42,sx:42,sy:25,sz:32,ry:2.3},{x:128,z:54,sx:44,sy:25,sz:34,ry:.9}];this._placeStratifiedMesas(o,t,4,!0)}_createGPUDustParticles(t){const e=Se[t],n=this._dustMaxCount,i=new me,r=new Float32Array(n*3),o=new Float32Array(n*3);for(let c=0;c<n;c++)r[c*3]=(Math.random()-.5)*44,r[c*3+1]=.25+Math.random()*3.4,r[c*3+2]=(Math.random()-.5)*44,o[c*3]=Math.random()*6.28,o[c*3+1]=.65+Math.random()*1.1,o[c*3+2]=Math.random();i.setAttribute("position",new Jt(r,3)),i.setAttribute("aSeed",new Jt(o,3)),this.dustUniforms={uTime:{value:0},uStorm:{value:this.stormIntensity},uPlayerPos:{value:new L},uColor:{value:e.dustColor.clone()},uBaseOpacity:{value:e.dustOpacity},uMap:{value:this.tex.createDustParticleTexture()}};const a=new Ge({transparent:!0,depthWrite:!1,uniforms:this.dustUniforms,vertexShader:`
        attribute vec3 aSeed;
        uniform float uTime;
        uniform float uStorm;
        uniform vec3 uPlayerPos;
        void main() {
          vec3 p = position;
          float speed = (1.6 + uStorm * 4.5) * aSeed.y;
          p.x = mod(p.x + uTime * speed - uPlayerPos.x + 22.0, 44.0) - 22.0 + uPlayerPos.x;
          p.z = mod(p.z + uTime * speed * 0.38 - uPlayerPos.z + 22.0, 44.0) - 22.0 + uPlayerPos.z;
          p.y = uPlayerPos.y - 0.3 + position.y + sin(uTime * 1.1 + aSeed.x) * 0.22;
          vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = clamp(82.0 / max(1.0, -mvPosition.z), 1.5, 11.0);
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
          float op = mix(uBaseOpacity, 0.36, uStorm);
          gl_FragColor = vec4(uColor * tex.rgb, tex.a * op);
        }
      `});this.dustPoints=new Gh(i,a),this.dustPoints.frustumCulled=!1,this.stageGroup.add(this.dustPoints)}applySettings(t){this._baseDustCount=Math.min(this._dustMaxCount,t.dustCount||150),this.dustPoints&&this.dustPoints.geometry.setDrawRange(0,this._baseDustCount)}setStormIntensity(t){if(this.stormIntensity=Math.max(0,Math.min(1,t)),this.palmStormUniform.value=this.stormIntensity,this.dustUniforms&&(this.dustUniforms.uStorm.value=this.stormIntensity),this.dustPoints){const e=Math.round(te.lerp(this._baseDustCount,this._dustMaxCount,this.stormIntensity));this.dustPoints.geometry.setDrawRange(0,e)}}getInteractableById(t){return this.stageInteractables.find(e=>e.id===t)||null}update(t,e,n,i,r=null){if(this.palmTimeUniform.value=e,this.dustUniforms&&n&&(this.dustUniforms.uTime.value=e,this.dustUniforms.uPlayerPos.value.copy(n)),this.abandonedHouse&&this.abandonedHouse.update(t,e,n),this.beaconSprite&&this.currentStageId===3){const o=.88+.14*Math.sin(e*4.8)+.08*Math.cos(e*11.3);this.beaconSprite.scale.set(16*o,16*o,1)}if(this.waypointMarker&&i)if(r){this.waypointMarker.position.set(r.x,r.y+.85,r.z);const o=i.position.distanceTo(this.waypointMarker.position);if(o<5.5)this.waypointMarker.visible=!1;else{this.waypointMarker.visible=!0,this.waypointMarker.lookAt(i.position);const a=te.clamp(.75+o*.012,.8,2.4);this.waypointMarker.scale.setScalar(a*(.92+Math.sin(e*3.4)*.1))}}else this.waypointMarker.visible=!1;if(this.hawkInst&&this.hawks.length>0&&(this._faunaAccum+=t,this._faunaAccum>=.033)){this._faunaAccum=0;const o=this._dummy;for(let a=0;a<this.hawks.length;a++){const c=this.hawks[a],l=e*c.speed+c.phase,h=c.centerX+Math.cos(l)*c.radius,d=c.centerZ+Math.sin(l)*c.radius,u=c.altitude+Math.sin(e*.7+c.phase)*1.5;o.position.set(h,u,d),o.rotation.set(0,-l,.24),o.scale.set(1,1+Math.sin(e*5+c.phase)*.15,1),o.updateMatrix(),this.hawkInst.setMatrixAt(a,o.matrix)}this.hawkInst.instanceMatrix.needsUpdate=!0}}}class Qm{constructor(t,e){this.scene=t,this.settings=e,this.intensity=0,this.targetIntensity=0,this.enabled=e.data.dustStorm!==!1,this.overlayEl=document.getElementById("dust-storm-layer"),this._lastOverlayVis=!1,this._lastOverlayOp="",this.overlayEl&&this.overlayEl.classList.add("hidden")}_setOverlayOpacity(t){if(!this.overlayEl)return;const e=t>.008;if(e!==this._lastOverlayVis&&(this._lastOverlayVis=e,this.overlayEl.classList.toggle("hidden",!e)),e){const n=t.toFixed(2);n!==this._lastOverlayOp&&(this._lastOverlayOp=n,this.overlayEl.style.opacity=n)}}applySettings(t){this.enabled=t.dustStorm!==!1,this.enabled||(this.intensity=0,this.targetIntensity=0,this._setOverlayOpacity(0))}setTargetIntensity(t,e=!1){const n=this.enabled?te.clamp(t,0,1):0;this.targetIntensity=n,e&&(this.intensity=n,this.intensity<=.01&&this._setOverlayOpacity(0))}update(t,e,n,i,r){if(!this.enabled)return this.intensity=0,this._setOverlayOpacity(0),0;const o=this.targetIntensity>this.intensity?.5:.6;if(this.intensity+=(this.targetIntensity-this.intensity)*Math.min(1,t*o),Math.abs(this.targetIntensity-this.intensity)<.002&&(this.intensity=this.targetIntensity),this.intensity>.01){const a=.85+.15*Math.sin(e*1.4);this._setOverlayOpacity(this.intensity*a*(r?.05:.24))}else this._setOverlayOpacity(0);return this.intensity}}class t0{constructor(t,e,n){this.scene=t,this.camera=e,this.audio=n,this.enabled=!1,this.nightStrength=1,this.spotLight=new Zh(16773848,0,74,Math.PI*.24,.56,1.32),this.spotLight.castShadow=!1,this.spotLight.visible=!0,this.scene.add(this.spotLight),this.scene.add(this.spotLight.target),this.spillLight=new Ka(16771268,0,10.5,1.75),this.spillLight.visible=!0,this.scene.add(this.spillLight);const i=13,r=new Le(.07,2.9,i,14,1,!0);r.translate(0,-i*.5,0),r.rotateX(Math.PI/2),this.coneUniforms={uColor:{value:new rt("#ffebc8")},uOpacity:{value:0}};const o=new Ge({transparent:!0,depthWrite:!1,side:fe,blending:os,uniforms:this.coneUniforms,vertexShader:`
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
          float fresnel = pow(abs(dot(normalize(vNormalV), normalize(vViewDir))), 2.0);
          float lengthFade = smoothstep(0.0, 0.55, vUv.y) * smoothstep(1.0, 0.85, vUv.y);
          float alpha = fresnel * lengthFade * uOpacity;
          if (alpha < 0.003) discard;
          gl_FragColor = vec4(uColor, alpha);
        }
      `});this.beamMesh=new ft(r,o),this.beamMesh.frustumCulled=!1,this.beamMesh.visible=!0,this.beamMesh.scale.setScalar(1e-4),this.beamMesh.renderOrder=7,this.scene.add(this.beamMesh),this._camDir=new L,this._camRight=new L,this._camUp=new L,this._smoothDir=new L(0,0,-1),this._targetPos=new L,this._onToggleCallbacks=new Set}onToggle(t){this._onToggleCallbacks.add(t)}setStageContext(t){this.nightStrength=t===4?1:t===3?.52:.24,this._syncLightPower()}setEnabled(t,e=!0){const n=!!t;if(this.enabled===n){this._syncLightPower();return}this.enabled=n,e&&(this.audio?.unlock(),this.audio?.playFlashlightClick(this.enabled)),this._syncLightPower();for(const i of this._onToggleCallbacks)i(this.enabled)}toggle(){this.setEnabled(!this.enabled,!0)}_syncLightPower(){const t=this.enabled,e=t&&this.nightStrength>.4;this.beamMesh.scale.setScalar(e?1:1e-4),t?(this.spotLight.intensity=28*this.nightStrength,this.spillLight.intensity=2.1*this.nightStrength,this.coneUniforms.uOpacity.value=e?.095*this.nightStrength:0):(this.spotLight.intensity=0,this.spillLight.intensity=0,this.coneUniforms.uOpacity.value=0)}update(t,e,n=!1){if(!this.enabled)return;this.camera.getWorldDirection(this._camDir),this._camRight.set(1,0,0).applyQuaternion(this.camera.quaternion),this._camUp.set(0,1,0).applyQuaternion(this.camera.quaternion),n?this._smoothDir.copy(this._camDir):this._smoothDir.lerp(this._camDir,Math.min(1,t*16)).normalize();const i=Math.sin(e*2)*.012,r=Math.cos(e*1.6)*.01;this.spotLight.position.copy(this.camera.position).addScaledVector(this._camRight,.24+i).addScaledVector(this._camUp,-.2+r).addScaledVector(this._smoothDir,.14),this._targetPos.copy(this.spotLight.position).addScaledVector(this._smoothDir,12),this.spotLight.target.position.copy(this._targetPos),this.spotLight.target.updateMatrixWorld(),this.spillLight.position.copy(this.spotLight.position).addScaledVector(this._smoothDir,.9),this.beamMesh.visible&&(this.beamMesh.position.copy(this.spotLight.position),this.beamMesh.lookAt(this._targetPos))}}class e0{constructor(t,e,n,i,r=null){this.camera=t,this.physics=e,this.audio=n,this.settings=i,this.flashlight=r,this.enabled=!1,this.position=new L(0,0,114),this.yaw=0,this.pitch=-.02,this.eyeHeight=1.72,this.walkSpeed=3.4,this.sprintSpeed=5.2,this.vy=0,this.gravity=-19.5,this.jumpVelocity=6.9,this.onGround=!0,this.isJumping=!1,this.isActuallySprinting=!1,this.currentFovBoost=0,this.isSprintingKey=!1,this.autoSprintLocked=!1,this.isInsideHouse=!1,this.currentSurface="sand",this.bobTimer=0,this.lastStepSign=0,this.boundaryWarnCooldown=0,this.onBoundaryHit=null,this.keys={},this.joyVec={x:0,y:0},this.joyBeyondRing=!1,this.joyLockHover=!1,this.joyActive=!1,this.joyTouchId=null,this.joyOrigin={x:0,y:0},this.lookTouchId=null,this.lookLast={x:0,y:0},this.mouseDragging=!1,this.pointerLocked=!1,this._targetYaw=this.yaw,this._targetPitch=this.pitch,this.focusedInteractable=null,this._forward=new L,this._right=new L,this._moveDir=new L,this._toObj=new L,this.sprintBannerEl=document.getElementById("auto-sprint-banner"),this._bindInputs()}_haptic(t=12){try{navigator.vibrate&&navigator.vibrate(t)}catch{}}setAutoSprintLock(t){this.autoSprintLocked=!!t,this.sprintBannerEl&&this.sprintBannerEl.classList.toggle("hidden",!this.autoSprintLocked)}setPose(t,e,n,i=0){const r=this.physics.getGroundInfo(t,e,0);this.position.set(t,r.groundY,e),this.currentSurface=r.surface,this.vy=0,this.onGround=!0,this.isJumping=!1,this.setAutoSprintLock(!1),this.yaw=n,this.pitch=i,this._targetYaw=n,this._targetPitch=i,this.isInsideHouse=this.physics.isInsideBuilding(this.position),this._applyCameraTransform(0,0)}triggerJump(){!this.enabled||!this.onGround||(this.audio.unlock(),this._haptic(14),this.vy=this.jumpVelocity,this.onGround=!1,this.isJumping=!0,this.audio.playFootstep(this.currentSurface,!0))}_bindInputs(){if(window.addEventListener("keydown",p=>{this.keys[p.code]=!0,(p.code==="ShiftLeft"||p.code==="ShiftRight")&&(this.isSprintingKey=!0),(p.code==="KeyS"||p.code==="ArrowDown")&&this.setAutoSprintLock(!1),p.code==="Space"&&(p.preventDefault(),this.triggerJump()),p.code==="KeyF"&&!p.repeat&&this.enabled&&this.flashlight&&this.flashlight.toggle()}),window.addEventListener("keyup",p=>{this.keys[p.code]=!1,(p.code==="ShiftLeft"||p.code==="ShiftRight")&&(this.isSprintingKey=!1)}),this.sprintBannerEl){const p=g=>{g.preventDefault(),g.stopPropagation(),this.setAutoSprintLock(!1),this._haptic(10)};this.sprintBannerEl.addEventListener("touchstart",p,{passive:!1}),this.sprintBannerEl.addEventListener("click",p)}const t=document.getElementById("btn-mobile-jump");t&&(t.addEventListener("touchstart",p=>{p.preventDefault(),p.stopPropagation(),this.triggerJump()},{passive:!1}),t.addEventListener("click",p=>{p.stopPropagation(),this.triggerJump()}));const e=document.getElementById("btn-flashlight");if(e){const p=g=>{g.preventDefault(),g.stopPropagation(),!(!this.enabled||!this.flashlight)&&(this._haptic(12),this.flashlight.toggle())};e.addEventListener("touchstart",p,{passive:!1}),e.addEventListener("click",p)}const n=document.getElementById("look-zone"),i=document.getElementById("game-canvas");if(document.addEventListener("pointerlockchange",()=>{this.pointerLocked=document.pointerLockElement===i}),window.addEventListener("mousemove",p=>{if(this.enabled&&(this.pointerLocked||this.mouseDragging)){const g=this.settings.data.sensitivity*.0022;this._targetYaw-=p.movementX*g,this._targetPitch-=p.movementY*g,this._clampPitch()}}),window.addEventListener("pointerdown",p=>{if(!(!this.enabled||p.pointerType==="touch"||p.button!==0)&&(this.audio.unlock(),this.mouseDragging=!0,p.target===i||p.target===n))try{i.requestPointerLock&&!("ontouchstart"in window)&&i.requestPointerLock()}catch{}}),window.addEventListener("pointerup",()=>{this.mouseDragging=!1}),n){n.addEventListener("touchstart",g=>{if(this.enabled){this.audio.unlock();for(const _ of g.changedTouches)if(this.lookTouchId===null){this.lookTouchId=_.identifier,this.lookLast.x=_.clientX,this.lookLast.y=_.clientY;break}}},{passive:!0}),n.addEventListener("touchmove",g=>{if(!(!this.enabled||this.lookTouchId===null)){for(const _ of g.changedTouches)if(_.identifier===this.lookTouchId){const m=_.clientX-this.lookLast.x,f=_.clientY-this.lookLast.y;this.lookLast.x=_.clientX,this.lookLast.y=_.clientY;const x=Math.hypot(m,f),y=1+Math.min(.85,x*.02),v=this.settings.data.sensitivity*.0058*y;this._targetYaw-=m*v,this._targetPitch-=f*v*.88,this._clampPitch(),g.preventDefault();break}}},{passive:!1});const p=g=>{for(const _ of g.changedTouches)if(_.identifier===this.lookTouchId){this.lookTouchId=null;break}};n.addEventListener("touchend",p,{passive:!0}),n.addEventListener("touchcancel",p,{passive:!0})}const r=document.getElementById("joystick-zone"),o=document.getElementById("joystick-float-wrap"),a=document.getElementById("joystick-base"),c=document.getElementById("joystick-knob"),l=document.getElementById("joystick-sprint-lock"),h=46,d=52,u=(p,g,_,m)=>{c&&(c.style.transform=`translate(${p.toFixed(1)}px, ${g.toFixed(1)}px)`),a&&a.classList.toggle("sprinting",_),l&&l.classList.toggle("engaged",m)};if(r&&o){r.addEventListener("touchstart",g=>{if(this.enabled){this.audio.unlock();for(const _ of g.changedTouches)if(this.joyTouchId===null){this.joyTouchId=_.identifier,this.joyActive=!0,this.joyBeyondRing=!1,this.joyLockHover=!1,this.setAutoSprintLock(!1),this.joyOrigin.x=_.clientX,this.joyOrigin.y=_.clientY,o.style.left=`${_.clientX}px`,o.style.top=`${_.clientY}px`,o.classList.remove("hidden"),u(0,0,!1,!1);break}}},{passive:!0}),r.addEventListener("touchmove",g=>{if(!(!this.enabled||this.joyTouchId===null)){for(const _ of g.changedTouches)if(_.identifier===this.joyTouchId){const m=_.clientX-this.joyOrigin.x,f=_.clientY-this.joyOrigin.y,x=Math.hypot(m,f),y=f<-36&&Math.abs(m)<Math.abs(f)*.85;this.joyBeyondRing=x>d&&y;const v=this.joyLockHover;this.joyLockHover=f<-92&&Math.abs(m)<56,this.joyLockHover&&!v&&this._haptic(16);const A=this.joyBeyondRing?56:h;let w=m,T=f;x>A&&(w=m/x*A,T=f/x*A);const R=Math.min(1,x/h),S=x>1e-4?m/x:0,M=x>1e-4?f/x:0,P=S*R,F=M*R;this.joyVec.x=Math.abs(P)<.08?0:P,this.joyVec.y=Math.abs(F)<.08?0:F,u(w,T,this.joyBeyondRing||this.joyLockHover,this.joyLockHover),g.preventDefault();break}}},{passive:!1});const p=g=>{for(const _ of g.changedTouches)if(_.identifier===this.joyTouchId){this.joyLockHover&&(this.setAutoSprintLock(!0),this._haptic(22)),this.joyTouchId=null,this.joyActive=!1,this.joyBeyondRing=!1,this.joyLockHover=!1,this.joyVec.x=0,this.joyVec.y=0,o.classList.add("hidden"),u(0,0,!1,!1);break}};r.addEventListener("touchend",p,{passive:!0}),r.addEventListener("touchcancel",p,{passive:!0})}}_clampPitch(){this._targetPitch=te.clamp(this._targetPitch,-1.32,1.32)}update(t,e,n){if(!this.enabled)return;this.boundaryWarnCooldown>0&&(this.boundaryWarnCooldown-=t);const i=Math.min(1,t*28);this.yaw+=(this._targetYaw-this.yaw)*i,this.pitch+=(this._targetPitch-this.pitch)*i;let r=0,o=0;(this.keys.KeyW||this.keys.ArrowUp)&&(r+=1),(this.keys.KeyS||this.keys.ArrowDown)&&(r-=1),(this.keys.KeyD||this.keys.ArrowRight)&&(o+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&(o-=1);let a=!1;this.joyActive?(r-=this.joyVec.y,o+=this.joyVec.x,(this.joyBeyondRing||this.joyLockHover)&&(a=!0)):this.autoSprintLocked&&(r=1,a=!0);const c=Math.min(1,Math.hypot(r,o));this.isActuallySprinting=(this.isSprintingKey||a)&&c>.3&&r>.15;const l=this.isActuallySprinting?5:0;this.currentFovBoost+=(l-this.currentFovBoost)*Math.min(1,t*6.5);const h=this.settings.data.fov+this.currentFovBoost;Math.abs(this.camera.fov-h)>.05&&(this.camera.fov=h,this.camera.updateProjectionMatrix());let d=0;if(c>.01){const m=(this.isActuallySprinting?this.sprintSpeed:this.walkSpeed)*c;d=m,this._forward.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),this._right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),this._moveDir.set(0,0,0).addScaledVector(this._forward,r).addScaledVector(this._right,o).normalize(),this.position.x+=this._moveDir.x*m*t,this.position.z+=this._moveDir.z*m*t,this.physics.resolveHorizontal(this.position,.36)&&this.boundaryWarnCooldown<=0&&this.onBoundaryHit&&(this.boundaryWarnCooldown=8,this.setAutoSprintLock(!1),this.onBoundaryHit())}const u=this.physics.getGroundInfo(this.position.x,this.position.z,this.position.y);this.currentSurface=u.surface;const p=this.position.y-u.groundY;this.isJumping||!this.onGround||p>.42?(this.onGround=!1,this.vy+=this.gravity*t,this.position.y+=this.vy*t,this.position.y<=u.groundY&&(this.position.y=u.groundY,this.vy<-3.2&&this.audio.playFootstep(this.currentSurface,!0),this.vy=0,this.onGround=!0,this.isJumping=!1)):(this.position.y+=(u.groundY-this.position.y)*Math.min(1,t*22),this.vy=0,this.onGround=!0),this.isInsideHouse=this.physics.isInsideBuilding(this.position);let g=0,_=0;if(this.onGround&&d>.3){const m=this.isActuallySprinting?9.4:6.2,f=this.isActuallySprinting?.062:.036,x=this.isActuallySprinting?.03:.018;this.bobTimer+=t*m;const y=Math.sin(this.bobTimer);g=y*f,_=Math.cos(this.bobTimer*.5)*x,y<-.82&&this.lastStepSign>=-.82&&this.audio.playFootstep(this.currentSurface,this.isActuallySprinting),this.lastStepSign=y}else this.onGround&&(g=Math.sin(e*1.35)*.01,this.lastStepSign=0);this._applyCameraTransform(_,g),this._updateActiveInteractable(n)}_applyCameraTransform(t,e){this.camera.position.set(this.position.x+Math.cos(this.yaw)*t,this.position.y+this.eyeHeight+e,this.position.z-Math.sin(this.yaw)*t),this.camera.rotation.order="YXZ",this.camera.rotation.y=this.yaw,this.camera.rotation.x=this.pitch,this.camera.rotation.z=t*(this.isActuallySprinting?-.22:-.12)}_updateActiveInteractable(t){if(!t){this.focusedInteractable=null;return}const e=this.camera.position.distanceTo(t.worldPos);if(e>t.radius){this.focusedInteractable=null;return}this.camera.getWorldDirection(this._forward),this._toObj.subVectors(t.worldPos,this.camera.position).normalize();const n=this._forward.dot(this._toObj);this.focusedInteractable=n>.45||e<2.6?t:null}}class n0{constructor(t,e,n){this.camera=t,this.stages=e,this.player=n,this.mode="title",this.timer=0,this.containerEl=document.getElementById("game-container"),this.eyelidEl=document.getElementById("eyelid-layer"),this.blurEl=document.getElementById("vision-blur-layer")}startTitleCamera(){this.mode="title",this.timer=0,this.player.enabled=!1,this._setEyelids(1),this._setBlur(0),this.containerEl?.classList.remove("cinematic-bars-active")}enterGameplay(){this.mode="gameplay",this.timer=0,this._setEyelids(1),this._setBlur(0),this.containerEl?.classList.remove("cinematic-bars-active")}_setEyelids(t){this.eyelidEl&&this.eyelidEl.style.setProperty("--eyelid-open",te.clamp(t,0,1).toFixed(3))}_setBlur(t){this.blurEl&&(this.blurEl.style.backdropFilter=t>.3?`blur(${t.toFixed(1)}px)`:"none",this.blurEl.style.webkitBackdropFilter=t>.3?`blur(${t.toFixed(1)}px)`:"none",this.blurEl.style.background="rgba(255, 246, 224, 0)")}update(t,e){if(this.timer+=t,this.mode==="title"){const n=-6+Math.sin(e*.1)*16,i=74+Math.cos(e*.08)*8,r=this.stages.getHeight(n,i);this.camera.position.set(n,r+8+Math.sin(e*.16)*.35,i),this.camera.lookAt(-2,r-1.2,-16)}}}const i0=["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];function s0(s){return String(s).replace(/\d/g,t=>i0[Number(t)])}class r0{constructor(t,e,n,i,r,o,a,c,l){this.audio=t,this.stages=e,this.player=n,this.flashlight=i,this.dustStorm=r,this.ui=o,this.renderer=a,this.scene=c,this.camera=l,this.stageId=1,this.stepIndex=0,this.transitioning=!1,this.journeyComplete=!1,this.freeRoam=!1,this.queue=[],this.activeLine=null,this.charIndex=0,this.charTimer=0,this.holdTimer=0,this.charInterval=.038,this._hudAccum=.2,this.subContainer=document.getElementById("subtitle-container"),this.subText=document.getElementById("subtitle-text"),this.transEl=document.getElementById("stage-transition-overlay"),this.transTagEl=document.getElementById("trans-stage-tag"),this.transTitleEl=document.getElementById("trans-stage-title"),this.transSubEl=document.getElementById("trans-stage-sub")}getCurrentStep(){const t=sn[this.stageId];return!t||!t.steps||this.stepIndex>=t.steps.length?null:t.steps[this.stepIndex]}getActiveInteractable(){const t=this.getCurrentStep();return!t||t.isExit?null:this.stages.getInteractableById(t.id)}getActiveTargetWorldPos(){const t=sn[this.stageId],e=this.getCurrentStep();if(!t||!e)return null;if(e.isExit){const i=this.stages.getHeight(t.goalPos.x,t.goalPos.z);return{x:t.goalPos.x,y:i+1.6,z:t.goalPos.z}}const n=this.stages.getInteractableById(e.id);return n?n.worldPos:null}async transitionToStage(t,{immediate:e=!1,showOverlay:n=!0}={}){if(this.transitioning&&!e)return;this.transitioning=!0,this.player.enabled=!1,this.player.setAutoSprintLock(!1),this.hideSubtitle(),this.queue=[],this.activeLine=null;const i=sn[t]||sn[1],r=Se[t]||Se[1];n&&!e&&this.transEl&&(this.transTagEl&&(this.transTagEl.textContent=`${i.chapterTag} • ${i.timeLabel}`),this.transTitleEl&&(this.transTitleEl.textContent=i.title),this.transSubEl&&(this.transSubEl.textContent=i.subtitle),this.transEl.classList.remove("hidden"),requestAnimationFrame(()=>this.transEl.classList.add("active")),await new Promise(a=>setTimeout(a,620))),this.stageId=i.id,this.stepIndex=0,this.journeyComplete=!1,this.stages.loadStage(i.id),this.audio.setStage(i.id,this.stages.spatialAudioSpots),e||this.audio.playStageTransition(i.id),this.dustStorm.setTargetIntensity(r.stormBase||0,!0),this.flashlight.setStageContext(i.id),this.flashlight.setEnabled(i.id===4,!1),this.ui.setFlashlightUI(i.id===4,i.id===4),this.player.setPose(i.startPos.x,i.startPos.z,i.startPos.yaw,i.startPos.pitch),this.flashlight.update(.016,0,!0),this.renderer&&this.scene&&this.camera&&this.renderer.compile(this.scene,this.camera);const o=this.getCurrentStep();if(this.ui.updateStageHUD({stageId:i.id,chapterLabel:i.chapterTag,timeLabel:i.timeLabel,sunIcon:r.sunIcon,objective:o?o.objective:"",stepIndex:this.stepIndex,totalSteps:i.steps.length}),n&&!e&&this.transEl?(await new Promise(a=>setTimeout(a,1100)),this.transEl.classList.remove("active"),await new Promise(a=>setTimeout(a,580)),this.transEl.classList.add("hidden")):this.transEl&&(this.transEl.classList.remove("active"),this.transEl.classList.add("hidden")),this.transitioning=!1,this.player.enabled=!0,!e){const a={1:"شمس الظهيرة حارقة... هناك معسكر مهجور غرب هذه الكثبان، ربما ترك أخي سالم أثراً فيه.",2:"دخلتُ وادي الصخور... أطلال الخان القديم أمامي، سأبحث فيها عن إشارة من سالم.",3:"هواء الجبل بارد والشمس تغيب... سأتفقد مأوى الراصد في منتصف الصعود أولاً.",4:"تتلألأ النجوم والمجرة فوق البيت المهجور... نور الفانوس يدلّني، سأتقدم بحذر."};this.sayImmediate(a[i.id]||"",i.id===4?"night":"thought")}}handleInteract(t){const e=this.getCurrentStep();!t||!e||e.isExit||t.id!==e.id||(this.audio.playDiscoverySFX(e.sfx||"paper"),this.ui.openDiscoveryModal(e.tag,e.title,e.body,()=>{e.whisper&&this.sayImmediate(e.whisper,this.stageId===4?"night":"thought"),this.stepIndex++;const n=sn[this.stageId],i=Se[this.stageId],r=this.getCurrentStep();this.ui.updateStageHUD({stageId:n.id,chapterLabel:n.chapterTag,timeLabel:n.timeLabel,sunIcon:i.sunIcon,objective:r?r.objective:"اكتملت الرحلة — تجول بحرية تحت النجوم",stepIndex:this.stepIndex,totalSteps:n.steps.length}),e.triggersNextStage&&this.stageId<4?setTimeout(()=>{this.transitionToStage(this.stageId+1,{immediate:!1,showOverlay:!0})},1600):e.completesJourney&&(this.journeyComplete=!0,setTimeout(()=>{this.stageId===4&&!this.freeRoam&&(this.player.enabled=!1,this.ui.showEndingScreen())},2400))}))}sayImmediate(t,e="thought"){this.queue=[],this.activeLine=null,this.enqueueLine(t,e)}enqueueLine(t,e="thought"){this.queue.push({text:t,style:e}),this.activeLine||this._startNextLine()}_startNextLine(){if(this.queue.length===0){this.activeLine=null,this.hideSubtitle();return}this.activeLine=this.queue.shift(),this.charIndex=0,this.charTimer=0,this.holdTimer=0,this.subContainer&&this.subText&&(this.subContainer.classList.remove("hidden"),this.subText.textContent="",this.subText.classList.add("typing"))}hideSubtitle(){this.subContainer&&this.subContainer.classList.add("hidden"),this.subText&&this.subText.classList.remove("typing")}update(t,e,n,i,r=0){const o=sn[this.stageId],a=this.getCurrentStep();if(this.stageId===2&&!this.transitioning){const c=.16+.08*Math.sin(e*.24);this.dustStorm.setTargetIntensity(Math.max(.1,Math.min(.28,c)),!1)}if(n&&!this.transitioning&&o&&a&&a.isExit&&i&&Math.hypot(i.x-o.goalPos.x,i.z-o.goalPos.z)<=o.goalRadius&&this.stageId<4){this.transitionToStage(this.stageId+1,{immediate:!1,showOverlay:!0});return}if(this._hudAccum+=t,this._hudAccum>=.083&&(this._hudAccum=0,n&&i)){const c=this.getActiveTargetWorldPos();if(c&&!this.journeyComplete){const l=c.x-i.x,h=c.z-i.z,d=Math.max(1,Math.round(Math.hypot(l,h))),u=Math.atan2(-l,-h);let p=r-u;for(;p>Math.PI;)p-=Math.PI*2;for(;p<-Math.PI;)p+=Math.PI*2;this.ui.updateCompass(r,p,`${s0(d)}م`)}else this.ui.updateCompass(r,null,"")}if(this.activeLine){const c=this.activeLine.text;if(this.charIndex<c.length)for(this.charTimer+=t;this.charTimer>=this.charInterval&&this.charIndex<c.length;){this.charTimer-=this.charInterval;const l=c[this.charIndex];this.charIndex++,this.subText&&(this.subText.textContent=c.slice(0,this.charIndex)),this.charIndex%2===1&&this.audio.playTextBlip(this.activeLine.style,l)}else{this.subText&&this.subText.classList.remove("typing"),this.holdTimer+=t;const l=Math.max(2.6,c.length*.044);this.holdTimer>=l&&this._startNextLine()}}}}const Gs=2.15,a0=[{deg:0,label:"ش",major:!0,cardinal:!0},{deg:15},{deg:30},{deg:45,label:"ش.ق",major:!0},{deg:60},{deg:75},{deg:90,label:"ق",major:!0,cardinal:!0},{deg:105},{deg:120},{deg:135,label:"ج.ق",major:!0},{deg:150},{deg:165},{deg:180,label:"ج",major:!0,cardinal:!0},{deg:195},{deg:210},{deg:225,label:"ج.غ",major:!0},{deg:240},{deg:255},{deg:270,label:"غ",major:!0,cardinal:!0},{deg:285},{deg:300},{deg:315,label:"ش.غ",major:!0},{deg:330},{deg:345}];class o0{constructor(t,e){this.settings=t,this.audio=e,this.fullscreenGate=document.getElementById("fullscreen-gate"),this.titleScreen=document.getElementById("title-screen"),this.hudLayer=document.getElementById("hud-layer"),this.settingsModal=document.getElementById("settings-modal"),this.controlsModal=document.getElementById("controls-modal"),this.discoveryModal=document.getElementById("discovery-modal"),this.endingScreen=document.getElementById("ending-screen"),this.portraitWarning=document.getElementById("portrait-warning"),this.compassViewport=document.getElementById("compass-viewport"),this.compassTrack=document.getElementById("compass-track"),this.compassWaypoint=document.getElementById("compass-waypoint"),this.compassDistEl=document.getElementById("compass-dist"),this.chapterLabelEl=document.getElementById("hud-chapter-label"),this.objectiveTextEl=document.getElementById("hud-objective-text"),this.stepPipsEl=document.getElementById("hud-step-pips"),this.clockEl=document.getElementById("hud-clock"),this.sunIconEl=document.getElementById("hud-sun-icon"),this.fpsEl=document.getElementById("hud-fps-counter"),this.discoveryTagEl=document.getElementById("discovery-tag"),this.discoveryTitleEl=document.getElementById("discovery-title"),this.discoveryBodyEl=document.getElementById("discovery-body"),this._discoveryCallback=null,this.isDiscoveryOpen=!1,this.reticleDot=document.getElementById("reticle-dot"),this.mobileInteractBtn=document.getElementById("btn-mobile-interact"),this.mobileInteractText=document.getElementById("mobile-interact-text"),this.flashlightBtn=document.getElementById("btn-flashlight"),this.restoreFsBtn=document.getElementById("btn-restore-fs"),this.returnTitleBtn=document.getElementById("btn-return-title"),this.onStartGame=null,this.onInteract=null,this.onPauseToggle=null,this.onDiscoveryToggle=null,this.onReturnToTitle=null,this.onFreeRoam=null,this.onReplayJourney=null,this.onSelectStage=null,this._portraitDismissed=!1,this.isModalOpen=!1,this.inGameplay=!1,this._lastCompassX=null,this._lastWpX=null,this._lastDistText="",this._lastInteractId=null,this._buildCompassTrack(),this._bindButtons(),this._bindFullscreenMonitor(),this._syncSettingsUI(),this._checkOrientation(),window.addEventListener("resize",()=>this._checkOrientation())}_buildCompassTrack(){if(!this.compassTrack)return;this.compassTrack.innerHTML="";const t=document.createDocumentFragment();for(let e=-1;e<=1;e++)for(const n of a0){const i=n.deg+e*360,r=document.createElement("span");r.className=n.cardinal?"c-tick c-cardinal":n.major?"c-tick c-inter":"c-tick c-minor",r.style.left=`${(i+360)*Gs}px`,n.label&&(r.textContent=n.label),t.appendChild(r)}this.compassTrack.appendChild(t),this.compassTrack.style.width=`${1080*Gs}px`}async enterMandatoryFullscreen(){this.audio.unlock();try{const t=document.documentElement;document.fullscreenElement||(t.requestFullscreen?await t.requestFullscreen():t.webkitRequestFullscreen&&t.webkitRequestFullscreen()),screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape").catch(()=>{})}catch{}this.fullscreenGate?.classList.remove("active"),setTimeout(()=>this.fullscreenGate?.classList.add("hidden"),360),this.showTitleScreen()}_bindFullscreenMonitor(){const t=()=>{const e=!!(document.fullscreenElement||document.webkitFullscreenElement);this.restoreFsBtn?.classList.toggle("hidden",e)};document.addEventListener("fullscreenchange",t),document.addEventListener("webkitfullscreenchange",t),this.restoreFsBtn?.addEventListener("click",()=>this.enterMandatoryFullscreen())}_bindButtons(){document.getElementById("btn-enter-fullscreen")?.addEventListener("click",()=>{this.enterMandatoryFullscreen()}),document.getElementById("btn-start-game")?.addEventListener("click",()=>{this.audio.unlock(),!document.fullscreenElement&&document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen().catch(()=>{}),this.hideTitleScreen(),this.onStartGame?.()}),document.getElementById("btn-open-settings")?.addEventListener("click",()=>{this.audio.unlock(),this.openSettings(!1)}),document.getElementById("btn-hud-pause")?.addEventListener("click",()=>{this.openSettings(!0)});const t=()=>{this.settingsModal?.classList.add("hidden"),this.isModalOpen=this.isDiscoveryOpen,this.onPauseToggle?.(!1)};document.getElementById("btn-close-settings")?.addEventListener("click",t),document.getElementById("btn-resume-from-settings")?.addEventListener("click",t),this.returnTitleBtn?.addEventListener("click",()=>{this.closeDiscoveryModal(!1),t(),this.onReturnToTitle?.()}),document.getElementById("btn-close-discovery")?.addEventListener("click",()=>{this.closeDiscoveryModal(!0)}),document.querySelectorAll("[data-jump-stage]").forEach(a=>{a.addEventListener("click",()=>{const c=Number(a.dataset.jumpStage);this.closeDiscoveryModal(!1),t(),this.endingScreen?.classList.add("hidden"),this.endingScreen?.classList.remove("active"),this.hideTitleScreen(),this.showHUD(),this.onSelectStage?.(c)})}),document.getElementById("btn-open-controls")?.addEventListener("click",()=>{this.controlsModal?.classList.remove("hidden"),this.isModalOpen=!0});const e=()=>{this.controlsModal?.classList.add("hidden"),this.isModalOpen=this.isDiscoveryOpen};document.getElementById("btn-close-controls")?.addEventListener("click",e),document.getElementById("btn-ok-controls")?.addEventListener("click",e),this.mobileInteractBtn?.addEventListener("click",a=>{a.stopPropagation(),this.onInteract?.()}),document.getElementById("btn-free-roam")?.addEventListener("click",()=>{this.endingScreen?.classList.add("hidden"),this.endingScreen?.classList.remove("active"),this.showHUD(),this.onFreeRoam?.()}),document.getElementById("btn-replay-chapter")?.addEventListener("click",()=>{this.endingScreen?.classList.add("hidden"),this.endingScreen?.classList.remove("active"),this.onReplayJourney?.()}),document.getElementById("btn-dismiss-portrait")?.addEventListener("click",()=>{this._portraitDismissed=!0,this.portraitWarning?.classList.add("hidden")}),window.addEventListener("keydown",a=>{if(this.isDiscoveryOpen){(a.code==="KeyE"||a.code==="Enter"||a.code==="Space"||a.code==="Escape")&&(a.preventDefault(),this.closeDiscoveryModal(!0));return}a.code==="KeyE"&&this.inGameplay&&!this.isModalOpen?this.onInteract?.():a.code==="Escape"&&this.inGameplay&&(this.settingsModal?.classList.contains("hidden")?this.controlsModal?.classList.contains("hidden")?this.isModalOpen||this.openSettings(!0):e():t())}),document.getElementById("opt-quality")?.querySelectorAll("button").forEach(a=>{a.addEventListener("click",()=>{this.settings.applyQualityPreset(a.dataset.val),this._syncSettingsUI()})}),document.getElementById("opt-fpscap")?.querySelectorAll("button").forEach(a=>{a.addEventListener("click",()=>{this.settings.set("fpsCap",Number(a.dataset.val)),this._syncSettingsUI()})});const r=(a,c,l,h)=>{const d=document.getElementById(a),u=document.getElementById(l);d?.addEventListener("input",()=>{const p=parseFloat(d.value);this.settings.set(c,p),u&&(u.textContent=h(p))})};r("opt-sensitivity","sensitivity","val-sensitivity",a=>`${a.toFixed(1)}x`),r("opt-resolution","resolutionScale","val-resolution",a=>`${Math.round(a*100)}%`),r("opt-fov","fov","val-fov",a=>`${Math.round(a)}°`),r("opt-volume","volume","val-volume",a=>`${Math.round(a*100)}%`);const o=(a,c)=>{const l=document.getElementById(a);l?.addEventListener("change",()=>{this.settings.set(c,l.checked),c==="showFps"&&this._updateFpsVisibility(),c==="batterySaver"&&this._syncSettingsUI()})};o("opt-battery","batterySaver"),o("opt-shadows","shadows"),o("opt-sunflare","sunFlare"),o("opt-storm","dustStorm"),o("opt-fps","showFps")}_syncSettingsUI(){const t=this.settings.data;document.querySelectorAll("#opt-quality button").forEach(i=>{i.classList.toggle("active",i.dataset.val===t.quality)}),document.querySelectorAll("#opt-fpscap button").forEach(i=>{i.classList.toggle("active",Number(i.dataset.val)===Number(t.fpsCap))});const e=(i,r,o,a)=>{const c=document.getElementById(i),l=document.getElementById(o);c&&(c.value=String(r)),l&&(l.textContent=a(r))};e("opt-sensitivity",t.sensitivity,"val-sensitivity",i=>`${i.toFixed(1)}x`),e("opt-resolution",t.resolutionScale,"val-resolution",i=>`${Math.round(i*100)}%`),e("opt-fov",t.fov,"val-fov",i=>`${Math.round(i)}°`),e("opt-volume",t.volume,"val-volume",i=>`${Math.round(i*100)}%`);const n=(i,r)=>{const o=document.getElementById(i);o&&(o.checked=!!r)};n("opt-battery",t.batterySaver),n("opt-shadows",t.shadows),n("opt-sunflare",t.sunFlare),n("opt-storm",t.dustStorm),n("opt-fps",t.showFps),this._updateFpsVisibility()}_updateFpsVisibility(){this.fpsEl?.classList.toggle("hidden",!this.settings.data.showFps)}_checkOrientation(){if(this._portraitDismissed||!this.portraitWarning)return;const t=window.innerHeight>window.innerWidth&&window.innerWidth<680;this.portraitWarning.classList.toggle("hidden",!t)}isGateActive(){return!!(this.fullscreenGate&&!this.fullscreenGate.classList.contains("hidden"))}dismissGateForDebug(){this.fullscreenGate?.classList.remove("active"),this.fullscreenGate?.classList.add("hidden")}showTitleScreen(){this.inGameplay=!1,this.closeDiscoveryModal(!1),this.hudLayer?.classList.add("hidden"),this.endingScreen?.classList.add("hidden"),this.endingScreen?.classList.remove("active"),this.titleScreen?.classList.remove("hidden"),requestAnimationFrame(()=>this.titleScreen?.classList.add("active"))}hideTitleScreen(){this.titleScreen?.classList.remove("active"),setTimeout(()=>this.titleScreen?.classList.add("hidden"),400)}showHUD(){this.inGameplay=!0,this.hudLayer?.classList.remove("hidden"),this._updateFpsVisibility()}hideHUD(){this.hudLayer?.classList.add("hidden")}openSettings(t){document.pointerLockElement&&document.exitPointerLock?.(),this._syncSettingsUI(),this.returnTitleBtn?.classList.toggle("hidden",!t),this.settingsModal?.classList.remove("hidden"),this.isModalOpen=!0,t&&this.onPauseToggle?.(!0)}openDiscoveryModal(t,e,n,i=null){document.pointerLockElement&&document.exitPointerLock?.(),this.discoveryTagEl&&(this.discoveryTagEl.textContent=t||""),this.discoveryTitleEl&&(this.discoveryTitleEl.textContent=e||""),this.discoveryBodyEl&&(this.discoveryBodyEl.textContent=n||""),this._discoveryCallback=i,this.isDiscoveryOpen=!0,this.isModalOpen=!0,this.discoveryModal?.classList.remove("hidden"),this.onDiscoveryToggle?.(!0)}closeDiscoveryModal(t=!0){if(!this.isDiscoveryOpen)return;this.isDiscoveryOpen=!1,this.discoveryModal?.classList.add("hidden"),this.isModalOpen=!this.settingsModal?.classList.contains("hidden"),this.onDiscoveryToggle?.(!1);const e=this._discoveryCallback;this._discoveryCallback=null,t&&typeof e=="function"&&e()}showEndingScreen(){this.inGameplay=!1,this.closeDiscoveryModal(!1),this.hideHUD(),this.endingScreen?.classList.remove("hidden"),requestAnimationFrame(()=>this.endingScreen?.classList.add("active"))}setFlashlightUI(t,e){this.flashlightBtn&&(this.flashlightBtn.classList.toggle("active",!!t),this.flashlightBtn.classList.toggle("night-emphasis",!!e),this.flashlightBtn.setAttribute("aria-pressed",String(!!t)))}updateStageHUD({stageId:t,chapterLabel:e,timeLabel:n,sunIcon:i,objective:r,stepIndex:o,totalSteps:a}){if(this.chapterLabelEl&&(this.chapterLabelEl.textContent=e||""),this.objectiveTextEl&&(this.objectiveTextEl.textContent=r||""),this.clockEl&&(this.clockEl.textContent=n||""),this.sunIconEl){this.sunIconEl.textContent=i||"☀";const c=t===4?"#9ec6ff":t===3?"#ff8b54":t===2?"#ffbe66":"#ffe38d";this.sunIconEl.style.color=c}if(this.stepPipsEl&&a>0){this.stepPipsEl.innerHTML="";for(let c=0;c<a;c++){const l=document.createElement("span");l.className="step-pip",c<o?l.classList.add("done"):c===o&&l.classList.add("active"),this.stepPipsEl.appendChild(l)}}}updateCompass(t,e,n){if(this.compassTrack&&this.compassViewport){const i=this.compassViewport.clientWidth||320,o=((-t*180/Math.PI%360+360)%360+360)*Gs,a=Math.round((i*.5-o)*2)*.5;a!==this._lastCompassX&&(this._lastCompassX=a,this.compassTrack.style.transform=`translate3d(${a}px, 0, 0)`)}if(this.compassWaypoint&&this.compassViewport)if(e!==null&&Number.isFinite(e)){const i=this.compassViewport.clientWidth||320,r=e*180/Math.PI,o=i*.44,a=r*Gs,c=Math.max(-o,Math.min(o,a)),l=Math.round(c*2)*.5;this.compassWaypoint.classList.remove("hidden"),this.compassWaypoint.classList.toggle("clamped-edge",Math.abs(a)>o),l!==this._lastWpX&&(this._lastWpX=l,this.compassWaypoint.style.transform=`translate3d(${l}px, 0, 0)`)}else this.compassWaypoint.classList.add("hidden");this.compassDistEl&&(n?(this._lastDistText!==n&&(this._lastDistText=n,this.compassDistEl.textContent=n),this.compassDistEl.classList.remove("hidden")):this.compassDistEl.classList.add("hidden"))}updateInteractPrompt(t){const e=t?t.id:null;if(e!==this._lastInteractId){if(this._lastInteractId=e,!t){this.reticleDot?.classList.remove("interactive"),this.mobileInteractBtn?.classList.add("hidden");return}this.reticleDot?.classList.add("interactive"),this.mobileInteractText&&(this.mobileInteractText.textContent=t.label),this.mobileInteractBtn?.classList.remove("hidden")}}updateFPS(t){this.fpsEl&&this.settings.data.showFps&&(this.fpsEl.textContent=`${Math.round(t)} FPS`)}}class c0{constructor(){this.canvas=document.getElementById("game-canvas"),this.settings=new Bm,this.audio=new Hm,this.modelManager=new Gm,this.paused=!1,this.tabHidden=!1,this.elapsed=0,this.fpsFrames=0,this.fpsAccum=0,this._lastRenderMs=0,this._renderedInitialFrame=!1,this._initRenderer(),this._bootAsync()}async _bootAsync(){await this.modelManager.preloadAll(),this._initWorld(),this._initGameplay(),this._bindSettings(),this._bindVisibilityGuard(),this._exposeDebugAPI(),window.addEventListener("resize",()=>this._onResize()),this._onResize(),this.stages.loadStage(1),this.cutscenes.startTitleCamera(),this.renderer.compile(this.scene,this.camera),requestAnimationFrame(t=>this._animate(t))}_initRenderer(){this.renderer=new Nm({canvas:this.canvas,antialias:!he,powerPreference:he?"default":"high-performance",stencil:!1}),this.renderer.outputColorSpace=xe,this.renderer.toneMapping=yc,this.renderer.toneMappingExposure=.96,this.renderer.shadowMap.enabled=!!this.settings.data.shadows,this.renderer.shadowMap.type=he?La:vc,this.scene=new Ea,this.camera=new ke(this.settings.data.fov,window.innerWidth/window.innerHeight,.14,1450)}_initWorld(){this.texManager=new Om(this.renderer),this.physics=new Xm(()=>0),this.sky=new $m(this.scene,this.renderer,this.settings),this.stages=new Jm(this.scene,this.texManager,this.modelManager,this.physics,this.sky,this.settings),this.dustStorm=new Qm(this.scene,this.settings),this.flashlight=new t0(this.scene,this.camera,this.audio)}_initGameplay(){this.player=new e0(this.camera,this.physics,this.audio,this.settings,this.flashlight),this.cutscenes=new n0(this.camera,this.stages,this.player),this.ui=new o0(this.settings,this.audio),this.journey=new r0(this.audio,this.stages,this.player,this.flashlight,this.dustStorm,this.ui,this.renderer,this.scene,this.camera),this.flashlight.onToggle(t=>{this.ui.setFlashlightUI(t,this.journey.stageId===4)}),this.player.onBoundaryHit=()=>{this.journey.sayImmediate("التضاريس هنا وعرة... سأبقى على مسار أثر القافلة.",this.journey.stageId===4?"night":"thought")},this.ui.onStartGame=async()=>{this.cutscenes.enterGameplay(),this.ui.showHUD(),await this.journey.transitionToStage(1,{immediate:!1,showOverlay:!0})},this.ui.onSelectStage=async t=>{this.cutscenes.enterGameplay(),this.ui.showHUD(),await this.journey.transitionToStage(t,{immediate:!1,showOverlay:!0})},this.ui.onInteract=()=>{if(this.player.enabled&&this.player.focusedInteractable){try{navigator.vibrate&&navigator.vibrate(15)}catch{}this.journey.handleInteract(this.player.focusedInteractable)}},this.ui.onDiscoveryToggle=t=>{this.cutscenes.mode==="gameplay"&&!this.journey.transitioning&&(this.player.enabled=!t&&!this.paused,t&&this.player.setAutoSprintLock(!1))},this.ui.onPauseToggle=t=>{this.paused=t,this.audio.setSuspended(t||this.tabHidden),this.cutscenes.mode==="gameplay"&&!this.journey.transitioning&&(this.player.enabled=!t&&!this.ui.isDiscoveryOpen)},this.ui.onReturnToTitle=()=>{this.paused=!1,this.audio.setSuspended(!1),this.player.enabled=!1,this.flashlight.setEnabled(!1,!1),this.stages.loadStage(1),this.cutscenes.startTitleCamera(),this.ui.showTitleScreen()},this.ui.onFreeRoam=()=>{this.journey.freeRoam=!0,this.cutscenes.enterGameplay(),this.player.enabled=!0,this.journey.sayImmediate("تجول بحرية تحت النجوم والمجرة حول البيت المهجور.","night")},this.ui.onReplayJourney=()=>this.ui.onStartGame()}_bindVisibilityGuard(){document.addEventListener("visibilitychange",()=>{this.tabHidden=document.hidden,this.audio.setSuspended(this.tabHidden||this.paused),this.tabHidden||(this._lastRenderMs=performance.now())})}_applyPixelRatio(){const t=this.settings.data,e=this.settings.getPreset(),n=Math.min(window.devicePixelRatio||1,e.dprCap),i=Math.max(.75,Math.min(2.25,n*t.resolutionScale));this.renderer.setPixelRatio(i)}_bindSettings(){const t=(e,n)=>{this._applyPixelRatio(),this.camera.fov=e.fov,this.camera.updateProjectionMatrix(),this.audio.setVolume(e.volume),this.texManager.setAnisotropy(n.anisotropy),this.sky.applySettings(e,n),this.stages.applySettings(n),this.dustStorm.applySettings(e,n)};t(this.settings.data,this.settings.getPreset()),this.settings.onChange(t)}_onResize(){const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1)}_animate(t){if(requestAnimationFrame(d=>this._animate(d)),this.tabHidden)return;if(this._renderedInitialFrame&&(this.paused||this.ui.isModalOpen&&!this.ui.isDiscoveryOpen||this.ui.isGateActive())){this._lastRenderMs=t;return}const i=1e3/(this.cutscenes.mode==="title"||this.ui.isDiscoveryOpen?24:this.settings.getEffectiveFpsCap());this._lastRenderMs===0&&(this._lastRenderMs=t-i);const r=t-this._lastRenderMs;if(this._renderedInitialFrame&&r<i-1.5)return;const o=Math.max(.001,r/1e3),a=Math.min(o,.055);if(this._lastRenderMs=t,this._renderedInitialFrame=!0,this.elapsed+=a,this.cutscenes.mode==="gameplay"){const d=this.journey.getActiveInteractable();this.player.update(a,this.elapsed,d),this.ui.updateInteractPrompt(this.ui.isDiscoveryOpen?null:this.player.focusedInteractable)}else this.cutscenes.update(a,this.elapsed);this.flashlight.update(a,this.elapsed,!1);const c=this.cutscenes.mode==="gameplay"?this.player.position:this.camera.position,l=this.cutscenes.mode==="gameplay"?this.player.isInsideHouse:!1,h=this.dustStorm.update(a,this.elapsed,this.camera,c,l,this.journey.stageId===2?.25:0);if(this.sky.setStormIntensity(h),this.stages.setStormIntensity(h),this.audio.setStormIntensity(h),this.sky.update(a,this.elapsed,this.camera,c,l),this.stages.update(a,this.elapsed,c,this.camera,this.cutscenes.mode==="gameplay"?this.journey.getActiveTargetWorldPos():null),this.audio.updateAmbience(a,l?1:0,this.elapsed,this.camera,c),this.journey.update(a,this.elapsed,this.cutscenes.mode==="gameplay",c,this.player.yaw),this.renderer.render(this.scene,this.camera),this.fpsFrames++,this.fpsAccum+=o,this.fpsAccum>=.85){const d=this.fpsFrames/this.fpsAccum;this.ui.updateFPS(d),this.fpsFrames=0,this.fpsAccum=0}}_exposeDebugAPI(){window.__SARAB__={loadStage:async t=>{this.ui.dismissGateForDebug(),this.ui.hideTitleScreen(),this.ui.closeDiscoveryModal(!1),this.cutscenes.enterGameplay(),this.ui.showHUD(),await this.journey.transitionToStage(t,{immediate:!0,showOverlay:!1})},teleport:(t,e,n,i=0)=>{this.ui.dismissGateForDebug(),this.ui.hideTitleScreen(),this.cutscenes.enterGameplay(),this.ui.showHUD(),this.player.enabled=!0,this.player.setPose(t,e,n,i),this.flashlight.update(.016,this.elapsed,!0),this.sky._occAccum=1},setStep:t=>{const e=sn[this.journey.stageId];if(!e)return;this.journey.stepIndex=Math.max(0,Math.min(t,e.steps.length-1));const n=this.journey.getCurrentStep();this.ui.updateStageHUD({stageId:e.id,chapterLabel:e.chapterTag,timeLabel:e.timeLabel,sunIcon:this.sky.getAtmosphere().sunIcon,objective:n?n.objective:"",stepIndex:this.journey.stepIndex,totalSteps:e.steps.length})},openCurrentClue:()=>{const t=this.journey.getActiveInteractable();t&&this.journey.handleInteract(t)},closeClue:()=>this.ui.closeDiscoveryModal(!0),setFlashlight:t=>{this.flashlight.setEnabled(!!t,!1),this.flashlight.update(.016,this.elapsed,!0),this.ui.setFlashlightUI(this.flashlight.enabled,this.journey.stageId===4)},measureFlashlightToggleMs:()=>{const t=this.flashlight.enabled,e=performance.now();this.flashlight.setEnabled(!t,!1),this.flashlight.update(.016,this.elapsed,!0),this.renderer.render(this.scene,this.camera);const n=performance.now()-e;return this.ui.setFlashlightUI(this.flashlight.enabled,this.journey.stageId===4),Number(n.toFixed(2))},getSunOcclusion:()=>{this.sky._occAccum=1,this.sky.update(.05,this.elapsed,this.camera,this.player.position,this.player.isInsideHouse);const t=new L;return this.camera.getWorldDirection(t),{occluded:this.sky._sunOccluded,sunVisibility:Number(this.sky.sunVisibility.toFixed(3)),glareAmount:Number(this.sky.glareAmount.toFixed(3)),sunDot:Number(t.dot(this.sky.sunDirection).toFixed(3)),occluderCount:this.sky._occluderMeshes.length}},getDefaults:()=>({...this.settings.data}),setStorm:t=>{this.dustStorm.setTargetIntensity(t,!0),this.sky.setStormIntensity(t,!0),this.stages.setStormIntensity(t)},triggerSubtitle:(t,e="thought")=>this.journey.sayImmediate(t,e),testCollision:()=>{let e=0,n=0;for(const i of this.physics.cylinders)for(let r=0;r<8;r++){const o=r/8*Math.PI*2,a=this.stages.getHeight(i.x,i.z),c=new L(i.x+Math.cos(o)*(i.r*.4),a,i.z+Math.sin(o)*(i.r*.4));this.physics.resolveHorizontal(c,.36);const l=Math.hypot(c.x-i.x,c.z-i.z);l<i.r+.36-.02&&(e=Math.max(e,i.r+.36-l)),n++}return{stageId:this.journey.stageId,checks:n,collidersCount:this.physics.cylinders.length+this.physics.ellipses.length+this.physics.aabbs.length+this.physics.obbs.length+this.physics.mesas.length,solid:e<.03,maxPen:Number(e.toFixed(4))}},getStats:()=>({stageId:this.journey.stageId,stepIndex:this.journey.stepIndex,walkSpeed:this.player.walkSpeed,surface:this.player.currentSurface,flashlightOn:this.flashlight.enabled,drawCalls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,geometriesInMemory:this.renderer.info.memory.geometries,texturesInMemory:this.renderer.info.memory.textures,shadowUpdates:this.sky.shadowUpdatesCount,spatialSpots:this.stages.spatialAudioSpots.length,sunOccluders:this.stages.sunOccluders.length,pos:this.player.position.toArray().map(t=>Number(t.toFixed(2))),indoor:this.player.isInsideHouse,modelsLoaded:Array.from(this.modelManager.geometries.keys())})}}}window.addEventListener("DOMContentLoaded",()=>{new c0});
