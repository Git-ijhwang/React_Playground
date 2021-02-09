import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: 'Daniel',
        phone: '920-111-1111'
      },
      {
        id: 1,
        name: 'Charlotte',
        phone: '920-222-2222'
      },
    ],
    keyword: ''
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id:this.id++, ...data})
    })
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info=>info.id != id)
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information : information.map(info => info.id === id ? {...info, ...data} : info)
    })
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }

  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );

    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />

        <p>
          <input
            placeholder="input the name to find"
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <hr/>
        <PhoneInfoList
          // data={information}
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
        {/* {JSON.stringify(information)} */}
      </div>
    );
  }
}

export default App;
