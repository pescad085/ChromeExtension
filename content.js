document.getElementById('changeColorBtn').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            function: changeColor
  
        });
    });
  });

  function changeColor() {
    document.body.style.backgroundColor = "black";
          

  }