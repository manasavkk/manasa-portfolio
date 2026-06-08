var PROJECTS = [
    { role:"Undergraduate AI Research Assistant", company:"CLIP Lab, UMIACS — University of Maryland", dates:"Feb 2025 – Jan 2026", outcome:"Traced model internals with mechanistic interpretability and co-authored a paper proposing <b>jailbreak testing as a practical AI safety benchmark</b>.", thumb:"images/work/clip-lab/cover.jpg", chips:["Mechanistic Interpretability","Causal Tracing","AI Safety","Jailbreak Testing"], link:"case-study/clip-lab.html", category:"Product" },
    { role:"Market Risk IT Intern",               company:"Nomura Securities International",           dates:"June – Aug 2025",     outcome:"Shipped a proof-of-concept What-If tool pipeline by integrating third-party Python APIs into a Java OLAP system. <b>Wrote the spec and built the solution in 10 weeks.</b>", thumb:"images/work/nomura/cover.jpg", chips:["Java Spring","Python APIs","Technical Spec","OLAP Systems"], link:"case-study/nomura.html", category:"Product" },
    { role:"Sourcing Team",                       company:"Hack4Impact — University of Maryland",      dates:"Sep 2025 – Present",  outcome:"Cold-outreached ~50 DMV-area nonprofits and translated pain points into PRDs <b>complete with user personas and prioritized MVP requirements</b>.", thumb:"images/work/hack4impact/cover.jpg", chips:["Customer Discovery","Cold Outreach","PRD Writing","User Personas"], link:"case-study/hack4impact.html", category:"UX / Research" },
    { role:"🏆 First Place — TechTurnUp × UXTerps × Hack4Impact", company:"University of Maryland", dates:"March 2026", outcome:"In 72 hours: 20+ stakeholder interviews, DVF analysis, design system, full prototype for CrewCreate. <b>Won first place — currently under client review.</b>", thumb:"images/work/crewcreate/cover.jpg", chips:["Figma","DVF Framework","User Research","Design Systems","Zero-to-One"], link:"case-study/crewcreate.html", category:"Visual" }
  ];

  document.getElementById("grid").innerHTML = PROJECTS.map(function(p) {
    return (
      '<a class="proj" href="' + p.link + '" data-category="' + p.category + '" aria-label="Open case study: ' + p.role + ' at ' + p.company + '">' +
        '<div class="thumb">' + (p.thumb ? '<img src="' + p.thumb + '" alt="' + p.role + '" loading="lazy" />' : '') + '</div>' +
        '<div class="body">' +
          '<div class="meta"><span class="role">' + p.role + '</span><span class="dates">' + p.dates + '</span></div>' +
          '<div class="company">' + p.company + '</div>' +
          '<p class="outcome">' + p.outcome + '</p>' +
          '<ul class="chips">' + p.chips.map(function(c){ return '<li>' + c + '</li>'; }).join('') + '</ul>' +
          '<span class="readmore">Read case study →</span>' +
        '</div>' +
      '</a>'
    );
  }).join("");

  document.querySelectorAll(".filters button").forEach(function(b) {
    b.addEventListener("click", function() {
      document.querySelectorAll(".filters button").forEach(function(x){ x.setAttribute("aria-pressed","false"); });
      b.setAttribute("aria-pressed","true");
      var filter = b.textContent.trim();
      document.querySelectorAll(".proj").forEach(function(card) {
        if (filter === "All" || card.dataset.category === filter) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });