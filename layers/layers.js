var wms_layers = [];

var format_ResultadoFsico_Siplangl_0 = new ol.format.GeoJSON();
var features_ResultadoFsico_Siplangl_0 = format_ResultadoFsico_Siplangl_0.readFeatures(json_ResultadoFsico_Siplangl_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResultadoFsico_Siplangl_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResultadoFsico_Siplangl_0.addFeatures(features_ResultadoFsico_Siplangl_0);
var lyr_ResultadoFsico_Siplangl_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResultadoFsico_Siplangl_0, 
                style: style_ResultadoFsico_Siplangl_0,
                popuplayertitle: 'Resultado Físico_Siplangl',
                interactive: true,
    title: 'Resultado Físico_Siplangl<br />\
    <img src="styles/legend/ResultadoFsico_Siplangl_0_0.png" /> 0 - 38<br />\
    <img src="styles/legend/ResultadoFsico_Siplangl_0_1.png" /> 38 - 58<br />\
    <img src="styles/legend/ResultadoFsico_Siplangl_0_2.png" /> 58 - 68<br />\
    <img src="styles/legend/ResultadoFsico_Siplangl_0_3.png" /> 68 - 80<br />\
    <img src="styles/legend/ResultadoFsico_Siplangl_0_4.png" /> 80 - 101<br />' });
var format_Resultado_PresupuestarioSiplangl_1 = new ol.format.GeoJSON();
var features_Resultado_PresupuestarioSiplangl_1 = format_Resultado_PresupuestarioSiplangl_1.readFeatures(json_Resultado_PresupuestarioSiplangl_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Resultado_PresupuestarioSiplangl_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Resultado_PresupuestarioSiplangl_1.addFeatures(features_Resultado_PresupuestarioSiplangl_1);
var lyr_Resultado_PresupuestarioSiplangl_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Resultado_PresupuestarioSiplangl_1, 
                style: style_Resultado_PresupuestarioSiplangl_1,
                popuplayertitle: 'Resultado_Presupuestario Siplangl',
                interactive: true,
    title: 'Resultado_Presupuestario Siplangl<br />\
    <img src="styles/legend/Resultado_PresupuestarioSiplangl_1_0.png" /> 0 - 39.4<br />\
    <img src="styles/legend/Resultado_PresupuestarioSiplangl_1_1.png" /> 39.4 - 53.2<br />\
    <img src="styles/legend/Resultado_PresupuestarioSiplangl_1_2.png" /> 53.2 - 62.8<br />\
    <img src="styles/legend/Resultado_PresupuestarioSiplangl_1_3.png" /> 62.8 - 74.8<br />\
    <img src="styles/legend/Resultado_PresupuestarioSiplangl_1_4.png" /> 74.8 - 100<br />' });
var format_blz_admin0_2 = new ol.format.GeoJSON();
var features_blz_admin0_2 = format_blz_admin0_2.readFeatures(json_blz_admin0_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_blz_admin0_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_blz_admin0_2.addFeatures(features_blz_admin0_2);
var lyr_blz_admin0_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_blz_admin0_2, 
                style: style_blz_admin0_2,
                popuplayertitle: 'blz_admin0',
                interactive: false,
                title: '<img src="styles/legend/blz_admin0_2.png" /> blz_admin0'
            });
var group_CODEDE = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'CODEDE'});

lyr_ResultadoFsico_Siplangl_0.setVisible(true);lyr_Resultado_PresupuestarioSiplangl_1.setVisible(true);lyr_blz_admin0_2.setVisible(true);
var layersList = [lyr_ResultadoFsico_Siplangl_0,lyr_Resultado_PresupuestarioSiplangl_1,lyr_blz_admin0_2];
lyr_ResultadoFsico_Siplangl_0.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'AV_COD_MUP': 'AV_COD_MUP', 'AV_Municip': 'AV_Municip', 'AV_COD_DEP': 'AV_COD_DEP', 'AV_Departa': 'AV_Departa', 'AV_Av_Fís': '% Avance Físico', 'AV_Av_fina': 'AV_Av_fina', 'xxxx': 'xxxx', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', });
lyr_Resultado_PresupuestarioSiplangl_1.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'AV_COD_MUP': 'AV_COD_MUP', 'AV_Municip': 'AV_Municip', 'AV_COD_DEP': 'AV_COD_DEP', 'AV_Departa': 'AV_Departa', 'AV_Av_Fís': 'AV_Av_Fís', 'AV_Av_fina': 'AV_Av_fina', 'xxxx': 'xxxx', 'Financiero': 'Financiero', 'aaaaaaaaaa': 'aaaaaaaaaa', });
lyr_blz_admin0_2.set('fieldAliases', {'iso2': 'iso2', 'iso3': 'iso3', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'version': 'version', 'area_sqkm': 'area_sqkm', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm0_ref_n': 'adm0_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'Mensaje': 'Mensaje', 'dddddd': 'dddddd', 'aaaaaa': 'aaaaaa', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', });
lyr_ResultadoFsico_Siplangl_0.set('fieldImages', {'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'AV_COD_MUP': 'TextEdit', 'AV_Municip': 'TextEdit', 'AV_COD_DEP': 'TextEdit', 'AV_Departa': 'TextEdit', 'AV_Av_Fís': 'RelationReference', 'AV_Av_fina': 'TextEdit', 'xxxx': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'TextEdit', 'auxiliary_storage_labeling_lineanchorclipping': 'TextEdit', 'auxiliary_storage_labeling_lineanchortype': 'TextEdit', 'auxiliary_storage_labeling_lineanchortextpoint': 'TextEdit', 'auxiliary_storage_labeling_show': 'Hidden', });
lyr_Resultado_PresupuestarioSiplangl_1.set('fieldImages', {'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'AV_COD_MUP': 'TextEdit', 'AV_Municip': 'TextEdit', 'AV_COD_DEP': 'TextEdit', 'AV_Departa': 'TextEdit', 'AV_Av_Fís': 'TextEdit', 'AV_Av_fina': 'TextEdit', 'xxxx': '', 'Financiero': '', 'aaaaaaaaaa': '', });
lyr_blz_admin0_2.set('fieldImages', {'iso2': 'TextEdit', 'iso3': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'version': 'TextEdit', 'area_sqkm': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm0_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'Mensaje': 'TextEdit', 'dddddd': 'TextEdit', 'aaaaaa': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'TextEdit', 'auxiliary_storage_labeling_lineanchorclipping': 'TextEdit', 'auxiliary_storage_labeling_lineanchortype': 'TextEdit', 'auxiliary_storage_labeling_lineanchortextpoint': 'TextEdit', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_labelrotation': 'Hidden', });
lyr_ResultadoFsico_Siplangl_0.set('fieldLabels', {'adm2_name': 'hidden field', 'adm2_name1': 'hidden field', 'adm2_name2': 'hidden field', 'adm2_name3': 'hidden field', 'adm2_pcode': 'hidden field', 'adm1_name': 'no label', 'adm1_name1': 'hidden field', 'adm1_name2': 'hidden field', 'adm1_name3': 'hidden field', 'adm1_pcode': 'hidden field', 'adm0_name': 'hidden field', 'adm0_name1': 'hidden field', 'adm0_name2': 'hidden field', 'adm0_name3': 'hidden field', 'adm0_pcode': 'hidden field', 'valid_on': 'hidden field', 'valid_to': 'hidden field', 'area_sqkm': 'hidden field', 'version': 'hidden field', 'lang': 'hidden field', 'lang1': 'hidden field', 'lang2': 'hidden field', 'lang3': 'hidden field', 'adm2_ref_n': 'hidden field', 'center_lat': 'hidden field', 'center_lon': 'hidden field', 'AV_COD_MUP': 'hidden field', 'AV_Municip': 'no label', 'AV_COD_DEP': 'hidden field', 'AV_Departa': 'hidden field', 'AV_Av_Fís': 'hidden field', 'AV_Av_fina': 'hidden field', 'xxxx': 'no label', 'auxiliary_storage_labeling_lineanchorpercent': 'hidden field', 'auxiliary_storage_labeling_lineanchorclipping': 'hidden field', 'auxiliary_storage_labeling_lineanchortype': 'hidden field', 'auxiliary_storage_labeling_lineanchortextpoint': 'hidden field', });
lyr_Resultado_PresupuestarioSiplangl_1.set('fieldLabels', {'adm2_name': 'hidden field', 'adm2_name1': 'hidden field', 'adm2_name2': 'hidden field', 'adm2_name3': 'hidden field', 'adm2_pcode': 'hidden field', 'adm1_name': 'no label', 'adm1_name1': 'hidden field', 'adm1_name2': 'hidden field', 'adm1_name3': 'hidden field', 'adm1_pcode': 'hidden field', 'adm0_name': 'hidden field', 'adm0_name1': 'hidden field', 'adm0_name2': 'hidden field', 'adm0_name3': 'hidden field', 'adm0_pcode': 'hidden field', 'valid_on': 'hidden field', 'valid_to': 'hidden field', 'area_sqkm': 'hidden field', 'version': 'hidden field', 'lang': 'hidden field', 'lang1': 'hidden field', 'lang2': 'hidden field', 'lang3': 'hidden field', 'adm2_ref_n': 'hidden field', 'center_lat': 'hidden field', 'center_lon': 'hidden field', 'AV_COD_MUP': 'hidden field', 'AV_Municip': 'no label', 'AV_COD_DEP': 'hidden field', 'AV_Departa': 'hidden field', 'AV_Av_Fís': 'hidden field', 'AV_Av_fina': 'hidden field', 'xxxx': 'hidden field', 'Financiero': 'hidden field', 'aaaaaaaaaa': 'no label', });
lyr_blz_admin0_2.set('fieldLabels', {'iso2': 'hidden field', 'iso3': 'hidden field', 'adm0_name': 'hidden field', 'adm0_name1': 'hidden field', 'adm0_name2': 'hidden field', 'adm0_name3': 'hidden field', 'adm0_pcode': 'hidden field', 'valid_on': 'hidden field', 'valid_to': 'hidden field', 'version': 'hidden field', 'area_sqkm': 'hidden field', 'lang': 'hidden field', 'lang1': 'hidden field', 'lang2': 'hidden field', 'lang3': 'hidden field', 'adm0_ref_n': 'hidden field', 'center_lat': 'hidden field', 'center_lon': 'hidden field', 'Mensaje': 'hidden field', 'dddddd': 'hidden field', 'aaaaaa': 'header label - always visible', 'auxiliary_storage_labeling_lineanchorpercent': 'hidden field', 'auxiliary_storage_labeling_lineanchorclipping': 'hidden field', 'auxiliary_storage_labeling_lineanchortype': 'hidden field', 'auxiliary_storage_labeling_lineanchortextpoint': 'hidden field', });
lyr_blz_admin0_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});