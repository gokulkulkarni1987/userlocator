import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import {
  fetchUsers
} from '../actions/UserActions';
import UserDetials from '../../common/UserDetials';

class ListUserScreen extends Component {

  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  static navigationOptions = {
    drawerLabel: 'Users',
  };

  renderItem({ item }) {
    return (
      <UserDetials
        key={item.id}
        user={item}
      />
    );
  }
  
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.users}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return { ...users };
}

export default connect(mapStateToProps, {
  fetchUsers
})(ListUserScreen);