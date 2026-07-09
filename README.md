# 🛡️ Network Intrusion Detection System Dashboard

## 📌 Overview

This project was developed as **Task 3** for the **CodeAlpha Cyber Security Internship**.

It demonstrates a **Network Intrusion Detection System (IDS)** using **Snort** for intrusion detection and a modern **Node.js-based dashboard** for visualizing alerts in real time.

The dashboard provides an interactive interface for monitoring suspicious network activities, displaying attack statistics, and viewing intrusion alerts.

---

# 🚀 Features

- Real-time IDS Dashboard
- Snort 3 Intrusion Detection
- Live Alert Monitoring
- Interactive Charts using Chart.js
- Hacker-themed Glassmorphism UI
- Responsive Dashboard
- Traffic Statistics
- Attack Distribution Graph
- Live Threat Status
- Recent Alert Table
- Node.js Backend
- JSON-based Alert Management

---

# 🛠 Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript
- Tailwind CSS
- Chart.js

### Backend

- Node.js
- Express.js

### Security Tools

- Snort 3
- Kali Linux

---

# 📂 Project Structure

```
network-ids-dashboard/
│
├── index.html
├── style.css
├── script.js
├── server.js
├── alerts.json
├── package.json
├── screenshots/
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/network-ids-dashboard.git
```

Open project

```bash
cd network-ids-dashboard
```

Install dependencies

```bash
npm install
```

Run Server

```bash
node server.js
```

Open Browser

```
http://localhost:3000
```

---

# Snort Configuration

Validate configuration

```bash
sudo snort -T -c /etc/snort/snort.lua
```

Run Snort

```bash
sudo snort -i wlan0 -c /etc/snort/snort.lua -A alert_fast
```

---

# Dashboard

The dashboard displays

- Total Alerts
- ICMP Detection
- HTTP Detection
- Attack Statistics
- Attack Distribution
- Live Traffic Trend
- Recent Alerts
- Threat Status

---

# Screenshots

## Dashboard

Add dashboard screenshot here.

## Snort Detection

Add terminal screenshot showing Snort alerts.

## Graphs

Add chart screenshot.

## Alert Table

Add alerts screenshot.

---

# Learning Outcomes

- Network Intrusion Detection
- Snort Rule Configuration
- Packet Monitoring
- Real-Time Alert Analysis
- Dashboard Development
- Node.js Backend Development
- Cybersecurity Visualization

---

# Future Improvements

- Real-time WebSocket updates
- MongoDB Integration
- Email Alert System
- Login Authentication
- SIEM Integration
- Threat Intelligence Feed
- Dark/Light Mode

---

# Internship

CodeAlpha Cyber Security Internship

Task 3

Network Intrusion Detection System Dashboard

---

## Author

**Raja Sabarinath**

GitHub:
https://github.com/RAJA-SABARINATH
