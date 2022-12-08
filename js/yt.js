//   ・゜ ♡   web code snippet for youtube   ♡ ゜ ・
//         © middlepot.com  ꒰ ू´ ˘ ` ू ꒱

//      last update :  2022 . november . 24

function addStyleString(str) {
    var node = document.createElement('style');
    node.innerHTML = str;
    document.body.appendChild(node);
}

if(window.location.host.includes('youtube.com')){
var link = document.querySelectorAll("link[rel*='icon']") || document.createElement('link');
for(var i = 0; i < link.length; ++i){
    link[i].type = 'image/x-icon';
    link[i].rel = 'icon';
    link[i].href = 'https://i.imgur.com/LQgjjNX.png';
    document.getElementsByTagName('head')[0].appendChild(link[i])
}
	var c = `
ytd-commentbox{
    display: block !important;
}

/*ytd-comments {
    display: none !important;
}*/


span.inline-metadata-item.style-scope.ytd-video-meta-block {
    display: none !important;
}
span.bold.style-scope.yt-formatted-string {
    display: none !important;
}
span.yt-core-attributed-string.yt-core-attributed-string--white-space-no-wrap {
    display: none !important;
}


    [aria-label='Sort comments'],
    [aria-label='Live Chat mode selection']{
        display: none !important;
        background-color: inherit !important;
        border: none !important;
        height: 0 !important;
        width: 0 !important;
    }
    
    [aria-label='Notifications']{
        display: none !important;
        background-color: inherit !important;
        border: none !important;
        height: 0 !important;
        width: 0 !important;
    }

/*yt-live-chat-renderer{
    display: none !important;
}*/

yt-formatted-string#text.style-scope.ytd-toggle-button-renderer.style-text{
    display: none !important;
}
yt-formatted-string#contextual-info.style-scope.ytd-engagement-panel-title-header-renderer{
    display: none !important;
}
yt-formatted-string#text.style-scope.ytd-button-renderer{
    display: none !important;
}

#stats{
    display: none !important;
}

yt-live-chat-text-message-renderer{
    display: none !important;
}

yt-live-chat-header-renderer{
    display: none !important;
}

yt-formatted-string.ytd-account-item-renderer[secondary]{
    display: none !important;
}

yt-formatted-string.ytd-channel-about-metadata-renderer[no-styles]{
    display: none !important;
}

#vote-info{
    display: none !important;
}

#vote-count-text{
    display: none !important;
}

yt-live-chat-viewer-engagement-message-renderer{
    display: none !important;
}

/*ytd-live-chat-frame{
    display: none !important;
}*/

ytd-comment-thread-renderer {
    display: none !important;
}

#thumbnail-attribution {
    display: none !important;
}

#count {
    display: none !important;
}

ytd-comment-action-buttons-renderer {
    display: none !important;
}


.iv-card-meta-info {
    display: none !important;
}

.ytp-videowall-still-info-author {
    display: none !important;
}

style-scope {
    display: none !important;
}

ytd-yoodle-renderer {
    display: none !important;
}

ytd-topbar-logo-renderer {
    display: none !important;
}

country-code {
    display: none !important;
}

.style-scope.ytd-badge-supported-renderer {
    display: none !important;
}


ytd-toggle-button-renderer.ytd-menu-renderer yt-formatted-string#text {
  display: none !important;
}

ytd-sentiment-bar-renderer#sentiment {
  display: none !important;
}

yt-formatted-string#subscriber-count {
    display: none !important;
}

yt-formatted-string#owner-sub-count {
    display: none !important;
}

div#metadata > span#subscribers {
    display: none !important;
}

@charset "utf-8";

#metadata-line span:first-child {
  display: none !important;
}


div#metadata-line span:first-child {
  display: none !important;
}

span.view-count {
  display: none !important;
}

div.view-count {
  display: none !important;
}

div.count {
  display: none !important;
}

ytd-video-view-count-renderer {
  display: none !important;
}

div#description-content span:first-child {
  display: none !important;
}


div#info-text div#count {
  display: none !important;
}

div#metadata-line span:first-child {
  display: none !important;
}

.html5-scrubber-button:hover, .ytp-scrubber-button:hover, .ytp-swatch-background-color, .ytp-swatch-background-color-secondary {
   background: #F3D2D2 !important;
}
.html5-play-progress, .ytp-play-progress {
   background: #F3D2D2 !important; 
}
.ytp-volume-slider-track, .ytp-volume-slider-handle:before {
   background: #F3D2D2 !important;
   z-index: -117;
}
.ytp-settings-button.ytp-hd-quality-badge::after, .ytp-settings-button.ytp-4k-quality-badge::after, .ytp-settings-button.ytp-5k-quality-badge::after, .ytp-settings-button.ytp-8k-quality-badge::after, .ytp-settings-button.ytp-3d-badge::after {
   background-color: #F3D2D2 !important;
}
.ytp-swatch-color {
   color: #F3D2D2 !important;
}
.ytp-menuitem[aria-checked="true"] .ytp-menuitem-toggle-checkbox {
   background: #F3D2D2 !important;
}
.ytp-chrome-controls .ytp-button.ytp-youtube-button:hover:not([aria-disabled="true"]):not([disabled]) .ytp-svg-fill-logo-tube-lozenge {
   fill: #F3D2D2 !important;
}
.ytp-cued-thumbnail-overlay:hover .ytp-large-play-button-bg, .ytp-large-play-button.ytp-touch-device .ytp-large-play-button-bg {
   fill: #F3D2D2 !important;
}
.resume-playback-progress-bar {
   background: #F3D2D2 !important;
}
.ytp-chrome-controls .ytp-button[aria-pressed]::after {
   background-color: #F3D2D2 !important;
}

html:after {
    padding: 5px;
    text-align: center;
    color: #fefbfb;
    font-size: 8px;
    font-family: verdana;
    display: block;
    text-transform: uppercase;
    position: fixed;
    margin: 0 auto;
    width: 100%;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0.2;
}
.ytd-page-manager,body.site-center-aligned{background: #fefbfb!important;background:#fefbfb url("https://i.imgur.com/mC48eyC.png") repeat !important;  }


::-webkit-scrollbar {
width: 6px;
height: 10px;
background: transparent;
}
::-webkit-scrollbar-thumb {
background-color: #fcf5f5;
-webkit-border-radius: 0ex;
border: 1px solid #e3cccc;
}
::selection { background: #f5e1e1; color: #fff; } ::-moz-selection { background: #f5e1e1; color: #fff; }
input:-webkit-autofill {-webkit-box-shadow: 0 0 0px 1000px #e3cccc inset!important;-webkit-animation-name: autofill;-webkit-animation-fill-mode: both;border-color: #9F918E !important;}
@-webkit-keyframes autofill {to {color: #e3cccc;border-color: #9F918E !important;}}



html:before{color: #C3B2AE !important;}

#subscribers,.ytd-video-report-action-result-renderer,.yt-options-renderer,#content-text,.line-text,.yt-sharing-renderer,.ytd-menu-navigation-item-renderer,#vote-count,#textarea,.paper-input,.ytd-menu-service-item-renderer,#channel-title,.date,#search,#video-title,.description,#label,.title{color: #A69491 !important;}

#result-count,.ytd-report-form-renderer,.ytd-sharing-embed-renderer,#simplebox-placeholder,#icon-label,.ytd-toggle-menu-service-item-renderer,#message,.content,#description,.message.ytd-notification-renderer,.ghp-iconTextComponent-label,#email{color: #9A8C8A !important;}

#video-count,#guide-section-title,.content-text,#embed-label,#upnext,.count-text,.ytd-channel-about-metadata-renderer,#title,#subscriber-count,#byline,#content,.view-count,.yt-simple-endpoint,#account-name{color: #7F726F !important;}

.ytd-report-form-details-sub-view-renderer,#text,#icon-label,.tab-content,#metadata-line span,.less-button,.more-button,.ytd-video-meta-block,#author-name{color: #9A8C8A !important;}


svg:hover {fill: #938384;}
svg {fill: #938384;}




.sbqs_c{color: #AFA09C !important;}
.sbqs_c b{color: #C2B3AF !important;}

.sbdd_b,.sbsb_a{background-color: rgba(237,216,216,0.1)!important;border-color: #D7C5C1 !important;
}

.sbsb_d{background-color: rgba(116, 101, 99, 0.33) !important;}






html {
    background-image: url(https://i.imgur.com/nOaOAfg.jpg) !important;
     background: transparent !important;   
    background-repeat: no-repeat !important;
    background-attachment: fixed !important;
}


#like-bar.ytd-sentiment-bar-renderer{background-color: #DCC9CB !important;}



.ytd-video-secondary-info-renderer,.ytd-watch,.ytd-app,.ytd-app,.yt-multi-page-menu-section-renderer{background-color: transparent !important;}

b,::before,h3,header,i,button,footer,label,td,table,div,body,html,a,li,ui,ul,span{text-shadow: 0 0 0 !important;}

::before,h3,header,i,button,footer,label,td,table,div,body,html,a,li,ui,ul,span{-webkit-box-shadow: 0 0 0 !important;box-shadow: 0 0 0 !important;}

.yt-live-chat-text-message-renderer{background-color: transparent !important;background-image: -moz-linear-gradient(top, #F7DDDD, #F7E1E1) !important;background-image: -webkit-gradient(linear, 0 0, 0 100%, from(rgba(0,0,0,0)), to(rgba(0,0,0,0))) !important;background-image: -webkit-linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0)) !important;background-image: -o-linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0)) !important;background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0)) !important;}




#container.ytd-searchbox{background: #fcf5f5 !important;color: #E4D1D1 !important;border-color: #E4D1D1 !important;
}

::-webkit-input-placeholder {color: #C8BBB8 !important;}
:-moz-placeholder { /* Firefox 18- */
   color: #C8BBB8 !important;}
::-moz-placeholder {  /* Firefox 19+ */
	color: #C8BBB8 !important;}
:-ms-input-placeholder {color: #C8BBB8 !important;}



.ytd-subscribe-button-renderer,#endpoint.yt-simple-endpoint.ytd-guide-entry-renderer:hover,.yt-next-continuation:hover{background-color:#fcf5f5!important; border-color: #fcefef!important;border-bottom-color: #DACBC9!important;color: #807574 !important;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}


.yt-next-continuation,.ghp-button:not(:disabled):hover,.ghp-iconTextComponent:hover{border-color: #FFFCF4!important;border-bottom-color: #fcf5f5!important;color: #A29391 !important;background-color: #CCBBB9 !important;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

#button,.creator:hover,.ytd-subscribe-button-renderer:hover,#search-icon-legacy{border-color: #E4D1D1!important;border-bottom-color: #E4D1D1!important;color: #fcf5f5 !important;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}


#button:hover,.creator,#search-icon-legacy:hover{border-color: #E4D1D1!important;border-bottom-color: #E4D1D1!important;color: #FFF2F2 !important;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}



.header.ytd-playlist-panel-renderer,ytd-alert-with-button-renderer[is-displayed],#header.ytd-app,#tabs-inner-container,.yt-live-chat-message-input-renderer-0,.yt-live-chat-header-renderer-0,.ghp-header,#yt-masthead-container,.ytd-multi-page-menu-renderer,.dropdown-content,a.ytd-active-account-header-renderer,#guide-renderer{border-color: #9D8F8F!important;background:#fcf7f7!important;
color: #CFBABA!important;}

.playlist-items.ytd-playlist-panel-renderer,#embed-panel,.ytd-popup-container,.ghp-dialog{border: 1px solid #fcf7f7!important;background:#fcf7f7!important;}

html:not([style-scope]):not(.style-scope),#channel-header{border-color: #fcf7f7!important;background: #fcf7f7!important;}

paper-dialog-scrollable.is-scrolled:not(:first-child)::before,paper-dialog-scrollable.is-scrolled:not(:first-child)::after,#buttons.ytd-form-popup-renderer,.ytd-menu-popup-renderer{background: #fcf7f7!important;}

a.ytd-menu-navigation-item-renderer:hover,#unfocused,.yt-live-chat-text-message-renderer-0{background: #fcf7f7!important;}

.focused-line,.unfocused-line{background:#fcf7f7!important;}


#primary.ytd-two-column-search-results-renderer,#main.ytd-watch,.ytd-browse,#primary-links.ytd-c4-tabbed-header-renderer, #secondary-links.ytd-c4-tabbed-header-renderer {background-color: rgba(250,242,242,0.1)!important;}
 #tabs-inner-container, .yt-horizontal-list-renderer *, #footer-container, #footer, #footer-main, #footer-links, #top, #primary, .live-chat-expander, #chat-messages, .yt-live-chat-renderer, #hide-live-comments, #commentbox #main #footer, #sponsor-button ytd-button-renderer, #embed-layout-options, ytd-playlist-sidebar-renderer #items, .branded-page-v2-container, .ytp-cards-teaser-box, .iv-card-content, .comment-section-sort-menu, .ytp-upnext-top, .yt-masthead-creation-clickcard > .yt-uix-clickcard-card-border
  {
    background: rgba(250,242,242,0.7) !important;
  }

  a.yt-uix-sessionlink, .ytd-subscribe-button-renderer, ytd-playlist-sidebar-renderer, ytd-two-column-browse-results-renderer, #comments ytd-item-section-renderer #header, #dismissable #contents *, #page-container #content, .ytd-playlist-panel-renderer, #player, #player-container, ytd-c4-tabbed-header-renderer, .ytd-c4-tabbed-header-renderer, ytd-c4-tabbed-header-renderer app-header-layout, #movie_player, #like-button a #button[is="paper-icon-button-light"] *, #dislike-button a #button[is="paper-icon-button-light"] *, #top-level-buttons ytd-toggle-button-renderer a #button[is="paper-icon-button-light"] *, #top-level-buttons ytd-button-renderer a #button[is="paper-icon-button-light"] *, #guide-button *, .yt-next-continuation, #guide *, #masthead-container *, #body-container #page-container #content .branded-page-v2-container-flex-width *, #theater-background, #masthead-search *, #masthead-appbar, #yt-uix-clickcard-card1287 *, .comment-section-sort-menu *, #watch7-sidebar *, #placeholder-player div, #non-appbar-vm-video-actions-bar *, .vm-video-item-content, .live-dashboard-status-bar, .live-dashboard-status-bar-container, .video-settings-title, .video-settings-description, .detail-message, .yt-uix-dragdrop-drag-handle, .tabs-area *, .subscribers-header .sort-menu *, .comment-settings-header, .C2KYWWB-b-c, .C2KYWWB-b-n, #contentTable, #analyticsCard, .C2KYWWB-b-d, #gwt-debug-topEntity *, .C2KYWWB-P-j, #gwt-debug-demographicsGroup, .C2KYWWB-a-a, .C2KYWWB-P-h, #gwt-debug-performanceGroup, .C2KYWWB-a-a, .C2KYWWB-P-D, .channel-header, .yt-uix-subscription-button, .yt-uix-subscription-preferences-button, .ytp-ce-subscribe-container *, .comment-simplebox-text, a[is="yt-endpoint"] #channel-container, a[is="yt-endpoint"] #channel-container *, .player-controls-card .card-content *, .ytp-ce-channel-metadata, #vm-search-container *, .ytd-unlimited-manage-subscription-page-renderer, .dropdown-content[slot="dropdown-content"] *, .metadata-container[role="tabpanel"], span.yt-uix-form-input-container.yt-uix-form-input-textarea-container, #container #sections,  iron-dropdown #container #sections *, ytd-browse[page-subtype="playlist"] #alerts, #columns, #offer-module #header, #offer-module #contents, .ytd-banner-promo-renderer-background, .ytp-transparent .html5-main-video
  {
    background-color: rgba(250,242,242,0.08) !important;
    z-index: 0;
  }



ytd-shelf-renderer.ytd-item-section-renderer,ytd-playlist-sidebar-primary-info-renderer,ytd-report-form-renderer,#guide-links-primary,.ytd-app,.buttons.yt-confirm-dialog-renderer,#additional-info,#action-buttons,#title-bar,#start-at-wrapper,#share-target-wrapper,.ytd-watch-next-secondary-results-renderer,#buttons.ytd-form-popup-renderer,.ytd-channel-about-metadata-renderer,.ytd-browse-secondary-contents-renderer,#placeholder-area.ytd-comment-simplebox-renderer,#unfocused,#underline,.ytd-watch,.ytd-section-list-renderer,.ghp-separator,.ghp-searchResults .ghp-iconTextComponent-label,.ytd-multi-page-menu-renderer,.ytd-guide-renderer{border-color: #EED0D0 !important;}

#primary.ytd-two-column-search-results-renderer,.ytd-browse,#main.ytd-watch{border: 1px dotted #e3cccc !important;}


#logo-icon.ytd-topbar-logo-renderer #youtube-paths path {
    fill: var(--yt-swatch-logo-override, #e3cccc) !important;
}


#guide-renderer{background: #fefbfb!important;  }

#guide-inner-content.ytd-app{border-right: 0px dotted #e3cccc !important;}

#container.ytd-masthead {
    background:#fcf7f7!important;
    border-bottom: 0px dotted #e3cccc!important;
}`;
    addStyleString(c);
}

//   ・゜ ♡   web code snippet for youtube   ♡ ゜ ・
//         © middlepot.com  ꒰ ू´ ˘ ` ू ꒱