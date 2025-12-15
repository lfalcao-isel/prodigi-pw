// shopping-list-services.js - Business logic and validation layer (match session 2)
import * as data from './shopping-list-data.js'

async function getAllLists(userId) {
  return await data.getAllLists(userId)
}

async function getList(userId, listId) {
  return await data.getListById(userId, listId)
}

async function createNewList(userId, name) {
  if (!name || name.trim() === '') {
    throw new Error('List name cannot be empty')
  }
  return await data.createList(userId, name.trim())
}

async function removeList(userId, listId) {
  return await data.deleteList(userId, listId)
}

async function addItemToList(userId, listId, name, quantity) {
  if (!name || name.trim() === '') {
    throw new Error('Item name cannot be empty')
  }
  if (!quantity || Number(quantity) <= 0) {
    throw new Error('Quantity must be greater than 0')
  }
  return await data.addItem(userId, listId, { name: name.trim(), quantity: Number(quantity) })
}

async function toggleItem(userId, listId, itemId) {
  return await data.toggleBought(userId, listId, itemId)
}

async function removeItem(userId, listId, itemId) {
  return await data.deleteItem(userId, listId, itemId)
}

async function updateList(userId, listId, patch) {
  return await data.updateList(userId, listId, patch)
}

export { getAllLists, getList, createNewList, removeList, addItemToList, toggleItem, removeItem, updateList }
