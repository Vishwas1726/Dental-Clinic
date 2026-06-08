# 🦷 Core Dentistry - Modern Dental Clinic Web App & Dashboard

Core Dentistry is a premium, fully-responsive, and modern web application designed for dental clinics. It provides a seamless booking experience for patients and an intuitive, real-time management dashboard for clinic staff. 

It is designed with polished user interfaces, custom CSS micro-animations, glassmorphic elements, and state-of-the-art interactive feedback.

---

## 💡 What Problem Does It Solve?

Traditional dental clinics rely heavily on phone calls and manual entries for appointment booking, resulting in:
- Inconvenience for patients booking outside office hours.
- Inefficiency and scheduling conflicts for clinic staff.
- A lack of transparency regarding treatment details, duration, pricing, and live doctor availability.

**Core Dentistry** bridges this gap by providing:
1. **24/7 Self-Service Booking**: Patients can browse treatments, view pricing/duration, select preferred time slots, and book in under a minute.
2. **Staff Transparency & Efficiency**: An administrative dashboard allows clinic staff to track, filter, sort, and cycle the status of appointments in real time.
3. **Interactive & Visual Engagement**: Beautiful scroll-linked entrance animations, stat counters, and responsive UI components build high patient trust.

---

## 🛠️ Technology Stack

- **Frontend Core**: React.js (Component-driven architecture)
- **Styling**: Modern Vanilla CSS (HSL custom properties, Flexbox/Grid, Responsive layouts, Keyframes animations)
- **Icons**: React Icons
- **State Management & Persistence**: React Hooks (`useState`, `useEffect`, `useRef`) & `localStorage` (for persistent appointments database)
- **Celebration Effects**: Canvas Confetti (for booking completion feedback)

---

## ✨ Main Features

### 1. 🏥 Patient Portal
- **Interactive Booking Form**: Multi-step booking experience featuring treatment selectors, date picker, active time slot selection (with green visual active states and tick indicators), and real-time validation.
- **Treatment Cards & Detail Modals**: High-fidelity cards displaying clinic treatments, which can be clicked to open detailed modals displaying cost, duration, and direct-booking CTA.
- **Search & Live Filters**: Real-time filtering of treatments by category or text search query with animated skeleton loading states.
- **Frictionless Navigation**: Sleek sticky navigation header and responsive mobile menu.
- **Confetti Celebration**: Immediate reward micro-interaction upon successful booking submission.

### 2. 📊 Staff Dashboard (`/dashboard`)
- **Appointment Table**: Clean tabular view of all booked appointments fetched from persistent storage.
- **Status Progression**: Cycle appointment status dynamically: `Pending` ➡️ `Confirmed` ➡️ `Completed`.
- **Advanced Filtering**: Separate tabs to view `All`, `Pending`, `Confirmed`, and `Completed` appointments.
- **Sorting Control**: Sort appointments by Date, Patient Name, or Status.
- **Administrative Actions**: Delete individual records or clear the entire database for testing.
- **Real-Time Stat Cards**: Live counts of appointments grouped by status category.

### 3. 💫 Advanced UX & Micro-Animations
- **Scroll-Linked Entrance Animations**: Custom React intersection observer hook (`useScrollAnimation`) triggers elegant fade-in-up animations for sections when they enter the viewport.
- **Animated Stat Counter**: The "About Us" metrics dynamically count up from `0` to their final values when scrolled into view.
- **Skeleton Loading Shimmer**: A realistic 1.3-second shimmer placeholder states when loading treatments to mimic external API delays.

---

## 🚀 Installation & Local Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Vishwas1726/<repo-name>.git
   cd dental-clinic
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
