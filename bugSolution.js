function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return NaN; // Return NaN to clearly indicate an undefined result 
  }
  return a / b; 
} 