// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var config = Ti.App.Properties.getObject('config', {});
var logoImg = config.images[0].path;
$.logo.image = Alloy.CFG.assets + logoImg;

$.logo.addEventListener('load', function(e) {
    Ti.API.info('$.logo.image' + $.logo.image);
});

function goNext(e) {
    var addpet = Alloy.createController('pets/addpet', {}).getView();
    addpet.open();
}