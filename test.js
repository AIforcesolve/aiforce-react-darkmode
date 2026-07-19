const test = require("node:test");
const assert = require("node:assert/strict");
const { getInitialTheme, toggleTheme, persistTheme } = require("./index.js");

test("initial theme follows the OS preference", () => {
  assert.equal(getInitialTheme(true), "dark");
  assert.equal(getInitialTheme(false), "light");
});

test("toggling flips the current theme", () => {
  assert.equal(toggleTheme("light"), "dark");
  assert.equal(toggleTheme("dark"), "light");
});

test("persists the theme to storage", () => {
  const storage = {};
  persistTheme(storage, "dark");
  assert.equal(storage.theme, "dark");
});
