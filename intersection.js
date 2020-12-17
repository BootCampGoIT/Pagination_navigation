const options = {
}

function onObserve(props) {
    props.forEach(({ isIntersecting, target }) => {
        if (isIntersecting) {
            console.log(target)
            const arr = target.querySelectorAll('.title');
            arr.forEach(item => {
                item.classList.add('activeTitle');
                observer.unobserve(target);
            })

        };
        if (!isIntersecting) {
            const arr = target.querySelectorAll('.title');
            arr.forEach(item => {
                item.classList.remove('activeTitle')
            })
        };
    })
}


const observer = new IntersectionObserver(onObserve, options);

const mainBlock = document.querySelector('.mainBlock');

mainBlock.querySelectorAll('section')
    .forEach(section => {
        observer.observe(section);
    })


const object = {
    name: "Alex",
    age: 14,
    dfdsfsd: 34,
    dgsghgf: 43242,
    fsdfsdfsdf: 6545654
}
console.log(object)


const keys = Object.keys(object); //['name', 'age']
console.log(keys);

const setDefault = (obj) => {
    for (const key of keys) {
        obj[key] = ''
    }
}

setDefault(object);
console.log(object);




