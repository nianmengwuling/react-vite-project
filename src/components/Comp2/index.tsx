//import"@/components/Comp2/Comp2.scss" 全局引入，会导致样式污染
import styles from "./Comp2.module.scss" //模块化引入，类似于Vue的scoped

function Comp() {
    return (
        <div className={styles.box}>
            <p>这是组件2</p>
        </div>
    )
}

export default Comp