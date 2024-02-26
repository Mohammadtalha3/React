// function customrender(reactElement,container){
//     const domElement= document.createElement(reactElement.type);
//     domElement.innerHTML= reactElement.childern
//     domElement.setAttribute('herf',reactElement.props.href)
//     domElement.setAttribute('target', reactElement.props.target)

//     container.appendChild(domElement)
// }/* as this code is repeative so lets make ir better*/

function customrender(reactElement,container){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childern

    for(prop in reactElement.props){
        if (prop==='childern')continue;
        domElement.setAttribute(props, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement={
    type: 'a',
    props: {
        href:'http://www.google.com',
        target: '_blank'
    },
    childern: 'click me to visit  google'
}

const maincontainer = document.querySelector('#root')

customrender(reactElement,maincontainer)