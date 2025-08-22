// admin/lib/api.js
export async function apiFetch(endpoint, options = {}) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const res = await fetch(`${baseUrl}${endpoint}`, {
    ...options,
    headers: {
      ...headers,
      ...(options.headers || {}),
    },
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "API request failed");
  }

  return res.json();
}

//
// ===== Admin APIs =====
//
export function createAdmin(data) {
  return apiFetch("/admins", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function listAdmins() {
  return apiFetch("/admins", {
    method: "GET",
  });
}

export function deleteAdmin(id) {
  return apiFetch(`/admins/${id}`, {
    method: "DELETE",
  });
}

//
// ===== HR APIs =====
//
export function addHR(data) {
  return apiFetch("/hrs", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function listHR() {
  return apiFetch("/hrs", {
    method: "GET",
  });
}

export function deleteHR(id) {
  return apiFetch(`/hrs/${id}`, {
    method: "DELETE",
  });
}

  export function updateHR(id, data) {
    return apiFetch(`/hrs/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

//
// ===== Internship APIs =====
//
export function addInternship(data) {
  return apiFetch("/internships", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function listInternships() {
  return apiFetch("/internships", {
    method: "GET",
  });
}

export function deleteInternship(id) {
  return apiFetch(`/internships/${id}`, {
    method: "DELETE",
  });
}

  export function updateInternship(id, data) {
    return apiFetch(`/internships/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

//
// ===== Job APIs =====
//
export function addJob(data) {
  return apiFetch("/jobs", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export function listJobs() {
  return apiFetch("/jobs", {
    method: "GET",
  });
}

export function deleteJob(id) {
  return apiFetch(`/jobs/${id}`, {
    method: "DELETE",
  });
}

  export function updateJob(id, data) {
    return apiFetch(`/jobs/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  }
