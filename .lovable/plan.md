

# Fix All CTA Buttons & Contact Form — End-to-End Flows

## Problem
Every call-to-action button across the site is non-functional — no navigation, no modals, no feedback. The contact form submit gives no user feedback.

## Solution

Wire all booking/tour buttons to navigate to relevant pages using React Router's `useNavigate`, and add toast feedback to the contact form.

### 1. Hero Section (`HeroSection.tsx`)
- Import `useNavigate` from `react-router-dom`
- "Book a Stay" → navigates to `/pricing`
- "Schedule a Tour" → navigates to `/contact`

### 2. Navbar (`Navbar.tsx`)
- Import `useNavigate`
- "Book Now" button (desktop + mobile) → navigates to `/pricing`

### 3. CTA Section (`CTASection.tsx`)
- Import `useNavigate`
- "Make a Reservation" → navigates to `/pricing`
- "Schedule a Tour" → navigates to `/contact`

### 4. Suite Preview (`SuitePreview.tsx`)
- Import `useNavigate`
- "Book [Suite Name]" buttons → navigate to `/contact` (with intent to book)

### 5. Contact Form (`Contact.tsx`)
- Import `useToast` from `@/hooks/use-toast`
- Add `useState` for form fields
- On submit: validate required fields (name, email, message), show error toast if missing, show success toast if complete, clear form on success

### Files Modified
1. `src/components/HeroSection.tsx` — add navigation to 2 buttons
2. `src/components/Navbar.tsx` — add navigation to Book Now buttons
3. `src/components/CTASection.tsx` — add navigation to 2 buttons
4. `src/components/SuitePreview.tsx` — add navigation to 3 suite buttons
5. `src/pages/Contact.tsx` — add form validation + toast feedback

