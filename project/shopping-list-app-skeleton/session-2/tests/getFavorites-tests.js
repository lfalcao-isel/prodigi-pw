import { getFavorites } from '../shopping-list-web-app.js';

// Mock data
const mockLists = [
  { id: 1, name: 'Groceries', items: ['milk', 'bread', 'eggs'] },
  { id: 2, name: 'Hardware', items: ['nails', 'screws'] },
  { id: 3, name: 'Pharmacy', items: ['aspirin'] },
  { id: 4, name: 'Clothes', items: ['shirt', 'pants', 'socks', 'shoes'] }
];

// Test function
function testGetFavorites() {
  console.log('Running getFavorites tests...\n');
  
  try {
    // Test 1: Check if function returns an array
    const result = getFavorites(mockLists, 2);
    if (Array.isArray(result)) {
      console.log('✓ PASS: getFavorites returns an array');
    } else {
      console.log('✗ FAIL: getFavorites should return an array');
      return;
    }
    
    // Test 2: Check if correct number of favorites returned
    if (result.length === 2) {
      console.log(`✓ PASS: getFavorites returned ${result.length} items (expected 2)`);
    } else {
      console.log(`✗ FAIL: Expected 2 favorites, got ${result.length}`);
    }
    
    // Test 3: Verify lists are sorted by item count (descending)
    if (result[0].items.length >= result[1].items.length) {
      console.log(`✓ PASS: Lists sorted by item count (descending)`);
    } else {
      console.log(`✗ FAIL: Lists not properly sorted`);
    }
    
    // Test 4: Display the top favorites
    console.log('\nTop 2 Favorite Lists:');
    result.forEach((list, index) => {
      console.log(`  ${index + 1}. ${list.name} - ${list.items.length} items`);
    });
    
  } catch (error) {
    console.error('✗ Test error:', error.message);
  }
}

// Main function
function main() {
  console.log('=== Shopping List App - getFavorites Test Suite ===\n');
  testGetFavorites();
}

// Run the tests
main();