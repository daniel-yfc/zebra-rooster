# GitHub Pages 發佈設定

此專案已整合 GitHub Actions 自動部署至 `gh-pages` 分支，並支援 GitHub Pages 發佈。

## ✅ 發佈流程

1. 每次推送至 `main` 分支時，GitHub Actions 會自動執行部署流程。
2. 將 `Enhanced_Customer_Statement_Generator_PWA/` 資料夾內容發佈至 `gh-pages` 分支。
3. 可透過 `https://<使用者名稱>.github.io/<儲存庫名稱>/` 存取 PWA 應用程式。

## 📁 Workflow 檔案位置

`.github/workflows/deploy.yml`

## 🔧 注意事項

- 若無 `npm run build` 步驟，可忽略 build 指令。
- 請確保 `main` 分支存在並為預設分支。
