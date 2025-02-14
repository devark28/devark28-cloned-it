async function loadAssets() {
  let assetContainers = document.querySelectorAll(".asset");
  console.log(assetContainers);
  for (const container of assetContainers) {
    const asset = container.getAttribute('data-asset');
    let data = await fetch(`/assets/${asset}`);
    let text = await data.text();
    console.log(text);
    const frg = document.createElement('');
    frg.innerHTML = text;
    container.append(frg);
  }
}

loadAssets();