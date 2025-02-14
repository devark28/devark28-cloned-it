async function loadAssets() {
  let assetContainers = document.querySelectorAll(".asset");
  console.log(assetContainers);
  for (const container of assetContainers) {
    const asset = container.getAttribute('data-asset');
    let data = await fetch(`/assets/${asset}`);
    let data = await fetch(`/assets/${asset}`);
    console.log(data);
    assetContainers.innerHtml = data;
  }
}

loadAssets();