# StudyFlow – Student Planner App

## Project Overview

StudyFlow is a student planner mobile application developed using React Native and Expo. It helps university students organize their academic responsibilities, manage assignments, track exams, and monitor important deadlines.

The application provides a simple way to manage academic tasks, organize them by subjects, set priorities, and track completed and pending activities.

## Main Features

- Display academic tasks and assignments.
- View task descriptions and details.
- Organize tasks by subjects.
- Display task deadlines.
- Set task priorities (Low, Medium, High).
- Track completed and pending tasks.
- Display task statistics.
- Support optional notes for individual tasks.

## Technologies Used

- React Native
- Expo SDK 58
- TypeScript
- JavaScript
- Git and GitHub

## Project Structure

```text
studyflow/
├── src/
│   ├── app/
│   │   ├── _layout.tsx
│   │   └── index.tsx
│   ├── components/
│   │   ├── TaskCard.tsx
│   │   └── TaskDetails.tsx
│   ├── data/
│   │   └── tasks.ts
│   ├── screens/
│   │   └── TaskDetailsScreen.tsx
│   └── types/
│       └── Task.ts
├── assets/
├── app.json
├── package.json
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/DzejlanaS/StudyFllow.git
```

### 2. Navigate to the project folder

```bash
cd StudyFllow
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the application

```bash
npx expo start
```

Scan the QR code using Expo Go to open the application on a mobile device.

To run the web version, press `w` in the Expo terminal.

## Mock Data

The application currently uses five sample academic tasks with different subjects, deadlines, priorities, and completion statuses.

## Planned Features

- [x] Initial application setup with Expo and TypeScript.
- [x] Reusable TaskCard component.
- [x] Task details component.
- [x] Display academic tasks using mock data.
- [x] Display task priorities and completion statuses.
- [ ] Task navigation and details screen integration.
- [ ] Add, edit, and delete tasks.
- [ ] Search and filter tasks.
- [ ] Local data persistence.
- [ ] User authentication and backend integration.

## Development

This project is being developed as