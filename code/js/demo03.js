console.log('同步任务1')

setTimeout(() => {
    console.log('异步任务1')
},1000)
setTimeout(() => {
    console.log('异步任务2')
})
console.log('同步任务2')
sleep(5000)