/* ============================================================
   <site-nav> — single-source navigation Web Component
   Light DOM (no Shadow DOM) so nav.css styles apply normally.
   ============================================================ */

class SiteNav extends HTMLElement {
  connectedCallback() {
    // Detect depth: case-study pages are one level deep, root pages are at /
    var inCaseStudy = window.location.pathname.indexOf("/case-study/") !== -1;
    var root = inCaseStudy ? "../" : "";

    this.innerHTML = `
<header class="nav">
  <div class="wrap">
    <button class="nav-toggle" id="navToggle" type="button" aria-expanded="false" aria-controls="navMenu" aria-label="Open menu">
      <span class="nav-toggle-icon" aria-hidden="true">
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
      </span>
    </button>
    <a class="brand" href="${root}index.html#home">Manasa</a>
    <nav class="nav-primary" id="navMenu" aria-label="Primary">
      <ul class="nav-links" id="navLinks">
        <li><a href="${root}index.html#work" data-spy="work">Highlights</a></li>
        <li><a href="${root}work.html">All Work</a></li>
        <li><a href="${root}index.html#skills" data-spy="skills">Skills</a></li>
        <li><a href="${root}index.html#about" data-spy="about">About</a></li>
        <li><a href="${root}index.html#contact" data-spy="contact">Contact</a></li>
      </ul>
    </nav>
    <div class="nav-right">
      <a class="btn-resume" id="resumeBtn" href="${root}Manasa_PM_Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open résumé (PDF)">Résumé</a>
      <a class="icon-btn" href="https://www.linkedin.com/in/manasavk" aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3V9zm6 0h3.8v1.7h.05c.53-1 1.82-2.05 3.75-2.05C20.4 8.65 22 10.6 22 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2 0-2.3 1.56-2.3 3.2V21H9V9z"/></svg>
      </a>
      <a class="icon-btn" href="https://www.github.com/manasalearnscoding" aria-label="GitHub profile" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 1.8a10.2 10.2 0 00-3.22 19.88c.5.1.69-.22.69-.48v-1.7c-2.83.62-3.43-1.36-3.43-1.36-.46-1.18-1.13-1.5-1.13-1.5-.93-.63.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05.91 1.56 2.39 1.11 2.97.85.09-.66.36-1.11.64-1.36-2.26-.26-4.64-1.13-4.64-5.03 0-1.11.4-2.02 1.05-2.73-.11-.26-.46-1.3.1-2.7 0 0 .85-.27 2.8 1.04a9.7 9.7 0 015.1 0c1.95-1.31 2.8-1.04 2.8-1.04.56 1.4.21 2.44.1 2.7.65.71 1.05 1.62 1.05 2.73 0 3.91-2.38 4.77-4.65 5.02.37.32.69.94.69 1.9v2.82c0 .27.18.59.7.48A10.2 10.2 0 0012 1.8z"/></svg>
      </a>
      <a class="icon-btn" href="https://x.com/manasavkk" aria-label="X (Twitter) profile" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.988l4.27 5.648 4.736-5.648zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </a>
    </div>
  </div>
  <div class="nav-backdrop" id="navBackdrop" hidden></div>
</header>`;
  }
}

customElements.define("site-nav", SiteNav);
