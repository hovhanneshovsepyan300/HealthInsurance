import Vue from 'vue'

Vue.prototype.$removeHtmltags = str => {
    if ((str===null) || (str===''))
        return false;
    else
        str = str.toString();
        
    let elem = document.createElement('textarea');
    elem.innerHTML = str;
    let decoded = elem.value;

    return decoded.replace( /(<([^>]+)>)/ig, '');
}

Vue.prototype.$getInnerHtml = str => {
    let div = document.createElement('div');
    div.innerHTML = str.trim();

    return div.firstChild.innerHTML; 
}