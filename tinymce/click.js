function s4w_add_smiley(tag){var myField;tag=' '+tag+' ';if(document.getElementById(S4wCommentFormId)&&document.getElementById(S4wCommentFormId).type=='textarea'){myField=document.getElementById(S4wCommentFormId);}else{return 0;}if(document.selection){myField.focus();sel=document.selection.createRange();sel.text=tag;myField.focus();}else if(myField.selectionStart||myField.selectionStart=='0'){var startPos=myField.selectionStart;var endPos=myField.selectionEnd;var cursorPos=endPos;myField.value=myField.value.substring(0,startPos)+tag+myField.value.substring(endPos,myField.value.length);cursorPos+=tag.length;myField.focus();myField.selectionStart=cursorPos;myField.selectionEnd=cursorPos;}else{myField.value+=tag;myField.focus();}}jQuery(document).ready(function(){jQuery("#s4w-select-smiley").click(function(){if(jQuery(".s4w-smilies-content").is(":hidden"))jQuery(".s4w-smilies-content").show("slow");else jQuery(".s4w-smilies-content").hide("slow");});jQuery(".wp-smiley-select").click(function(){jQuery(".s4w-smilies-content").hide("slow");});jQuery("#wp-smiley-toggle").click(function(){if(jQuery("#wp-smiley-more").css("display")=="none"){jQuery("#wp-smiley-more").css("display","inline");jQuery("#wp-smiley-toggle").html(S4wLessText);}else{jQuery("#wp-smiley-more").css("display","none");jQuery("#wp-smiley-toggle").html(S4wMoreText);}})});