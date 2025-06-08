# German Immersion Learning Platform

A modern, interactive platform for learning German through conversation practice and vocabulary building.

## Features

- Interactive conversation practice with AI-powered chat
- Voice-based conversation practice with pronunciation feedback
- Comprehensive vocabulary learning with spaced repetition
- Progress tracking and analytics
- User authentication and profile management
- Responsive design for all devices

## Tech Stack

- **Frontend**: React + Vite, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Authentication**: JWT, Google OAuth
- **AI Integration**: xAI API (for conversational features)
- **Speech Processing**: Web Speech API

## Project Structure

```
german-immersion/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/        # Page components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── context/      # React context providers
│   │   ├── utils/        # Utility functions
│   │   └── styles/       # Global styles and Tailwind config
│   └── public/           # Static assets
├── server/                # Backend Node.js application
│   ├── src/
│   │   ├── controllers/  # Route controllers
│   │   ├── models/       # Database models
│   │   ├── routes/       # API routes
│   │   ├── middleware/   # Custom middleware
│   │   ├── utils/        # Utility functions
│   │   └── config/       # Configuration files
│   └── tests/            # Backend tests
└── docs/                 # Documentation
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/german-immersion.git
   cd german-immersion
   ```

2. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd ../server
   npm install
   ```

4. Set up environment variables:
   - Copy `.env.example` to `.env` in both client and server directories
   - Update the variables with your configuration

5. Start the development servers:
   ```bash
   # Terminal 1 - Frontend
   cd client
   npm run dev

   # Terminal 2 - Backend
   cd server
   npm run dev
   ```

## Development

- Frontend runs on `http://localhost:5173`
- Backend API runs on `http://localhost:3000`

## Testing

```bash
# Frontend tests
cd client
npm test

# Backend tests
cd server
npm test
```

## Deployment

The application is configured for deployment on:
- Frontend: Vercel
- Backend: Heroku/AWS
- Database: Managed PostgreSQL service

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- xAI for providing the conversational AI API
- Web Speech API for voice processing capabilities
- All contributors and users of the platform # German-Learning
