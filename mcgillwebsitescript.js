require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  const webmap = new WebMap({
    portalItem: {
      id: "a7ce5315fd794c49b219562f074238da",
      
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
});
 
