var ADLER32_MOD = 65521;
function adler32(data) {
  var a = 1;
  var b = 0;
  for (var i = 0; i < data.length; i++) {
    a = (a + data.charCodeAt(i)) % ADLER32_MOD;
    b = (b + a) % ADLER32_MOD;
  }
  return a | (b << 16);
}

function getAnimeColor(name) {
  var hash = adler32(name);
  return tinycolor('#F00')
    .desaturate(hash % 20)
    .darken((hash / 20) % 20)
    .spin((hash / 400) % 360)
    .toString();
}