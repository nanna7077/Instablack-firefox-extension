var style=document.createElement('style');
style.innerHTML=`  iframe, img, video, html {
    -webkit-filter: invert() hue-rotate(180deg) brightness(105%) contrast(105%);
}
.cq2ai {
    -webkit-filter: invert() hue-rotate(180deg) brightness(105%) contrast(105%);
};
`;
document.head.appendChild(style);