var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Satellite_1 = new ol.layer.Tile({
            'title': 'Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_AreaLayanan_2 = new ol.format.GeoJSON();
var features_AreaLayanan_2 = format_AreaLayanan_2.readFeatures(json_AreaLayanan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaLayanan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaLayanan_2.addFeatures(features_AreaLayanan_2);
var lyr_AreaLayanan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaLayanan_2, 
                style: style_AreaLayanan_2,
                popuplayertitle: 'Area Layanan',
                interactive: true,
                title: '<img src="styles/legend/AreaLayanan_2.png" /> Area Layanan'
            });
var format_Jalan_3 = new ol.format.GeoJSON();
var features_Jalan_3 = format_Jalan_3.readFeatures(json_Jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_3.addFeatures(features_Jalan_3);
var lyr_Jalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_3, 
                style: style_Jalan_3,
                popuplayertitle: 'Jalan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_3.png" /> Jalan'
            });
var format_SaluranEksisting_4 = new ol.format.GeoJSON();
var features_SaluranEksisting_4 = format_SaluranEksisting_4.readFeatures(json_SaluranEksisting_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaluranEksisting_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaluranEksisting_4.addFeatures(features_SaluranEksisting_4);
var lyr_SaluranEksisting_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaluranEksisting_4, 
                style: style_SaluranEksisting_4,
                popuplayertitle: 'Saluran Eksisting',
                interactive: true,
                title: '<img src="styles/legend/SaluranEksisting_4.png" /> Saluran Eksisting'
            });
var format_SaluranIrigasi_5 = new ol.format.GeoJSON();
var features_SaluranIrigasi_5 = format_SaluranIrigasi_5.readFeatures(json_SaluranIrigasi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaluranIrigasi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaluranIrigasi_5.addFeatures(features_SaluranIrigasi_5);
var lyr_SaluranIrigasi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaluranIrigasi_5, 
                style: style_SaluranIrigasi_5,
                popuplayertitle: 'Saluran Irigasi',
                interactive: true,
                title: '<img src="styles/legend/SaluranIrigasi_5.png" /> Saluran Irigasi'
            });
var format_Sungai_6 = new ol.format.GeoJSON();
var features_Sungai_6 = format_Sungai_6.readFeatures(json_Sungai_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_6.addFeatures(features_Sungai_6);
var lyr_Sungai_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_6, 
                style: style_Sungai_6,
                popuplayertitle: 'Sungai',
                interactive: true,
                title: '<img src="styles/legend/Sungai_6.png" /> Sungai'
            });
var format_SaluranPrimerPideksoKiri_7 = new ol.format.GeoJSON();
var features_SaluranPrimerPideksoKiri_7 = format_SaluranPrimerPideksoKiri_7.readFeatures(json_SaluranPrimerPideksoKiri_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaluranPrimerPideksoKiri_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaluranPrimerPideksoKiri_7.addFeatures(features_SaluranPrimerPideksoKiri_7);
var lyr_SaluranPrimerPideksoKiri_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaluranPrimerPideksoKiri_7, 
                style: style_SaluranPrimerPideksoKiri_7,
                popuplayertitle: 'Saluran Primer Pidekso Kiri',
                interactive: true,
    title: 'Saluran Primer Pidekso Kiri<br />\
    <img src="styles/legend/SaluranPrimerPideksoKiri_7_0.png" /> Saluran Tegak<br />\
    <img src="styles/legend/SaluranPrimerPideksoKiri_7_1.png" /> Saluran Tertutup<br />\
    <img src="styles/legend/SaluranPrimerPideksoKiri_7_2.png" /> Saluran Trapesium<br />' });
var format_Goronggorongsilang_8 = new ol.format.GeoJSON();
var features_Goronggorongsilang_8 = format_Goronggorongsilang_8.readFeatures(json_Goronggorongsilang_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Goronggorongsilang_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Goronggorongsilang_8.addFeatures(features_Goronggorongsilang_8);
var lyr_Goronggorongsilang_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Goronggorongsilang_8, 
                style: style_Goronggorongsilang_8,
                popuplayertitle: 'Gorong-gorong silang',
                interactive: true,
                title: '<img src="styles/legend/Goronggorongsilang_8.png" /> Gorong-gorong silang'
            });
var format_Goronggorong_9 = new ol.format.GeoJSON();
var features_Goronggorong_9 = format_Goronggorong_9.readFeatures(json_Goronggorong_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Goronggorong_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Goronggorong_9.addFeatures(features_Goronggorong_9);
var lyr_Goronggorong_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Goronggorong_9, 
                style: style_Goronggorong_9,
                popuplayertitle: 'Gorong-gorong',
                interactive: true,
                title: '<img src="styles/legend/Goronggorong_9.png" /> Gorong-gorong'
            });
var format_BangunanCorongan_10 = new ol.format.GeoJSON();
var features_BangunanCorongan_10 = format_BangunanCorongan_10.readFeatures(json_BangunanCorongan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BangunanCorongan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangunanCorongan_10.addFeatures(features_BangunanCorongan_10);
var lyr_BangunanCorongan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BangunanCorongan_10, 
                style: style_BangunanCorongan_10,
                popuplayertitle: 'Bangunan Corongan',
                interactive: true,
                title: '<img src="styles/legend/BangunanCorongan_10.png" /> Bangunan Corongan'
            });
var format_BangunanUkur_11 = new ol.format.GeoJSON();
var features_BangunanUkur_11 = format_BangunanUkur_11.readFeatures(json_BangunanUkur_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BangunanUkur_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangunanUkur_11.addFeatures(features_BangunanUkur_11);
var lyr_BangunanUkur_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BangunanUkur_11, 
                style: style_BangunanUkur_11,
                popuplayertitle: 'Bangunan Ukur',
                interactive: true,
                title: '<img src="styles/legend/BangunanUkur_11.png" /> Bangunan Ukur'
            });
var format_BangunanTalang_12 = new ol.format.GeoJSON();
var features_BangunanTalang_12 = format_BangunanTalang_12.readFeatures(json_BangunanTalang_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BangunanTalang_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangunanTalang_12.addFeatures(features_BangunanTalang_12);
var lyr_BangunanTalang_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BangunanTalang_12, 
                style: style_BangunanTalang_12,
                popuplayertitle: 'Bangunan Talang',
                interactive: true,
                title: '<img src="styles/legend/BangunanTalang_12.png" /> Bangunan Talang'
            });
var format_BangunanSadap_13 = new ol.format.GeoJSON();
var features_BangunanSadap_13 = format_BangunanSadap_13.readFeatures(json_BangunanSadap_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BangunanSadap_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BangunanSadap_13.addFeatures(features_BangunanSadap_13);
var lyr_BangunanSadap_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BangunanSadap_13, 
                style: style_BangunanSadap_13,
                popuplayertitle: 'Bangunan Sadap',
                interactive: true,
                title: '<img src="styles/legend/BangunanSadap_13.png" /> Bangunan Sadap'
            });
var format_TitikAcuan_14 = new ol.format.GeoJSON();
var features_TitikAcuan_14 = format_TitikAcuan_14.readFeatures(json_TitikAcuan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikAcuan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikAcuan_14.addFeatures(features_TitikAcuan_14);
var lyr_TitikAcuan_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikAcuan_14, 
                style: style_TitikAcuan_14,
                popuplayertitle: 'Titik Acuan',
                interactive: true,
    title: 'Titik Acuan<br />\
    <img src="styles/legend/TitikAcuan_14_0.png" /> BM<br />\
    <img src="styles/legend/TitikAcuan_14_1.png" /> Pengikat<br />' });
var group_Bangunan = new ol.layer.Group({
                                layers: [lyr_Goronggorongsilang_8,lyr_Goronggorong_9,lyr_BangunanCorongan_10,lyr_BangunanUkur_11,lyr_BangunanTalang_12,lyr_BangunanSadap_13,],
                                fold: 'open',
                                title: 'Bangunan'});
var group_Saluran = new ol.layer.Group({
                                layers: [lyr_SaluranEksisting_4,lyr_SaluranIrigasi_5,lyr_Sungai_6,lyr_SaluranPrimerPideksoKiri_7,],
                                fold: 'open',
                                title: 'Saluran'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Satellite_1.setVisible(true);lyr_AreaLayanan_2.setVisible(true);lyr_Jalan_3.setVisible(true);lyr_SaluranEksisting_4.setVisible(true);lyr_SaluranIrigasi_5.setVisible(true);lyr_Sungai_6.setVisible(true);lyr_SaluranPrimerPideksoKiri_7.setVisible(true);lyr_Goronggorongsilang_8.setVisible(true);lyr_Goronggorong_9.setVisible(true);lyr_BangunanCorongan_10.setVisible(true);lyr_BangunanUkur_11.setVisible(true);lyr_BangunanTalang_12.setVisible(true);lyr_BangunanSadap_13.setVisible(true);lyr_TitikAcuan_14.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Satellite_1,lyr_AreaLayanan_2,lyr_Jalan_3,group_Saluran,group_Bangunan,lyr_TitikAcuan_14];
lyr_AreaLayanan_2.set('fieldAliases', {'Id': 'Id', 'AREA_DI': 'Area DI', 'LUAS__HA_': 'Luas (ha)', 'SUMBER_AIR': 'Sumber Air', 'KETERANGAN': 'Pengambilan', 'KET__TAMBA': 'Ket Tambahan', });
lyr_Jalan_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'import': 'import', 'surface': 'surface', 'ref': 'ref', 'oneway': 'oneway', 'name': 'name', 'lanes': 'lanes', 'layer': 'layer', 'bridge': 'bridge', });
lyr_SaluranEksisting_4.set('fieldAliases', {'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'ELEVATION': 'ELEVATION', 'Saluran': 'Saluran', });
lyr_SaluranIrigasi_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nama_Unsur': 'Nama_Unsur', 'Nama_Objek': 'Nama_Objek', 'Shape_Leng': 'Shape_Leng', });
lyr_Sungai_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nama_Unsur': 'Nama_Unsur', 'Nama_Objek': 'Nama_Objek', 'Shape_Leng': 'Shape_Leng', });
lyr_SaluranPrimerPideksoKiri_7.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Tipikal': 'Tipikal', 'Nama': 'Nama', 'Panjang': 'Panjang', 'H': 'H', 'B': 'B', 'Ruas (km)': 'Panjang Ruas (km)', 'Patok': 'Patok', 'URL': 'Foto', });
lyr_Goronggorongsilang_8.set('fieldAliases', {'id': 'id', 'Bangunan': 'Bangunan', 'Nama': 'Nama', 'km': 'km', });
lyr_Goronggorong_9.set('fieldAliases', {'id': 'id', 'Bangunan': 'Bangunan', 'Nama': 'Nama', 'km': 'km', 'Panjang (m': 'Panjang (m)', 'B (m)': 'B (m)', 'H (m)': 'H (m)', });
lyr_BangunanCorongan_10.set('fieldAliases', {'id': 'id', 'Bangunan': 'Bangunan', 'Nama': 'Nama', 'km': 'km', 'B Pintu': 'B Pintu', 'h pintu': 'H Pintu', 'Q (lt/dt)': 'Debit (lt/dt)', 'A (km)': 'Area (km)', });
lyr_BangunanUkur_11.set('fieldAliases', {'id': 'id', 'Bangunan': 'Bangunan', 'Nama': 'Nama', 'km': 'km', });
lyr_BangunanTalang_12.set('fieldAliases', {'id': 'id', 'Bangunan': 'Bangunan', 'Nama': 'Nama', 'km': 'km', 'Panjang (m': 'Panjang (m)', 'B (m)': 'B (m)', 'H (m)': 'H (m)', 'URL': 'Foto', });
lyr_BangunanSadap_13.set('fieldAliases', {'id': 'id', 'Bangunan': 'Bangunan', 'Nama': 'Nama', 'km': 'km', 'Q (lt/dt)': 'Debit (lt/dt)', 'A (ha)': 'Area (ha)', 'BP Menerus': 'B Pintu Menerus', 'BP Pengamb': 'B Pintu Pengambil', 'H Menerus': 'H Menerus', 'H Pengambi': 'H Pengambi', 'URL': 'Foto', });
lyr_TitikAcuan_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nama': 'Nama', 'Elevasi': 'Elevasi', 'Keterangan': 'Keterangan', 'X_': 'X', 'Y_': 'Y', });
lyr_AreaLayanan_2.set('fieldImages', {'Id': 'Range', 'AREA_DI': 'TextEdit', 'LUAS__HA_': 'TextEdit', 'SUMBER_AIR': 'TextEdit', 'KETERANGAN': 'TextEdit', 'KET__TAMBA': 'TextEdit', });
lyr_Jalan_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'import': 'TextEdit', 'surface': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'lanes': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', });
lyr_SaluranEksisting_4.set('fieldImages', {'LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'ELEVATION': 'TextEdit', 'Saluran': 'TextEdit', });
lyr_SaluranIrigasi_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nama_Unsur': 'TextEdit', 'Nama_Objek': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Sungai_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nama_Unsur': 'TextEdit', 'Nama_Objek': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_SaluranPrimerPideksoKiri_7.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'Tipikal': 'TextEdit', 'Nama': 'TextEdit', 'Panjang': 'TextEdit', 'H': 'TextEdit', 'B': 'TextEdit', 'Ruas (km)': 'TextEdit', 'Patok': 'TextEdit', 'URL': 'ExternalResource', });
lyr_Goronggorongsilang_8.set('fieldImages', {'id': 'TextEdit', 'Bangunan': 'TextEdit', 'Nama': 'TextEdit', 'km': 'TextEdit', });
lyr_Goronggorong_9.set('fieldImages', {'id': 'TextEdit', 'Bangunan': 'TextEdit', 'Nama': 'TextEdit', 'km': 'TextEdit', 'Panjang (m': 'TextEdit', 'B (m)': 'TextEdit', 'H (m)': 'TextEdit', });
lyr_BangunanCorongan_10.set('fieldImages', {'id': 'TextEdit', 'Bangunan': 'TextEdit', 'Nama': 'TextEdit', 'km': 'TextEdit', 'B Pintu': 'TextEdit', 'h pintu': 'TextEdit', 'Q (lt/dt)': 'TextEdit', 'A (km)': 'TextEdit', });
lyr_BangunanUkur_11.set('fieldImages', {'id': 'TextEdit', 'Bangunan': 'TextEdit', 'Nama': 'TextEdit', 'km': 'TextEdit', });
lyr_BangunanTalang_12.set('fieldImages', {'id': 'TextEdit', 'Bangunan': 'TextEdit', 'Nama': 'TextEdit', 'km': 'TextEdit', 'Panjang (m': 'TextEdit', 'B (m)': 'TextEdit', 'H (m)': 'TextEdit', 'URL': 'ExternalResource', });
lyr_BangunanSadap_13.set('fieldImages', {'id': 'TextEdit', 'Bangunan': 'TextEdit', 'Nama': 'TextEdit', 'km': 'TextEdit', 'Q (lt/dt)': 'TextEdit', 'A (ha)': 'TextEdit', 'BP Menerus': 'TextEdit', 'BP Pengamb': 'TextEdit', 'H Menerus': 'TextEdit', 'H Pengambi': 'TextEdit', 'URL': 'ExternalResource', });
lyr_TitikAcuan_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nama': 'TextEdit', 'Elevasi': 'TextEdit', 'Keterangan': 'TextEdit', 'X_': 'TextEdit', 'Y_': 'TextEdit', });
lyr_AreaLayanan_2.set('fieldLabels', {'Id': 'hidden field', 'AREA_DI': 'inline label - visible with data', 'LUAS__HA_': 'inline label - visible with data', 'SUMBER_AIR': 'inline label - visible with data', 'KETERANGAN': 'inline label - visible with data', 'KET__TAMBA': 'hidden field', });
lyr_Jalan_3.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'highway': 'hidden field', 'import': 'hidden field', 'surface': 'hidden field', 'ref': 'hidden field', 'oneway': 'hidden field', 'name': 'hidden field', 'lanes': 'hidden field', 'layer': 'hidden field', 'bridge': 'hidden field', });
lyr_SaluranEksisting_4.set('fieldLabels', {'LAYER': 'hidden field', 'GM_TYPE': 'hidden field', 'ELEVATION': 'hidden field', 'Saluran': 'hidden field', });
lyr_SaluranIrigasi_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'Nama_Unsur': 'hidden field', 'Nama_Objek': 'hidden field', 'Shape_Leng': 'hidden field', });
lyr_Sungai_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'Nama_Unsur': 'hidden field', 'Nama_Objek': 'hidden field', 'Shape_Leng': 'hidden field', });
lyr_SaluranPrimerPideksoKiri_7.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'Tipikal': 'inline label - visible with data', 'Nama': 'inline label - visible with data', 'Panjang': 'hidden field', 'H': 'inline label - visible with data', 'B': 'inline label - visible with data', 'Ruas (km)': 'inline label - visible with data', 'Patok': 'hidden field', 'URL': 'inline label - visible with data', });
lyr_Goronggorongsilang_8.set('fieldLabels', {'id': 'hidden field', 'Bangunan': 'inline label - visible with data', 'Nama': 'inline label - visible with data', 'km': 'inline label - visible with data', });
lyr_Goronggorong_9.set('fieldLabels', {'id': 'hidden field', 'Bangunan': 'inline label - visible with data', 'Nama': 'inline label - visible with data', 'km': 'inline label - visible with data', 'Panjang (m': 'inline label - visible with data', 'B (m)': 'inline label - visible with data', 'H (m)': 'inline label - visible with data', });
lyr_BangunanCorongan_10.set('fieldLabels', {'id': 'hidden field', 'Bangunan': 'inline label - visible with data', 'Nama': 'inline label - visible with data', 'km': 'inline label - visible with data', 'B Pintu': 'inline label - visible with data', 'h pintu': 'inline label - visible with data', 'Q (lt/dt)': 'inline label - visible with data', 'A (km)': 'inline label - visible with data', });
lyr_BangunanUkur_11.set('fieldLabels', {'id': 'hidden field', 'Bangunan': 'inline label - visible with data', 'Nama': 'inline label - visible with data', 'km': 'inline label - visible with data', });
lyr_BangunanTalang_12.set('fieldLabels', {'id': 'hidden field', 'Bangunan': 'inline label - visible with data', 'Nama': 'inline label - visible with data', 'km': 'inline label - visible with data', 'Panjang (m': 'inline label - visible with data', 'B (m)': 'inline label - visible with data', 'H (m)': 'inline label - visible with data', 'URL': 'inline label - visible with data', });
lyr_BangunanSadap_13.set('fieldLabels', {'id': 'hidden field', 'Bangunan': 'inline label - visible with data', 'Nama': 'inline label - visible with data', 'km': 'inline label - visible with data', 'Q (lt/dt)': 'inline label - visible with data', 'A (ha)': 'inline label - visible with data', 'BP Menerus': 'inline label - visible with data', 'BP Pengamb': 'inline label - visible with data', 'H Menerus': 'inline label - visible with data', 'H Pengambi': 'inline label - visible with data', 'URL': 'inline label - visible with data', });
lyr_TitikAcuan_14.set('fieldLabels', {'OBJECTID': 'hidden field', 'Nama': 'inline label - visible with data', 'Elevasi': 'inline label - visible with data', 'Keterangan': 'inline label - visible with data', 'X_': 'inline label - visible with data', 'Y_': 'inline label - visible with data', });
lyr_TitikAcuan_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});