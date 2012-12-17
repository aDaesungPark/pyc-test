/* ===================================================================

 * スムーススクロール

=================================================================== */
$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400;// ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $($.browser.safari ? 'body' : 'html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});

//using jQuery
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function gotoPage(page, author_id, app_id) {
    var form = document.createElement('form');
    document.body.appendChild(form);
    
    if (author_id) {
        var input_author_id = document.createElement('input');
        input_author_id.setAttribute('type', 'hidden');
        input_author_id.setAttribute('name', 'author_id');
        input_author_id.setAttribute('value', author_id);
        form.appendChild(input_author_id);
    }

    if (app_id) {
        var input_app_id = document.createElement('input');
        input_app_id.setAttribute('type', 'hidden');
        input_app_id.setAttribute('name', 'app_id');
        input_app_id.setAttribute('value', app_id);    
        form.appendChild(input_app_id);
    }

    // for csrf
    var csrftoken = getCookie('csrftoken');
    if (csrftoken) {
    	var csrf = document.createElement('input');
    	csrf.setAttribute('type', 'hidden');
    	csrf.setAttribute('name', 'csrfmiddlewaretoken');
    	csrf.setAttribute('value', csrftoken);
    	form.appendChild(csrf);
    }

    form.setAttribute('action', page);
    form.setAttribute('method', 'post');
    form.submit();
}

function gotoTopPage(author_id, notification_msg) {
    var form = document.createElement('form');
    document.body.appendChild(form);
    
    var input_author_id = document.createElement('input');
    input_author_id.setAttribute('type', 'hidden');
    input_author_id.setAttribute('name', 'author_id');
    input_author_id.setAttribute('value', author_id);
    form.appendChild(input_author_id);

    var input_method = document.createElement('input');
    input_method.setAttribute('type', 'hidden');
    input_method.setAttribute('name', 'method');
    input_method.setAttribute('value', 'goto');    
    form.appendChild(input_method);

    if (notification_msg) {
        var input_message = document.createElement('input');
        input_message.setAttribute('type', 'hidden');
        input_message.setAttribute('name', 'notification_msg');
        input_message.setAttribute('value', notification_msg);    
        form.appendChild(input_message);
    }

    form.setAttribute('action', 'top.php');
    form.setAttribute('method', 'post');
    form.submit();
}


function createXMLHttpRequest(cbFunc) {
    var XMLHttpObject = null;
    try {
        XMLHttpObject = new XMLHttpRequest();
    } catch (e) {
        try {
            XMLHttpObject = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                XMLhttpObject = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                return null;
            }
        }
    }

    if (XMLHttpObject) {
        XMLHttpObject.onreadystatechange = cbFunc;
    }
    return XMLHttpObject;
}

function pullDown() {
	if (document.getElementById('author_pulldown').style.visibility == "hidden") {
		document.getElementById('author_pulldown').style.visibility = "visible";
	} else {
		document.getElementById('author_pulldown').style.visibility = "hidden";
	}
}

function gotoEditAuthorPage(author_id) {
	var form = document.createElement('form');
    document.body.appendChild(form);
    
    var input_author_id = document.createElement('input');
    input_author_id.setAttribute('type', 'hidden');
    input_author_id.setAttribute('name', 'author_id');
    input_author_id.setAttribute('value', author_id);
    form.appendChild(input_author_id);

    var input_method = document.createElement('input');
    input_method.setAttribute('type', 'hidden');
    input_method.setAttribute('name', 'method');
    input_method.setAttribute('value', 'update');    
    form.appendChild(input_method);

    form.setAttribute('action', 'edit_author.php');
    form.setAttribute('method', 'post');
    form.submit();
}

jQuery( function() {
    jQuery( '#jquery-api-slideDown-fast' ) . click( function() {
        if ( jQuery( '#jquery-api-slideDown-fast-contents' ) . is( ':hidden' ) ) {
            jQuery( '#jquery-api-slideDown-fast-contents' ) . slideDown( 'fast' );
        } else {
            jQuery( '#jquery-api-slideDown-fast-contents' ) . slideUp( 'fast' );
        }
    } );
} );

function displayNotification(message) {
	if (message) {
		$.easyNotification(message);
	}
}
