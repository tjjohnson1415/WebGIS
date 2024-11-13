require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  const webmap = new WebMap({
    portalItem: {
      id: "aa29b62cb28f4d8e94ce3331312b5a8b"
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
});