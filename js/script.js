(function () {
    'use strict'

    const generateList = array => {
        const ul = document.createElement('ul')

        array.forEach(elem => {
            const li = document.createElement('li');
            if (!Array.isArray(elem)) {
                li.innerText = elem;
            } else {
                li.appendChild(generateList(elem));
            }
            ul.appendChild(li)
        })
        return document.body.appendChild(ul)
    }
    generateList( [1,2, [1.1,1.2,1.3] ,3])
})()
