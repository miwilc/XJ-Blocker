
chrome.storage.sync.get(['key','forum','shoutbox'], function(result) {
    
        if(result.shoutbox){
        var outerDiv = document.getElementById('chatbox_posts').getElementsByTagName('P')
        var test = document.getElementsByTagName("ul")
        var arrayLength = outerDiv.length;
        for (var i = 0; i < arrayLength; i++) {

        spans = outerDiv[i].getElementsByTagName('span')
        nickname = spans[0].innerText.replace(/ /g,'')
    
        if (result.key.includes(nickname)){
            if (result.shoutbox)
            spans[1].innerHTML = 'blocked by plugin'
        }

        }

    for (var i = 0; i < test.length; i++) {
        kekw = test[i].getElementsByTagName('li')
        if(kekw.length == 2){
            try {
                nickname = kekw[0].getElementsByTagName('a')[0].innerText
                if (result.key.includes(nickname)){
                    kekw[1].innerText = 'blocked by plugin'
                }
              }
              catch(err) {
                console.log(err)
              }
           
        }}
        
    }})
    
  ;

 