// ==UserScript==
// @name         Cleanup
// @namespace    https://amberjoy.dev
// @source       https://amberjoy.dev/assets/userscript.js
// @version      0.4
// @description  Remove ads/subscription/some paywall modals
// @author       Amber Joy
// @match        https://*/*
// @exclude      https://twitter.com/*
// @exclude      https://*.twitter.com/*
// @exclude      https://*.github.com/*
// @exclude      https://*.github.dev/*
// @exclude      https://*.google.com/*
// @icon         none
// @grant        none
// @run-at       document-start
// ==/UserScript==
(function () {
  "use strict";

    // WARNING! This script is a WIP, breaks
    // several pages (eg: github, twitter),
    // and still needs to be fixed.

    const elementsToRemove = [
    // Found on Github
    "[data-ad-client]",
    ".adsbygoogle",
    "[id^=google_ads]",
    "[data-google-query-id]",
    "#cookie-law-info-bar",
    ".adsbyvli",
    "[id^=invisible_high_impact]",
    ".top-ads-container",
    ".bottom-ads-container",
    ".mv-video-target",
    ".avisdiv",
    "[class^=adthrive]",
    // MINE
    "adblock-modal",
    ".c-nudge__container",
    ".c-adblocker-modal-wrap",
    ".tp-backdrop.tp-active",
    ".tp-modal",
    "#standalone-footer",
    ".fc-ab-root",
    ".pelcro-prefix-modal",
    ".Modal",
    "[id^=paywall-us]",
    "[data-qa^=overlay-container]"
  ];

  const bodyClassesToRemove = [
    "tp-modal-open",
    "with-gate",
    "has-adblock-detected",
    "pelcro-prefix-modal-open"
  ];

  const send = XMLHttpRequest.prototype.send;

  XMLHttpRequest.prototype.send = function () {
    window.addEventListener("load", function () {
      window.setTimeout(() => {
        // remove selectors by class
        document.querySelectorAll(elementsToRemove.join(", ")).forEach(e => e.remove());
        document.querySelectorAll(".xclose").forEach(e => e.parentElement.remove());

        // remove classes from body element
        bodyClassesToRemove.join(", ").forEach(e => document.body.classList.remove(e));

        // Let the page scroll
        document.querySelector("page-standard").classList.remove("article-fixed");
        document.documentElement.style.overflow = "auto";
        document.documentElement.setAttribute("style", "overflow:auto !important");
        const css = ["body, main {overflow:auto !important; position:initial !important;}"];

        if (typeof GM_addStyle != "undefined") {
          GM_addStyle(css);
        } else if (typeof PRO_addStyle != "undefined") {
          PRO_addStyle(css);
        } else if (typeof addStyle != "undefined") {
          addStyle(css);
        } else {
          var node = document.createElement("style");
          node.type = "text/css";
          node.appendChild(document.createTextNode(css));
          var heads = document.getElementsByTagName("head");
          if (heads.length > 0) {
            heads[0].appendChild(node);
          } else {
            // no head yet, stick it whereever
            document.documentElement.appendChild(node);
          }
        }
      }, 1);
    });
    return send.apply(window, arguments);
  };
})();