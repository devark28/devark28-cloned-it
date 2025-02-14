async function loadAssets() {
  let assetContainers = document.querySelectorAll(".asset");
  console.log(assetContainers);
  for (const container of assetContainers) {
    const asset = container.getAttribute('data-asset');
    let data = await fetch(`/assets/${asset}`);
    let text = await data.text();

    const frg = document.createElement('div');
    frg.innerHTML = text;

    container.append(frg.querySelector('svg'));
  }
}

loadAssets();