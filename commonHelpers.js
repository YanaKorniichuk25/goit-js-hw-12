import{a as b,S,i as w}from"./assets/vendor-f736e62a.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();async function v(r,o,s,n,e){const t=E(r,o,s,n,e);try{const{data:a}=await b.get(t);return a}catch(a){throw console.error("Error fetching data:",a),a}}function E(r,o,s,n,e){const t=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:n,per_page:e});return`${r}?${t}`}const P=new S(".gallery a",{captionsData:"alt",captionDelay:250});function F(r,o){r.insertAdjacentHTML("beforeend",$(o)),P.refresh()}function $(r){return r.map(({webformatURL:o,largeImageURL:s,tags:n,likes:e,views:t,comments:a,downloads:L})=>` <li class="gallery-item">
      <a class="gallery-link" href="${s}">
        <figure class="gallery-figure">
          <img class="gallery-image" src="${o}" alt="${n}" width="360" />
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
                <p>${a}</p>
              </li>
              <li>
                <span>Downloads</span>
                <p>${L}</p>
              </li>
            </ul>
          </figcaption>
        </figure>
      </a>
    </li>`).join(" ")}const C="/goit-js-hw-12/assets/icon-error-4f06a8ee.svg",g="43227230-2cc9b082dfeccb819f6787c2c",f="https://pixabay.com/api/",q=document.querySelector(".search-form"),p=document.querySelector(".gallery"),d=document.querySelector(".loader-wrapper "),c=document.querySelector(".load-more-btn");let i=1,u=15,h=null,m=null;q.addEventListener("submit",M);c.addEventListener("click",D);async function M(r){r.preventDefault(),p.innerHTML="",c.classList.add("is-hidden"),i=1;const o=r.currentTarget.search.value.trim();if(!o){l("Please enter a value in the field!","Error"),r.currentTarget.reset();return}d.classList.remove("is-hidden"),await y(f,g,o,i,u),r.currentTarget.reset()}async function y(r,o,s,n,e){try{const t=await v(r,o,s,n,e),a=t.hits;if(a.length===0){l("Sorry, there are no images matching your search query. Please try again!");return}h=s,m=t.totalHits,F(p,a),c.classList.remove("is-hidden"),T()}catch(t){l("Error fetching data. Please try again later","Error"),console.error("Error fetching data:",t)}finally{d.classList.add("is-hidden")}}async function D(){const r=Math.ceil(m/u);if(i>=r){c.classList.add("is-hidden"),l("We are sorry, but you have reached the end of search results","Error");return}i++,d.classList.remove("is-hidden"),y(f,g,h,i,u)}function T(){const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}const H={position:"topRight",titleColor:"#FFF",titleSize:"16",titleLineHeight:"24",messageColor:"#FFF",messageSize:"16",messageLineHeight:"24"};function l(r,o){w.error({...H,title:o||"",message:`${r}`,backgroundColor:"#EF4040",iconUrl:C})}
//# sourceMappingURL=commonHelpers.js.map
