import { STORAGE_KEYS } from "@/lib/site-config";

export function normalizeCourseAccessCredentials({ email, code }) {
  return {
    email: email.trim().toLowerCase(),
    code: code.trim().toUpperCase()
  };
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function loadCompletedModules() {
  if (typeof window === "undefined") {
    return [];
  }

  const raw = window.localStorage.getItem(STORAGE_KEYS.completedModules);

  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveCompletedModules(modules) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    STORAGE_KEYS.completedModules,
    JSON.stringify(modules)
  );
}

export function toggleCompletedModule(moduleId, modules) {
  return modules.includes(moduleId)
    ? modules.filter((item) => item !== moduleId)
    : [...modules, moduleId];
}

export function loadStoredMap(storageKey, items) {
  if (typeof window === "undefined") {
    return {};
  }

  const emptyState = Object.fromEntries(items.map((item) => [item, false]));
  const raw = window.localStorage.getItem(storageKey);

  if (!raw) {
    return emptyState;
  }

  try {
    return { ...emptyState, ...JSON.parse(raw) };
  } catch {
    return emptyState;
  }
}
