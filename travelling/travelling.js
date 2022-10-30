function travelling(){
    var url=new Array();

    url[0]="http://www.xieyihui.top"

/*
    if (document.referrer) {
      var origin = new URL(document.referrer).origin;
      url.splice(url.indexOf(origin), 1);
    }
    */
    
    //var ints=Math.floor(Math.random() * url.length);
    window.location=url[0];
   }
