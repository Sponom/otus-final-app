(function(){
  const form = document.querySelector('.url-form');
  const clearBtn = document.querySelector('.clear-url');
  const resultContainer = document.querySelector('.result-container')
  const resultElement = resultContainer.querySelector('.result-url')
  resultContainer.hidden = true;
  form.addEventListener('submit', submitForm);

  clearBtn.addEventListener('click', clearUrl);

  async function submitForm (event) {
    event.preventDefault();

    resultContainer.hidden = true;
    const currentForm = event.currentTarget;
    const urlInput = currentForm.elements.url;
    const errorTextElement = currentForm.querySelector('.invalid-feedback');
    const urlVal = urlInput.value;

    urlInput.classList.remove('is-invalid');

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
      resultContainer.hidden = false;
      form.hidden = true;
    }

  }
  function clearUrl () {
    form.hidden = false;
    const urlInput = form.elements.url;
    urlInput.value = '';
    resultContainer.hidden = true
  }
})();