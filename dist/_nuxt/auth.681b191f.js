import{I as c,J as i,C as r,q as u,s as t,m as _,y as p,n as d}from"./entry.738b3ba1.js";import{_ as f}from"./threads-logo.a0990df6.js";const m=""+globalThis.__publicAssetsURL("github-logo.png"),h={class:"w-full h-screen pt-32"},x=t("div",{class:"w-full"},[t("div",{class:"w-full flex items-center justify-center gap-2.5 p-2"},[t("img",{src:f,class:"w-[35px]",alt:""}),t("span",{class:"font-bold text-2xl text-white"},"Threads")])],-1),g={class:"max-w-[350px] mx-auto px-2 text-white"},b=t("h1",{class:"text-center mb-6 mt-4"},"Login / Register",-1),w=t("div",{class:"flex items-center gap-2 justify-center"},[t("img",{src:m,class:"w-full max-w-[30px] rounded-full",alt:""}),p(" Github ")],-1),v=[w],k={__name:"auth",setup(y){const o=c(),l=i();r(()=>{if(l.value)return d("/")});const n=async a=>{const{data:s,error:e}=await o.auth.signInWithOAuth({provider:a});e&&console.log(e)};return(a,s)=>(_(),u("div",h,[x,t("div",g,[b,t("button",{class:"flex items-center justify-center gap-3 p-1.5 w-full border rounded-full text-lg font-semibold",onClick:s[0]||(s[0]=e=>n("github"))},v)])]))}};export{k as default};