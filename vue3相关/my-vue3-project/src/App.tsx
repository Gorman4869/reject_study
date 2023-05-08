// export default function(){
//     return(<div>lalla</div>)
// }//直接返回一个渲染函数


//optionsAPI 写法
// import { defineComponent } from "vue";

// export default defineComponent({
//     data(){
//         return{
//             name:'Gorman'
//         }
//     },
//     render(){
//         return(<div>{this.name}</div>)
//     }
// })

//setup 写法
import { defineComponent ,ref} from "vue";
export default defineComponent({
    setup(){
        const flag = ref(false)
        //在vue的模板里 是会自动读取ref的value值的，
        //在tsx里需要手动加上value
        //v-if 不支持
        return ()=>(<div v-show={flag.value}>lalala</div>)
    }
})