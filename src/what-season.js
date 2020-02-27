module.exports = function getSeason(date) {

  if (date != undefined) {
    try {
      date.getTime();
    }
    catch (e) { throw new Error('Error'); }

    if (date.getMonth() > 1 && date.getMonth() < 5) {
      return 'spring';
    }
    if (date.getMonth() > 4 && date.getMonth() < 8) {
      return 'summer';
    }
    if (date.getMonth() > 7 && date.getMonth() < 11) {
      return 'autumn';
    }
    if (date.getMonth() == 11 || date.getMonth() < 2) {
      return 'winter';
    }
  } else {
    return 'Unable to determine the time of year!';
  }
};
