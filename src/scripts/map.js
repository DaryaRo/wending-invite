createMap();
const LOCATION = {
    center: [44.727154, 48.792781],
    zoom: 16
}

async function createMap() {
    await ymaps3.ready;
    const {
        YMap,
        YMapDefaultSchemeLayer,
        YMapDefaultFeaturesLayer,
        YMapControls,
        YMapMarker,
    } = ymaps3;

    const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');
    const {YMapOpenMapsButton} = await ymaps3.import('@yandex/ymaps3-controls-extra');
    const {YMapDefaultMarker} = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');

    // Создание карты.
    const map = new YMap(document.getElementById('map'), { location: LOCATION });
    map.addChild(scheme = new YMapDefaultSchemeLayer());
    map.addChild(new YMapDefaultFeaturesLayer());

    map.addChild(new YMapDefaultMarker({coordinates: LOCATION.center}));
    map.addChild(new YMapControls({position: 'right'}).addChild(new YMapZoomControl({})));
    map.addChild(new YMapControls({position: 'bottom left'}).addChild(new YMapOpenMapsButton({})));
}