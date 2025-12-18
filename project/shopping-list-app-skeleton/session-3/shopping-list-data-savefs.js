// shopping-lists-save-data.js - Wrapper module to enable persistence hooks without changing callers
// NOTE: This module mirrors the API of shopping-list-data.js.
// - Non-mutating operations are direct exports.
// - Mutating operations decorate the originals to persist after changes.

import {
  getAllLists as baseGetAllLists,
  getListById as baseGetListById,
  createList as baseCreateList,
  deleteList as baseDeleteList,
  addItem as baseAddItem,
  toggleBought as baseToggleBought,
  deleteItem as baseDeleteItem,
  updateList as baseUpdateList,
  setInitialData
} from './shopping-list-data.js';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';


// Mutating: decorated exports
export const createList = saveDecorator(baseCreateList);
export const deleteList = saveDecorator(baseDeleteList);
export const addItem = saveDecorator(baseAddItem);
export const toggleBought = saveDecorator(baseToggleBought);
export const deleteItem = saveDecorator(baseDeleteItem);
export const updateList = saveDecorator(baseUpdateList);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, "data")

// Non-mutating: direct export (no data changes)
export const getAllLists = baseGetAllLists;
export const getListById = baseGetListById;

const lists = await readAllLists(dataDir)
setInitialData(lists)

// Save lists to JSON file: Data-User<userId>.json
async function saveToFile(userId, lists) {
  const filePath = path.join(dataDir, `Data-User${userId}.json`);
  const json = JSON.stringify(lists, null, 2);
  await fs.writeFile(filePath, json, 'utf8');
  return { success: true, filePath };
}

// Decorator to persist lists after a mutating operation
function saveDecorator(fn) {
  return async (...args) => {
    const result = await fn(...args);
    try {
      const userId = args[0];
      const lists = await baseGetAllLists(userId);
      await saveToFile(userId, lists);
    } catch (err) {
      console.warn('saveToFile failed:', err);
    }
    return result;
  };
}

async function readAllLists(directoryPath) {
  try {
    const obj = { }
    const files = await fs.readdir(directoryPath);
    await Promise.all(files.map(async file => {
      // Match pattern: Data-User<userId>.json
      const match = file.match(/^Data-User(\d+)\.json$/);
      if (match) {
        const userId = match[1];
        const fileContent = await fs.readFile(path.join(directoryPath,file))
        const lists = JSON.parse(fileContent)
        obj[userId] = lists
      }
    }))
    return obj
  } catch (err) {
    console.error('Error reading directory:', err);
  }
}