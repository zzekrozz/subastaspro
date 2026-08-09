import assert from "node:assert/strict";
import test from "node:test";

import {
  courseModules,
  courseSections,
  finalCourseModuleId,
  getModulePath
} from "../lib/course-content.js";
import {
  getNextIncompleteModule,
  normalizeCompletedModules
} from "../lib/course-state.js";
import { PRIVATE_ROUTE, STORAGE_KEYS } from "../lib/site-config.js";

const legacyModuleIds = Array.from({ length: 12 }, (_, index) => `module-${index + 1}`);

test("the expanded course keeps every historic module id", () => {
  const ids = new Set(courseModules.map((module) => module.id));

  assert.equal(courseModules.length, 16);
  legacyModuleIds.forEach((id) => assert.equal(ids.has(id), true));
  assert.equal(new Set(ids).size, courseModules.length);
});

test("the three teaching blocks assign each non-checklist module once", () => {
  const assignedIds = courseSections.flatMap((section) => section.moduleIds);
  const expectedIds = courseModules
    .filter((module) => module.id !== finalCourseModuleId)
    .map((module) => module.id);

  assert.deepEqual(assignedIds, expectedIds);
  assert.equal(new Set(assignedIds).size, assignedIds.length);
});

test("private module links use the neutral protected route", () => {
  assert.equal(PRIVATE_ROUTE, "/curso");
  assert.equal(getModulePath("ficha-auto1"), "/curso/ficha-auto1");
});

test("historic local progress is preserved and invalid values are discarded", () => {
  assert.equal(STORAGE_KEYS.completedModules, "antes-de-pujar-completed-modules");
  assert.deepEqual(
    normalizeCompletedModules(["module-1", "module-3", "module-1", "removed"], courseModules.map((module) => module.id)),
    ["module-1", "module-3"]
  );
});

test("continue points to the first incomplete module in the new curriculum", () => {
  const next = getNextIncompleteModule(courseModules, ["module-1", "module-2"]);
  const complete = getNextIncompleteModule(courseModules, courseModules.map((module) => module.id));

  assert.equal(next.id, "module-13");
  assert.equal(complete, null);
});
