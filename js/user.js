$('#zone-head').click(function(){
var value='zones';
    $.ajax({
        type:'POST',
        url:'nav-gen.php',
        data:'zone_head_value='+value,
        success:function(data){
            $('#zone-sub-div').html(data);
        }
    });
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone0').click(function(){
    $('#zone-div1').fadeOut('slow');
    $('#zone-div2').fadeOut('slow');
    $('#zone-div3').fadeOut('slow');
    $('#zone-div4').fadeOut('slow');
    $('#zone-div5').fadeOut('slow');
    $('#zone-div6').fadeOut('slow');
    $('#zone-div7').fadeOut('slow');
    $('#zone-div8').fadeOut('slow');
    $('#zone-div9').fadeOut('slow');
    $('#layer-div').fadeOut('slow');
    var kml=$('#zone0').val();
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone1').click(function(){
    $('#zone-div0').fadeOut('slow');
    $('#zone-div2').fadeOut('slow');
    $('#zone-div3').fadeOut('slow');
    $('#zone-div4').fadeOut('slow');
    $('#zone-div5').fadeOut('slow');
    $('#zone-div6').fadeOut('slow');
    $('#zone-div7').fadeOut('slow');
    $('#zone-div8').fadeOut('slow');
    $('#zone-div9').fadeOut('slow');
    $('#layer-div').fadeOut('slow');
    var value='zone1';
    var kml=$('#zone1').val();
   $.ajax({
       type:'POST',
       url:'nav-gen.php',
       data:'zone-sub='+value,
       success:function(data){
           $('#zone-div1').fadeIn('slow').html(data)
       }
   });
var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);     
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone2').click(function(){
    $('#zone-div0').fadeOut('slow');
    $('#zone-div1').fadeOut('slow');
    $('#zone-div3').fadeOut('slow');
    $('#zone-div4').fadeOut('slow');
    $('#zone-div5').fadeOut('slow');
    $('#zone-div6').fadeOut('slow');
    $('#zone-div7').fadeOut('slow');
    $('#zone-div8').fadeOut('slow');
    $('#zone-div9').fadeOut('slow');
    $('#layer-div').fadeOut('slow');
    var value='zone2';
    var kml=$('#zone2').val();
   $.ajax({
       type:'POST',
       url:'nav-gen.php',
       data:'zone-sub='+value,
       success:function(data){
           $('#zone-div2').fadeIn('slow').html(data)
       }
   });
var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);     
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone3').click(function(){
    $('#zone-div0').fadeOut('slow');
    $('#zone-div1').fadeOut('slow');
    $('#zone-div2').fadeOut('slow');
    $('#zone-div4').fadeOut('slow');
    $('#zone-div5').fadeOut('slow');
    $('#zone-div6').fadeOut('slow');
    $('#zone-div7').fadeOut('slow');
    $('#zone-div8').fadeOut('slow');
    $('#zone-div9').fadeOut('slow');
    $('#layer-div').fadeOut('slow');
    var value='zone3';
    var kml=$('#zone3').val();
   $.ajax({
       type:'POST',
       url:'nav-gen.php',
       data:'zone-sub='+value,
       success:function(data){
           $('#zone-div3').fadeIn('slow').html(data)
       }
   });
var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);     
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone4').click(function(){
    $('#zone-div0').fadeOut('slow');
    $('#zone-div1').fadeOut('slow');
    $('#zone-div2').fadeOut('slow');
    $('#zone-div3').fadeOut('slow');
    $('#zone-div5').fadeOut('slow');
    $('#zone-div6').fadeOut('slow');
    $('#zone-div7').fadeOut('slow');
    $('#zone-div8').fadeOut('slow');
    $('#zone-div9').fadeOut('slow');
    $('#layer-div').fadeOut('slow');
    var value='zone4';
    var kml=$('#zone4').val();
   $.ajax({
       type:'POST',
       url:'nav-gen.php',
       data:'zone-sub='+value,
       success:function(data){
           $('#zone-div4').fadeIn('slow').html(data)
       }
   });
var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);     
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone5').click(function(){
    $('#zone-div0').fadeOut('slow');
    $('#zone-div1').fadeOut('slow');
    $('#zone-div2').fadeOut('slow');
    $('#zone-div3').fadeOut('slow');
    $('#zone-div4').fadeOut('slow');
    $('#zone-div6').fadeOut('slow');
    $('#zone-div7').fadeOut('slow');
    $('#zone-div8').fadeOut('slow');
    $('#zone-div9').fadeOut('slow');
    $('#layer-div').fadeOut('slow');
    var value='zone5';
    var kml=$('#zone5').val();
   $.ajax({
       type:'POST',
       url:'nav-gen.php',
       data:'zone-sub='+value,
       success:function(data){
           $('#zone-div5').fadeIn('slow').html(data)
       }
   });
var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);     
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone6').click(function(){
    $('#zone-div0').fadeOut('slow');
    $('#zone-div1').fadeOut('slow');
    $('#zone-div2').fadeOut('slow');
    $('#zone-div3').fadeOut('slow');
    $('#zone-div5').fadeOut('slow');
    $('#zone-div4').fadeOut('slow');
    $('#zone-div7').fadeOut('slow');
    $('#zone-div8').fadeOut('slow');
    $('#zone-div9').fadeOut('slow');
    $('#layer-div').fadeOut('slow');
    var value='zone6';
    var kml=$('#zone6').val();
   $.ajax({
       type:'POST',
       url:'nav-gen.php',
       data:'zone-sub='+value,
       success:function(data){
           $('#zone-div6').fadeIn('slow').html(data)
       }
   });
var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);     
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone7').click(function(){
    $('#zone-div0').fadeOut('slow');
    $('#zone-div1').fadeOut('slow');
    $('#zone-div2').fadeOut('slow');
    $('#zone-div3').fadeOut('slow');
    $('#zone-div5').fadeOut('slow');
    $('#zone-div6').fadeOut('slow');
    $('#zone-div4').fadeOut('slow');
    $('#zone-div8').fadeOut('slow');
    $('#zone-div9').fadeOut('slow');
    $('#layer-div').fadeOut('slow');
    var value='zone7';
    var kml=$('#zone7').val();
   $.ajax({
       type:'POST',
       url:'nav-gen.php',
       data:'zone-sub='+value,
       success:function(data){
           $('#zone-div7').fadeIn('slow').html(data)
       }
   });
var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);     
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone8').click(function(){
    $('#zone-div0').fadeOut('slow');
    $('#zone-div1').fadeOut('slow');
    $('#zone-div2').fadeOut('slow');
    $('#zone-div3').fadeOut('slow');
    $('#zone-div5').fadeOut('slow');
    $('#zone-div6').fadeOut('slow');
    $('#zone-div7').fadeOut('slow');
    $('#zone-div4').fadeOut('slow');
    $('#zone-div9').fadeOut('slow');
    $('#layer-div').fadeOut('slow');
    var value='zone8';
    var kml=$('#zone8').val();
   $.ajax({
       type:'POST',
       url:'nav-gen.php',
       data:'zone-sub='+value,
       success:function(data){
           $('#zone-div8').fadeIn('slow').html(data)
       }
   });
var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);     
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone9').click(function(){
    $('#zone-div0').fadeOut('slow');
    $('#zone-div1').fadeOut('slow');
    $('#zone-div2').fadeOut('slow');
    $('#zone-div3').fadeOut('slow');
    $('#zone-div5').fadeOut('slow');
    $('#zone-div6').fadeOut('slow');
    $('#zone-div7').fadeOut('slow');
    $('#zone-div8').fadeOut('slow');
    $('#zone-div4').fadeOut('slow');
    $('#layer-div').fadeOut('slow');
    var value='zone9';
    var kml=$('#zone9').val();
   $.ajax({
       type:'POST',
       url:'nav-gen.php',
       data:'zone-sub='+value,
       success:function(data){
           $('#zone-div9').fadeIn('slow').html(data)
       }
   });
var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);     
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone1prabhag0').click(function(){
    var kml=$('#zone1prabhag0').val();
    var value='zone1prabhag0';
   $.ajax({
       type:'POST',
       url:'nav-gen.php',
       data:'prabhag-sub='+value,
       success:function(data){
           $('#layer-div').fadeIn('slow').html(data)
       }
   });
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone1prabhag1').click(function(){
    var kml=$('#zone1prabhag1').val();
    var value='zone1prabhag1';
   $.ajax({
       type:'POST',
       url:'nav-gen.php',
       data:'prabhag-sub='+value,
       success:function(data){
           $('#layer-div').fadeIn('slow').html(data)
       }
   });
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone1prabhag2').click(function(){
    var kml=$('#zone1prabhag2').val();
    var value='zone1prabhag2';
   $.ajax({
       type:'POST',
       url:'nav-gen.php',
       data:'prabhag-sub='+value,
       success:function(data){
           $('#layer-div').fadeIn('slow').html(data)
       }
   });
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone1prabhag3').click(function(){
    var kml=$('#zone1prabhag3').val();
    var value='zone1prabhag3';
   $.ajax({
       type:'POST',
       url:'nav-gen.php',
       data:'prabhag-sub='+value,
       success:function(data){
           $('#layer-div').fadeIn('slow').html(data)
       }
   });
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone2prabhag0').click(function(){
    var kml=$('#zone2prabhag0').val();
    var value='zone2prabhag0';
   $.ajax({
       type:'POST',
       url:'nav-gen.php',
       data:'prabhag-sub='+value,
       success:function(data){
           $('#layer-div').fadeIn('slow').html(data)
       }
   });
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone2prabhag1').click(function(){
    var kml=$('#zone2prabhag1').val();
    var value='zone2prabhag1';
   $.ajax({
       type:'POST',
       url:'nav-gen.php',
       data:'prabhag-sub='+value,
       success:function(data){
           $('#layer-div').fadeIn('slow').html(data)
       }
   });
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone2prabhag2').click(function(){
    var kml=$('#zone2prabhag2').val();
    var value='zone2prabhag2';
   $.ajax({
       type:'POST',
       url:'nav-gen.php',
       data:'prabhag-sub='+value,
       success:function(data){
           $('#layer-div').fadeIn('slow').html(data)
       }
   });
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone3prabhag0').click(function(){
    var kml=$('#zone3prabhag0').val();
    var value='zone3prabhag0';
   $.ajax({
       type:'POST',
       url:'nav-gen.php',
       data:'prabhag-sub='+value,
       success:function(data){
           $('#layer-div').fadeIn('slow').html(data)
       }
   });
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone3prabhag1').click(function(){
    var kml=$('#zone3prabhag1').val();
    var value='zone3prabhag1';
   $.ajax({
       type:'POST',
       url:'nav-gen.php',
       data:'prabhag-sub='+value,
       success:function(data){
           $('#layer-div').fadeIn('slow').html(data)
       }
   });
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone3prabhag2').click(function(){
    var kml=$('#zone3prabhag2').val();
    var value='zone3prabhag2';
   $.ajax({
       type:'POST',
       url:'nav-gen.php',
       data:'prabhag-sub='+value,
       success:function(data){
           $('#layer-div').fadeIn('slow').html(data)
       }
   });
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone3prabhag3').click(function(){
    var kml=$('#zone3prabhag3').val();
    var value='zone3prabhag3';
   $.ajax({
       type:'POST',
       url:'nav-gen.php',
       data:'prabhag-sub='+value,
       success:function(data){
           $('#layer-div').fadeIn('slow').html(data)
       }
   });
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone1prabhag0layer0').click(function(){
    var kml=$('#zone1prabhag0layer0').val();
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone1prabhag0layer1').click(function(){
    var kml=$('#zone1prabhag0layer1').val();
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone1prabhag0layer2').click(function(){
    var kml=$('#zone1prabhag0layer2').val();
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone1prabhag1layer0').click(function(){
    var kml=$('#zone1prabhag1layer0').val();
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone1prabhag1layer1').click(function(){
    var kml=$('#zone1prabhag1layer1').val();
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone1prabhag2layer0').click(function(){
    var kml=$('#zone1prabhag2layer0').val();
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone1prabhag2layer1').click(function(){
    var kml=$('#zone1prabhag2layer1').val();
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone3prabhag0layer0').click(function(){
    var kml=$('#zone3prabhag0layer0').val();
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone3prabhag0layer1').click(function(){
    var kml=$('#zone3prabhag0layer1').val();
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone3prabhag0layer2').click(function(){
    var kml=$('#zone3prabhag0layer2').val();
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone3prabhag1layer0').click(function(){
    var kml=$('#zone3prabhag1layer0').val();
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone3prabhag1layer1').click(function(){
    var kml=$('#zone3prabhag1layer1').val();
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone3prabhag1layer2').click(function(){
    var kml=$('#zone3prabhag1layer2').val();
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone3prabhag1layer3').click(function(){
    var kml=$('#zone3prabhag1layer3').val();
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone3prabhag2layer0').click(function(){
    var kml=$('#zone3prabhag2layer0').val();
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone3prabhag2layer1').click(function(){
    var kml=$('#zone3prabhag2layer1').val();
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone3prabhag2layer2').click(function(){
    var kml=$('#zone3prabhag2layer2').val();
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
//################################################################################################################################################
//************************************************************************************************************************************************
//################################################################################################################################################
//************************************************************************************************************************************************
$('#zone3prabhag2layer3').click(function(){
    var kml=$('#zone3prabhag2layer3').val();
    var map;
var serverv=kml;
var author_value =serverv; 
var geoXml = new GGeoXml(author_value);
function load() {
    if (GBrowserIsCompatible()) {
    map = new GMap2(document.getElementById("map")); 
    map.addControl(new GLargeMapControl());
    map.addControl(new GScaleControl());
    map.setCenter(new GLatLng(41.875696, -87.624207)); 
    map.addControl(new GHierarchicalMapTypeControl());
    map.addControl(new GMapTypeControl());
    map.addControl(new GOverviewMapControl());
 map.clearOverlays();
    map.addOverlay(geoXml);
    GEvent.addListener( map, "dblclick", setLatLongs);
    GEvent.addListener( map, "zoomend", setZoom);
    GEvent.addListener( map, "moveend", setLatLongs);
    geoXml.gotoDefaultViewport(map)
    }
}
function setLatLongs(){
    document.getElementById('lat').value = map.getCenter().lat();
    document.getElementById('long').value = map.getCenter().lng();  
}

function setZoom(){
    document.getElementById('zoom_level').value = map.getZoom();
}
   $('#map').html(load());
});
