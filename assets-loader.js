async function loadAssets() {
  let assetContainers = document.querySelectorAll(".asset");
  console.log(assetContainers);
  for (const container of assetContainers) {
    const asset = container.getAttribute('data-asset');
    let data = await fetch(`/assets/${asset}`);
    assetContainers.innerHtml = data;
  }
}

loadAssets();