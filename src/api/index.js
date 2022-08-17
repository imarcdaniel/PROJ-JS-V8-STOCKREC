import moment from 'moment';
import 'moment-timezone'

export function generateStockPrice(maxStockPrice, minStockprice) {
    return Math.random() * (maxStockPrice - minStockprice) + minStockprice;
  }

  export function generateStockSocialMediaCount() {
    return Number(((Math.random() * 10000)).toFixed(0));
  }
    export function generateStockRecommendation() {
    const randomNumber= Math.random();
    const baseAlgo = Math.random() * generateStockPrice(60, 1) ;
    if (randomNumber / Math.floor(baseAlgo) > randomNumber/5 ) {
        return 'BUY';
    } else if (randomNumber/ Math.floor(baseAlgo) < randomNumber/5) { 
        return 'SELL';
    } else { return 'HOLD'; }
    
  }

  export function getStockData(stock, days) {
    const stockData = [];
    const today = moment().tz("America/New_York");
    
    const last10Days  = Array(days).fill().map(
        () => today.subtract(1, 'd').format('YYYY-MM-DD')
      );
    last10Days.forEach(date => {
        stockData.push({
            stock,
            price: generateStockPrice(100, 1).toFixed(2),
            socialMediaCount: generateStockSocialMediaCount(),
            recommendation: generateStockRecommendation(),
            date : date
    });
  });
  return stockData;
}
