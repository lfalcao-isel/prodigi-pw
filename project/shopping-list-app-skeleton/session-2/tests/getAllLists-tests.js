import { getAllLists } from '../shopping-list-data.js';

// Test function
async function testGetAllLists() {
  console.log('Running getAllLists tests...\n');
  
  try {
    // Test 1: Check if function returns an array for valid userId
    const result1 = await getAllLists(1);
    if (Array.isArray(result1)) {
      console.log('✓ PASS: getAllLists returns an array for userId 1');
    } else {
      console.log('✗ FAIL: getAllLists should return an array');
      return;
    }
    
    // Test 2: Check if correct number of lists returned for userId 1
    if (result1.length === 3) {
      console.log(`✓ PASS: getAllLists returned ${result1.length} lists for userId 1 (expected 3)`);
    } else {
      console.log(`✗ FAIL: Expected 3 lists for userId 1, got ${result1.length}`);
    }
    
    // Test 3: Verify lists have required properties
    let allValid = true;
    result1.forEach((list, index) => {
      if (!list.id || !list.name || !Array.isArray(list.items)) {
        console.log(`✗ FAIL: List ${index} missing required properties`);
        allValid = false;
      }
    });
    if (allValid) {
      console.log('✓ PASS: All lists have required properties (id, name, items)');
    }
    
    // Test 4: Verify each item has required properties
    let itemsValid = true;
    result1.forEach((list) => {
      list.items.forEach((item) => {
        if (!item.id || !item.name || item.quantity === undefined || item.bought === undefined) {
          console.log(`✗ FAIL: Item ${item.name} missing required properties`);
          itemsValid = false;
        }
      });
    });
    if (itemsValid) {
      console.log('✓ PASS: All items have required properties (id, name, quantity, bought)');
    }
    
    // Test 5: Check getAllLists for userId 2
    const result2 = await getAllLists(2);
    if (result2.length === 3) {
      console.log(`✓ PASS: getAllLists returned ${result2.length} lists for userId 2 (expected 3)`);
    } else {
      console.log(`✗ FAIL: Expected 3 lists for userId 2, got ${result2.length}`);
    }
    
    // Test 6: Check getAllLists for userId 3 (empty)
    const result3 = await getAllLists(3);
    if (Array.isArray(result3) && result3.length === 0) {
      console.log(`✓ PASS: getAllLists returned empty array for userId 3 (expected 0)`);
    } else {
      console.log(`✗ FAIL: Expected empty array for userId 3, got ${result3.length}`);
    }
    
    // Test 7: Check getAllLists for non-existent userId
    const result4 = await getAllLists(999);
    if (Array.isArray(result4) && result4.length === 0) {
      console.log(`✓ PASS: getAllLists returned empty array for non-existent userId 999 (expected 0)`);
    } else {
      console.log(`✗ FAIL: Expected empty array for userId 999, got ${result4.length}`);
    }
    
    // Test 8: Display the lists for userId 1
    console.log('\nAll Lists for userId 1:');
    result1.forEach((list, index) => {
      console.log(`  ${index + 1}. ${list.name} - ${list.items.length} items`);
      list.items.forEach((item) => {
        const status = item.bought ? '✓' : '○';
        console.log(`     ${status} ${item.name} (qty: ${item.quantity})`);
      });
    });
    
    // Test 9: Display the lists for userId 2
    console.log('\nAll Lists for userId 2:');
    result2.forEach((list, index) => {
      console.log(`  ${index + 1}. ${list.name} - ${list.items.length} items`);
    });
    
    console.log('\n✓ All tests completed!');
    
  } catch (error) {
    console.error('✗ Test error:', error.message);
  }
}

// Main function
async function main() {
  console.log('=== Shopping List App - getAllLists Test Suite ===\n');
  await testGetAllLists();
}

// Run the tests
main();