/**
 * Created by chengyuan on 2017/3/11.
 */
/**
 * Created by chengyuan on 2017/3/5.
 */

import React, { Component } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'dva/mobile';
import { List, Toast } from 'antd-mobile';
import Common from '../../common/index';
const Item = List.Item;
const {MyIcon} = Common;

class PersonSet extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    componentWillMount() {
        this.props.dispatch({type: 'user/queryWithdrawPwd'});
    }

    render(){
        return (
            <View style={styles.container}>
                <List>
                    <Item
                        thumb={MyIcon('#FDA951','ios-apps')}
                        arrow="horizontal"
                        onClick={Actions.setWithdrawPwd}
                    >提现密码</Item>
                    <Item
                        thumb={MyIcon('#5BBEF8','md-cog')}
                        arrow="horizontal"
                        onClick={Actions.setLoginPwd}
                    >修改密码</Item>
                    <Item
                        thumb={MyIcon('#CE6C87','ios-briefcase')}
                        arrow="horizontal"
                        onClick={Actions.bindBank}
                    >绑定银行卡</Item>
                    <Item style={{backgroundColor: '#F5F5F9', height: 20}}/>
                    <Item
                        thumb={MyIcon('gray','ios-cloud-download')}
                        arrow="horizontal"
                        onClick={()=>{
                            Alert.alert('','确定退出登录吗?',[
                              {text: '取消', onPress: () => console.log('OK Pressed!')},
                              {text: '确定', onPress: () => {
                                this.props.dispatch({type: 'user/loginOut',callback:()=>{
                                    Actions.pop();
                                }});
                              }},
                            ])
                        }}
                    >退出登录</Item>
                </List>
            </View>
        )
    }
}

const pageHeight = Common.window.height;

const styles = StyleSheet.create({
    container: {
        width: Common.window.width,
        height: pageHeight,
        backgroundColor: '#F5F5F9',
        paddingTop: 65,
    },
});

const mapStateToProps = (user) => {
    return {user};
};

export default connect(mapStateToProps)(PersonSet);

