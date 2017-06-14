var ADLER32_MOD = 65521
function adler32 (data) {
  var a = 1
  var b = 0
  for (var i = 0; i < data.length; i++) {
    a = (a + data.charCodeAt(i)) % ADLER32_MOD
    b = (b + a) % ADLER32_MOD
  }
  return a | (b << 16)
}

function getAnimeColor (name) {
  var normalized = name.toLowerCase()
  return tinycolor('#F11')
    .desaturate(
      adler32(normalized.substr(5)) % 30
    ).darken(
      adler32(normalized.substr(1,4)) % 20
    ).spin((normalized.charCodeAt(0) * 14.4) % 360)
}