import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import rightArrow from './images/r.png';
import { common } from '../../common';
import { a } from './treeShaking'
import largeNuber from 'large-number-ly'

class Search extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      Text: null
    }
  }

  onClick() {
    import('./text.js')
      .then(Text => {
        this.setState({
          Text: Text.default
        })
      })
  }

  render() {
    // console.log(common())
    // console.log(a())
    console.log(largeNuber('999','1'))
    const { Text } = this.state
    return <div className="search-text">Search Text
      <img src={rightArrow} />
      <button onClick={this.onClick.bind(this)}>动态加载 js</button>
      {Text ? <Text /> : null}
    </div>
  }
}

ReactDOM.render(<Search />, document.querySelector('.root'))