document.addEventListener("DOMContentLoaded", () => {
  const wrappers = document.querySelectorAll(".hero-img");

  wrappers.forEach((wrapper) => {
    const imgElement = wrapper.querySelector("img");
    const sourceElements = wrapper.querySelectorAll("source");

    const originalSources = Array.from(sourceElements).map((source) => ({
      media: source.media,
      srcset: source.srcset,
    }));
    const originalImgSrc = imgElement.src;

    const hoverPaths = {
      desktop: {
        "1x": wrapper.dataset.hoverDesktop1x,
        "2x": wrapper.dataset.hoverDesktop2x,
      },
      tablet: {
        "1x": wrapper.dataset.hoverTablet1x,
        "2x": wrapper.dataset.hoverTablet2x,
      },
      mobile: {
        "1x": wrapper.dataset.hoverMobile1x,
        "2x": wrapper.dataset.hoverMobile2x,
      },
    };

    const updateSrcset = (source, type) => {
      if (source && hoverPaths[type]) {
        source.srcset = `.${hoverPaths[type]["1x"]} 1x, .${hoverPaths[type]["2x"]} 2x`;
      }
    };

    const restoreSrcset = (source, original) => {
      if (source && original) {
        source.srcset = original.srcset;
      }
    };

    wrapper.addEventListener("mouseenter", () => {
      sourceElements.forEach((source) => {
        const mediaQuery = source.getAttribute("media");
        if (mediaQuery.includes("min-width: 1440px")) {
          updateSrcset(source, "desktop");
        } else if (mediaQuery.includes("min-width: 700px")) {
          updateSrcset(source, "tablet");
        } else if (mediaQuery.includes("max-width: 699px")) {
          updateSrcset(source, "mobile");
        }
      });
      imgElement.src = hoverPaths.mobile["1x"];
    });

    wrapper.addEventListener("mouseleave", () => {
      sourceElements.forEach((source, index) => {
        restoreSrcset(source, originalSources[index]);
      });
      imgElement.src = originalImgSrc;
    });
  });
});
