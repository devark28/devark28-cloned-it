function loadAssets() {
  let assetContainers = document.querySelectorAll(".asset");
  console.log(assetContainers);
  assetContainers.forEach(async (container) => {
    const asset = container.getAttribute('data-asset');
    let data = await fetch(`/assets/${asset}`);
  })
}

loadAssets();