(() => {
  const languageButton = document.querySelector('[data-language-toggle]');
  const supportedLanguages = ['uk', 'en'];
  let language = localStorage.getItem('site-language') || 'uk';
  if (!supportedLanguages.includes(language)) language = 'uk';

  function applyLanguage(nextLanguage) {
    language = nextLanguage;
    document.documentElement.lang = language;
    document.querySelectorAll('[data-ua][data-en]').forEach((element) => {
      const value = element.dataset[language];
      if (value !== undefined) element.textContent = value;
    });
    if (languageButton) {
      languageButton.textContent = language === 'uk' ? 'EN' : 'UA';
      languageButton.setAttribute('aria-label', language === 'uk' ? 'Switch language' : 'Змінити мову');
    }
    localStorage.setItem('site-language', language);
  }

  if (languageButton) languageButton.addEventListener('click', () => {
    applyLanguage(language === 'uk' ? 'en' : 'uk');
  });
  applyLanguage(language);

  const year = document.querySelector('[data-current-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
