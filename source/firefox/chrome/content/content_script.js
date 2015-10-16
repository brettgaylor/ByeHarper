(function() {
    function walk(node)
    {
        var child, next;
        
        switch ( node.nodeType )
        {
            case 1:  // Element
            case 9:  // Document
            case 11: // Document fragment
                child = node.firstChild;
                while ( child )
                {
                    next = child.nextSibling;
                    walk(child);
                    child = next;
                }
                break;
            
            case 3: // Text node
                handleText(node);
                break;
        }
    }
    
    function handleText(textNode)
    {
        var v = textNode.nodeValue;
        
        v = v.replace(/\bSTEPHEN HARPER\b/g, "SOME FEAR MONGERING SHITHEAD");
        v = v.replace(/\bStephen Harper\b/g, "Some Fear Mongering Shithead");
        v = v.replace(/\bStephen Harper PC MP\b/g, "Some Fear Mongering Shithead");
        v = v.replace(/\bStephen Joseph Harper PC MP\b/g, "Some Fear Mongering Shithead");
        v = v.replace(/\bstephen harper\b/g, "some fear mongering shithead");
        v = v.replace(/\bPrime Minister of Canada Stephen Harper\b/g, "Some Fear Mongering Shithead");
        v = v.replace(/\bStephen Joseph Harper\b/g, "Some Fear Mongering Shithead");
        v = v.replace(/\bThe Right Honourable Stephen Joseph Harper \b/g, "Some Fear Mongering Shithead");
        v = v.replace(/\bConservative Party leader Stephen Harper\b/g, "some fear mongering shithead");
        v = v.replace(/\bPrime Minister Stephen Harper\b/g, "some fear mongering shithead");
        v = v.replace(/\bHarper\b/g, "The Fear Mongering Shithead");
        v = v.replace(/^Stephen Harper\b/g, "Some Fear Mongering Shithead");
        v = v.replace(/Conservative Party of Canada\b/g, "Old Stock Barbarians");
        v = v.replace(/The Conservatives\b/g, "Old Stock Barbarians");
        v = v.replace(/Conservative Party\b/g, "Old Stock Barbarians");
        v = v.replace(/Tories\b/g, "Old Stock Barbarians");
        
        
        textNode.nodeValue = v;
    }
    
    function windowLoadHandler()
    {
        // Dear Mozilla: I hate you for making me do this.
        window.removeEventListener('load', windowLoadHandler);
        
        document.getElementById('appcontent').addEventListener('DOMContentLoaded', function(e) {
            walk(e.originalTarget.body);
            
            new MutationObserver(function() {
              walk(e.originalTarget.body);
            }).observe(e.originalTarget.body, {
              childList: true
            });
        });
    }
    
    window.addEventListener('load', windowLoadHandler);
}());
