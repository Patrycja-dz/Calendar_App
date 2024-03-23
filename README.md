# Calendar App

Welcome to CalendarApp -the ultimate calendar app designed to make organizing events and meetings with friends a breeze! Say goodbye to missed gatherings and scheduling conflicts, and hello to seamless event planning with your friends. Let's get started on making memories together!

## Table of Contents

- [About](#about)
- [Technologies used](#technoloies-used)
- [Requirements](#requirements)
- [Installation](#installation)
- [Branch workflow](#branch-workflow)

## About

The aim of this program is to streamline event organization for individuals with demanding weekly schedules.

Our proposed solution entails synchronizing the calendars of invitees, allowing the event organizer to identify a mutually convenient meeting date for all participants. Subsequently, invitations are sent out to the users, who can then choose to accept or decline the invitation at their discretion

## Technologies Used

- React
- Tailwind CSS
- Python (Flask)

## Requirements

Before running the Calendar App, please ensure you have the following prerequisites installed on your system:

- Node.js: Version 18 or higher. I recommend managing Node.js versions with Node Version Manager (nvm) for better version control. [NVM](https://github.com/nvm-sh/nvm)
- Visual Studio Code (VS Code): Recommended IDE for development. You can download and install it from the [official website](https://code.visualstudio.com/).
- Git: Version control system for managing project repositories. You can download and install Git from the [official website](https://git-scm.com/).

## Installation

Follow these simple steps to get Calendar App up and running on your local machine:

1. **Clone the Repository**: `git clone git@github.com:Patrycja-dz/Calendar_App.git`
2. **Navigate to the Directory**: `cd Calendar_App`
3. **Check node version**: `node -v`, if is correct go to next step
4. **Go to frontend directory** `cd planner`
5. **Install Dependencies**: `npm install`
6. **Start the Development Server**: `npm run dev`
7. **Open Your Browser**: Visit `http://localhost:5173/` to see the magic happen!
8. **Open in Visual Studio Code (Optional)**: `code .` This command opens the project in VS Code, allowing you to easily navigate and edit the codebase.

IMPORTANT: You will see everything from main branch, ensure you are in correct one if you want to see other expected stuff

## Branch Workflow

Our project follows a Git branching model to manage development, staging, and production environments. Here's an overview of the branches and their purposes:

- main: This branch represents the production environment. It contains stable and tested code that is ready for deployment to users.

- develop: The develop branch serves as the pre-production environment. It is created from the main branch and contains features and fixes that are being prepared for release. All feature branches are created from this branch.

- feature/name-of-feature: Feature branches are created from the develop branch. Each feature or enhancement is developed in its own branch. Once the feature is complete, it is merged back into the develop branch for testing and further integration.

Workflow Summary:
**Always Pull Before Pushing:**

- Create a Feature Branch: `git checkout -b feature/name-of-feature `
- Work on the Feature:
  - Implement the desired feature or enhancement in the feature branch. Make regular commits to track changes
  - `git add name-of-file` or `git add .`
  - `git commit -m "message here"`
  - `git push`
- Create Pull request
- Wait for Code Review
- If codebase have no conflicts merge changes to develop

---

Crafted with ❤️ by Patrycja, Aga, Martyna, Kamil, Michał
