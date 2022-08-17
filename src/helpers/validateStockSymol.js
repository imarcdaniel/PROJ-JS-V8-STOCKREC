export function validateStockSymbol (stockSymbol) {
    // Fetch stock on server.
    const validStockSymbol = ["kirk", "trill", "tsla", "logm", "zm", "vslr"];
    const index = validStockSymbol.indexOf(stockSymbol.toLowerCase());  
    return (index > -1);
}