import React from "react";
import "./index.css";

export default function PersonalityTestLanding() {
  const categories = [
    {
      color: "#A478E9",
      items: [
        { name: "マジメガ", bgColor: "#E8E0F8", image: "/purple.png" },
        { name: "モテワクワク", bgColor: "#E8E0F8", image: "/purple.png" },
        { name: "リベンリュウ", bgColor: "#E8E0F8", image: "/purple.png" },
        { name: "まぜらせっこ", bgColor: "#E8E0F8", image: "/purple.png" },
      ],
    },
    {
      color: "#F377B5",
      items: [
        { name: "ライジース", bgColor: "#FFE8F3", image: "/pink.png" },
        { name: "スープル", bgColor: "#FFE8F3", image: "/pink.png" },
        { name: "ゲルマリウス", bgColor: "#FFE8F3", image: "/pink.png" },
        { name: "ルブダル", bgColor: "#FFE8F3", image: "/pink.png" },
      ],
    },
    {
      color: "#2FB6AE",
      items: [
        { name: "陽津津ガ", bgColor: "#E0F5F3", image: "/green.png" },
        { name: "アルカポーン", bgColor: "#E0F5F3", image: "/green.png" },
        { name: "グドガドビ", bgColor: "#E0F5F3", image: "/green.png" },
        { name: "グミラギ青参", bgColor: "#E0F5F3", image: "/green.png" },
      ],
    },
    {
      color: "#EFB61B",
      items: [
        { name: "タイプ名", bgColor: "#FFF8E5", image: "/yellow.png" },
        { name: "タイプ名", bgColor: "#FFF8E5", image: "/yellow.png" },
        { name: "タイプ名", bgColor: "#FFF8E5", image: "/yellow.png" },
        { name: "タイプ名", bgColor: "#FFF8E5", image: "/yellow.png" },
      ],
    },
  ];

  return (
    <div className="app-container">
      <div className="content-wrapper">
        {/* Header */}
        <div className="header">
          <div className="title-image-container">
            <img
              src="/image.png"
              alt="メディカルダイエット 16タイプ診断"
              className="title-design-image"
            />
          </div>

          {/* Character */}
          <div className="character-container">
            <img
              src="/main.png"
              alt="Main Character"
              className="character-main"
            />
          </div>

          {/* Description Text */}
          <div className="description-text">
            ここに簡単の入ります 🎵
            <br />
            ここに簡単の入ります！ここに詳細の入入
            <br />
            りますここに説明書が入ります
          </div>

          {/* Start Button */}
          <button className="start-button">今すぐ診断スタート →</button>
        </div>

        {/* Type Section Header */}
        <div className="section-header">
          <div className="type-banner">
            <div className="banner-decoration banner-decoration-left"></div>
            <div className="banner-decoration banner-decoration-right"></div>
            タイプ
          </div>
        </div>

        {/* Categories Grid */}
        <div className="categories-container">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="category-section">
              <div className="cards-grid">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="type-card"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    {/* Character Image */}
                    <div className="card-character">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="card-character-image"
                      />
                    </div>

                    {/* Type Name Badge */}
                    <div
                      className="type-name-badge"
                      style={{ backgroundColor: category.color }}
                    >
                      {item.name}
                    </div>

                    {/* Description */}
                    <div className="card-description">
                      ここに詳細が入ります
                      <br />
                      ここに詳細が入ります
                      <br />
                      ここに詳細が入ります
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Spacing */}
        <div className="bottom-spacing"></div>
      </div>
    </div>
  );
}
