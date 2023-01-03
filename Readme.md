# Prenada

## 在 localhost 安裝與測試之詳細步驟
### 安裝指令
```
cd prenada
cd backend
yarn install
```

```
cd prenada
cd frontend
yarn install
```
### 資料庫串接
同作業新增.env檔案，檔案內需包含 `MONGO_URL=` 的連線字串

### 資料匯入方式

### 登入之帳密
帳號：testuser
密碼：testpwd


## 重點測試
### Home Page
![](https://i.imgur.com/orOSAuS.png)
* 最上面的部分顯示checklist的內容
* Body Data 有當周的簡單統計，點選"See All"可以轉導至Body Data頁籤
* Tips to you 顯示孕婦相關知識文章，可以從捷徑點選文章

### Checklist
![](https://i.imgur.com/ppJ9Ue2.png)
![](https://i.imgur.com/8FI3qeD.png)
* 點選某一周進入，右下角的"+"可以新增Checklist

### Library
![](https://i.imgur.com/gCLiwvb.png)
* 最上方的搜尋可以依標題搜尋文章
* 點選下面的block可以進入該分類，並列出該類別的所有文章

### Body Data
![](https://i.imgur.com/Dtjy3Fi.png)
![](https://i.imgur.com/qBidDer.png)
![](https://i.imgur.com/Enzfzlb.png)
* 上方有四個頁籤可以切換
* Overview提供water, sleep, symptom的summary，右下角的"+"可以新增資料
* 資料輸入完成點選"UPDATE YOUR DAY"可以將資料存到資料庫
* 重新整理後，Water, Sleep, Symptom頁籤可以檢視該週的輸入資料


## 工作分配
|修課同學|貢獻|
| -------- | -------- |
|電機四 b07401024 林羿成|BottomTab、Checklist、前期發想、UI/UX設計、訪談執行、系統說明文件|
|電機三 b09901078 葉軒易||
|資管碩二 r10725045 蔡祐琳|Body Data、資料庫建置、影片製作|

|外掛組員||
| -------- | -------- |
|心理四 歐陽妍如|前期發想、訪談執行|
|資工博二 游子緒|前期發想、訪談執行、NavBar、Homepage、ActionIcon|
|電信碩一 林柏詠|前期發想、訪談執行、UI/UX設計|



### 有外掛的原因
組長林羿成同學同時有修「人機互動與介面」課程，在該門課程中需要把他們在 Figma 上已經設計好約 70% 的 medium-fi prototype 實際做成 App，但「人機介面與設計」課程的同組同學對於網頁和 App 設計並沒有相關經驗，加上web這門課需要做一個 Final project 但還沒有主題，因此兩門課的同學決定一起合作，將這個 Web App 完整設計出來。
