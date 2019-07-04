import React, { PureComponent } from 'react'
import { myTest } from '@/api/login'

class Tables extends PureComponent {
  componentDidMount() {
     myTest().then(res => {
      console.log(res)
    })
  }
  render() {
    return <div>练习生</div>
  }
}

export default Tables
