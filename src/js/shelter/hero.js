import hoverDesktop1x from "/img/shelter/inner_child__hover_pc.webp";
import hoverDesktop2x from "/img/shelter/inner_child__hover_pc@2x.webp";
import hoverTablet1x from "/img/shelter/inner_child__hover_tablet.webp";
import hoverTablet2x from "/img/shelter/inner_child__hover_tablet@2x.webp";
import hoverMobile1x from "/img/shelter/inner_child__hover_mobile.webp";
import hoverMobile2x from "/img/shelter/inner_child__hover_mobile@2x.webp";

document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".hero-img");
  const sourceElements = wrapper.querySelectorAll("source");
  const imgElement = wrapper.querySelector("img");

  const originalSrcsets = {};
  sourceElements.forEach((source) => {
    originalSrcsets[source.media] = source.srcset;
  });
  const originalImgSrc = imgElement.src;

  const hoverPaths = {
    desktop: {
      "1x": hoverDesktop1x,
      "2x": hoverDesktop2x,
    },
    tablet: {
      "1x": hoverTablet1x,
      "2x": hoverTablet2x,
    },
    mobile: {
      "1x": hoverMobile1x,
      "2x": hoverMobile2x,
    },
  };

  wrapper.addEventListener("mouseenter", () => {
    sourceElements.forEach((source) => {
      const mediaQuery = source.media;
      let currentPath;
      if (mediaQuery.includes("1440px")) {
        currentPath = hoverPaths.desktop;
      } else if (mediaQuery.includes("700px")) {
        currentPath = hoverPaths.tablet;
      } else if (mediaQuery.includes("699px")) {
        currentPath = hoverPaths.mobile;
      }

      if (currentPath) {
        source.srcset = `${currentPath["1x"]} 1x, ${currentPath["2x"]} 2x`;
      }
    });
    imgElement.src = hoverPaths.mobile["1x"];
  });

  wrapper.addEventListener("mouseleave", () => {
    sourceElements.forEach((source) => {
      source.srcset = originalSrcsets[source.media];
    });
    imgElement.src = originalImgSrc;
  });
});
