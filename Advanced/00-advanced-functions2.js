const calculateTotal = (taxRate) => (shippingCost) => (price) => price + (price * taxRate) + shippingCost


// 1. Preconfiguramos la tasa de IVA (ej. 21% para España)
const calculateSpainTotal = calculateTotal(0.21);

// 2. Preconfiguramos una tarifa de envío estándar (5€)
const calculateStandardSpainTotal = calculateSpainTotal(5);

// 3. Calculamos el total para diferentes precios de productos
console.log(calculateStandardSpainTotal(100)); // 100 + 21 (IVA) + 5 (envío) = 126
console.log(calculateStandardSpainTotal(50));  // 50 + 10.5 (IVA) + 5 (envío) = 65.5

// También podemos reocupar 'calculateSpainTotal' con envío exprés (10€)
const calculateExpressSpainTotal = calculateSpainTotal(10);

console.log(calculateExpressSpainTotal(100)); // 100 + 21 (IVA) + 10 (envío exprés) = 131



