var app = app || {};

app.Camera = (function () {
    var everlive = new Everlive("zaXw8H0sTlOGZnOx");//7QPCiUu3feinmycQ");
    document.addEventListener("deviceready", function () {
        window.listview = kendo.observable({
                                               addImage: function () {
                                                   var success = function (data) {
                                                       everlive.Files.create({
                                                                                 Filename: Math.random().toString(36).substring(2, 15) + ".jpg",
                                                                                 ContentType: "image/jpeg",
                                                                                 base64: data
                                                                             }).then(function loadPhotos() {
                                                                                 everlive.Files.get().then(function (data) {
                                                                                     var files = [];
                                                                                     for (var i = data.result.length -1; i >= data.result.length -1; i--) {
                                                                                         var image = data.result[i];
                                                                                         files.push(image.Uri);
                                                                                     }
                                                                                     //$("#images").kendoMobileView({content: "<div class='designer-wrp'><img id='picture' class='picture' src='styles/images/White-7-F.png' width='100%' ><div class='printer-info'><div class='designer-avatar'><img src='#: data #' alt='on2t'></div></div></div>"});
                                                                                     $("#images").kendoMobileListView({
                                                                                                                          dataSource: files,
                                                                                                                          template: "<div class='relative-image'><img id='picture' class='picture' src='styles/images/White-7-F.png' width='100%' ><div class='absolute-image'><img src='#: data #' alt='on2t'></div><a src='../www/index.html'>Change Shirt</a></div>"
                                                                                                                      });
                                                                                 });
                                                                             });
                                                   };
                                                   var error = function () {
                                                       navigator.notification.alert("Unfortunately we could not add the image");
                                                   };
                                                   var config = {
                                                       quality:100,
                                                       destinationType: Camera.DestinationType.DATA_URL,
                                                       targetHeight: 400,
                                                       targetWidth: 400
                                                   };
                                                   navigator.camera.getPicture(success, error, config);
                                               }
                                           });
        /*        var app = new kendo.mobile.Application(document.body, {
        skin: "nova"
        });*/

/*        function loadPhotos() {
            everlive.Files.get().then(function (data) {
                var files = [];
                for (var i = data.result.length - 1; i >= 0; i--) {
                    var image = data.result[i];
                    files.push(image.Uri);
                }
                $("#images").kendoMobileListView({
                                                     dataSource: files,
                                                     template: "<img src='#: data #'>"
                                                 });
            });
        }
        loadPhotos();
        $("#images").kendoMobileListView({
                                             dataSource: ["images/01.jpg", "images/02.jpg", "images/03.jpg", "images/04.jpg", "images/05.jpg", "images/06.jpg", "images/07.jpg"],
                                             template: "<img src='#: data #'>"
                                         });
        navigator.splashscreen.hide();*/
    });
}());