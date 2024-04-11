import{a as b,S,i as w}from"./assets/vendor-f736e62a.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function v(r,a,s,n,e){const t=E(r,a,s,n,e);try{const{data:o}=await b.get(t);return o}catch(o){throw console.error("Error fetching data:",o),o}}function E(r,a,s,n,e){const t=new URLSearchParams({key:a,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:n,per_page:e});return`${r}?${t}`}const P=new S(".gallery a",{captionsData:"alt",captionDelay:250});function F(r,a){r.insertAdjacentHTML("beforeend",$(a)),P.refresh()}function $(r){return r.map(({webformatURL:a,largeImageURL:s,tags:n,likes:e,views:t,comments:o,downloads:L})=>` <li class="gallery-item">
      <a class="gallery-link" href="${s}">
        <figure class="gallery-figure">
          <img class="gallery-image" src="${a}" alt="${n}" width="360" />
          <figcaption class="gallery-figcaption">
            <ul class="gallery-text">
              <li>
                <span>Likes</span>
                <p>${e}</p>
              </li>
              <li>
                <span>Views</span>
                <p>${t}</p>
              </li>
              <li>
                <span>Comments</span>
                <p>${o}</p>
              </li>
              <li>
                <span>Downloads</span>
                <p>${L}</p>
              </li>
            </ul>
          </figcaption>
        </figure>
      </a>
    </li>`).join(" ")}const M="/goit-js-hw-12/assets/icon-error-4f06a8ee.svg",f="43227230-2cc9b082dfeccb819f6787c2c",p="https://pixabay.com/api/",q=document.querySelector(".search-form"),h=document.querySelector(".gallery"),g=document.querySelector(".loader-wrapper"),c=document.querySelector(".load-more-btn");let i=1,u=15,m=null,d=null,C=null;q.addEventListener("submit",D);c.addEventListener("click",T);async function D(r){r.preventDefault(),h.innerHTML="",c.classList.add("is-hidden"),i=1;const a=r.currentTarget.search.value.trim();if(!a){l("Please enter a value in the field!","Error"),r.currentTarget.reset();return}g.classList.remove("is-hidden"),await y(p,f,a,i,u),r.currentTarget.reset()}async function y(r,a,s,n,e){try{const t=await v(r,a,s,n,e),o=t.hits;if(o.length===0){l("Sorry, there are no images matching your search query. Please try again!");return}m=s,d=t.totalHits,C=Math.ceil(d/e),F(h,o),c.classList.remove("is-hidden"),H()}catch(t){l("Error fetching data. Please try again later","Error"),console.error("Error fetching data:",t)}finally{g.classList.add("is-hidden")}}async function T(){const r=Math.ceil(d/u);if(i>=r){c.classList.add("is-hidden"),l("We are sorry, but you have reached the end of search results","Error");return}i++,g.classList.remove("is-hidden"),y(p,f,m,i,u)}function H(){const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}const I={position:"topRight",titleColor:"#FFF",titleSize:"16",titleLineHeight:"24",messageColor:"#FFF",messageSize:"16",messageLineHeight:"24"};function l(r,a){w.error({...I,title:a||"",message:`${r}`,backgroundColor:"#EF4040",iconUrl:M})}
//# sourceMappingURL=commonHelpers.js.map
