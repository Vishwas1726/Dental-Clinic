import React, { useState, useEffect } from "react";
import "../styles/Dashboard.css";

const STATUS_COLORS = {
  Pending: "status-pending",
  Confirmed: "status-confirmed",
  Completed: "status-completed",
};

const STATUS_CYCLE = {
  Pending: "Confirmed",
  Confirmed: "Completed",
  Completed: "Pending",
};

const FILTERS = ["All", "Pending", "Confirmed", "Completed"];

function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("date");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("appointments") || "[]");
    setAppointments(stored);
  }, []);

  const saveAndSet = (updated) => {
    localStorage.setItem("appointments", JSON.stringify(updated));
    setAppointments(updated);
  };

  const cycleStatus = (id) => {
    const updated = appointments.map((apt) =>
      apt.id === id ? { ...apt, status: STATUS_CYCLE[apt.status] } : apt
    );
    saveAndSet(updated);
  };

  const deleteAppointment = (id) => {
    if (!window.confirm("Delete this appointment?")) return;
    saveAndSet(appointments.filter((a) => a.id !== id));
  };

  const clearAll = () => {
    if (!window.confirm("Delete ALL appointments? This cannot be undone.")) return;
    localStorage.removeItem("appointments");
    setAppointments([]);
  };

  const filtered = appointments
    .filter((a) => filter === "All" || a.status === filter)
    .sort((a, b) => {
      if (sortBy === "date") return a.date.localeCompare(b.date);
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "status") return a.status.localeCompare(b.status);
      return 0;
    });

  const counts = {
    All: appointments.length,
    Pending: appointments.filter((a) => a.status === "Pending").length,
    Confirmed: appointments.filter((a) => a.status === "Confirmed").length,
    Completed: appointments.filter((a) => a.status === "Completed").length,
  };

  return (
    <div className="dashboard-page">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Appointments Dashboard</h1>
          <p className="dashboard-subtitle">
            Manage all patient appointment requests
          </p>
        </div>
        {appointments.length > 0 && (
          <button className="clear-all-btn" onClick={clearAll}>
            🗑 Clear All
          </button>
        )}
      </div>

      {/* Stats Row */}
      <div className="dashboard-stats-row">
        {FILTERS.map((f) => (
          <div
            key={f}
            className={`dash-stat-card ${f.toLowerCase()} ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setFilter(f)}
          >
            <span className="dash-stat-count">{counts[f]}</span>
            <span className="dash-stat-label">{f}</span>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="dashboard-controls">
        <div className="filter-tabs" role="tablist" aria-label="Filter appointments">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-tab ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
              role="tab"
              aria-selected={filter === f}
            >
              {f}
              <span className="tab-count">{counts[f]}</span>
            </button>
          ))}
        </div>
        <div className="sort-control">
          <label htmlFor="dashboard-sort">Sort by:</label>
          <select
            id="dashboard-sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="date">Date</option>
            <option value="name">Name</option>
            <option value="status">Status</option>
          </select>
        </div>
      </div>

      {/* Table / Empty State */}
      {filtered.length === 0 ? (
        <div className="dashboard-empty">
          <span className="empty-icon" aria-hidden="true">📋</span>
          <h2>No appointments {filter !== "All" ? `with status "${filter}"` : "yet"}</h2>
          <p>
            {appointments.length === 0
              ? "Once patients book appointments they will appear here."
              : "Try selecting a different filter above."}
          </p>
          {filter !== "All" && (
            <button className="btn-primary" onClick={() => setFilter("All")}>
              Show all
            </button>
          )}
        </div>
      ) : (
        <div className="dashboard-table-wrapper">
          <table className="dashboard-table" aria-label="Appointments table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>Age</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Time</th>
                <th>Concern</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((apt) => (
                <tr key={apt.id} className="table-row">
                  <td className="patient-name">{apt.name}</td>
                  <td>{apt.age}</td>
                  <td>{apt.phone}</td>
                  <td className="date-cell">{apt.date}</td>
                  <td>{apt.time}</td>
                  <td className="concern-cell">
                    <span className="concern-text">
                      {apt.problem || <em className="no-concern">Not specified</em>}
                    </span>
                  </td>
                  <td>
                    <span className={`status-badge ${STATUS_COLORS[apt.status]}`}>
                      {apt.status}
                    </span>
                  </td>
                  <td className="actions-cell">
                    <button
                      className="action-btn cycle-btn"
                      onClick={() => cycleStatus(apt.id)}
                      title={`Move to ${STATUS_CYCLE[apt.status]}`}
                      aria-label={`Change status from ${apt.status} to ${STATUS_CYCLE[apt.status]}`}
                    >
                      ↻ {STATUS_CYCLE[apt.status]}
                    </button>
                    <button
                      className="action-btn delete-btn"
                      onClick={() => deleteAppointment(apt.id)}
                      aria-label={`Delete appointment for ${apt.name}`}
                    >
                      🗑
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
