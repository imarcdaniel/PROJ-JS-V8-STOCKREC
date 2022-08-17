import moment from 'moment';
import 'moment-timezone'

export function generateStockPrice(maxStockPrice, minStockprice) {
    return Math.random() * (maxStockPrice - minStockprice) + minStockprice;
  }

  export function generateStockSocialMediaCount() {
    return Number(((Math.random() * 10000)).toFixed(0));
  }
    export function generateStockRecommendation() {
    const recommendation = ['BUY', 'SELL', 'HOLD'];
    const randomIndex = Math.floor(Math.random() * recommendation.length);
    return recommendation[randomIndex];
  }

  export function getStockData(stock, dates) {
    const stockData = [];
    const today = moment().tz("America/New_York");
    const last10Days  = Array(30).fill().map(
        () => today.subtract(1, 'd').format('YYYY-MM-DD')
      );

    last10Days.forEach(date => {
        stockData.push({
            stock: stock,
            price: generateStockPrice(100, 1),
            socialMediaCount: generateStockSocialMediaCount(),
            recommendation: generateStockRecommendation(),
            date : date
    });
  });
  return stockData;
}

console.log(getStockData('FB', ['2019-01-01']));