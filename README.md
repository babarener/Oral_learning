# SpeakAid: Visual Communication Support for Daily Scenarios

## Overview

SpeakAid is a low-literacy-friendly visual communication aid designed to help users communicate basic health-related needs and daily practical requirements through images, simple English labels, and clear step-by-step selection processes. Unlike traditional language learning or quiz applications, SpeakAid focuses on empowering users in real-world scenarios by providing intuitive, visual interfaces that require minimal reading skills.

The application is built as a progressive web app (PWA) using modern web technologies, making it accessible on various devices including smartphones, tablets, and desktops. It currently features a fully implemented clinic scenario, with plans to expand to other daily scenarios like supermarket shopping.

## Key Features

- **Visual-First Design**: Relies on images, icons, and simple labels rather than complex text
- **Audio Support**: Includes audio cues for each visual element to assist users with different abilities
- **Step-by-Step Guidance**: Clear, linear user flows that prevent confusion
- **Scenario-Based**: Organized around common daily situations (clinic, supermarket, etc.)
- **Responsive Interface**: Works across different screen sizes and devices
- **Accessibility-Focused**: Designed with low-literacy users in mind

## Core User Flow

### 1. Home Page

- Displays two large scenario cards: Clinic and Supermarket
- Clinic scenario is fully functional; Supermarket is currently a placeholder
- Users select a scenario to begin the communication flow

### 2. Clinic Body-Part Selection Page

- Shows a central human body image with clickable hotspots
- Supported body parts include: head, eyes, hand, stomach, leg, and more
- Displays a side list of matching English body-part labels
- Single selection only: clicking either the body hotspot or the word highlights both
- "Next" button remains disabled until one body part is selected

### 3. Clinic Symptom Selection Page

- Presents a grid of symptom cards with expressive images
- Example symptoms: stomachache, fever, headache, diarrhea, cough, pain
- Supports multiple selection with clear visual feedback for selected items
- "Next" button remains disabled until at least one symptom is selected

### 4. Recommendation Page

- Displays simple visual suggestions based on selected body part and symptoms
- Example recommendations: medicine, drink water, rest, see doctor
- Presents as supportive next-step guidance, not medical diagnosis
- Includes navigation back to home or restart options

## Technology Stack

- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **State Management**: Zustand
- **Styling**: CSS modules with custom design system
- **Audio Management**: Custom audio service for accessibility
- **Deployment**: Static hosting (Vercel, Netlify, or similar)

## Project Structure

```
clinic-visual-support/
├── public/
│   └── images/
│       └── clinic/          # Clinic scenario images
├── src/
│   ├── app/
│   │   ├── router.tsx       # Application routing
│   │   └── store.ts         # Global state management
│   ├── components/
│   │   ├── common/
│   │   │   └── VisualCard.tsx    # Reusable visual card component
│   │   └── selectors/
│   │       ├── SingleSelectPanel.tsx  # Body part selection
│   │       └── MultiSelectGrid.tsx    # Symptom selection
│   ├── data/
│   │   ├── recommendationRules.ts     # Logic for recommendations
│   │   └── scenarios/
│   │       ├── clinic.ts              # Clinic scenario data
│   │       └── supermarket.ts         # Supermarket placeholder
│   ├── models/
│   │   └── types.ts                   # TypeScript type definitions
│   ├── pages/
│   │   ├── HomePage.tsx               # Scenario selection
│   │   ├── ClinicBodyPage.tsx         # Body part selection
│   │   ├── ClinicSymptomsPage.tsx     # Symptom selection
│   │   └── ClinicRecommendationsPage.tsx  # Recommendations display
│   ├── services/
│   │   ├── audio/
│   │   │   └── audioManager.ts        # Audio playback service
│   │   └── recommendation/
│   │       └── engine.ts              # Recommendation logic
│   ├── App.tsx                        # Main application component
│   ├── main.tsx                       # Application entry point
│   └── style.css                      # Global styles
├── package.json                        # Dependencies and scripts
├── tsconfig.json                       # TypeScript configuration
└── index.html                          # HTML template
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/babarener/Oral_learning.git
   cd Oral_learning/clinic-visual-support
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
npm run preview
```

## Data Structure

The application uses a structured data approach for scenarios:

- **Scenarios**: Top-level containers for different use cases (clinic, supermarket)
- **Stages**: Steps within each scenario (body-part selection, symptoms, etc.)
- **Items**: Individual selectable elements with images, audio, and metadata
- **Recommendations**: Outcome suggestions based on user selections
- **Rules Engine**: Logic for matching user inputs to appropriate recommendations

## Accessibility Considerations

- **Visual Design**: High contrast, large touch targets, clear visual hierarchy
- **Audio Support**: Every interactive element includes audio feedback
- **Simple Language**: Minimal text with large, readable fonts
- **Progressive Enhancement**: Works without JavaScript for basic functionality
- **Screen Reader Support**: Proper ARIA labels and semantic HTML

## Future Development

- **Additional Scenarios**: Expand beyond clinic to include supermarket, transportation, etc.
- **Offline Support**: Service worker implementation for offline use
- **Multi-language Support**: Add support for additional languages beyond English
- **User Customization**: Allow users to add personal scenarios or modify existing ones
- **Data Collection**: Optional analytics for improving recommendations
- **Integration**: API connections to real healthcare services

## Contributing

This project was developed as part of a university competition. Contributions are welcome for:

- Adding new scenarios
- Improving accessibility features
- Enhancing the user interface
- Expanding the recommendation engine
- Adding new languages or audio content

Please follow the existing code structure and maintain the focus on visual communication and accessibility.

## License

This project is licensed under the terms specified in the LICENSE file.

## Acknowledgments

- Developed for the University of Washington competition
- Inspired by the need for accessible communication tools for low-literacy populations
- Built with modern web technologies for maximum compatibility and performance