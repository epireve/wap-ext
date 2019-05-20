var timer = setInterval(general,1000);
// document.body.appendChild(function() {var el = document.createElement('link'); el.setAttribute('ref', 'stylesheet'); el.setAttribute('href', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'); return el;}())

    function general(){
        if(document.getElementsByClassName("_2tW_W")[0] != null){
            var base = document.getElementsByClassName("_2tW_W")[0];
            var div=document.createElement("div");
            // div.classList.add("_3pkkz");
            base.appendChild(div)[0];
            div.innerHTML = `<div style="padding: 10px;">
                                <div style="display: inline-block; vertical-align: middle; margin: 0 10px 0 0">
                                  <svg style="" class=svg-icon viewBox=\"0 0 20 20\" width=\"30\" height=\"30\"><path fill-opacity=\".45\" d=\"M17.283,5.549h-5.26V4.335c0-0.222-0.183-0.404-0.404-0.404H8.381c-0.222,0-0.404,0.182-0.404,0.404v1.214h-5.26c-0.223,0-0.405,0.182-0.405,0.405v9.71c0,0.223,0.182,0.405,0.405,0.405h14.566c0.223,0,0.404-0.183,0.404-0.405v-9.71C17.688,5.731,17.506,5.549,17.283,5.549 M8.786,4.74h2.428v0.809H8.786V4.74z M16.879,15.26H3.122v-4.046h5.665v1.201c0,0.223,0.182,0.404,0.405,0.404h1.618c0.222,0,0.405-0.182,0.405-0.404v-1.201h5.665V15.26z M9.595,9.583h0.81v2.428h-0.81V9.583zM16.879,10.405h-5.665V9.19c0-0.222-0.183-0.405-0.405-0.405H9.191c-0.223,0-0.405,0.183-0.405,0.405v1.215H3.122V6.358h13.757V10.405z\"></path></svg>
                                </div>

                                <div style="display: inline;" >
                                  <span class="" style="border-radius: 5px; background: #96DF9E; padding: 5px; font-size:12px; width:fit-content; color: #FFF;">Text #1</span>
                                  <span class="" style="border-radius: 5px; background: #96DF9E; padding: 5px; font-size:12px; width:fit-content; color: #FFF;">Text #1</span>
                                  <span class="" style="border-radius: 5px; background: #96DF9E; padding: 5px; font-size:12px; width:fit-content; color: #FFF;">Random title here</span>
                                  <span class="" style="border-radius: 5px; background: #96DF9E; padding: 5px; font-size:12px; width:fit-content; color: #FFF;">Even longer text should appear</span>
                                  <a href="#" style="font-size:10px; padding: 0 0 0 5px;">Settings</a>
                                </div>
                             </div>
                          `;

            base.insertBefore(div, base.childNodes[0]);
            clearInterval(timer);

        }else{
            console.log("WS Pilot: Pending for Whatsapp to load...");
        }
    }
