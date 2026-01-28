// Simple HTML syntax highlighter for email preview
export function highlightHTML(html) {
  return html
    // Escape HTML first
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // Highlight comments
    .replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span style="color: #6a9955; font-style: italic;">$1</span>')
    // Highlight DOCTYPE
    .replace(/(&lt;!DOCTYPE[^&gt;]*&gt;)/gi, '<span style="color: #569cd6;">$1</span>')
    // Highlight Velocity tokens {{...}}
    .replace(/(\{\{[^}]+\}\})/g, '<span style="color: #4ec9b0; font-weight: bold;">$1</span>')
    // Highlight opening tags with attributes
    .replace(/(&lt;)([\w-]+)(\s+[^&gt;]*)?(&gt;)/g, function(match, open, tag, attrs, close) {
      let highlighted = '<span style="color: #808080;">' + open + '</span>';
      highlighted += '<span style="color: #569cd6;">' + tag + '</span>';
      
      if (attrs) {
        // Highlight attributes
        attrs = attrs.replace(/([\w-]+)(=)(&quot;|")(.*?)(&quot;|")/g, 
          '<span style="color: #9cdcfe;">$1</span><span style="color: #d4d4d4;">$2</span><span style="color: #ce9178;">$3$4$5</span>'
        );
        highlighted += attrs;
      }
      
      highlighted += '<span style="color: #808080;">' + close + '</span>';
      return highlighted;
    })
    // Highlight closing tags
    .replace(/(&lt;\/)(\w+)(&gt;)/g, '<span style="color: #808080;">$1</span><span style="color: #569cd6;">$2</span><span style="color: #808080;">$3</span>')
    // Highlight self-closing tags
    .replace(/(\/)(&gt;)/g, '<span style="color: #808080;">$1$2</span>');
}
