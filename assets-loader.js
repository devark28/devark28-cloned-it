function loadAssets() {
  let assetContainers = document.querySelectorAll(".asset");
  console.log(assetContainers);
  assetContainers.forEach((container) => {
    const asset = container.getAttribute('data-asset');
    let data = fetch(`/assets/${asset}`);
  })
}

loadAssets();