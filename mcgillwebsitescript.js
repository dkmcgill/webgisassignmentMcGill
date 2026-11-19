require([
  "esri/config",
  "esri/views/MapView",
  "esri/WebMap",
  "esri/widgets/ScaleBar",
], (esriConfig, MapView, WebMap, ScaleBar) => {
  esriConfig.portalUrl = "https://umn.maps.arcgis.com";
  const webmap = new WebMap({
    portalItem: {
      id: "a7ce5315fd794c49b219562f074238da",
    },
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv",
  });

  const scaleBar = new ScaleBar({
    view: view,
    unit: "dual",
    style: "ruler",
  });

  view.ui.add(scaleBar, {
    position: "bottom-left",
  });
});
