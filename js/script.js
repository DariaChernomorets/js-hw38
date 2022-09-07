// (function () {
//     'use strict'
//
//     const generateList = array => {
//         const ul = document.createElement('ul')
//
//         array.forEach(elem => {
//             const li = document.createElement('li');
//             if (!Array.isArray(elem)) {
//                 li.innerText = elem;
//             } else {
//                 li.appendChild(generateList(elem));
//             }
//             ul.appendChild(li)
//         })
//         return document.body.appendChild(ul)
//     }
//     generateList( [1,2, [1.1,1.2,1.3] ,3])
// })()

(function () {
    'use strict'
const data = [1,2, [1.1, 1.2, 1.3] ,3];
    const generateList2 = array => {

        const ul = document.createElement('ul')

        for ( let i = 0; i <array.length; i +=1 ) {
            const li = document.createElement('li');

            if (Array.isArray(array[i])){
                li.append(generateList2(array[i]))

            } else {
                li.innerHTML = array[i];
            }

           ul.append(li)
        }


     return ul;
    }

    const list = generateList2(data)
    document.body.append(list)
})()