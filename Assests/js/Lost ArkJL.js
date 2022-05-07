const collapseAllButton = document.querySelector(".top span");
const card = document.querySelector(".card");
const up = document.querySelector(".top span i");
const collapsibleListsTogglers = document.querySelectorAll(
  ".collapsible-list__title"
);
const listItemButtons = document.querySelectorAll(".collapsible-list__icon");
const progress_bar = document.querySelectorAll(".progress-bar li");

window.scrollTo(0, 0);
window.scroll({
  top: 0,
  left: 0,
  behavior: "smooth",
});

collapseAllButton.addEventListener("click", function () {
  up.classList.toggle("fa-angle-down");
  up.classList.toggle("fa-angle-up");
});

collapsibleListsTogglers.forEach((listToggler) => {
  listToggler.addEventListener("click", function () {
    const list = listToggler.closest(".collapsible-list");
    list.classList.toggle("collapsible-list--hidden");
  });
});

listItemButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const listItem = button.closest("li");
    listItem.classList.toggle("collapsible-list__item--completed");

    progress();
  });
});

function progress() {
  const checked_progress = document.querySelectorAll(".list li.list_active");
  const length = checked_progress.length;

  progress_bar.forEach(function (index) {
    index.classList.remove("active");
  });

  for (i = 0; i < length; i++) {
    progress_bar[i].classList.add("active");
  }

  const checked_tick = document.querySelector("#checked_toggle");
  if (length > 4) {
    checked_tick.classList.remove("d-none");
  } else {
    checked_tick.classList.add("d-none");
  }
}
//Retrieving data from the api
fetch(
    "https://opensheet.elk.sh/1F77UjfkB9J9qFiH1rwh45uUantZE1V3F02OaCjJIkY8/PlayerInfo"
  )
    .then((res) => res.json())
    .then((data) => {
      download(JSON.stringify(data), 'PlayerInfo.json', 'application/json');
      });

    function download(strData, strFileName, strMimeType) {
    var D = document,
        A = arguments,
        a = D.createElement("a"),
        d = A[0],
        n = A[1],
        t = A[2] || "text/plain";

    //build download link:
    // a.href = "data:" + strMimeType + "charset=utf-8," + escape(strData);


    if (window.MSBlobBuilder) { // IE10
        var bb = new MSBlobBuilder();
        bb.append(strData);
        return navigator.msSaveBlob(bb, strFileName);
    } /* end if(window.MSBlobBuilder) */



    if ('download' in a) { //FF20, CH19
        a.setAttribute("download", n);
        a.innerHTML = "downloading...";
        D.body.appendChild(a);
        setTimeout(function() {
            var e = D.createEvent("MouseEvents");
            e.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            a.dispatchEvent(e);
            D.body.removeChild(a);
        }, 66);
        return true;
    }; /* end if('download' in a) */



    //do iframe dataURL download: (older W3)
    var f = D.createElement("iframe");
    D.body.appendChild(f);
    f.src = "data:" + (A[2] ? A[2] : "application/octet-stream") + (window.btoa ? ";base64" : "") + "," + (window.btoa ? window.btoa : escape)(strData);
    setTimeout(function() {
        D.body.removeChild(f);
    }, 333);
    return true;
}