import React from 'react';
import { Link } from 'react-router-dom';
import './NewsSection.css';

function NewsSection() {
  const newsItems = [
    {
      id: 1,
      date: '25.12.2025',
      title: 'Nowa strona internetowa',
      excerpt: 'Witamy na nowej stronie naszego wydawnictwa zachecamy do zapozania się z jej zawartością.',
      tag: 'Wydarzenie'
    },
    {
      id: 2,
      date: '02.12.2025',
      title: '#czytamypłomyczka',
      excerpt: 'Zapraszamy do udziału w naszej akcji czytelniczej #czytamypłomyczka.',
      tag: 'Warsztaty'
    },

  ];

  return (
    <section className="news-section">
      {/* Animowane tło (chmury/kształty) */}
      <div className="news-bg-animation">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
      </div>

      <div className="news-content-wrapper">
        <h2 className="news-title">Co słychać za górami?</h2>
        
        <div className="news-grid">
          {newsItems.map((item) => (
            <div key={item.id} className="news-card">
              <div className="news-date">{item.date}</div>
              <span className={`news-tag tag-${item.tag.toLowerCase()}`}>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;