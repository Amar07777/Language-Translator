document.getElementById('translateBtn').addEventListener('click', () => {
  const inputText = document.getElementById('inputText').value;
  const sourceLang = document.getElementById('sourceLang').value;
  const targetLang = document.getElementById('targetLang').value;

  if (!inputText) {
    alert('Please enter text to translate.');
    return;
  }

  fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=${sourceLang}|${targetLang}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('outputText').value = data.responseData.translatedText;
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while translating.');
    });
});
