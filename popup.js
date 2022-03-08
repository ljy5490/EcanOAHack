// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    //document.body.style.backgroundColor = color;
	const doc1 = document.getElementById('iframe300204').contentWindow.document;
	const doc2 = doc1.getElementById('addOrEdit').contentWindow.document;
	
	for(let i = 1; i < 11; i++) {
		const ele = doc2.getElementById('workType' + i);
		ele.selectedIndex = 1;
		ele.value = "1579"
	}
	
	for(let i = 1; i < 11; i++) {
		const ele = doc2.getElementById('projectType' + i);
		ele.selectedIndex = 26;
	}
	let list = doc2.getElementsByName("projectTypes");
	for(let i = 0; i < 10; i++) {
		list[i].value = "2090";
	}
	
	list = doc2.getElementsByName("personalTaskIds");
	for(let i = 0; i < 10; i++) {
		list[i].value = "15922";
	}
	
	for(let i = 1; i < 11; i++) {
		const ele = doc2.getElementById('productType' + i);
		ele.selectedIndex = 2;
	}

	//alert(ele);
  });
}