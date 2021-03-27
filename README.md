# Full Stack Accessibility Workshop

The contents of this repository are designed to help you think through writing your own web applications that are intersectionally accessibile.

## Requirements

- Node 14+
- NPM and yarn

## App Description

This application is a task manager. Users will be able to login and manage their tasks and get reminders for due dates.
A user can be defined by anyone that needs to complete a task. The number of user profiles for this application are as numerous
and varied as the population of the world.

## Getting Started

Install all of the dependencies by running `npm install` at the root of the application.
This application uses sequelize to manage data models and migrations please follow the [getting started documentation]() if you are
building an application from scratch.

## Define your parameters

Think about the application structure. What are the core requirements of being able to view and manage your tasks?
How can people with accessibility devices, like screen readers, access this application? What about someone without data
resources? Does the user have multiple ways to create, update, and remove information?

## Tools for success

- Testing with @testing-library/react
- Linting with eslint-jsx-ally
- Browser based developer tools like Lighthouse and axe
- Performance test with Artillery

## Data Models

Task: title, description, dueAt, userId
User: firstName, lastName, email, password, settings
