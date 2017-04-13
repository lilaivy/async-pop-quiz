const start = newDate();
const ellapsed = newDate() - start;


setTimeout(function () {
    console.log('5s later...');
}, 7000);

module.exports = setTimeout;