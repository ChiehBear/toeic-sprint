# TOEIC Sprint

TOEIC Sprint 是一個可部署成靜態網站的多益英文自學練習站，支援手機瀏覽器操作。

## 功能

- 多益題庫練習與即時解析
- 閱讀短文、點單字查看繁體中文解釋
- 單字卡、例句與使用情景
- 英打練習，題目可與閱讀文章同步
- 每日訓練菜單與月曆打卡牆
- 進度保存在使用者瀏覽器的 `localStorage`

## 本機使用

直接用瀏覽器開啟 `index.html`。

## 部署到網站

這是純靜態網站，可以部署到 GitHub Pages、Netlify、Vercel 或任何靜態主機。

### GitHub Pages

1. 建立 GitHub repository。
2. 將本資料夾內容 push 到 repository。
3. 在 GitHub repository 的 `Settings > Pages` 啟用 Pages。
4. Source 選擇 `Deploy from a branch`，Branch 選 `main`，Folder 選 `/root`。
5. 等待 GitHub 產生網址。

### Netlify

1. 登入 Netlify。
2. 選擇 `Add new site > Deploy manually`。
3. 將整個資料夾拖曳上傳。
4. Netlify 會產生可用網址。
