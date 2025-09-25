document.addEventListener('DOMContentLoaded', (event) => {
  const editableDiv = document.getElementById('statementEditableContent');
  const storageKey = 'customerStatementContent';

  // 1. 頁面載入時，嘗試從 localStorage 讀取已儲存的內容
  function loadContent() {
    const savedContent = localStorage.getItem(storageKey);
    if (savedContent) {
      editableDiv.innerHTML = savedContent;
    }
  }

  // 2. 當內容被修改時，自動儲存到 localStorage
  // 'input' 事件會在內容有任何變動時觸發
  editableDiv.addEventListener('input', () => {
    localStorage.setItem(storageKey, editableDiv.innerHTML);
    console.log('內容已自動儲存！');
  });

  // 初始載入
  loadContent();
});
