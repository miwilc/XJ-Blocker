
function save_options() {
    var nicknames = document.getElementById('players').value.split(';');
    shoutbox_checked = document.getElementById('shoutbox').checked
    forum_checked = document.getElementById('forum').checked
    console.log(nicknames)
    chrome.storage.sync.set({key: nicknames,
                            shoutbox:shoutbox_checked,
                            forum:forum_checked},
         function() {
        console.log('Value is set to ' + nicknames);
      });
    }
  
function restore_options() {
    

    chrome.storage.sync.get(['key','shoutbox','forum'], function(result) {
        console.log(result);
        document.getElementById('players').value = result.key.join(';')
        document.getElementById('forum').checked = result.forum
        document.getElementById('shoutbox').checked = result.shoutbox

      });
  }

  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
    save_options);