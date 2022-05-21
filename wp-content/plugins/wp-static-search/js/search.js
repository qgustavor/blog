// based on mkdocs: https://github.com/mkdocs/mkdocs/blob/master/mkdocs/contrib/search/templates/search/main.js , 2505a90
// mkdocs has 2 clause BSD License, Copyright © 2014, Tom Christie. All rights reserved.
// Modificaions made by Gergely Szerovay, licensed under the Apache 2 or GPL 2+ license


var searchWorker;
var min_search_length = 3;

function affixScriptToHead(url, onloadFunction) {
    var newScript = document.createElement("script");
    newScript.onerror = loadError;
    if (onloadFunction) { newScript.onload = function() {
        setTimeout(onloadFunction, 0);
    }; }
    document.head.appendChild(newScript);
    newScript.src = url;
}

function getSearchTermFromLocation() {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == 'q') {
            return decodeURIComponent(sParameterName[1].replace(/\+/g, '%20'));
        }
    }
}

function formatResult(result) {
	var wrapper = document.createElement('div')
	wrapper.className = 'ss-article'
	var text = document.createElement('div')
	text.className = 'ss-text'
	var title = document.createElement('h3')
	title.textContent = result.title
	var anchor = document.createElement('a')
	anchor.href = result.location
	var snippet = document.createElement('p')
	snippet.textContent = result.summary + '...'
	anchor.appendChild(title)
	anchor.appendChild(snippet)
	text.appendChild(anchor)
	wrapper.appendChild(text)

    return wrapper
}

function displayResults(results) {
    var search_results = document.getElementById("ss-search-results");
    while (search_results.firstChild) {
        search_results.removeChild(search_results.firstChild);
    }
    if (results.length > 0) {
        for (var i = 0; i < results.length; i++) {
			if (i >= 5) break
            search_results.appendChild(formatResult(results[i]))
        }
    } else {
        search_results.insertAdjacentHTML('beforeend', "<p>Nada encontrado</p>");
    }
}

function doSearch() {
    var query = document.getElementById('ss-search-query').value;
    if (query.length > min_search_length) {
        if (!window.Worker) {
            displayResults(search(query));
        } else {
            searchWorker.postMessage({query: query});
        }
    } else {
        // Clear results for short queries
        displayResults([]);
    }
}

function initSearch() {
    var search_input = document.getElementById('ss-search-query');
    if (search_input) {
        search_input.addEventListener("keyup", doSearch);
    }
    var term = getSearchTermFromLocation();
    if (term) {
        search_input.value = term;
        doSearch();
    }
}

function onWorkerMessage(e) {
    if (e.data.allowSearch) {
        initSearch();
    } else if (e.data.results) {
        var results = e.data.results;
        displayResults(results);
    }
}

if (!window.Worker) {
    console.log('Web Worker API not supported');
    // load index in main thread
    affixScriptToHead(appStaticSearch.siteUrl + "/wp-content/plugins/wp-static-search/js/worker.js?ver=0.0.1").done(function () {
        console.log('Loaded worker');
        init(appStaticSearch.indexVersion);
        window.postMessage = function (msg) {
            onWorkerMessage({data: msg});
        };
    }).fail(function (jqxhr, settings, exception) {
        console.error('Could not load worker.js');
    });
} else {
    // Wrap search in a web worker
    searchWorker = new Worker(appStaticSearch.siteUrl + "/wp-content/plugins/wp-static-search/js/worker.js?ver=0.0.1");
    searchWorker.postMessage({init: {version: appStaticSearch.indexVersion}});
    searchWorker.onmessage = onWorkerMessage;
}