# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

features/ Folder
This folder modularizes app features. Let’s break it down:

1. authentication/
   Handles user authentication functionality.

LoginForm.jsx: A form for user login. Likely uses controlled components and form validation (e.g., with React Hook Form).
SignupForm.jsx: Similar to LoginForm.jsx but for user registration.
UpdatePasswordForm.jsx: Allows users to update their password.
UpdateUserDataForm.jsx: A form to update profile information (e.g., name, email).
UserAvatar.jsx: Displays the user's profile picture. Might support uploading a new avatar. 2. bookings/
Manages bookings-related features.

BookingDataBox.jsx: Likely a small UI component summarizing booking details.
BookingDetail.jsx: Displays detailed booking information (e.g., guest name, cabin, check-in date).
BookingTable.jsx: Renders a table of bookings with sortable columns.
BookingTableOperations.jsx: Adds functionality for table actions (e.g., filtering, exporting data).
useBookings.js: Custom hook for fetching and managing booking data. 3. cabins/
Handles cabin management.

AddCabin.jsx: A form to add new cabins.
CabinRow.jsx: Represents a single row in the cabin table.
CabinTable.jsx: Displays a table of cabins with features like sorting and filtering.
CabinTableOperations.jsx: Provides operations (e.g., delete or edit cabins).
CreateCabinForm.jsx: Form component for creating or updating cabins.
Hooks (useCabins.js, useCreateCabin.js, etc.):
Custom hooks for interacting with cabins (fetching, creating, deleting). 4. check-in-out/
Handles check-in and check-out functionality.

CheckinBooking.jsx: Lets staff check in a guest for a booking.
CheckoutButton.jsx: A button to handle guest check-out.
TodayActivity.jsx: Displays today's check-ins and check-outs.
TodayItem.jsx: A smaller component showing individual activity details. 5. dashboard/
Components for the admin dashboard.

DashboardBox.jsx: A small box component for displaying a summary (e.g., "Total Bookings").
DashboardFilter.jsx: Filters data shown in the dashboard (e.g., by date range).
Charts (SalesChart.jsx, DurationChart.jsx):
Visualize metrics like total sales or booking durations using chart libraries. 6. settings/
Handles application settings.

UpdateSettingsForm.jsx: A form to update app-level settings (e.g., currency, timezone).
Hooks (useSettings.js, useUpdateSetting.js):
Custom hooks for managing settings data.

data/ Folder
Contains static data, images, or mock data for development/testing purposes.
cabins/

Includes image files for cabins (e.g., cabin-001.jpg). These are likely used in the cabin management features.
data-bookings.js

Provides mock booking data, possibly an array of booking objects. Each object likely includes details like:
Booking ID
Guest details
Cabin details
Check-in/check-out dates
data-cabins.js

Mock data for cabins, likely an array of objects with fields such as:
Cabin name
Capacity
Price
Image URL
data-guests.js

Mock data for guests, possibly including fields like:
Guest name
Contact information
Past booking history
Uploader.jsx

Likely a reusable component for uploading files (e.g., cabin images). It might integrate with services like Supabase Storage.

hooks/ Folder
Reusable custom hooks.

useLocalStorageState.js: Manages state that persists in localStorage.
useMoveBack.js: Provides logic for navigating backward (e.g., browser history).
useOutsideClick.js: Detects clicks outside a component (useful for closing dropdowns or modals).
pages/ Folder
Defines route-level components.

Account.jsx: Displays user account information and settings.
Bookings.jsx: Shows a list of bookings (likely using components from features/bookings).
Cabins.jsx: Displays cabin management UI.
Dashboard.jsx: Renders the admin dashboard.
Login.jsx: The login page.
Settings.jsx: Renders the settings page.
Users.jsx: Likely displays a list of users (admin-only feature).
PageNotFound.jsx: Handles 404 errors for undefined routes.
services/ Folder
Contains API-related logic.

apiBookings.js: Functions for interacting with booking-related APIs (e.g., fetch, create, update).
apiCabins.js: Functions for interacting with cabin-related APIs.
apiSettings.js: Functions for managing app settings.
supabase.js: Likely sets up and exports the Supabase client for database operations.
styles/ Folder
GlobalStyle.js: Defines global CSS styles, possibly using styled-components.
ui/ Folder
Reusable UI components.

Examples:
Button.jsx: Custom button component with consistent styles.
Form.jsx, Input.jsx: For building forms.
Modal.jsx: A reusable modal dialog.
Spinner.jsx: A loading spinner.
Table.jsx: A generic table component.
Summary
