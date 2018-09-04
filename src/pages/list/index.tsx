// import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { TopicsList } from '../../components/topics/index'
import Header from '../../components/header/index'

import { ITopic } from "../../interfaces/topic";


import './index.scss'

// interface IProps {
//   props: IProps;
// }


interface IState {
  scroll: boolean,
  loading: boolean,
  topics: ITopic[]
}


class List extends Component<{}, IState> {

  /**
 * 指定config的类型声明为: Taro.Config
 *
 * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
 * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
 * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
 */
  config: Config = {
    navigationBarTitleText: '全部'
  };

  state = {
    scroll: true,
    topics: [],
    index: {},
    searchKey: {
      page: 1,
      limit: 20,
      tab: 'all',
      mdrender: true
    },
    loading: true,
    searchDataStr: ''
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {
  }
  componentDidShow() {
    console.info(this);
    if(this.$router.params && this.$router.params.tab) {
      this.setState(prevstate => {
        searchKey: Object.assign(prevstate.searchKey, {tab: this.$router.params.tab})
      }, ()=>{
        this.getTopics();
      })
      return;
    }
    this.getTopics();

  }
  componentDidHide() { }
  getTitleStr(tab) {
    let str = '';
    switch (tab) {
      case 'share':
        str = '分享';
        break;
      case 'ask':
        str = '问答';
        break;
      case 'job':
        str = '招聘';
        break;
      case 'good':
        str = '精华';
        break;
      default:
        str = '全部';
        break;
    }
    return str;
  }

  getTopics() {
    let params = this.state.searchKey;
    try {
      Taro.request(
        {
          url: "https://cnodejs.org/api/v1/topics",
          data: params
        }
      ).then(res => {
        let data = res.data;
        this.setState({
          scroll: true,
          loading: false
        })
        if (data && data.data) {
          this.setState(prevState => ({
            topics: data.data
          }));

          // data.data.forEach(this.mergeTopics, this);
        }
      });
    } catch (error) {
      Taro.showToast({
        title: '载入远程数据错误'
      })
    }

  }
  mergeTopics(topic, index) {

    // if (typeof this.state.index[topic.id] === 'number') {
    //   const topicsIndex: any = this.state.index[topic.id];
    //   let topics = this.state.topics;
    //   topics[topicsIndex] = topic;
    //   this.setState({ topics: topics });
    // } else {
    //   this.state.index[topic.id] = index;
    //   this.setState(prevState => ({
    //     topics: [...prevState.topics, topic]
    //   }));
    // }
  }
  render() {
    const { searchKey, topics, loading  } = this.state;
    return (
      <View className="flex-wrp" >
        <Header pageType={this.getTitleStr(searchKey.tab)} fixHead={true} needAdd={true} ></Header>
        <View id="page">
          <View className='posts-list'>
            <TopicsList
              topics={topics}
              loading={loading}
            />
          </View>
      </View>
      </View>

    )
  }
}

export default List
