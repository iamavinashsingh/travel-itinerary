# Travel Itinerary App
## Deployment Link

- **Link** : https://travel-itine.netlify.app/
  
## Overview
The **Travel Itinerary App** is a React-based application designed to help users plan and manage their travel itineraries. It provides an onboarding screen for inputting travel details and a dashboard to display travel plans, accommodations, activities, and more.

---

## Workflow

### 1. Onboarding
- **Page**: [`OnboardingScreen`](src/pages/onboardingscreen.jsx)
- **Purpose**: Collects user input for:
  - Destination
  - Duration of the trip (in days)
  - Group type (e.g., solo, family, friends)
- **Navigation**: On form submission, the app navigates to the `Dashboard` page, passing the collected data via React Router's `state`.

### 2. Dashboard
- **Page**: [`Dashboard`](src/pages/dashboard.jsx)
- **Purpose**: Displays the user's travel itinerary and details.
- **Workflow**:
  1. **Header Section**: Greets the user with their name and a prompt to prepare for the trip.
  2. **Travel Details**: Displays the destination, trip duration, group type, and trip dates using the `TravelDetails` component.
  3. **Flight Details**: Shows flight information, including departure and arrival locations, date, and time, using the `FlightDetails` component.
  4. **Accommodations**: Lists accommodations with check-in/out dates, status, and images using the `Accommodation` component.
  5. **Calendar**: Provides a visual representation of the trip duration and planned activities using the `Calendar` component.
  6. **Activities**: Lists daily activities with details like timing, duration, and pickup location using the `Activities` component.
  7. **Navigation**: Includes a top panel (`TopPanel`) for status icons and a bottom panel (`BottomPanel`) for navigation icons.

---

## Component Hierarchy

### Pages
1. **OnboardingScreen** ([`src/pages/onboardingscreen.jsx`](src/pages/onboardingscreen.jsx))
   - Collects user input for destination, duration, and group type.
   - Navigates to the dashboard with the provided details.

2. **Dashboard** ([`src/pages/dashboard.jsx`](src/pages/dashboard.jsx))
   - Displays the user's travel itinerary, including travel details, flight details, accommodations, calendar, and activities.

---

### Components
1. **TopPanel** ([`src/components/topPanel.jsx`](src/components/topPanel.jsx))
   - Displays the current time and status icons (e.g., SIM, Wi-Fi, battery).

2. **BottomPanel** ([`src/components/bottomPanel.jsx`](src/components/bottomPanel.jsx))
   - Provides navigation icons for the app's bottom navigation bar.

3. **TravelDetails** ([`src/components/traveldetails.jsx`](src/components/traveldetails.jsx))
   - Displays the destination, duration, group type, and trip dates.

4. **FlightDetails** ([`src/components/flightDetails.jsx`](src/components/flightDetails.jsx))
   - Shows flight details, including departure and arrival locations, date, and time.

5. **Accommodation** ([`src/components/accomodation.jsx`](src/components/accomodation.jsx))
   - Lists accommodations with check-in/out dates, status, and images.

6. **Calendar** ([`src/components/calendar.jsx`](src/components/calendar.jsx))
   - Displays a calendar view of the trip duration and planned activities.

7. **Activities** ([`src/components/activities.jsx`](src/components/activities.jsx))
   - Lists daily activities with details like timing, duration, and pickup location.

---
