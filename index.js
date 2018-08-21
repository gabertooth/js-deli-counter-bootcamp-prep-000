function currentLine(arr) {
  var empty = [];
  if (arr.length < 1) {
    return 'There is nobody in line.';
  } else {
    for (var i = 0; i < arr.length; i++) {
      empty.push(arr.indexOf(arr[i]) + 1, '.', arr[i], ', ');
    }
    return 'The line is currently: ' + empty.join(' ');
  }}