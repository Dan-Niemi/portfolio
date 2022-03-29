let files = [
    "json/300x250.json",
    "json/300x50.json",
    "json/320x50.json",
    "json/160x600.json",
    "json/300x600.json",
    "json/728x90.json",
    // "KSjson/300x250.json",
    // "KSjson/300x50.json",
    // "KSjson/320x50.json",
    // "KSjson/160x600.json",
    // "KSjson/300x600.json",
    // "KSjson/728x90.json",
]

files.forEach(name => loadFileName(name))

function loadFileName(name) {
    let divName = name.substring(name.indexOf('/')+1, name.indexOf('.'));
    let width = divName.split('x')[0];
    let height = divName.split('x')[1];
    let newDiv = document.createElement('div');
    divName = renameDuplicates(divName)
    newDiv.id = divName;
    newDiv.className = 'ad'
    newDiv.style = `width: ${width}px; height: ${height}px`;

    let main = document.getElementById("main");
    main.appendChild(newDiv);

    lottie.loadAnimation({
        container: document.getElementById(divName),
        autoplay: true,
        loop: 2,
        renderer: 'svg',
        path: name,
        rendererSettings: {
            filterSize: {
                width: '300%',
                height: '300%',
                x: '-100%',
                y: '-100%',
            }
        }
    })
        .setSubframe(false)

}
function renameDuplicates(name,counter = 0){
    if (document.getElementById(`${name}-${counter}`)){
        counter ++
        return renameDuplicates(name,counter)
    } else {
        return `${name}-${counter}`
    }
}