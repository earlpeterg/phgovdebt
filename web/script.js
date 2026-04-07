(function() {
    function do_forecast() {
        // NOTE: Already provided from the model.
        let forecasted_values = [18062714,18184528,18233328,18322609,18433391,18614850,18602110,18711164,18789924,18863629,18946731,19020877];
        let month = new Date().getMonth();

        let firstDayOfMonth = new Date(new Date().getFullYear(), month, 1).getTime();
        let firstDayOfNextMonth = new Date(new Date().getFullYear(), month + 1, 1).getTime();
        let currentTime = new Date().getTime();
        let nextMonthDuration = firstDayOfNextMonth - firstDayOfMonth;
        let elapsedTime = currentTime - firstDayOfMonth;
        let elapsedTimePercentage = elapsedTime / nextMonthDuration;

        let currentMonthForecast = forecasted_values[month];
        let nextMonthForecast = forecasted_values[month + 1];
        let forecasted_value = (currentMonthForecast + (nextMonthForecast - currentMonthForecast) * elapsedTimePercentage) * 1000;
        let formatted_value = Math.round(forecasted_value).toLocaleString('en-US');

        $('#forecasted_value').text("₱" + formatted_value);
    }

    $(document).ready(function() {
        do_forecast();
        setInterval(do_forecast, 1000);
    })
})();
