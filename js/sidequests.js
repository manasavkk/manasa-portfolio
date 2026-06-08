try { localStorage.setItem("sidequestsVisited", "1"); } catch (e) {}

var PROJECTS = [
    { role:"Making",     company:"Side project name",    dates:"2024 — Present", outcome:"One line about what it is and <b>why you built it</b>.",                    thumb:"project 01", chips:["Making","DIY"],         link:"sidequests/making.html",     category:"Making" },
    { role:"Writing",    company:"Essay or blog",        dates:"2023 — Present", outcome:"A short note on <b>what you write about</b> and why it matters to you.",    thumb:"project 02", chips:["Writing","Reflection"],  link:"sidequests/writing.html",    category:"Writing" },
    { role:"Craft",      company:"A hobby",              dates:"Ongoing",        outcome:"Something you do with your hands <b>away from a screen</b>.",              thumb:"project 03", chips:["Craft","Hands-on"],      link:"sidequests/craft.html",      category:"Craft" },
    { role:"Experiment", company:"Half-finished idea",   dates:"2024",           outcome:"The fun one you keep <b>poking at on weekends</b>. No goal, no deadline.", thumb:"project 04", chips:["Experiment","Play"],     link:"sidequests/experiment.html", category:"Experiment" },
    { role:"Learning",   company:"Currently exploring",  dates:"2025 — Present", outcome:"A topic or tool you're <b>picking up right now</b>.",                     thumb:"project 05", chips:["Learning","Exploration"], link:"sidequests/learning.html",   category:"Learning" },
    { role:"Play",       company:"Just for fun",         dates:"Anytime",        outcome:"No goal, no deadline — <b>pure curiosity</b>.",                           thumb:"project 06", chips:["Play","Fun"],            link:"sidequests/play.html",       category:"Play" }
  ];

  document.getElementById("grid").innerHTML = PROJECTS.map(function(p) {
    return (
      '<a class="proj" href="' + p.link + '" data-category="' + p.category + '" aria-label="Open: ' + p.role + '">' +
        '<div class="thumb">' + p.thumb + '</div>' +
        '<div class="body">' +
          '<div class="meta"><span class="role">' + p.role + '</span><span class="dates">' + p.dates + '</span></div>' +
          '<div class="company">' + p.company + '</div>' +
          '<p class="outcome">' + p.outcome + '</p>' +
          '<ul class="chips">' + p.chips.map(function(c){ return '<li>' + c + '</li>'; }).join('') + '</ul>' +
          '<span class="readmore">Read more →</span>' +
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
