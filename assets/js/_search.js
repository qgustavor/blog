/** @preserve https://raw.githubusercontent.com/cowboy/jquery-throttle-debounce/master/jquery.ba-throttle-debounce.min.js */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

/** @preserve https://raw.githubusercontent.com/krisk/fuse/master/src/fuse.min.js */
!function(t){function e(t,n){this.list=t,this.options=n=n||{};var i,o,s,r;for(i=0,r=["sort","includeScore","shouldSort"],o=r.length;o>i;i++)s=r[i],this.options[s]=s in n?n[s]:e.defaultOptions[s];for(i=0,r=["searchFn","sortFn","keys","getFn"],o=r.length;o>i;i++)s=r[i],this.options[s]=n[s]||e.defaultOptions[s]}var n=function(t,e){if(e=e||{},this.options=e,this.options.location=e.location||n.defaultOptions.location,this.options.distance="distance"in e?e.distance:n.defaultOptions.distance,this.options.threshold="threshold"in e?e.threshold:n.defaultOptions.threshold,this.options.maxPatternLength=e.maxPatternLength||n.defaultOptions.maxPatternLength,this.pattern=e.caseSensitive?t:t.toLowerCase(),this.patternLen=t.length,this.patternLen>this.options.maxPatternLength)throw new Error("Pattern length is too long");this.matchmask=1<<this.patternLen-1,this.patternAlphabet=this._calculatePatternAlphabet()};n.defaultOptions={location:0,distance:100,threshold:.6,maxPatternLength:32},n.prototype._calculatePatternAlphabet=function(){var t={},e=0;for(e=0;e<this.patternLen;e++)t[this.pattern.charAt(e)]=0;for(e=0;e<this.patternLen;e++)t[this.pattern.charAt(e)]|=1<<this.pattern.length-e-1;return t},n.prototype._bitapScore=function(t,e){var n=t/this.patternLen,i=Math.abs(this.options.location-e);return this.options.distance?n+i/this.options.distance:i?1:n},n.prototype.search=function(t){if(t=this.options.caseSensitive?t:t.toLowerCase(),this.pattern===t)return{isMatch:!0,score:0};var e,n,i,o,s,r,a,h,p,c=t.length,l=this.options.location,f=this.options.threshold,u=t.indexOf(this.pattern,l),d=this.patternLen+c,g=1,m=[];for(-1!=u&&(f=Math.min(this._bitapScore(0,u),f),u=t.lastIndexOf(this.pattern,l+this.patternLen),-1!=u&&(f=Math.min(this._bitapScore(0,u),f))),u=-1,e=0;e<this.patternLen;e++){for(i=0,o=d;o>i;)this._bitapScore(e,l+o)<=f?i=o:d=o,o=Math.floor((d-i)/2+i);for(d=o,s=Math.max(1,l-o+1),r=Math.min(l+o,c)+this.patternLen,a=Array(r+2),a[r+1]=(1<<e)-1,n=r;n>=s;n--)if(p=this.patternAlphabet[t.charAt(n-1)],a[n]=0===e?(a[n+1]<<1|1)&p:(a[n+1]<<1|1)&p|((h[n+1]|h[n])<<1|1)|h[n+1],a[n]&this.matchmask&&(g=this._bitapScore(e,n-1),f>=g)){if(f=g,u=n-1,m.push(u),!(u>l))break;s=Math.max(1,2*l-u)}if(this._bitapScore(e+1,l)>f)break;h=a}return{isMatch:u>=0,score:g}};var i=function(t,e,n){var s,r,a;if(e){a=e.indexOf("."),-1!==a?(s=e.slice(0,a),r=e.slice(a+1)):s=e;var h=t[s];if(h)if(r||"string"!=typeof h&&"number"!=typeof h)if(o.isArray(h))for(var p=0,c=h.length;c>p;p++)i(h[p],r,n);else r&&i(h,r,n);else n.push(h)}else n.push(t);return n},o={deepValue:function(t,e){return i(t,e,[])},isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)}};e.defaultOptions={id:null,caseSensitive:!1,includeScore:!1,shouldSort:!0,searchFn:n,sortFn:function(t,e){return t.score-e.score},getFn:o.deepValue,keys:[]},e.prototype.set=function(t){return this.list=t,t},e.prototype.search=function(t){var e,n,i,s,r=new this.options.searchFn(t,this.options),a=this.list,h=a.length,p=this.options,c=this.options.keys,l=c.length,f=[],u={},d=[],g=function(t,e,n){if(void 0!==t&&null!==t)if("string"==typeof t)i=r.search(t),i.isMatch&&(s=u[n],s?s.score=Math.min(s.score,i.score):(u[n]={item:e,score:i.score},f.push(u[n])));else if(o.isArray(t))for(var a=0;a<t.length;a++)g(t[a],e,n)};if("string"==typeof a[0])for(var m=0;h>m;m++)g(a[m],m,m);else for(var m=0;h>m;m++)for(n=a[m],e=0;l>e;e++)g(p.getFn(n,c[e]),n,m);p.shouldSort&&f.sort(p.sortFn);for(var y=p.includeScore?function(t){return f[t]}:function(t){return f[t].item},v=p.id?function(t){f[t].item=p.getFn(f[t].item,p.id)[0]}:function(){},m=0,b=f.length;b>m;m++)v(m),d.push(y(m));return d},"object"==typeof exports?module.exports=e:"function"==typeof define&&define.amd?define(function(){return e}):t.Fuse=e}(this);

(function () {
  $('<style>', {text: `
    .big-search-container {
      position: fixed;
      top: -100%; right: 0; left: 0; height: 100%;
      display: flex;
      transition: transform 0.6s 0.3s, background 0.3s;
      flex-direction: column;
    }

    .big-search-container_visible {
      transform: translateY(100%);
      background: rgba(244, 244, 244, 0.9);
      transition: transform 0.6s, background 0.3s 0.6s;
    }

    .big-search-container input {
      margin: auto 10%;
      width: 80%;
      font-size: 2em;
    }
    
    .big-search-close {
      text-align: center;
      font-size: 2em;
      padding: 0.25em;
      opacity: 0.5;
    }
    
    .big-search-container ul {
      max-height: 0;
      transition: max-height 1.2s;
      flex-grow: 2;
      overflow: auto;
    }
    .big-search-container h2 {
      margin: 0;
    }
    .big-search-container p {
      max-height: 3em;
      overflow: hidden;
      -webkit-mask-image: linear-gradient(0deg, transparent, black 50%);
    }
    .big-search-container_hasInput ul {
      max-height: 80%;
    }
  `}).appendTo('head');
    
  var $body = $('body');
  var searchForm = $('#searchForm');
  var searchInput = $('#searchInput');
  var bigSearchForm = $('<div>', {class: 'big-search-container'}).appendTo('body');
  var bigSearchClose = $('<div>', {class: 'big-search-close'}).append('<i class="fa fa-close"></i>').appendTo(bigSearchForm);
  var bigSearchInput = $('<input>', {type: 'search', placeholder: 'O que deseja pesquisar?'}).appendTo(bigSearchForm);
  var bigSearchResults = $('<ul>').appendTo(bigSearchForm);
    
  searchForm.on('mousedown', openSearchElement);
  searchInput.on('keyup', function (evt) {
    var enteredQuery = searchInput.val();
    if (enteredQuery) {
      openSearchElement();
      bigSearchInput.val(enteredQuery);
      handleSearch();
    }
  });

  function openSearchElement(event) {  
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    
    bigSearchForm.addClass('big-search-container_visible');
    bigSearchInput.focus().on('input', $.throttle(500, handleSearch));
    
    bigSearchClose.one('click', closeSearch);
    $body.on('keydown', focusHandler);
    
    // Preload data:
    getSearchData();
  }  
    
  function focusHandler(evt) {
    if (evt.keyCode === 27 || !$.contains(bigSearchForm[0], document.activeElement)) {
      closeSearch();
    }
  }

  function closeSearch() {
    $body.off('keydown', focusHandler);
    bigSearchForm.removeClass('big-search-container_visible big-search-container_hasInput');
    bigSearchInput.add(searchInput).val('').blur();
    bigSearchResults.empty();
  } 

  function handleSearch () {
    getSearchData()
    .always(function () {
      bigSearchForm.addClass('big-search-container_hasInput');
    })
    .then(function (fuse) {
      var query = bigSearchInput.val().trim();
      var results = query && fuse
      .search(query)
      .slice(0, 5)
      .map(function (post) {        
        return $('<li>').append(
          $('<h2>').append(
            $('<a>', {href: post.url, text: post.title})
          ),
          post.escapedContent && $('<p>', {text: post.escapedContent})
        );
      });
      
      bigSearchResults.html(results.length ? results : query ? '<li><h2>Sem resultados</h2></li>' : '');
    }, function () {
      bigSearchResults.html('<li><h2>Erro</h2><p>Não foi possível abrir a pesquisa</p></li>');
    });
  }

  var cachedData;
  function getSearchData() {
    if (cachedData) return cachedData;
    var deferred = $.Deferred();
    $.ajax({
      url: '/search-index.json',
      dataType: "json",
      cache: true
    }).then(function (data) {
      data.forEach(function (post) {
        post.escapedContent = $('<div>', {html: post.content}).text();
      });
    
      var fuse = new Fuse(data, {
        keys: ['title', 'escapedContent']
      });
      deferred.resolve(fuse);
    }, deferred.reject);
    return cachedData = deferred.promise();
  }
}());