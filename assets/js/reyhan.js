function updateTitle(element) {
    const button = element.closest('.btn-group').querySelector('.dropdown-toggle');
    button.textContent = element.textContent;
  }