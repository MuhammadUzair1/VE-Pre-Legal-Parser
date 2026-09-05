# Legal Parser

A web application designed to streamline pre-legal work in the Justice Department by automating document generation from templates.

## Overview

Legal Parser is a full-stack application that helps legal professionals and citizens prepare and generate official documents for various justice department procedures. The platform provides an intuitive interface for selecting document templates, filling in required information, and generating properly formatted documents.

## Tech Stack

### Frontend
- **Next.js** - React-based framework for building the user interface
- **React** - Component-based UI library
- **TypeScript** (optional) - For type-safe development

### Backend
- **Python** - Core backend language
- **FastAPI** - Modern, fast web framework for building APIs
- **Pydantic** - Data validation and serialization

### Database
- PostgreSQL or MongoDB (to be configured based on requirements)

## Features

- 📋 **Template Management** - Pre-built legal document templates
- ✍️ **Document Generation** - Automated document creation from templates
- 🔍 **Form Validation** - Real-time validation of user input
- 📥 **Document Export** - Generate PDF/DOCX documents
- 👥 **User Authentication** - Secure access to document generation features
- 🔒 **Data Security** - Protection of sensitive legal information

## Project Structure

```
Legal Parser/
├── frontend/              # Next.js application
│   ├── pages/
│   ├── components/
│   ├── public/
│   └── package.json
├── backend/              # FastAPI application
│   ├── app/
│   ├── templates/
│   ├── utils/
│   └── requirements.txt
├── docs/                 # Documentation
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Python (v3.8 or higher)
- npm or yarn
- pip

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

The API will be available at `http://localhost:8000`

## API Documentation

Once the backend is running, API documentation is available at:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## Usage

1. Navigate to the application
2. Select a document template from the available options
3. Fill in the required information in the form
4. Review the generated document
5. Download or print the document

## Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Backend (.env)
```
DATABASE_URL=your_database_connection_string
SECRET_KEY=your_secret_key
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Create a feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
3. Push to the branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues, questions, or suggestions, please create an issue in the repository or contact the development team.

## Roadmap

- [ ] Core document template system
- [ ] User authentication and authorization
- [ ] PDF export functionality
- [ ] Document history and versioning
- [ ] Email integration for document delivery
- [ ] Multi-language support

---

**Last Updated:** September 5, 2026
