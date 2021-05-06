const rgbToHex = (...channels) => {
    console.log('chamou')
    return `#${channels.map(channel => channel.toString(16)).join('')}`
}

function memo (fn) {
    const cache = new Map
    return function (...args) {
        const key = JSON.stringify(args)

        if (!cache.has(key)) {
            cache.set(key, fn(...args))
        }

        return cache.get(key)
    }
}

const rgbToHexMemo = memo(rgbToHex)

console.log(rgbToHexMemo(255, 30, 132))
console.log(rgbToHexMemo(255, 30, 132))
console.log(rgbToHexMemo(255, 30, 132))
console.log(rgbToHexMemo(255, 30, 132))
console.log(rgbToHexMemo(255, 30, 132))
console.log(rgbToHexMemo(255, 30, 132))
console.log(rgbToHexMemo(255, 30, 132))
console.log(rgbToHexMemo(255, 30, 132))