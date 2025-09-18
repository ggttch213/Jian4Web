import React, { useState } from 'react';
import '../css/read.css';
import read1 from '../image/read1.png';
import read2 from '../image/read2.png';
import read3 from '../image/read3.png';

export function Read() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    { id: 1, title: "10分鐘的居家二頭肌訓練 - Fitting Room TW", content: "文章内容1" },
    { id: 2, title: "練出六塊肌最聰明的方法-Fitting Room TW", content: "文章内容2" },
    { id: 3, title: "10個你必須知道的減脂技巧-shuaisoserious", content: "文章内容3" }
  ];

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleClosePopup = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="read-body">
      <div className="banner">
        <h1>閱讀文章</h1>
      </div>
      {articles.map((article) => (
        <div key={article.id} className="sub-banner" onClick={() => handleArticleClick(article)}>
          <div className="sub-banner-content">
            <img src={article.id === 1 ? read1 : article.id === 2 ? read2 : read3} alt="示意圖" className="thumbnail" />
            <div className="article-content">
              <h2>{article.title}</h2>
            </div>
          </div>
        </div>
      ))}
      {selectedArticle && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>{selectedArticle.title}</h2>
            <p>{selectedArticle.content}</p>
            <button onClick={handleClosePopup}>關閉</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Read;
