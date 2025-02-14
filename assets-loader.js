async function loadAssets() {
  let assetContainers = document.querySelectorAll(".asset");
  console.log(assetContainers);
  for (const container of assetContainers) {
    const asset = container.getAttribute('data-asset');
    const asset_class = container.getAttribute('data-asset-class');
    let data = await fetch(`/assets/${asset}`);
    let text = await data.text();

    const frg = document.createElement('div');
    frg.innerHTML = text;
    frg.querySelector('svg').setAttribute('class', )

    container.append(frg.querySelector('svg'));
  }
}

loadAssets();