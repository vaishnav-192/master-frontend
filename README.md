# Local CDN - Master Frontend

A modern, visually stunning master webpage for monitoring and managing Local CDN servers across your network. This React application provides real-time visibility into all connected CDN nodes, file mappings, and includes a comprehensive user guide.

![Local CDN](https://img.shields.io/badge/React-18.3.1-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.11-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.5.4-ff69b4)

## 🌟 Features

- **🏠 Homepage** - Eye-catching landing page with animated gradients and particle effects
- **📖 Interactive Guide** - Step-by-step instructions for setting up your own local CDN client
- **📡 Server Monitoring** - Real-time view of all connected CDN servers across your network
- **🗂️ File Mappings** - Browse and access files available on each CDN server
- **🎨 Modern UI** - Beautiful gradient themes, smooth animations, and glass-morphism effects
- **📱 Responsive Design** - Works seamlessly on desktop and mobile devices

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vaishnav-192/master-frontend.git
cd master-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Project Structure

```
master-frontend/
├── public/
│   ├── CoolSky.jpg       # Background image
│   └── cdn.png           # CDN logo
├── src/
│   ├── App.jsx           # Main app component with routing
│   ├── Navbar.jsx        # Navigation bar
│   ├── Homepage.jsx      # Landing page
│   ├── Guide.jsx         # User guide/manual
│   ├── Servers.jsx       # Server monitoring page
│   ├── Mappings.jsx      # File mappings page
│   └── index.js          # Entry point
├── package.json
└── README.md
```

## 🎯 How It Works

This master frontend acts as a centralized dashboard for your Local CDN network:

1. **Individual CDN Clients**: Each user runs their own [local-cdn-client](https://github.com/vaishnav-192/local-cdn-client) on their machine
2. **Network Visibility**: All CDN clients register with the master server
3. **Real-time Monitoring**: This frontend displays all connected servers, their status, and available files
4. **Distributed Storage**: Files are stored across the network on individual CDN nodes

## 🛠️ Technologies Used

- **React 18** - Modern UI library
- **React Router DOM** - Client-side routing
- **Framer Motion** - Smooth animations and transitions
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests

## 📚 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner in interactive watch mode

## 🔗 Related Projects

- **[Local CDN Client](https://github.com/vaishnav-192/local-cdn-client)** - The client application that users run to create their own CDN node

## 🎨 UI Highlights

- **Animated Backgrounds**: Pulsing gradient orbs and floating particles
- **Glass-morphism Effects**: Modern frosted-glass UI components
- **Gradient Typography**: Colorful, eye-catching headings
- **Smooth Transitions**: Powered by Framer Motion
- **Responsive Layout**: Mobile-first design approach

## 🌐 API Integration

The frontend connects to the master backend API at `https://local-cdn-master.vercel.app` to fetch:
- Connected server information
- File mappings and availability
- Server heartbeat status

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Vaishnav Kamarti**

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with Create React App
- UI inspired by modern web design trends
- Icons and emojis for enhanced visual appeal

---

**Happy CDN-ing! 🚀**
