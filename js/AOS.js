AOS.init();

document.addEventListener("aos:in", ({ detail }) => {
    console.log("animated in", detail);
});
