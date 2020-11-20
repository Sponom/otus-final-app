(function(){
  const urlForm = document.querySelector('.url-form');
  const urlInput = urlForm.elements.url;
  const resetBtn = document.querySelector('.clear-url');
  const resultContainer = document.querySelector('.result-container')
  const resultElement = resultContainer.querySelector('.result-url')

  urlForm.addEventListener('submit', submitForm);
  resetBtn.addEventListener('click', clearUrl);

  async function submitForm (event) {
    event.preventDefault();

    resultContainer.classList.add('d-none');
    urlInput.classList.remove('is-invalid');
  
    const errorTextElement = urlForm.querySelector('.invalid-feedback');
    const urlVal = urlInput.value;

    const { alias, error, message } = await fetch('/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: urlVal }),
    }).then(res => res.json())
    
    if (error) {
      urlInput.classList.add('is-invalid');
      errorTextElement.textContent = message.join(', ');
      return false;
    }

    if (alias) {
      resultElement.textContent = `${window.location.origin}/${alias}`;
      resultElement.setAttribute('href', `/${alias}`);
      resultContainer.classList.remove('d-none');
      urlForm.classList.add('d-none');
    }

  }
  
  function clearUrl () {
    resultContainer.classList.add('d-none');
    urlForm.classList.remove('d-none');
    urlInput.value = '';
  }
})();