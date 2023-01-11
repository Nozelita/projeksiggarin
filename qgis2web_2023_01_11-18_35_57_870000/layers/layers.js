var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_kecsura_1 = new ol.format.GeoJSON();
var features_kecsura_1 = format_kecsura_1.readFeatures(json_kecsura_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kecsura_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kecsura_1.addFeatures(features_kecsura_1);var lyr_kecsura_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kecsura_1, 
                style: style_kecsura_1,
    title: 'kecsura<br />\
    <img src="styles/legend/kecsura_1_0.png" /> Banjarsari<br />\
    <img src="styles/legend/kecsura_1_1.png" /> Jebres<br />\
    <img src="styles/legend/kecsura_1_2.png" /> Laweyan<br />\
    <img src="styles/legend/kecsura_1_3.png" /> Pasar Kliwon<br />\
    <img src="styles/legend/kecsura_1_4.png" /> Serengan<br />\
    <img src="styles/legend/kecsura_1_5.png" /> <br />'
        });var format_kfc_2 = new ol.format.GeoJSON();
var features_kfc_2 = format_kfc_2.readFeatures(json_kfc_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kfc_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kfc_2.addFeatures(features_kfc_2);var lyr_kfc_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kfc_2, 
                style: style_kfc_2,
                title: '<img src="styles/legend/kfc_2.png" /> kfc'
            });var format_phd_3 = new ol.format.GeoJSON();
var features_phd_3 = format_phd_3.readFeatures(json_phd_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_phd_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_phd_3.addFeatures(features_phd_3);var lyr_phd_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_phd_3, 
                style: style_phd_3,
                title: '<img src="styles/legend/phd_3.png" /> phd'
            });var format_mcd_4 = new ol.format.GeoJSON();
var features_mcd_4 = format_mcd_4.readFeatures(json_mcd_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mcd_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_mcd_4.addFeatures(features_mcd_4);var lyr_mcd_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mcd_4, 
                style: style_mcd_4,
                title: '<img src="styles/legend/mcd_4.png" /> mcd'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_kecsura_1.setVisible(true);lyr_kfc_2.setVisible(true);lyr_phd_3.setVisible(true);lyr_mcd_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_kecsura_1,lyr_kfc_2,lyr_phd_3,lyr_mcd_4];
lyr_kecsura_1.set('fieldAliases', {'id': 'id', 'nama_kec': 'nama_kec', });
lyr_kfc_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jenis': 'Jenis', 'Jam Buka': 'Jam Buka', });
lyr_phd_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jenis': 'Jenis', 'Jam Buka': 'Jam Buka', });
lyr_mcd_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jenis': 'Jenis', 'Jam Buka': 'Jam Buka', });
lyr_kecsura_1.set('fieldImages', {'id': 'TextEdit', 'nama_kec': 'TextEdit', });
lyr_kfc_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jenis': 'TextEdit', 'Jam Buka': 'TextEdit', });
lyr_phd_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jenis': 'TextEdit', 'Jam Buka': 'TextEdit', });
lyr_mcd_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jenis': 'TextEdit', 'Jam Buka': 'TextEdit', });
lyr_kecsura_1.set('fieldLabels', {'id': 'no label', 'nama_kec': 'inline label', });
lyr_kfc_2.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label', 'Jenis': 'inline label', 'Jam Buka': 'inline label', });
lyr_phd_3.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label', 'Jenis': 'inline label', 'Jam Buka': 'inline label', });
lyr_mcd_4.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label', 'Jenis': 'inline label', 'Jam Buka': 'inline label', });
lyr_mcd_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});