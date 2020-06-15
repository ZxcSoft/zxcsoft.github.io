document.onreadystatechange = function(){
    if(document.readyState == "complete"){
        var a = document.querySelector("#app > div.global-ui > div.reco-bgm-panel > div.reco-bgm-box > div.reco-bgm-info > div.reco-bgm-operation > i.reco-bgm.reco-bgm-play.play");
        a && a.style.display !== "none" && a.click();
    }
}