# WarcraftLogs Clone

A comprehensive World of Warcraft combat log analysis platform that allows users to upload logs and view detailed statistics.

## Features

- **Log Upload**: Drag & drop or file selection for combat logs
- **Real-time Parsing**: Parse combat logs and extract detailed information
- **Combat Statistics**: Damage, healing, deaths, buffs, debuffs, and more
- **Player Analysis**: Individual player performance metrics
- **Encounter Tracking**: Boss fight analysis with timestamps
- **Modern UI**: Responsive design with charts and visualizations
- **Search & Filter**: Advanced filtering and search capabilities

## Tech Stack

- **Backend**: Python Flask with SQLAlchemy
- **Frontend**: React with TypeScript and Tailwind CSS
- **Database**: SQLite (can be upgraded to PostgreSQL)
- **Charts**: Chart.js for data visualization
- **File Processing**: Custom log parser for WoW combat logs

## Project Structure

```
warcraftlogs-clone/
├── backend/           # Flask API server
│   ├── app.py        # Main Flask application
│   ├── models/       # Database models
│   ├── parsers/      # Log parsing logic
│   ├── utils/        # Utility functions
│   └── requirements.txt
├── frontend/         # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── database/         # Database files
└── logs/            # Sample logs and uploads
```

## Getting Started

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## API Endpoints

- `POST /api/upload` - Upload combat log file
- `GET /api/logs` - List all uploaded logs
- `GET /api/logs/<id>` - Get specific log details
- `GET /api/logs/<id>/stats` - Get log statistics
- `GET /api/logs/<id>/players` - Get player data
- `GET /api/logs/<id>/encounters` - Get encounter data

## Log Format Support

The application supports standard WoW combat log formats including:
- Damage events
- Healing events
- Buff/Debuff applications
- Death events
- Encounter start/end events
- Player information

## License

MIT License

