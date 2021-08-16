1. const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

2. const findMin = (..args) => Math.min(...args)

3. const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

4. const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)]

5. const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

6. const extend = (array1, array2) => {
    return [...array1, ...array2];
}

7. const addKeyVal = (obj,key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}

8. const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}

9. const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2};
} 

10. const update = (obj, key, val) => {
    
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}

///code adapted by: http://curric.rithmschool.com/springboard/exercises/js-rest-spread/solution/index.html