document.addEventListener('DOMContentLoaded', function() {
    var tags = document.querySelectorAll('.tag');
    for (var i = 0; i < tags.length; i++) {
      tags[i].addEventListener('click', function(e) {
        var siblings = getSiblings(this, '.tag');
        hideElements(siblings);
        
        var ul = this.nextElementSibling;
        toggleElement(ul);
  
        if (ul.style.display === 'none') {
          showElements(tags);
        }
      });
    }
  });
  
  function getSiblings(element, selector) {
    var siblings = [];
    var sibling = element.parentNode.firstChild;
    for (; sibling; sibling = sibling.nextSibling) {
      if (sibling.nodeType !== 1 || sibling === element) continue;
      if (sibling.matches(selector)) siblings.push(sibling);
    }
    return siblings;
  }
  
  function hideElements(elements) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = 'none';
    }
  }
  
  function showElements(elements) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = '';
    }
  }
  
  function toggleElement(element) {
    if (element.style.display === 'none') {
      element.style.display = '';
    } else {
      element.style.display = 'none';
    }
  }
  