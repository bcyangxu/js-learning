import { ref,isRef,unref,watchEffect } from "vue"

export function useFetch(url) {
    const data = ref(null)
    const error = ref(null)

    function doFetch() {
        // 请求之前重置状态
        data.value = null
        error.value = null
        // unref() 解包可能为ref的值
        fetch(unref(url))
            .then((res) => res.json())
            .then((json) => (data.value = json))
            .catch((err) => (error.value = err))
    }
    if (isRef(url)) {
        // 若输入的url是一个ref，那么自动一个响应式请求
        watchEffect(doFetch)
    }else {
        // 否则只请求一次
        doFetch()
    }
    
    return { data,error }
}