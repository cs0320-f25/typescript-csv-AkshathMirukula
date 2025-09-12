import { parseCSV } from "../src/basic-parser";
import * as path from "path";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");

test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  for(const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }
});

test("parseCSV handles empty fields", async () => {
  const csvWithEmptyFields = path.join(__dirname, "../data/empty-fields.csv");
  const results = await parseCSV(csvWithEmptyFields);
  expect(results[0]).toEqual(["name", "age", "city"]);
  expect(results[1]).toEqual(["Alice", "23", ""]);
  expect(results[2]).toEqual(["", "30", "New York"]);
  expect(results[3]).toEqual(["Bob", "", "Los Angeles"]);
});

test("parseCSV handles uneven rows", async () => {
  const csvWithUnevenRows = path.join(__dirname, "../data/uneven-rows.csv");
  const results = await parseCSV(csvWithUnevenRows);
  expect(results[0]).toEqual(["name", "age", "city"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "30", "New York", "Extra Field"]);
  expect(results[3]).toEqual(["Charlie"]);
});

test(("parseCSV handles double commas (using quotes)"), async () => {
  const csvWithDoubleCommas = path.join(__dirname, "../data/double-commas.csv");
  const results = await parseCSV(csvWithDoubleCommas);
  expect(results[0]).toEqual(["name", "age", "city"]);
  expect(results[1]).toEqual(["Alice", "23", "Los Angeles, CA"]);
  expect(results[2]).toEqual(["Bob", "30", "New York"]);
  expect(results[3]).toEqual(["Charlie", "25", "Chicago, IL"]);
});

test(("parseCSV handles trailing commas (using quotes)"), async () => {
  const csvWithTrailingCommas = path.join(__dirname, "../data/trailing-commas.csv");
  const results = await parseCSV(csvWithTrailingCommas);
  expect(results[0]).toEqual(["name", "age", "city"]);
  expect(results[1]).toEqual(["Alice", "23", ""]);
  expect(results[2]).toEqual(["", "30", "New York"]);
  expect(results[3]).toEqual(["Bob", "", "Los Angeles"]);
});

test(("parseCSV handles newlines in fields (using quotes)"), async () => {
  const csvWithNewlinesInFields = path.join(__dirname, "../data/newlines-in-fields.csv");
  const results = await parseCSV(csvWithNewlinesInFields);
  expect(results[0]).toEqual(["name", "notes"]);
  expect(results[1]).toEqual(["Alice", "Line1\nLine2"]);
  expect(results[2]).toEqual(["Bob", "No newlines"]);
});