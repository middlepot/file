//   ・゜ ♡   web code snippet for discord   ♡ ゜ ・
//         © middlepot.com  ꒰ ू´ ˘ ` ू ꒱

//      last update :  2022 . april . 27

function addStyleString(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
}

function mremoveBlockedItems(){
    var selection = document.querySelectorAll('.groupStart-3Mlgv1 .blockedSystemMessage-3FmE9n');
    if(selection && selection.length > 0){
        selection.forEach(child =>{
            var parent = child.closest('.groupStart-3Mlgv1');
            if(parent){
                parent.remove();
            }
        })
    }
}
setInterval(mremoveBlockedItems, 500);

if(window.location.host.includes('discord.com')){
var link = document.querySelectorAll("link[rel*='icon']") || document.createElement('link');
for(var i = 0; i < link.length; ++i){
    link[i].type = 'image/x-icon';
    link[i].rel = 'icon';
    link[i].href = 'https://i.imgur.com/flBqBLd.png';
    document.getElementsByTagName('head')[0].appendChild(link[i])
}
	var c = `
	.spoilerText-27bIiA.hidden-3B-Rum {background-color: #eee5e5 !important;}
	.newMessagesBar-1hF-9G.barBase-3xxDXu {background-color: #eee5e5 !important;}
	.autocomplete-3NRXG8.autocomplete-3jLKbj.autocompleteAttached-bt_md- {background-color: #eee5e5 !important;}
	.unreadPill-3nEWYM {display: none !important;}
	.replying-eZ7p5z {background-color: #eee5e5 !important;}
	.replying-eZ7p5z:before {background-color: #dbcacb !important;}
	.blockedSystemMessage-3FmE9n {display: none !important;}
	.folderIconWrapper-1oRIZr {background-color: #eee5e5 !important;}
	.expandedFolderIconWrapper-3RwQpD > svg {color: #dbcacb !important;}
	.circleIconButton-1VxDrg {background-color: #eee5e5 !important;}
	.circleIcon-3489FI {color: #dbcacb !important;}
	.homeIcon-r0w4ny {color: #dbcacb !important;}
	.childWrapper-1j_1ub {background-color: #eee5e5 !important;}
	.item-3mHhwr.item-3XjbnG.themed-2-lozF {background-color: #eee5e5 !important; color: #a69797 !important;}
	.addFriendInputWrapper-kkoSV9 {background-color: #eee5e5 !important;}
	.image-20MDYu.marginBottom40-fvAlAV {display: none !important;}
	.text-27cdrj.marginTop8-24uXGp {display: none !important;}
	.button-f2h6uQ.lookFilled-yCfaCM.colorBrand-I6CyqQ.sizeSmall-wU2dO-.grow-2sR_-F {background-color: #dbcacb !important;}
	.tabBody-2dgbAs {background-color: #eee5e5 !important;}
	.botTag-2mryIa.botTagRegular-kpctgU.botTag-7aX5WZ.px-MnE_OR {background-color: #dbcacb !important;}
	.botTagCozy-3NTBvK.botTag-1NoD0B.botTagRegular-kpctgU.botTag-7aX5WZ.rem-3kT9wc {background-color: #dbcacb !important;}
	.headerBotTag-1xw5Ck.bot-XvK26D.botTagRegular-kpctgU.botTag-7aX5WZ.px-MnE_OR {background-color: #dbcacb !important;}
	.message-2CShn3.cozyMessage-1DWF9U.mentioned-Tre-dv.groupStart-3Mlgv1.wrapper-30-Nkg.cozy-VmLDNB.zalgo-26OfGz {background-color: #eee5e5 !important;}
	.mentioned-Tre-dv:before {background-color: #dbcacb !important;}
	.roleMention-11Aaqi.desaturate-_Twf3u.wrapper-1ZcZW-.mention {background-color: #dbcacb !important; color: #fff !important;}
	.wrapper-1ZcZW-.mention {background-color: #dbcacb !important; color: #fff !important;}
	.mention.wrapper-1ZcZW-.mention.interactive {background-color: #dbcacb !important; color: #fff !important;}
	.reaction-2A2y9y.reactionMe-3I9gFK {background-color: rgb(255, 255, 255, 0.05) !important; border-color: #dbcacb !important; color: #fff !important;}
	.reactionCount-1zkLcN {color: #fff !important;}
 ::selection {text-shadow: 0 0 2px #cec1bb;color:#cec1bb}
 ::-moz-selection {text-shadow: 0 0 2px #cec1bb;color:#cec1bb}
 .theme-dark {
    --background-tertiary: #ece1e2 !important;
    --background-secondary: #eee5e5 !important;
    --background-secondary-alt: #f1eaeb !important;
    --background-primary: #f2eaea !important;
    --background-modifier-accent: none !important;
    --background-modifier-hover: #ece3e4 !important;
    --background-modifier-active: #ece3e4 !important;
    --background-modifier-selected: #e7dbdc !important;
    --background-accent: #eee8e8 !important;
    --header-primary: #fff !important;
    --header-secondary: rgb(245, 242, 242) !important;
    --text-normal: #696060 !important;
    --settings-buttons-text: #827373 !important;
    --channeltextarea-background: #f7f3f3 !important;
    --deprecated-card-bg: #dfd0d0 !important;
    --background-floating: #f3ecec !important;
    --deprecated-quickswitcher-input-background: #d0bfbf !important;
    --scrollbar-auto-thumb: #e9dbdb !important;
    --scrollbar-auto-track: #none !important;
    --scrollbar-thin-thumb: #none !important;
    --elevation-low: none !important;
    --smallpopoutcolor1: rgb(242, 234, 234) !important;
    --smallpopoutcolor2: #ece1e1 !important;
    --spotify-color: #f4eaec !important;
    --user-buttons-color: #dac8c8 !important;
    --chat-buttons: #f4eaf0 !important;
    --text-link: #a08c8c !important;
    --CircleIconButton: #f4eaf0 !important;
    --DiscordDMButtonBG: #ac9292 !important;
    --DiscordDMButtonActive: #fff !important;
    --elevation-low: none !important;
    --CircleIconButtonBG: #ac9292 !important;
 }
 
.theme-light {
    --background-tertiary: #ece1e2 !important;
    --background-secondary: #eee5e5 !important;
    --background-secondary-alt: #f1eaeb !important;
    --background-primary: #f2eaea !important;
    --background-modifier-accent: none !important;
    --background-modifier-hover: #ece3e4 !important;
    --background-modifier-active: #ece3e4 !important;
    --background-modifier-selected: #e7dbdc !important;
    --background-accent: #eee8e8 !important;
    --header-primary: #fff !important;
    --header-secondary: rgb(245, 242, 242) !important;
    --text-normal: #696060 !important;
    --settings-buttons-text: #827373 !important;
    --channeltextarea-background: #f7f3f3 !important;
    --deprecated-card-bg: #dfd0d0 !important;
    --background-floating: #f3ecec !important;
    --deprecated-quickswitcher-input-background: #d0bfbf !important;
    --scrollbar-auto-thumb: #e9dbdb !important;
    --scrollbar-auto-track: #none !important;
    --scrollbar-thin-thumb: #none !important;
    --elevation-low: none !important;
    --smallpopoutcolor1: rgb(242, 234, 234) !important;
    --smallpopoutcolor2: #ece1e1 !important;
    --spotify-color: #f4eaec !important;
    --user-buttons-color: #dac8c8 !important;
    --chat-buttons: #f4eaf0 !important;
    --text-link: #a08c8c !important;
    --CircleIconButton: #f4eaf0 !important;
    --DiscordDMButtonBG: #ac9292 !important;
    --DiscordDMButtonActive: #fff !important;
    --elevation-low: none !important;
    --CircleIconButtonBG: #ac9292 !important;
 }`;
    addStyleString(c);
}

//   ・゜ ♡   web code snippet for discord   ♡ ゜ ・
//         © middlepot.com  ꒰ ू´ ˘ ` ू ꒱