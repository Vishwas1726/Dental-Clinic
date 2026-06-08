import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import Confetti from "../components/Confetti";
import "../styles/Appointment.css";

/* ── helpers ─────────────────────────────── */
const today = () => new Date().toISOString().split("T")[0];

function validate(form) {
  const errors = {};
  if (!form.name.trim() || form.name.trim().length < 2)
    errors.name = "Please enter your full name (at least 2 characters).";
  const age = Number(form.age);
  if (!form.age || isNaN(age) || age < 1 || age > 120 || !Number.isInteger(age))
    errors.age = "Please enter a valid age between 1 and 120.";
  const phoneDigits = form.phone.replace(/\D/g, "");
  if (phoneDigits.length < 10)
    errors.phone = "Please enter a valid 10-digit phone number.";
  if (!form.date)
    errors.date = "Please select a date.";
  else if (form.date < today())
    errors.date = "Appointment date cannot be in the past.";
  if (!form.time)
    errors.time = "Please select a preferred time slot.";
  return errors;
}

function saveAppointment(data) {
  const stored = JSON.parse(localStorage.getItem("appointments") || "[]");
  const entry = {
    ...data,
    id: `APT-${Date.now()}`,
    status: "Pending",
    submittedAt: new Date().toISOString(),
  };
  stored.push(entry);
  localStorage.setItem("appointments", JSON.stringify(stored));
}

const TIME_SLOTS = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"
];

/* ── Component ───────────────────────────── */
function BookAppointment() {
  const [form, setForm] = useState({
    name: "", age: "", phone: "", date: "", time: "", problem: ""
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleChange = (e) => {
    const updated = { ...form, [e.target.name]: e.target.value };
    setForm(updated);
    // Re-validate touched field live
    if (touched[e.target.name]) {
      const newErrors = validate(updated);
      setErrors((prev) => ({ ...prev, [e.target.name]: newErrors[e.target.name] }));
    }
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
    const newErrors = validate(form);
    setErrors((prev) => ({ ...prev, [e.target.name]: newErrors[e.target.name] }));
  };

  const handleTimeSelect = (slot) => {
    const updated = { ...form, time: slot };
    setForm(updated);
    setTouched((prev) => ({ ...prev, time: true }));
    const newErrors = validate(updated);
    setErrors((prev) => ({ ...prev, time: newErrors.time }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(Object.keys(form).map((k) => [k, true]));
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    saveAppointment(form);
    setSubmitted(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  const handleReset = () => {
    setForm({ name: "", age: "", phone: "", date: "", time: "", problem: "" });
    setErrors({});
    setTouched({});
    setSubmitted(false);
  };

  const isFormValid = Object.keys(validate(form)).length === 0;

  const fieldClass = (name) => {
    if (!touched[name]) return "";
    return errors[name] ? "input-error" : "input-success";
  };

  if (submitted) {
    return (
      <>
        {showConfetti && <Confetti />}
        <div className="appointment-container">
          <div className="success-banner">
            <div className="success-icon" aria-hidden="true">🎉</div>
            <h2>Appointment Requested!</h2>
            <p className="success-name">Thank you, <strong>{form.name}</strong>.</p>
            <p className="success-details">
              We've received your request for <strong>{form.date}</strong> at <strong>{form.time}</strong>.
              Our team will confirm within 24 hours at <strong>{form.phone}</strong>.
            </p>
            <div className="success-actions">
              <button className="btn-primary" onClick={handleReset}>
                Book Another Appointment
              </button>
              <a className="btn-secondary" href="/dashboard">
                View Dashboard
              </a>
            </div>
          </div>

          <div className="clinic-info" aria-label="Clinic Information">
            <h2>Core Dentistry</h2>
            <div className="clinic-card">
              <FaMapMarkerAlt className="clinic-icon" aria-hidden="true" />
              <p><span className="sr-only">Location: </span>Patel Colony, Jamnagar</p>
            </div>
            <div className="clinic-card">
              <FaPhoneAlt className="clinic-icon" aria-hidden="true" />
              <p><span className="sr-only">Phone: </span>+91 9876543210</p>
            </div>
            <div className="clinic-card">
              <FaEnvelope className="clinic-icon" aria-hidden="true" />
              <p><span className="sr-only">Email: </span>coredentistry@gmail.com</p>
            </div>
            <div className="clinic-card">
              <FaClock className="clinic-icon" aria-hidden="true" />
              <div>
                <span className="sr-only">Timings: </span>
                <p>Weekdays: 9AM – 1PM &amp; 3PM – 8PM</p>
                <p>Sunday: 9AM – 1PM</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {showConfetti && <Confetti />}
      <div className="appointment-container">
        <form className="appointment-form" onSubmit={handleSubmit} noValidate>
          <h2>Book Appointment</h2>

          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="apt-name">Full Name</label>
            <input
              id="apt-name"
              name="name"
              value={form.name}
              placeholder="e.g., Jane Doe"
              onChange={handleChange}
              onBlur={handleBlur}
              className={fieldClass("name")}
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "err-name" : undefined}
            />
            {touched.name && errors.name && (
              <span className="error-msg" id="err-name" role="alert">{errors.name}</span>
            )}
            {touched.name && !errors.name && (
              <span className="success-msg" aria-hidden="true">✓ Looks good</span>
            )}
          </div>

          {/* Age */}
          <div className="form-group">
            <label htmlFor="apt-age">Age</label>
            <input
              id="apt-age"
              name="age"
              type="number"
              min="1"
              max="120"
              value={form.age}
              placeholder="e.g., 30"
              onChange={handleChange}
              onBlur={handleBlur}
              className={fieldClass("age")}
              aria-required="true"
              aria-invalid={!!errors.age}
              aria-describedby={errors.age ? "err-age" : undefined}
            />
            {touched.age && errors.age && (
              <span className="error-msg" id="err-age" role="alert">{errors.age}</span>
            )}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label htmlFor="apt-phone">Phone Number</label>
            <input
              id="apt-phone"
              name="phone"
              type="tel"
              value={form.phone}
              placeholder="e.g., 98765 43210"
              onChange={handleChange}
              onBlur={handleBlur}
              className={fieldClass("phone")}
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "err-phone" : undefined}
            />
            {touched.phone && errors.phone && (
              <span className="error-msg" id="err-phone" role="alert">{errors.phone}</span>
            )}
          </div>

          {/* Date */}
          <div className="form-group">
            <label htmlFor="apt-date">Preferred Date</label>
            <input
              id="apt-date"
              type="date"
              name="date"
              value={form.date}
              min={today()}
              onChange={handleChange}
              onBlur={handleBlur}
              className={fieldClass("date")}
              aria-required="true"
              aria-invalid={!!errors.date}
              aria-describedby={errors.date ? "err-date" : undefined}
            />
            {touched.date && errors.date && (
              <span className="error-msg" id="err-date" role="alert">{errors.date}</span>
            )}
          </div>

          {/* Time Slot */}
          <div className="form-group">
            <label id="time-slot-label">Preferred Time Slot</label>
            <div className="time-slots-grid" role="radiogroup" aria-labelledby="time-slot-label">
              {TIME_SLOTS.map((slot) => {
                const isSelected = form.time === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    className={`time-slot-btn ${isSelected ? "selected" : ""}`}
                    onClick={() => handleTimeSelect(slot)}
                    role="radio"
                    aria-checked={isSelected}
                    tabIndex={0}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
            {touched.time && errors.time && (
              <span className="error-msg" role="alert">{errors.time}</span>
            )}
          </div>

          {/* Concern */}
          <div className="form-group">
            <label htmlFor="apt-problem">Describe your dental concern <span className="optional-label">(optional)</span></label>
            <textarea
              id="apt-problem"
              name="problem"
              value={form.problem}
              placeholder="Please share any specific symptoms or concerns..."
              onChange={handleChange}
              rows="4"
            />
          </div>

          <button
            type="submit"
            className={isFormValid ? "submit-btn-ready" : "submit-btn-disabled"}
            aria-label="Submit Appointment Request"
          >
            {isFormValid ? "✓ Book Appointment" : "Complete the form to book"}
          </button>
        </form>

        <div className="clinic-info" aria-label="Clinic Information">
          <h2>Core Dentistry</h2>
          <div className="clinic-card">
            <FaMapMarkerAlt className="clinic-icon" aria-hidden="true" />
            <p><span className="sr-only">Location: </span>Patel Colony, Jamnagar</p>
          </div>
          <div className="clinic-card">
            <FaPhoneAlt className="clinic-icon" aria-hidden="true" />
            <p><span className="sr-only">Phone: </span>+91 9876543210</p>
          </div>
          <div className="clinic-card">
            <FaEnvelope className="clinic-icon" aria-hidden="true" />
            <p><span className="sr-only">Email: </span>coredentistry@gmail.com</p>
          </div>
          <div className="clinic-card">
            <FaClock className="clinic-icon" aria-hidden="true" />
            <div>
              <span className="sr-only">Timings: </span>
              <p>Weekdays: 9AM – 1PM &amp; 3PM – 8PM</p>
              <p>Sunday: 9AM – 1PM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookAppointment;