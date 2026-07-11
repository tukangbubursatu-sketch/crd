CREATE DATABASE IF NOT EXISTS affiliate_ai_factory;

USE affiliate_ai_factory;

CREATE TABLE products (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100),
  price DECIMAL(10,2),
  currency VARCHAR(10) DEFAULT 'USD',
  affiliate_url TEXT,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE scripts (
  id VARCHAR(36) PRIMARY KEY,
  product_id VARCHAR(36),
  title VARCHAR(255),
  duration_sec INT,
  script_text TEXT,
  tone VARCHAR(50),
  cta TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE videos (
  id VARCHAR(36) PRIMARY KEY,
  script_id VARCHAR(36),
  platform VARCHAR(50),
  status VARCHAR(50),
  thumbnail_url TEXT,
  duration_sec INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE analytics (
  id INT AUTO_INCREMENT PRIMARY KEY,
  video_id VARCHAR(36),
  views INT DEFAULT 0,
  clicks INT DEFAULT 0,
  ctr DECIMAL(5,2),
  revenue DECIMAL(12,2),
  collected_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
