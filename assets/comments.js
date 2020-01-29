// Source: https://github.com/mmistakes/made-mistakes-jekyll/blob/778e5cd667af1da070d55bc7ed20cbd5b61d504f/src/assets/javascripts/main.js
window.moveCommentForm = function (commId, parentId, respondId, postId) {
  var div
  var element
  var style
  var cssHidden
  var $ = function (id) {
    return document.getElementById(id)
  }
  var comm = $(commId)
  var respond = $(respondId)
  var cancel = $('cancel-comment-reply-link')
  var parent = $('comment-replying-to')
  var post = $('comment-post-slug')
  var commentForm = respond.getElementsByTagName('form')[0]

  if (!comm || !respond || !cancel || !parent || !commentForm) {
    return
  }

  postId = postId || false

  if (!$('sm-temp-form-div')) {
    div = document.createElement('div')
    div.id = 'sm-temp-form-div'
    div.style.display = 'none'
    respond.parentNode.insertBefore(div, respond)
  }

  comm.parentNode.insertBefore(respond, comm.nextSibling)
  if (post && postId) {
    post.value = postId
  }
  parent.value = parentId
  cancel.style.display = ''

  cancel.onclick = function () {
    var temp = $('sm-temp-form-div')
    var respond = $(respondId)

    if (!temp || !respond) return

    $('comment-replying-to').value = null
    temp.parentNode.insertBefore(respond, temp)
    temp.parentNode.removeChild(temp)
    this.style.display = 'none'
    this.onclick = null
    return false
  }

  /*
   * Set initial focus to the first form focusable element.
   * Try/catch used just to avoid errors in IE 7- which return visibility
   * 'inherit' when the visibility value is inherited from an ancestor.
   */
  try {
    for (var i = 0; i < commentForm.elements.length; i++) {
      element = commentForm.elements[i]
      cssHidden = false

      // Modern browsers.
      if ('getComputedStyle' in window) {
        style = window.getComputedStyle(element)
        // IE 8.
      } else if (document.documentElement.currentStyle) {
        style = element.currentStyle
      }

      /*
       * For display none, do the same thing jQuery does. For visibility,
       * check the element computed style since browsers are already doing
       * the job for us. In fact, the visibility computed style is the actual
       * computed value and already takes into account the element ancestors.
       */
      if (
        (element.offsetWidth <= 0 && element.offsetHeight <= 0) ||
          style.visibility === 'hidden'
      ) {
        cssHidden = true
      }

      // Skip form elements that are hidden or disabled.
      if (element.type === 'hidden' || element.disabled || cssHidden) {
        continue
      }

      element.focus()
      // Stop after the first focusable element.
      break
    }
  } catch (er) {}

  return false
}

;(function ($) {
  $('#comment-form').submit(function (evt) {
    var $this = $(this)
    var $inputs = $this.find('input, button, textarea').not(':hidden')

    evt.preventDefault()
    $inputs.prop('disabled', true)
    $('#comment-form-submit').html('Enviando comentário...')

    $.ajax({
      type: $this.attr('method'),
      url: $this.attr('action'),
      data: $this.serialize(),
      contentType: 'application/x-www-form-urlencoded',
      success: function (data) {
        $('#comment-form-submit').html('Comentário enviado')
        showAlert(
          '<strong>Obrigado pelo seu comentário!</strong> Ele está na fila de moderação e quando aprovado aparecerá no site (provavelmente só ' + (
            new Date().getHours() > 8 ? 'amanhã de manhã' : 'depois das 8 horas'
          ) + ').'
        )
      },
      error: function (err) {
        $('#comment-form-submit').html('Enviar comentário')
        showAlert(
          '<strong>Desculpe, ocorreu um erro.</strong> Verifique se todos os campos requeridos foram preenchidos e tente novamente.'
        )
        $inputs.prop('disabled', false)
      }
    })

    return false
  })

  function showAlert (message) {
    $('#comment-form .js-notice').removeClass('hidden')
    $('#comment-form .js-notice-text').html(message)
  }
})(window.jQuery)
