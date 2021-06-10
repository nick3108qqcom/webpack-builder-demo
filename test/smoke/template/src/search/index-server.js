const React = require('react');
const rightArrow = require('./images/r.png');
require('./search.less')

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
    const { Text } = this.state
    return <div className="search-text">Search Text
      <img src={rightArrow} />
      <button onClick={this.onClick.bind(this)}>动态加载 js</button>
      {Text ? <Text /> : null}
    </div>
  }
}

module.exports = <Search />