(function () {
    var from = new URLSearchParams(window.location.search).get("from");
    var back = document.getElementById("csBack");
    if (!back) return;
    if (from === "sidequests") {
      back.href = "../sidequests.html";
      back.setAttribute("aria-label", "Back to sidequests");
      back.innerHTML =
        '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>' +
        "Sidequests";
    }
  })();