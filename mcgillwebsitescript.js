require(["esri/config","esri/views/MapView", "esri/WebMap"], (esriConfig, MapView, WebMap) => {
  esriConfig.portalUrl = "https://umn.maps.arcgis.com";
  const webmap = new WebMap({
    portalItem: {
      id: "a7ce5315fd794c49b219562f074238da"
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
});
 
