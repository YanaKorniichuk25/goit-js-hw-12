import{a as S,S as v,i as E}from"./assets/vendor-f736e62a.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function P(a,r,s,i,e){const t=F(a,r,s,i,e);try{const{data:o}=await S.get(t);return o}catch(o){throw console.error("Error fetching data:",o),o}}function F(a,r,s,i,e){const t=new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:i,per_page:e});return`${a}?${t}`}const $=new v(".gallery a",{captionsData:"alt",captionDelay:250});function q(a,r){a.insertAdjacentHTML("beforeend",C(r)),$.refresh()}function C(a){return a.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:o,downloads:w})=>` <li class="gallery-item">
      <a class="gallery-link" href="${s}">
        <figure class="gallery-figure">
          <img class="gallery-image" src="${r}" alt="${i}" width="360" />
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
                <p>${w}</p>
              </li>
            </ul>
          </figcaption>
        </figure>
      </a>
    </li>`).join(" ")}const M="/goit-js-hw-12/assets/icon-error-4f06a8ee.svg",f="43227230-2cc9b082dfeccb819f6787c2c",h="https://pixabay.com/api/",D=document.querySelector(".search-form"),p=document.querySelector(".gallery"),g=document.querySelector(".loader-wrapper"),l=document.querySelector(".load-more-btn");let n=1,m=15,y=null,u=null,d=null;D.addEventListener("submit",T);l.addEventListener("click",H);async function T(a){a.preventDefault(),p.innerHTML="",l.classList.add("is-hidden"),n=1;const r=a.currentTarget.search.value.trim();if(!r){c("Please enter a value in the field!","Error"),a.currentTarget.reset();return}g.classList.remove("is-hidden"),await L(h,f,r,n,m),a.currentTarget.reset()}async function L(a,r,s,i,e){try{const t=await P(a,r,s,i,e),o=t.hits;if(o.length===0){c("Sorry, there are no images matching your search query. Please try again!");return}y=s,u=t.totalHits,d=Math.ceil(u/e),q(p,o),n>=d?l.classList.add("is-hidden"):l.classList.remove("is-hidden"),b()}catch(t){c("Error fetching data. Please try again later","Error"),console.error("Error fetching data:",t)}finally{g.classList.add("is-hidden")}}async function H(){n++,g.classList.remove("is-hidden"),await L(h,f,y,n,m),b(),n===d&&(l.classList.add("is-hidden"),c(`We are sorry, but you have reached the end of search results. We have only ${u} images!`,"","#eb216e"))}function b(){const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}const I={position:"topRight",titleColor:"#FFF",titleSize:"16",titleLineHeight:"24",messageColor:"#FFF",messageSize:"16",messageLineHeight:"24"};function c(a,r,s="#EF4040"){E.error({...I,title:r||"",message:`${a}`,backgroundColor:s,iconUrl:M})}
//# sourceMappingURL=commonHelpers.js.map
