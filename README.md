# Hangeul Beat

Hangeul Beat 是一個以 K-pop 歌曲情境協助完全初心者學習韓語的靜態網站，支援手機瀏覽器操作。

## 功能

- 韓文字母子音、母音點讀
- 韓語方塊字與 받침 音節拆解
- SEVENTEEN 歌曲情境學習路線
- 原創跟唱練習句、發音與中文解釋
- 個人歌詞貼上、逐行近似羅馬拼音與韓語朗讀
- 每日任務與月曆打卡牆
- 進度保存在使用者瀏覽器的 `localStorage`

## 歌詞與商標

本網站是非官方學習工具，未與藝人、經紀公司或唱片公司合作。網站不內建完整受版權保護歌詞；歌詞工具只在使用者瀏覽器中處理自行貼上的內容。

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
