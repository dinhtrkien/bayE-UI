export default function formatPrice(price) {
    const priceStr = price.toString();
    const result = [];
  
    for (let i = priceStr.length - 1, count = 1; i >= 0; i--, count++) {
      result.push(priceStr[i]);
      if (count % 3 === 0 && i !== 0) {
        result.push('.');
      }
    }
  
    // Reverse the result array and join it back into a string
    return result.reverse().join('');
  }