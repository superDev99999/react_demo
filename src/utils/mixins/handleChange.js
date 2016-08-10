/**
 * React不像Angular/Vue等具备双向绑定能力
 * 因此需要手动监听change事件同步state
 * P.S: 这里需要表单元素具备对应的name属性
 * 可使用成熟的redux-form(https://github.com/erikras/redux-form)替代
 * @param  {DOM Event} evt
 *
 * 使用例子：
 * 例子1：直接使用
 * <input
 *   type="text"
 *   name="myInput" // 一定要有name属性
 *   onClick={handleChange.bind(this)} // 绑定this到所属的组件
 *   value={this.state.myInput} /> // value值同步state
 *
 * 例子2：使用::绑定（例子1的语法糖）
 * onClick={this::handleChange}
 *
 * 例子3：在构造函数中声明（推荐，避免每次render都重复绑定）
 * constructor (props) {
 *   super(props)
 *   this.handleChange = handleChange.bind(this)
 * }
 * 之后就可以这样写了
 * onClick={this.handleChange}
 */
export default function handleChange(evt) {
  this.setState({
    [evt.target.name]: evt.target.value.trim()
  })
}
