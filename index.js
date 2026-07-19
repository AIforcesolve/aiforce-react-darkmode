// Core theme logic used by the dark-mode toggle component.

// BUG: ignores the current theme and the OS preference entirely — always
// returns "dark", and never persists anything.
function getInitialTheme(prefersDark) {
  return "dark";
}

function toggleTheme(current) {
  return "dark";
}

function persistTheme(storage, theme) {
  // no-op — should write to storage
}

module.exports = { getInitialTheme, toggleTheme, persistTheme };
