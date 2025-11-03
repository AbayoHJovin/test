import React from "react";
import "./index.css";

export default function PersonalityTestLanding() {
  const categories = [
    {
      color: "#A478E9",
      bgColor: "#E8E0F8",
      items: [
        { name: "マンジャロ", image: "/purple.png" },
        { name: "ゼップバウンド", image: "/purple.png" },
        { name: "リベルサス", image: "/purple.png" },
        { name: "オゼンピック", image: "/purple.png" },
      ],
    },
    {
      color: "#F377B5",
      bgColor: "#FFE8F3",
      items: [
        { name: "フォシーガ", image: "/pink.png" },
        { name: "スーグラ", image: "/pink.png" },
        { name: "ジャディアンス", image: "/pink.png" },
        { name: "カナグル", image: "/pink.png" },
      ],
    },
    {
      color: "#2FB6AE",
      bgColor: "#E0F5F3",
      items: [
        { name: "韓国漢方", image: "/green.png" },
        { name: "アカルボース", image: "/green.png" },
        { name: "メトホルミン", image: "/green.png" },
        { name: "ダイエット点滴", image: "/green.png" },
      ],
    },
    {
      color: "#EFB61B",
      bgColor: "#FFF8E5",
      items: [
        { name: "脂肪溶解注射", image: "/yellow.png" },
        { name: "脂肪冷却", image: "/yellow.png" },
        { name: "レーザー/ハイフ", image: "/yellow.png" },
        { name: "EMS", image: "/yellow.png" },
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
            ここに説明文が入ります
            ここに説明文が入りますここに説明文が入りますここに説明文が入ります
          </div>

          {/* Start Button */}
          <button className="start-button">
            <span className="button-text">今すぐ診断スタート</span>
            <span className="button-arrow">&gt;</span>
          </button>
        </div>

        {/* Type Section Header with Ribbon Banner */}
        <div className="section-header">
          <div className="ribbon-container">
            <svg
              className="ribbon-banner"
              viewBox="0 0 400 80"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <filter
                  id="shadow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feDropShadow
                    dx="0"
                    dy="2"
                    stdDeviation="3"
                    floodOpacity="0.3"
                  />
                </filter>
              </defs>

              {/* Main ribbon body */}
              <path
                d="M 50 15 L 350 15 L 380 15 L 390 40 L 380 65 L 350 65 L 50 65 L 20 65 L 10 40 L 20 15 Z"
                fill="#F377B5"
                stroke="#C85A92"
                strokeWidth="2"
                filter="url(#shadow)"
              />

              {/* Left ribbon tail */}
              <path
                d="M 50 15 L 20 15 L 5 25 L 20 30 L 20 50 L 5 55 L 20 65 L 50 65 L 40 52 L 50 40 L 40 28 Z"
                fill="#F377B5"
                stroke="#C85A92"
                strokeWidth="2"
                filter="url(#shadow)"
              />

              {/* Right ribbon tail */}
              <path
                d="M 350 15 L 380 15 L 395 25 L 380 30 L 380 50 L 395 55 L 380 65 L 350 65 L 360 52 L 350 40 L 360 28 Z"
                fill="#F377B5"
                stroke="#C85A92"
                strokeWidth="2"
                filter="url(#shadow)"
              />

              {/* Text */}
              <text
                x="200"
                y="48"
                fontFamily="sans-serif"
                fontSize="28"
                fontWeight="bold"
                fill="white"
                textAnchor="middle"
              >
                16タイプ
              </text>
            </svg>
          </div>

          {/* Pink border container */}
          <div className="types-border-container"></div>
        </div>

        <div className="categories-container">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="category-section">
              <div className="cards-grid">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="type-card">
                    <div
                      className="card-character"
                      style={{ backgroundColor: category.bgColor }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="card-character-image"
                      />
                    </div>

                    {/* Type Name Badge with colored background */}
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

              {/* Horizontal divider line after each category except the last */}
              {categoryIndex < categories.length - 1 && (
                <div className="category-divider"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Spacing */}
        <div className="bottom-spacing"></div>
      </div>
    </div>
  );
}
