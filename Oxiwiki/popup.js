const submit_el = document.getElementById('sub-btn');
const input_el = document.getElementById('input-val');

submit_el.addEventListener('click', searchItem);

function searchItem() {
    let term = input_el.value;
    chrome.storage.local.set({ser1: term}, function() {
        console.log('Value is set to ' + term);
    });
}
